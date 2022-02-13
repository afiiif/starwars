import { OperationVariables, TypedDocumentNode } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import useInfiniteQuery from '../../hooks/use-infinite-query';
import InfiniteScroll from '../common/infinite-scroll';
import Shimmer from '../common/shimmer';

interface Entry {
  id: string;
  name: string;
  title?: string;
}

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

  return (
    <>
      <Head>
        <meta key="title-meta" property="og:title" content={`${title} | StarWars`} />
        <title key="title">{title} | StarWars</title>
      </Head>

      <h1>{icon}&nbsp; {title}</h1>

      <div className="grid">
        <InfiniteScroll query={query} renderLoading={Shimmer}>
          {(query.entries as Entry[]).map((entry) => (
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
