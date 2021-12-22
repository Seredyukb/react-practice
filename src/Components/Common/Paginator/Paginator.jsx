import React from "react";
import classes from "./Paginator.module.css";

export const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pages = Math.ceil(totalUsersCount / pageSize);
  let pagesArr = [];
  for (let i = 1; i <= pages; i++) {
    if (pagesArr.length < 15) {
      pagesArr.push(i);
    }
  }
  return (
    <div>
      {pagesArr.map((m) => {
        return (
          <span
            className={currentPage === m && classes.selectedPage}
            id={classes.page}
            onClick={(e) => {
              onPageChanged(m);
            }}
          >
            {m}
          </span>
        );
      })}
    </div>
  );
};
