import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>
          Talk-With
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="gray" defaultIndex={0}>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Login</TabPanel>
            <TabPanel>Sign Up</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default homepage;
