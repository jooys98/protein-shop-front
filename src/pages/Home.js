import React from "react";
import main1 from "../images/main1.jpeg";
import Category from "../components/Category";
import NaverMap from "../naverMap/NaverMap";

const Home = () => {
  const imageHomeUrls = [
    "https://postfiles.pstatic.net/MjAyNDExMTJfMTU4/MDAxNzMxMzk4MDIzNDcz.4-oUKvAz9Wa7Ss2d3pmY2BbESyurg92nBuRyEzFNQdsg.e2i9keGf9pULvovl2NRrmNHXp39B2SbRm6MvuV93ds4g.PNG/플리마켓_포스터.png?type=w966",
    "https://postfiles.pstatic.net/MjAyNDExMDVfOSAg/MDAxNzMwODAyMTE4Mzky.YICkhmttuJMhnaHI2WCIUFpIGLlSddnARD-KLe5ASnUg.mTfKKWRl8cglCPIKksR1hegnuf64Ir09tyMeHp_4lMgg.JPEG/KakaoTalk_20241026_180410700_01.jpg?type=w966",
    "https://postfiles.pstatic.net/MjAyNDExMDZfMjQz/MDAxNzMwODg0NjUzNjIy.G1k6_mF3dBRTCKV-bBAFubuC59QRU482_S4Na-aa4Hkg.5i9KZzuKJrOn1Z85smGEzdhLbUwJDoHn-jjAjKpOaawg.JPEG/KakaoTalk_20241026_180410700.jpg?type=w966",
    "https://postfiles.pstatic.net/MjAyNDEwMjRfMzAw/MDAxNzI5NzY4MTMyNjgz.qt5iqUHMWLU5iPKhiGXbCNUGXBhnvLcNM0yc_M8_SFgg.ftf_pjlfQ04emF_wGojNx38o5mnz3S_4A2jMCEwYw1og.PNG/KakaoTalk_20241021_201630746.png?type=w966",
  ];

  const gymImageUrls = [
    "https://postfiles.pstatic.net/MjAyNDA4MDZfNTEg/MDAxNzIyOTM2OTYzOTg0.mwS1m_nYyS-d8Mj6zSjD1hPQQ_43pMkSCUOsc7hZkDUg.hiS1inl3efUWiHYKUIX5Mv09mLxzYGzF4IiZ2NadJJ0g.JPEG/KakaoTalk_20240806_170135199_08.jpg?type=w966",
    "https://postfiles.pstatic.net/MjAyNDEwMjhfMjEg/MDAxNzMwMDk5NjAxNzgx.e5zQptL2GcczcgRiCLFy54o78Pl79nvvTp3JeldPsBYg.nV1Pdx5a79XoMzklZSyiAXnq8VMCm_5tcpNnvnwmxH0g.JPEG/KakaoTalk_20241028_152406857_06.jpg?type=w466",
    "https://postfiles.pstatic.net/MjAyNDEwMDRfMTUx/MDAxNzI4MDQwODM0NDg4.03zhE4nZH4r4GsqsJeJWxzZ8e1qVdsFE4Ji-fZdH5Csg.6LGbA81gGuFPLKOJL2mXutfbMPLAIk1bIYgxXCrc-1Mg.JPEG/KakaoTalk_20241004_172346189_06.jpg?type=w466",
    "https://postfiles.pstatic.net/MjAyNDEwMDRfNTUg/MDAxNzI4MDQwOTAwODEy.O9APjIu4dTARZrmX_1tV762CPdyJtVIwAxAfSCNNkGAg.owbxr3wZisCdmp2z72CCdieUVyWj5vQlLnGXZm3h0Tgg.PNG/제목을-입력해주세요_-001_(21).png?type=w966",
  ];

  return (
    <div>
       <Category/>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bolder",
        }}
      >
        Wellcome, protein gym!
      </h1>

      <img
        src={main1}
        style={{
          width: "1400px",
          margin: "auto",
          display: "flex",
          textAlign: "center",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center", // 가로 중앙 정렬
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {imageHomeUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            style={{ width: "300px" }}
          />
        ))}
      </div>
      <h1 style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bolder",
        }}>About protein gym</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {gymImageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            style={{ width: "300px" }}
          />
        ))}
      </div>
      <NaverMap/>
    </div>
  );
};

export default Home;
