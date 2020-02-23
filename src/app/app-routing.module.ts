import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GithubComponent } from './components/github/github.component';
import { FlexComponent } from './components/flex/flex.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'github', component: GithubComponent},
  {path: 'flex', component: FlexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
