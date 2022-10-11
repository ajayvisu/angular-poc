import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { FormsComponent } from './forms/forms.component';
import { HooksComponent } from './hooks/hooks.component';

@NgModule({
  declarations: [AppComponent, DecoratorsComponent, FormsComponent, HooksComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
