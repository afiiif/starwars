import List from '../../components/section/list';
import { SPECIES_LIST } from '../../graphql/queries/species';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function SpeciesListPage() {
  return (
    <List
      title="Species"
      icon="🧬"
      href="/species"
      gqlQuery={SPECIES_LIST}
      gqlKeys={['allSpecies', 'species']}
    />
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SPECIES_LIST,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
}
