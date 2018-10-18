import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule { }

// Exemplo de como importar o store
// Lembrar de baixar as dependencias do NgRX
// import { NgModule } from '@angular/core';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';

// import { StoreService } from './store.service';
// import { StoreEffects } from './store.effects';
// import { StoreReducer } from './store.reducer';

// @NgModule({
//   imports: [
//     StoreModule.forFeature('store', storeReducer),
//     EffectsModule.forFeature([StoreEffects])
//   ],
//   exports: [StoreModule, StoreModule],
//   providers: [StoreService]
// })
// export class StoreModule {}
