import './header.css';
import { Chat, Notifications, Person } from '@material-ui/icons';
import {Link} from "react-router-dom";
function Header() {
  return (
    <>
      <div className="row nav" >
        <div className="col"><h3 className='mai'>Mai_Tweet</h3></div>
        <div className="col">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search for friends,videos or post" />
          </div>
        </div>

        <div className='col'><div class="topnav">
          {/* <a class="active" style={{color:"white"}} href="#home"> */}
            <Link to="/">Home</Link>
            {/* </a> */}
          {/* <a href="#"> */}
            <Link to="/profile">Profile</Link>
            {/* </a> */}
        </div>
        </div>
        <div className='col'><div className='topicon'><span style={{ color: "white" }}><Person /><Chat /><Notifications /></span>
          <img className="img1" src="./assets/CuteGirl.jpg" />
        </div>
        </div>

        </div>
      </>
      )
}
      export default Header