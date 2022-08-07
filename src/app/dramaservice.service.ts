import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { DataserviceService } from 'src/app/dataservice.service';
const discoverAPIurl = `https://api.themoviedb.org/3/discover/tv?api_key=f704859730f12eb337992486d5b18dc5&include_null_first_air_dates=false`;
const titleAPIurl = `https://api.themoviedb.org/3/tv`;
const baseUrl='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DramaserviceService {
  state: { theme: string; display_lang: string; orig_lang: string; sort_by: string; genres: string; air_date_year: string; page: any; search_query: string; query_titles: never[]; titles: never[]; total_pages: number; total_results: number; query_total_results: number; };
  http: any;

  constructor(private httpClient:HttpClient,private dataServ:DataserviceService) {
    this.state = {
      theme               : "",
      display_lang        : "en-US",
      orig_lang           : "ko",
      sort_by             : "popularity.desc",
      genres              : "18",
      air_date_year       : "",
      page                : 1,
      search_query        : "",
      query_titles        : [],
      titles              : [],
      total_pages         : 0,
      total_results       : 0,
      query_total_results : 0
    };
    this.dataServ.scrollObservale.subscribe(data=>{
      console.log("Changed",data)
      if(data){
        this.state = {
          theme               : "",
          display_lang        : "en-US",
          orig_lang           : "th",
          sort_by             : "popularity.desc",
          genres              : "18",
          air_date_year       : "",
          page                : data,
          search_query        : "",
          query_titles        : [],
          titles              : [],
          total_pages         : 0,
          total_results       : 0,
          query_total_results : 0
        };
        this.getData();
      }
      
    })

   }

  //  fetchTitleInfo = async (titleId: any) => {
  //   const titleAPI = `${titleAPIurl}/${titleId}?api_key=f704859730f12eb337992486d5b18dc5&language=${this.state.display_lang}`;
  //   return await  this.httpClient.get(titleAPI
       
  //   );
  // }; 


   fetchTitleInfo(titleId:any){
    const titleAPI = `${titleAPIurl}/${titleId}?api_key=f704859730f12eb337992486d5b18dc5&language=${this.state.display_lang}`;
    return   this.httpClient.get(titleAPI);
  }

  //https://api.themoviedb.org/3/tv/96777/recommendations?api_key=f704859730f12eb337992486d5b18dc5&language=en-US&page=1

  // fetchTitleRecommendations = async (titleId: any) => {
  //   const titleAPI = `${titleAPIurl}/${titleId}/recommendations?api_key=f704859730f12eb337992486d5b18dc5&language=${this.state.display_lang}`;
  //   return await  this.httpClient.get(titleAPI
       
  //   );
  // }; 

  fetchTitleRecommendations(titleId:any,page_no:number){
    const titleAPI = `${titleAPIurl}/${titleId}/recommendations?api_key=f704859730f12eb337992486d5b18dc5&language=${this.state.display_lang}&page=${page_no}`;
      return   this.httpClient.get(titleAPI)
  }

  // https://api.themoviedb.org/3/discover/tv?api_key=f704859730f12eb337992486d5b18dc5&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_genres=18&with_original_language=ko&first_air_date_year=&page=1
  
 async getData(){
  
console.log("State",this.state)
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
const discoverAPI = `${discoverAPIurl}&language=${this.state.display_lang}&sort_by=${this.state
  .sort_by}&with_genres=${this.state.genres}&with_original_language=${this.state
  .orig_lang}&first_air_date_year=${this.state.air_date_year}&page=${this.state.page}`;
console.log(discoverAPI)

      return this.httpClient.get(discoverAPI,{headers:headers
       
      })
 
  }
 // https://api.themoviedb.org/3/tv/93405?api_key=f704859730f12eb337992486d5b18dc5&language=en-US
  
insertData(data:any){
  return this.httpClient.post(baseUrl+'/postDramaData',data)
}

getAllDistinctID(){
  return  this.httpClient.get(baseUrl+'/getAllDistinctID')
}

getSearchedDrama(name:any){
  return this.httpClient.get(baseUrl+'/getSearchedDrama'+'/'+name)
}

getRecentAiringDramas(currentYear:any){
  return this.httpClient.get(baseUrl+'/getRecentAiringDramas'+'/'+currentYear)
}

getAdditionalDetils(id:any){
return this.httpClient.get(baseUrl+'/getAdditionalDetils'+'/'+id)
}

getRecommendations(id:any){
  return this.httpClient.get(baseUrl+'/getRecommendations'+'/'+id) 
}
}
