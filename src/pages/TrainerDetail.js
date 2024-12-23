import React from "react";
import trainersData from "../data/trainersData";
import { useParams } from "react-router-dom";
import Category from "../components/Category";

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainersData.find((t) => t.id === parseInt(id));

  return (
    
    <div style={{ textAlign: "center", padding: "20px" }}>
       <Category/>
      <h1>{trainer.name}</h1>
      <h1>{trainer.massage}</h1>
      <img
        src={trainer.imageUrl}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <div style={{textAlign: "center",fontSize:"15px"}}>
      <ul>
        {trainer.detail.map((d,index)=>(
            <h3 key={index}>{d}</h3>
        ))}
      </ul>
      <br/>
      <ul>
        {trainer.intro.map((i,index)=>(
            <h3 key={index}>{i}</h3>
        ))}
      </ul>
      <br/>
      <ul>
        {trainer.career.map((c , index)=>(
            <h3 key={index}>{c}</h3>
        ))}
      </ul>
      <br/>
      </div>
      <img src={trainer.detailImg1}
      style={{ width: "250px", borderRadius: "8px" }}></img>
      <img src={trainer.detailImg2}
      style={{ width: "250px", borderRadius: "8px" }}></img>
    </div>
  );
};

export default TrainerDetail;
