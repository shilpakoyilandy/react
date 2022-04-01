import './sidebar.css'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import {RssFeed,Chat,SwitchVideo,Group,Bookmark, HelpOutline,Work,Event,Layers} from '@material-ui/icons';
function Sidebar(){
    return(
        <>
        <div className='sidediv'>
        <div className="sideview">
            <RssFeed/><p className='p'> Feed</p>
         </div>
            <div className="sideview">
            <Chat/><p className='p'>chat</p>
            </div>
            <div className="sideview">
            <SwitchVideo/><p className='p'>Video</p>
            </div>
            <div className="sideview">
            <Group/><p className='p'>Group</p>
            </div>
            <div className="sideview">
            <Bookmark/><p className='p'>Bookmark</p>
            </div>
            <div className="sideview">
            <HelpOutline/><p className='p'>Questions</p>
            </div>
            <div className="sideview">
            <Work/><p className='p'>Job</p>
            </div>
            <div className="sideview">
            <Event/><p className='p'>Event</p>
            </div>
            <div className="sideview">
            <Layers/><p className='p'>Courses</p>
            </div>
            <div><button className='btn'>Show More</button></div>
            <hr/>
            </div>
            </>
     )
}
export default Sidebar