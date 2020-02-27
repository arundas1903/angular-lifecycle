import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GithubComponent } from './components/github/github.component';
import { FlexComponent } from './components/flex/flex.component';
import { ParentToChildInputComponent } from './components/parent-to-child-input/parent-to-child-input.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'github', component: GithubComponent},
  {path: 'flex', component: FlexComponent},
  {path: 'parent-to-child-input', component: ParentToChildInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
