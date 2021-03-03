import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react'
import nclass from './Navbar.module.css'
import Logo from './Logo.png'
//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import cart from './cart.png'
//import SideDrawer from "./SideDrawer"
//import { navLinks } from "@material-ui/core";
//import { IconButton } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


function Navbar() {


    const [show, setshow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setshow(true);
            }
            else
                setshow(false);

        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    return (
        <div className={` ${nclass.navbar} ${show && `${nclass.navblack}`}`}>

            <img className={nclass.logo}
                src={Logo}
                alt="logo" ></img>
            <div className={nclass.avatar0}>

              <div className={nclass.avatar}><SearchIcon/>Search
              </div> 
            <div className={nclass.avatar1}>
            help
            </div>
            <div className={nclass.avatar2}>
            <div>
                Account
            </div> 
            </div>
                
             <div className={nclass.avatar3}> 
             <img className={nclass.cart1} src={cart} alt="cart"></img>


             </div>

            </div>

            <div className={nclass.navatar}>
            <div className={nclass.avatar6}><SearchIcon/>
              </div> 
              <div>
                  <img className={nclass.avatar7} src={cart} alt="cart"></img>
              </div>

              <div className={nclass.ham}>
              
      <MenuIcon/>
              </div>

            </div>

        </div>
    );
}

export default Navbar

