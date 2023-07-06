function BuildParts({ category, parts }) { //category = unit, frame, inner, or expansion

    const partElements = parts.map( (part, index) => {
        return (
            <div key={index} className="my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]"> {/* change hover to gradient please */}
                <h1 className="pl-10 py-2">{part}</h1>
            </div>
        );
    });


    return (
        <div className="pb-6">
            {/*category heading*/}
            <div className="text-2x1 pb-2"> 
                <h1 className="text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4">{category}</h1>
            </div>

            {/*parts in category*/}
            {partElements}
        </div>
    )
}

export default function Assembly() {
    return (
        <>
            {/*unit parts*/}
            <BuildParts category="UNIT" parts={["R-ARM UNIT", "L-ARM UNIT", "R-BACK UNIT", "L-BACK UNIT"]} />
            
            {/*frame parts*/}
            <BuildParts category="FRAME" parts={["HEAD", "CORE", "ARMS", "LEGS"]} />

            {/*inner parts*/}
            <BuildParts category="INNER" parts={["BOOSTER", "FCS", "GENERATOR"]} /> 

            {/*expansion parts*/}
            <BuildParts category="EXPANSION" parts={["EXPANSION"]} />
        </>
    )
    
}