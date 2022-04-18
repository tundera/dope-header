import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
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
    <div>
      <motion.header
        style={{ height, backgroundColor: backgroundColorTemplate }}
        className='fixed inset-x-0 top-0 z-10 flex items-center shadow-sm backdrop-blur '
      >
        <div className='flex items-center justify-between w-full max-w-3xl px-4 mx-auto'>
          <a href='/' className='font-semibold leading-none text-stone-900'>
            <Logo style={{ height: logoHeight }} />
          </a>
        </div>
      </motion.header>

      <main className='max-w-3xl p-4 mx-auto pt-36 text-stone-700 font-serif text-lg space-y-4'>
        <Article />
      </main>
    </div>
  )
}
