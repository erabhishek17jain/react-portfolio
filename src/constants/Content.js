import hero_person from '../assets/images/hero/person.png';
import reactjs from '../assets/images/skills/react.png';
import redux from '../assets/images/skills/redux.png';
import typescript from '../assets/images/skills/typescript.png';
import nodejs from '../assets/images/skills/node.png';
import graphql from '../assets/images/skills/graphql.png';
import postman from '../assets/images/skills/postman.png';
import html from '../assets/images/skills/html.png';
import mongodb from '../assets/images/skills/mongodb.png';
import mysql from '../assets/images/skills/mysql.png';
import cpp from '../assets/images/skills/cpp.png';
import java from '../assets/images/skills/java.png';
import git from '../assets/images/skills/git.png';
import aws from '../assets/images/skills/aws.png';
import ps from '../assets/images/skills/ps.png';
import bootstrap from '../assets/images/skills/bootstrap.svg';
import jenkins from '../assets/images/skills/jenkins.png';
import css from '../assets/images/skills/css.png';
import vscode from '../assets/images/skills/vscode.png';

import services_logo1 from '../assets/images/services/logo1.png';
import services_logo2 from '../assets/images/services/logo2.png';
import services_logo3 from '../assets/images/services/logo3.png';
import services_logo4 from '../assets/images/services/logo4.png';
import services_logo5 from '../assets/images/services/logo5.png';

import project1 from '../assets/images/projects/img1.png';
import project2 from '../assets/images/projects/img2.png';
import project3 from '../assets/images/projects/img3.png';
import person_project from '../assets/images/projects/person1.png';

import avatar1 from '../assets/images/testimonials/avatar1.png';
import avatar2 from '../assets/images/testimonials/avatar2.png';
import avatar3 from '../assets/images/testimonials/avatar3.png';
import avatar4 from '../assets/images/testimonials/avatar4.png';

import hireme_person from '../assets/images/hireme/person2.png';
import hireme_person2 from '../assets/images/hireme/person1.png';

import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { SiUpwork } from 'react-icons/si';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export const content = {
    nav: [
        {
            link: '#home',
            icon: TbSmartHome,
        },
        {
            link: '#skills',
            icon: BiUser,
        },
        {
            link: '#services',
            icon: RiServiceLine,
        },
        {
            link: '#projects',
            icon: RiProjectorLine,
        },
        {
            link: '#contact',
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: 'Web Developer',
        firstName: 'ABHISHEK',
        LastName: 'JAIN',
        hireBtnText: 'Hire Me',
        resumeBtnText: 'Resume',
        resumeName: 'AbhishekJain.pdf',
        image: hero_person,
        hero_content: [
            {
                count: '6+',
                text: 'Years of Experience in Web development',
            },
            {
                count: '10+',
                text: 'Projects Worked in my career',
            },
        ],
    },
    skills: {
        title: 'Skills',
        frontEnd: 'Front End Technologies',
        backEnd: 'Back End Technologies',
        technologies: 'Other Technologies',
        skills_content: {
            front_end: [
                {
                    name: 'React Js',
                    para: 'with Hooks | Material UI | Storybook | Unit testing',
                    logo: reactjs,
                    more: [
                        'SEO friendly',
                        'Instant updates without page reloads',
                        'Update just one component',
                        'Reuse the same components',
                        'It is backed by a strong community',
                    ],
                },
                {
                    name: 'Redux | Flux',
                    para: 'with Middleware | Redux Saga | Redux Thunk',
                    logo: redux,
                    more: [
                        'Redux for global state management',
                        'The app state is updated frequently',
                        'The logic to update that state may be complex',
                        'App has a medium or large-sized codebase',
                        'Its middleware allows you to intercept every action',
                    ],
                },
                {
                    name: 'TypeScript | JavaScript | JQuery',
                    para: 'with React & Node js',
                    logo: typescript,
                    more: [
                        'To make web pages interactive',
                        'Can run on all devices',
                        'Transformed web browsers into application platforms',
                        'It has type safety, tooling, and integration',
                    ],
                },
                {
                    name: 'Bootstrap 4 | 5',
                    para: 'with AJAX concepts | Rest APIs',
                    logo: bootstrap,
                    more: [
                        'Bootstrap makes responsive web design a reality',
                        'Develop a responsive and mobile friendly website',
                        'It has much pre-design class',
                        'Anybody with just basic knowledge of HTML and CSS can start using Bootstrap.',
                        'It is a front-end framework used for easier and faster web development.'
                    ],
                },
                {
                    name: 'HTML | HTML5',
                    para: 'with HTML5 concepts',
                    logo: html,
                    more: [
                        'HTML also provides a basic structure of the page',
                        'HTML code ensures the proper formatting of text and images for your Internet browser.',
                        'HTML allows users to create and structure sections, headings, links, paragraphs, and more, on a website using various tags and elements.',
                        'HTML is primarily used to develop web pages and web applications that run on web browsers like Chrome, Firefox, and Internet Explorer.',
                        'Storage of big files is allowed because of the application cache feature.',
                    ],
                },
                {
                    name: 'CSS3 | SCSS | LESS',
                    para: 'with Responsive',
                    logo: css,
                    more: [
                        'It  provides a consistent and precise positioning of navigable elements.',
                        'It is easy to customize a web page as it can be done by merely altering a modular file.',
                        'Graphics are more accessible in CSS3, thus making it easy to make the site appealing.',
                        'CSS3 allows designers to apply beautiful borders on the page or site they are creating.',
                        'This helps in enhancing the appearance of the site.',
                    ],
                },
            ],
            back_end: [
                {
                    name: 'Node js | Express.js ',
                    para: 'with Rest Api | GraphQL',
                    logo: nodejs,
                    more: [
                        'Node. js shines in real-time web apps that employ push technology over WebSocket.',
                        'It provides fast delivery. Node. js is a proven way to make the time-to-market cycle shorter.',
                        'It targets all major platforms. Among the advantages of using Node.',
                        'is also fast and lightweight, and its ability to employ JavaScript code on both the frontend and backend opens up new development possibilities.',
                        'Our developer community will be significantly more efficient and cross-functional as a result of the frontend and backend flexibility, lowering development expenses.',
                    
                    ],
                },
                {
                    name: 'MongoDB developer',
                    para: 'with NodeJs',
                    logo: mongodb,
                    more: [
                        'Its flexible schema makes it easy to evolve and store data in a way that is easy for programmers to work with.',
                        'MongoDB is also built to scale up quickly and supports all the main features of modern databases such as transactions.',
                        'MongoDB is designed to make data easy to access, and rarely to require joins or transactions,',
                        'The MongoDB Query API allows you to query deep into documents, and even perform complex analytics pipelines with just a few lines of declarative code.',
                        'MongoDB is well known for its horizontal scaling and load balancing capabilities,',
                    ],
                },
                {
                    name: 'Graphql',
                    para: 'With Apollo server/client',
                    logo: graphql,
                    more: [
                        'GraphQL is way faster than other communication APIs',
                        'We can integrate multiple systems behind GraphQL API. It unifies them and hides their complexity.',
                        'GraphQL is a powerful tool, and there are many reasons you might choose GraphQL over REST.',
                        'It enables a client to make a single HTTP request to multiple resources and receive the exact data it needs.',
                        'GraphQL offers a highly flexible approach to API development, as it allows developers to request exactly the data they need.',
                        
                    ],
                },
                {
                    name: 'C | C++',
                    para: 'with data structures & algorithms | OOP',
                    logo: cpp,
                    more: [
                        'C is a structural or procedural programming language that was used for system applications and low-level programming applications.',
                        'The C programming language is known as the God of programming languages',
                        'C++ is an object-oriented programming language having some additional features like Encapsulation, Data Hiding, Data Abstraction, Inheritance, Polymorphism, etc.',
                        'C++ is an extended version of C.',
                        ' C++ is used majorly to make operating systems',
                    
                    ],
                },
                {
                    name: 'Java',
                    para: 'with Oops | Collection | Swing',
                    logo: java,
                    more: [
                        'Java was designed to be easy to use and is therefore easy to write, compile, debug, and learn than other programming languages.',
                        'Java is object-oriented. This allows you to create modular programs and reusable code.',
                        'Java provides the environment to develop cloud-based applications.',
                        'Platform-friendly and independent.',
                        'Developers use Java to construct applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, and other devices.'
                    ],
                },
                {
                    name: 'MySql | Oracle',
                    para: 'with relational data modeling with Java & NodeJs',
                    logo: mysql,
                    more: [
                        'MySQL is a relational database management system (often shortened to RDBMS).',
                        'MySQL is the most popular open source database',
                        'It provides comprehensive support for every application development need.',
                        'Within the database, support can be found for stored procedures, triggers, functions, views, cursors, ANSI-standard SQL, and more.',
                        'MySQL is a tool used to manage databases and servers.',

                    ],
                },
            ],
            technologies: [
                {
                    name: 'Git | GitHub',
                    para: 'with full Git & GitHub',
                    logo: git,
                    more: [
                        'Git is a tool that is used to manage multiple versions of source code edits',
                        'It serves as a host for Git repository teams to store their code in a centralized location.',
                        'We can use Git without Github, but you cannot use GitHub without Git.',
                        'Core languages for GitHub features include C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, Scala, and TypeScript.',
                        'Git is responsible for everything GitHub-related that happens locally on your computer.',
                    ],
                },
                {
                    name: 'Jenkins',
                    para: 'with build features',
                    logo: jenkins,
                    more: [
                        'Jenkins is among the most commonly used developer tools.',
                        'It is used to implement CI/CD workflows, called pipelines.',
                        'Jenkins is a popular CI orchestration tool.',
                        'It provides numerous plugins for integration with multiple test automation tools and frameworks into the test pipeline.',
                        'Jenkins provides plugins that help run test suites, gather dashboard results, and provide details on failures.',
                    ],
                },
                {
                    name: 'Visual Studio Code',
                    para: 'with denugging & unit test cases',
                    logo: vscode,
                    more: [
                        'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control.',
                        'It aims to provide just the tools a developer needs for a quick code-build-debug cycle.',
                        'Visual Studio is a powerful developer tool that you can use to complete the entire development cycle in one place.',
                        'It is a comprehensive integrated development environment (IDE) that you can use to write, edit, debug, and build code, and then deploy your app.',
                        'Visual Studio Code has support for many languages, including Python, Java, C++, JavaScript, and more.',
                        
                    ],
                },
                {
                    name: 'AWS Cloud',
                    para: 'with SSL Integration and S3 Bucket',
                    logo: aws,
                    more: [
                        'AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications.',
                        'You can use the AWS Management Console or well-documented web services APIs to access the AWS application hosting platform.',
                        'AWS offers many different tools and solutions for enterprises and software developers that can be used in data centers in up to 190 countries.',
                        'There are four main types of cloud computing: private clouds, public clouds, hybrid clouds, and multi-clouds.',
                        'AWS has over 200 fully featured services for a wide range of technologies, industries, and use cases.',
                    ],
                },
                {
                    name: 'Postman',
                    para: 'with API testing',
                    logo: postman,
                    more: [
                        'Postman is one of the most popular software testing tools which is used for API testing.',
                        'Developers can easily create, test, share, and document APIs.',
                        'You can use collections to organize and group your requests.',
                        'Postman enables you to create and send API requests.',
                        'Postman Collections are groups of saved requests. You can use collections to organize and group your requests.',
                    ],
                },
                {
                    name: 'Adobe Photoshop',
                    para: 'with UIUX designs',
                    logo: ps,
                    more: [
                        'Photoshop is a photo editing and design software used by photographers, graphic designers, and web designers.',
                        'You can use it for a variety of tasks such as image editing, photo manipulation, illustrations, basic animations, and more.',
                        'Adobe is the industry standard because it is been at the top for a long time. It got and stayed there by continuously innovating.',
                        'Photo editing and retouching. Logos, color schemes, social media graphics, and other design elements for a brand.',
                        'By learning Photoshop you will also have a fun outlet for your creative projects, whether working on a website',

                    ],
                },
            ],
        },
        icon: MdArrowForward,
    },
    services: {
        title: 'Services',
        subtitle: 'WHAT I OFFER',
        service_content: [
            {
                title: 'WEB DEVELOPMENT',
                para: 'It refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.',
                logo: services_logo1,
            },
            {
                title: 'GRAPHIC DESIGN',
                para: 'It is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.',
                logo: services_logo2,
            },
            {
                title: 'UI / UX DESIGNING',
                para: 'UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction.',
                logo: services_logo3,
            },
            {
                title: 'ANDROID / IOS DEVELOPMENT',
                para: 'It is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.',
                logo: services_logo4,
            },
            {
                title: 'SOCIAL MEDIA MARKETING',
                para: 'It is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media.',
                logo: services_logo5,
            },
        ],
    },
    projects: {
        title: 'Projects',
        githubText: 'Github',
        liveUrlText: 'Live',
        subtitle: 'MY CREATION',
        image: person_project,
        project_content: [
            {
                title: 'Omjinshop',
                image: project1,
                github: '',
                liveUrl: '',
                description:
                    'It is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media. It is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media. It is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media.',
            },
            {
                title: 'College Management',
                image: project2,
                github: '',
                liveUrl: '',
                description: '',
            },
            {
                title: 'Burger Builder',
                image: project3,
                github: '',
                liveUrl: '',
                description: '',
            },
            {
                title: 'Shopping Application',
                image: project3,
                github: '',
                liveUrl: '',
                description: '',
            },
            {
                title: 'ToDo Application',
                image: project3,
                github: '',
                liveUrl: '',
                description: '',
            },
        ],
    },
    testimonials: {
        title: 'Testimonials',
        subtitle: 'MY CLIENT REVIEWS',
        testimonials_content: [
            {
                review: '“We had a great experience while connecting with your team, your members are too supportive. I am very satisfied with your service.”',
                img: avatar1,
                name: 'Rajat Singhai',
                product: 'Omjin Shop',
            },
            {
                review: '“We are searching for a technical team who help me to grow our business by creating a website for us on which we sell our products, and we found you. Thank You!”',
                img: avatar2,
                name: 'Mayank Jain',
                product: 'Omjin Shop',
            },
        ],
    },
    hireme: {
        title: 'Hire Me',
        subtitle: 'FOR YOUR PROJECTS',
        image1: hireme_person,
        image2: hireme_person2,
        para: 'We help you fulfill your need regarding any type of IT work, Web Development, Web Designing, Mobile Applications, Graphic Design, Digital Marketing, Content Creation, etc. We have great tech leads and developers who have great experience in trending development technologies. Connect with us we never disappoint you.',
        btnText: 'Hire Me',
        submit: 'Submit',
        close: 'Close',
    },
    emails: { title: 'Hire Me', submit: 'Submit', close: 'Close' },
    contact: {
        title: 'Contact Me',
        subtitle: 'GET IN TOUCH',
        submit: 'Submit',
        social_media: [
            {
                text: 'erabhishek17jain@gmail.com',
                icon: GrMail,
                link: 'mailto:erabhishek17jain@gmail.com',
            },
            {
                text: '+91 7047026537',
                icon: MdCall,
                link: 'https://wa.link/wadcmz',
            },
            {
                text: 'erabhishek17jain',
                icon: BsLinkedin,
                link: 'https://www.linkedin.com/in/erabhishek17jain/',
            },
            {
                text: 'erabhishek17jain',
                icon: BsGithub,
                link: 'https://github.com/erabhishek17jain/',
            },
            {
                text: 'erabhishek17jain',
                icon: SiUpwork,
                link: 'https://www.upwork.com/freelancers/~011b5cb8bb2f19e025',
            },
            {
                text: 'erabhishek17jain',
                icon: BsFacebook,
                link: 'https://www.facebook.com/erabhishek17jain/',
            },
        ],
    },
    footer: {
        name: 'Abhishek Jain',
        text: 'All © Copy Right Reserved 2023',
    },
};