import React, { useRef } from "react";
import { TextInput as TextField } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";

import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";
import Checkbox from "../components/Forms/Checkbox";
import { Container, Button, Text, Box } from "../components";

import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      ),
  });

  const footer = (
    <Footer
      title="Bạn chưa có tài khoản?"
      action="Đăng kí ngay"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  const passwordRef = useRef<TextField>(null);

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="m">
        Đăng nhập
      </Text>
      <Text variant="text" textAlign="center" marginBottom="l">
        Vui lòng nhập tài khoản và mật khẩu tại đây
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
        </Box>
        <TextInput
          ref={passwordRef}
          icon="lock"
          placeholder="Nhập mật khẩu của bạn"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          secureTextEntry={true}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="done"
          returnKeyLabel="done"
          onSubmitEditing={() => handleSubmit()}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="m"
          alignItems="center"
        >
          <Checkbox
            label="Lưu đăng nhập"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            borderless={false}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Quên mật khẩu?
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Đăng nhập vào tài khoản"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
