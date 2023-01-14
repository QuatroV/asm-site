import * as React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';

import UnderlineLink from '@/components/links/UnderlineLink';
import Logo from '@/components/Logo';

const links = [
  { href: '/', label: 'О проекте' },
  { href: '/', label: 'Скачать' },
];

export default function Header() {
  return (
    <header className='bg-glass top-8 z-50 m-8 rounded-full py-2 px-4'>
      <div className='layout flex h-14 items-center justify-start gap-4'>
        <Logo />
        <nav>
          <ul className='flex items-center justify-between space-x-4 text-lg font-bold text-white'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink
                  href={href}
                  className='align-middle drop-shadow-md'
                >
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
        <HiOutlineUserCircle
          size={48}
          strokeWidth='15%'
          stroke='white'
          className='ml-auto'
        />
      </div>
    </header>
  );
}
