import { Component, OnInit, Input } from '@angular/core';  // Assurez-vous que `Input` est importé correctement
import { FaceSnap } from '../../../core/model/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,DatePipe,
    CommonModule,
  ],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() facesnap!: FaceSnap;  // Utilisation correcte de `@Input`

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
