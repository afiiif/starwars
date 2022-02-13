import { OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client';
import startCase from 'lodash/startCase';
import Head from 'next/head';
import DetailItem from './detail-item';

interface Props {
  id: string;
  icon: string;
  gqlQuery: TypedDocumentNode<any, OperationVariables>;
  gqlKey: string;
}

export default function Detail({
  id, icon, gqlQuery, gqlKey,
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

      <section className="card space-y-4">
        {Object.keys(data).filter((key) => key !== '__typename').map((key) => (
          <div key={key}>
            <div className="font-bold">{startCase(key)}</div>
            {/* @ts-ignore */}
            <DetailItem data={data[key]} />
          </div>
        ))}
      </section>
    </>
  );
}
