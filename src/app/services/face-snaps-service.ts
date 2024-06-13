import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { SnapType } from '../model/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}


  private faceSnaps: FaceSnap[] = [
    // vos FaceSnap ici

    new FaceSnap(
      'Lyons',
      'Mon meilleur ami depuis tout petit !',
      'https://static.euronews.com/articles/stories/08/16/43/08/1200x675_cmsv2_bcb3be74-5111-51c6-ac7d-173ac98cec6e-8164308.jpg',
      new Date(),
      0,
      "1"
    ),
    new FaceSnap(
      'TonTon',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbQ4ly8f_2duN_z6JTFvfCjetVmdHdgA4mg&s',
      new Date(),
      6,
      "2"
    ).withLocation('la montagne')
];

getFaceSnaps(): Observable<FaceSnap[]> {
  return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
}
getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
  return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
}

snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnap> {
  return this.getFaceSnapById(faceSnapId).pipe(
    map(faceSnap => {
      faceSnap.snap(snapType);
      return faceSnap;
    }),
    switchMap(updatedFaceSnap =>
      this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap)
    )
  );
}

addFaceSnap(formValue: { title: string, description: string, imageurl: string, location?: string }) {
  const newFaceSnap = new FaceSnap(
    formValue.title,
    formValue.description,
    formValue.imageurl,
    new Date(),
    0,
    (this.faceSnaps.length + 1).toString() // ou utilisez une méthode pour générer un ID unique
  );

  if (formValue.location) {
    newFaceSnap.withLocation(formValue.location);
  }

  this.faceSnaps.push(newFaceSnap);
}


}
