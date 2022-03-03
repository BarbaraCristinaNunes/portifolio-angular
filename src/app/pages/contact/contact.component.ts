import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  socialMedias : any;
  personalContact : any;

  ngOnInit(): void {
    this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
      this.socialMedias = data?.workExperiences?.contacts?.socialMidia;
      this.personalContact = data?.workExperiences?.contacts?.personalContacts?.webDeveloperMain;
  })
  }

}
