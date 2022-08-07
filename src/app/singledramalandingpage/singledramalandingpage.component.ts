import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
@Component({
  selector: 'app-singledramalandingpage',
  templateUrl: './singledramalandingpage.component.html',
  styleUrls: ['./singledramalandingpage.component.css']
})
export class SingledramalandingpageComponent implements OnInit {
  object: any;

  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
    this.dataService.searchedDramaOb.subscribe(data=>{
      console.log(data)
      this.object=data;
    })
  }

  activeTab = 'search';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
  }

  Reviews(activeTab:any){
    this.activeTab = activeTab;
  }
  Recommendations(activeTab:any){
    this.activeTab = activeTab;
  }
  Photos(activeTab:any){
    this.activeTab = activeTab;
  }
}
