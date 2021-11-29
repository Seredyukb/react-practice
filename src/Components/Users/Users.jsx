import React from "react"
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"

let Users = (props)=>{
    let pages = Math.ceil(props.totalUsersCount/props.pageSize)
        let pagesArr = [];
    for (let i=1; i<=pages; i++){
       
        if(pagesArr.length< 15){ pagesArr.push(i);}

    }
    return <div>
        <div>
           
         {pagesArr.map(m=>{
            return <span className={props.currentPage === m && classes.selectedPage} id={classes.page} onClick={(e)=>{props.onPageChanged(m)}}>{m}</span>
          }
          )}
        </div>
        
    {
    props.users.map(u=> <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/'+u.id}>
                    <img src={u.photos.small!=null?u.photos.small:userPhoto} className={classes.userPhoto} alt='userPhoto'/>
                    </NavLink>                
                </div>
                <div>
                    {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    )
    }
</div>
    }

export default Users;