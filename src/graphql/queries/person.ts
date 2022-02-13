import { gql } from '@apollo/client';

export const PEOPLE_LIST = gql`
  query AllPeople($after: String = "") {
    allPeople(first: 10, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      people {
        id
        name
      }
    }
  }
`;

export const PERSON_DETAIL = gql`
  query Person($id: ID!) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      filmConnection {
        films {
          id
          title
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
    }
  }
`;
