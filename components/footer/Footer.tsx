import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Link,
  Text,
  VStack,
  useToken,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import * as React from "react";
import siteConfig from "../../config/site";

export const Footer: React.FC = () => {
  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgColor = useColorModeValue(darkColor, lightColor);
  const textColor = useColorModeValue("gray.800", "yellow.300");

  return (
    <Box as="footer" bgColor={bgColor}>
      <Container maxW="container.lg" h={["100%", "45vh"]} px={6} py={12}>
        <HStack h="100%" align="flex-start" justify="flex-start">
          <VStack
            align={["center", "flex-start"]}
            textAlign={["center", "left"]}
            fontSize="sm"
            spacing={[4, 6]}
          >
            <Text>
              This site was built using{" "}
              <Link
                textColor={textColor}
                fontWeight="semibold"
                href="https://nextjs.org"
                isExternal
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                textColor={textColor}
                fontWeight="semibold"
                href="https://chakra-ui.com"
                isExternal
              >
                Chakra UI
              </Link>
              , and written in{" "}
              <Link
                textColor={textColor}
                fontWeight="semibold"
                href="https://www.typescriptlang.org/"
                isExternal
              >
                TypeScript
              </Link>
              .
            </Text>
            <Text>
              Hosted on{" "}
              <Link
                textColor={textColor}
                fontWeight="semibold"
                href="https://vercel.com/"
                isExternal
              >
                Vercel
              </Link>
              .
            </Text>
            <Text>
              Code Licensed under{" "}
              <Box as="span" fontWeight="semibold">
                MIT License
              </Box>
              .
            </Text>
            <Text>
              © 2021-present{" "}
              <Link
                textColor={textColor}
                fontWeight="semibold"
                href="https://ofc-xtra.site/"
                isExternal
              >
                Official X-TRA
              </Link>
              .{" "}
              <Box as="span" opacity="0.7">
                version-1.0
              </Box>
            </Text>
          </VStack>

          <Spacer display={["none", "block"]} />

          <VStack textAlign="left" display={["none", "block"]}>
            <Stack>
              <Text
                fontSize={["xs", "md"]}
                fontWeight="medium"
                letterSpacing="widest"
                textTransform="uppercase"
                textColor={textColor}
              >
                Socials
              </Text>
              {Object.entries(siteConfig.socials).map(([social, href]) => (
                <Link
                  key={social}
                  href={href}
                  fontSize={["xs", "sm"]}
                  isExternal
                >
                  {social}
                </Link>
              ))}
            </Stack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
