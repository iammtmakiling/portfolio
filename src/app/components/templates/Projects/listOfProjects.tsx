// mockData.ts
interface Project {
  title: string;
  subtitle: string;
  description: string;
  photo: string;
  link: string;
  techStack: string;
}

const projects: Project[] = [
  {
    title: "Project Face",
    subtitle: "Project Manager, UI/UX designer, & Frontend Developer",
    description: "Revamped official website for the Alliance of Computer Science Student-UPLB, incorporating Svelte and Tailwind CSS",
    photo: "../../../../assets/pface.png",  
    link: "",    
    techStack: "Svelte, Tailwind CSS"
  },
  {
    title: "LBNB",
    subtitle: "UI/UX designer & Frontend Developer",
    description: "Contributed as a UI/UX designer and frontend developer to the LBNB accommodation website in Los Baños, Laguna, utilizing React JS.",
    photo: "",  
    link: "",
    techStack: "React JS"
    
  },
  {
    title: "Space Impact",
    subtitle: "Java Developer",
    description: "Developed a Java shooting game, Space Impact, using Java and JavaFX.",
    photo: "",  
    link: "",
    techStack: "Java & JavaFX"    
  },
  {
    title: "Icoffee",
    subtitle: "Full Stack Developer",
    description: "Built Icoffee, a full-stack social media platform, with React.js, Node.js, Express, and MongoDB.",
    photo: "",  
    link: "",
    techStack: "React.js, Node.js, Express, MongoDB"    
  },
  {
    title: "Coffii",
    subtitle: "Full Stack Developer",
    description: "Constructed Coffii, a full-stack Shared To-Do-List Mobile Application, employing Flutter, Dart, Firebase, Cloud Firestore",
    photo: "",  
    link: "",
    techStack: "Flutter, Dart, Firebase, Cloud Firestore"    
  },
  {
    title: "Super Shufflr",
    subtitle: "Java Developer",
    description: "Created Super Shufflr, a multiplayer guess-the-word game, using Java and JavaFX.",
    photo: "",  
    link: "",
    techStack: "Java & JavaFX"    
  },
];

export default projects;
