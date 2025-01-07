import apiUrl from "../../../constant/apiUrl";
import currentUser from "../../../utils/user";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
const useServiceMap = () => {
  const { user } = currentUser();
  const mapRef = useRef(null);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await axios.get(apiUrl.serviceMap, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setAddresses(response.data.address);
        console.log(response.data.address);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    getAddresses();
  }, [user?.token]);

  useEffect(() => {
    if (!mapRef.current || addresses.length === 0) return;

    const initMap = () => {
      const center = { lat: 19.5937, lng: 74.9629 };
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 7,
        center: center,
      });

      addresses.forEach((address) => {
        const marker = new window.google.maps.Marker({
          position: { lat: address.latitude, lng: address.longitude },
          map: map,
          title: `${address.street}, ${address.city}, ${address.state}`,
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: `<p>${address.street}, ${address.city}, ${address.state}</p>`,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    };

    initMap();
  }, [addresses]);

  return {
    mapRef
  }
}

export default useServiceMap
