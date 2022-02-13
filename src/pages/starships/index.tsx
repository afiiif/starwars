import List from '../../components/section/list';
import { STARSHIP_LIST } from '../../graphql/queries/starship';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function StarshipListPage() {
  return (
    <List
      title="Starships"
      icon="🛸"
      href="/starships"
      gqlQuery={STARSHIP_LIST}
      gqlKeys={['allStarships', 'starships']}
    />
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: STARSHIP_LIST,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
}
