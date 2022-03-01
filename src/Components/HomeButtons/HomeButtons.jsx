import React from 'react'
import { useDispatch } from "react-redux";
import { update_status } from "../../Redux/status/statusSilce";
function HomeButtons() {
    const dispatch = useDispatch();
    const currentStatus = (e) =>{
        let value = e.target.innerHTML
        if(value === "Admin"){
            dispatch(
                update_status({
                  status: value,
                })
              );
        }
        else if(value === "User"){
            dispatch(
                update_status({
                  status: value,
                })
              );
        }
    }
  return (
    <div className='mt-5'>
        <button className='me-2' onClick={currentStatus}>Admin</button>
        <button onClick={currentStatus}>User</button>
    </div>
  )
}

export default HomeButtons