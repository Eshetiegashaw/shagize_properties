import { cn } from '@/lib/utils'

export function Main({ fixed, className, fluid, ...props }) {
  return (
    <main
      data-layout={fixed ? 'fixed' : 'auto'}
      className={cn(
        'px-4 py-6',
        fixed && 'flex grow flex-col overflow-hidden',
        !fluid && '@7xl/content:w-full',
        className
      )}
      {...props}
    />
  )
}
