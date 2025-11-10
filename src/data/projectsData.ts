// projectsData.ts
export type Project = {
  image: string;
  images?: string[];
  title: string;
  type: string;
  description?: string;
};

export const projects: Project[] = [
  {
    image: "https://i.pinimg.com/1200x/1a/9a/8f/1a9a8fe4ec9879c01377cc6aac823306.jpg",
    title: "Mr. Arjun & Mrs. Meera’s Modern 4BHK Home at Panampilly Nagar",
    type: "Residential",
    images: [
      "https://i.pinimg.com/1200x/b1/0d/12/b10d12b3053385f4365990dbd067bf92.jpg",
      "https://i.pinimg.com/1200x/b0/0d/8b/b00d8bef45550c2ac16a11ca7915da92.jpg",
      "https://i.pinimg.com/1200x/88/5a/6d/885a6d4cc34027c511c1a8512036dcd7.jpg"
    ],
    description: "This 4BHK urban home blends modern style with functional interiors, creating a perfect living space for the family.",
  },
  {
    image: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg",
    title: "Mr. Faisal Rahman & Family’s Elegant Villa at Edappally",
    type: "Residential",
    images: [
      "https://i.pinimg.com/1200x/1b/55/c7/1b55c74370a05f28877dd1df40304f05.jpg",
      "https://i.pinimg.com/1200x/3e/36/62/3e366239e6f8dd34a7b70310512b3c0e.jpg"
    ],
    description: "Elegant villa with exquisite interiors and outdoor spaces.",
  },
  {
    image: "https://i.pinimg.com/1200x/30/ab/8e/30ab8e9864c53ac1b59781d0b75fc012.jpg",
    title: "Dr. Ananya Nair’s Contemporary 3BHK Home at Kakkanad",
    type: "Residential",
    images: [
      "https://i.pinimg.com/1200x/30/ab/8e/30ab8e9864c53ac1b59781d0b75fc012.jpg",
      "https://i.pinimg.com/1200x/cb/b7/4a/cbb74a234930dc3964e2a22a25e7173e.jpg",
    ],
    description: "Modern and comfortable 3BHK residence blending style and functionality.",
  },
  {
    image: "https://i.pinimg.com/1200x/30/ab/8e/30ab8e9864c53ac1b59781d0b75fc012.jpg",
    title: "Mr. Joseph & Mrs. Lissy’s Minimal 4BHK Home at Kottayam",
    type: "Residential",
    images: [
      "https://i.pinimg.com/1200x/30/ab/8e/30ab8e9864c53ac1b59781d0b75fc012.jpg",
      "https://i.pinimg.com/1200x/d2/90/e9/d290e9bfb5ff2509d4ff59c154ee3a0e.jpg",
    ],
    description: "Minimalist design emphasizing space and light for a serene family home.",
  },
  {
    image: "https://i.pinimg.com/1200x/1a/9a/8f/1a9a8fe4ec9879c01377cc6aac823306.jpg",
    title: "‘NIRVANA’ – A Serene Family Retreat in Aluva",
    type: "Residential",
    images: [
      "https://i.pinimg.com/1200x/1a/9a/8f/1a9a8fe4ec9879c01377cc6aac823306.jpg",
      "https://i.pinimg.com/1200x/e9/fc/1c/e9fc1cff10e08061cb2546fbdbbe46de.jpg",
    ],
    description: "Peaceful retreat blending nature and luxury in Aluva.",
  },
  {
    image: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg",
    title: "Mr. Rahul Menon & Family’s Cozy 3BHK Interior at Pala",
    type: "Interior",
    images: [
      "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg",
      "https://i.pinimg.com/1200x/1a/9a/8f/1a9a8fe4ec9879c01377cc6aac823306.jpg",
    ],
    description: "Warm and inviting interiors for a cozy family home.",
  },
  {
    image: "https://i.pinimg.com/1200x/b3/6d/6d/b36d6dbc796b9adb2971331fe125240f.jpg",
    title: "Creative Office Interior with Open Plan Concept",
    type: "Interior",
    images: [
      "https://i.pinimg.com/1200x/30/ab/8e/30ab8e9864c53ac1b59781d0b75fc012.jpg",
      "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg",
    ],
    description: "Modern open office interior promoting collaboration and creativity.",
  },
  {
    image: "https://i.pinimg.com/1200x/30/32/46/303246161f84df67f6852a4804da9052.jpg",
    title: "Luxury Living Room Interior Design",
    type: "Interior",
    images: [
      "https://i.pinimg.com/1200x/1a/9a/8f/1a9a8fe4ec9879c01377cc6aac823306.jpg",
      "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg",
    ],
    description: "Elegant and sophisticated living room with luxurious finishes.",
  },
];
