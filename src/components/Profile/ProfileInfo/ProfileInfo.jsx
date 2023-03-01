import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.fon}>
        <img src="https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/039/995/small/book-pages-as-a-heart_373x_2x.jpg?1513133821" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.description_img}><img src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg" /></div>
        <div className={s.description}>
          <div className={s.description_name}>Алиса</div>
          <div className={s.description_age}>Возраст: 23 года</div>
          <div className={s.description_birth}>Дата рождения: 16.02.1999</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
