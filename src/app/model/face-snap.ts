import { SnapType } from "./snap-type.type";

export class FaceSnap {

  location?: string;
  id: string;

  constructor(public title: string,
              public description: string,
              public imageurl: string,
              public createdat: Date,
              public snaps: number) {
                this.id = crypto.randomUUID().substring(0,10);
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
