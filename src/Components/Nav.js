import styles from "./Nav.module.css"
import {  NavLink } from "react-router-dom"
export default function Nav(){
return(<div className={styles.wrap}>
    <div className={styles.logo}><h2>Dominiques</h2></div>
    <div className={styles.wraper}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Menu">Menu</NavLink>
    <NavLink to="/Gallery">Gallery</NavLink>
    <NavLink to="/Contact">Contact</NavLink></div>
</div>)
}