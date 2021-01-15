import { Component, Input, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenges-list-item',
  templateUrl: './challenges-list-item.component.html',
  styleUrls: ['./challenges-list-item.component.css'],
})
export class ChallengesListItemComponent implements OnInit {
  @Input() challenge: any;
  @Input() id: number;
  isFavourite: boolean;

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.isFavourite = this.challengesService.isFavourite(this.id);
  }
  toggleFavourite(): void {
    this.challengesService.toggleFavourite(this.id);

    this.isFavourite = !this.isFavourite;
  }
}
