import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { DramaserviceService } from 'src/app/dramaservice.service';
import { DataserviceService } from 'src/app/dataservice.service';
@Component({
  selector: 'app-dramadata',
  templateUrl: './dramadata.component.html',
  styleUrls: ['./dramadata.component.css']
})
export class DramadataComponent implements OnInit {

 
  dramaArr: any[]=[];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  picLink:any="https://image.tmdb.org/t/p/w500"
  state: any;
  showDramaArr: any[]=[];
  titleInfoObj: any;
  titleInfo: any;
  genresArray: any=[];

  constructor(private dramaService:DramaserviceService,private dataServ:DataserviceService) { 
   
    
  }

  async ngOnInit(): Promise<void> {
    this.titleInfo="";
    this.dramaArr=[];
    this.state=1;

    (await this.dramaService.getData()).subscribe(data=>{
      let temp:any=[]
     temp=data
    //console.log(temp["results"])
      this.dramaArr.push(...temp["results"])
      console.log(this.dramaArr)
      this.dramaArr.forEach((elm: { backdrop_path: any; })=>{
elm.backdrop_path=this.picLink+(elm.backdrop_path)
      })
    });
    //console.log(this.dramaArr)
    this.showDramaArr=this.dramaArr
    
  }

  async showDrama(obj: any){
  
    this.titleInfo={};
    let object:any;
  //  console.log(obj.backdrop_path)
   // let temp=obj.backdrop_path.split("w500")
   // obj.background="https://image.tmdb.org/t/p/w780"+temp[1];
    (await this.dramaService.fetchTitleInfo(obj.id)).subscribe(data=>{
    console.log(data)

    this.titleInfo=data;
    let temp="https://image.tmdb.org/t/p/w780"+this.titleInfo.backdrop_path
    this.titleInfo["backdrop_path"]=temp
    console.log(this.titleInfo)
    this.titleInfo.genres.forEach((e: { name: any; })=>{
      this.genresArray.push(e.name)
    })
    this.genresArray=this.genresArray.join("  *  ")
    this.titleInfo["genresArray"]=this.genresArray
    this.dataServ.changeshowDramaObservable(this.titleInfo)
    })
    
    
   
  }

  async handleSearch(event:any){
    console.log(event.target.value)
    let query=event.target.value
    if(query){
      this.showDramaArr=this.showDramaArr.filter(
        (title) =>
          title.name.toLowerCase().includes(query.toLowerCase()) ||
          title.original_name.toLowerCase().includes(query.toLowerCase())
      );
    }
   else{
     this.showDramaArr=this.dramaArr
   }
    
  }

  async onScroll(){
    console.log("Scrolled")
    this.state=this.state+1
    this.dataServ.changeScrollObservable(this.state);
 (await (this.dramaService.getData())).subscribe((data: any)=>{
      let temp:any=[]
     temp=data
    console.log(temp["results"])
 
      this.dramaArr.push(...temp["results"])
  
    });
    console.log(this.dramaArr)
    this.showDramaArr=this.dramaArr

  }



}


