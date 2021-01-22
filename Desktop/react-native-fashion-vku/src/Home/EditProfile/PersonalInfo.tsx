import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";
import TextInput from "../../components/Forms/TextInput";

import CheckboxGroup from "./CheckboxGroup";

const genders = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
  { value: "#", label: "Khác" },
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="text" marginBottom="m">
          Thông tin tài khoản
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Tên"
            autoCompleteType="name"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Mật khẩu"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Địa chỉ"
            autoCompleteType="street-address"
            autoCapitalize="none"
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
