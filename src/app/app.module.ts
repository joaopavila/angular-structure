import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { ExampleComponentComponent } from './components/example-component/example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
