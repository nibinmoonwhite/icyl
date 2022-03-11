import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, iage } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { posts } from '../model/model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-ramadan',
  templateUrl: './ramadan.component.html',
  styleUrls: ['./ramadan.component.css']
})
export class RamadanComponent implements OnInit {
  data: any;
  posts:posts[]=[];
  video: any;
  prayer: any;
  // ages:iage[]=[];
  ages: any;
  committees : any;
  card :any;
  url: any;
  safeURL: any;
   banner : any;


  volunteerForm = this.fb.group({

    firstname: [null, Validators.required],
    lastname: [null, [Validators.required]],
    age_group: [null, [Validators.required]],
    committee: [null, [Validators.required]],
    email: [null, [Validators.required]],
    is_lead: [false, [Validators.required]],
    is_volunteer: [false, [Validators.required]],
    phone: [null, [Validators.required]],

  });  


  
  constructor(private fb: FormBuilder,private api:ApiService,private router:Router,
    private route: ActivatedRoute,private _sanitizer: DomSanitizer) {
    // this.listvideo();
  }

  
  getEventsList() {   
    this.api.Listevents().subscribe(res => {
    this.data=res['response'];
    // console.log(this.data);
    this.posts=res['response']
    // console.log(this.posts.slice(0,3))

    this.data=this.posts.slice(0,3)
       
    });
  }


  listCommittees(){
     this.api.ListCommittee().subscribe(res => {
      this.committees=res['response'];
      console.log(this.committees);})
  }

  listagegroup(){    
    this.api.ListageGroup().subscribe(res =>{
    this.ages=res['response'];
    console.log(this.ages)
    })

  }

   listvideo(){
   this.api.ListVideo().subscribe(res =>{
   this.video=res['response']
  //  console.log(this.video);
   this.url=this.video[0].video
   console.log(this.url )
   this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.url); 

   

   })
   }


   listprayer(){
     this.api.ListPrayers().subscribe(res =>{
     this.prayer=res['response']
     console.log(this.prayer);
     })

   }

   ListCards(){
    this.api.ListCard().subscribe(res =>{
    this.card=res['response']
    console.log(this.prayer);
    })

  }


  Listbannerimage(){
    this.api.ListBannerindex().subscribe(res =>{
    this.banner=res['response']
    console.log(this.banner);    
    })
  }
   

  addForm(){
    this.api.addform(this.volunteerForm.getRawValue()).subscribe(res =>{
    this.data=res
    // console.log(this.data.message)
    // alert(this.data.message === "Success"?"Successfully added":"failed to add")
    // this.canceluser();
    },
    // error=>{
    //   alert(error.error.email[0])
    // }
    )
    }

  ngOnInit(): void { 
     this.getEventsList()
     this.addForm();
     this.ListCards();
     this.listagegroup();
     this.listCommittees();
     this.listprayer();
     this.listvideo();
     this.Listbannerimage();

  }

  onSubmit(){
    this.addForm();   
    
  }
}
