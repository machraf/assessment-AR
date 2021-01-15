import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengesListComponent },
  { path: '**', redirectTo: 'challenges', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
