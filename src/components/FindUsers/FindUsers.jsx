import axios from "axios";
import React from "react";
import s from "./FindUsers.module.css";
import userPhoto from "../../img/ava_5.jpg";

class FindUsers extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let padesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= padesCount; i++){
      pages.push(i); 
    }
    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);

    return (
      <div className={s.userPart}>
        <h1>Users</h1>
        <div>
          {slicedPages.map(p => {
            return <span onClick={(e) => {this.onPageChanged(p);}} className={this.props.currentPage === p && s.selectedPage}>{p}</span>
          })}
        </div>
        {this.props.users.map((u) => (
          <div className={s.part} key={u.id}>
            <div className={s.leftPart}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.photo}
                  alt="error"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </div>
            <div className={s.rightPart}>
              <div className={s.partIngo}>
                <div className={s.partName}>{u.name}</div>
                <div className={s.partStatus}>{u.status}</div>
              </div>
              <div className={s.partLocation}>
                <div className={s.partCountry}>
                  {/* {u.location.country} */}
                </div>
                <div className={s.partCity}>{/* {u.location.city} */}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FindUsers;
