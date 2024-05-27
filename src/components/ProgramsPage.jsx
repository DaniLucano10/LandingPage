import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const ProgramsPage = () => {
  return (
    <>
      <Box bg="#f6f6f7">
        <Container as="center" maxW="100%" p={20}>
          <Heading
            fontSize={["2xl", "3xl", "4xl", "6xl"]}
            whiteSpace="pre-wrap"
            lineHeight="shorter"
          >
            CHOOSE YOUR OWN PATH WITH OUR TRACKS
          </Heading>
          <Box maxW="7xl" marginLeft={-10}>
            <Text
              overflowWrap="break-word"
              wrap="wrap"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="left"
              whiteSpace="pre-wrap"
            >
              At IE University, your success is our focus, which means we are
              continuously updating our programs to ensure you graduate with the
              hands-on, practical experience necessary to succeed in today’s
              shifting world. Our Bachelor in Data and Business Analytics is no
              exception; we offer two cutting-edge tracks designed to put you at
              the forefront of artificial intelligence in two fast-evolving
              industries: healthcare and engineering.
            </Text>
          </Box>
        </Container>

        <Box maxW="900px" mx="auto" p={4} >
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            wrap="wrap"
            spacing="50px"
          >
            <Box w={{ base: "100%", md: "45%", lg: "45%" }} mb={4}>
              <Box bg="#0032a0" w="300px" h="150px">
                <Image
                  src="../src/assets/img/service-design.webp"
                  alt="Imagen 1"
                  objectFit="cover"
                  position="relative"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  mb={4}
                />
              </Box>
              <Accordion allowToggle bg="white" w="300px">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" >
                        <Heading size="sm">ARTIFICIAL INTELLIGENCE AND HEALTHCARE</Heading>
                      </Box>
                      <AccordionIcon m={10} marginRight="8px" marginTop="8px" boxSize={10} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Artificial intelligence is revolutionizing the healthcare
                      industry, and it’s important for you to stay ahead of the
                      changes. With this track, you will gain firsthand insights
                      into the industry, covering topics ranging from patient
                      management and the most advanced techniques in machine
                      learning to mastering the legal and ethical implications
                      of handling sensitive data.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Box w={{ base: "100%", md: "45%", lg: "45%" }} mb={4} >  
              <Box bg="#d4e5f7" w="300px" h="150px">
                <Image
                  src="../src/assets/img/react.webp"
                  alt="Imagen 2"
                  objectFit="cover"
                  position="relative"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  mb={4}
                />
              </Box>
              <Accordion allowToggle bg="white" w="300px">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Heading size="sm">ARTIFICIAL INTELLIGENCE AND DATA ENGINEERING</Heading>
                      </Box>
                      <AccordionIcon m={10} marginRight="8px" marginTop="8px" boxSize={10}/>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Data engineers use artificial intelligence to build
                      simplified, streamlined processes. Today’s data-driven
                      world calls for leaders who can set up advanced,
                      near-real-time data pipelines and utilize the power of
                      Artificial Intelligence to process data efficiently and
                      effectively. Aimed at professionals who want to take their
                      engineering skills to the next level, this track gives you
                      the know-how to navigate MLOps and data streaming tools
                      confidently, as well as the skills to create enriching
                      customer experiences.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
