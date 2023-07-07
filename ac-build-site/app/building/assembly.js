'use client'
import { useState, useEffect } from 'react';
import { connectDB } from './partassembly.js'

function PartsOverview({ category, parts, handleClick }) { //category = unit, frame, inner, or expansion

    const partHeader = (
        <div className="text-2x1 pb-2"> 
                <h1 className="text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4">{category}</h1>
        </div>
    );

    const partElements = parts.map( (part, index) => {
        return (
            <div key={index} className="my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]" onClick={() => handleClick(category)}> {/* change hover to gradient please */}
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

function PartsSelector({ category, parts }) {

    const [currentPart, setCurrentPart] = useState(parts[0]);

    const partHeader = (
        <div className="text-2x1 pb-2"> 
            <h1 className="text-center text-[rgb(200,200,200)]">{category}</h1>
        </div>
    );

    function handleClick(newPart) {
        setCurrentPart(newPart);
    }

    const partElements = parts.map( (part, index) => {
        if(part === currentPart) {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(120,148,162)]" onClick={() => handleClick(part)}> {/* change hover to gradient please */}
                    <h1 className="py-2 text-center">{part}</h1>
                </div> 
            );
        }
        else {
            return (
                <div key={index} className="flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]" onClick={() => handleClick(part)}> {/* change hover to gradient please */}
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

export function PartsBuilder() {
    return(
        <div className="w-64 h-64 border border-gray-300 rounded overflow-hidden">
            <div className="overflow-y-auto">
                <ul className="list-none p-0">
                    {/* Render your selection items here */}
                    <li className="py-2 px-4">Item 1</li>
                    <li className="py-2 px-4">Item 2</li>
                    <li className="py-2 px-4">Item 3</li>
                    {/* ... */}
                </ul>
            </div>
        </div>
    );
}

export default function Assembly() {

    useEffect(() => {
        connectDB()
    });

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

    const [menu, setMenu] = useState('default');

    function changeMenu(menuClicked) {
        console.log(menu);
        setMenu(menuClicked);
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
                <PartsSelector category={menu} parts={currentParts} handleClick={changeMenu} />
                <PartsBuilder />
                {/*add PartsBuilder here */}
            </>
        );
    }
    
}