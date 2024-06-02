import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component ({
    selector: 'app-project',
    templateUrl : './project.component.html',
    styleUrl: './project.component.css'
})

export class ProjectComponent implements OnInit{
    searchText: string = '';

    listProjectCategories = [
        { name: 'Bank', description: "Bank account application made in ASP.NET MVC. I've used Entity Framework and Repositories to "+ 
        "help manage the data from their database. It uses CRUD operations and I'll will soon add REST architecture.",
        link: 'https://github.com/Go1dOnyx/WorldBankDBMVC'},
        { name: 'School', description: 'School management system made in ASP.NET MVC. This application uses CRUD operations and ' +
        "Entity Framework. I'm planning to implement RESTful API, adding unit tests using xUnit, and new features such as "+
        "registration pages. ",
        link: 'https://github.com/Go1dOnyx/MVCMangement-New'},
        { name: 'Calculator', description: 'Scientific Calculator is using old ASP.NET Web Forms. This application uses C#, JavaScript,'
        + " CSS, and ASP.NET as usual. This is simple scientific calculator that I'll soon work on to add more advanced features to do "+
        "complex algrebic equations and much more.",
        link: 'https://github.com/Go1dOnyx/ScientificCalculator'},
        { name: 'Ecommerce', description: "This is an ecommerce store that I am currently working on using ASP.NET Web APIs, " +
        "Angular, CSS3, HTML, and Entity Framework." +
        " However, the official ecommerce store would be based on this prototype and will have microservices. This project will be using "+
        "Angular/TypeScript for the Front-End that will connect to several Web APIs using ASP.NET.",
        link: 'https://github.com/Go1dOnyx/ZymAPI'}
    ];

    constructor(private tabService: TabService) {}

    ngOnInit(): void {
        this.tabService.setActiveTab('project');
    }

    matchCategoryList(category: any): boolean {
        return category.name.toLowerCase().includes(this.searchText.toLowerCase());
    }
    visitPage(link: string): void {
        window.location.href = link;
    }
}