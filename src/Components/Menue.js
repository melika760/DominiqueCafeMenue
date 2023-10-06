import styles from "./Menue.module.css";
import pasta from "../img/spaguetti.png";
import Breakfast from "../img/english-breakfast.png";
import Starter from "../img/Starter.png";
import Salad from "../img/salad.png";
import Hotdishes from "../img/Hotdishes.png";
import Sandwwich from '../img/sandwich.png';
import Juices from "../img/juices.png";
import Smoothies from "../img/smoothie.png";
import Softdrinks from "../img/Softdrink.png";
import Hotdrinks from "../img/Hotdrinks.png";
import { Fragment } from "react";
import BreakfastItems from "../Components/BreakfastItems";

export default function Menue(){
    const MenuLists=<div className={styles.wraper} >
    <div className={styles.col} >
        <img src={Hotdrinks} alt="Hotdrinks"/>
    <p>Hotdrinks</p>
         </div>
    <div className={styles.col}>
        <img src={Softdrinks} alt="Sofdrinks"/>
    <p>Softdrinks</p>
         </div>
     <div className={styles.col}>
        <img src={Smoothies} alt="Smoothies"/>
    <p>Smoothies</p>
         </div>
     <div className={styles.col}>
        <img src={Juices} alt="Juices"/>
    <p>Juices</p>
         </div>
    <div className={styles.col}>
        <img src={Sandwwich} alt="Sandwiches"/>
    <p>Sandwiches</p>
         </div>
    <div className={styles.col}>
        <img src={Hotdishes} alt="Hotdishes"/>
    <p>Hot dishes</p>
         </div>
    <div className={styles.col}>
        <img src={pasta} alt="Pasta"/>
    <p>Pasta</p>
         </div>
         <div className={styles.col}>
        <img src={Salad} alt="Salad"/>
    <p>Salad</p>
         </div>
         <div className={styles.col}>
        <img src={Starter} alt="Starter"/>
    <p>Starter</p>
         </div>
         <div className={styles.col}>
        <img src={Breakfast} alt="Breakfast"/>
        <p>Breakfast</p>
         </div>
        </div>
    return(<Fragment>
        <h1 className={styles.header}>Foods & Drinks</h1>
        {MenuLists}
        <BreakfastItems/>
    </Fragment>)
}