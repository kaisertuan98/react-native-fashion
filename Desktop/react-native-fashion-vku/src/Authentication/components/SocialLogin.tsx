import React, { ReactNode } from "react";
import Svg, {
  Circle,
  LinearGradient,
  Path,
  RadialGradient,
  Stop,
} from "react-native-svg";

import { Box, useTheme } from "../../components";

const Facebook = () => (
  <Svg viewBox="0 0 48 48" width={20} height={20}>
    <LinearGradient
      id="prefix__a"
      x1={9.993}
      x2={40.615}
      y1={9.993}
      y2={40.615}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#2aa4f4" />
      <Stop offset={1} stopColor="#007ad9" />
    </LinearGradient>
    <Path
      fill="url(#prefix__a)"
      d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
    />
    <Path
      fill="#fff"
      d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
    />
  </Svg>
);

const Google = () => (
  <Svg viewBox="0 0 48 48" width={20} height={20}>
    <Path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </Svg>
);

const Instagram = () => (
  <Svg viewBox="0 0 48 48" width={20} height={20}>
    <RadialGradient
      id="prefix__a"
      cx={19.38}
      cy={42.035}
      r={44.899}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fd5" />
      <Stop offset={0.328} stopColor="#ff543f" />
      <Stop offset={0.348} stopColor="#fc5245" />
      <Stop offset={0.504} stopColor="#e64771" />
      <Stop offset={0.643} stopColor="#d53e91" />
      <Stop offset={0.761} stopColor="#cc39a4" />
      <Stop offset={0.841} stopColor="#c837ab" />
    </RadialGradient>
    <Path
      fill="url(#prefix__a)"
      d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <RadialGradient
      id="prefix__b"
      cx={11.786}
      cy={5.54}
      r={29.813}
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#4168c9" />
      <Stop offset={0.999} stopColor="#4168c9" stopOpacity={0} />
    </RadialGradient>
    <Path
      fill="url(#prefix__b)"
      d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <Path
      fill="#fff"
      d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
    />
    <Circle cx={31.5} cy={16.5} r={1.5} fill="#fff" />
    <Path
      fill="#fff"
      d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box
      marginHorizontal="s"
      backgroundColor="background"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Instagram />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
