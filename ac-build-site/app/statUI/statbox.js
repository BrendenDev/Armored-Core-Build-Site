'use client'
import { useState, useEffect } from 'react';

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
        const data = [] //might be better to just make three arrays and then turn it into one and return that instead or even return as three so you can adjust the three separately
        const rawData = currentPart['currentPart'];
        for(let [key, value] of Object.entries(rawData)) {
          if(key !== '_id' && key !== 'type') {
            if(key === 'extra_type') {
              if(value === 'none') {
                value = currentSelect;
              }
              data.unshift(
                <div className="">
                  <p>{value.toUpperCase()}</p>
                </div>
              );
            }
            else if(key === 'name' ) {
              data.splice(0, 0, (
                <div className="mb-[15vh]">
                  <p>{value}</p>
                </div>
              ));
            }
            else if(key === 'description') {
              data.splice(1, 0, (
                <div className="mb-[40vh]">
                  <p className="">Part Info</p>
                  <p>{value}</p>
                </div>
              ));
            }
            else {
              const spec = convertToTitleCase(key);
              data.push(
                <span className="flex justify-between">
                  <p className="">{spec}&nbsp;</p>
                  <p className="">{value}</p>
                </span>
            );
  
            }
            
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

export function FrameStats({currentSelect, currentEquipped}) {

    const [equippedParts, setEquippedParts] = useState();
    const [stats, setStats] = useState({
      armour_points: 0,
      defensive_performance: 0,
      attitude_stability: 0,
      boost_speed: 0,
      current_load: 0,
      current_en_load: 0
    }); 
    const allParts = ["R-ARM UNIT", "L-ARM UNIT", "R-BACK UNIT", "L-BACK UNIT", "HEAD", "CORE", "ARMS", "LEGS", "BOOSTER", "FCS", "GENERATOR", "EXPANSION"];
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
        allParts.forEach((part) => {
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
            console.log('hi');

            const frameData = equippedParts;
            const newEquippedPart = JSON.parse(localStorage.getItem(currentSelect));
            frameData[currentSelect] = newEquippedPart;
            setEquippedParts(frameData);
            console.log(frameData[currentSelect]);
            console.log(frameData);

            const statData = {
              armour_points: 0,
              defensive_performance: 0,
              attitude_stability: 0,
              boost_speed: 0,
              current_load: 0,
              current_en_load: 0
            }; 

            console.log(statData);
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
                    <span className='flex justify-between bg-[rgb(42,54,77)]'>
                      <p className='pl-2'>{spec}</p>
                      <p className='pr-2'>{value}</p>
                    </span>
                  );
                }
                else {
                  renderedData.push(
                    <span className='flex justify-between bg-[rgb(48,59,81)]'>
                      <p className='pl-2'>{spec}</p>
                      <p className='pr-2'>{value}</p>
                    </span>
                  );
                }
                i++;
            }


            return(
                <div className="p-4">
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