import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Select,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { countries } from "countries-list";
import { Flex } from "antd";

export const FormPage = () => {


  const countryOptions = Object.values(countries).map((country) => ({
    value: country.name,
    label: country.name,
  }));

  
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    country: "",
    gender: "",
    occupation: "",
    check: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      lastName: "",
      email: "",
      country: "",
      gender: "",
      occupation: "",
      check: "",
    });
    setFormErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Please complete this required field.";
    }
    if (!formData.lastName) {
      errors.lastName = "Please complete this required field.";
    }
    if (!formData.email) {
      errors.email = "Please complete this required field.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.country) {
      errors.country = "Please complete this required field.";
    }
    if (!formData.gender) {
      errors.gender = "Please complete this required field.";
    }
    if (!formData.occupation) {
      errors.occupation = "Please complete this required field.";
    }
    if (!formData.check) {
      errors.check = "Please complete this required field.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Lógica para manejar el submit
      console.log("Form Data:", formData);
      handleClose();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
   
      <Box bg={{ base: "#000066", md: "#000066", lg: "#000066" }} p={{ base: 4, md: 8, lg: 12 }}id="FormPage">
        <Box p={14}></Box>
        <Box
          bg={{ base: "white", md: "white", lg: "white" }}
          maxW="1000px"
          mx="auto"
          p={15}
        >
          <Box mt={10} >
            <Box>
              <Heading  my={5}  fontSize={{ base: "md", md: "md", lg: "xl" }}>
                WANT TO KNOW MORE?
              </Heading>
              <form onSubmit={handleSubmit}>
                <FormControl size="lg" isInvalid={formErrors.name}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name*"
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  />
                  {formErrors.name && (
                    <FormErrorMessage>{formErrors.name}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl mt={3} isInvalid={formErrors.lastName}>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name*"
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  />
                  {formErrors.name && (
                    <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl mt={3} isInvalid={formErrors.email}>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    color="black"
                    id="email"
                    placeholder="Email*"
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  />
                  {formErrors.name && (
                    <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl w="970px" mt={3} isInvalid={formErrors.country}>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    color="gray.800"
                    placeholder="Current Country/Territory of Recidence* "
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  >
                    {countryOptions.map((country, index) => (
                      <option key={index} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </Select>
                  {formErrors.name && (
                    <FormErrorMessage>{formErrors.country}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl my={3} isInvalid={formErrors.gender}>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    id="example"
                    placeholder="Gender Identity*"
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  >
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Other</option>
                    <option value="option4">Rather not say</option>
                  </Select>
                  {formErrors.gender && (
                    <FormErrorMessage>{formErrors.gender}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl my={3} isInvalid={formErrors.occupation}>
                  <Select
                    name="occupation"
                    value={formData.onChange}
                    onChange={handleChange}
                    id="example"
                    placeholder="You are a*"
                    borderRadius="none"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid black"
                  >
                    <option value="option1">Student</option>
                    <option value="option2">Parent</option>
                    <option value="option3">Counselor or Professor</option>
                  </Select>
                  {formErrors.occupation && (
                    <FormErrorMessage>{formErrors.occupation}</FormErrorMessage>
                  )}
                </FormControl>

                <Text
                  fontSize="sm"
                  my={3}
                  isInvalid={formErrors.check}
                  name="check"
                  value={formData.check}
                  onchange={handleChange}
                >
                  <Checkbox defaultChecked>Checkbox</Checkbox>Please check this
                  box if you consent IE and IE Foundation to process your data
                  (even when this is undertaken outside the EEA) and send you
                  personalized commercial information and/or information about
                  our activities, based on profiles created using the
                  information obtained even by third parties, in accordance with
                  the stipulations of the{" "}
                  <Link
                    color="blue"
                    target="_blank"
                    href="https://www.ie.edu/privacy-policy/?_gl=1*138hmuz*_gcl_au*NjA1NDYzNTQwLjE3MTY2MDQ4NTY.*_ga*MjE5Njg4NzkyLjE3MTY2MDQ4NTY.*_ga_Y7HB3S34Y5*MTcxNjczODk3OC4zLjEuMTcxNjc0MTM5Ny4xNS4wLjA.*_fplc*ZkZTSmw2ZDBVNXAyUmFkTm5EaklxMzA5a25vQnliMWRNR2ZoTEZyRXRBZk0wVGNKckF1Zkx3T2NYTlF0enhNOUxKYUdnUHMxSlExcFlMc3hqdm15bSUyQm12SHV4V2VyMkU3ZTZWa3o4dGklMkJkZ2xzb0hwM1BCZDEzVW1LYVRmdyUzRCUzRA.."
                  >
                    Privacy Policy
                  </Link>
                  .
                </Text>
                {formErrors.check && (
                  <FormErrorMessage>{formErrors.check}</FormErrorMessage>
                )}

                <Text fontSize="sm" my={3}>
                  <Checkbox defaultChecked>Checkbox</Checkbox>Please check this
                  box if you consent IE to contact you through text messages and
                  messages posted on social media, even recording our
                  conversation, to continue our commercial relation, your
                  admission process and, where applicable, enrolment process, in
                  accordance with the{" "}
                  <Link
                    color="blue"
                    target="_blank"
                    href="https://www.ie.edu/privacy-policy/?_gl=1*138hmuz*_gcl_au*NjA1NDYzNTQwLjE3MTY2MDQ4NTY.*_ga*MjE5Njg4NzkyLjE3MTY2MDQ4NTY.*_ga_Y7HB3S34Y5*MTcxNjczODk3OC4zLjEuMTcxNjc0MTM5Ny4xNS4wLjA.*_fplc*ZkZTSmw2ZDBVNXAyUmFkTm5EaklxMzA5a25vQnliMWRNR2ZoTEZyRXRBZk0wVGNKckF1Zkx3T2NYTlF0enhNOUxKYUdnUHMxSlExcFlMc3hqdm15bSUyQm12SHV4V2VyMkU3ZTZWa3o4dGklMkJkZ2xzb0hwM1BCZDEzVW1LYVRmdyUzRCUzRA.."
                  >
                    Privacy Policy
                  </Link>
                  .
                </Text>

                <Box
                  onClick={handleOpen}
                  as="button"
                  width="250px"
                  height="50px"
                  px="px"
                  fontSize="15px"
                  fontWeight="semibold"
                  bg="#000066"
                  borderColor="#ccd0d5"
                  color="white"
                  whiteSpace="nowrap"
                  size={{ base: 'md', md: 'lg' }}
                  
                >
                  DOWNLOAD BROCHURE
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p={{ base: 4, md: 8, lg: 12 }} bg={{ base: "#333", md: "#333", lg: "#333"}}>
        <Flex flexDirection={{ base: "column", md: "row" }} justify={{ base: "center", md: "space-around" }} >
          <Heading marginLeft={2} w="50%" size="sm" color="white">REINVENTING HIGHER EDUCATION</Heading>
          <Text whiteSpace="pre-wrap" marginLeft={10} w="50%" color="white">
            © 2024 IE | You can contact the IE and the IE Foundation's DPO at
            DataPrivacyOffice@ie.edu{"\n"} This site is protected by reCAPTCHA and the
            Google Privacy Policy and Terms of Service apply.
          </Text>
        </Flex>
      </Box>
    </>
  );
};
