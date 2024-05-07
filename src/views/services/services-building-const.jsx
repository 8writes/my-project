/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/building.jpg'
import ServicesContent from '@/components/services-content'

const ServicesBuildingConst = () => {
  return (
    <div className=''>
      <ServicesContent title='Building Construction' image={image} />
      <p>
        Construction of new buildings, renovation and maintenance of existing
        structures, including roofing, plumbing, carpentry and painting.
        Construction of new roads/bridges and rehabilitation of old ones.
        Construction of culverts, dykes and jetties.{' '}
      </p>
      <h1>Management Procurement System</h1>
      <p>
        Construction management In this arrangement the client plays an active
        role in the procurement system by entering into separate contracts with
        the designer (architect or engineer), the construction manager, and
        individual trade contractors. The client takes on the contractual role,
        while the construction or project manager provides the active role of
        managing the separate trade contracts, and ensuring that they all work
        smoothly and effectively together. Management procurement systems are
        often used to speed up the procurement processes, allow the client
        greater flexibility in design variation throughout the contract, the
        ability to appoint individual work contractors, separate contractual
        responsibility on each individual throughout the contract, and to
        provide greater client control.
      </p>
      <p>
        More and more families are looking into building their own homes, or
        contracting to have them built. Construction practices, technologies,
        and resources conform to state and local building codes. Our teamwork
        method integrates design and construction services, building a strategic
        consensus that balances function, budget and design, resulting in highly
        satisfied users and award-winning structures.{' '}
      </p>
    </div>
  )
}

export default ServicesBuildingConst
