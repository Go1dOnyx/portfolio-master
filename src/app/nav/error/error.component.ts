import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component ({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrl: './error.component.css'
})

export class ErrorComponent implements OnInit {
    constructor(private tabService: TabService) {}

    ngOnInit(): void {
        this.tabService.setActiveTab('error');
    }

    backToHome(): void {
        this.tabService.setActiveTab('home');
        window.location.href = "";
    }
}