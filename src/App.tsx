import { Flex, Box, Link } from '@chakra-ui/react'
import { useMotionTemplate, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

import MotionBox from './MotionBox'
import Article from './Article'
import Logo from './Logo'

const scrollThreshold = [0, 50]

export default function App() {
  const { scrollY } = useViewportScroll()
  const scrollYOnDirectionChange = useRef(scrollY.get())
  const lastScrollDirection = useRef<string>()
  const lastPixelsScrolled = useRef<number>(0)
  const pixelsScrolled = useMotionValue(0)
  const height = useTransform(pixelsScrolled, scrollThreshold, [100, 60])
  const logoHeight = useTransform(pixelsScrolled, scrollThreshold, [33, 30])
  const backgroundOpacity = useTransform(pixelsScrolled, scrollThreshold, [1, 0.4])
  const backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return

      const isScrollingDown = scrollY.getPrevious() - latest < 0
      const scrollDirection = isScrollingDown ? 'down' : 'up'
      const currentPixelsScrolled = pixelsScrolled.get()

      let newPixelsScrolled: number

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled
        scrollYOnDirectionChange.current = latest
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current + (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1],
        )
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current - (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0],
        )
      }

      newPixelsScrolled && pixelsScrolled.set(newPixelsScrolled)

      lastScrollDirection.current = scrollDirection
    })
  }, [pixelsScrolled, scrollY])

  return (
    <Box>
      <MotionBox
        as='header'
        display='flex'
        alignItems='center'
        shadow='sm'
        backdropFilter='blur(8px)'
        position='fixed'
        insetX='0'
        top='0'
        zIndex='10'
        style={{
          height,
          backgroundColor: backgroundColorTemplate,
        }}
      >
        <Flex align='center' justify='space-between' width='full' maxWidth='3xl' px='4' mx='auto'>
          <Link fontWeight='semibold' color='gray.900' lineHeight='none' href='/'>
            <Logo style={{ height: logoHeight }} />
          </Link>
        </Flex>
      </MotionBox>

      <Box
        as='main'
        maxW='3xl'
        p='4'
        mx='auto'
        pt='36'
        color='gray.700'
        fontFamily='serif'
        fontSize='lg'
        experimental_spaceY='4'
      >
        <Article />
      </Box>
    </Box>
  )
}
