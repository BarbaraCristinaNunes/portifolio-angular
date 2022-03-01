import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiologistComponent } from './pages/biologist/biologist.component';
import { WebDeveloperComponent } from './pages/webDeveloper/web-developer.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
  path:"Biologist",
  component: BiologistComponent
  },
  {
    path:"Web-Developer",
    component: WebDeveloperComponent
  },
  {
    path: "",
    component: WebDeveloperComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
