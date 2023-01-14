import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='flex px-20 pt-20 pb-40'>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-8xl font-black text-white drop-shadow-md'>
              PLASMA
            </h1>
            <h2 className=' mb-4 max-w-3xl text-3xl font-bold text-gray-50 drop-shadow-md'>
              Образовательная система для обучения низкоуровневому
              программированию
            </h2>
            <Button
              variant='primary'
              className='border-none bg-emerald-500 px-5 py-3 shadow transition-all hover:bg-emerald-600 active:scale-105 active:bg-emerald-600'
            >
              <a
                href='https://drive.google.com/file/d/19qXl4oVI8c_ktK98FDZVm9_hcBYuRDe8/view?usp=share_link'
                download
              >
                Загрузить установщик
              </a>
            </Button>
          </div>
        </section>
        <section className='rounded-t-3xl bg-white'></section>
      </main>
    </Layout>
  );
}
