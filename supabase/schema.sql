-- ============================================================
-- E.E.S.T. N°6 "Chacabuco" — Supabase Schema
-- Run this SQL in your Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── NEWS ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS news (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title        TEXT NOT NULL,
  slug         TEXT NOT NULL UNIQUE,
  excerpt      TEXT NOT NULL,
  content      TEXT,
  category     TEXT NOT NULL DEFAULT 'General',
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  featured     BOOLEAN NOT NULL DEFAULT FALSE,
  image_url    TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_news_published ON news (published_at DESC);
CREATE INDEX idx_news_slug ON news (slug);
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read news" ON news FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated write news" ON news FOR ALL USING (auth.role() = 'authenticated');

-- ── STAFF ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS staff (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name   TEXT NOT NULL,
  role        TEXT NOT NULL,
  department  TEXT NOT NULL DEFAULT 'General',
  email       TEXT,
  bio         TEXT,
  photo_url   TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_staff_order ON staff (order_index ASC);
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read staff" ON staff FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated write staff" ON staff FOR ALL USING (auth.role() = 'authenticated');

-- ── DOCUMENTS ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS documents (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title        TEXT NOT NULL,
  description  TEXT,
  category     TEXT NOT NULL DEFAULT 'Otros',
  file_url     TEXT NOT NULL,
  file_size    TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_documents_published ON documents (published_at DESC);
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read documents" ON documents FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated write documents" ON documents FOR ALL USING (auth.role() = 'authenticated');

-- ── CONTACT MESSAGES ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  subject    TEXT NOT NULL,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert messages" ON contact_messages FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Authenticated read messages" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');

-- ── EVENTS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS events (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date  DATE NOT NULL,
  event_time  TEXT,
  location    TEXT,
  category    TEXT NOT NULL DEFAULT 'General',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_events_date ON events (event_date DESC);
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read events" ON events FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated write events" ON events FOR ALL USING (auth.role() = 'authenticated');

-- ── SEED DATA ───────────────────────────────────────────────
INSERT INTO news (title, slug, excerpt, content, category, featured, published_at) VALUES
(
  'Inscripciones abiertas para el ciclo lectivo 2025',
  'inscripciones-2025',
  'Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025.',
  '<h2>Inscripciones 2025</h2><p>Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025.</p><h3>Documentación requerida</h3><ul><li>Certificado analítico de primaria</li><li>DNI original y fotocopia</li><li>Dos fotos carnet 4x4</li><li>Partida de nacimiento</li></ul>',
  'Ingresantes', TRUE, NOW() - INTERVAL '5 days'
),
(
  'Proyecto de Programación obtiene primer lugar en concurso provincial',
  'proyecto-programacion-2024',
  'Alumnos de 7° año de Programación representaron a la institución en el concurso de innovación tecnológica educativa, obteniendo el primer lugar.',
  '<p>Con gran orgullo anunciamos que un grupo de alumnos de 7° año de la especialidad Programación obtuvo el primer puesto en el concurso provincial de innovación tecnológica educativa.</p>',
  'Académico', FALSE, NOW() - INTERVAL '15 days'
),
(
  'Acto de colación de grado — Egresados Promoción 2024',
  'colacion-grado-2024',
  'La institución celebró el acto de cierre del año lectivo con la entrega de títulos a los egresados de las cuatro especialidades técnicas.',
  '<p>Con gran emoción se llevó a cabo el acto de colación de grado para los egresados de la Promoción 2024.</p>',
  'Institucional', FALSE, NOW() - INTERVAL '10 days'
);

INSERT INTO staff (full_name, role, department, email, order_index) VALUES
('Dirección',          'Director/a',          'Conducción', 'tecnica6moron@abc.gob.ar',  1),
('Vicedirección',      'Vicedirector/a',       'Conducción', 'tecnica6moron@abc.gob.ar',  2),
('Secretaría Académica','Secretario/a',        'Secretaría', 'chacabucot6s@gmail.com',    3),
('Regencia',           'Regente',             'Regencia',   'chacabucot6@gmail.com',     4);

INSERT INTO documents (title, description, category, file_url, file_size) VALUES
('Reglamento de convivencia escolar',   'Normas de convivencia vigentes.',                       'Reglamentos', '#', '245 KB'),
('Solicitud de pase de especialidad',   'Formulario para cambio de especialidad.',                'Formularios', '#', '120 KB'),
('Calendario escolar 2025',             'Calendario oficial del ciclo lectivo 2025.',             'Calendarios', '#', '380 KB'),
('Circular N°1 — Inicio de clases',     'Información importante para el inicio del ciclo 2025.', 'Circulares',  '#', '210 KB');
