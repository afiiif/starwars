import { gql } from '@apollo/client';

export const SPECIES_LIST = gql`
  query AllSpecies($after: String = "") {
    allSpecies(first: 10, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      species {
        id
        name
      }
    }
  }
`;

export const SPECIES_DETAIL = gql`
  query Species($id: ID!) {
    species(id: $id) {
      name
      classification
      designation
      averageHeight
      averageLifespan
      eyeColors
      hairColors
      skinColors
      language
      filmConnection {
        films {
          id
          title
        }
      }
      personConnection {
        people {
          id
          name
        }
      }
    }
  }
`;
