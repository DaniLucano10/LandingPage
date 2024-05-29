import { Box, Container, Flex, Grid, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { HiArrowDownTray } from "react-icons/hi2";

export const ProgramPage = () => {
    return (
        <>
            <Box bg="#f6f6f7">
                <Box p={14}>
                    <Heading  >WHY THIS PROGRAM?</Heading>
                </Box>
                <Container my={30} maxWidth="6xl">

                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)",]} gap={8} >
                        {/* Primera fila */}
                        <Flex direction={{ base: "column", md: "row" }} bg="white" >
                            <Box bg="#0048e1">
                                <Image src="../src/assets/img/rocket.svg"
                                    width="350px"
                                    height="240px"
                                />
                            </Box>
                            <Box my={5} p={5}>
                                <Text fontWeight="bold">APPLIED LEARNING EXPERIENCE</Text>
                                <Text>
                                    You’ll learn by applying machine learning technologies to real-
                                    world problems through datathons, big data challenges and
                                    applied class projects.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={{ base: "column", md: "row" }} bg="white">
                            <Box bg="#000066">
                                <Image src="../src/assets/img/future.svg"
                                    width="350px"
                                    height="240px"
                                />
                            </Box>
                            <Box my={5} p={5}>
                                <Text fontWeight="bold">DRIVE INNOVATION AND TECHNOLOGY</Text>
                                <Text>
                                    Here you’ll develop all the skills you need to transform
                                    industries and businesses through the power of data analytics
                                    and statistics.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={{ base: "column", md: "row" }} bg="white">
                            <Box bg="#185abc">
                                <Image
                                    src="../src/assets/img/people.svg"
                                    width="350px"
                                    height="240px"
                                />
                            </Box>
                            <Box my={5} p={5}>
                                <Text fontWeight="bold">HANDS-ON APPROACH</Text>
                                <Text>
                                    IE University´s hands-on approach helps you develop the computer
                                    science skills to play an influential role in designing and
                                    implementing strategies.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={{ base: "column", md: "row" }} bg="white">
                            <Box bg="#93b5ec">
                                <Image src="../src/assets/img/top.svg" alt=""
                                    width="350px"
                                    height="240px"
                                />
                            </Box>
                            <Box my={5} p={5}>
                                <Text fontWeight="bold">DEVELOP A CRITICAL MINDSET</Text>
                                <Text>
                                    This program will help you develop the business intelligence and
                                    analytical capacities you need to approach and solve complex
                                    problems.
                                </Text>
                            </Box>
                        </Flex>
                    </Grid>
                </Container>
            </Box>

            <Box mt={200}>
                <Flex direction={{ base: "column", md: "row" }} bg="#000066" >
                    {/* Título */}
                    <Heading color="white" size="xs" ml="400" padding="8">
                        DOWNLOAD BROCHURE BACHELOR IN DATA AND BUSINESS ANALYTICS
                    </Heading>
                    {/* Icono */}
                    <Icon color="white" fontSize="20px" h={20} w={7} href="">
                        <HiArrowDownTray />
                    </Icon>
                    {/* Imagen */}
                    <Image src="../src/assets/img/BDBA.webp"
                        width="150px"
                        height="200px"
                        mt="-120px"
                    />
                </Flex>
            </Box>

        </>
    );
};
