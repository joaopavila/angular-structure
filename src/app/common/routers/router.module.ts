import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTER_UTIL } from './utils/router.util';

@NgModule({
    imports: [RouterModule.forRoot(ROUTER_UTIL, { useHash: false })],
    exports: [RouterModule]
})



export class RoutersModule {}
