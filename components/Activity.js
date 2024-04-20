import styles from "../styles/Activity.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Image from "next/image"

function Activity(datas) {
  //setting state : visible or not
  const [isVisible, setIsVisible] = useState(false)

  //handling click event

  const handleClick = () => {
    console.log("click")
    setIsVisible(true)
  }


  return (
    <div style={{ margin: "10px" }}>
      <Image style={{ cursor: "pointer" }} src={`/${datas.src}.png`} width={500} height={400} onClick={() => handleClick()} />
      {/* <img src={`${datas.imgPath}.png`}/> */}
      {/* <p>{datas.name}</p> */}
      <div style={{ top: isVisible === false ? "-50vh" : "50vh", background: `url(/${datas.src}.png) left bottom 50%` }} className={styles.actSubSection} >
        {/* <Image src={`/${datas.imgPath}.png`} layout="fill" className={styles.bgImg} /> */}
        <div className={styles.subsectiontext}>
          <h2>{datas.name}</h2>
          <FontAwesomeIcon icon={faXmark} style={{ position: "absolute", top: "15px", right: "20px", height: "30px", cursor: "pointer" }} onClick={() => setIsVisible(false)} />
          <p>{datas.description}</p>
          <p>{datas.time}</p>
        </div>
      </div>
    </div>
  )
}

export default Activity;