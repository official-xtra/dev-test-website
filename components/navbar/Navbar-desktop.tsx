import * as React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  HStack,
  Button,
  Icon,
  useToken,
  Heading,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaSteam,
  FaLiraSign,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";
import siteConfig from "../../config/site";

const NAV_SOCIAL_LINKS: [string, string, IconType][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram],
  ["Facebook", siteConfig.socials.Facebook, FaFacebookSquare],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube],
  ["Steam", siteConfig.socials.Steam, FaSteam],
];

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgSvg = useColorModeValue(darkColor, lightColor);

  return (
    <>
      <Box
        as="svg"
        pos="absolute"
        viewBox="0 0 1440 300"
        zIndex={-1}
        transform="rotate(180deg)"
      >
        <path
          fill={bgSvg}
          fillOpacity="1"
          d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,106.7C560,128,640,160,720,192C800,224,880,256,960,256C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </Box>

      <Container
        as="header"
        maxW="container.lg"
        maxH={["100%", "100vh"]}
        h="100%"
        py={8}
      >
        <HStack as="nav" w="100%" mb={4} alignItems="flex-start">
          <HStack>
            <NextLink href="#" passHref>
              <Button as="a" variant="ghost">
                Home
              </Button>
            </NextLink>

            <NextLink href="#" passHref>
              <Button as="a" variant="ghost">
                Coming Soon
              </Button>
            </NextLink>
          </HStack>

          <Spacer />

          <HStack>
            {NAV_SOCIAL_LINKS.map(([name, href, AsIcon]) => (
              <NextLink key={name} href={href} passHref>
                <Button as="a" px={2} variant="ghost" target="_blank">
                  <Icon as={AsIcon} />
                </Button>
              </NextLink>
            ))}
          </HStack>

          <HStack>
            <Button ml={4} variant="outline" onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </HStack>
        </HStack>
      </Container>
    </>
  );
};
