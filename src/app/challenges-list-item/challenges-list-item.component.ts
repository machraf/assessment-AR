import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges-list-item',
  templateUrl: './challenges-list-item.component.html',
  styleUrls: ['./challenges-list-item.component.css'],
})
export class ChallengesListItemComponent implements OnInit {
  @Input() challenge: any;

  constructor() {}

  ngOnInit(): void {}
}
