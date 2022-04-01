import classes from './thirdsection.module.css';
function Thirdsection(){
    return(
        <>
        <div className='row'>
            <p>Shilpa and other <em>3 friends</em> have  </p>
            </div>
            <div className='row'>
                <img className={classes.img} src="./assets/image.jpg"/>
                </div>
                <div className='row'><h5>Online Friends</h5>
                    </div>
                    {/* <div className='row' ><img className={classes.image} src="./assets/image.jpg"/><label className={classes.onlinename}>shilpa</label></div> */}
        </>
    )
}
export default Thirdsection