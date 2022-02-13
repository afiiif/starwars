import { useQuery } from '@apollo/client';
import { PLANET_DETAIL } from '../../graphql/queries/planet';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function PlanetDetailPage({ id }) {
  const { data } = useQuery(PLANET_DETAIL, { variables: { id } });
  const { planet } = data;

  return (
    <>
      <h1>{planet.name}</h1>

      <pre className="card">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const apolloClient = initializeApollo();

    await apolloClient.query({
      query: PLANET_DETAIL,
      variables: { id: params.id },
    });

    return addApolloState(apolloClient, {
      props: { id: params.id },
      revalidate: 60,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
