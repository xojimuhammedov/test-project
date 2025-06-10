import { Box, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import Filter from "./Filter";
import { useQuery } from "react-query";
import axios from "axios";
import Location from "../assets/svg/Location";
import AirIcon from "../assets/svg/AirIcon";
import HomeIcon from "../assets/svg/HomeIcon";
import CarIcon from "../assets/svg/CarIcon";
import KnifeIcon from "../assets/svg/KnifeIcon";
import CheckIcon from "../assets/svg/CheckIcon";
import HeadPhone from "../assets/svg/HeadPhone";
import StarIcon from "../assets/svg/StarIcon";
import LoveIcon from "../assets/svg/LoveIcon";

const Section = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const fileUrl = import.meta.env.VITE_FILE_URL;
  const { data, isLoading, error } = useQuery({
    queryKey: "tourData",
    queryFn: () =>
      axios
        .get(
          `${apiUrl}/somo-travel/tour-prices-content2?town_from_inc=1853&tour_operator_id=4&state_id=9&checkin=20250712&nights=7&towns%5B%5D=427&adult=1&childs=0&tour_somo_id=427&&page=1&lang=uz`
        )
        .then((res) => res.data),
  });

  function formatNumberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} p="30px 0">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Box pb={"10px"}>
      <Box className="container">
        {data?.data?.map((item) => (
          <Box {...css.card}>
            <Image
              {...css.image}
              src={`${fileUrl}/${item?.hotel?.main_photo}`}
              fallbackSrc={`${fileUrl}/${item?.hotel?.main_photo}`}
            />
            <Flex {...css.rank}>
              <StarIcon />
              {item?.hotel?.detail?.ratings?.overall}
            </Flex>
            <Flex {...css.love}>
              <LoveIcon />
            </Flex>
            <Box p={"14px"}>
              <Heading {...css.name}>
                {item?.hotel?.name} {item?.hotel?.star}
              </Heading>
              <Flex align={"center"} gap={"5px"}>
                <Location />
                <Heading {...css.location}>{item?.hotel?.detail?.name}</Heading>
              </Flex>
              <Flex m={"10px 0"} align={"center"} gap={"5px"}>
                <AirIcon /> +
                <HomeIcon /> +
                <CarIcon /> +
                <KnifeIcon /> +
                <CheckIcon /> +
                <HeadPhone />
              </Flex>
              <Text {...css.text}>{item?.hotel?.short_description}</Text>
              <Flex align={"center"} justify={"space-between"}>
                <Text w={"120px"}>За 2х туристов 7 ночей</Text>
                <Heading {...css.price}>
                  от {formatNumberWithSpaces(item?.converted_price_number)} сум
                </Heading>
              </Flex>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section;

const css = {
  card: {
    borderRadius: "7.627px",
    background: "#fff",
    marginBottom: "15px",
    position: "relative",
  },
  rank: {
    position: "absolute",
    borderRadius: "9.533px",
    background: "#FFF",
    padding: "6px 12px",
    top: "10px",
    left: "10px",
    alignItems: "center",
    gap: "5px",
  },
  love: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#FFF",
    borderRadius: "9.533px",
    padding: "6px 8px",
  },
  image: {
    borderRadius: "7.627px",
    height: "183.993px",
    objectFit: "cover",
    width: "100%",
  },
  name: {
    color: "#141414",
    textOverflow: "ellipsis",
    lineHeight: "28px",
    fontSize: "19px",
    fontWight: "500",
  },
  location: {
    lineHeight: "19px",
    fontSize: "13px",
    fontWight: "500",
    color: "#141414",
  },
  text: {
    lineHeight: "19px",
    fontSize: "16px",
    fontWight: "400",
    color: "#141414",
    letterSpacing: "-0.505px",
    margin: "10px 0",
  },
  price: {
    color: "#0054A2",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "30px",
  },
};
