import bgTech from "../assets/bg.jpg"
import { Link } from "react-router-dom"
export default function HomeText(){

    return (
        <section  className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-16 px-8 text-white"
      style={{ backgroundImage: `url(${bgTech})`}}>
        <title>Home</title>
            <h1 className="text-[2em] font-bold max-[400px]:text-[1.5em]">Discover HyperTech</h1>

         <div className="w-[80%] text-[16px] mt-2">
            <div className="text mb-10 max-[400px]:text-[14px]">

                 <strong>HyperTech</strong> is a <strong>modern</strong> and <strong>intuitive e-commerce platform</strong> entirely dedicated to the world of <strong>technology</strong> and <strong>high-tech products</strong>. Designed to meet the needs of both <strong>tech enthusiasts</strong> and <strong>casual users</strong>, it offers a <strong>smooth</strong> and <strong>enjoyable browsing experience</strong> through a <strong>clear, responsive, and user-friendly interface</strong>. Whether you're looking for the <strong>latest-generation smartphone</strong>, a <strong>high-performance laptop</strong>, a <strong>stylish smartwatch</strong>, or <strong>innovative accessories</strong>, <strong>HyperTech</strong> provides a <strong>wide selection of products</strong>, each <strong>meticulously described</strong> with <strong>detailed specifications</strong>, <strong>star ratings</strong>, and <strong>attractive visuals</strong>. The site features <strong>advanced functionalities</strong> such as <strong>category, brand, and price filtering</strong>, <strong>intelligent keyword search</strong>, an <strong>interactive shopping cart</strong>, and a <strong>secure and simplified virtual checkout system</strong>.

            </div>

            <Link to="/store" className="w-20 bg-blue-950 color-white p-5 mt-10 rounded-xl cursor-pointer font-bold transition-colors duration-400 hover:bg-white hover:text-blue-950">Discover our Store</Link>
            </div>
        </section>
    )
}