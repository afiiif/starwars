import { GetStaticPropsContext } from 'next';
import Detail from '../../components/section/detail';
import { SPECIES_DETAIL } from '../../graphql/queries/species';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function SpeciesDetailPage({ id }: { id: string }) {
  return (
    <Detail
      icon="🧬"
      id={id}
      gqlQuery={SPECIES_DETAIL}
      gqlKey="species"
    />
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
      query: SPECIES_DETAIL,
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
