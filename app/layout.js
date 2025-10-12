import './globals.css';
// import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MUIThemeProvider from '../components/MUIThemeProvider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pioneer Sports Consultancy - From Indian Dreams to Global Arenas',
  description: 'Pioneering grassroots and youth football in India with world-class training, global expertise, and legendary partnerships.',
  keywords: 'football consultancy, sports training, grassroots development, youth programs, India football',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <MUIThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  )
}
