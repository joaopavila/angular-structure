import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleComponentComponent } from './example-component/example-component.component';

@NgModule({
  declarations: [
    ExampleComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: []
})
export class SharedComponentModule { }
