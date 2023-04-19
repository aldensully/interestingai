import { api } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ArrowUpSvg from './ArrowUp';
import GithubIcon from './GithubIcon';
import GithubIconButton from './GithubIconButton';

function Spotlight() {
  const { data } = api.projects.getSpotlight.useQuery();

  return (
    <div className='w-full  bg-fg py-20 flex flex-col py-12 gap-12 md:gap-16 items-center px-4 xs:px-4 sm:px-[5%] md:px-[5%] lg:px-[15%]'>
      <text className='text-xl leading-tight font-medium text-text'>{"Today's spotlight"}</text>
      <div className='flex flex-col md:flex-row-reverse  w-full items-start justify-center gap-4 md:gap-12'>
        <div
          className='aspect-[6/4] overflow-hidden rounded-[28px] relative h-full w-full cursor-pointer group'
        >
          {data?.project.image &&
            <Image src={`https://d2w0z5ojnqclxw.cloudfront.net/${data?.project.image}`}
              alt='website-screenshot'
              fill
              className='group-hover:scale-105 transition-all duration-300 ease-in-out
               object-cover w-full h-full rounded-[28px] z-[0]'
            />
          }
          <div className='absolute hidden group-hover:flex transition-all duration-300 ease-in-out left-0 index-1000 top-0 right-0 bottom-0 bg-gradient-to-b from-[transparent] to-[#00000022]' />
          {data?.project.websiteUrl &&
            <button
              onClick={() => console.log('clicked')}
              className='
              top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute 
              hidden 
              group-hover:flex transition-all duration-300 ease-in-out  z-5000 bg-black px-4 py-2 rounded-[6px]'
            >
              <text className='text-white text-sm'>
                Visit website
              </text>
            </button>
          }

          <button
            className='flex flex-row items-center gap-2 absolute hidden group-hover:flex transition-all duration-300 ease-in-out  z-1000 right-4 bottom-4 bg-pink px-4 py-2 rounded-full'
          >
            <text className='text-white text-sm'>
              Upvote
            </text>
            <ArrowUpSvg />
          </button>
        </div>
        <div className='h-full items-start w-full flex justify-start gap-2 flex-col'>
          {data?.project.websiteUrl ?
            <a href={data.project.websiteUrl}>
              <text className='text-lg max-w-[75%] font-medium'>{data?.project.name}</text>
            </a>
            :
            <text className='text-lg max-w-[75%] font-medium'>{data?.project.name}</text>
          }
          <text className='text-sm max-w-[80%]'>{data?.project.description}</text>
          <div className='flex flex-row items-center content-start mt-4'>
            {data?.project.githubUrl &&
              <GithubIconButton url={data.project.githubUrl} />
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Spotlight;


