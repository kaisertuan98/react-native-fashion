import React from "react";
import { Image, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text, useTheme } from "../components/Theme";
import { Button } from "../components";
import { AuthNavigationProps } from "../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("./assets/i5.png"),
  width: 2791,
  height: 3744,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="yellow"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              (width - theme.borderRadii.xl) * (picture.height / picture.width),
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="yellow"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="background"
          justifyContent="space-evenly"
          borderTopLeftRadius="xl"
          alignItems="center"
          flex={1}
          padding="m"
        >
          <Text variant="title2">SSSTUTTER</Text>
          <Text variant="text" textAlign="center">
            Đăng nhập vào tài khoản hoặc đăng ký cho một trải nghiệm tuyệt vời
            với SSStutter
          </Text>
          <Button
            variant="primary"
            label="Đăng nhập"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Trải nghiệm ngay"
            onPress={() => navigation.navigate("Home")}
          />
          <BorderlessButton
            borderless={false}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text variant="button" color="secondary">
              Đăng ký
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
