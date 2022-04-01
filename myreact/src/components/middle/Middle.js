import './middle.css';
import {PhotoLibrary,Label,LocationOn,EmojiEmotions} from '@material-ui/icons';
function Middle(){
    return(
        <>
        <div class="boxes">
        <div class="square blog-shadow-dreamy">
        {/* //  <div class="box shadow p-3 mb-5 bg-white rounded"> */}
        {/* <div className=' shadow p-3 mb-5 bg-white rounded'> */}
<img src="/assets/CuteGirl.jpg"className='img'/><input type="text" className='textbox' placeholder='What is on your mind?'/>
<hr/>
<div className='iconpart'><span style={{color:'red'}}><PhotoLibrary/></span><p>Photos\Video</p>
<span style={{color:'blue'}}><Label/></span><p>Tags</p>
<span style={{color:'green'}}><LocationOn/></span><p>Location</p>
<span style={{color:'orange'}}><EmojiEmotions/></span><p>Feelings</p>
<button className='btn btn-success'>share</button>
</div>

    </div>
    
    </div>
    </>
    )
}
export default Middle