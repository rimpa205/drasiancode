import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DramaserviceService } from 'src/app/dramaservice.service';
import { DataserviceService } from 'src/app/dataservice.service';
import {Routes,RouterModule, Router} from '@angular/router'
import * as e from 'cors';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-alldramadata',
  templateUrl: './alldramadata.component.html',
  styleUrls: ['./alldramadata.component.css']
})
export class AlldramadataComponent implements OnInit {
  dramaArr: any=[];
  counter:any=0
  searchedDataResults: any=[];
 dramainfomore:any=[]
  routerurl: any;
  constructor(private router: Router,private dataServ:DataserviceService,private dramaService:DramaserviceService) { }

  async getDataAgain(){
     (await this.dramaService.getData()).subscribe(data=>{
      let temp:any=[]
      temp=data
    })
  }

   async ngOnInit()  {
console.log(this.router.url);
this.routerurl=this.router.url
    this.dataServ.searchedDramaOb.subscribe(data=>{
      console.log(data)
      this.handleSearch(data)
    })
 
    //  (await this.dramaService.getData()).subscribe(async data=>{
    //   let temp:any=[]
    //  temp=data
    // //console.log(temp["results"])
     
    //   console.log(temp["total_pages"])
    //   //temp["results"].index=this.counter
    //   // this.dramaService.insertData(temp["results"]).subscribe(data=>{
    //   //      console.log(data)
    //   //    })
    //   for(this.counter=2;this.counter<temp["total_pages"];this.counter++){
    //     this.dataServ.changeScrollObservable(this.counter);
    //     (await this.dramaService.getData()).subscribe(data=>{
    //       let temp:any=[]
    //      temp=data
    //     this.dramaArr.push(...temp["results"])
    //    console.log(this.dramaArr)
//        this.dramaArr.forEach(async (e: any) => {
//         (await this.dramaService.fetchTitleInfo(e.id)).subscribe((data): void=>{
//           let temp:any=[]
//          temp=data
//         this.dramainfomore.push(data)          
// console.log("Dramainfomore", this.dramainfomore)
//         })
//       });
      //  this.dramaService.insertData(this.dramaArr).subscribe(data=>{
      //    console.log(data)
      //  })
        //})
        
     // })
   // }

  
 // })

  // array.forEach(async (e: any) => {
  //           (await this.dramaService.fetchTitleRecommendations(e)).subscribe((data:any): void=>{
  //             let temp:any=[]
  //            temp=data
  //            data["MainDramaId"]=e
  //           this.dramainfomore.push(data)          
  //   console.log("ddinfo", this.dramainfomore)
  //           })
  //         });
          
 
}
handleSearch(event:any){
  this.dramaService.getSearchedDrama(event).subscribe(data=>{
    console.log(data)
    //this.searchedDataResults=[];
    this.searchedDataResults=data
    this.searchedDataResults.forEach((e:any)=>{
      e.backdrop_path='https://image.tmdb.org/t/p/w500'+e.backdrop_path
     
    })
    //this.searchedDataResults.push(data)
  })
  
  }

  sendClickedDramaInfo(name:any){
this.dataServ.changeSearchedDrama(name)
  }

 
}
