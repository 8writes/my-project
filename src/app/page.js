/** @format */

import Brands from '@/components/brands'
import ProjectsBtn from '@/components/projects-btn'
import ServicesBtn from '@/components/services-btn'
import Hero from '@/views/home/hero'
import ProjectsHome from '@/views/home/projects-home'
import ServicesHome from '@/views/home/services-home'
import Head from 'next/head'

export default function Home() {
  return (
    <main className=' lg:min-h-screen'>
      <Head>
       <meta name="google-site-verification" content="M6OoraMA-ohCavhaLIPO65l2LPu-TZVMkdMms9-2Df0" />
      </Head>
      <Hero />
      <ServicesHome />
      <ServicesBtn />
      <ProjectsHome />
      <ProjectsBtn />
      <Brands />
    </main>
  )
}
