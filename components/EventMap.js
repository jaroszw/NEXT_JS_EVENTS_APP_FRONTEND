import Image from "next/image";
import { useEffect, useState } from "react";
import reactMapGl, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 21.999121,
    longitude: 50.041187,
    width: "100%",
    height: "500px",
    zoom: 12,
  });

  useEffect(() => {
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error("ERROR CIULU", error);
      }
    );
  }, [evt.address, viewport]);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

  console.log(lat, lng);
  if (loading) return <div>No Address Matched</div>;

  return (
    <reactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
      onViewPortChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} lattitude={lat} longitude={lng}>
        <Image src="/images/pin.svg" width={30} height={30} />
      </Marker>
    </reactMapGl>
  );
}
