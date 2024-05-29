import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const LocationPage = () => {
  const [mostrarTexto1, setMostrarTexto1] = useState(false);
  const [mostrarTexto2, setMostrarTexto2] = useState(false);

  return (
    <>
      <Box bg={{ base: "#f6f6f7", md: "#f6f6f7", lg: "#f6f6f7" }} p={2}>
        <Container as="section" maxWidth="8xl">
          <Heading size="xl">TWO IDEAL LOCATIONS</Heading>
          <Text my={6}>
            Enjoy the right university experience for you at our truly
            international university campus in Segovia, and our urban center
            right in the heart of Madrid’s business district.
          </Text>
        </Container>
      </Box>
      <Flex>
        <Box
          bg={{ base: "#000066", md: "#000066", lg: "#000066" }}
          w="100%"
          onMouseEnter={() => setMostrarTexto1(true)}
          onMouseLeave={() => setMostrarTexto1(false)}
        >
          {mostrarTexto1 ? (
            <Box p={10}>
              <Heading as="center" my={6} color="white" size="md">
                THE TOWER OF THE FUTURE
              </Heading>
              <Text color="white">
                Located in the heart of Madrid´s financial district, the IE
                Tower is a tech-based urban campus that represents the cutting
                edge of learning innovation. With its close proximity to leading
                international companies and a mix of state-of-the-art
                facilities, the tower is a vibrant training ground for
                innovation and entrepreneurship, where life-changing connections
                are made on a daily basis. Students gain access to everything
                from auditoriums and sports facilities to beautiful green
                areas—with enough space left for over 64 classrooms.
              </Text>
            </Box>
          ) : (
            <Image
              src="../src/assets/img/Segovia.png"
              alt="Madrid"
              w="100%"
              height="400px"
            />
          )}
        </Box>
        <Box
          w="100%"
          onMouseEnter={() => setMostrarTexto2(true)}
          onMouseLeave={() => setMostrarTexto2(false)}
        >
          {mostrarTexto2 ? (
            <Box p={10}>
              <Heading as="center" my={6} color="black" size="md">
                A TRUE CAMPUS EXPERIENCE
              </Heading>
              <Text color="black">
                The IE University campus in the city of Segovia offers an
                authentic campus experience. It is housed in the Convent of
                Santa Cruz la Real, a historic building declared a national
                heritage site in 1931. Segovia is only 25 minutes from Madrid by
                high-speed train, and welcomes students from over 80 countries
                in a global university setting, with an atmosphere that is both
                academic and lively.
              </Text>
            </Box>
          ) : (
            <Image
              src="../src/assets/img/Madrid.webp"
              alt="Madrid"
              w="100%"
              height="400px"
            />
          )}
        </Box>
      </Flex>
    </>
  );
};
