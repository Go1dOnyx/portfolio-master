import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { TabService } from '../services/tab.service';

@Component ({
    selector: 'app-navbar',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})

export class NavbarComponent implements OnInit {
    activeTab!: string;

    constructor(private tabService: TabService, private renderer: Renderer2, private elementRef: ElementRef){}

    ngOnInit(): void {
        this.tabService.activeTab$.subscribe(tab => this.activeTab = tab);

        const hamMenu  = this.elementRef.nativeElement.querySelector(".hamburger-menu");
        const navMenu  = this.elementRef.nativeElement.querySelector(".nav-menu");

        this.renderer.listen(hamMenu, 'click', () => {
            hamMenu.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        this.elementRef.nativeElement.querySelectorAll(".nav-item").forEach((n: Element) => n.
            addEventListener("click", () => {
                hamMenu?.classList.remove("active");
                navMenu?.classList.remove("active");
        })); 
    }

    setActiveTab(tab: string): void {
        this.tabService.setActiveTab(tab);
    }
}


    /*
        const hamMenu = document.querySelector(".hamburger-menu");
        const navMenu = document.querySelector(".nav-menu");

        hamMenu?.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            navMenu?.classList.toggle("active");
        });

        document.querySelectorAll(".nav-item").forEach( n => n.
            addEventListener("click", () => {
                hamMenu?.classList.remove("active");
                navMenu?.classList.remove("active");
        }));
     */