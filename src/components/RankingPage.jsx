import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";


export const RankingPage = (idioma) => {


  return (
    <>
   
      <Container 
        maxW={['100%', '600px', '800px', '1200px']}
        padding={[2, 4, 6, 8]}
        margin="0 auto"
      >
        <SimpleGrid  maxW="100%" 
          columns={{ base: 1, lg: 3 }}
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 5, md: 20 }}
          align="center"
          justify="center"
          wrap="wrap"
        >
          <Box>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading fontSize={{ base: "lg", md: "m3xl", lg: "5xl" }}>1º</Heading>
              <Box whiteSpace="pre-line">
                <Heading fontSize={{ base: "xs", md: "md", lg: "xl" }} overflowWrap="break-word">UNIVERSITY{"\n"} IN SPAIN</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                    { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                  
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>

          <Box whiteSpace="pre-line" marginLeft={5}>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading fontSize={{ base: "lg", md: "m3xl", lg: "5xl" }}>6to</Heading>
              <Box whiteSpace="pre-line">
                <Heading fontSize={{ base: "xs", md: "md", lg: "xl" }} >UNIVERSITY{"\n"} IN EUROPE</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>
          <Box whiteSpace="pre-line" marginLeft={10}>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading fontSize={{ base: "lg", md: "m3xl", lg: "5xl" }} >18</Heading>
              <Box whiteSpace="pre-line">
                <Heading fontSize={{ base: "xs", md: "md", lg: "xl" }} >UNIVERSITY{"\n"} WORLDWIDE</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};
