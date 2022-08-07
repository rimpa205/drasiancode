import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { DramadataComponent } from './dramadata/dramadata.component';
import { DramaserviceService } from 'src/app/dramaservice.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DramainfoComponent } from './dramainfo/dramainfo.component';
import { SocialLoginModule, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { RouterModule, Routes } from '@angular/router';
 

import {
  GoogleLoginProvider,
 
  FacebookLoginProvider
} from 'angularx-social-login';
import { AlldramadataComponent } from './alldramadata/alldramadata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingledramalandingpageComponent } from './singledramalandingpage/singledramalandingpage.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { MainDramaDashboardComponent } from './main-drama-dashboard/main-drama-dashboard.component';
import { CurrentlyAiringToBeAiredComponent } from './currently-airing-to-be-aired/currently-airing-to-be-aired.component';
//import { Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationDirective } from './pagination.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentformComponent } from './commentform/commentform.component'
import {  ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'singledramainfo',component:SingledramalandingpageComponent,
    
  },
  {
    path:'navbar',component:NavbarComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DramadataComponent,
    HeaderComponent,
    DramainfoComponent,
    AlldramadataComponent,
    NavbarComponent,
    SingledramalandingpageComponent,
    EpisodeDetailsComponent,
    MainDramaDashboardComponent,
    CurrentlyAiringToBeAiredComponent,
   
    PaginationDirective,
        CommentsComponent,
        CommentComponent,
        CommentformComponent,
        
  ],
  imports: [
    ReactiveFormsModule,
MatPaginatorModule,
NgxPaginationModule,
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DramaserviceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
         {
           id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
               '196369863441-70p5jcpqfi2r5b4iecf1eesl80ev8g5a.apps.googleusercontent.com',
               

              )
            
          }
         
        ]
      } as SocialAuthServiceConfig,
    }
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
