import { Component } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component ({
    templateUrl : './home.component.html',
    styleUrl : './home.component.css'
})

export class HomeComponent {
    constructor(private tabService: TabService) {}

    navigateToAbout(): void {
        this.tabService.setActiveTab('about');
    }
    downloadResume(): void {
        const filePath = '/assets/download/RESUME-JesusDiaz.pdf';
        const link = document.createElement('a');

        link.href= filePath;
        link.download = 'RESUME-JesusDiaz.pdf';
        link.click();
    }
}