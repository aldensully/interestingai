import { api } from '@/utils/api';
import React from 'react';

function NewProjects() {
  const { data } = api.projects.getNew.useQuery();
  return (
    <div className='w-full h-full flex flex-col px-4 xs:px-4 sm:px-[5%] md:px-[5%] lg:px-[5%] py-12 gap-8'>
      <text className='text-text text-lg'>New AI projects</text>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full h-full'
      >
        {data?.map((project) => (
          <div

            key={project.id}
            className='aspect-[6/4] overflow-hidden rounded-[28px] relative h-full w-full cursor-pointer group'
          >
            {project.image &&
              <img
                src={`https://d2w0z5ojnqclxw.cloudfront.net/${project.image}`}
                alt='website-screenshot'
                className='group-hover:scale-105 transition-all duration-300 ease-in-out
                object-cover w-full h-full rounded-[28px] z-[0]'
              />
            }
            <div className='absolute hidden group-hover:flex transition-all duration-300 ease-in-out left-0 index-1000 top-0 right-0 bottom-0 bg-gradient-to-b from-[transparent] to-[#00000022]' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProjects;