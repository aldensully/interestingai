import { api } from '@/utils/api';
import React from 'react';
import ListItem from './ListItem';

function NewProjects() {
  const { data } = api.projects.getNew.useQuery();
  const [displayType, setDisplayType] = React.useState<'grid' | 'list'>('grid');

  const handleDisplayType = () => {
    if (displayType === 'grid') {
      setDisplayType('list');
    } else {
      setDisplayType('grid');
    }
  };

  return (
    <div className='w-full h-full flex flex-col px-4 xs:px-4 sm:px-[5%] md:px-[5%] lg:px-[5%] py-12 gap-8'>
      <div className='flex flex-row items-center justify-between w-full '>
        <text className='text-text text-lg'>New AI projects</text>
        {/* <button onClick={handleDisplayType}>
          <text className='text-text text-sm'>{displayType === 'grid' ? 'List' : 'Grid'}</text>
        </button> */}
      </div>
      {displayType === 'list' ?
        <ul className='flex flex-col w-full items-start gap-4'>
          {data?.map((project) => (
            <ListItem displayType={'list'} key={project.id} project={project} />
          ))}
        </ul>
        :
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full h-full'
        >
          {data?.map((project) => (
            <ListItem displayType={'grid'} key={project.id} project={project} />
          ))}
        </div>
      }
    </div>
  );
}

export default NewProjects;