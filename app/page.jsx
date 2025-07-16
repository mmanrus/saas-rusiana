import Link from 'next/link'
import ThemeModeToggle from '../components/theme-mode-toggle'
import ThemeColorToggle from '../components/theme-color-toggle'
export default function Home() {
  return (
    <>
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='fixed button-0 left-0 flex h-40 items-end justify bg-gradient-to-t
        from-white vite-white dark:from-black dark:via-black lg:static lg:size-auto
        lg:bg-none
      '>
        <ThemeColorToggle />
        <ThemeModeToggle />
      </div>
      <h2 className='text-3xl'>Welcome to Landing page</h2>
      <Link href='./dashboard/home/home-dashboard'>Home Dashboard</Link>
    </div>
    </>
  );
}
