let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Hello, how r u?',
                    count: 15,
                },
                {
                    id: 2,
                    message: 'Do you love me?',
                    count: 20,
                },

            ],
            newPostText: 'IT-Kamasutra',

        }
        ,
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Dimych',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg',
                    message: 'Hi'
                },
                {
                    id: 2,
                    name: 'Nadia',
                    ava: 'https://klike.net/uploads/posts/2019-06/1560150840_2.jpg',
                    message: 'How r u?'
                },
                {
                    id: 3,
                    name: 'Gle',
                    ava: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png',
                    message: 'what is the different between me and u?'
                },
                {
                    id: 4,
                    name: 'Lia',
                    ava: 'https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg',
                    message: 'What does it mean Bro???'
                },

            ],
            newMessageText: 'Введите сообщение',

        },
        friendsPage: {
            friendsData: [
                {
                    id: 1,
                    name: 'Dimych',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 2,
                    name: 'Nadia',
                    ava: 'https://klike.net/uploads/posts/2019-06/1560150840_2.jpg'
                },
                {
                    id: 3,
                    name: 'Gle',
                    ava: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png'
                },
                {
                    id: 4,
                    name: 'Lia',
                    ava: 'https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg'
                },
                {
                    id: 5,
                    name: 'Polina',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 6,
                    name: 'Gregory',
                    ava: 'https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg'
                },
                {
                    id: 7,
                    name: 'Yakov',
                    ava: 'https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg'
                },
                {
                    id: 8,
                    name: 'Max',
                    ava: 'https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg'
                },
                {
                    id: 9,
                    name: 'Sasha',
                    ava: 'https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg'
                },
                {
                    id: 10,
                    name: 'Andrey',
                    ava: 'https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg'
                },
                {
                    id: 11,
                    name: 'Dimych',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 12,
                    name: 'Nadia',
                    ava: 'https://klike.net/uploads/posts/2019-06/1560150840_2.jpg'
                },
                {
                    id: 13,
                    name: 'Gle',
                    ava: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png'
                },
                {
                    id: 14,
                    name: 'Lia',
                    ava: 'https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg'
                },
                {
                    id: 15,
                    name: 'Polina',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 16,
                    name: 'Gregory',
                    ava: 'https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg'
                },
                {
                    id: 17,
                    name: 'Yakov',
                    ava: 'https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg'
                },
                {
                    id: 18,
                    name: 'Max',
                    ava: 'https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg'
                },
                {
                    id: 19,
                    name: 'Sasha',
                    ava: 'https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg'
                },
                {
                    id: 20,
                    name: 'Andrey',
                    ava: 'https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg'
                },
                {
                    id: 21,
                    name: 'Dimych',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 22,
                    name: 'Nadia',
                    ava: 'https://klike.net/uploads/posts/2019-06/1560150840_2.jpg'
                },
                {
                    id: 23,
                    name: 'Gle',
                    ava: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png'
                },
                {
                    id: 24,
                    name: 'Lia',
                    ava: 'https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg'
                },
                {
                    id: 25,
                    name: 'Polina',
                    ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg'
                },
                {
                    id: 26,
                    name: 'Gregory',
                    ava: 'https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg'
                },
                {
                    id: 27,
                    name: 'Yakov',
                    ava: 'https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg'
                },
                {
                    id: 28,
                    name: 'Max',
                    ava: 'https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg'
                },
                {
                    id: 29,
                    name: 'Sasha',
                    ava: 'https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg'
                },
                {
                    id: 30,
                    name: 'Andrey',
                    ava: 'https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg'
                },


            ]

        }



    },
    _callSubscriber() {
        console.log('State is changed');
    },
    // addPosta() {
    //     let newPosta = {
    //         id: this._state.profilePage.postData.length + 1,
    //         message: this._state.profilePage.newPostText,
    //         count: 0,
    //     }
    //     this._state.profilePage.postData.push(newPosta);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);

    // },
    // updateNewPosta(newText) {

    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state);

    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        if (action.type === 'addPosta') {
            let newPosta = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                count: 0,
            }
            this._state.profilePage.postData.push(newPosta);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'updateNewPosta') {
            let newText = action.newText;
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        }
    }
}

export const actionCreatorUpdateNewPosta = (text) => ({ type: 'updateNewPosta', newText: text })

export const actionCreatorAddPosta = () => ({ type: 'addPosta' });


window.store = store;

export default store;
