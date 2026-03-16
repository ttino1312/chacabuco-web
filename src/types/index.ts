export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published_at: string;
  image_url?: string;
  featured: boolean;
  created_at: string;
}

export interface StaffMember {
  id: string;
  full_name: string;
  role: string;
  department: string;
  email?: string;
  bio?: string;
  photo_url?: string;
  order_index: number;
  created_at: string;
}

export interface Document {
  id: string;
  title: string;
  description?: string;
  category: string;
  file_url: string;
  file_size?: string;
  published_at: string;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_time?: string;
  location?: string;
  category: string;
  created_at: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface Specialty {
  id: string;
  name: string;
  slug: string;
  description: string;
  profile: string;
  icon: string;
  color: string;
  years: SpecialtyYear[];
}

export interface SpecialtyYear {
  year: number;
  label: string;
  subjects: SubjectGroup[];
  total_hours: number;
}

export interface SubjectGroup {
  group: string;
  subjects: Subject[];
  total_hours: number;
}

export interface Subject {
  name: string;
  hours: number;
}
