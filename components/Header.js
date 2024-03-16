import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react"

// import {faFacebook} from ""
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Header(props) {

  const smallStyle = {"height" : "40px", fontSize : "1.1rem"}
  const bigStyle = {"height" : "60px", fontSize : "1.5rem"}
  const [show, setShow] = useState(true)

  const [offset, setOffset] = useState (0);
  const [previousOff, setPreviousOff] = useState(offset)
  const [section, setSection] = useState(0)
//  console.log("position sur la page :", offset)

  useEffect(() =>{
    const onScroll = () =>{
      setPreviousOff(offset)
      setOffset(window.scrollY)
      if(offset >= previousOff){
        setShow(false)
      } else{
        setShow(true)
      }

    //mécanisme pour le style
      console.log(window.innerHeight)
     console.log(window.scrollY / window.innerHeight)
     setSection(Math.round(window.scrollY / window.innerHeight))
     console.log("on est dans cette section:",section)
    }
    window.removeEventListener("scroll",onScroll);
    window.addEventListener("scroll",onScroll,{passive:true});
    return () => window.removeEventListener("scroll",onScroll)
  })

  const styleOfHeader = {
    "background" : "#B5EFE7",
    "color" : "black"

  }

  return (
    <div className={styles.headercontainer} style={show ? bigStyle : smallStyle}>
      <div className={styles.header}>

        <div>
          <p>
            FR | EN
          </p>
        </div>
        <div className={styles.links}>

          <span className={styles.link} id="0" style={section === 0 ? styleOfHeader : {}} onClick={()=>props.handleLink("homecontent")}>Accueil</span>
          <span className={styles.link} id="1" style={section === 1 ? styleOfHeader : {}} onClick={()=>props.handleLink("section1")}>Qui sommes-nous ? </span>
          <span className={styles.link} id="2" style={section === 2 ? styleOfHeader : {}} onClick={()=>props.handleLink("section2")}>Nous rejoindre / nous soutenir</span>
          <span className={styles.link} id="3" style={(section === 3 || section === 4) ? styleOfHeader : {}} onClick={()=>props.handleLink("section3")}>Activités</span>
          <span className={styles.link} id="4" onClick={()=>props.handleLink("section1")}>Plus</span>
        </div>
        <div className={styles.connectionAndNetworks}>
          <Link href={"/"}><span className={styles.link}>Connexion</span></Link>
          <Link href="https://www.facebook.com/DIDA.Rennes/?locale=fr_FR"><FontAwesomeIcon icon={faFacebook} /></Link>
        </div>
      </div>
    </div>)
}

export default Header;