export class Resume{
    Profile:string;
    Skills: Skill[];
    EmploymentHistory: Employment[];
    EducationHistory: Education[];
}

export class Skill{
    Category: string;
    Expertise: string;
}

export class Employment{
    Company: string;
    Dates: string;
    Title: string;
    Description: string;
    Accomplishments: string[];
}

export class Education{
    Degree: string;
    School: string;
    Accomplishments: string[];
}