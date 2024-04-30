/** @format */

import Brands from '@/components/brands'
import ProjectsBtn from '@/components/projects-btn'
import ServicesBtn from '@/components/services-btn'
import Hero from '@/views/home/hero'
import ProjectsHome from '@/views/home/projects-home'
import ServicesHome from '@/views/home/services-home'

export default function Home() {
  return (
    <main className=' lg:min-h-screen'>
      <Hero />
      <ServicesHome />
      <ServicesBtn />
      <ProjectsHome />
      <ProjectsBtn />
      <Brands />
    </main>
  )
}
