import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_CHALLENGES = gql`
  {
    allChallenges {
      edges {
        node {
          title
          teaser
          logo
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private favourites: Map<number, boolean>;

  constructor(private apollo: Apollo) {
    this.favourites = new Map();
  }

  toggleFavourite(id: number): void {
    if (this.favourites.has(id))
      this.favourites.set(id, !this.favourites.get(id));
    else this.favourites.set(id, true);
  }
  isFavourite(id: number): boolean {
    if (this.favourites.has(id)) return this.favourites.get(id);
    return false;
  }
  getChallenges(): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery({
        query: GET_CHALLENGES,
      })
      .valueChanges.pipe(
        map((result) => {
          if (result.data) {
            return (result.data as any).allChallenges.edges;
          }
        })
      );
  }
}
