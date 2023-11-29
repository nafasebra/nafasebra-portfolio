import React from 'react'

import DarkSection from '@components/layout/DarkSection'
import ProjectCard from '@components/ui/ProjectCard'
import { Projects } from '@data/projects'
import TopSection from '@components/ui/TopSection'

function ProjectsSection() {
  return (
    <DarkSection id="projects">
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
    </DarkSection>
  )
}

export default ProjectsSection