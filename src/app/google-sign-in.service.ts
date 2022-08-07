import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {
private auth2:any;
private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  constructor(private router:Router) {
    // gapi.load('auth2',()=>{
    //  this.auth2 = gapi.auth2.init({
    //     client_id:"196369863441-70p5jcpqfi2r5b4iecf1eesl80ev8g5a.apps.googleusercontent.com",
    //     hosted_domain: 'gmail.com'
    //   })
    // })

  

   }

  

   

   public signIn(){
     this.auth2.signIn({
scope:'https://www.googleapis.com/auth/gmail.readonly'
     }).then((user: any)=>{
      console.log(user)
      this.router.navigateByUrl('/navbar')
       this.subject.next(user)
       

     }).catch(()=>{
this.subject.next(undefined)
     })
   }


   public signOut(){
     this.auth2.signOut().then(()=>{
       this.subject.next(undefined)
     })
   }

   public Observable(){
     console.log(this.subject)
     return this.subject.asObservable()
   }
}
