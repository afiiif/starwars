import { OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client';
import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  id: string;
  icon: string;
  gqlQuery: TypedDocumentNode<any, OperationVariables>;
  gqlKey: string;
  // eslint-disable-next-line no-unused-vars
  children: (data: object) => ReactNode;
}

export default function Detail({
  id, icon, gqlQuery, gqlKey, children,
}: Props) {
  const query = useQuery(gqlQuery, { variables: { id } });
  const data = query.data?.[gqlKey];

  const title = data.title || data.name;

  return (
    <>
      <Head>
        <meta key="title-meta" property="og:title" content={`${title} | StarWars`} />
        <title key="title">{title} | StarWars</title>
      </Head>

      <div className="h1 flex items-center">
        <div>{icon}</div>
        <div className="text-slate-500 text-2xl pl-1.5 pr-3.5">&raquo;</div>
        <h1 className="pb-0">{title}</h1>
      </div>

      {children(data)}
    </>
  );
}
