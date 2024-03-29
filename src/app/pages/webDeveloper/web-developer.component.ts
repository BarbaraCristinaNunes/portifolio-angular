import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'web-developer.component.html',
    styleUrls: ['web-developer.component.css']
})

export class WebDeveloperComponent implements OnInit {
    constructor(private httpclient: HttpClient) { }

    myTitle = "Junior Full Stack Developer";
    aboutMe = "I am a junior developer with a previous background in environmental areas as a biologist. My main interest now is to start an internship as a full stack where I can develop my skills in PHP, database, web design and can contribute with a team. I am very communicative, details and result oriented and a good time manager.";
    
    academicEducation : any;
    experiences : any;
    skills : any;
    projects : any;

    ngOnInit() { 
        this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
            this.academicEducation = data?.workExperiences?.webDeveloper?.academicEducation;
            this.experiences = data?.workExperiences?.webDeveloper?.experiences;
            this.skills = data?.workExperiences?.webDeveloper?.skills;
            this.projects = data?.workExperiences?.webDeveloper?.projects;
        })
    }
}