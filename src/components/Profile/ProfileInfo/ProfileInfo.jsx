import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
// import avaPhoto from "../../../img/ava_1.jpg";
import userPhoto from "../../../img/ava_5.jpg";

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
  return (
    <div>
      <div className={s.fon}>
        <img src="https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/039/995/small/book-pages-as-a-heart_373x_2x.jpg?1513133821" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.description_img}><img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} /></div>
        <div className={s.description}>
          <div className={s.description_name}>{props.profile.fullName}</div>
          <div className={s.description_about}>Обо мне: {props.profile.aboutMe}</div>
          <div className={s.description_about}>Описание для работодателя: {props.profile.lookingForAJobDescription}</div>
          <div className={s.description_about}>VK: {props.profile.contacts.vk}</div>
          <div className={s.description_about}>Twitter: {props.profile.contacts.twitter}</div>
          <div className={s.description_about}>Instagram: {props.profile.contacts.instagram}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
