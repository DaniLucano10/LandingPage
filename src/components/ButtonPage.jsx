import { Box, Button, Container } from "@chakra-ui/react";
import { ModalForm } from "./ModalForm";
import { useEffect, useState } from "react";

export const ButtonPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos >= 800 && currentScrollPos < 5700;

      setIsVisible(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      colorScheme="blue"
      position="fixed"
      bottom="15px"
      right="15px"
      width="300px"
      height="50px"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      size={{ base: 'md', md: 'lg', lg:'lg'}}
    >
      <ModalForm />
    </Button>
  );
};
