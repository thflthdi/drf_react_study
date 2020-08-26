import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./SuggestionList.scss";
import Suggestion from "./Suggestion";
import Axios from "axios";
import { useAppContext } from "store";

export default function SuggestionList({ style }) {
  const {
    store: { jwtToken },
  } = useAppContext();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUserList() {
      const apiUrl = "http://localhost:8000/accounts/suggestions/";
      const headers = { Authorization: `JWT ${jwtToken}` };
      try {
        const { data } = await Axios.get(apiUrl, { headers });
        setUserList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserList();
  }, []);
  return (
    <div style={style}>
      <Card size="small" title="Suggestion for you">
        {userList.map((suggestionUser) => (
          <Suggestion
            key={suggestionUser.username}
            suggestionUser={suggestionUser}
          />
        ))}
      </Card>
    </div>
  );
}
