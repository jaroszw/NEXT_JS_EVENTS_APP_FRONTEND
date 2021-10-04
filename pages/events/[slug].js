import { FaIgloo, FaPencilAlt, FaTimes } from 'react-icons/fa';

import Layout from '@/components/Layout';
// import EventMap from '@/components/EventMap';

import { API_URL } from '@/config/index';
import Image from 'next/image';
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '@/styles/Event.module.css';
import { useRouter } from 'next/router';

export default function EventPage({ evt }) {
  const router = useRouter();

  // const deleteEvent = async () => {
  //   if (confirm("Are you sure?")) {
  //     const res = await fetch(`${API_URL}/events/${evt.id}`, {
  //       method: "DELETE",
  //     });

  //     const data = await await res.json();
  //     if (!res.ok) {
  //       toast.error("Something went wrong");
  //     } else {
  //       router.push(`/events`);
  //     }
  //   }
  // };

  return (
    <Layout>
      <div className={styles.event}>
        {/*
      <div className={styles.control}>
          <Link href={`edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
        */}
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
              alt=""
            />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
        {/* <EventMap evt={evt} />*/}
        <Link href="/events">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`);
//   const events = await res.json();

//   const paths = events.map((evt) => ({ params: { slug: evt.slug } }));

//   return {
//     paths,
//     fallback: true, //404 if slug has not been found
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);
//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
  };
}
