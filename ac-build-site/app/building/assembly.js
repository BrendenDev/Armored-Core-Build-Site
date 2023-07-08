'use client'
import { useState, useEffect } from 'react';
import { connectDB, preloadPartData } from './db.js'

function PartsOverview({ category, parts, handleClick }) { //category = unit, frame, inner, or expansion

    const partHeader = (
        <div className="text-2x1 pb-2"> 
                <h1 className="text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4">{category}</h1>
        </div>
    );

    const partElements = parts.map( (part, index) => {
        return (
            <div key={index} className="my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]" onClick={() => handleClick(category, part)}> {/* change hover to gradient please */}
                <h1 className="pl-10 py-2">{part}</h1>
            </div>
        );
    });


    return (
        <div className="pb-6">
            {/*category heading*/}
            {partHeader}

            {/*parts in category*/}
            {partElements}
        </div>
    );
}

function PartsSelector({ category, parts, handleClick, currentSelect }) {

    const partHeader = (
        <div className="text-2x1 pb-2"> 
            <h1 className="text-center text-[rgb(200,200,200)]">{category}</h1>
        </div>
    );

    const partElements = parts.map( (part, index) => {
        if(part === currentSelect) {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(120,148,162)]" onClick={() => handleClick(part)}> {/* change hover to gradient please */}
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
        <div className="pb-6">
            {/*category heading*/}
            {partHeader}
            
            {/*parts in category*/}
            <div className="flex flex-row justify-evenly">
                {partElements}
            </div>
        </div>
    );
}

//<RetrieveParts />

export function PartsBuilder({ currentSelect, currentMenu }) {

    const [renderedData, setRenderedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await preloadPartData(currentSelect, currentMenu);
            setRenderedData(data);
        }

        fetchData();
    }, [currentSelect]);

    return(
        <div className="w-full border border-gray-300 rounded overflow-hidden">
            <div className="overflow-y-auto h-full max-h-[75vh]">
                <ul className="list-none p-0">
                    {
                        renderedData.map((item, index) => (
                            <li key={index} className="text-center py-20">{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default function Assembly() {

    useEffect(() => {
        connectDB()
    }, []);

    const partCategories = [
        {
          category: "UNIT",
          parts: ["R-ARM UNIT", "L-ARM UNIT", "R-BACK UNIT", "L-BACK UNIT"]
        },
        {
          category: "FRAME",
          parts: ["HEAD", "CORE", "ARMS", "LEGS"]
        },
        {
          category: "INNER",
          parts: ["BOOSTER", "FCS", "GENERATOR"]
        },
        {
          category: "EXPANSION",
          parts: ["EXPANSION"]
        }
    ];

    //eventually change these to localstorage so we can keep the person's last state

    const [currentSelect, setcurrentSelect] = useState("");

    function changePart(newPart) {
        setcurrentSelect(newPart);
    }

    const [menu, setMenu] = useState('default');

    function changeMenu(menuClicked, newPart) {
        setMenu(menuClicked);
        setcurrentSelect(newPart);
    }

    

    if(menu === 'default') {
        return (
            <>
                {partCategories.map((part) => { //map all the parts
                    return (
                        <PartsOverview key={part.category} category={part.category} parts={part.parts} handleClick={changeMenu}/>
                    );  
                })}
            </>
        );
    }

    else {
        const currentParts = partCategories.find((part) => part.category === menu).parts; //find object category of menu, and then retrieve parts in that object
        return( 
            <>
                <PartsSelector category={menu} parts={currentParts} handleClick={changePart} currentSelect={currentSelect}/>
                <PartsBuilder currentSelect={currentSelect} currentMenu={menu}/>
                {/*add PartsBuilder here */}
            </>
        );
    }
    
}