import { useState } from "react";

function useGeolocation(defultPosition = null) {
  const [isLoding, setIsLoding] = useState(false);
  const [position, setPosition] = useState(defultPosition);
  const [error, setError] = useState(null);
  function getPositiom() {
    if (!navigator.geolocation) return setError("");
    setIsLoding(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      setIsLoding(false);
    }),
      (error) => {
        setError(error.message);
        setIsLoding(false);
      };
  }

  return { error, isLoding, position, setPosition, getPositiom };
}

export { useGeolocation };
