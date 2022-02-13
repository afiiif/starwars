import { OperationVariables, TypedDocumentNode } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import useInfiniteQuery from '../../hooks/use-infinite-query';
import InfiniteScroll from '../common/infinite-scroll';
import Shimmer from '../common/shimmer';

interface Props {
  title: string;
  icon: string;
  href: string;
  gqlQuery: TypedDocumentNode<any, OperationVariables>,
  gqlKeys: [string, string],
}

export default function List({
  title, icon, href, gqlQuery, gqlKeys,
}: Props) {
  const query = useInfiniteQuery(gqlQuery, gqlKeys);
  const { totalEntries, entries } = query;

  return (
    <>
      <Head>
        <meta key="title-meta" property="og:title" content={`${title} | StarWars`} />
        <title key="title">{title} | StarWars</title>
      </Head>

      <div className="h1 flex items-center">
        <div>{icon}</div>
        <h1 className="pb-0 px-3">{title}</h1>
        <div className="ml-auto text-base px-2 py-0.5 bg-yellow-400 rounded-md text-black self-end">
          Total: {totalEntries}
        </div>
      </div>

      <div className="grid">
        <InfiniteScroll query={query} renderLoading={Shimmer}>
          {entries.map((entry) => (
            <Link href={`${href}/${entry.id}`} key={entry.id}>
              <a className="card card-hover">
                {entry.title || entry.name}
              </a>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
