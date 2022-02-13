import { QueryResult } from '@apollo/client';
import { ReactNode } from 'react';
import useIntersect from '../../hooks/use-intersect';

interface Props {
  query: QueryResult & { hasNextPage: boolean, fetchNextPage: () => void };
  children: ReactNode;
  renderLoading: () => ReactNode;
}

export default function InfiniteScroll({ query, children, renderLoading }: Props) {
  const { loading, hasNextPage, fetchNextPage } = query;

  const ref = useIntersect(fetchNextPage, { rootMargin: '240px' });

  return (
    <>
      {children}
      {loading && renderLoading()}
      {!loading && hasNextPage && <div ref={ref} />}
    </>
  );
}
