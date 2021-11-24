const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
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
        

    ],
}



const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            let stateCopy = {...state,
                users: state.users.map(u => {
                    if(u.id === action.usersId){ 
                        return {...u, followed : true};
                       }
                       return u;
                })
            };

            return stateCopy;
        }
        case UNFOLLOW:{
            let stateCopy = {
                ...state, 
                users: state.users.map(u=>{
                    if(u.id === action.usersId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:{
            return state;
        }
    }
}


export const followAC = (usersId) => ({ type: FOLLOW, usersId: usersId })
export const unfollowAC = (usersId) => ({ type: UNFOLLOW, usersId: usersId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });


export default UsersReducer;