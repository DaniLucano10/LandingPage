import { Box, Container, Flex, Grid, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { HiArrowDownTray } from "react-icons/hi2";

export const ProgramPage = () => {
    return (
        <>
            <Box bg="#f6f6f7">
                <Box p={14}>
                    <Heading fontSize={{ base: "xs", md: "3xl", lg: "5xl" }}  >WHY THIS PROGRAM?</Heading>
                </Box>
                <Container my={30} maxWidth="6xl"
                    maxW={['100%', '600px', '800px', '1200px']}
                    padding={[1, 4, 6, 8]}
                    margin="0 auto"
                >

                    <SimpleGrid gap={8} 
                        columns={{ base: 0, md: 1, lg: 2 }}
                        direction={{ base: "column", md: "row" }}
                        spacing={{ base: 5, md: 20 }}
                        align="center"
                        justify="center"
                        wrap="wrap"
                        
                    >
                        {/* Primera fila */}
                        <Flex direction={{ base: "column", md: "row" }} bg="white" >
                            <Box bg="#0048e1">
                                <Image src="../src/assets/img/rocket.svg"
                                    width="350px"
                                    height="240px"
                                />
                            </Box>
                            <Box my={5} p={5}>
                                <Text fontWeight="bold" fontSize={{ base: "xs", md: "md", lg: "lg" }} >APPLIED LEARNING EXPERIENCE</Text>
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
                                <Text fontWeight="bold" fontSize={{ base: "xs", md: "md", lg: "lg" }} >DRIVE INNOVATION AND TECHNOLOGY</Text>
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
                                <Text fontWeight="bold" fontSize={{ base: "xs", md: "md", lg: "lg" }} >HANDS-ON APPROACH</Text>
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
                                <Text fontWeight="bold" fontSize={{ base: "xs", md: "md", lg: "lg" }} >DEVELOP A CRITICAL MINDSET</Text>
                                <Text>
                                    This program will help you develop the business intelligence and
                                    analytical capacities you need to approach and solve complex
                                    problems.
                                </Text>
                            </Box>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>

            <Box   >
                <Flex direction={{ base: "column", md: "row" }} bg="#000066"  >
                    
                    <Heading color="white" size="xs"padding="8">
                        DOWNLOAD BROCHURE BACHELOR IN DATA AND BUSINESS ANALYTICS
                    </Heading>
                   
                    <Icon color="white" fontSize="20px" h={20} w={7} href="">
                        <HiArrowDownTray />
                    </Icon>
                    {/* Imagen */}
                    {/* <Image src="../src/assets/img/BDBA.webp"
                        width="150px"
                        height="200px"
                        mt="-120px"
                    /> */}
                </Flex>
            </Box>

        </>
    );
};
