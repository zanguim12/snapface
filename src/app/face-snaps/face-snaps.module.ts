import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
