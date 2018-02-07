import { NgModule } from '@angular/core';
import { GetPostService } from './services/get-post.service';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [GetPostService],
})
export class HomeModule { }
