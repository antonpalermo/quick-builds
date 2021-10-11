import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className={'w-full'}>
      <div className={'container mx-auto max-w-xl px-5'}>
        <div className={'w-full inline-flex items-center justify-between'}>
          <p className={'inline-flex items-center'}>
            Crafted with&nbsp;
            <HeartIcon className={'w-5 h-5 text-red-600'} />
            &nbsp;by Anton
          </p>
          <a
            href={
              'https://github.com/antonpalermo/quick-builds/tree/main/todo-app'
            }
            target={'_blank'}
            className={
              'inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200'
            }
          >
            <Image src={'/github_logo.png'} width={20} height={20} />
            <p className={'pl-2 font-medium'}>Github</p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
