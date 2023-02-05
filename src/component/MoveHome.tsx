import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Somkey from "./assets/Somkey.png";
import { Box, Flex, SimpleGrid, Image, Text } from "@chakra-ui/react";
function MoveHome() {
  const slides = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480",
    },
    {
      img: "https://cdn.discordapp.com/attachments/823278053944721419/1070521667522138212/Riyadh_Skylinegg.jpg",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/91pHAQqpFWL._AC_UL900_SR615,900_.jpg",
    },
    //
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    },
    {
      img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 4000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <div>
      <Flex
        w="full"
        bg="black"
        // _dark={{ bg: "#3e3e3e" }}
        p={5}
        alignItems="center"
       ml={3}
        fontSize="4xl"
        color="gold"
      >
        Movie:
      </Flex>

      

      <Box bg="black" >
        <SimpleGrid columns={5} spacing={1}>
          <Movie
            name="Black Adam"
            imgUrl="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
            rating={8.9}
            showDate="2020"
          />
          <Movie
            name="Schindlers List"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480"
            rating={9}
            showDate="2016"
          />
          <Movie
            name="Run"
            imgUrl="https://m.media-amazon.com/images/M/MV5BMDQ5MmJhODgtMjMzYi00Nzc3LTk5MDUtYTkwMTkzM2RlNjEzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
            rating={8.5}
            showDate="2017"
          />
          <Movie
            name="The black Phone"
            imgUrl="https://images-na.ssl-images-amazon.com/images/I/91pHAQqpFWL._AC_UL900_SR615,900_.jpg"
            rating={5}
            showDate="5/5/2020"
          />

          <Movie
            name="Smile"
            imgUrl="https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
            rating={9}
            showDate="2020"
          />
          <Movie
            name="Top Gun"
            imgUrl="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg"
            rating={8.7}
            showDate="2014"
          />
          <Movie
            name="Back to the Future"
            imgUrl="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            rating={9.1}
            showDate="2011"
          />
          <Movie
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          />
              <Movie
            name="Schindlers List"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480"
            rating={9}
            showDate="2016"
          />
          <Movie
            name="Run"
            imgUrl="https://m.media-amazon.com/images/M/MV5BMDQ5MmJhODgtMjMzYi00Nzc3LTk5MDUtYTkwMTkzM2RlNjEzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
            rating={8.5}
            showDate="2017"
          />
          <Movie
            name="The black Phone"
            imgUrl="https://images-na.ssl-images-amazon.com/images/I/91pHAQqpFWL._AC_UL900_SR615,900_.jpg"
            rating={5}
            showDate="5/5/2020"
          />

          <Movie
            name="Smile"
            imgUrl="https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
            rating={9}
            showDate="2020"
          />
          <Movie
            name="Top Gun"
            imgUrl="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg"
            rating={8.7}
            showDate="2014"
          />
          <Movie
            name="Back to the Future"
            imgUrl="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            rating={9.1}
            showDate="2011"
          />
          <Movie
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          />
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default MoveHome;
