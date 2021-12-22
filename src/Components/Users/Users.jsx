import React from "react";
import { Paginator } from "../Common/Paginator/Paginator";
import { User } from "./User";

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          thunkFollowCreator={props.thunkFollowCreator}
          thunkUnfollowCreator={props.thunkUnfollowCreator}
          key={u.id}
        />
      ))}
    </div>
  );
};

export default Users;
