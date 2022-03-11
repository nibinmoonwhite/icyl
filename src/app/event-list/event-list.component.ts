import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  data: any;
  constructor(private fb: FormBuilder,private api:ApiService,private router:Router,private route: ActivatedRoute) { }


  getEventsList() {   
    this.api.Listevents().subscribe(res => {
    this.data=res['response'];
    console.log(this.data);
    
       
    });
  }


  ngOnInit(): void {
    this.getEventsList()
    
  }

}
