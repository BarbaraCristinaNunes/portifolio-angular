import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  datajason: any;
  
  ngOnInit(): void {
    this.httpclient.get('assets/workExperiences.json').subscribe((data:any) => {
      this.datajason = data?.workExperiences?.contacts;
  })
  }

}
