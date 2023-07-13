'use client'
import Assembly from './building/assembly.js';
import { useState, useEffect } from 'react';
import { preloadData } from './building/db.js';
import { PartsStats, FrameStats } from './statUI/statbox.js'

function HomeButton({setCurrentMenu}) {
  return (
    <div className="w-full h-full flex justify-center items-center" onClick={() => setCurrentMenu("default")}>
      <p>Home</p>
    </div>
    
  );
}

export default function Home() {

  const [currentMenu, setCurrentMenu] = useState('default'); //menus: default, unit, frame, inner, expansion

  const [currentSelect, setCurrentSelect] = useState(""); //selects: the sub-categories of unit, frame, inner, and expansion

  const [currentPart, setCurrentPart] = useState(""); //current part of stats displayed: all the parts of the sub-categories

  const [currentEquipped, setCurrentEquipped] = useState(""); //current equipped part, not just selected (applies to overall stats, not just viewing)
  

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
    <main className="flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white no-text-cursor">

      {/*assembly container*/}
      <div className="w-1/3 text-2x1 flex-col mx-8"> 
        <Assembly currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} currentPart={currentPart} setCurrentPart={setCurrentPart} currentEquipped={currentEquipped} setCurrentEquipped={setCurrentEquipped}/>
      </div>

      {/*part stats container*/}
      <div className='w-[44.44%] mx-8 items-end justify-end'>
        <PartsStats currentMenu={currentMenu} currentSelect={currentSelect} currentPart={currentPart}/>
      </div>

      {/*frame stats container*/}
      <div className='w-[33.33%] mt-[70vh] bg-[rgb(37,49,74)] mx-8'>
        <FrameStats currentSelect={currentSelect} currentEquipped={currentEquipped} />
      </div>

      <div className='absolute bottom-[3vh] border-2 border-white w-[5vw] h-[5vh]'>
        <HomeButton setCurrentMenu={setCurrentMenu}/>
      </div>
    </main>
  )
  
}