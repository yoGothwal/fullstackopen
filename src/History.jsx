export const History = (props)=>{
    if(props.allClicks.length === 0){
        return(
            <h4 className="block-fill text-center font-italic">Lets Start</h4>
        )
    }
    return(
        <h4 className="block-fill text-center font-italic">{props.allClicks.join(' ')}</h4>
    )
}