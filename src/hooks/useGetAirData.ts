import { useEffect, useState } from "react";
import { weatherApi } from "../api";
import wrapPromise from "../api/wrapPromise";
import { combineEndPoint } from "../utils/combineEndPoint";
import { GeolocationTypes } from "../types/common/GeolocationTypes";
import { AirBaseTypes } from "../types/air/airTypes";

function useGetAirData(): AirBaseTypes {
  const [resource, setResource] = useState<AirBaseTypes | any>();

  useEffect(() => {
    async function onGeoOk(position: GeolocationTypes) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const promise = weatherApi
        .getAirRequest(combineEndPoint("air", lat, lon))
        .then((res: any) => res.data.list[0].components);

      setResource(wrapPromise(promise));
    }

    function onGeoError() {
      alert("위치를 찾을 수 없네요. 날씨 정보를 알려드릴 수 없어요. 😥");
    }
    navigator.geolocation.getCurrentPosition(onGeoOk as any, onGeoError);
  }, []);

  return resource;
}

export default useGetAirData;
