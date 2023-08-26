import { Fragment } from "react";
import styles from "./AboutUs.module.css";
import Button from "../UI/Button";
import Breakfast from "../img/angelo-pantazis-1uIy-v4OlIk-unsplash.jpg";
import Salmon from "../img/Frame 12.jpg";
import Pasta from "../img/Frame 13.jpg";
import Greek from "../img/Frame 14.jpg"
export default function AboutUs(){
    return(<Fragment>
        <div className={styles.container}>
<div className={styles.aboutimg}>
    <img src={Breakfast} alt="BreakFast"/>
</div>
<div className={styles.content}>
  <span>  <h3>Our Story </h3></span><span className={styles.exp}>How we started</span>
    <p>Not only do we strive to bring you the freshest ingredients, but we also strive to create an atmosphere that celebrates the community. Picture yourself dining on our charming patio, surrounded by the buzz of conversations and the vibrant colors of our carefully tended herb garden. Or cozy up inside our rustic dining room, where you'll find a warm and inviting space to enjoy your meal.</p>
</div>
        </div>
        <div className={styles.popwrap}>
        <span> <h3>Popular Dishes </h3></span><span className={styles.exp}>Tasty & Crunchy</span>
        <div className={styles.container}>
            <div className={styles.popimg}>
                <img src={Salmon} alt="Salmon Fillet"/>
                <div className={styles.description}>
                    <h4>Grilled Salmon Fillet</h4>
                    <Button type="Button" className={styles.btn}>See Details</Button>
                </div>
            </div>
            <div className={styles.popimg}>
                <img src={Pasta} alt="Pasta"/>
                <div className={styles.description}>
                    <h4>Spaghetti Napoli</h4>
                    <Button type="Button" className={styles.btn}>See Details</Button>
                </div>
            </div>
            <div className={styles.popimg}>
                <img src={Greek} alt="Greek Salad"/>
                <div className={styles.description}>
                    <h4>Greek Salad</h4>
                    <Button type="Button" className={styles.btn}>See Details</Button>
                </div>
            </div>
           
        </div>
        </div>
        
        </Fragment>
    )
}