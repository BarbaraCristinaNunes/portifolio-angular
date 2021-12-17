import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'web-developer.component.html'
})

export class WebDeveloperComponent implements OnInit {
    constructor(private httpclient: HttpClient) { }

    datajason : any;
    ngOnInit() { 
        this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
            this.datajason = data?.workExperiences?.webDeveloper;
        })
    }
}