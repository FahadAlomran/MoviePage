import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Somkey from "./assets/Somkey.png";
import { Box, Flex, SimpleGrid, Image, Text } from "@chakra-ui/react";
function Home() {
    const slides = [
        {
        img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480",
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
      img: "https://images-na.ssl-images-amazon.com/images/I/91pHAQqpFWL._AC_UL900_SR615,900_.jpg",
    },
    //
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    },
    {
      img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg",
    }, {
        img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg",
      },
      {
        img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      },
      {
        img: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
      },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
    }, {
        img: "https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480",
      },
      {
        img: "https://cdn.discordapp.com/attachments/823278053944721419/1070521667522138212/Riyadh_Skylinegg.jpg",
      }, {
          img: "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg",
        },
        {
          img: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        },{
            img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg",
          }
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
    //   _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="360px" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
    <Box bg="black" >
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
          
</SimpleGrid>
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
         
          </SimpleGrid>
          </Box>
</div>
  )
}

export default Home