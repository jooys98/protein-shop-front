import React, { useRef } from "react";
import { useEffect } from "react";
import './NaverMap.css';


const NaverMap = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.4814766,126.9535425);
    const mapOptions = {
      center: location,
      zoom: 17,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
    <div>
        <h1>찾아오시는 길 </h1>
        <p>서울대입구역 7번 출구 나오자마자 보이는 건물에 위치합니다.</p>
        <p>  (서울대입구역 사거리 샤로수길 맞은편) </p>
        <p>  1층에 신협 은행이 위치 해 있습니다</p>
    <div ref={mapElement}
    className="map-container"></div>
    </div>
  );
};

export default NaverMap;
