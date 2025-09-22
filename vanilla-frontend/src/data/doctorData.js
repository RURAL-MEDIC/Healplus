// src/data/doctorData.js

export const GENERAL_DOCTORS = [
  {
    id: "g-1",
    name: "Dr. John Doe",
    role: "General Physician",
    qualification: "MBBS, MD",
    experience: "10 years",
    bio: "Trusted general physician for family care and preventive health.",
    about:
      "Dr. John Doe has over 10 years of experience treating common illnesses, preventive care, and wellness checkups.",
    image: "/doctorProfileImages/doctor1.webp",
    available: true,
    roomId: "54324",
  },
  {
    id: "g-2",
    name: "Dr. Priya Sharma",
    role: "General Physician",
    qualification: "MBBS",
    experience: "6 years",
    bio: "Focused on internal medicine and family health consultations.",
    about: "Specializes in internal medicine and family health.",
    image: "/doctorProfileImages/doctor2.webp",
    available: true,
    roomId: "49345",
  },
  {
    id: "g-3",
    name: "Ali Khan",
    role: "General Practitioner",
    qualification: "MBBS, MD (Internal Medicine)",
    experience: "10 years",
    bio: "Experienced GP with expertise in primary and preventive care.",
    about:
      "Dr. Ali Khan specializes in primary care and preventive medicine, with a focus on long-term wellness and lifestyle management.",
    image: "/doctorProfileImages/doctor3.webp",
    available: false,
    roomId: "23556",
  },
  {
    id: "g-4",
    name: "Maria Lee",
    role: "General Practitioner",
    qualification: "MBBS",
    experience: "7 years",
    bio: "Dedicated to improving healthcare access in rural communities.",
    about:
      "Dr. Maria Lee has dedicated her practice to rural healthcare, ensuring accessible and quality medical services for underserved communities.",
    image: "/doctorProfileImages/doctor4.webp",
    available: true,
    roomId: "23123",
  },
  {
    id: "g-5",
    name: "Debojit Pal",
    role: "General Practitioner",
    qualification: "MBBS, Diploma in Family Medicine",
    experience: "5 years",
    bio: "Family doctor focusing on holistic and preventive treatments.",
    about:
      "Dr. Debojit Pal provides compassionate family care with an emphasis on preventive treatment and holistic health support.",
    image: "/doctorProfileImages/doctor5.webp",
    available: true,
    roomId: "23123",
  },
  {
    id: "g-6",
    name: "Sophia Martinez",
    role: "General Practitioner",
    qualification: "MBBS, MD (General Medicine)",
    experience: "12 years",
    bio: "Expert in chronic disease management and patient-centered care.",
    about:
      "Dr. Sophia Martinez brings extensive experience in family practice, with expertise in chronic disease management and patient-centered care.",
    image: "/doctorProfileImages/doctor6.webp",
    available: true,
    roomId: "23123",
  },
  {
    id: "g-7",
    name: "Ravi Sharma",
    role: "General Practitioner",
    qualification: "MBBS",
    experience: "8 years",
    bio: "Community health advocate with a focus on preventive medicine.",
    about:
      "Dr. Ravi Sharma focuses on preventive medicine and community health initiatives, working to improve wellness through early detection and education.",
    image: "/doctorProfileImages/doctor7.webp",
    available: true,
    roomId: "23123",
  },
];

export const SPECIALISTS = [
  {
    id: "s-1",
    category: "Cardiologist",
    doctors: [
      {
        id: "c-1",
        name: "Dr. James Brown",
        role: "Cardiologist",
        bio: "Heart specialist with 10+ years experience.",
      },
      {
        id: "c-2",
        name: "Dr. Anita Desai",
        role: "Cardiologist",
        bio: "Focus on preventive cardiology.",
      },
    ],
  },
  {
    id: "s-2",
    category: "Orthopedic",
    doctors: [
      {
        id: "o-1",
        name: "Dr. Chen Wei",
        role: "Orthopedic Surgeon",
        bio: "Bone and joint care specialist.",
      },
      {
        id: "o-2",
        name: "Dr. Rajiv Kapoor",
        role: "Orthopedic Surgeon",
        bio: "Sports injury and trauma care.",
      },
    ],
  },
  {
    id: "s-3",
    category: "Neurologist",
    doctors: [
      {
        id: "n-1",
        name: "Dr. Meera Nair",
        role: "Neurologist",
        bio: "Expert in brain and nervous system disorders.",
      },
      {
        id: "n-2",
        name: "Dr. Thomas Lee",
        role: "Neurologist",
        bio: "Specialized in stroke and epilepsy treatment.",
      },
    ],
  },
  {
    id: "s-4",
    category: "Dermatologist",
    doctors: [
      {
        id: "d-1",
        name: "Dr. Sofia Garcia",
        role: "Dermatologist",
        bio: "Skin health and cosmetic treatments.",
      },
      {
        id: "d-2",
        name: "Dr. Priya Menon",
        role: "Dermatologist",
        bio: "Expert in allergies and skincare.",
      },
    ],
  },
];
