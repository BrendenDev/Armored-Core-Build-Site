'use  client'

//requires the container div to be relative
export function Corners() {
    return(
        <>
            <div className="absolute top-0 left-0 w-1 h-1 bg-white"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-white"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-white"></div> 
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-white"></div> 
        </>
    );
}