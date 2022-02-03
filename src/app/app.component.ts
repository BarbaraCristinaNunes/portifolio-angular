import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio2';

  myTitle = "Biologist and Web Developer";
  aboutMe = ""; 

  biologistInformation()
  {
    this.myTitle = "Master in Ecology, Conservation and Wildlife Management";
    this.aboutMe = "I am a biologist passionate for plant ecology, distribution patterns and conservations. My goal as a biologist is to work with plant conservation, mainly with endangered plants. My main skills as a biologist are plant identification, creating species distribution maps (ArcGIS), biological data management and project management.";
  }  

  webDeveloperInformation()
  {
    this.myTitle = "Junior Full Stack Developer";
    this.aboutMe = "I am a junior developer with a previous background in environmental areas as a biologist. My main interest now is to start an internship as a full stack where I can develop my skills in PHP, database, web design and can contribute with a team. I am very communicative, details and result oriented and a good time manager."; 

  }

}
