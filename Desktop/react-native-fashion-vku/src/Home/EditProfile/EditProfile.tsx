import React from "react";
import { Dimensions } from "react-native";
import { DrawerActions } from "@react-navigation/native";

import { HomeNavigationProps } from "../../components/Navigation";
import { Box, Header, Text, useTheme } from "../../components";

import Tabs from "./Tabs";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "configuration", title: "Cấu hình" },
  { id: "info", title: "Cá nhân" },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.3} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Hồ sơ cá nhân"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={-50}
          left={width / 2 - 50}
          bottom={0}
          right={0}
          backgroundColor="primaryLight"
          height={100}
          width={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Anh Tuấn
          </Text>
          <Text variant="text" textAlign="center">
            thekaiser.tuan@gmail.com
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
