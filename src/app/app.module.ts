import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundComponent,
    TformComponent,
    RformComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
