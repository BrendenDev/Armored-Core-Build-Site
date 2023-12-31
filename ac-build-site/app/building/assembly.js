'use client'
import { PartsSelector, PartsBuilder } from './partsui.js';

function PartsOverview({ category, parts, handleClick, equippedParts }) { //category = unit, frame, inner, or expansion

    const partHeader = (
        <div className="pb-[0.5%]"> 
                <h1 className="text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4">{category}</h1>
        </div>
    );

    //console.log(equippedParts);

    const partElements = parts.map( (part, index) => {
        return (
            <div key={index} className="my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)] overflow-auto no-scrollbar" onClick={() => handleClick(category, part)}> {/* change hover to gradient please */}
                <div className="flex flex-col justify-center">
                    <p className="pl-[7%] text-[rgb(112,126,148)]">{part}</p>
                    {equippedParts && equippedParts[part] ? 
                    (<p className="pl-[7%]">{equippedParts[part]['name']}</p>) : (<p className="pl-[7%]">(Nothing)</p>)}
                </div>
            </div>
        );
    });


    return (
        <div className="pb-2">
            {/*category heading*/}
            {partHeader}

            {/*parts in category*/}
            {partElements}
        </div>
    );
}

export default function Assembly({ currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts}) {

    const partCategories = [ //can put this in home component and shoot it down to assembly as well as statbox. also can separate category and parts into two arrays instead of together in object
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

    function changeMenu(currentMenuClicked, newPart) {
        setCurrentMenu(currentMenuClicked);
        setCurrentSelect(newPart);
    }

    if(currentMenu === 'default') {
        return (
            <div className="">
                {partCategories.map((part, index) => { //map all the parts
                    return (
                        <>
                            <PartsOverview key={index} category={part.category} parts={part.parts} handleClick={changeMenu} equippedParts={equippedParts}/>
                        </>
                    );  
                })}
            </div>
        );
    }

    else {
        const currentParts = partCategories.find((part) => part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object
        return( 
            <>
            <div className='w-full'>
                <PartsSelector currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} parts={currentParts} setCurrentSelect={setCurrentSelect} currentSelect={currentSelect} />
                <PartsBuilder currentSelect={currentSelect} currentMenu={currentMenu} currentPart={currentPart} setCurrentPart={setCurrentPart} currentEquipped={currentEquipped} setCurrentEquipped={setCurrentEquipped}/>
            </div>  
            </>
        );
    }
    
}