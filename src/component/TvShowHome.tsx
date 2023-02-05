import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Somkey from "./assets/Somkey.png";
import { Box, Flex, SimpleGrid, Image, Text } from "@chakra-ui/react";

function TvShowHome() {
  const slides = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
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

  const SLIDES_INTERVAL_TIME = 2000;
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
        TV Shows:
      </Flex>

   

      <Box bg="black" >
        <SimpleGrid columns={5} spacing={1}>
          <Movie
            name="Breaking Bad"
            imgUrl="https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg"
            rating={9.5}
            showDate="2008"
          />
          <Movie
            name="Band of Brothers"
            imgUrl="https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg"
            rating={9.3}
            showDate="2001"
          />
          <Movie
            name="Game of Thrones"
            imgUrl="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
            rating={9.1}
            showDate="2011"
          />
          <Movie
            name="Life"
            imgUrl="https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            rating={9.1}
            showDate="2009"
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
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          />
           <Movie
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          />
           <Movie
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          />
           <Movie
            name="WALL·E"
            imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
            rating={8.4}
            showDate="2080"
          /> <Movie
          name="WALL·E"
          imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
          rating={8.4}
          showDate="2080"
        /> <Movie
        name="WALL·E"
        imgUrl="https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
        rating={8.4}
        showDate="2080"
      /> <Movie
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

export default TvShowHome;
