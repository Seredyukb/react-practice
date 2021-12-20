import React from "react";
import { useState } from "react";

const  ProfileStatusWithHooks = (props)=>{

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);
const activateMode = () =>{
    setEditMode(true);
}
const deActivateMode = () =>{
    setEditMode(false);
}
const onStatusChange = (e)=>{
    setStatus(e.currentTarget.value)
    props.thunkUpdateStatus(status)
}


 return (
     <div>
         {!editMode&&
         <div>
            <span onDoubleClick={activateMode}>{props.status || '-------'}</span>
            
        </div>}
        {editMode&&<div>
            <input onChange={onStatusChange} onBlur={deActivateMode} autoFocus value={status} />
        </div>}
        
        
     </div>
 )
}

export default ProfileStatusWithHooks;