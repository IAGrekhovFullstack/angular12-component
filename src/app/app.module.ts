import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { GridTextComponent } from './component/grid-text-component/grid-text.component';
import { GridTextPageComponent } from './page/grid-text-page/grid-text.page';
import { IconPageComponent } from './page/icon-page/icon.page';

@NgModule({
  declarations: [
    AppComponent,
    GridTextPageComponent,
    IconPageComponent,
    GridTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
