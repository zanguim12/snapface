import { SnapType } from "./snap-type.type";

export class FaceSnap {

  location?: string;
  id: number;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdat: Date,
              public snaps: number,
              public ids: number) {
                //this.id = crypto.randomUUID().substring(0,10);
                this.id = ids;
              }


  addSnap(): void {
     this.snaps++;
       }

  removeSnap(): void {
    this.snaps--;
      }

  setLocation(location: string): void{
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  snap(snaptype: SnapType) {
    if (snaptype === 'snap') {
      this.addSnap();
    } else if (snaptype === 'unsnap') {
      this.removeSnap();
    }
}

}

