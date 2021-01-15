import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';

const routes: Routes = [
  { path: 'challenge-detail/:id', component: ChallengeDetailComponent },
  { path: 'challenges', component: ChallengesListComponent },
  { path: '**', redirectTo: 'challenges', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
