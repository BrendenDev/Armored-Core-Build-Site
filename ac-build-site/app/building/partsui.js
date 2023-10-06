'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getPartQuery } from './queries.js';
import { Corners } from '../ui/corners.js';

export function PartsSelector({ currentMenu, setCurrentMenu, parts, setCurrentSelect, currentSelect }) {

    const [prevMenu, setPrevMenu] = useState(null);
    const [nextMenu, setNextMenu] = useState(null);

    const allMenus = ['UNIT', 'FRAME', 'INNER', 'EXPANSION'];

    const partCategories = { //can put this in home component and shoot it down to assembly as well as statbox. also can separate category and parts into two arrays instead of together in object
        "UNIT": ["R-ARM UNIT", "L-ARM UNIT", "R-BACK UNIT", "L-BACK UNIT"],
        "FRAME": ["HEAD", "CORE", "ARMS", "LEGS"], 
        "INNER": ["BOOSTER", "FCS", "GENERATOR"],
        "EXPANSION": ["EXPANSION"]
    };

    useEffect(() => {
        setPrevMenu(allMenus[(allMenus.indexOf(currentMenu) - 1 + allMenus.length) % allMenus.length]);
        setNextMenu(allMenus[(allMenus.indexOf(currentMenu) + 1) % allMenus.length]);
    }, [currentMenu]);

    function goNextMenu() {
        setCurrentMenu(nextMenu);
        setCurrentSelect(partCategories[nextMenu][0]); //partCategories[nextMenu].length-1
    }

    function goPrevMenu() {
        setCurrentMenu(prevMenu);
        setCurrentSelect(partCategories[prevMenu][0]); //partCategories[nextMenu].length-1
    }

    const partHeader = (
        <div className="pb-2"> 
            <span className="text-center text-[rgb(200,200,200)] flex justify-between">
                <span className="text-xs flex justify-center items-center w-[20%] border-[0.01rem] border-grey hover:cursor-pointer" onClick={goPrevMenu}>
                    <p>{prevMenu}</p>
                </span>

                <span className="w-[20%]">
                    <h1>{currentMenu}</h1>
                </span>
                

                <span className="text-xs flex justify-center items-center w-[20%] border-[0.01rem] border-grey hover:cursor-pointer" onClick={goNextMenu}>
                    <p>{nextMenu}</p>
                </span>
            </span> 
        </div>
    );

    const partElements = parts.map( (part, index) => {
        if(part === currentSelect) {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(77,98,127)]" onClick={() => setCurrentSelect(part)}> {/* change hover to gradient please */}
                    <h1 className="py-2 text-center">{part.replace(" UNIT", "")}</h1> {/*Removing "unit" from text title cuz it looks better. Not changing querying or anythinig*/}
                </div> 
            );
        }
        else {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]" onClick={() => setCurrentSelect(part)}>
                    <h1 className="py-2 text-center">{part.replace(" UNIT", "")}</h1>
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

    const [renderedData, setRenderedData] = useState(null);


    useEffect(() => {
        const data = [];
        const query = getPartQuery(currentSelect); //this has to be an await despite grabbing from local storage
        const localQuery = currentMenu.toLowerCase() + "_data";
        
        //DATA NOT RECIEVING IN DATA, TEST FOR THAT
        const rawData = JSON.parse(localStorage.getItem(localQuery));
        if(rawData) {
            //console.log(rawData[0]['type']);
            //console.log(query); //debugging for part query
            for(let i = 0; i < rawData.length; i++) {
                if(rawData[i]['type'] === query) {
                    data.push(JSON.stringify(rawData[i]));
                }
            }
        }
        setRenderedData(data);
            
        const equipped = JSON.parse(localStorage.getItem(currentSelect));
        if(equipped) {
            setCurrentEquipped(equipped);
            setCurrentPart(equipped);
        }
        
        else if(data[0]){
            setCurrentEquipped(null);
            const parsedData = JSON.parse(data[0]);
            setCurrentPart(parsedData);
        }

        

    }, [currentSelect, currentMenu]);

    function Equippable({part, setCurrentEquipped}) {
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
                    <div className="absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer" onClick={(event) => {event.stopPropagation();  setCurrentEquipped(part);}}>
                        <p>Equip Part</p>
                    </div>
                );
            }
        }
        catch (error) {
            return(
                <div className="absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer" onClick={(event) => {event.stopPropagation();  setCurrentEquipped(part);}}>
                    <p>Equip Part</p>
                </div>
            );
        }
       
            
    }

    useEffect(() => {
        localStorage.setItem(currentSelect, JSON.stringify(currentEquipped));
    }, [currentEquipped]);

    function Part({ partData, index, currentPart, setCurrentPart, currentEquipped }) {
        const part = JSON.parse(partData);
        
        // if... Current Equipped | Selected | Not Equipped or Selected
        if(currentPart['name']===part['name'] || (currentEquipped && part['name'] === currentEquipped['name'])) {
            if(currentEquipped && part['name'] === currentEquipped['name']) {
                return(
                    <li key={index} className="relative text-center py-10 mx-[15%] my-2 bg-[rgb(0,80,100)] flex justify-center max-w-[100%]" onClick={() => setCurrentPart(part)}>
                        {/* <p>{part['name']}</p> */}
                        <Image src={'/test.jpg'} width={0} height={0} sizes={"100%"} className="w-[70%]"/>
                        <Equippable part={part} setCurrentEquipped={setCurrentEquipped}/>
                    </li>
                );
            }
            else {
                return(
                    <li key={index} className="relative text-center py-20 mx-[15%] my-2 bg-[rgb(101,117,131)]" onClick={() => setCurrentPart(part)}>
                        <p>{part['name']}</p>
                        <Equippable part={part} setCurrentEquipped={setCurrentEquipped}/>
                    </li>
                );
            }
        }
        else {
            return(
                <li key={index} className="relative text-center py-20 mx-[15%] my-2 bg-[rgb(86,106,135)] hover:bg-[rgb(101,117,131)]" onClick={() => setCurrentPart(part)}>
                    <p>{part['name']}</p>
                    <Equippable part={part} setCurrentEquipped={setCurrentEquipped}/>
                </li>
            );
        }
        
        

    }

    return(
        <div className="bg-gradient-to-b from-custom-gradient-start via-custom-gradient-mid to-custom-gradient-end relative"> 
            <div className="overflow-y-auto h-full max-h-[80vh] no-scrollbar">
                <ul className="list-none p-0">
                    {
                        (renderedData!==null ? (
                            renderedData.map((partData, index) => (
                                <>
                                <Part partData={partData} key={index} currentPart={currentPart} setCurrentPart={setCurrentPart} currentEquipped={currentEquipped}/>
                                </>    
                            ))) : 
                            (
                                <>
                                </>
                            )
                        )
                    }
                </ul>
            </div>
            <Corners />
        </div>
    );
}

//cache parts idea//
/*

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