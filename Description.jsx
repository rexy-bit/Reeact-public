
import StarsRating from "../StoreComponents.jsx/StarRating";
import { useDescriptionContext } from "../Contexts/DescriptionContext";
export default function Description(){

    const {descriptionItem} = useDescriptionContext();



    return(
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-[2em] font-black mt-20 text-shadow-blue-950 underline max-[1100px]:w-100 text-center max-[1100px]:text-[1.2em] max-[410px]:w-90">{descriptionItem.nom} description:</h1>

            <div className="flex flex-row mt-13 w-[80%] p-4 border border-blue-950 rounded-lg mb-20 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:content-center max-[1100px]:items-center max-[1100px]:w-[90%]">
                <div className="flex flex-col content-center items-center gap-7 w-[25%] max-[1100px]:w-full">
                    <div className="bg-white">
                    <img src={descriptionItem.image} alt={descriptionItem.nom} className="w-[180px] h-[230px] object-contain p-3"/>
                    </div>

                    <button className="h-[40px] bg-blue-950 text-white font-bold rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 w-[120px]">Add to Cart</button>
                </div>

                <div className="w-[75%] max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:center-center max-[1100px]:items-center max-[1100px]:mt-10 max-[1100px]:w-full max-[1100px]:px-2">
                    <h1 className="text-[1.4em] text-shadow-blue-950 font-bold max-[1100px]:text-center">{descriptionItem.nom}</h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-[1.2em]">- Categorie : {descriptionItem.categorie}.</p>
                        <p className="text-[17px] max-[1100px]:text-[16px]">- Description : {descriptionItem.description}</p>
                        <StarsRating
                          note={descriptionItem.note}
                        />
                         <p className="text-[1.2em]">{descriptionItem.prix} &euro;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}