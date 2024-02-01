// mockData.ts
interface EducationData {
    university: string;
    place: string;
    degree: string;
    photo: string;
    timeline: string;
    achievements: string[];
  }
  
  const educationData: EducationData[] = [
    {
        university: 'University of the Philippines, Los Baños',
        place: 'Los Baños, Laguna',
        photo: '/assets/uplb.png',
        degree: 'Bachelor of Science in Computer Science',
        timeline: '2020 - Present',
        achievements: [
            "Current Cumulative GPA: 1.41",
            "Areas of Interest: Software Development (Web & Mobile), UI/UX, Project Management",
            "Awards: University Scholar (President’s Lister)"
        ],
    },
    {
        university: 'Ateneo de Davao University SHS',
        place: 'Davao City',
        photo: '/assets/addu.png',
        degree: 'STEM, Pre Science',
        timeline: '2018-2020',
        achievements: [
            "Graduated with Honors",
            "Grant-in-Aid Scholar"
        ],
    },
  ];

  export default educationData;