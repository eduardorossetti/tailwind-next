import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import { twMerge } from 'tailwind-merge'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/eduardorossetti.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span
          className={twMerge(
            'truncate text-sm font-semibold text-zinc-700',
            'dark:text-zinc-100',
          )}
        >
          Eduardo Rossetti dos Santos Melo
        </span>
        <span
          className={twMerge(
            'truncate text-sm text-zinc-500',
            'dark:text-zinc-400',
          )}
        >
          edurossettimelo@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
