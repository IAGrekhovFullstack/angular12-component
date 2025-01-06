import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridTextPageComponent } from './page/grid-text-page/grid-text.page';
import { IconPageComponent } from './page/icon-page/icon.page';

@NgModule({
  declarations: [
    AppComponent,
    GridTextPageComponent,
    IconPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
