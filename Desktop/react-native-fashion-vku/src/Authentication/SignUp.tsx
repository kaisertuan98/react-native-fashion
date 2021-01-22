import React, { useRef } from "react";
import { TextInput as TextField } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";
import { Container, Button, Text, Box } from "../components";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
});

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => console.log(values),
    }
  );

  const footer = (
    <Footer
      title="Bạn đã có tài khoản?"
      action="Đăng nhập ngay"
      onPress={() => navigation.navigate("Login")}
    />
  );

  const passwordRef = useRef<TextField | null>(null);
  const passwordConfirmationRef = useRef<TextField | null>(null);

  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="m">
        Đăng ký
      </Text>
      <Text variant="text" textAlign="center" marginBottom="l">
        Điền thông tin email và mật khẩu của bạn
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
        <Box marginBottom="m">
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmationRef}
            icon="lock"
            placeholder="Xác nhận mật khẩu"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            secureTextEntry={true}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="done"
            returnKeyLabel="done"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Tạo tài khoản"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
