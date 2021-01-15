import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengesListItemComponent } from './challenges-list-item/challenges-list-item.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChallengesListComponent,
    ChallengesListItemComponent,
    ChallengeDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
