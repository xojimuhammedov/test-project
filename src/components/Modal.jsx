import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Sorticon from "../assets/svg/Sorticon";

export default function MobileBottomModal({ onClose, isOpen }) {
  const [selectedOption, setSelectedOption] = useState("cheapest");

  const sortOptions = [
    {
      id: "recommended",
      title: "Рекомендуемые",
      icon: <Sorticon />,
    },
    {
      id: "cheapest",
      title: "Самые дешевые",
      icon: <Sorticon />,
    },
    {
      id: "expensive",
      title: "Сначала дорогие",
      icon: <Sorticon />,
    },
    {
      id: "rating",
      title: "Низкая цена и высокий рейтинг",
      icon: <Sorticon />,
    },
  ];

  const handleApply = () => {
    console.log("Selected option:", selectedOption);
    onClose();
  };

  return (
    <Box position="relative">
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        // size="full"
      >
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent
          position="absolute"
          bottom="0"
          mb="0"
          {...css.box}
          maxH="80vh"
        >
          {/* Handle */}
          <Flex justify="center" pt={3} pb={2}>
            <Box w="50px" h="6px" bg="#235DFF" rounded="full" />
          </Flex>

          <ModalHeader px={6} pb={'15px'}>
            <Text fontSize="18px" fontWeight="600" color="#141414">
              Сортировка
            </Text>
          </ModalHeader>

          <ModalBody>
            <RadioGroup value={selectedOption} onChange={setSelectedOption}>
              <VStack align="stretch">
                {sortOptions.map((option) => (
                  <Box
                    key={option.id}
                    p={4}
                    rounded="xl"
                    bg="gray.50"
                    _hover={{ bg: "gray.100" }}
                    cursor="pointer"
                    transition="background-color 0.2s"
                  >
                    <HStack justify="space-between">
                      <HStack spacing={3}>
                        <Text fontSize="lg" color="blue.500">
                          {option.icon}
                        </Text>
                        <Text color="#141414" fontWeight="medium">
                          {option.title}
                        </Text>
                      </HStack>
                      <Radio value={option.id} colorScheme="blue" size="lg" />
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#235DFF"
              color="white"
              w="full"
              {...css.button}
              _active={{ bg: "blue.700" }}
              onClick={handleApply}
            >
              Применить
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </Box>
  );
}

const css = {
  button: {
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "26px",
    height:"50px"
  },
  box: {
    borderRadius: "10px 10px 0px 0px",
    border: "1px solid #EEE",
    background: "#EBF0F5",
    boxShadow: "4px 8px 24px 0px rgba(35, 93, 255, 0.15)",
  },
};
