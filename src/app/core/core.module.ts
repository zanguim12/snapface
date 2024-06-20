import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorProviders } from './interceptors';
import { LOCALE_ID,} from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  providers: [
       { provide: LOCALE_ID, useValue: 'fr-FR' },
      httpInterceptorProviders
    ]
})
export class CoreModule { }
