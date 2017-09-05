import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './general-components/not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AppRoutingProviders, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRouting, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
