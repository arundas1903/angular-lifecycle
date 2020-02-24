import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SubComponentComponent } from './components/sub-component/sub-component.component';
import { SubComponent2Component } from './components/sub-component2/sub-component2.component';
import { GithubComponent } from './components/github/github.component';
import { FlexComponent } from './components/flex/flex.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponentComponent,
    SubComponent2Component,
    GithubComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
