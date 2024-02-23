import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaExchangeAlt, FaRegChartBar, FaRegPaperPlane } from "react-icons/fa";

const Index = () => {
  const Feature = ({ title, icon, children }) => {
    return (
      <Stack align={"center"} textAlign={"center"} spacing={{ base: 4, md: 7 }} py={{ base: 5, md: 8 }} direction={{ base: "column", md: "row" }}>
        <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("brand.500", "brand.400")} mb={{ base: 2, md: 0 }}>
          {icon}
        </Flex>
        <VStack>
          <Heading size={"md"}>{title}</Heading>
          <Text color={useColorModeValue("gray.600", "gray.200")}>{children}</Text>
        </VStack>
      </Stack>
    );
  };

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} lineHeight={"110%"}>
            Trade, Exchange <br />
            <Text as={"span"} color={"brand.400"}>
              and Grow with NexusByte
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Join the future of finance. Experience a next-generation cryptocurrency exchange with NexusByte.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button rounded={"full"} px={6} colorScheme={"brand"} bg={"brand.400"} _hover={{ bg: "brand.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={"full"}>
            <Image alt={"NexusByte Exchange Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1707075891514-9d271023f384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGV4Y2hhbmdlfGVufDB8fHx8MTcwODcxNTY2MXww&ixlib=rb-4.0.3&q=80&w=1080" />
          </Flex>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box bg={useColorModeValue("gray.100", "gray.900")} p={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Why Choose NexusByte?</Heading>
          <Text color={"gray.500"} fontSize={"xl"}>
            NexusByte is designed for the future of finance, providing you with secure and efficient trading.
          </Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
            <Feature icon={<FaBitcoin size={"3em"} />} title={"Trade Popular Cryptocurrencies"}>
              Trade Bitcoin, Ethereum, Litecoin, and more with real-time settlement.
            </Feature>
            <Feature icon={<FaEthereum size={"3em"} />} title={"Ethereum Smart Contracts"}>
              Utilize advanced smart contracts for decentralized finance (DeFi) services.
            </Feature>
            <Feature icon={<FaExchangeAlt size={"3em"} />} title={"Seamless Exchange"}>
              Enjoy a seamless and secure exchange experience with our intuitive platform.
            </Feature>
            <Feature icon={<FaRegChartBar size={"3em"} />} title={"Market Insights"}>
              Get real-time market insights and analytics to make informed decisions.
            </Feature>
            <Feature icon={<FaRegPaperPlane size={"3em"} />} title={"Fast Transactions"}>
              Experience lightning-fast transactions with our optimized network.
            </Feature>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg={useColorModeValue("gray.700", "gray.800")} color={"gray.200"}>
        <Container as={Stack} maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
          <Text>© 2023 NexusByte. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
