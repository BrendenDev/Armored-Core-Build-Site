'use client'
import { useState, useEffect } from 'react';
import { Corners } from '../ui/corners.js';

export function PartsStats({ currentMenu, currentSelect, currentPart }) {

    function StatsList(currentPart) {
  
      function convertToTitleCase(str) {
        let words = str.split('_');
        let result = '';
        
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          result += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        }
        
        return result.trim();
      }
      
      if(currentMenu === 'default' || currentPart === null) {
        return(
          <>
          </>
        );
      }
  
      else { //this organization of entering data is purely based on how the data is organized in the database. yea, i know that's bad. Sue me. jk pls dont
        const partType = [];
        const partInfo = [];
        const partValues = [];
        
        //might be better to just make three arrays and then turn it into one and return that instead or even return as three so you can adjust the three separately
        const rawData = currentPart['currentPart'];
        let i = 2; //for the coloring for the partValues
        for(let [key, value] of Object.entries(rawData)) {
          if(key !== '_id' && key !== 'type') {

            /*    PART TYPE/NAME    */
            if(key === 'extra_type') {
              if(value === 'none') {
                value = currentSelect;
              }
              partType.unshift(
                <div>
                  <p>{value.toUpperCase()}</p>
                </div>
              );
            }

            else if(key === 'name' ) {
              partType.splice(1, 0, (
                <div>
                  <p>{value}</p>
                </div>
              ));
            }

            /*    PART DESCRIPTION    */
            else if(key === 'description') {
              partInfo.push(
                <div className="p-2 pt-1">
                  <p className="">Part Info</p>
                  <p>{value}</p>
                </div>
              );
            }

            /*    PART STATS    */
            else {
              const spec = convertToTitleCase(key);
              if(i%2==0) {
                partValues.push(
                  <span className="flex justify-between bg-[rgb(42,54,77)] bg-opacity-80">
                    <p className="pl-2">{spec}&nbsp;</p>
                    <p className="pr-2">{value}</p>
                  </span>
                );
              }
              else {
                partValues.push(
                  <span className="flex justify-between bg-[rgb(48,59,81)] bg-opacity-80">
                    <p className="pl-2">{spec}&nbsp;</p>
                    <p className="pr-2">{value}</p>
                  </span>
                );
              }
              i++;
  
            }
            
          }
        }
        return(
          <div className="h-full flex flex-col justify-between">
            <div className="">
              {partType} 
            </div>

            <div>
              <div>
                <div className="bg-[rgb(43,59,84)] bg-opacity-100 relative">
                  {partInfo} 
                  <Corners /> 
                </div>

                <div className="flex h-[50vh] bg-[rgb(52,68,96)] items-center justify-center bg-opacity-80">
                  <p>Place holder for image</p>
                </div>
              </div>
              

              <div className="bg-[rgb(43,59,84)] p-2 bg-opacity-80 relative">
                {partValues}
                <Corners /> 
              </div>

            </div>
            
          </div>
        );
      }
  
      
    }
  
    return (
        <div className="text-center h-[85vh]">
              <StatsList currentPart={currentPart}/>
        </div>
    );
  
}

export function FrameStats({currentSelect, currentEquipped, equippedParts, setEquippedParts}) {

    const [stats, setStats] = useState({
      armour_points: 0,
      defensive_performance: 0,
      attitude_stability: 0,
      boost_speed: 0,
      current_load: 0,
      current_en_load: 0
    }); 
    const allSelects = ["R-ARM UNIT", "L-ARM UNIT", "R-BACK UNIT", "L-BACK UNIT", "HEAD", "CORE", "ARMS", "LEGS", "BOOSTER", "FCS", "GENERATOR", "EXPANSION"];
    const statContributors = {
        armour_points: ['armour_points'],
        defensive_performance: [],
        attitude_stability: [],
        boost_speed: [],
        current_load: ['weight'],
        current_en_load: ['en_load']

    };
    

    useEffect(() => {
        const frameData = {};
        allSelects.forEach((part) => {
            frameData[part] = JSON.parse(localStorage.getItem(part));
        });
        setEquippedParts(frameData);

        const statData = stats;
    
        
        for(let part of Object.values(frameData)) {
            if(part !== null && part !== undefined) {
                for(let [partSpec, partValue] of Object.entries(part)) {
                    for(let [spec, acceptableSpecs] of Object.entries(statContributors)) {
                        if(acceptableSpecs.includes(partSpec)) {
                            //console.log("adding " + spec + " as " + partValue + " from " + partName); //in the first for loop, change to let [partName, part] of Object.entries
                            statData[spec] += parseFloat(partValue);
                        }
                    }
                }
            }
            
        }

        
    }, []);

    useEffect(() => {
        if(currentSelect !== null && currentSelect !== "") {

            const frameData = equippedParts;
            const newEquippedPart = JSON.parse(localStorage.getItem(currentSelect));
            frameData[currentSelect] = newEquippedPart;
            setEquippedParts(frameData);

            const statData = {
              armour_points: 0,
              defensive_performance: 0,
              attitude_stability: 0,
              boost_speed: 0,
              current_load: 0,
              current_en_load: 0
            }; 

    
            //i don't know what happened here. I just know my brain exploded writing this and I probably won't remember how this works
            for(let part of Object.values(frameData)) {
              if(part !== null && part !== undefined) {
                  for(let [partSpec, partValue] of Object.entries(part)) {
                      for(let [spec, acceptableSpecs] of Object.entries(statContributors)) {
                          if(acceptableSpecs.includes(partSpec)) {
                              //console.log("adding " + spec + " as " + partValue + " from " + partName); //in the first for loop, change to let [partName, part] of Object.entries
                              statData[spec] += parseFloat(partValue);
                          }
                      }
                  }
              }
              
          }
                

            setStats(statData);

            //console.log(statData);

            setEquippedParts(frameData);
        }

        }
    , [currentEquipped]);

    function convertToTitleCase(str) {
      let words = str.split('_');
      let result = '';
      
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
      }
      
      return result.trim();
    }


    function RenderedStats() {
        const renderedData = [];
        if(stats !== null && stats !== undefined) {
            let i = 2;
            for(let [key, value] of Object.entries(stats)) {
                const spec = convertToTitleCase(key);
                if(i%2 === 0) {
                  renderedData.push(
                    <span className='flex justify-between bg-[rgb(42,54,77)] bg-opacity-80'>
                      <p className='pl-2'>{spec}</p>
                      <p className='pr-2'>{value}</p>
                    </span>
                  );
                }
                else {
                  renderedData.push(
                    <span className='flex justify-between bg-[rgb(48,59,81)] bg-opacity-80'>
                      <p className='pl-2'>{spec}</p>
                      <p className='pr-2'>{value}</p>
                    </span>
                  );
                }
                i++;
            }


            return(
                <div className="p-2">
                    {renderedData}
                </div>
            );
            
        }
        
    }

    return( 
        <>
            <RenderedStats />
        </>
    );

    
}