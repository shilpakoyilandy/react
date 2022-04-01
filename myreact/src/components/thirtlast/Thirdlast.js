import classes from './thirdlast.module.css';
function Thirdlast(props){
    return(
        <>
        <div className={classes.topspace}>
        <img className={classes.image} src={props.datas.userdata.img}/><label className={classes.onlinename}>{props.datas.userdata.name}</label>
        </div>
        <div className={classes.statusCircle}>
           
        </div>
    </>
    )
}
export default Thirdlast