import { useSelector } from 'react-redux';
import  "./App.css";
export default function Home() {
const {AuthData} = useSelector(state=>state.auth_reducer)

  return (
    <>
    <div className="PageContent">
      <div className="heading_1">Welcome {AuthData.username} !</div>
      <div className="heading_2">Your Role as <span style={{fontWeight:'bold'}}>{AuthData.role}</span> </div>
      {AuthData.role === 'admin' ? 
      <div className="access_all__sentense">You can access all contents </div>
      : 
      <>
        <div className="access_only__sentense_green">You can only access content 1</div>
        <div className="access_only__sentense_red"> Content 2 only admin can access it !</div>
      </>
      }
    </div>
    </>
  )
}
