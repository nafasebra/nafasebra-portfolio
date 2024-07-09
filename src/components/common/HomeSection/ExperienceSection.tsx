import React from 'react'
import TopSection from '@components/ui/TopSection'
import { Experiences } from '@data/experiences'
import ExperienceCard from '@components/ui/card/ExperienceCard'

function ExperienceSection() {
  return (
    <section className='py-10 container space-y-10' id="experience">
      <TopSection title='تجربیات من' subTitle='کجاها فعالیت کاری داشتم؟' />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {
          Experiences ? Experiences.map((item, index) => (
            <ExperienceCard wide={index === 0} key={item.id} {...item} />
          )) : null
        }
      </section>
    </section>
  )
}

export default ExperienceSection