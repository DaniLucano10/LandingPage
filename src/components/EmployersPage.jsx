import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react"


export const EmployersPage = () => {

    return (

        <>
            <Box bg={{ base: "#f6f6f7", md: "#f6f6f7", lg: "#f6f6f7" }} p={{ base: 4, md: 8, lg: 12 }}>
                <Box p={20} >
                    <Heading as="section" fontSize={{ base: "xs", md: "2xl", lg: "4xl" }}>SOME TOP EMPLOYERS OF IE UNIVERSITY ALUMNI</Heading>
                </Box>
                <SimpleGrid templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]} gap={8} columns={1} spacing={1} marginLeft={120}>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                        mb={4}
                    >
                         <Image
                        src="../src/assets/img/Google-360x173.webp"
                        alt="auto"
                        w={["50%", "50%", "70%"]}
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                        <Image
                        src="../src/assets/img/ibm-logo-360x144.webp"
                        alt="auto"
                        w={["50%", "50%", "70%"]}
                       
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                         <Image
                        src="../src/assets/img/Amazon-360x171.webp"
                        alt="auto"
                        w={["50%", "50%", "70%"]}
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(10%)"}
                    >
                        <Image
                        src="../src/assets/img/facebook-logo.webp"
                        alt="auto"
                        w={["50%", "50%", "50%"]}
                    />
                    </Box>
                    <Box
                        onMouseEnter={(e) => e.target.style.filter = "brightness(100%)"}
                        onMouseLeave={(e) => e.target.style.filter = "brightness(40%)"}
                    >
                        <Image
                        src="../src/assets/img/Salesforce Logo.webp"
                        alt="auto"
                        w={["50%", "50%", "60%"]}
                    />
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}