import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { AboutEnComponent } from './about-en/about-en.component';
import { ContactEnComponent } from './contact-en/contact-en.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'en', component: HomeEnComponent },
  { path: 'en/about', component: AboutEnComponent },
  { path: 'en/contact', component: ContactEnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
