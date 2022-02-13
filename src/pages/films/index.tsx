import List from '../../components/section/list';
import { FILM_LIST } from '../../graphql/queries/film';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function FilmListPage() {
  return (
    <List
      title="Films"
      icon="🎬"
      href="/films"
      gqlQuery={FILM_LIST}
      gqlKeys={['allFilms', 'films']}
    />
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FILM_LIST,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
}
