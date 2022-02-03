import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'biologist.component.html'
})

export class BiologistComponent implements OnInit {
    constructor(private httpclient: HttpClient) { }

    datajason : any;

    ngOnInit() { 
        this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
            this.datajason = data?.workExperiences?.biologist;
        })
    }
}