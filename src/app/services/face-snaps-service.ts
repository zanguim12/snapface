import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { SnapType } from '../model/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps: FaceSnap[] = [
    // vos FaceSnap ici

    new FaceSnap(
      'Lyons',
      'Mon meilleur ami depuis tout petit !',
      'https://static.euronews.com/articles/stories/08/16/43/08/1200x675_cmsv2_bcb3be74-5111-51c6-ac7d-173ac98cec6e-8164308.jpg',
      new Date(),
      0
    ),
    new FaceSnap(
      'TonTon',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbQ4ly8f_2duN_z6JTFvfCjetVmdHdgA4mg&s',
      new Date(),
      6
    ).withLocation('la montagne')
];

getFaceSnaps(): FaceSnap[] {
  return [...this.faceSnaps];
}
getFaceSnapById(faceSnapId: string): FaceSnap {
  const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!foundFaceSnap) {
    throw new Error('FaceSnap not found!');
  }
  return foundFaceSnap;
}

snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  faceSnap.snap(snapType);
}
}
