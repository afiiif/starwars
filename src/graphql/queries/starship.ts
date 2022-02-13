import { gql } from '@apollo/client';

export const STARSHIP_LIST = gql`
  query AllStarships($after: String = "") {
    allStarships(first: 10, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      starships {
        id
        name
      }
    }
  }
`;

export const STARSHIP_DETAIL = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
