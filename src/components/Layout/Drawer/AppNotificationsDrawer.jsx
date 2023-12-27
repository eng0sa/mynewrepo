import React from "react";
import { Drawer, List, Avatar } from "antd";

const notificationsData = [
  {
    id: 1,
    text: "New notification 1",
  },
  {
    id: 2,
    text: "New notification 2",
  },
  // Add more notifications as needed
];

function AppNotificationsDrawer({ visible, onClose }) {
  return (
    <Drawer title="Notifications" visible={visible} onClose={onClose} maskClosable>
      <List
        dataSource={notificationsData}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={require("../../../assest/images/burger6.jpg")} />}
              title={<span>{item.text}</span>}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
}

export default AppNotificationsDrawer;
