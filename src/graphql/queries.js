import { gql } from '@apollo/client';

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {
//       totalCount
//       edges {
//         node {
//           ownerName
//           id
//           fullName
//         }
//       }
//     }
//   }
// `

export const GET_REPOSITORIES = gql`
  query repositories (
    $after: String
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories(
      after: $after
      first: $first
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      ownerName: $ownerName
    ) {
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;