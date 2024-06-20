import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule,
    RouterLink,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  useremail!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.useremail = "'me@my-house.com'";
  }

  onContinue(){
    this.router.navigateByUrl('facesnaps');

  }
  onSubmitform(form: NgForm){

    console.log(form.value);
  }
}
