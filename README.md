# E.E.S.T. N°6 "Chacabuco" — Sitio Web Institucional

Sitio web completo para la Escuela de Educación Secundaria Técnica N°6 "Chacabuco" de Morón, Buenos Aires.

## Stack

| Tecnología       | Uso                                     |
|------------------|-----------------------------------------|
| Next.js 14       | Framework React con App Router          |
| TypeScript       | Tipado estático                         |
| Tailwind CSS     | Estilos utilitarios                     |
| Framer Motion    | Animaciones y transiciones              |
| Supabase         | Base de datos y backend para contenido dinámico |

## Paleta de colores

| Variable    | Hex       | Uso                                    |
|-------------|-----------|----------------------------------------|
| Primary     | `#111111` | Navbar, fondo oscuro, elementos UI     |
| Secondary   | `#E53935` | Botones, CTAs, acentos principales     |
| Accent      | `#B71C1C` | Hover states, highlights               |
| Background  | `#F5F5F5` | Fondo de página                        |
| Surface     | `#FFFFFF` | Cards, contenedores                    |
| Text dark   | `#111111` | Títulos y textos principales           |
| Text muted  | `#555555` | Texto secundario y descripciones       |

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── layout.tsx                  # Layout raíz + SEO
│   ├── globals.css                 # Estilos globales
│   ├── institucional/              # Historia, misión, autoridades
│   ├── oferta-academica/           # Ciclo básico + especialidades
│   │   └── [slug]/                 # Detalle de cada especialidad
│   ├── noticias/                   # Listado + artículo detalle
│   │   └── [slug]/
│   ├── personal/                   # Directorio de personal docente
│   ├── descargas/                  # Documentos y circulares
│   ├── contacto/                   # Formulario + mapa
│   ├── admin/                      # Panel de administración (protegido)
│   └── api/contact/                # API Route para el formulario
├── components/
│   ├── layout/
│   │   ├── FloatingNav.tsx         # Navegación pill flotante vertical
│   │   ├── Navbar.tsx              # Barra superior con logo
│   │   └── Footer.tsx              # Footer completo
│   ├── home/
│   │   ├── HeroSection.tsx         # Hero con escudo animado
│   │   ├── QuickLinks.tsx          # Accesos rápidos
│   │   ├── SpecialtiesSection.tsx  # Tarjetas de especialidades
│   │   ├── NewsSection.tsx         # Últimas noticias
│   │   ├── AboutBanner.tsx         # Sección institucional
│   │   └── ContactBanner.tsx       # CTA de contacto
│   └── shared/
│       ├── SectionHeader.tsx       # Cabecera de sección reutilizable
│       ├── NewsCard.tsx            # Tarjeta de noticia
│       └── SpecialtyCard.tsx       # Tarjeta de especialidad
├── lib/
│   ├── supabase.ts                 # Cliente Supabase
│   ├── utils.ts                    # Funciones utilitarias
│   └── data.ts                     # Datos estáticos del colegio
└── types/
    └── index.ts                    # Tipos TypeScript
public/
└── logo.png                        # Escudo del colegio
supabase/
└── schema.sql                      # Esquema y seed data de la base de datos
```

## Configuración

### 1. Clonar e instalar

```bash
git clone <repo>
cd chacabuco-escuela
npm install
```

### 2. Variables de entorno

Copiá el archivo de ejemplo:

```bash
cp .env.local.example .env.local
```

Completá con tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...
SUPABASE_SERVICE_ROLE_KEY=eyJhb...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_PASSWORD=tu_contraseña_admin
```

### 3. Base de datos Supabase

1. Creá un proyecto en [supabase.com](https://supabase.com)
2. Abrí el **SQL Editor** del proyecto
3. Copiá y ejecutá el contenido de `supabase/schema.sql`

Esto crea las tablas: `news`, `staff`, `documents`, `contact_messages`, `events`, con RLS habilitado y datos de ejemplo.

### 4. Ejecutar en desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

### 5. Build para producción

```bash
npm run build
npm start
```

## Panel de administración

Accedé a `/admin` con la contraseña configurada en `NEXT_PUBLIC_ADMIN_PASSWORD`.

Desde el panel podés:
- ✏️ **Crear / editar / eliminar noticias**
- 👥 **Gestionar personal docente**
- 📥 **Agregar documentos descargables**
- 💬 **Ver mensajes de contacto recibidos**

## Despliegue en Vercel

```bash
npm i -g vercel
vercel
```

O conectá el repositorio en [vercel.com](https://vercel.com) y configurá las variables de entorno desde el dashboard.

## Páginas incluidas

| Ruta                        | Descripción                              |
|-----------------------------|------------------------------------------|
| `/`                         | Inicio con hero, especialidades, noticias|
| `/institucional`            | Historia, misión/visión, autoridades     |
| `/oferta-academica`         | Ciclo básico + 4 especialidades          |
| `/oferta-academica/[slug]`  | Detalle con plan de estudios completo    |
| `/noticias`                 | Noticias del colegio (Supabase)          |
| `/noticias/[slug]`          | Artículo individual                      |
| `/personal`                 | Directorio docente (Supabase)            |
| `/descargas`                | Documentos y circulares (Supabase)       |
| `/contacto`                 | Formulario + mapa Google Maps            |
| `/admin`                    | Panel administrativo (contraseña)        |

## Datos del colegio

Toda la información institucional real está en `src/lib/data.ts`:
- Plan de estudios completo de las 4 especialidades (4° a 7° año)
- Materias y horas del ciclo básico (1° a 3° año)
- Talleres del ciclo básico
- Datos de contacto, emails y horarios

---

**E.E.S.T. N°6 "Chacabuco"** · Av. Rivadavia 17337, Morón, Buenos Aires · DGCyE PBA
