import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { Observable, interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap} from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
