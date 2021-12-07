import React from "react";

class ProfileStatus extends React.Component{
state={
    editMode : false
}

    activateStatus =()=>{
        this.setState({
            editMode:true,
        })
    }
    deActivateStatus =()=>{
        this.setState({
            editMode:false,
        })
    }
   render(){
   
 return (
     <div>
         {this.state.editMode&&
         <div>
            <input autoFocus onBlur={()=>{this.deActivateStatus()}} value={this.props.status} />
        </div>}
        {!this.state.editMode&&<div>
            <span onDoubleClick={()=>{this.activateStatus()}}>{this.props.status}</span>
        </div>}
        
        
     </div>
 )
}}
export default ProfileStatus;