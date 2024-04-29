import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlacementComponent } from './placement/placement.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path :'aboutus',component: AboutusComponent},
  {path:'placement',component: PlacementComponent},
  {path: 'contact',component: ContactComponent},
  {path:'user-login',component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
