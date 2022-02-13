import { GetStaticPropsContext } from 'next';
import Detail from '../../components/section/detail';
import { PERSON_DETAIL } from '../../graphql/queries/person';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function PersonDetailPage({ id }: { id: string }) {
  return (
    <Detail
      icon="👤"
      id={id}
      gqlQuery={PERSON_DETAIL}
      gqlKey="person"
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
      query: PERSON_DETAIL,
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
