import { GetStaticPropsContext } from 'next';
import Detail from '../../components/section/detail';
import { FILM_DETAIL } from '../../graphql/queries/film';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function FilmDetailPage({ id }: { id: string }) {
  return (
    <Detail
      icon="🎬"
      id={id}
      gqlQuery={FILM_DETAIL}
      gqlKey="film"
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
      query: FILM_DETAIL,
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
