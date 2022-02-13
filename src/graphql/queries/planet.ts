import { gql } from '@apollo/client';

export const PLANET_LIST = gql`
  query AllPlanets($after: String = "") {
    allPlanets(first: 10, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      planets {
        id
        name
      }
    }
  }
`;

export const PLANET_DETAIL = gql`
  query Planet($id: ID!) {
    planet(id: $id) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
