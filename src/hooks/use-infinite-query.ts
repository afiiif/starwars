import { OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client';

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

interface Entry {
  id: string;
  name: string;
  title?: string;
}

const useInfiniteQuery = (
  gqlQuery: TypedDocumentNode<any, OperationVariables>,
  [key, childKey]: [string, string],
) => {
  const query = useQuery(gqlQuery, { notifyOnNetworkStatusChange: true });

  const data = query.data?.[key];

  const { hasNextPage, endCursor } = (data.pageInfo as PageInfo) || {};
  const totalEntries = data.totalCount;
  const entries: Entry[] = data[childKey] || [];

  const fetchNextPage = () => {
    query.fetchMore({
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
    totalEntries,
  };
};

export default useInfiniteQuery;
