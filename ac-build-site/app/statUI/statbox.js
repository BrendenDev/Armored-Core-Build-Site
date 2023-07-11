'use client'
import { useEffect, useState } from 'react';

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
    const [stats, setStats] = useState(); 
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
        setStats({
            armour_points: 0,
            defensive_performance: 0,
            attitude_stability: 0,
            boost_speed: 0,
            current_load: 0,
            current_en_load: 0
        });

        const statData = stats;
    
        
        for(let part of Object.values(frameData)) {
            if(part !== null && part !== undefined) {
                for(let [partSpec, partValue] of Object.entries(part)) {
                    for(let [spec, acceptableSpecs] of Object.entries(statContributors)) {
                        console.log(acceptableSpecs + " " + partSpec);
                        if(acceptableSpecs.includes(partSpec)) {
                            statData[spec] = partValue;
                        }
                    }
                }
            }
            
        }

        setStats(statData);

        console.log(stats);
        
    }, []);

    useEffect(() => {
        if(currentSelect !== null && currentSelect !== "") {
            setStats({
                armour_points: 0,
                defensive_performance: 0,
                attitude_stability: 0,
                boost_speed: 0,
                current_load: 0,
                current_en_load: 0
            });
            const frameData = equippedParts;
            const newEquippedPart = localStorage.getItem(currentSelect);
            frameData[currentSelect] = newEquippedPart;

            const statData = stats; //i don't know what happened here. I just know my brain exploded writing this and I probably won't remember how this works
            for(let part in frameData) {
                if(frameData[part] !== null && frameData[part] !== "") {
                    for(let [spec, value] of Object.entries(frameData[part])) {
                        for(let stat in statContributors) {
                            if(statContributors[stat].includes(spec)) {  
                                console.log("adding " + spec + "=" + value +" to " + stat)   
                                if(statData[stat] !== null && statData[stat] !== undefined) {
                                    statData[stat] += calculateString(value);
                                }
                            }
                        }
                    } 
                }
            }
                

            //console.log(statData);
            setStats(statData);

            setEquippedParts(frameData);
        }

        }
    , [currentEquipped]);

    function calculateString(possibleString) {
        if (typeof possibleString === 'string') {
            const operatorIndex = possibleString.indexOf('x');
            if (operatorIndex !== -1) {
            const operand1 = parseFloat(possibleString.substring(0, operatorIndex));
            const operand2 = parseFloat(possibleString.substring(operatorIndex + 1));
            const result = operand1 * operand2;
            return result;
            }
        }
        return parseFloat(possibleString);
    }

    function RenderedStats() {
        const renderedData = [];
        if(stats !== null && stats !== undefined) {
            for(let [spec, value] of Object.entries(stats)) {
                renderedData.push(
                    <p>{spec}: {value}</p>
                );
            }


            return(
                <>
                    {renderedData}
                </>
            );
            
        }
        
    }

    return( 
        <>
            <RenderedStats />
        </>
    );

    
}