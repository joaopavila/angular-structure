import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from '@app/product/product.routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  exports: [],
  declarations: [ProductComponent],
  providers: [],
})
export class ProductModule { }
