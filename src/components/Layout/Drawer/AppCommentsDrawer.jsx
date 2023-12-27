import React from "react";
import { Drawer, List, Avatar } from "antd";

const commentsData = [
  {
    id: 1,
    author: "John Doe",
    comment: "This is a comment from John Doe.",
  },
  {
    id: 2,
    author: "Jane Smith",
    comment: "Another comment from Jane Smith.",
  },
];

function AppCommentsDrawer({ visible, onClose }) {
  return (
    <Drawer title="Comments" visible={visible} onClose={onClose} maskClosable>
      <List
        dataSource={commentsData}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={require("../../../assest/images/burger5.jpg")} />}
              title={<span>{item.author}</span>}
              description={item.comment}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
}

export default AppCommentsDrawer;
