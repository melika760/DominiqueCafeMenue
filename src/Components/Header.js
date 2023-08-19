import styles from "./Header.module.css";
import EngBr from "../img/White2.jpg";
import Button from "../UI/Button";
import Pasta from "../img/114-1147070_spaghetti-bolognese-transparent-background-hd-png-download.png"
export default function Header(){
    return(<div className={styles.wrap}><div className={styles.main}>
        <div className={styles.content}><h3>DOMINIQUE</h3>
        <p>Your neighborhood spot for a cozy atmosphere and delicious homemade food made with care</p>
        <Button>Order Online</Button>
        <Button>Book Now</Button>
        </div>
        <div className={styles.firstimg}>  <img src={EngBr} alt="EnglishBreakFast"/>
      </div>
    </div>
          <div className={styles.About}>
        
          <div className={styles.pastaimg}>  <img src={Pasta} alt="Pasta"/>
      </div>
      <div className={styles.Aboutcontent}>
  <h3>About OUR STORY</h3>
  <p>Serving up smiles since 1992, Cafe Dominique is a cherished neighborhood gem. This charming, family-owned cafe has been a community staple for over 30 years.

Step inside and you'll be enveloped in the cozy, welcoming ambiance that regulars have loved since opening day. Sip a homemade espresso while lingering over a fresh pastry baked in-house. Grab a garden-fresh salad or melty panini for lunch.

For over three decades, Cafe Dominique has been bringing friends and neighbors together over locally-sourced, homemade fare and genuine hospitality. This cafe is more than a place to eat, it's a community institution. Here's to 30 more years!</p>
          </div>
        </div>
        </div>)
}