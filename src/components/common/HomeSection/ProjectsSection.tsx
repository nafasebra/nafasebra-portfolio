import React from 'react'

import DarkSection from '@components/layout/DarkSection'
import ProjectCard from '@components/ui/ProjectCard'
import { Projects } from '@data/projects'

function ProjectsSection() {
  return (
    <DarkSection id="projects">
          <div className="pb-16">
            <p className="flex items-center text-light pb-5">
              <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
              پروژه های <span className="text-orange mr-1"> من </span>
            </p>
            <h3 className="text-light font-bold text-3xl leading-[3rem]">
              چه کارهایی انجام دادم؟
            </h3>
          </div>

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