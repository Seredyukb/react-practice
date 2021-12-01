import React from "react"
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import { usersAPI } from "../../API/api"

let Users = (props)=>{
    let pages = Math.ceil(props.totalUsersCount/props.pageSize)
        let pagesArr = [];
    for (let i=1; i<=pages; i++){
       
        if(pagesArr.length< 15){ pagesArr.push(i);}

    }
    return <div>
        <div>
           
         {
         pagesArr.map(m=>{
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
                   
                    {u.followed
                    ?<button  disabled={props.followingInProgress.some(id=>id===u.id)} onClick={()=>{
                        props.toggleIsFollow(true, u.id);
                        
                      usersAPI.unfollowDelete(u.id).then(data=>{
                           if(data.resultCode === 0){
                            props.unfollow(u.id)
                           }
                           })
                           props.toggleIsFollow(false, u.id);
                        }}>Unfollow</button>

                    :<button disabled={(props.followingInProgress.some(id=>id===u.id))} onClick={()=>{
                        props.toggleIsFollow(true, u.id);
                        usersAPI.followPost(u.id).then(data=>{
                            if(data.resultCode === 0){
                             props.follow(u.id)
                            }
                            })
                            props.toggleIsFollow(false, u.id);
                            }}>Follow</button>}

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