import React from "react";
import Header from "./Header";
import MemeInputs from "./MemeInputs";
import Meme from "./Meme";
export default function Main(){

    const [meme, setMeme] = React.useState({
        topText : "Some thing different",
        imageUrl : "http://i.imgflip.com/1bij.jpg",
        bottomText : "Walk into Mordor"
    });
    
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
          .then(res=> res.json()) 
             .then((data)=>{
                setAllMemes(data.data.memes);
             });
    }, []);

    return(
        <main>

            <Header/>
            <MemeInputs
            meme={meme}
            setMeme={setMeme}
            allMemes={allMemes}
            setAllMemes={setAllMemes}

            />
            <Meme
             meme={meme}
            />
        </main>
    )
}