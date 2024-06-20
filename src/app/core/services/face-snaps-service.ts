import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private readonly apiUrl = 'http://localhost:3000/facesnaps';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir tous les FaceSnaps
  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>(this.apiUrl);
  }

  // Méthode pour obtenir un FaceSnap par son ID
  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`${this.apiUrl}/${faceSnapId}`);
  }

  // Méthode pour snap/unsnap un FaceSnap par son ID
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`${this.apiUrl}/${faceSnapId}`, updatedFaceSnap))
    );
  }

  // Méthode pour ajouter un nouveau FaceSnap
  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFacesnap.id + 1
      })),
      switchMap(newFacesnap => this.http.post<FaceSnap>(this.apiUrl, newFacesnap))
    );
  }
}
