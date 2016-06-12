import {Education, Employment, Resume, Skill } from './resume';

export var MyResume:Resume = {
    Profile: "Software engineer specializing in object-oriented design. Talented problem solver with vast experience in communicating ideas and finding solutions. Motivated individual with a keen interest in acquiring new skills, adopting new ideas, and challenging the status quo.",
    Skills: [
        {
            Category: "Languages",
            Expertise: "C++, C#, Fortran, Java, JavaScript, PHP, Python, SQL, VB.NET"            
        },{
            Category: "Methodologies",
            Expertise:"OOP/D, UML, Design Patterns, Agile Development, Software Development Life Cycle"
        },{
            Category: "Frameworks",
            Expertise: ".NET, ASP.NET MVC/WEB API, ASP.NET SignalR, Android, Cake-PHP, Flask, Node, WCF, WPF, Zend"
        },{
            Category: "Databases",
            Expertise: "MS SQL Server, MySQL, Oracle"
        },{
            Category: "Tools",
            Expertise: "Android Studio, Git, JetBrains Suite, Team Foundation Server, Visual Studios, VSCode"
        }
    ],
    EmploymentHistory: [
        {
            Company:"Two Twelve Corp",
            Dates: "2015 - 2016",
            Title: "Software Architect",
            Description: "Develop and design applications to meet the needs of our clients. Refactor and maintain existing applications. Implement new features. Develop rich application interfaces to emphasize the moderness of the system.",
            Accomplishments: []
        },{
            Company:"San Bernardino County: Information Services Department ",
            Dates: "2015 - 2016",
            Title: "Senior Programmer Analyst",
            Description: "Provide analysis, design and support of the county's newly implemented Accela platform. Develop service oriented architecture to communicate with Accela's propitiatory JavaScript scripting environment. Implement standards and conventions for debugging and testing. Design the system for maintainability, portability, and scalability. Mentor junior developers on software engineering techniques, and design.",
            Accomplishments: [
                "Developed a library for interfacing with Accela's multiple API's.",
                "Design and Develop software artifacts to help managers and customers envision the system."
            ]
        },{
            Company:"California Steel Industries",
            Dates: "2011 - 2015",
            Title: "Process Control Engineer",
            Description: "Provide object-oriented software solutions for the leading producer of flat-rolled steel in the western United States. Develop and maintain software for CSI's Hot Strip Mill production line. ",
            Accomplishments: [
                "Developed an extensive series of communication libraries used as the backbone for our new $200 Million Pipe Mill.",
                "Designed a web application architecture using ASP.NET MVC where each child application is an autonomous child application able to be \"plugged in\" to the site while simultaneously sharing session data across applications where needed.",
                "Defined and implemented standardized coding practices and procedures. Such as source code documentation, source/version control, language, and style."
            ]
        },{
            Company:"Freelance Web Development",
            Dates: "2006 - 2010",
            Title: "Web Developer/Designer",
            Description: "Created and designed web applications for a plethora of clients using the latest technologies and techniques. ",
            Accomplishments: [
                "Drafted software requirements specifications, software diagrams, and general contracts.",
                "Held regular meetings with clients to communicate progress and ensure success.",
                "Delivered dependable applications for customers with complete satisfaction, despite changing requirements and looming deadlines."
            ]
        }
    ],
    EducationHistory: [
        {
            Degree: "Bachelors Computer Systems / Computer Science",
            School: "California State University - San Bernardino",
            Accomplishments: [
                "Lead the development of the MyCoyote Mobile Application (IOS, Android, and Windows Phone).",
                "Top Software Engineer Award (2012)"
            ],
            Dates: "2012"
        }
    ]
    
}