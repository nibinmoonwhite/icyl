import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  id: any;
  data: any;
  relData: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); 
      console.log(this.id);
      
  }); 
  console.log(this.id);
  
  this.listEventDetail()
  }
  

  listEventDetail(){
    this.api.Listevent(this.id).subscribe(res => {
      let arrData=res['response'];
      this.data=arrData[0];
      console.log(this.data);

      this.api.Listevents().subscribe(res=>{
        this.relData = res['response'];
      })
      
      
    })
  }

}
