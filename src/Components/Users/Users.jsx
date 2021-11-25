import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://geo-media.beatport.com/image_size/590x404/5dbf8dc0-4b02-4a6a-bf04-e34e171b57ee.jpg',
                fullName: 'Dmitry',
                status: 'Who am i??',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
            },
            {
                id: 2,
                photoUrl: 'https://habrastorage.org/getpro/moikrug/uploads/user/100/038/971/3/avatar/196c76ae89cae96fcc2d26dfb5cabeee.jpg',
                fullName: 'Gleb',
                status: 'Who am i??',
                location: {city: 'Moscow', country: 'Russia'},
                followed: true,
            },
            {
                id: 3,
                photoUrl: 'https://pbs.twimg.com/profile_images/1236759527179124738/pEx2QkKw_400x400.jpg',
                fullName: 'Roma',
                status: 'Who am i??',
                location: {city: 'Rome', country: 'Italy'},
                followed: false,
            },
            {
                id: 4,
                photoUrl: 'https://gate.undelete.news/uploads/svetabily/0owwajefTZhZbcNFQTRY_.jpg',
                fullName: 'Sveta',
                status: 'Who am i??',
                location: {city: 'Kiev', country: 'The Ukraine'},
                followed: false,
            },
            {
                id: 5,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rosanne_Mulholland.jpg/274px-Rosanne_Mulholland.jpg',
                fullName: 'Rozana',
                status: 'Who am i??',
                location: {city: 'Grodno', country: 'Belarus'},
                followed: false,
            },
        ]);
    }
    
    
    return <div>
        {
        props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto} alt='userPhoto'/>
                    </div>
                    <div>
                        {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
        )
        }
    </div>
}



export default Users;