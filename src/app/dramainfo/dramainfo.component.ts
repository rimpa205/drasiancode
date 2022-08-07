import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-dramainfo',
  templateUrl: './dramainfo.component.html',
  styleUrls: ['./dramainfo.component.css']
})
export class DramainfoComponent implements OnInit {
  @Input() titleInfo: string|any;
  background: any;
  temp: any;
  genresArray: any=[];

  constructor(private sanitizer:DomSanitizer,private dataServ:DataserviceService) { }

  ngOnInit(): void {
   
     
  console.log(this.titleInfo)
  
  // <div class="backdrop" style="
  // background-image: url(&quot;https://image.tmdb.org/t/p/w780/YjO3q30GOQiWuq1vaOdA4xAbaK.jpg&quot;);"></div>
  let temp=this.titleInfo.backdrop_path.split("w500")
//this.background=this.titleInfo.background
//let elm:any=document.getElementById('backdrop')
//style="background:url('https://image.tmdb.org/t/p/w780/4LZuFMhLivOSO7zuWAQ3RffMnnr.jpg')"
//elm.style.backgroundImage = 'url(this.background)';

let finalUrl="https://image.tmdb.org/t/p/w780"+temp[1]
console.log(this.titleInfo.background)



  }

  getUrl()
{
  let temp=this.titleInfo.backdrop_path.split("w500")
  let finalUrl="https://image.tmdb.org/t/p/w780"+temp[1]
  console.log(finalUrl)
  //this.background = 'url(finalUrl)';
  return 'url(finalUrl)';
}


}
