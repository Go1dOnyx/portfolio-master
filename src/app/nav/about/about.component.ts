import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component ({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit {
    constructor(private tabService: TabService) {}

    ngOnInit(): void {
        this.tabService.setActiveTab('about');
    }

    redirectTo(pageTo: string):void {
        switch(pageTo){
            case 'home':
                this.tabService.setActiveTab('home');
                break;
            case 'github':
                window.location.href = 'https://github.com/Go1dOnyx';
            break;
            case 'linkedin':
                window.location.href = 'https://www.linkedin.com/in/jesus-diaz-1258b3214/';
            break;
            case 'youtube':
                window.location.href = 'https://www.youtube.com/@JesusDiaz-il2xq';
            break;
        }
    }
}