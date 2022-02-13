import Link from 'next/link';
import InfiniteScroll from '../../components/common/infinite-scroll';
import Shimmer from '../../components/common/shimmer';
import { PLANET_LIST } from '../../graphql/queries/planet';
import useInfiniteQuery from '../../hooks/use-infinite-query';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export default function PlanetListPage() {
  const query = useInfiniteQuery(PLANET_LIST, ['allPlanets', 'planets']);

  return (
    <>
      <h1>Planet List</h1>

      <div className="grid">
        <InfiniteScroll query={query} renderLoading={Shimmer}>
          {query.entries.map((planet) => (
            <Link href={`/planets/${planet.id}`} key={planet.id}>
              <a className="card card-hover">
                {planet.name}
              </a>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </>
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
