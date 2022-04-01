import './secsidebar.css';
function Secsidebar(props){
    return(
        // <div className='row'>
        <div className='space'>
            <img className="circularimage" src={props.values.img}/><label className='sidename'>{props.values.name}</label>
             </div>
    )
}
export default Secsidebar;