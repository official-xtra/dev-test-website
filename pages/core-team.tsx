import Head from "next/head";
import type { NextPage } from "next";
import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Center,
  Avatar,
} from "@chakra-ui/react";
import teamInfo from "../components/data/teamInfo";

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>Core Team &ndash; XTRA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="section" maxW="container.lg" h="100%" py={4}>
        <VStack
          w="100%"
          spacing="1.5rem"
          alignItems="flex-start"
          mt={["6rem", "17vh"]}
          lineHeight={1.8}
        >
          <Heading
            as="h1"
            fontSize={["1.5rem", "3rem"]}
            lineHeight="1.5"
            textTransform="capitalize"
          >
            {teamInfo.title}
          </Heading>

          <Text fontSize="lg">{teamInfo.desc}</Text>
        </VStack>

        <HStack spacing={4}>
          <Box
            justifyContent="center"
            maxW="30%"
            bg="gray.900"
            my={8}
            p={4}
            lineHeight={1.8}
            boxShadow="lg"
          >
            <Center>
              <Avatar
                size="2xl"
                name="Dan Abrahmov"
                src="https://raw.githubusercontent.com/official-xtra/dev-test-website/main/public/xtra.png"
              />
            </Center>
            <Heading as="h2" fontSize="2xl" fontWeight="semibold" py={4}>
              name
            </Heading>
            <Text fontSize="sm" opacity={0.75}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Team;
