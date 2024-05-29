import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ModalForm } from "./ModalForm";

export const UserInformation = () => {
  return (
    <>
      <Box bg="#000066" id="UserInformation" p={{ base: 4, md: 8, lg:12}}>
        <Container maxWidth="6xl" p={10}>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 5 }}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 5, md: 40 }}
            align="center"
            justify="center"
            wrap="wrap"
          >
            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/duracion.webp"
                h="auto"
              />
              <Heading
                color="white"
                size="md"
                marginTop={5}
                marginLeft={-8}
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                DURATION
              </Heading>
              <Text color="white" my={4} fontSize="20px" marginLeft={-4}>
                4 Years
              </Text>
            </Box>
            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/idioma.webp"
                h="auto"
              />
              <Heading
                color="white"
                size="md"
                marginTop={5}
                marginLeft={-8}
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                LANGUAGE
              </Heading>
              <Text color="white" my={4} fontSize="20px" marginLeft={-4}>
                English
              </Text>
            </Box>

            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/uvicacion.webp"
                h="auto"
              />
              <Heading
                color="white"
                size="md"
                marginTop={5}
                marginLeft={-8}
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                LOCATION
              </Heading>
              <Text
                color="white"
                my={4}
                fontSize="15px"
                marginLeft={-20}
                whiteSpace="pre-line"
              >
                Segovia and Madrid,{"\n"} or Madrid
              </Text>
            </Box>

            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/consumo.webp"
                h="auto"
              />
              <Heading
                color="white"
                size="md"
                marginTop={5}
                marginLeft={-4}
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                INKATE
              </Heading>
              <Text color="white" my={4} fontSize="20px" marginLeft={-4}>
                September
              </Text>
            </Box>

            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/formato.webp"
                h="auto"
              />
              <Heading
                color="white"
                size="md"
                marginTop={5}
                marginLeft={-4}
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                FORMAT
              </Heading>
              <Text
                color="white"
                my={4}
                fontSize="20px"
                marginLeft={-4}
                whiteSpace="nowrap"
              >
                Full-time
              </Text>
            </Box>
          </SimpleGrid>
          <Box p={4}>
            <Divider my={-5} marginTop={50} marginLeft={-10} width="1000px" />
          </Box>
        </Container>
        <Box color="white" p={{ base: 4, md: 10, lg:120}}>
          <Heading
            my={4}
            fontSize={["xl", "3xl", "4xl", "5xl"]}
            whiteSpace="pre-line"
          >
            TRAINING THE NEXT{"\n"} GENERATION OF{"\n"} CHANGE-MAKERS
          </Heading>
          <Text my={10} fontSize="xl" whiteSpace="pre-line">
            This bachelor is aimed at analytical driven individuals who possess
            {"\n"}
            strong critical thinking abilities and wish to harness the power of
            data{"\n"} to transform the world. It prepares the next generation
            of global{"\n"} pioneers who can collect, manage and analyze data to
            solve the most{"\n"} pressing challenges of businesses and
            institutions.
          </Text>
          <Box as="section"  >
            <ModalForm />
          </Box>
        </Box>
        <Box marginLeft="900px" right="40px" bottom="10px" marginTop="-200px" p={{ base: 1, md: 1}}>
          <Image
            src="../src/assets/img/ie.webp"
            boxSize="100px"
            height="250"
            width="350"
            h="auto"
            p={{ base: 20, md: 20, lg:30}}
          />
        </Box>
        
      </Box>
    </>
  );
};
