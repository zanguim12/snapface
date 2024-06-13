import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core'; // Importez LOCALE_ID ici s'il n'est pas déjà importé
import { AppRoutingModule } from './app-routing.module'; // Si vous avez un AppRoutingModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
