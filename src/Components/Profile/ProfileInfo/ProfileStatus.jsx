import React from "react";

class ProfileStatus extends React.Component{
state={
    editMode : false,
    status: this.props.status
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
        this.props.thunkUpdateStatus(this.state.status);
    }

    onStatusChange = (e)=>{
        this.setState({
            status: e.target.value,
        })
    }





   render(){
   
 return (
     <div>
         {this.state.editMode&&
         <div>
            <input onChange={this.onStatusChange} autoFocus onBlur={()=>{this.deActivateStatus()}} value={this.state.status} />
        </div>}
        {!this.state.editMode&&<div>
            <span onDoubleClick={()=>{this.activateStatus()}}>{this.props.status || '-------'}</span>
        </div>}
        
        
     </div>
 )
}}
export default ProfileStatus;