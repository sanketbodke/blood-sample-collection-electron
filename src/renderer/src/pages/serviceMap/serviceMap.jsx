import React from "react";
import useServiceMap from "./useServiceMap";
import {ServiceMapContainer, ServiceMapView} from "./serviceMap.styled";
import PagesHeading from "../../components/PagesHeading/PagesHeading.component";

const ServiceMap = () => {
  const {
    mapRef
  } = useServiceMap()

  return (
    <ServiceMapContainer>
      <PagesHeading
        heading="Service Map"
      />
      <ServiceMapView
        ref={mapRef}
      ></ServiceMapView>
    </ServiceMapContainer>
  );
};

export default ServiceMap;
