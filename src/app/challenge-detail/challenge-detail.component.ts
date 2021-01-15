import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css'],
})
export class ChallengeDetailComponent implements OnInit {
  challenge: any;
  id: number;

  constructor(
    private challengesService: ChallengesService,
    private route: ActivatedRoute
  ) {}
  getChallenge(): void {
    this.challengesService
      .getChallenges()
      .subscribe((challenges) => (this.challenge = challenges[this.id]));
  }
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getChallenge();
  }
}
