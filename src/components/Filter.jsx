import { Box, Button, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import FilterIcon from "../assets/svg/FilterIcon";
import Sorticon from "../assets/svg/Sorticon";
import MapIcon from "../assets/svg/MapIcon";
import MobileBottomModal from "./Modal";

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="container">
        <SimpleGrid mb={"15px"} columns={3} align={"center"} gap={"0 10px"}>
          <Button onClick={onOpen} {...css.button}>
            <FilterIcon /> Фильтры
          </Button>
          <Button onClick={onOpen} {...css.button}>
            <Sorticon /> Сорт
          </Button>
          <Button onClick={onOpen} {...css.button}>
            <MapIcon /> Карта
          </Button>
        </SimpleGrid>
      </Box>
      <MobileBottomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Filter;

const css = {
  button: {
    borderRadius: "8px",
    backgroundColor: "#fff",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    fontSize: "16px",
    fontWeight: "400",
  },
};
