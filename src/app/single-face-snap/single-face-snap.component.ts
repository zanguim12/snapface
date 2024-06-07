import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute } from '@angular/router';

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

  @Input() facesnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  //facesnap!: FaceSnap;
  textsnap!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap');
    this.facesnap.removeSnap();
    this.textsnap = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap');
    this.facesnap.addSnap();
    this.textsnap = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  private prepareInterface(): void {
    this.textsnap = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
