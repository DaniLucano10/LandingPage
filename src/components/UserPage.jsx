import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const UserPage = () => {
  return (
    <>
      <Box bg={{ base: "#f6f6f7", md: "#f6f6f7", lg: "#f6f6f7" }} h="90vh">
        <Box p={14}></Box>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Image
            src="../src/assets/img/quota.svg"
            objectFit="cover"
            width="50px"
            height="40px"
            maxW="100%"
            h="auto"
            marginLeft={250}
          />
          <Image
            src="../src/assets/img/quota.svg"
            objectFit="cover"
            width="50px"
            height="40px"
            maxW="100%"
            h="auto"
            marginLeft={600}
          />
        </Flex>
        <Container my={30} maxWidth="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 5, md: 40 }}
            align="center"
            justify="center"
            wrap="wrap"
            gap={8}
          >
            {/* Primera fila */}

            <Flex direction={{ base: "column", md: "row" }} bg="white">
              <Box my={14} p={2} direction={{ base: "column", md: "row" }}>
                <Image
                  src="../src/assets/img/ryan-bdba.webp"
                  objectFit="cover"
                  width="200px"
                  height="100px"
                  borderRadius="full"
                  maxW="100%"
                  h="auto"
                />
              </Box>
              <Box my={5} p={5}>
                <Text my={5}>
                  "IE University methodology is hands-on, being able to take
                  courses in interesting fields of study and helps to understand
                  the material better".
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs", md: "md", lg: "xl" }}
                >
                  RYAN DAHER
                </Text>
                <Text>Canada</Text>
              </Box>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} bg="white">
              <Box my={14} p={2} direction={{ base: "column", md: "row" }}>
                <Image
                  src="../src/assets/img/camila-bdba.webp"
                  objectFit="cover"
                  width="220px"
                  height="100px"
                  borderRadius="full"
                  maxW="100%"
                  h="auto"
                />
              </Box>
              <Box my={5} p={5}>
                <Text my={5}>
                  "What I love most about my degree is how innovative it is. As
                  the world experiences these new trends, here at IE University
                  we are thoroughly investigating them".
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs", md: "md", lg: "xl" }}
                >
                  CAMILA BARBAGALLO
                </Text>
                <Text>Argentina</Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
