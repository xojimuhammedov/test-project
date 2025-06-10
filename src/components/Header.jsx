import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PrestigeIcon from "../assets/icon.svg";
import LineIcon from "../assets/svg/LineIcon";

const Header = () => {
  return (
    <Box p={'15px 0'}>
      <Box className="container">
        <Flex {...css.box}>
          <Flex borderBottom={'1px solid #EBF0F5'} pb={'11px'} gap={'15px'}>
            <Image src={PrestigeIcon} alt="" />
            <LineIcon />
            <Heading {...css.name}>
              Тур предоставляется надежным туроператором
            </Heading>
          </Flex>
          <Text {...css.text}>Мы подобрали для вас только лучшие отели</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;

const css = {
  box: {
    borderRadius: "12px",
    background: "#FFF",
    padding: "11px",
    flexDirection: "column",
    alignItems: "center",
    gap:"11px"
  },
  name: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#141414",
    fontWeight: "500",
  },
  text: {
    fontSize: "16px",
    lineHeight: "20px",
    color: "#141414",
    fontWeight: "500",
  },
};
