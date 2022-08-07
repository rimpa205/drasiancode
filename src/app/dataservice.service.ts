import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const titleAPIurl = `https://api.themoviedb.org/3/tv`;
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  scrollObservale = new BehaviorSubject(null);
  showDramaObservable = new BehaviorSubject(null);
  searchedDramaOb= new BehaviorSubject(null);
  loggedInUser= new BehaviorSubject(null);
  constructor(private http:HttpClient) { }

  changeScrollObservable(state: any): any{
    this.scrollObservale.next(state)
  }
  changeshowDramaObservable(drama:any){
this.showDramaObservable.next(drama)
  }

changeSearchedDrama(drama:any){
  this.searchedDramaOb.next(drama)
}
sendLoggedInUser(user:any){
  this.loggedInUser.next(user);
}
  
  signInWithGoogle(token: any){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API_KEY]`,
    {postBody:`id_token=${token}&providerId=google.com`,
    requestUri:"http://localhost:4200",
    returnIdpCredential:true,
    returnSecureToken:true})
  }

}
