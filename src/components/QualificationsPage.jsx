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

export const QualificationsPage = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        align="flex-start"
        maxW="1400px"
        mx="auto"
        p={4}
        my={10}
      >
        {/* Primera Columna */}
        <Box flex="1 1 40%" mr={4}>
          <Heading as="h2" size="lg" mb={4}>
            Título
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

        {/* Segunda Columna */}
        <Box flex="1 1 60%" flexDirection="column" alignItems="center">
          <Box display="flex" flexDirection="row" alignItems="center" mb={4}>
            <Image
              src="ruta_de_la_imagen_1.jpg"
              alt="Imagen 1"
              maxW="50%"
              h="auto"
            />
            <Accordion allowToggle w="50%">
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "gray.200" }}>
                    Mostrar contenido
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {/* Contenido del acordeón 1 */}
                  <p>Este es el contenido del acordeón 1.</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Image
              src="ruta_de_la_imagen_2.jpg"
              alt="Imagen 2"
              maxW="50%"
              h="auto"
            />
            <Accordion w="50%">
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "gray.200" }}>
                    Mostrar contenido
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {/* Contenido del acordeón 2 */}
                  <p>Este es el contenido del acordeón 2.</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
