import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const colors = {
    brand: {
      900: '#051014',
      800: '#2e2f2f',
      700: '#a599b5',
      600: '#cddddd',
      500: '#acbdba',
    },
  }

  const theme = extendTheme({ colors })
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
