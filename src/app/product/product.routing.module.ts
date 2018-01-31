import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { ProductComponent } from '@app/product/product.component';

export const productRoutes: Routes = [
  { path: 'product', component: ProductComponent }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}
