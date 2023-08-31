import { useEffect, useState } from "react";
import { weatherApi } from "@api";
import { combineEndPoint } from "@utils/combineEndPoint";
import wrapPromise from "@api/wrapPromise";

function useGetAirData() {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    async function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const promise = weatherApi
        .getAirRequest(combineEndPoint("air", lat, lon))
        .then((res) => res.data.list[0].components);

      setResource(wrapPromise(promise));
    }

    function onGeoError() {
      alert("위치를 찾을 수 없네요. 날씨 정보를 알려드릴 수 없어요. 😥");
    }
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return resource;
}

export default useGetAirData;
