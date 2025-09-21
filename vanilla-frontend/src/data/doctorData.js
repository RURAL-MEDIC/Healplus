// src/data/doctorData.js

export const GENERAL_DOCTORS = [
   {
    id: 1,
    name: "Dr. John Doe",
    role: "General Physician",
    qualification: "MBBS, MD",
    experience: "10 years",
    about: "Dr. John Doe has over 10 years of experience treating common illnesses, preventive care, and wellness checkups.",
    image: "../assets/user-solid-full.svg   ", // you can use your existing profileIcon or unique images
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "General Physician",
    qualification: "MBBS",
    experience: "6 years",
    about: "Specializes in internal medicine and family health.",
    image: "/assets/doctor2.png",
  },
  { id: "g-3", name: "Ali Khan", role: "General Practitioner", bio: "Primary care and preventive medicine." },
  { id: "g-4", name: "Maria Lee", role: "General Practitioner", bio: "Focus on rural healthcare." },
  { id: "g-5", name: "Debojit Pal", role: "General Practitioner", bio: "Focus on rural healthcare." },
];

export const SPECIALISTS = [
  {
    id: "s-1",
    category: "Cardiologist",
    doctors: [
      { id: "c-1", name: "Dr. James Brown", role: "Cardiologist", bio: "Heart specialist with 10+ years experience." },
      { id: "c-2", name: "Dr. Anita Desai", role: "Cardiologist", bio: "Focus on preventive cardiology." },
    ],
  },
  {
    id: "s-2",
    category: "Orthopedic",
    doctors: [
      { id: "o-1", name: "Dr. Chen Wei", role: "Orthopedic Surgeon", bio: "Bone and joint care specialist." },
      { id: "o-2", name: "Dr. Rajiv Kapoor", role: "Orthopedic Surgeon", bio: "Sports injury and trauma care." },
    ],
  },
  {
    id: "s-3",
    category: "Neurologist",
    doctors: [
      { id: "n-1", name: "Dr. Meera Nair", role: "Neurologist", bio: "Expert in brain and nervous system disorders." },
      { id: "n-2", name: "Dr. Thomas Lee", role: "Neurologist", bio: "Specialized in stroke and epilepsy treatment." },
    ],
  },
  {
    id: "s-4",
    category: "Dermatologist",
    doctors: [
      { id: "d-1", name: "Dr. Sofia Garcia", role: "Dermatologist", bio: "Skin health and cosmetic treatments." },
      { id: "d-2", name: "Dr. Priya Menon", role: "Dermatologist", bio: "Expert in allergies and skincare." },
    ],
  },
];
