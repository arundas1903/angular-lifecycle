import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SubComponentComponent } from './components/sub-component/sub-component.component';
import { SubComponent2Component } from './components/sub-component2/sub-component2.component';
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponentComponent,
    SubComponent2Component,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
