import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react"


export const UserInformation = () => {

    return (
        <>
            <Box w="100%" h="100vh" bg="#000066">
                <Container maxWidth="4xl" p={10}  >
                    <Stack direction="row" spacing={40}   >
                        <Box>
                        <Image
                            boxSize='30px'
                            objectFit='cover'
                            src='../src/assets/img/duracion.webp'
                        />
                        <Heading color="white" >DURATION</Heading>
                        </Box>
                        <Image
                            boxSize='30px'
                            objectFit='cover'
                            src='../src/assets/img/idioma.webp'
                            alt='Dan Abramov'
                        />
                        <Image
                            boxSize='30px'
                            objectFit='cover'
                            src='../src/assets/img/uvicacion.webp'
                            alt='Dan Abramov'
                        />
                        <Image
                            boxSize='30px'
                            objectFit='cover'
                            src='../src/assets/img/consumo.webp'
                            alt='Dan Abramov'
                        />
                        <Image
                            boxSize='30px'
                            objectFit='cover'
                            src='../src/assets/img/formato.webp'
                            alt='Dan Abramov'

                        />
                    </Stack>
                </Container>
            </Box>
        </>
    )
}