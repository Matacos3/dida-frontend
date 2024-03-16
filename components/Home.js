import styles from '../styles/Home.module.css';
import Header from "../components/Header"
import Footer from "../components/Footer";
import Join from "../components/Join"
import Activities from '../components/Activities';
import Image from "next/image"
import hands from "../Assets/pictures/bg2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {useState, useEffect} from "react";
import Faq from "../components/Faq"


//a faire :
//lien vers anciennes newletters, et page actualités
//rubrique de portraits, de gens qui racontent leurs parcours, et que l’association à aidés, et aussi des bénévoles. Un portrait par newsLetters, mais qui soit aussi repris dans une rubrique. Portraits de dida

//rubrique : événements à venir : des événements pour les bénévoles ,et aussi pour les bénéficiaires

//archivage des comptes-rendus des CA et AG et autres

function Home() {

  // const [selected, setSelected] = useState("")
  const [activityDisplayed, setActivityDisplayed] = useState(false)
  const handleLink = (el) => {
    // console.log(el)
    document.getElementById(el).scrollIntoView({ behavior: "smooth" })
    // console.log("position sur la page : ",document.getElementById(el).scrollTop)
  
  }
  const activityDisplay = () =>{
    setActivityDisplayed(!activityDisplayed);
    console.log(activityDisplayed)
  }
  
  
  return (
    <div id={styles.homecontainer}>
      <div>

      <Header handleLink={handleLink}/>
      <div id="homecontent" className={styles.homecontent}>

        < div id={styles.homeContentText}>
          <div id={styles.textitself}>

            <h1>D’ici ou D’ailleurs</h1>
            <p>
              Créer du lien avec les personnes exilées présentes sur la région rennaise
            </p>
          </div>

        </div>
        <div>

          <button className="btn btn1" onClick={() => handleLink("section1")}>QUI SOMMES-NOUS ?</button>
          <button className="btn btn1" onClick={() => handleLink("section2")}>NOUS REJOINDRE / NOUS SOUTENIR</button>
        </div>


      </div>
      <div id="section1" className={styles.presentation}>
        <div className={styles.presentationContent}>

          <Image src={hands.src} width={350} height={500} />
          <div id={styles.presentationTxt}>
            <p>

              D’Ici ou D’Ailleurs (DIDA) est une association fondée à Rennes en 2016. <span className='outlineTxt'>Notre but ?</span> Venir en aide aux personnes exilées présentes sur la région rennaise, mais aussi faire du lien avec elles, échanger et apprendre les uns des autres. Nous proposons différentes activités, des ateliers de français au soutien scolaire, en passant par nos célèbres Tea times ou encore une permanence administrative sur des démarches quotidiennes.
            </p>
          </div>
        </div>

        <div className={styles.contact}>
          <h3 style={{textAlign:"center", fontSize:"1.4rem", margin:"10px 0 10px"}}>
            Contacts
          </h3>
          <div className={styles.network}>

            <div className={styles.networkDet}
              >
              <FontAwesomeIcon icon={faLocationDot} />
              <a href="https://maps.app.goo.gl/Jc9DesW1AibBwVwY6">

              <p>2 rue André Trasbot, 35000, Rennes</p>
              </a>
            </div>
            <div  className={styles.networkDet}>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+33618898205" >

              <p>06.18.89.82.05</p>
              </a>
            </div>
            <div  className={styles.networkDet}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href='mailto:+123456789'>

              <p>infos@didarennes.fr</p>
              {/* mettre plusieurs adresses mail */}
              </a>
            </div>
            <div  className={styles.networkDet}>
              <FontAwesomeIcon icon={faAt} />
 
              <p>
              <a href="https://www.facebook.com/DIDA.Rennes">

              <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/dida.rennes/?hl=fr">

              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
              </a>
              </p>


            </div>
          </div>

        </div>
      </div>
      <Join id="section2" />
      <Activities id="section3" activityDisplay={activityDisplay}/>
      <Faq />
      </div>
    </div>
  );
}

export default Home;
