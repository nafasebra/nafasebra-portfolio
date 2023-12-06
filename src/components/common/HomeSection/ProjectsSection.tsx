import React from 'react'

import ProjectCard from '@components/ui/card/ProjectCard'
import { Projects } from '@data/projects'
import TopSection from '@components/ui/TopSection'
import Container from '@components/layout/Container'

function ProjectsSection() {
  return (
    <section className='py-16' id='project'>
      <Container>
        <TopSection title='پروژه های من' subTitle='چه کارهایی انجام دادم؟' />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Projects.map((item) => (
            <ProjectCard
              key={item.id}
              imageUrl={item.imageUrl}
              skills={item.skills}
              name={item.name}
              target={item.target}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection