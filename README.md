# Portifolio2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2 and it replaces the project from the repository [portifoli](https://github.com/BarbaraCristinaNunes/portfolio).

------
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

-----
## Objective

I present my work experiences in this portfolio. I am a biologist who is learning web development because I want change my career. So I need to show both experiences in my portfolio.

-------
## Project's structure

In the [app.component.html](https://github.com/BarbaraCristinaNunes/portifolio2/blob/master/src/app/app.component.html) I decided to create a introduction about me. So I show my profile image, a short description, two buttons and applied some styles.

I also created the [biologist.component.html](https://github.com/BarbaraCristinaNunes/portifolio2/tree/master/src/app/pages/biologist), to show my experiences as a biologist, and the [web-developer.component.html](https://github.com/BarbaraCristinaNunes/portifolio2/tree/master/src/app/pages/webDeveloper) to show my experiences as a web developer. In these components.html I am building the structure to show my experiences and my intention is to show each experience when the user clicks on the buttons from the app.component.html.

I decided to build the [workExperiences.json](https://github.com/BarbaraCristinaNunes/portifolio2/blob/master/src/assets/workExperiences.json) where I keep all information about my work experiences. This json has 3 big arrays (biologist, webDeveloper, concats), where I wrote my experiences, academic education, projects and publications. The array contact has the links of my social media, emails and phones.

<b> Keeping my personal information in a json file is a good idea because I don't have to change my components if I improve a skill or get a new experience. I also can keep some information private and show them only if I think it is necessary.</b>

---------------------------
## <i> Making the connection between the components.html </i>

### [Routing](https://angular.io/tutorial/toh-pt5): 

I created an [app-routing.module.ts](https://github.com/BarbaraCristinaNunes/portifolio2/blob/master/src/app/app-routing.module.ts). In this file I impor:
 * NgModule from '@angular/core; 
 * RouterModule and Routes from '@angular/router; 
 * BiologistComponent;
 * WebDeveloperComponent

#### I also created an array with the paths of each BiologistComponent and WebDeveloperComponent

#### In the app.module.ts I import:
* AppRoutingModule from app-routing.module;
* BiologistComponent;
* WebDeveloperComponent;
#### I put AppRoutingModule in the array imports. I put BiologistComponent and  WebDeveloperComponent in the array declarations
--------------

## <i> Style of the project </i>
I set up my Angular project to begin using [Angular Material](https://material.angular.io/) and [Bootstrap version 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

I am using bootstrap to build the grid of my project and Material Design to create the visual of my page and give movement to my components.

--------
## <i> Reading local json file </i>

### [HttpClientModule](https://angular.io/api/common/http/HttpClientModule)
I am using [HttpClient](https://angular.io/api/common/http/HttpClient) to access and read [workExperiences.json](https://github.com/BarbaraCristinaNunes/portifolio2/blob/master/src/assets/workExperiences.json). 

I import HttpClientModule from '@angular/common/http' in app.module.ts and HttpClient from '@angular/common/http' in  [biologist.component.html](https://github.com/BarbaraCristinaNunes/portifolio2/tree/master/src/app/pages/biologist) and [web-developer.component.html](https://github.com/BarbaraCristinaNunes/portifolio2/tree/master/src/app/pages/webDeveloper). Then I created the method ngOnInit() to do this access.


```
ngOnInit() { 
        this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
            this.datajason = data?.workExperiences?.webDeveloper;
        })
    }
```

The simbles <b> ? </b> represent an if steatment. In this case they mean that if I don't have workExperiences and/or webDeveloper I return nothing. So My page doesn't broke if there is no information in my json.