import { GetStaticPropsContext } from 'next';
import Detail from '../../components/section/detail';
import { STARSHIP_DETAIL } from '../../graphql/queries/starship';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function StarshipDetailPage({ id }: { id: string }) {
  return (
    <Detail
      icon="🛸"
      id={id}
      gqlQuery={STARSHIP_DETAIL}
      gqlKey="starship"
    >
      {(data) => (
        <pre className="card overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Detail>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetStaticPropsContext<{ id: string }>) {
  try {
    const params = context.params!;

    const apolloClient = initializeApollo();

    await apolloClient.query({
      query: STARSHIP_DETAIL,
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
