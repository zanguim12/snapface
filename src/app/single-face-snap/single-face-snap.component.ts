import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    CommonModule
  ],
  templateUrl:'./single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  textsnap!: string;
  userHasSnapped!: boolean;
  facesnap$!: Observable<FaceSnap>;
 // facesnap!: FaceSnap;


 @Input() facesnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
    this.textsnap = 'Oh Snap!';
    const facesnapId = +this.route.snapshot.params['id'];
    this.facesnap$ = this.faceSnapsService.getFaceSnapById(facesnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.textsnap === 'Oh Snap!') {
        this.facesnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.textsnap = 'Oops, unSnap!')
        );
    } else {
        this.facesnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.textsnap = 'Oh Snap!')
        );
    }
}

  unSnap(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').subscribe(updatedFaceSnap => {
      this.facesnap = updatedFaceSnap;
      this.textsnap = 'Oh Snap!';
      this.userHasSnapped = false;
    });
  }

  snap(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').subscribe(updatedFaceSnap => {
      this.facesnap = updatedFaceSnap;
      this.textsnap = 'Oops, unSnap!';
      this.userHasSnapped = true;
    });
  }

  private prepareInterface(): void {
    this.textsnap = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnapsService.getFaceSnapById(faceSnapId).subscribe(faceSnap => {
      this.facesnap = faceSnap;
    });
  }
}
