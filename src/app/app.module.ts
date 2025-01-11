import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

import { GridTextComponent } from './component/grid-text-component/grid-text.component';
import { GridTextPageComponent } from './page/grid-text-page/grid-text.page';

import { IconComponent } from './component/icon-component/icon.component';
import { IconPageComponent } from './page/icon-page/icon.page';

@NgModule({
  declarations: [
    AppComponent,
    GridTextPageComponent,
    GridTextComponent,
    IconComponent,
    IconPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
