import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { getlogin } from "../../redux/AdminReducer/Action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../Components/AdminPageComponents/Styles/AdminStyles.module.css";

export function AdminLogin() {
  const { token, isauth } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setlog] = React.useState({ email: "", password: "" });

  const handlechange = (e) => {
    log[e.target.name] = e.target.value;
    setlog(log);
  };
  const handlesubmit = () => {
    console.log(log);
    dispatch(getlogin(log)).then((res) => {
      if (res.payload) {
        navigate("/adminhome");
      } else {
        console.log(isauth, res);
      }
    });
  };

  return (
    <Box minH={"96vh"} className={styles.maindiv1}>
      <div
        className={styles.maindiv2}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Image className={styles.imagelogo} src={"./Logo.jpg"} alt={"memo"} />
        <Stack border={"0px solid red"} spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} justify={"left"} align={"left"}>
            Sign in as Admin
          </Heading>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormControl isRequired id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
            <FormControl isRequired id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              {/* <Button type='submit' colorScheme={'orange'} variant={'solid'} onClick={handlesubmit}>
                Sign in
              </Button> */}
            </Stack>
            <Button
              type="submit"
              colorScheme={"orange"}
              variant={"solid"}
              onClick={handlesubmit}
            >
              Sign in
            </Button>
          </form>
        </Stack>
      </div>
      <div className={styles.maindiv3}>
        <Image
          height="100%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </div>
    </Box>
  );
}
