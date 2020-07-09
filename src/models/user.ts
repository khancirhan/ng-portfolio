import { Service } from './service';
import { Experience } from './experience';
import { Project } from './project';

export class User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    profile: string;
    profileDescription: string;

    aboutDescription: string;
    githubUrl: string;
    linkedInUrl: string;

    services: Service[] = [];
    userQuote: string;

    experienceList: Experience[] = [];

    projects: Project[] = [];
}



