const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

const AVA_2 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632";
const AVA_3 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/040/781/small/cathedral_373x_2x.jpg?1513194155";
const AVA_4 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/243/small/catching-time-hourglass_373x_2x.jpg?1518888667";
const AVA_5 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/049/237/small/siamese-cat-laying-in-white-bedding_373x_2x.progressive.jpg?1548264708";

let initialState = {
    users: [ 
        {id: 1, photoUrl: AVA_2, followed: true, fullName: "Vlad", status: "proger", location: {country: "Russia", city: "Moscow"} },
        {id: 2, photoUrl: AVA_3, followed: false, fullName: "Oksana", status: "music", location: {country: "Russia", city: "Moscow"} },
        // {id: 3, photoUrl: AVA_4, followed: true, fullName: "Nastya", status: "engineer", location: {country: "Russia", city: "Moscow"} },
        // {id: 4, photoUrl: AVA_5, followed: false, fullName: "Ira", status: "engineer", location: {country: "Russia", city: "Moscow"} },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UN_FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users]}

        default:
        return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users}); //добавление с сервака пользователей

export default usersReducer;
