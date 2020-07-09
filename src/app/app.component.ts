import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isSidebarOpen = false;
    year = new Date().getFullYear();
    user: User;

    constructor(private userService: UserService) {
        this.userService.getUser().subscribe(user => this.user = user);
    }

    profileWordArray(): string[] {
        return this.user.profile.split(' ');
    }

    showSidebar() {
        this.isSidebarOpen = true;

    }

    hideSidebar($event: Event) {
        if ($event != null && ($event.target as HTMLElement).tagName.toLowerCase() !== 'a') {
            return;
        }

        this.isSidebarOpen = false;
    }
}
