import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './features/pages/home/home.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { HeaderComponent } from './features/components/header/header.component';
import { AboutMeComponent } from './features/pages/about-me/about-me.component';
import { ProyectsComponent } from './features/pages/proyects/proyects.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { CardProfileComponent } from './features/components/card-profile/card-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ProyectsComponent,
    ContactComponent,
    CardProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
