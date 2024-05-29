import { Box, Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ModalForm } from "./ModalForm";

export const Homepage = () => {
  const [posicion] = useState({ x: 20, y: 150 });

  return (
    <>
      <Box
        padding={{ base: 4, md: 8, lg: 12 }}
        w={["100%", "100%", "100%"]}
        backgroundImage={`url(${"../src/assets/img/img-principal.jpeg"})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
      >
        <Box
          w={["100%", "100%", "100%"]}
          position="absolute"
          left={posicion.x}
          top={posicion.y}
          cursor="pointer"
        >
          <Image
            src="../src/assets/img/Corporate-3-1.webp"
            boxSize="10px"
            height="100"
            width="100"
            
          />
        </Box>

        <Text
          as="center"
          color="White"
          fontSize={{ base: "md", md: "xl", lg: "3xl" }}
          transform="translate(%, 60%)"
          marginTop={250}
        >
          BACHELOR IN DATA AND BUSINESS ANALYTICS
        </Text>
        <Heading
          as="center"
          color="White"
          size="5xl"
          fontSize={{ base: "xs", md: "2xl", lg: "5xl" }}
          whiteSpace="pre-wrap"
          marginTop={5}
        >
          HARNESS THE POWER OF DATA TO {"\n"} TRANSFORM THE WORLD
        </Heading>
        <Container as="center" my={10}>
          <ModalForm />
        </Container>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Box
            as="center"
            color="white"
            fontSize="60px"
            my={-5}
            p={{ base: 4, md: 8, lg: 12 }}
          >
            <Link href="#UserInformation" smoothScroll>
              <HiChevronDoubleDown icon="icono" />
            </Link>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
