import React from "react";


export const DescriptionContext = React.createContext();

export const useDescriptionContext = ()=> React.useContext(DescriptionContext);

export const DescriptionProvider = ({children}) => {

    const [descriptionItem, setDescriptionItem] = React.useState(()=>{
        const saved = localStorage.getItem('descriptionItem');

        return saved ? JSON.parse(saved) : 
           null
    });


    React.useEffect(()=>{
        localStorage.setItem('descriptionItem', JSON.stringify(descriptionItem));
    }, [descriptionItem]);


    const value = {
        descriptionItem,
        setDescriptionItem
    }
    return(

        <DescriptionContext.Provider value={value}>
            {children}
        </DescriptionContext.Provider>
    )
}
