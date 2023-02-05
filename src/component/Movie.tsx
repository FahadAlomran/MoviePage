import {
  Flex,
  Box,
  Image,
  Link,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
interface MoviesPro {
  name: string;
  imgUrl: string;
  showDate: string;
  rating: number;
}

function Movie(props: MoviesPro) {
  return (
    <>
      <Card maxW="sm" bg='#363232' mr={10} ml={10} boxShadow="lg" mb={5}>
        <CardBody>
          <Image
            w={500}
            src={props.imgUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />

          <Stack mt="6" spacing="3">
            <Heading size="md">{props.name}</Heading>
            <Text>{props.showDate}</Text>
            <Text color="gold" fontSize="2xl">
              {props.rating} ⭐
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
}
export default Movie;
