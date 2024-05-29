import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Text,
} from "@chakra-ui/react";

export const BuildPage = () => {

    function scrollToNextSection() {
        const nextSection = document.getElementById("FormPage");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

    return (
        <>
            <Box bg="#f6f6f7">
                <Box p={14}>
                    <Heading as="center" size="xl" fontSize={{ base: "xl", md: "2xl", lg: "6xl" }}>BUILD YOUR PATH TO SUCCESS</Heading>
                </Box>
                <Container my={30} maxWidth="6xl">
                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={8}>
                        {/* Primera fila */}
                        <Flex direction={{ base: "column", md: "row" }}>
                            <Box>
                                <Heading size="2xl" marginLeft={150}>1</Heading>
                                <Box my={5} p={5} bg="white">
                                    <Text fontWeight="bold">HARNESS THE POWER OF DATA</Text>
                                    <Text marginTop={4}>
                                        Professionals who can harness data generated globally and
                                        extract value from it are in great demand. Become
                                        indispensable for companies and institutions with this
                                        cutting-edge program.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex direction={{ base: "column", md: "row" }}>
                            <Box>
                                <Heading size="2xl" marginLeft={150}>2</Heading>
                                <Box my={5} p={5} bg="white">
                                    <Text fontWeight="bold">BUILD A UNIQUE PROFILE</Text>
                                    <Text marginTop={4}>
                                        You’ll learn a wide range of quantitative methods,
                                        statistical models and computing techniques that will allow
                                        you to drive innovation in the fast-moving digital
                                        transformation era.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex direction={{ base: "column", md: "row" }}>
                            <Box>
                                <Heading size="2xl" marginLeft={150}>3</Heading>
                                <Box my={5} p={5} bg="white">
                                    <Text fontWeight="bold">LEAD TRANSFORMATION</Text>
                                    <Text marginTop={4}>
                                        You’ll develop the necessary skills to design technologies
                                        and strategies and become an influential part of the
                                        strategic decision-making processes of companies and
                                        organizations.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                    </Grid>
                </Container>
                <Box
                    onClick={scrollToNextSection}
                    as="button"
                    width="250px"
                    height="50px"
                    px="px"
                    fontSize="15px"
                    fontWeight="semibold"
                    bg="#000066"
                    borderColor="#ccd0d5"
                    color="white"
                    whiteSpace="nowrap"
                    marginLeft={600}
                >
                    DOWNLOAD BROCHURE
                    
                </Box>
            </Box>
        </>
    );
};
