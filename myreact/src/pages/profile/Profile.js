import Header from "../../components/header/Header";
import Sidebar from '../../components/sidebar/Sidebar';
import Middle2 from '../../components/middle2/Middle2';
import Middle from "../../components/middle/Middle";
import Secsidebar from "../../components/secsidebar/Secsidebar";
import Profileside from "../../components/profilesidebar/Profileside";
import "./profile.css";
import {arr} from '../../data';
import {posts} from '../../middledata';
function Profile(){
    return (
        <>
        <Header/>
        <div className="row">
        <div className='col-md-2' style={{paddingRight:"0"}}>
         <div className="row">
      <Sidebar/>
      </div>
      <div className="row" style={{display:"block"}}>
     {
       arr.map((val,i)=>{
         console.log("val"+JSON.stringify(val));
         return <Secsidebar key={i} values={val}/>
       })
     }
     </div>
        </div>
        <div className="col-md-10"style={{paddingLeft:"0"}}>
          <div className="row">  <img style={{height:"350px",width:"100%",position:"relative"}} src="./assets/travel-world.jpg"/>
          </div>
          <div ><img className='profileCircle'src="./assets/CuteGirl.jpg"/></div> 
        <div className="row" style={{marginTop:"70px"}} >
            <div className="col-md-8" style={{borderLeft:"0"}}>
            <Middle/>
                {
         posts.map((val,i)=>{
          return <Middle2 key={i} datas={val}/>
        })
      }</div> 
      <div className="col-md-4" >
          <div className="row">
          <h4>UserInformation</h4><br/>
          <p>City:Newyork<br/>
          From:germany<br/>
          Relationship:Single</p>
      </div>
      <div className="row">
          {
              arr.map((val,i)=>{
                  return <Profileside key={i} values={val}/>
              })
          }
          </div>
      </div>
      </div> 
                  </div>
        
        </div>
        </>
    )
} export default Profile