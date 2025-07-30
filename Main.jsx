import React, { useEffect } from "react"
import Header from "./Header"
import MemeInputs from "./MemeInputs"
import Meme from "./Meme"
export default function Main(){

    const [meme, setMeme] = React.useState(
        {
            imageSrc:"http://i.imgflip.com/1bij.jpg",
            topText:"Some thing different",
            bottomText:"Walk into Mordor"
        }
    )

    const [allMemes, setAllMemes] = React.useState([]);
    React.useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
            .then((data) =>{
                  console.log(data.data.memes);
                  setAllMemes(data.data.memes);
            } )
    }, []);


    return(
        <>
          <main>
            <Header/>
            <MemeInputs
            meme={meme}
            setMeme={setMeme}
            allMemes={allMemes}
            />
            <Meme
             meme={meme}
             setMeme={setMeme}
            />
          </main>
        </>
    )
}