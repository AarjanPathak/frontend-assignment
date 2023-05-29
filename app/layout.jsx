import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'
  
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music World',
  description: 'Search and discover music albums',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className='gradiennt'/>
        </div>
        <main className='app'>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}
