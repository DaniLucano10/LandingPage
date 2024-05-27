import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const RankingPage = ({idioma}) => {
  return (
    <>
      <Container maxW="5xl" my={50}>
        <Stack direction="row" spacing={10} wrap="wrap" maxW="100%" >
          <Box>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading size="2xl">1º</Heading>
              <Box whiteSpace="pre-line">
                <Heading size='md' overflowWrap="break-word">UNIVERSITY{"\n"} IN SPAIN</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                    { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                  
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>

          <Box whiteSpace="pre-line" marginLeft={5}>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading size="2xl">6to</Heading>
              <Box whiteSpace="pre-line">
                <Heading size='md'>UNIVERSITY{"\n"} IN EUROPE</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>
          <Box whiteSpace="pre-line" marginLeft={10}>
            <Stack direction="row" spacing={4} wrap="wrap">
              <Heading size="2xl">18</Heading>
              <Box whiteSpace="pre-line">
                <Heading size='md'>UNIVERSITY{"\n"} WORLDWIDE</Heading>
                <Text overflowWrap="break-word" wrap="wrap" maxWidth={200}>
                { idioma === "español"? "Times Higher Education  ENCUESTA Y RANKING DE EMPLEABILIDAD UNIVERSITARIA MUNDIAL 2023": "Times Higher Education GLOBAL UNIVERSITY EMPLOYABILITY SURVEY AND RANKING 2023"}
                </Text>
                <Text my={3}>2023</Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
