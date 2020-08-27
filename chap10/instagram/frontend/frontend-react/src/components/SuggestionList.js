import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./SuggestionList.scss";
import Suggestion from "./Suggestion";
import { useAppContext } from "store";
import { useAxios, axiosInstance } from "api";

export default function SuggestionList({ style }) {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [userList, setUserList] = useState([]);

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: origUserList, loading, error }, refetch] = useAxios({
    url: "/accounts/suggestions/",
    headers,
  });

  useEffect(() => {
    if (!origUserList) setUserList([]);
    else
      setUserList(origUserList.map((user) => ({ ...user, is_follow: false })));
  }, [origUserList]);

  const onFollowUser = (username) => {
    const data = { username };
    const config = { headers };
    axiosInstance
      .post("/accounts/follow/", data, config)
      .then((response) => {
        setUserList((prevUserList) =>
          prevUserList.map(
            (user) =>
              user.username !== username ? user : { ...user, is_follow: true }
            //if(user.username===username){
            // return {...user,is_follow:true}
            //}
            //else return user;
          )
        );
      })
      .catch((error) => {});
  };

  return (
    <div style={style}>
      <Card size="small" title="Suggestion for you">
        {loading && <div>loading...</div>}
        {error && <div>로딩 중에 에러가 발생하였습니다.</div>}
        {userList.map((suggestionUser) => (
          <Suggestion
            key={suggestionUser.username}
            suggestionUser={suggestionUser}
            onFollowUser={onFollowUser}
          />
        ))}
      </Card>
    </div>
  );
}
