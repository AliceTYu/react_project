import axios from "axios";
import React from "react";
import s from "./FindUsers.module.css";
import userPhoto from "../../img/ava_5.jpg";

class FindUsers extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };
  render () {
    return (
      <div className={s.userPart}>
      <h1>Users</h1>
      <button onClick={this.getUsers}>get users</button>
      {this.props.users.map((u) => (
        <div className={s.part} key={u.id}>
          <div className={s.leftPart}>
            <div>
              <img
                src={u.photos.small != null ? u.photossmall : userPhoto}
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
              <div className={s.partCountry}>{/* {u.location.country} */}</div>
              <div className={s.partCity}>{/* {u.location.city} */}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
  }
}

export default FindUsers;
