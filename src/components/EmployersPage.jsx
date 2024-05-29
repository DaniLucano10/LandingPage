import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react"


export const EmployersPage = () => {

    return (

        <>
            <Box bg={{ base: "#f6f6f7", md: "#f6f6f7", lg: "#f6f6f7" }} p={20}>
                <Box p={20} >
                    <Heading as="section" size="xl">SOME TOP EMPLOYERS OF IE UNIVERSITY ALUMNI</Heading>
                </Box>
                <SimpleGrid templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]} gap={8} columns={1} spacing={1} marginLeft={120}>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                        mb={4}
                    >
                         <Image
                        src="../src/assets/img/Google-360x173.webp"
                        alt="Google"
                        width="180px"
                        height="80px"
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                        <Image
                        src="../src/assets/img/ibm-logo-360x144.webp"
                        alt="IBM"
                        width="150px"
                        height="60px"
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                         <Image
                        src="../src/assets/img/Amazon-360x171.webp"
                        alt="Amazon"
                        width="180px"
                        height="80px"
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                        <Image
                        src="../src/assets/img/facebook-logo.webp"
                        alt="Facebook"
                        width="120px"
                        height="120px"
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(40%)"}
                    >
                        <Image
                        src="../src/assets/img/Salesforce Logo.webp"
                        alt="Salesforce"
                        width="150px"
                        height="100px"
                    />
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}