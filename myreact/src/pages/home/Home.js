import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Middle from '../../components/middle/Middle';
import Middle2 from '../../components/middle2/Middle2';
import Thirdsection from '../../components/thirdsection/Thirdsection';
import Secsidebar from '../../components/secsidebar/Secsidebar';
import Thirdlast from '../../components/thirtlast/Thirdlast';
import { arr } from '../../data';
import {posts} from '../../middledata';

function Home(){
    return(
      <> 
      <Header/>
      <div className='row'>  
       <div className='col-md-2'>
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
      {/* <Secsidebar/> */}
      </div>
      <div className='col-md-7'>
      <Middle/>
      {
         posts.map((val,i)=>{
          return <Middle2 key={i} datas={val}/>
        })
      }
       {/* <Middle2/> */}
       </div>
      <div className='col-md-3'>
        <Thirdsection/>
        <div className='row'style={{display:"block",marginTop:"10px"}}>
        {
          posts.map((val,i)=>{
            return <Thirdlast key={i} datas={val}/>
          })
        }
        </div>
        
      
       </div>
      </div>
      </>
      
    )
}
export default Home