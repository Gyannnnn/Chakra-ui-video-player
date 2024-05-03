import React from 'react'
import { Box, Heading, Image } from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3 (1).jpg'
import img4 from '../Assets/4 (1).jpg'
import img5 from '../Assets/5.png'

const Home = () => {
  return (
    <Box>

      <MyCarousel />
    </Box>
  )
}

const MyCarousel = () => {

  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={true} showIndicators={true} showThumbs={true} showArrows={true} >
      <Box  w={'full'} h={'100vh'}  >
        <Image src={img1} />
        <Heading bgColor={'black'} color={'white'} >
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'} >
        <Image src={img2} />
        <Heading bgColor={'black'} color={'white'} >
        Gaming IS The Future
        </Heading>
      </Box>

    </Carousel>
  )
}


export default Home