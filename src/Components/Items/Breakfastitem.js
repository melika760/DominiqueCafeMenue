import Styles from "./Breakfastitem.module.css";
export default function Breakfastitem(){
    <div className={Styles.wraper} id="breakfast">
        <h1>BREAK FAST</h1>
        <span className={Styles.divider}></span>
        <div className={Styles.item}>
            <h3>Full English </h3>
            <p className={Styles.description}>2 Free Range Eggs,Cumberland Sausage,2 A1 Bacons,Grilled Tomato,Baked Beans,Mushroom and Toast</p>
            <h6>£10.95</h6>
        </div>
    </div>
}