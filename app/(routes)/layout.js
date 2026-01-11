import Footer from '@/components/features/footer/Footer'
import Navbar from '@/components/features/navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main  className='pt-[70px]'>{children}</main>
      <Footer />
    </>
  )
}
