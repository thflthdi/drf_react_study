import React from "react";
import { Card } from "antd";
import "./StoryList.scss";

export default function StoryList({ style }) {
  return (
    <div style={style}>
      <Card size="small" title="Storis">
        Storis from people you follow will show
      </Card>
    </div>
  );
}
