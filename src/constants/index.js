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

const techStackIcons = [
    {
        name: "React",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "React Native",
        imgPath: "/images/logos/react-native.png",
    },
    {
        name: "Angular",
        imgPath: "/images/logos/angular.png",
    },
    {
        name: "Redux",
        imgPath: "/images/logos/redux.png",
    },
    {
        name: "Rxjs",
        imgPath: "/images/logos/rxjs.png",
    },
    {
        name: "Node Js",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "ExpressJs",
        imgPath: "/images/logos/express.png",
    }
];

const expCards = [
    {
        imgPath: "/images/company/akamai.png",
        logoPath: "/images/logos/akamai.png",
        title: "Senior Frontend Engineer",
        date: "September 2023 - Present",
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
        date: "August 2021 – September 2023",
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
        date: "October 2020 To August 2021",
        responsibilities: [
            "Developed UI screens for core banking modules including Customers, Accounts.",
            "Responsible for requirement gathering, UI design, component development, and unit testing."
        ],
    },
    {
        imgPath: "/images/company/infosys.png",
        logoPath: "/images/logos/infosys.png",
        title: "Systems Engineer",
        date: "October 2020 To August 2021",
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

export {
    navLinks,
    expCards,
    socialLinks,
    techStackIcons
};