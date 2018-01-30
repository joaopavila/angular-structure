import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [ProductComponent],
  providers: [],
})
export class ProductModule { }
