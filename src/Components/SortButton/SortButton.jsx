import React from "react";
import styles from "./SortButton.module.css";

export default function SortButton({ sortType, onChange }) {
  return (
    <div className={styles.sortWrapper}>
      <label htmlFor="sort">정렬 : </label>
      <select id="sort" value={sortType} onChange={onChange}>
        <option value="default">기본</option>
        <option value="price-asc">가격 낮은 순</option>
        <option value="price-desc">가격 높은 순</option>
        <option value="title-asc">이름순</option>
      </select>
    </div>
  );
}
