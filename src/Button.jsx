export const Button = (props)=>{
    return(
        <button className="btn btn-primary flex-fill mx-1" onClick={props.onClick}>{props.name}</button>
    )
}