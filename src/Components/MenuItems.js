import Styles from "./MenuItems.module.css";

const MenuItems=(props)=>{



return(
    <div className={Styles.wrapItems} id={props.id}>
    <div className={Styles.item}>
         <div className={Styles.prices}><h3>{props.title} </h3>
            
            </div>
       <div className={Styles.flex}> 
        <p className={Styles.description}>{props.description}</p>
      </div>
      {props.subCategory==="Hot Sandwich" && <div style={{textAlign:"left"}}><strong>({props.subCategory})</strong>
      <p>Served with Chips & Salad</p></div>}
         {props.subCategory==="Club Sandwich" && <div style={{textAlign:"left"}}><strong>({props.subCategory})</strong>
      <p>Served with White or Brown Bread & Garnish Salad.To add chips extra <strong>£1</strong></p></div>}
        </div>
    </div>
   )

}
export default MenuItems;