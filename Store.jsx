import ItemCard from "../StoreComponents.jsx/ItemCard";
import data from "../data";
export default function Store(){

    return(
         <div className="pt-[50px] mt-30 flex flex-wrap gap-20 px-10 items-center justify-center">
            {data.map((item)=>{
                return(
                    <ItemCard
                      item={item}
                      key={item.code}
                    />
                )
            })}
         </div>
    )
}