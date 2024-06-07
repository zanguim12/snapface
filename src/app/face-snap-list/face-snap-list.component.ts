import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../model/face-snap';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
      this.facesnaps = this.faceSnapsService.getFaceSnaps();
      this.facesnaps[0].setLocation('à la montagne');
  }
}
