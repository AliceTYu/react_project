import React from "react";
import s from "./FindUsers.module.css";
import userPhoto from "../../img/ava_5.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

let FindUsers = (props) => {
  let padesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= padesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className={s.userPart}>
      <h1>Users</h1>
      <div>
        {slicedPages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p && s.selectedPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={s.part} key={u.id}>
          <div className={s.leftPart}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.photo}
                  alt="error"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "27e4675c-f804-4a6f-9041-626042cb1409"
                          } 
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "27e4675c-f804-4a6f-9041-626042cb1409"
                          } 
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
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
  );
};

export default FindUsers;
