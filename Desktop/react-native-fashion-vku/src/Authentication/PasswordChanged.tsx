import React from "react";

import { AuthNavigationProps } from "../components/Navigation";
import {
  Container,
  Box,
  Text,
  Button,
  RoundedIcon,
  RoundedIconButton,
} from "../components";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  const footer = (
    <Box justifyContent="center" alignItems="center">
      <RoundedIconButton
        backgroundColor="background"
        color="secondary"
        name="x"
        size={60}
        onPress={() => navigation.pop()}
      />
    </Box>
  );

  return (
    <Container pattern={3} footer={footer}>
      <Box alignSelf="center">
        <RoundedIcon
          backgroundColor="primaryLight"
          name="check"
          size={SIZE}
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginVertical="l">
        Mật khẩu của bạn được thay đổi thành công
      </Text>
      <Text variant="text" textAlign="center" marginBottom="l">
        Đóng cửa sổ này và đăng nhập lại
      </Text>

      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Đăng nhập lại"
          onPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
