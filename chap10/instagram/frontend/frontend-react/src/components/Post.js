import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined, HeartFilled } from "@ant-design/icons";
import "./Post.scss";
function Post({ post }) {
  const { caption, location, photo } = post;
  return (
    <div className="post">
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartFilled />]}
      >
        <Card.Meta
          avatar={<Avatar size="large" icon={<UserOutlined />} />}
          title={location}
          description={caption}
        ></Card.Meta>
      </Card>
      {/* <img src={photo} alt={caption} style={{ width: "100px" }} />
      {caption},{location} */}
    </div>
  );
}

export default Post;
