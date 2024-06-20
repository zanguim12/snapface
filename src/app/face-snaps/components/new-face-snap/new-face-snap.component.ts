import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FaceSnap } from '../../../core/model/face-snap';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Route, Router } from '@angular/router';
import { tap } from 'rxjs';


@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapform!: FormGroup;
  facesnapPreview$!: Observable<FaceSnap>;
  urlregex!: RegExp;

  constructor(private formBuilder:FormBuilder,
    private faceSnapsService: FaceSnapsService,
    private router: Router)
    {}

  ngOnInit(): void {

    this.urlregex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapform = this.formBuilder.group({
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required], Validators.pattern(this.urlregex)],
        location: [null]},
        {
          updateOn: 'blur'
    });

    this.facesnapPreview$ = this.snapform.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: 0
      }))
    );

    }

    onSubmitForm() {
      this.faceSnapsService.addFaceSnap(this.snapform.value).pipe(
          tap(() => this.router.navigateByUrl('/facesnaps'))
      ).subscribe();
  }


}
