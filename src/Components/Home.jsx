import React from 'react'
import { Box, Heading, Image } from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3 (1).jpg'
import img4 from '../Assets/4 (1).jpg'
import img5 from '../Assets/5.png'
import { transform } from 'framer-motion';


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% ,-50%)',
  textTransformation: 'uppercase',
  padding: '4',
}

const Home = () => {
  return (
    <Box>

      <MyCarousel />
    </Box>
  )
}

const MyCarousel = () => {

  return (

    <Carousel autoPlay infiniteLoop interval={1000} >
      <Box w='full'  >
        <Image src={img1} ></Image>
        <Heading bg={'black'} color={'white'}  {...headingOptions} >
          watch The Future
        </Heading>

      </Box>
      <Box>
        <Image src={img2} ></Image>
        <Heading bg={'black'} color={'white'} >
          Future Is Gaming
        </Heading>

      </Box>
      <Box>
        <Image src={img3} ></Image>
        <Heading bg={'black'} color={'white'} >
          Night Life Is cool
        </Heading>

      </Box>
      <Box>
        <Image src={img4} ></Image>
        <Heading bg={'black'} color={'white'} >
          Future Is Gaming
        </Heading>

      </Box>



    </Carousel>

  )
}


export default Home