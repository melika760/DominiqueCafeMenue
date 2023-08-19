import styles from "./Menue.module.css";
import coffee from "../img/R.png"
export default function Menue(){
    return(<div className={styles.wraper} >
        <div className={styles.menue}> <img src={coffee} alt="Coffee"/></div>
       
<header className={styles.header}><h2>OUR MENEU</h2></header>

    </div>)
}