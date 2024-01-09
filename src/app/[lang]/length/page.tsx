import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next'
import Length from './length';
import Navigation from '@/app/[lang]/navigation';

export const metadata: Metadata = {
  title: 'Length | Vupico Next App Exam',
  description: 'Length | Vupico next app exam, generated by create next app',
}

export default async function Home() {
  const langTrans = await getTranslations('lang');
  return (
    <main className="main">
      <Navigation/>
      <h1 className="title">{langTrans('length/title')}</h1>
      <Length/>
    </main>
  )
}
