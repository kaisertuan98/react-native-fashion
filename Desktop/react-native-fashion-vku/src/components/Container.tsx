import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

export const assets = [
  require("./assets/patterns/i1.png"),
  require("./assets/patterns/2.png"),
  require("./assets/patterns/3.png"),
  require("./assets/patterns/4.png"),
] as const;

const { width, height: vHeight } = Dimensions.get("window");
const aspectRatio = 2000 / 3000;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2 | 3;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={vHeight + Constants.statusBarHeight}
        backgroundColor="secondary"
      >
        <Box backgroundColor="background">
          <Box overflow="hidden" height={height * 0.61}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            backgroundColor="background"
            flex={1}
            justifyContent="center"
            padding="xl"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="l">
          {footer}
          <Box height={Math.max(insets.top, 85)} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
