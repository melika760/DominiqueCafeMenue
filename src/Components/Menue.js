import styles from "./Menue.module.css";
import pasta from "../img/spaguetti.png";
import Breakfast from "../img/english-breakfast.png";
import Starters from "../img/Starter.png";
import Salad from "../img/salad.png";
import Hotdishes from "../img/Hotdishes.png";
import Sandwwich from '../img/sandwich.png';
import Juices from "../img/juices.png";
import Smoothies from "../img/smoothie.png";
import Softdrinks from "../img/Softdrink.png";
import Hotdrinks from "../img/Hotdrinks.png";
import { Fragment} from "react";
import BreakfastItems from "../Components/BreakfastItems";
import {HashLink as Link } from "react-router-hash-link";
import StarterItem from "./StarterItem";
import SaladItem from "./SaladItem";
import PastaItem from "./PastaItem";
import HotdishesItem from "./HotdishesItem";
import SandwichItem from "./SandwichItem";
import JuiceItem from "./JuiceItem";
import SmoothieItem from "./SmoothieItem";
import SoftdrinksItem from "./SoftdrinksItem";

export default function Menue(){
 

    const MenuLists=<div className={styles.wraper}>
    <div className={styles.col} >
        <img src={Hotdrinks} alt="Hotdrinks"/>
    <p>Hotdrinks</p>
         </div>
         <Link to="#SoftdrinksItem"className={styles.col} smooth><div >
        <img src={Softdrinks} alt="Softdrinks"/>  <p>Soft drinks</p></div></Link>
         <Link to="#SmoothiesItem"className={styles.col} smooth><div >
        <img src={Smoothies} alt="Smoothies"/>  <p>Smoothies</p></div></Link>
    
         <Link to="#JuicesItem"className={styles.col} smooth><div >
        <img src={Juices} alt="Juices"/>  <p>Juices</p></div></Link>
         <Link to="#SandwichesItem"className={styles.col} smooth><div >
        <img src={Sandwwich} alt="Sandwiches"/>  <p>Sandwiches</p></div></Link>
         <Link to="#HotdishesItem"className={styles.col} smooth><div >
        <img src={Hotdishes} alt="Hotdishes"/>  <p>Hot dishes</p></div></Link>
         <Link to="#PastaItem"className={styles.col} smooth><div >
        <img src={pasta} alt="Pasta"/>  <p>Pasta</p></div></Link>
         <Link to="#SaladItem"className={styles.col} smooth><div >
        <img src={Salad} alt="Salad"/>  <p>Salad</p></div></Link>
        
        <Link to="#Starteritem"className={styles.col} smooth>  <div>
        <img src={Starters} alt="Starter"/> <p>Starter</p> </div></Link>
      <Link to="#BreakfastItem"className={styles.col} smooth><div >
        <img src={Breakfast} alt="Breakfast"/>  <p>Breakfast</p></div></Link>
        </div>
    return(<Fragment>
        <h1 className={styles.header}>Foods & Drinks</h1>
        {MenuLists}
        
        <BreakfastItems/>
        <StarterItem/>
        <SaladItem/>
        <PastaItem/>
        <HotdishesItem/>
        <SandwichItem/>
        <JuiceItem/>
        <SmoothieItem/>
        <SoftdrinksItem/>
    </Fragment>)
}