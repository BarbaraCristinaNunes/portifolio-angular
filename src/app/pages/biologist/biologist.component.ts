import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: 'biologist.component.html',
    styleUrls: ['biologist.component.css']
})

export class BiologistComponent implements OnInit {
    constructor(private httpclient: HttpClient) { }

    myTitle = "Master in Ecology, Conservation and Wildlife Management";
    aboutMe = "I am a biologist passionate for plant ecology, distribution patterns and conservations. My goal as a biologist is to work with plant conservation, mainly with endangered plants. My main skills as a biologist are plant identification, creating species distribution maps (ArcGIS), biological data management and project management.";
    datajason : any;
    academicEducation : any;
    publications : any;
    experiences : any;

    ngOnInit() { 
        this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
            this.datajason = data?.workExperiences?.biologist;
            this.academicEducation = data?.workExperiences?.biologist?.academicEducation;
            this.publications = data?.workExperiences?.biologist?.publiccations;
            this.experiences = data?.workExperiences?.biologist?.experiences;
        })
    }
}