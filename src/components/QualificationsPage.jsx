import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ModalForm } from "./ModalForm";

export const QualificationsPage = () => {
  return (
    <>
      <Box bg="#f6f6f7" >
        <Flex

          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          align="flex-start"
          gap={10}
          mx="auto"
          p={20}
          maxW="10xl"
        >
          {/* Primera Columna */}
          <Box flex="1 1 40%" mr={4} >
            <Heading as="h4" fontSize={{ base: "md", md: "3xl", lg: "5xl" }} mb={4}>
              DUAL DEGREES WITH THE BACHELOR IN DATA AND BUSINESS ANALYTICS
            </Heading>
            <Text>
              The Dual Degrees at IE University offer students the opportunity to
              graduate with two bachelor’s degrees by completing an additional
              year of academic studies. These prestigious programs are a great
              option for students who want to focus their careers in two distinct
              yet connected fields of study. By combining two diverse subject
              areas, our Dual Degree students develop a multidisciplinary profile,
              enabling them to play important roles in solving complex global
              issues where boundaries between disciplines continue to disappear
            </Text>
          </Box>

          <Flex direction="column" flex="1 1 60%" my={2} >
            {/* Primera fila */}
            <Flex direction={{ base: "column", md: "row" }}>
              <Image
                src="../src/assets/img/header-bba-bdba.webp"
                alt=""
                width="220px"
                height="100px"

              />
              <Box w="50%" >
                <Accordion allowMultiple w="600px" bg="white">
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading fontSize={{ base: "xs", md: "md", lg: "xl" }}>
                            DUAL DEGREE IN BUSINESS ADMINISTRATION & DATA AND BUSINESS
                            ANALYTICS
                          </Heading>
                        </Box>
                        <AccordionIcon m={10} marginRight="8px" marginTop="8px" boxSize={10} color="blue" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        This program prepares you to understand and analyze data,
                        extracting relevant insights that will positively impact
                        companies and businesses. Our world-leading faculty will
                        prepare you for a successful career in large corporations.
                        You will learn to formulate data with statistical tools,
                        alongside other skills that can be transferred to the
                        professional world. Guided by experts in the Business and
                        Data fields and using the latest tech, you will acquire a
                        comprehensive knowledge of management and strong analytical
                        skills. Aimed at and driven by innovative individuals, this
                        dual degree will prepare you to become a leader in the
                        corporate world and build company value.
                      </Text>
                      <Heading as="h1" size="sm" my={4}>
                        Duration: 5 years | Language: English | Location: Segovia and Madrid, or Madrid
                      </Heading>
                      <Box  fontSize="1px">
                        <ModalForm  />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Flex>
            {/* Segunda fila */}
            <Flex direction={{ base: "column", md: "row" }}>
              <Image
                src="../src/assets/img/header-ple-dba.webp"
                width="220px"
                height="100px"
              />
              <Box w="50%">
                <Accordion allowMultiple w="600px" bg="white">
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading fontSize={{ base: "xs", md: "md", lg: "xl" }}>
                            DUAL DEGREE IN PHILOSOPHY, POLITICS, LAW AND ECONOMICS &
                            DATA AND BUSINESS ANALYTICS
                          </Heading>
                        </Box>
                        <AccordionIcon m={10} marginRight="8px" marginTop="8px" boxSize={10} color="blue" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        This program prepares professionals to understand complex
                        social environments and make data-driven decisions to
                        positively impact societies, organizations, and companies.
                        In this degree, you will gain strong analytical skills by
                        experimenting with the latest data technologies and tools
                        applied to the political, legal, and economic fields.
                      </Text>
                      <Heading size="sm" my={4}>
                        Duration: 5 years | Language: English | Location: Segovia and Madrid, or Madrid
                      </Heading>
                      <Box  >
                        <ModalForm  />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
