import { Component, OnInit } from '@angular/core';
//import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
//import { HeaderComponent } from './header/header.component';
import { Router, RouterOutlet } from '@angular/router';
//import { Observable, interval, of } from 'rxjs';
//import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CoreModule } from './core/core.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //HeaderComponent,
    AsyncPipe,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
