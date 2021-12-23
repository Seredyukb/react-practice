import React, { useState } from "react";
import classes from "./Paginator.module.css";

let Paginator = ({ currentPage, onPageChanged, pageSize, totalItemsCount }) => {
  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  /////////////////
  return (
    <div className={classes.pages}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((m) => {
          return (
            <span
              id={classes.page}
              onClick={(e) => {
                onPageChanged(m);
              }}
              className={currentPage === m && classes.selectedPage}
            >
              {m}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
// // если 1ый элемент порции < 10, тогда кнопка LEFT отображается иначе DISABLED
// // если последний элемент порции < 10, тогда кнопка LEFT отображается иначе DISABLED
// // Как найти 1ый элемент порции:
// //массив порций [[1-10], [11-20], [21-30], [31-35]]
// // Как найти последний элемент порции

// export const Paginator = ({
//   totalUsersCount,
//   pageSize,
//   currentPage,
//   onPageChanged,
// }) => {
//   let pages = Math.ceil(totalUsersCount / pageSize);
//   let pagesArr = [];
//   for (let i = 1; i <= pages; i++) {
//     if (pagesArr.length < 15) {
//       pagesArr.push(i);
//     }
//   }
//   let {pagesPortion, pagesPortionSet}= useState(1)
//   let pagesPortionLeft;
//   let pagesPortionRight;

//   return (
//     <div>
//       {pagesArr.map((m) => {
//         return (
//           <span
//             className={currentPage === m && classes.selectedPage}
//             id={classes.page}
//             onClick={(e) => {
//               onPageChanged(m);
//             }}
//           >
//             {m}
//           </span>
//         );
//       })}
//     </div>
//   );
// };
