'use client'
import Assembly from './building/assembly.js';
import { useState, useEffect } from 'react';
import { preloadData } from './building/db.js';
import { PartsStats, FrameStats } from './statUI/statbox.js';

function HomeButton({setCurrentMenu}) {
  return (
    <div className="w-full h-full flex justify-center items-center  px-[2vw] py-[1vh]" onClick={() => setCurrentMenu("default")}>
      <p>Home</p>
    </div>
    
  );
}

//to fix the image loading before everything else, just make sure it picks a part before you open the menu

export default function Home() {

  const [currentMenu, setCurrentMenu] = useState('default'); //menus: default, unit, frame, inner, expansion

  const [currentSelect, setCurrentSelect] = useState(null); //selects: the sub-categories of unit, frame, inner, and expansion

  const [currentPart, setCurrentPart] = useState(null); //current part of stats displayed: all the parts of the sub-categories

  const [currentEquipped, setCurrentEquipped] = useState(null); //current equipped part, not just selected (applies to overall stats, not just viewing)

  const [equippedParts, setEquippedParts] = useState(null); //ALL current equipped parts
  

  useEffect(() => {
    //check version
    const recordedVersion = window.localStorage.getItem("recorded_version");
    const setVersion = async () => {
      const [currentVersion, data] = await preloadData(recordedVersion);
      if(data !== null) {
        const [unitData, frameData, innerData, expansionData] = data;
        window.localStorage.setItem("unit_data", JSON.stringify(unitData));
        window.localStorage.setItem("frame_data", JSON.stringify(frameData));
        window.localStorage.setItem("inner_data", JSON.stringify(innerData));
        window.localStorage.setItem("expansion_data", JSON.stringify(expansionData));
      }
      window.localStorage.setItem("recorded_version", currentVersion);
    };
    setVersion();

  }, []);

  return (
    <main className="flex h-screen flex-row items-center justify-around font-agency-fb text-white no-text-cursor text-lg">

      {/*assembly container*/}
      <div className="w-[25%] flex-col"> 
        <Assembly currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} currentPart={currentPart} setCurrentPart={setCurrentPart} currentEquipped={currentEquipped} setCurrentEquipped={setCurrentEquipped} equippedParts={equippedParts}/>
      </div>

      {/*part stats container*/}
      <div className='w-[35%] items-end justify-end'>
        <PartsStats currentMenu={currentMenu} currentSelect={currentSelect} currentPart={currentPart} currentEquipped={currentEquipped}/>
      </div>

      {/*frame stats container*/}
      <div className='w-[25%] relative h-full flex items-center'>
        <FrameStats currentSelect={currentSelect} currentEquipped={currentEquipped} equippedParts={equippedParts} setEquippedParts={setEquippedParts}/>
      </div>

      <div className='absolute top-[2vh] right-[35%] border-[0.1rem] border-white hover:cursor-pointer'>
        <HomeButton setCurrentMenu={setCurrentMenu}/>
      </div>
    </main>
  )
  
}