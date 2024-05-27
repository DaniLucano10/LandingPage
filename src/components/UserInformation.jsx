import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ModalForm } from "./ModalForm";


export const UserInformation = () => {

  return (
    <>
      <Box bg="#000066">
        <Container maxWidth="6xl" p={10}>
          <Stack direction="row" spacing={40} wrap="wrap">
            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="../src/assets/img/duracion.webp"
              />
              <Heading color="white" size="md" marginTop={5} marginLeft={-8}>
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
                alt="Dan Abramov"
              />
              <Heading color="white" size="md" marginTop={5} marginLeft={-8}>
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
                alt="Dan Abramov"
              />
              <Heading color="white" size="md" marginTop={5} marginLeft={-8}>
                LOCATION
              </Heading>
              <Text
                color="white"
                my={4}
                fontSize="20px"
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
                alt="Dan Abramov"
              />
              <Heading color="white" size="md" marginTop={5} marginLeft={-4}>
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
                alt="Dan Abramov"
              />
              <Heading color="white" size="md" marginTop={5} marginLeft={-4}>
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
          </Stack>
          <Box p={4}>
            <Divider my={-5} marginTop={50} marginLeft={-10} width="1000px" />
          </Box>
        </Container>
        <Box color="white" marginLeft={20}>
          <Heading my={4} 
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            whiteSpace="pre-line">
            TRAINING THE NEXT{"\n"} GENERATION OF{"\n"} CHANGE-MAKERS
          </Heading>
          <Text my={10} fontSize="25px" whiteSpace="pre-line">
            This bachelor is aimed at analytical driven individuals who possess
            {"\n"}
            strong critical thinking abilities and wish to harness the power of
            data{"\n"} to transform the world. It prepares the next generation
            of global{"\n"} pioneers who can collect, manage and analyze data to
            solve the most{"\n"} pressing challenges of businesses and
            institutions.
          </Text>
          <Container as="section" maxW={-4} my={-4}>
            <ModalForm />
          </Container>
        </Box>
        <Box
            marginLeft="1300px"
            right="40px"
            bottom="50px"
            marginTop="-200px"
        >
        <Image 
            src="../src/assets/img/ie.webp" 
            boxSize="100px"
            height="250"
            width="350"
        />
        </Box>
      </Box>
    </>
  );
};
