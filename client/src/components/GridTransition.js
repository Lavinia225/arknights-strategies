function GridTransition(){

    function printGrid(){
        const grid = []

        for (let row = 1; row <= 8; row++){
            for (let column = 1; column <= 8; column++){
                grid.push(<div key={`${row}${grid}`} className={`row-${row} column-${column} tile`}></div>)
            }
        }
        // Can make row and columns at the same time? 
       return grid
    }

    return(
        <div id='grid-container'>
            {printGrid()}
        </div>
    )
}

export default GridTransition
