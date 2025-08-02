import React from "react";
import Header from "./Header";
import MemeInputs from "./MemeInputs";
import MemeImage from "./MemeImage";
export default function Main(){

    const [meme, setMeme] = React.useState({
        image : "http://i.imgflip.com/1bij.jpg",
        topText : "Some thing different",
        bottomText:"Walk into Mordor"
    });

    const [allMeme, setAllMeme] = React.useState([]);


    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
          .then(res => res.json())
            .then(data=>{
            
                setAllMeme(data.data.memes);
            });
    }, []);

    

    return(
        <main>

            <Header/>
            <MemeInputs 
             meme={meme}
             setMeme={setMeme}
             allMeme={allMeme}
             setAllMeme={setAllMeme}
             
            />

            <MemeImage
            meme={meme}
            setMeme={setMeme}
            allMeme={allMeme}
            setAllMem={setAllMeme}
            />

        </main>
    )
}