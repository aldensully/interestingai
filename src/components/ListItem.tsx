import { Project } from '@prisma/client';
import React from 'react';
import GithubIcon from './GithubIcon';
import GithubIconButton from './GithubIconButton';

type Props = {
  project: Project;
  displayType: 'grid' | 'list';
};

function ListItem(props: Props) {
  return props.displayType === 'grid' ?
    <div className='flex flex-col justify-between rounded-[20px] border-[1px] border-black p-4 max-h-[260px] min-h-[220px]'>
      {/* <div

        key={props.project.id}
        className='aspect-[6/4] max-h-[200px] overflow-hidden rounded-[28px] relative h-full w-full cursor-pointer group'
      >
        {props.project.image &&
          <img
            src={`https://d2w0z5ojnqclxw.cloudfront.net/${props.project.image}`}
            alt='website-screenshot'
            className='group-hover:scale-105 transition-all duration-300 ease-in-out
                object-cover w-full h-full max-h-[200px] rounded-[28px] z-[0]'
          />
        }
        <div className='absolute hidden group-hover:flex transition-all duration-300 ease-in-out left-0 index-1000 top-0 right-0 bottom-0 bg-gradient-to-b from-[transparent] to-[#00000022]' />
      </div> */}
      <div className='flex flex-col'>
        {props.project.githubUrl || props.project.websiteUrl ?
          <a href={props.project.websiteUrl ?? props.project.githubUrl ?? ''}>
            <text className='text-text text-md font-medium'>{props.project.name}</text>
          </a>
          :
          <text className='text-text text-md font-medium'>{props.project.name}</text>

        }
        <text className='max-h-[100px]'>{props.project.description}</text>
      </div>
      {props.project.githubUrl &&
        <GithubIconButton url={props.project.githubUrl} />
      }
    </div>
    :
    <div className='flex flex-col gap-1'>
      <text className='text-text text-md font-medium'>{props.project.name}</text>
      <text>{props.project.description}</text>
      {props.project.githubUrl &&
        <GithubIconButton url={props.project.githubUrl} />
      }
    </div>;
}

export default ListItem;