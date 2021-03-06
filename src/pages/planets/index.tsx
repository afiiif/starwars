import List from '../../components/section/list';
import { PLANET_LIST } from '../../graphql/queries/planet';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function PlanetListPage() {
  return (
    <List
      title="Planets"
      icon="🪐"
      href="/planets"
      gqlQuery={PLANET_LIST}
      gqlKeys={['allPlanets', 'planets']}
    />
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PLANET_LIST,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
}
