export const Hello = (props)=>{
    const {name, age} = props;
    const Bornyear = ()=> new Date().getFullYear() - age

    return(
        <div>
            <p>
                hello {name} !, welcome to react. Your age is {age}
                your birth year is {Bornyear()}
            </p>
        </div>
    )
}
const Great = (props) =>{
    return(
        <div>
            <p>
                Your name is {props.name} and your age is {props.age}
            </p>
        </div>
    )
}
export const Great2 = (props) =>{
    return(
        <div>
            <p>
                You are {props.name} and your age is {props.age}
            </p>
        </div>
    )
}

export default Great;