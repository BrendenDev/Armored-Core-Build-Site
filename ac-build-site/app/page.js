'use client'
import Assembly from './building/assembly.js';
import { useState, useEffect } from 'react';
import { preloadData } from './building/db.js';
import { } from './statUI/statbox.js'
import { stringify } from 'postcss';

export function PartsStats({ currentMenu, currentSelect, currentPart }) {

  const [stats, setStats] = useState();

  //function changeStatData() 

  /*useEffect(() => {
    if(currentPart === null) {} 
    else {
      setStats(JSON.stringify(currentPart));
    }

  }, [currentPart]); //possibly dont need stateChangeTrigger and can use current select, but need to be able to activate when initially press*/

  function StatsList(currentPart) {
    if(currentMenu === 'default' || currentPart === null) {
      return(
        <>
        </>
      );
    }
    else {
      const data = []
      const rawData = currentPart['currentPart'];
      for(let [key, value] of Object.entries(rawData)) {
        if(key !== '_id' && key !== 'name' & key !== 'type') {
          data.push(<p>{key}: {value}</p>);
        }
      }

      return(
        <>
          {data}
        </>
      );
    }

    
  }

  return (
      <div className="text-center">
          <p>
            <StatsList currentPart={currentPart}/>
          </p>
      </div>
  );

}


export default function Home() {

  const [currentMenu, setCurrentMenu] = useState('default'); //menus: default, unit, frame, inner, expansion

  const [currentSelect, setCurrentSelect] = useState(""); //selects: the sub-categories of unit, frame, inner, and expansion

  const [currentPart, setCurrentPart] = useState(""); //current parts: all the parts of the sub-categories
  

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
        <Assembly currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} currentPart={currentPart} setCurrentPart={setCurrentPart}/>
      </div>
      <div className='w-[44.44%] border-white border-2 mx-8 items-end justify-end'>
        <PartsStats currentMenu={currentMenu} currentSelect={currentSelect} currentPart={currentPart}/>
      </div>
      <div className='w-[33.33%] border-black border-2 mx-8'>
      </div>
    </main>
  )
  
}