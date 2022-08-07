import { Component, OnInit, ViewChild } from '@angular/core';
import { DramaserviceService } from 'src/app/dramaservice.service';
import { DataserviceService } from 'src/app/dataservice.service';
import { AlldramadataComponent } from '../alldramadata/alldramadata.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm:any;
  @ViewChild (AlldramadataComponent)
  controls!: AlldramadataComponent;
   UserDetails:any;
  user: any;
  userName: any;
  constructor(private dataService:DataserviceService,private router:Router) { }

  ngOnInit(): void {
 //     const storage=localStorage.getItem('google_auth');
// if(storage){
//   this.UserDetails=JSON.parse(storage);
//   console.log("UserDetails",this.UserDetails)

// }else{

// }
this.dataService.loggedInUser.subscribe(data=>{
  console.log(data)
  this.user=data;
  this.userName=this.user["firstName"][0]+ this.user["lastName"][0]
  console.log(this.userName)
  
})
  }

  signOut(){
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

  onSubmitSearch(event:any){
   this.dataService.changeSearchedDrama(event)
    //this.controls.handleSearch(event)
    this.router.navigate(['/allDramaData'])
  }




}
