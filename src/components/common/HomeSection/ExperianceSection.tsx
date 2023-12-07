import React from 'react'
import TopSection from '@components/ui/TopSection'
import { ExperienceType, Experiences } from '@data/experiences'
import ServiceCard from '@components/ui/card/ServiceCard'

function ExperianceSection() {
  return (
    <section className='py-10 container space-y-10' id="experiance">
      <TopSection title='تجربیات من' subTitle='کجاها فعالیت کاری داشتم؟' />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {
          Experiences ? Experiences.map((item) => (
            <ServiceCard key={item.id} id={+item.id} title={item.title} description={item.description[0]} />
          )) : null
        }
      </section>
    </section>
  )
}

export default ExperianceSection