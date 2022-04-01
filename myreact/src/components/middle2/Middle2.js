import classes from'./middle2.module.css';
import {CommentOutlined, Favorite, ThumbUpAlt, ThumbUpAltOutlined} from '@material-ui/icons';
 import {useState} from 'react';
function Middle2(props){
    const [like, setLike] = useState(props.datas.likes);
    const [unLike,setUnLike]=useState(false);
    
    const likeClick=()=>
    {
        setLike(unLike?like-1:like+1)
        setUnLike(!unLike)
        }
    
    
    return(
       <>
      <div className={classes.boxes}>
        <div className={`${classes.square} ${classes.blogShadowDreamy}`}>
            <div className='row'>
            <img src={props.datas.userdata.img}className={classes.prflpic}/><p className={classes.name}>{props.datas.userdata.name} &nbsp; &nbsp;{props.datas.time}</p>
            </div> 
            <div className='row'>
                <p className={classes.ptag}>{props.datas.des}</p>
                </div>
                <div className='row'><img src={props.datas.image}className={classes.img}/>
                </div>
                <div className='row'><span className={classes.like} style={{color:"blue"}}><ThumbUpAlt/></span>
                <span className={classes.love} style={{color:"red"}}><Favorite/></span><p style={{paddingTop:"6px"}}>&nbsp;{like}likes &nbsp;&nbsp;{props.datas.coments}comments</p>
                
                 </div><hr style={{margin:0}}/>
                 <div className='row'style={{textAlign:"center",paddingTop:"5px"}}><div className='col'style={{marginTop:"6px",display:"flex",marginLeft:"20px",paddingLeft:"10px"}}> <ThumbUpAltOutlined/><div><label  onClick={likeClick}>Like</label></div></div>
                 <div className='col'><CommentOutlined/>&nbsp;<label style={{paddingTop:"2px"}}>Comment</label></div>
                 <div className='col'>Share</div>
                 </div>
                
            </div>
        </div>
       </> 
    )
}
export default Middle2