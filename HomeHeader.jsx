import React from "react";
import logo from "../assets/desklogo.svg"
import { Link } from "react-router-dom";
export default function HomeHeader(){

    const [nav, setNav] = React.useState(()=>{
        const saved = localStorage.getItem('nav');

        return saved ? JSON.parse(saved) : 
          false
    });

    React.useEffect(()=>{
        localStorage.setItem('nav', JSON.stringify(nav));
    }, [nav]);

    return(
        <header className="flex flex-row justify-between w-full bg-blue-950 h-[60px] top-0 fixed text-white px-2 items-center z-50">
            <Link to="/">
            <div className="flex flex-row items-center gap-1 hover:border hover:border-white px-1">
                <img src={logo} alt="logo" width="45"/>
                <h1 className="text-[1.2em] font-black">Hyper Tech</h1>
            </div>
            </Link>

            <nav className="flex flex-row justify-center items-center gap-3 text-[15px] font-bold max-[500px]:hidden">
                <Link to="/"><p className="headerLink">Home</p></Link>
                <Link to="/store"><p className="headerLink">Store</p></Link>
                <Link><p className="headerLink">Cart</p></Link>
                <Link><p className="headerLink">Orders</p></Link>
            </nav>

            <div className="hidden max-[500px]:block text-[1.7em] font-bold cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50" onClick={()=> setNav(prev => !prev)}>&#9776;</div>

            {nav && 
                  <nav className="hidden max-[500px]:flex flex-col absolute top-17 bg-blue-950 p-3 text-[14px] font-[500] gap-2 w-23 rounded-xl right-3">
                <Link to="/"><p className="headerLink">Home</p></Link>
                <Link to="/store"><p className="headerLink">Store</p></Link>
                <Link><p className="headerLink">Cart</p></Link>
                <Link><p className="headerLink">Orders</p></Link>
            </nav>
            }
        </header>
    );
}