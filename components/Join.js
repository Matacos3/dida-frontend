import styles from "../styles/Join.module.css"

function Join(props) {
  const handleJoin = () =>{
    console.log("il veut rejoindre")
  }
  const handleDonate = () =>{
    console.log("il veut donner")
  }
  return (

    //faiere en sorte que le formulaire de contact soit contact, et pas seulement pour devenir bénévole

    <div id={props.id} className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.inputText}>

        <h2>Devenez DIDA</h2>
        <p>Devenez bénévole et participez aux actitivités</p>
        </div>
        <div className={styles.formInputs}>
          <input className={styles.input} type="text" placeholder="Prénom"/>
          <input className={styles.input} type="text" placeholder="Nom de famille" />
          <input className={styles.input} type="email" placeholder="xxx@email.com" />
          <input className={styles.input} type="tel" placeholder="Numéro de téléphone"/>
          <input className={styles.input} type="text" placeholder="Contact Facebook (si vous avez un compte)" />
          <select className={styles.input} name="mode" id="mode">
            <option value="question">Comment souhaitez-vous vous engager ?</option>
            <option value="ben">Je souhaite devenir bénévole</option>
            <option value="activities">Je souhaite participer aux activités de DIDA</option>
            <option value="newActivity">Je souhaite proposer une activité</option>
            <option value="others">Autre(précisez)</option>
          </select>

          <textarea className={styles.texta} placeholder="Commentaires…">


          </textarea>
        </div>
          <button className="btn btn2" onClick={()=>handleJoin()}>Envoyer ma demande</button>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputText}>
{/* seulement mettre lien vers hello asso + lien vers adhésion */}
        <h2>Faire un don</h2>
        <h3>Contribuez à nos actions</h3>
        <p>En faisant un don à l’association, vous nous permettez de nous développer et d’étendre nos actions au plus grand nombre</p>
        </div>
        <div className={styles.formInputs}>
          <input className={styles.input} type="text" placeholder="Prénom"/>
          <input className={styles.input} type="text" placeholder="Nom"/>
          <input className={styles.input} type="text" placeholder="Société / institution publique"/>
          <input className={styles.input} type="email"placeholder="xxx@email.com"/>
          <input className={styles.input} type="text" placeholder="Adresse"/>
          <input className={styles.input} type="tel" placeholder="Numéro de téléphone"/>
          <textarea className={styles.texta} placeholder="Commentaires"></textarea>

        </div>
          <button className="btn btn2" onClick={()=>handleDonate()}>Envoyer ma demande</button>
      </div>
    </div>
  )
}

export default Join