import React from 'react'


function Car(){


    const [car, setCar] = React.useState(()=>{
        const saved = localStorage.getItem('car');

        return saved ? JSON.parse(saved) : 
           [
        {
            year: '2019',
            name : 'Rapid',
            make : 'Skoda'
        }
    ];
    }
    );

    const [inputYear, setInputYear] = React.useState(new Date().getFullYear());
    const [inputName, setInputName] = React.useState('');
    const [inputMake, setInputMake] = React.useState('');

    function saveYear(event){
        setInputYear(event.target.value);
    }

    function saveName(event){
        setInputName(event.target.value);
    }

    function saveMake(event){
        setInputMake(event.target.value);
    }


    function addCar(){

        if(!inputMake || !inputName || !inputYear){
            return;
        }

        const newCar = [
            ...car,
            {
                year : inputYear,
                name : inputName,
                make : inputMake
            }
        ];

         setCar(newCar);

        setInputYear(new Date().getFullYear());
        setInputName('');
        setInputMake('');

        localStorage.setItem('car', JSON.stringify(newCar));

    }

    function deleteCar(index){
       
        let newCar = car.filter((_,i)=>i !== index);

        setCar(newCar);

        localStorage.setItem('car', JSON.stringify(newCar));


    }


    return (
        
        <>

          <div className="car-project">
          <h1>Car Project</h1>
              
              <div className="display-cars">

                {car.map((c,i)=>{
                    return (
                        <>
                          <div className="car-div">
                            <li>Year : {c.year}</li>
                            <li>Name : {c.name}</li>
                            <li>Make : {c.make}</li>
                            <button 
                            className="delete-button" 
                            onClick={()=>{deleteCar(i)}}>
                               Delete
                            </button>
                          </div>
                        </>
                    );
                })}

                <div className="inputs">
                    <input 
                    type="number" 
                    min="1900"
                    max={new Date().getFullYear()}
                    className="input-year in" 
                    value={inputYear}
                    onChange={saveYear}

                    />

                    <input 
                    type="text" 
                    className='in'
                    value={inputName}
                    placeholder='Enter Car name'
                    onChange={saveName}

                    />

                    <input 
                    type="text" 
                    placeholder='Enter make'
                    value={inputMake}
                    onChange={saveMake}
                    className='in'
                    />

                    <button 
                    className="add-button"
                    onClick={addCar}
                    >Add</button>
                </div>
              </div>
          </div>
        </>
    )

}

export default Car