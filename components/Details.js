import Image from "next/image";
import css from "../styles/Details.module.css";
import { useState } from "react";

const Details = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/AB1.png",
    "/img/AB2.png",
    "/img/AB3.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={css.container}>
      <div className={css.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrow1.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={css.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={css.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={css.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrow2.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Details;
