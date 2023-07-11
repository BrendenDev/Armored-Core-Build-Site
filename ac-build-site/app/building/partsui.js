'use client'
import {useState, useEffect} from 'react';
import { getPartQuery } from './db.js';

export function PartsSelector({ category, parts, handleClick, currentSelect }) {

    const partHeader = (
        <div className="text-2x1 pb-2"> 
            <h1 className="text-center text-[rgb(200,200,200)]">{category}</h1>
        </div>
    );

    const partElements = parts.map( (part, index) => {
        if(part === currentSelect) {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(77,98,127)]" onClick={() => handleClick(part)}> {/* change hover to gradient please */}
                    <h1 className="py-2 text-center">{part}</h1>
                </div> 
            );
        }
        else {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]" onClick={() => handleClick(part)}>
                    <h1 className="py-2 text-center">{part}</h1>
                </div> 
            );
        }
    });


    return( 
        <div>
            {/*category heading*/}
            {partHeader}
            
            {/*parts in category*/}
            <div className="flex flex-row justify-evenly">
                {partElements}
            </div>
        </div>
    );
}

export function PartsBuilder({ currentSelect, currentMenu, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped }) {

    const [renderedData, setRenderedData] = useState([]);


    useEffect(() => {
        const fetchData = async () => { //can move this to useEffect in page.js to truly preload
            const query = await getPartQuery(currentSelect); //this has to be an await despite grabbing from local storage
            const localQuery = currentMenu.toLowerCase() + "_data";
            
            //DATA NOT RECIEVING IN DATA, TEST FOR THAT
            const rawData = JSON.parse(localStorage.getItem(localQuery));
            
            const data = [];
            for(let i = 0; i < rawData.length; i++) {
                if(rawData[i]['type'] === query) {
                    data.push(JSON.stringify(rawData[i]));
                }
            }

            
            setRenderedData(data);
        }
        fetchData();
        

        const checkEquipped = async () => {
            if(localStorage.getItem(currentSelect) != "[object Object]") {
                setCurrentEquipped(JSON.parse(localStorage.getItem(currentSelect)));
            }
            
        }
        checkEquipped();


    }, [currentSelect]);

    function Equippable({part, changeCurrentEquipped}) {
        try {
            if(part['name'] === currentEquipped['name']) {
                return(
                    <div className="absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer" onClick={(event) => {event.stopPropagation(); console.log("Already equipped");}}>
                        <p>Equipped</p>
                    </div>
                );
            }
            else {
                return(
                    <div className="absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer" onClick={(event) => {event.stopPropagation();  changeCurrentEquipped(part);}}>
                        <p>Equip Part</p>
                    </div>
                );
            }
        }
        catch (error) {
            return(
                <div className="absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer" onClick={(event) => {event.stopPropagation();  changeCurrentEquipped(part);}}>
                    <p>Equip Part</p>
                </div>
            );
        }
       
            
    }

    useEffect(() => {
        localStorage.setItem(currentSelect, JSON.stringify(currentEquipped));
    }, [currentEquipped]);

    function changeCurrentEquipped(part) {
        setCurrentEquipped(part);
    }

    function changeCurrentPart(part) {
        setCurrentPart(part);
    }

    function Part({ partData, index, changeCurrentPart }) {
        const part = JSON.parse(partData);
        

        if(currentPart['name']===part['name']) {
            return(
                <li key={index} className="relative text-center py-20 mx-10 my-2 bg-[rgb(101,117,131)]" onClick={() => changeCurrentPart(part)}>
                    <p>{part['name']}</p>
                    <Equippable part={part} changeCurrentEquipped={changeCurrentEquipped}/>
                </li>
            );
        }
        else {
            return(
                <li key={index} className="relative text-center py-20 mx-10 my-2 bg-[rgb(86,106,135)] hover:bg-[rgb(101,117,131)]" onClick={() => changeCurrentPart(part)}>
                    <p>{part['name']}</p>
                    <Equippable part={part} changeCurrentEquipped={changeCurrentEquipped}/>
                </li>
            );
        }
        
        

    }

    return( //make div background a gradient
        <div className="bg-gradient-to-b from-custom-gradient-start via-custom-gradient-mid to-custom-gradient-end"> 
            <div className="overflow-y-auto h-full max-h-[75vh] no-scrollbar">
                <ul className="list-none p-0">
                    {
                        renderedData.map((partData, index) => (
                            <>
                               <Part partData={partData} key={index} changeCurrentPart={changeCurrentPart}/>
                            </>    
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

//cache parts idea
/*let cache = {};

function getItemFromLocalStorage(key) {
  if (cache.hasOwnProperty(key)) {
    // Item is found in the cache, return it
    return cache[key];
  }

  // Item is not found in the cache, retrieve it from localStorage
  const item = localStorage.getItem(key);

  // Store the item in the cache
  cache[key] = item;

  return item;
}

// Handle storage events to update the cache
window.addEventListener('storage', (event) => {
  const { key } = event;
  
  // Remove the item from the cache if it is updated or removed in localStorage
  if (cache.hasOwnProperty(key)) {
    delete cache[key];
  }
});

// Usage example
const value1 = getItemFromLocalStorage('item1'); // Retrieves 'item1' from localStorage and stores it in the cache
const value2 = getItemFromLocalStorage('item2'); // Retrieves 'item2' from localStorage and stores it in the cache

// Update 'item1' in localStorage
localStorage.setItem('item1', 'new value');

const updatedValue1 = getItemFromLocalStorage('item1'); // Retrieves the updated value from localStorage and updates the cache
*/