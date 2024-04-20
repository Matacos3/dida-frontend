import styles from "../styles/Activities.module.css"
import Image from "next/image";
import hands from "../Assets/pictures/timetable.webp";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Activity from "./Activity";


//possibilité d’ajouter ou supprimer les activités
function Activities(props) {

  const activitiesData = [
    {
      name: "Atelier de français réservé aux femmes",
      description: "Parce-que nous savons qu'il est parfois difficile pour les femmes de se sentir à l'aise dans un espace où beaucoup d'hommes sont présents, nous dédions un créneau aux apprenantes femmes, le lundi après-midi.Ce créneau est animé exclusivement par des bénévoles femmes, et est en plus de l'atelier de français, un moment de détente et de rencontre. ",
      time: "Le lundi de 16h15 à 17h45",
      imgPath: "atelier_fr_femmes"
    },
    {
      name: "La permanence administrative",
      description: "Si vous avez du mal à comprendre les démarches administratives françaises, nous pouvons vous aider ! Au cours de la permanence administrative, nous remplirons ensemble des formulaires, des papiers divers, nous pourrons vous aider à téléphoner pour prendre des rendez-vous ou encore à envoyer un mail. Nous ferons notre possible pour vous aider ! Si nécessaire, nous vous orienterons vers d'autres collectifs comme le MRAP, ou encore la CIMADE.",
      time: "Le jeudi de 14h à 16h. Le vendredi de 14h à 16h.",
      imgPath: "permanence_admin"
    },
    {
      name: "Tea-times",
      description: "Deux fois par semaine, nous nous retrouvons pour boire un thé, un café, discuter et faire des jeux.Le Tea Time est un moment convivial et ouvert à toutes et à tous ! Il s’agit d’un moment de détente où l’on rit, on parle de sujets divers et on joue ! Vous pouvez arriver quand vous voulez, repartir quand bon vous semble … c’est un moment collectif totalement libre.",
      time: "Les mardis et jeudis de 16h30 à 18h",
      imgPath: "tea_time"
    },
    {
      name: "Les ateliers de français",
      description: "Les ateliers de français sont là depuis les débuts de DIDA.Pour suivre nos ateliers de Français, il suffit de venir s'inscrire le mardi ou le jeudi entre 14h30 et 16h30 à notre local au BAM. En fonction de votre niveau, nous vous fournirons une carte et vous serez ensuite ajouté à un groupe d'apprentissage avec un bénévole pour apprendre le français!",
      time: "Tous les lundis, mardis et jeudis de 18h30 à 20h et le mercredi de 10h30 à 12h au TNB",
      imgPath: "french_class"
    },
  ]

  const [positionOfActivityToDisplay, setPositionOfActivityToDisplay] = useState(0)
  console.log(activitiesData[positionOfActivityToDisplay])
  const [activityBool, setActivityBool] = useState(activitiesData.map((information, index) => false))

  const [isModalVisible, setIsModalVisible] = useState(false)

  //state setting which datas are going to be displayed


  const [selectedDatas, setSelectedDatas] = useState(null)

  //la div est la même, elle est ici, le contenu est dans le composant activitity, il est choisi en fonction de l’image qui est cliquée
  //fonction de display des activités



  //function to determine which activity is going to be displayed, and to set the modal to visible

  const displayactivity = (key) => {
    if(!isModalVisible){

      console.log("we will display activity")
      //set modal to true 
      setIsModalVisible(true)
      //set position of information to display
      setPositionOfActivityToDisplay(key)
    }
  }



  const activitiesToDisplay = activitiesData.map((datas, i) => {

    return (
      <div style={{ margin: "10px" }} key={i}>
        <Image style={{ cursor: "pointer" }} src={`/${datas.imgPath}.png`} width={500} height={400} onClick={() => displayactivity(i)} />
        {/* <img src={`${datas.imgPath}.png`}/> */}
        {/* <p>{datas.name}</p> */}
        <div style={{ top: activityBool[i] === false ? "-50vh" : "50vh", background: `url(/${datas.imgPath}.png) left bottom 50%` }} className={styles.actSubSection} >
          <Image src={`/${datas.imgPath}.png`} layout="fill" className={styles.bgImg} />
          <div className={styles.subsectiontext}>
            <h2>{datas.name}</h2>
            <FontAwesomeIcon icon={faXmark} style={{ position: "absolute", top: "15px", right: "20px", height: "30px", cursor: "pointer" }} onClick={() => displayactivity(i)} />
            <p>{datas.description}</p>
            <p>{datas.time}</p>
          </div>
        </div>
      </div>
    )
  })

  const activitiesToDisplay2 = activitiesData.map((datas, i) => {
    return (
      // <Activity key={i} src={datas.imgPath} description={datas.description} time={datas.time} name={datas.name} />
      <div style={{ margin: "10px" }} onClick={() => displayactivity(i)}>

        <Image style={{ cursor: "pointer" }} key={i} src={`/${datas.imgPath}.png`} width={500} height={400} />
      </div>
    )
  })

  const modal = (
    <div style={{ top: isModalVisible === false ? "-50vh" : "50vh", background: `url(/${activitiesData[positionOfActivityToDisplay].imgPath}.png) left bottom 50%` }} className={styles.actSubSection} >

      <div className={styles.subsectiontext}>
              
        <h2>{activitiesData[positionOfActivityToDisplay].name}</h2>
        <FontAwesomeIcon icon={faXmark} style={{ position: "absolute", top: "15px", right: "20px", height: "30px", cursor: "pointer" }} onClick={() => setIsModalVisible(false)} />
        <p>{activitiesData[positionOfActivityToDisplay].description}</p>
        <p>{activitiesData[positionOfActivityToDisplay].time}</p>
      </div>
    </div>
  )

  //prevents scrolling when modal is open

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
      // document.body.style.filter = "blur(10px)"
    } else {
      document.body.style.overflow = "unset";
      // document.body.style.filter = "blur(0)"
    }
  }, [isModalVisible]);

  return (
    <div id={props.id} className={styles.container}>
      <div className={styles.subcontainer} style={{ background: "#FFFFFF" }}>

        <h2>Emploi du temps</h2>
        <Image src={hands.src} width={1100} height={800} />
      </div>
      <div className={styles.subcontainer} style={{ background: "#B5EFE7" }}>
        <h2>Nos activités</h2>
        <div className={styles.activitiesContainer}>
          {activitiesToDisplay2}
          {modal}
        </div>
      </div>
    </div>
  )
}
export default Activities