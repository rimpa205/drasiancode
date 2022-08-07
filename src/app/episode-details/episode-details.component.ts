import { Component, Input, OnInit } from '@angular/core';
import { DramaserviceService } from 'src/app/dramaservice.service';
import { DataserviceService } from 'src/app/dataservice.service';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  @Input() object: any;
  genres: any=[];
  origin_country: any=[];
  networks: any=[];
  production_companies: any=[];
  production_countries: any=[];
  seasons: any=[];
  status: any=[];
  picLink:any="https://image.tmdb.org/t/p/w500"
  recommendationArr: any;
  showBool: any;
  constructor(private dramaService:DramaserviceService,private dataServ: DataserviceService) { }

  ngOnInit(): void {
    this.showBool=true;
    if(this.object){
      this.dramaService.getAdditionalDetils(this.object.id).subscribe((data: any)=>{
        console.log(data)
        this.genres=JSON.parse(data[0]["genres"])
        this.origin_country=JSON.parse(data[0]["origin_country"])
      
        this.networks=JSON.parse(data[0]["networks"])
        this.networks.forEach((e: { logo_path: any; })=>{
          e.logo_path=this.picLink+e.logo_path;
        })
       
        this.production_companies=JSON.parse(data[0]["production_companies"])
        this.production_countries=JSON.parse(data[0]["production_countries"])
        this.seasons=JSON.parse(data[0]["seasons"])
        //this.status=JSON.parse(data[0]["status"])

        this.dramaService.getRecommendations(this.object.id).subscribe((data: any)=>{
          console.log(data)
          this.recommendationArr=JSON.parse(data[0].results)
          this.recommendationArr.forEach((e: { backdrop_path: any; })=>{
            e.backdrop_path=this.picLink+e.backdrop_path;
          })
        })
      })
    }
   
  }

  sendClickedDramaInfo(name:any){
    this.dataServ.changeSearchedDrama(name)
    if(this.recommendationArr.length!==0){
      this.dramaService.getRecommendations(name.id).subscribe((data: any)=>{
        console.log(data)
        this.recommendationArr=[];
        this.recommendationArr=JSON.parse(data[0].results)
        this.recommendationArr.forEach((e: { backdrop_path: any; })=>{
          e.backdrop_path=this.picLink+e.backdrop_path;
        })
      })
    }
   
  //  this.showBool=false;

      }

}
