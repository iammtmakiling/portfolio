// mockData.ts
interface workData {
    company: string;
    place: string;
    job: string;
    timeline: string;
    achievements: string[];
  }
  
  const workData: workData[] = [
    {
        company: 'MyCode PH',
        place: 'Remote',
        job: 'Freelance Project Manager & Backend Developer',
        timeline: 'January 2024 - Present',
        achievements: [
            "Led a cross-functional software development team in creating a Teaching Platform Website",
            "Communicated with the client and ensured completion of all necessary documents",
            "Ensures the development of the project is on time through weekly stand-ups."
        ],
    },
    {
        company: 'University of the Philippines Los Banos',
        place: 'Department of Humanities',
        job: 'Student Assistant',
        timeline: 'October 2023 - Present',
        achievements: [
            "Organizing and filing documents, and doing messenger tasks within the campus.",
            "Creating minutes of the meetings, seminars, and workshops; transcribing meeting recordings.",
            "Creating and/or editing publicity materials"
        ],
    },
    {
        company: 'Mayon Innovations Lab, Inc.',
        place: 'Remote',
        job: 'Front End Developer Intern',
        timeline: 'July 2023 - November 2023',
        achievements: [
            "Created and implemented responsive design principles for optimal user experiences, utilizing Figma for wireframing and prototyping.",
            "Developed dynamic and user-friendly web interfaces using React JS, Angular JS, and Typescript",
            "Collaborated with the team and project manager in daily scrum meetings."
        ],
    },
    {
        company: 'Province of Davao Oriental',
        place: 'Mati City, Davao Oriental',
        job: 'Graphic Artist',
        timeline: 'July 2021 - June 2022',
        achievements: [
            "Edits Publicity Materials (e.g brochures, infographics, tarpaulins)",
            "Edits Video Materials",
        ],
    },
    {
        company: 'Mati City Local Government Unit',
        place: 'Mati City, Davao Oriental',
        job: 'Video Editor & Graphic Artist',
        timeline: 'July 2020 - May 2021',
        achievements: [
            "Pioneered the editing department of \'Ang Mati Karon\', a weekly news segment of our LGU.",
            "Directs, writes scripts and edits infomercials that garneres thousands of views.",
            "Create and designed posters and logos for segments."
        ],
    },
  ];

 

  export default workData;