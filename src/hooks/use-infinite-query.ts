import { OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client';

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

const useInfiniteQuery = (
  gqlQuery: TypedDocumentNode<any, OperationVariables>,
  [key, childKey]: [string, string],
) => {
  const query = useQuery(gqlQuery, { notifyOnNetworkStatusChange: true });

  const { data, fetchMore } = query;

  const { hasNextPage, endCursor } = (data?.[key].pageInfo as PageInfo) || {};
  const entries: object[] = data?.[key][childKey] || [];

  const fetchNextPage = () => {
    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevData, { fetchMoreResult }) => {
        const prevEntires = prevData[key][childKey];
        const newEntries = fetchMoreResult[key][childKey];
        return {
          ...fetchMoreResult,
          [key]: {
            ...fetchMoreResult[key],
            [childKey]: [...prevEntires, ...newEntries],
          },
        };
      },
    });
  };

  return {
    ...query,
    hasNextPage,
    fetchNextPage,
    entries,
  };
};

export default useInfiniteQuery;
