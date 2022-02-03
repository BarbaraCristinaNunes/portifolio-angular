import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio2';

  myTitle = "Biologist and Web Developer";
  aboutMe = "I am a person focused on resolving real problems. Therefore, during my master's I decided to work with applied search in which I show endangered cactus distribution in Brazil and propose some solutions to strengthen conservation public policy applied on these plants cases. I am also able to apply my previous experiences to build applications that can help biologists in the future. During BeCode training I created a virtual library, inspired by GBIF, where searchers can keep biodiversity data totally privity."; 

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
