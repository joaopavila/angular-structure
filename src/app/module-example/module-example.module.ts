import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleExampleRoutingModule } from './module-example-routing.module';
import { ModuleExampleComponentComponent } from './components/module-example-component/module-example-component.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleExampleRoutingModule
  ],
  declarations: [ModuleExampleComponentComponent]
})
export class ModuleExampleModule { }
