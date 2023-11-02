import { Fragment } from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";

import Footer from "../Components/Footer";
export default function Homepage(props){
    return (
        <Fragment>
          <Nav/>
        <Header/>
        <AboutUs/>
      
        <Footer/>
        </Fragment>
          );
}