import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, setUserTotalCountAC, unfollowAC } from '../../redux/users-reducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FindUsers);