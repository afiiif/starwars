import List from '../../components/section/list';
import { PEOPLE_LIST } from '../../graphql/queries/person';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function PeopleListPage() {
  return (
    <List
      title="People"
      icon="👤"
      href="/people"
      gqlQuery={PEOPLE_LIST}
      gqlKeys={['allPeople', 'people']}
    />
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PEOPLE_LIST,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  });
}
