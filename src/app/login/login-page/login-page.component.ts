import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { GoogleSignInService } from 'src/app/google-sign-in.service';
import { DataserviceService } from 'src/app/dataservice.service';
//import { url } from 'inspector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  user:any;
  googleLoginOptions = {
    scope: 'profile email'
  };
 constructor(private dataServ:DataserviceService,private authServ:SocialAuthService, private http:HttpClient,
  private signIn:GoogleSignInService, private router:Router,private ref:ChangeDetectorRef){

 }
 ngOnInit(){
  //  if(this.user!=null){
  //   this.signIn.Observable().subscribe(user=>{
  //     this.user=user;
  //     console.log(user)
  //     this.ref.detectChanges();
  //   })
  //  }
  // this.authServ.authState.subscribe((user)=>{
  //   this.user=user
  //   console.log(user);
  //   this.router.navigateByUrl('/navbar')
  // })


}

 

//  signInWithGoogle() {
//  this.authServ.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
//    localStorage.setItem('google_auth',JSON.stringify(data))
//    console.log(data);
//    this.router.navigateByUrl('/navbar').then();
//    //this.router.navigateByUrl('/navbar').then()
//  })
// }

signInMethod(){
  //this.signIn.signIn();
  this.authServ.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
       localStorage.setItem('google_auth',JSON.stringify(data))
       console.log(data);
       this.user=data;
       this.dataServ.sendLoggedInUser(this.user);
       this.router.navigateByUrl('/navbar')
       })

}

signOutMethod(){
 // this.signIn.signOut()
 this.authServ.signOut();
}

}
