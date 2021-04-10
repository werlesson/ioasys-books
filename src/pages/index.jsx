import GridCard from '../components/GridCard'
import LayoutDefault from '../components/LayoutDefault'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <LayoutDefault>
      <Navbar />
      <GridCard className="mt-5" />
    </LayoutDefault>
  )
}
