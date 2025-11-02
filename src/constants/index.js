const navLinks = [
    {
        name: "About",
        link: "/",
    },
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Experience",
        link: "#experience",
    }
];

const introduction = {
    name: "Bhagyashree Shettigar",
    role: "Senior Frontend Developer",
    desc: "Experienced frontend developer with over 9+ years of experience passionate about creating interactive, accessible, high-performance web and mobile applications using Angular, React, React Native and Node.js. Responsibly assume the challenges and goals that the organization assigns me, adaptability to change, ability to work in teams, ability to work under high pressure, as well as to solve problems efficiently and achieve productivity goals set by the company and my work group. Eager to learn new technologies and methodologies and always willing to innovate the new things."
}

const techStackIcons = [
    {
        name: "React",
        icon: "TbBrandReact",
        cssClass: "text-[#61DAFB]"
    },
    {
        name: "Angular",
        icon: "TbBrandAngularFilled",
        cssClass: "text-[#DD0031]"
    },
    {
        name: "Tailwind",
        icon: "TbBrandTailwind",
        cssClass: "text-[#38BDF8]"
    },
    {
        name: "Redux",
        icon: "TbBrandRedux",
        cssClass: "text-[#764ABC]"
    },
    {
        name: "Node Js",
        icon: "TbBrandNodejs",
        cssClass: "text-[#339933]"
    },
    {
        name: "Docker",
        icon: "TbBrandDocker",
        cssClass: "text-[#2496ED]"
    },
    {
        name: "MongoDB",
        icon: "TbBrandMongodb",
        cssClass: "text-[#47A248]"
    },
];

const projects = [
    {
        image: "/images/project1.jpg",
        title: "TaskFlow - Project Management App",
        desc: "A collaborative project management tool with real-time updates, Kanban boards, and user authentication.",
        technologies: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Docker"],
    },
    {
        image: "/images/project2.jpg",
        title: "DevPortfolio - Personal Portfolio Website",
        desc: "A modern developer portfolio showcasing skills, projects, and blog posts, built with responsive design.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        image: "/images/project3.jpg",
        title: "ShopEase - E-commerce Platform",
        desc: "Full-stack e-commerce app with shopping cart, payments integration, and admin dashboard.",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "Docker"],
    },
    {
        image: "/images/project4.jpg",
        title: "InsightHub - Analytics Dashboard",
        desc: "A data visualization dashboard providing real-time metrics using charts and API integration.",
        technologies: ["Angular", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
    },
    {
        image: "/images/project5.jpg",
        title: "BlogSphere - Markdown Blogging Platform",
        desc: "A developer-focused blogging platform supporting markdown, syntax highlighting, and content management.",
        technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    }
]

const experiences = [
    {
        imgPath: "/images/company/akamai.png",
        logoPath: "/images/logos/akamai.png",
        title: "Senior Frontend Engineer",
        organization: "Akamai Technologies",
        year: "September 2023 - Present",
        responsibilities: [
            "Led the migration of legacy DNS-Based Management applications from AngularJS to Angular 19 enhancing maintainability, scalability and performance by 30%",
            "Analysed existing application functionality and decomposed it into feature-based tickets for efficient development tracking.",
            "Developed reusable components, ensured coding best practices, and conducted thorough code reviews.",
            "Achieved 80%+ unit test coverage across modules, significantly reducing post-deployment bugs and improving system reliability."
        ],
    },
    {
        imgPath: "/images/company/publicis.png",
        logoPath: "/images/logos/publicis.png",
        title: "Senior Associate L1 developer",
        organization: "Publicis Sapient",
        year: "August 2021 – September 2023",
        responsibilities: [
            "Developed and maintained enterprise-grade web applications using Angular (v14+), React, D3.js, and CSS for two high-impact platforms in the performance analytics and e-commerce domains.",
            "Designed and implemented intuitive dashboards in PSknowHOW using D3.js, enabling organizations to track transformation KPIs visually; contributed across the full SDLC including requirements gathering, UI design, development, unit testing (Karma), defect fixing, and code reviews.",
            "Delivered responsive and scalable Products & Services modules for Verizon’s e-commerce platform using Angular, enhancing customer experience and supporting wireless product workflows.",
            "Ensured seamless integration with backend systems and adhered to performance and accessibility best practices, resulting in a 25% improvement in load times and user engagement."
        ],
    },
    {
        imgPath: "/images/company/diverselync.png",
        logoPath: "/images/logos/diverselync.png",
        title: "Senior UI Developer",
        organization: "Diverse Lync Private Ltd.",
        year: "October 2020 To August 2021",
        responsibilities: [
            "Developed UI screens for core banking modules including Customers, Accounts.",
            "Responsible for requirement gathering, UI design, component development, and unit testing."
        ],
    },
    {
        imgPath: "/images/company/infosys.png",
        logoPath: "/images/logos/infosys.png",
        organization: "Infosys Limited",
        title: "Systems Engineer",
        year: "October 2020 To August 2021",
        responsibilities: [
            "Developed a search tool for healthcare providers to retrieve medical bill statuses, significantly improving operational efficiency and reducing response time by eliminating call center dependencies.",
            "Developed a LinkedIn Profile Import connector to streamline Jive community onboarding by enabling users to import LinkedIn profile data. Built using Angular, Node.js, HTML/CSS, Bootstrap 3, PostgreSQL, and OAuth 2.0; version control with Git."
        ],
    }
];

const socialLinks = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/BhagyashreeShettigar",
        icon: 'FaLinkedin'
    },
    {
        name: "github",
        url: "https://www.github.com/bgshettigar95",
        icon: 'FaGithub'
    },
];

const contactDetails = {
    email: "bgshettigar95@gmail.com",
    location: "Mumbai, India"
}

export {
    navLinks,
    introduction,
    experiences,
    socialLinks,
    techStackIcons,
    projects,
    contactDetails
};