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
  isFavourite: boolean;

  constructor(
    private challengesService: ChallengesService,
    private route: ActivatedRoute
  ) {}

  getChallenge(): void {
    this.challengesService
      .getChallenges()
      .subscribe((challenges) => (this.challenge = challenges[this.id]));
  }
  toggleFavourite(): void {
    this.challengesService.toggleFavourite(this.id);

    this.isFavourite = !this.isFavourite;
  }
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getChallenge();
    this.isFavourite = this.challengesService.isFavourite(this.id);
  }
}
