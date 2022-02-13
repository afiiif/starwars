import { gql } from '@apollo/client';

export const FILM_LIST = gql`
  query AllFilms($after: String = "") {
    allFilms(first: 10, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      films {
        id
        title
      }
    }
  }
`;

export const FILM_DETAIL = gql`
  query Film($id: ID!) {
    film(id: $id) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      speciesConnection {
        species {
          id
          name
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      planetConnection {
        planets {
          id
          name
        }
      }
    }
  }
`;
