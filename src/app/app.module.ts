import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './general-components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, AppRoutingProviders, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
