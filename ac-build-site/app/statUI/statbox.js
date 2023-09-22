'use client'
import { useState, useEffect } from 'react';
import { Corners } from '../ui/corners.js';

function parseAndMultiply(str) {
  if(typeof str !== 'string') {
    return str;
  }
  else if(str.includes('x')) {
    const [num1, num2] = str.split('x').map(parseFloat); 
    return num1*num2;
  }
  else {
    return parseFloat(str);
  }
}

export function PartsStats({ currentMenu, currentSelect, currentPart, currentEquipped }) {

    function StatsList(currentPart) {
  
      function convertToTitleCase(str) { //need to be able to cap EN and QB and any other targetted words
        let words = str.split('_');
        let result = '';
        
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          result += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        }
        
        return result.trim();
      }

      if(currentMenu === 'default' || !currentPart['currentPart']) {
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
        let i = 2; //coloring for the partValues
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
              else if(currentEquipped){ //if currentEquipped is a value
                const spec = convertToTitleCase(key);
                var renderedValue;
                
                var parsedCurrentEquipped = currentEquipped[key];
                var parsedValue = value;
                if(typeof currentEquipped[key] === 'string') {
                  parsedCurrentEquipped = parseAndMultiply(currentEquipped[key]);
                }
                if(typeof value === 'string') {
                  parsedValue = parseAndMultiply(value);
                }
  
                if(parsedCurrentEquipped > parsedValue) {
                  renderedValue=(<>{currentEquipped[key]} &#8594; <span className="text-red-600">{value}</span></>);
                }
                else if(parsedCurrentEquipped === parsedValue) {
                  renderedValue=value;
                }
                else {
                  renderedValue=(<>{currentEquipped[key]} &#8594; <span className="text-green-600">{value}</span></>);
                }
  
                if(i%2==0) {
                  partValues.push(
                    <span className="flex justify-between bg-[rgb(42,54,77)] bg-opacity-80">
                      <p className="pl-2">{spec}</p>
                      <p className="pr-2">{renderedValue}</p>
                    </span>
                  );
                }
                else {
                  partValues.push(
                    <span className="flex justify-between bg-[rgb(48,59,81)] bg-opacity-80">
                      <p className="pl-2">{spec}</p>
                      <p className="pr-2">{renderedValue}</p>
                    </span>
                  );
                }
                i++;
  
                
    
              }
              else {

                const spec = convertToTitleCase(key);
                if(i%2==0) {
                  partValues.push(
                    <span className="flex justify-between bg-[rgb(42,54,77)] bg-opacity-80">
                      <p className="pl-2">{spec}</p>
                      <p className="pr-2">{value}</p>
                    </span>
                  );
                }
                else {
                  partValues.push(
                    <span className="flex justify-between bg-[rgb(48,59,81)] bg-opacity-80">
                      <p className="pl-2">{spec}</p>
                      <p className="pr-2">{value}</p>
                    </span>
                  );
                }
                i++;
                 
              }
              
            }
          }
          return(
            <div className="h-full flex flex-col overflow-auto no-scrollbar pt-[4vh]">
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
        <div className="text-center h-[95vh]">
              <StatsList currentPart={currentPart}/>
        </div>
    );
  
}

export function FrameStats({currentSelect, currentEquipped, equippedParts, setEquippedParts}) {

    const defaultStats = {
      /*****************OVERViEW STATS********************/ 
      //AP
      //Defensive Performance
      //Attitude Stability
      //Boost Speed
      //Current Load
      //Current EN Load
      /********************************************/ //defensive performance = average of stats ending "defense"
      armour_points: 0,
      anti_kinetic_defense: 0,
      anti_energy_defense: 0,
      anti_explosive_defense: 0,
      attitude_stability: 0,
      attitude_recover: 0,
      /********************************************/
      target_tracking: 0,
      /********************************************/
      boost_speed: 0,
      qb_speed: 0,
      qb_en_consumption: 0,
      qb_reload_time: 0,
      /********************************************/
      en_capacity: 0,
      en_supply_efficiency: 0,
      en_recharge_delay: 0,
      /********************************************/
      total_weight: 0,
      /********************************************/
      total_arms_load: 0,
      arms_load_limit: 0, 
      total_load: 0,
      load_limit: 0,
      total_en_load: 0,
      en_output: 0,
      /********************************************/
      current_load: 0,
      current_arms_load: 0,
      current_en_load: 0
    };

    const [stats, setStats] = useState(defaultStats); 
    const allSelects = ["R-ARM", "L-ARM", "R-BACK", "L-BACK", "HEAD", "CORE", "ARMS", "LEGS", "BOOSTER", "FCS", "GENERATOR", "EXPANSION"];
    const statContributors = {
      /********************************************/
      armour_points: [],
      anti_kinetic_defense: [],
      anti_energy_defense: [],
      anti_explosive_defense: [],
      attitude_stability: [],
      attitude_recover: [],
      /********************************************/
      target_tracking: [],
      /********************************************/
      boost_speed: [],
      qb_speed: [],
      qb_en_consumption: [],
      qb_reload_time: [],
      /********************************************/
      en_capacity: [],
      en_supply_efficiency: [],
      en_recharge_delay: [],
      /********************************************/
      total_weight: [],
      /********************************************/
      total_arms_load: [],
      arms_load_limit: [], 
      total_load: [],
      load_limit: [],
      total_en_load: [],
      en_output: [],
      /********************************************/
      current_load: [],
      current_arms_load: [],
      current_en_load: []
    };
    

    useEffect(() => {
        const frameData = {};
        allSelects.forEach((part) => {
            const data = localStorage.getItem(part);
            if(data) {
              frameData[part] = JSON.parse(data);
            }
            
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
    
            //i don't know what happened here. I just know my brain exploded writing this and I probably won't remember how this works
            for(let part of Object.values(frameData)) {
              if(part !== null && part !== undefined) {
                  for(let [partSpec, partValue] of Object.entries(part)) {
                      for(let [spec, acceptableSpecs] of Object.entries(statContributors)) {
                          if(acceptableSpecs.includes(partSpec)) {
                            if(acceptableSpecs)
                              //console.log("adding " + spec + " as " + partValue + " from " + partName); //in the first for loop, change to let [partName, part] of Object.entries
                              statData[spec] += parseFloat(partValue);
                          }
                      }
                  }
              }
              
          }
                

            setStats(defaultStats);

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
                <>
                    {renderedData}
                </>
            );
            
        }
        
    }

    return( 
      <div className="flex w-full self-center">
        <div className="p-2 bg-[rgb(37,49,74)] w-full self-center bg-opacity-80 relative">
          <RenderedStats />
          <Corners />
        </div>
      </div>
        
    );

    
}