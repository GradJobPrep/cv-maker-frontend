import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { CvMakerModule } from './cv-maker/cv-maker.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [ 
  { path: '**', component: PageNotFoundComponent } 
]; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    CvMakerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
