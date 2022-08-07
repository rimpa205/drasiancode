import { Component, OnInit } from '@angular/core';
import { DramaserviceService } from 'src/app/dramaservice.service';
@Component({
  selector: 'app-currently-airing-to-be-aired',
  templateUrl: './currently-airing-to-be-aired.component.html',
  styleUrls: ['./currently-airing-to-be-aired.component.css']
})
export class CurrentlyAiringToBeAiredComponent implements OnInit {
  picLink:any="https://image.tmdb.org/t/p/w500"
  currentlyAiring:any=[];
  totalLength: any;
  page:number=1;
  constructor(private dramaService:DramaserviceService) { }

  ngOnInit(): void {
    
this.dramaService.getRecentAiringDramas(new Date().getFullYear()).subscribe((data: any)=>{
  console.log(data)
  this.currentlyAiring=[];
  this.currentlyAiring=data;
  this.totalLength=this.currentlyAiring.length
  this.currentlyAiring.forEach((element: any) => {
    if(element.backdrop_path!=null)
    element.backdrop_path=this.picLink+element.backdrop_path
  });
})
let tempIDArray: number[]=[];
this.dramaService.getAllDistinctID().subscribe((data:any)=>{
  
  data.forEach((e: { [x: string]: string; })=>{
    tempIDArray.push(parseInt(e["id"]))
  })

let tempArray: any[]=[]
  // tempIDArray.forEach(async e=>{
  //   (await this.dramaService.fetchTitleInfo(e)).subscribe((data: any)=>{
  //     //console.log(data)
  //     tempArray.push(data)
  //     console.log(tempArray)
  //   })
  // })
//   tempIDArray.forEach(async e=>{
//     let i=1;
//     (await this.dramaService.fetchTitleRecommendations(e,i)).subscribe((data: any)=>{
          
        
//           if(data["results"].length>0){
//             tempArray.push(data)
//             console.log(tempArray)
//             i++;
//           }
         
//         })
//   })
})

  }

  onPageChange(pageNo: number) {
    console.log("Current page: ", pageNo);
  }

  // activePage:number = 0;  
  
  // displayActivePage(activePageNumber:number){  
  //   this.activePage = activePageNumber  
  // }  
//   onChangePage(pageOfItems: Array<any>) {
//     // update current page of items
//     this.currentlyAiring = pageOfItems;
// }

}
