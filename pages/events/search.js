import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

import { useRouter } from 'next/router';
import Link from 'next/link';

import qs from 'qs';

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <h1>Search Results for: {router.query.term} </h1>
      <Link href="/events">Go back</Link>
      {events.length === 0 && <h3>No events found</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { venue_contains: term },
        { description_contains: term },
        { performers_contains: term },
      ],
    },
  });

  console.log(query);

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return { props: { events } };
}
