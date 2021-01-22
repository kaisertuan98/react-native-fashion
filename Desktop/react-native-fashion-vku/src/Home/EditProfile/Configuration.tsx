import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";

import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

const outfitType = [
  { value: "men", label: "Nam" },
  { value: "women", label: "Nữ" },
  { value: "both", label: "Khác" },
];

const sizes = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const colours = [
  { value: "#0C0D34" },
  { value: "#FF0058" },
  { value: "#50B9DE" },
  { value: "#00D99A" },
  { value: "#FE5E33" },
];

const preferredBrands = [
  { value: "shirt", label: "Sơ mi & áo kiểu" },
  { value: "tee", label: "Áo thun" },
  { value: "pants", label: "Quần" },
  { value: "jacket", label: "Jacket" },
  { value: "blazer", label: "Blazer" },
  { value: "shoes", label: "Giày" },
  { value: "bag", label: "Túi & ví" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="text">Trang phục phù hợp với bản thân!</Text>
        <CheckboxGroup options={outfitType} radio />
        <Text variant="text">Size phù hợp với bạn!</Text>
        <RoundedCheckboxGroup options={sizes} />
        <Text variant="text">Màu ưa thích của bạn!</Text>
        <RoundedCheckboxGroup options={colours} valueIsColour />
        <Text variant="text">Trang phục mà bạn yêu thích!</Text>
        <CheckboxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
