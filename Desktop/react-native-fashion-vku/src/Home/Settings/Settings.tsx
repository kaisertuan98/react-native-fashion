import React from "react";

import { HomeNavigationProps } from "../../components/Navigation";
import { Box, Header, Content } from "../../components";

import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <>
      <Content>
        <Box backgroundColor="background">
          <Header
            title="Cài đặt thông báo"
            left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            right={{ icon: "share", onPress: () => true }}
          />
          <Box padding="m">
            <Notification
              title="Trang phục gợi ý"
              description="Nhận thông báo hàng ngày"
            />
            <Notification
              title="Giảm giá & khuyến mãi"
              description="Mua những thứ bạn yêu thích với giá ít hơn"
            />
            <Notification
              title="Thông báo còn hàng"
              description="Nếu sản phẩm bạn 💜 trở lại trong kho"
            />
            <Notification
              title="Nội dung yêu thích"
              description="Nghe trước, xem trước"
            />
          </Box>
        </Box>
      </Content>
    </>
  );
};

export default Settings;
