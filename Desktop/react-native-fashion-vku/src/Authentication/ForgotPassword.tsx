import React from "react";
import { Linking } from "react-native";
import * as Yup from "yup";
import { useFormik } from "formik";

import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";
import { Box, Container, Text, Button } from "../components";

import Footer from "./components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

  const footer = (
    <Footer
      title="Bạn cần trợ giúp thêm?"
      action="Truy cập ngay"
      onPress={() => Linking.openURL("https://ssstutter.com")}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="m">
        Quên mật khẩu
      </Text>
      <Text variant="text" textAlign="center" marginBottom="l">
        Nhập địa chỉ email tài khoản của bạn
      </Text>
      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Nhập email của bạn"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            returnKeyType="done"
            returnKeyLabel="done"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Đặt lại mật khẩu"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
