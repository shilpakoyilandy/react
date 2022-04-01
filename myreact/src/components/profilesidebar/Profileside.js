import "./profileside.css";
function profileside(props){
    return(
        <>
        <div>
            <img className="imggrid" src={props.values.img}/><p>{props.values.name}</p>
        </div>
        </>
    )
}
export default profileside