import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AlldramadataComponent } from './alldramadata/alldramadata.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component'
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'

  },
  {
    path:'login',
    component:LoginPageComponent,
    
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'allDramaData',component:AlldramadataComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
