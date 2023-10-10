import styles from "./Footer.module.css"
export default function Footer(){
    return(
        <div className={styles.wraper} >
<div className={styles.description}>
    <h3>Address</h3>
    <p>19 S End Rd, London NW3 2PT</p>
</div>
<div className={styles.description}>
    <h3>Opening Hours</h3>
    <p> Every day 9 am - 5pm</p>
    <p> Monday closed.</p>
</div>
<div className={styles.description}>
    <h3>Contact Us</h3>
    <p>Call Number: 02074319929</p>
</div>
        </div>
    )
}