import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import BackUp from "../assets/svg/BackUp";
import EditIcon from "../assets/svg/EditIcon";

const Navbar = () => {
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex {...css.flex}>
          <Button {...css.button}>
            <BackUp />
          </Button>
          <Flex {...css.item}>
            <Heading {...css.location}>Москва - Ташкент</Heading>
            <Heading {...css.date}>28-31 августа, 2 взрослых</Heading>
          </Flex>
          <Button {...css.button}>
            <EditIcon />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

const css = {
  navbar: {
    borderRadius: "0px 0px 20px 20px",
    background: "#FFF",
    padding: "20px 5px",
  },
  button: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    fontSize: "16px",
    color: "#132339",
    lineHeight: "24px",
    fontWeight: "600",
  },
  date: {
    color: "#76787A",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
  },
  flex: {
    justifyContent: "space-between",
    alignItems: "center",
    gap:"10px"
  },
  item: {
    borderRadius: "8px",
    background: " #EBF0F5",
    flexDirection: "column",
    alignItems: "center",
    height: "50px",
    width:"calc(100% - 120px)"
  },
};
