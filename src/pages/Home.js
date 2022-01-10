import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/action'

const Home = () => {
    
const {currentUser} = useSelector((state)=>state.user);
const dispatch= useDispatch();
const handleAuth =()=> {

    if(currentUser){
        dispatch(logoutInitiate());
        
    }
}
    return (
        <div className="text-center bg-secondary bg-opacity-10">
        <button type="submit" className="btn btn-outline-danger rounded-pill offset-8 mt-3  " onClick={handleAuth}>Logout</button>
         <h1 className="text-success pb-4"> Welcome to my demo  Application</h1>
     
       <img src="img-4.jpg" alt=""  className="rounded-pill"/>
 
        </div>
    )
}

export default Home;
