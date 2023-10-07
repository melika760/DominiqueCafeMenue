import styles from "./Reserve.module.css";
import Button from "../UI/Button";
export default function Reserve(){
    return(<div className={styles.wraper}>
        <h3>Book a Table</h3>
        <form className={styles.form}>
        <input type="date" placeholder="Date"/>
        <input type="time"  placeholder="Date"/>
        <input type="number" min={0}  placeholder="Number"/>
        <Button className={styles.btn}>Book</Button>
    </form></div>)
}