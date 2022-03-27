import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { AboutMeComponent } from './features/pages/about-me/about-me.component';
import { ProyectsComponent } from './features/pages/proyects/proyects.component';


const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'inicio',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'sobre-mi',
        component: AboutMeComponent,
        pathMatch: 'full',
      },
      {
        path: 'proyectos',
        component: ProyectsComponent,
        pathMatch: 'full',
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },

];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
