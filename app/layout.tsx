import './globals.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          <div className='hidden md:block'>
            <Sidebar />
          </div>
          <div className='px-10 py-5 w-[100vw] h-screen overflow-y-auto overflow-x-hidden'>
              <Navbar />
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
