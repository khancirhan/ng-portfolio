import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Icon } from '../../models/icon';
import { Service } from '../../models/service';
import { Experience } from '../../models/experience';
import { Project } from '../../models/project';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() {
    }

    getUser(): Observable<User> {
        const user = new User();
        user.firstName = 'Cirhan';
        user.lastName = 'Yaqoob';
        user.email = 'khancirhan@gmail.com';
        user.phone = '+919797790498';

        user.profile = 'I\'m a Full Stack Web Developer';
        user.profileDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
                Error voluptatum rem, nisi suscipit tempore.`;

        user.aboutDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
                Error voluptatum rem, nisi suscipit tempore

                quaerat, facilis enim, laborum ad delectus sit! Placeat repellendus culpa dolorem maiores?Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Suscipit, saepe est quae eos quos tempora fugiat, tempore eum ipsum vel
                ugit dolor voluptate distinctio, illo necessitatibus asperiores inventore! Ab, amet?`;

        user.githubUrl = 'https://github.com/khancirhan';
        user.linkedInUrl = 'https://linkedin.com/in/khancirhan';

        user.services.push(new Service(
            Icon.PHONE,
            'Web Development',
            `quaerat, facilis enim, laborum ad delectus sit!
            Placeat repellendus culpa dolorem maiores?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit,`
        ));

        user.services.push(new Service(
            Icon.LAPTOP,
            'API Development',
            `quaerat, facilis enim, laborum ad delectus sit!
            Placeat repellendus culpa dolorem maiores?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit,`
        ));

        user.services.push(new Service(
            Icon.PHONE,
            'Database Design',
            `quaerat, facilis enim, laborum ad delectus sit!
            Placeat repellendus culpa dolorem maiores?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit,`
        ));

        user.userQuote = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus nam...';

        user.experienceList.push(new Experience(
            new Date('04/06/2020'),
            new Date('06/06/2020'),
            'Emson UK LTD',
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
            Error voluptatum rem, nisi suscipit tempore.`
        ));

        user.experienceList.push(new Experience(
            new Date('07/06/2019'),
            new Date('12/15/2019'),
            'Grey Delta',
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
            Error voluptatum rem, nisi suscipit tempore.`
        ));

        user.experienceList.push(new Experience(
            new Date('09/08/2017'),
            new Date('02/14/2018'),
            'IAC Software Solutions',
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
            Error voluptatum rem, nisi suscipit tempore.`
        ));

        user.projects.push(new Project(
            'Cloud Based Patient Management System',
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
            Error voluptatum rem, nisi suscipit tempore.`,
            'assets/img/portfolio/p1.jpg',
            'Web Application'
        ));

        user.projects.push(new Project(
            'Retail Management System',
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint eos error.
            Error voluptatum rem, nisi suscipit tempore.`,
            'assets/img/portfolio/p1.jpg',
            'Web Application'
        ));

        user.projects.push(new Project(
            'E-book Store',
            `An online book store for downloading E-Books. I've created this web
            application using Django.`,
            'assets/img/portfolio/p3.jpg',
            'Website'
        ));

        user.projects.push(new Project(
            'Dice Roll Game',
            `A simple dice roll game implemented in javascript.`,
            'assets/img/portfolio/p4.jpg',
            'Game',
            'https://khancirhan.github.io/diceroller/'
        ));

        user.projects.push(new Project(
            'Tic-Tac-Toe Game',
            `A simple dice roll game implemented in javascript.`,
            'assets/img/portfolio/p5.jpg',
            'Game',
            'https://khancirhan.github.io/diceroller/'
        ));

        return new Observable(obs => obs.next(user));
    }
}
