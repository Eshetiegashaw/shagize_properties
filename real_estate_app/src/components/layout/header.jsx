import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { MenuIcon } from 'lucide-react'
import { SidebarToggleTrigger } from './sidebar-toggle'


export function Header({ className, fixed, title, children, ...props }) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-50 h-16 sticky top-0 transition-colors duration-300',
        'bg-slate-100 text-black dark:bg-slate-950 dark:text-white',
        fixed && 'header-fixed peer/header w-[inherit]',
        offset > 10 && fixed
          ? 'shadow'
          : 'shadow-md shadow-slate-900/10 dark:shadow-black/40',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'relative flex h-full items-center gap-3 p-4 sm:gap-4',
          offset > 10 &&
          fixed &&
          'after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg'
        )}
      >
        <SidebarToggleTrigger variant='outline' className='max-md:scale-125' />
        <Separator orientation='vertical' className='h-6' />
        {title ? (
          <h1 className='text-base font-semibold text-foreground'>{title}</h1>
        ) : null}
        {children}
      </div>
    </header>
  )
}
