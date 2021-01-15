import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css'],
})
export class ChallengesListComponent implements OnInit {
  challenges$: Observable<any>;

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.challenges$ = this.challengesService.getChallenges();
  }
}
