import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 rounded-lg cursor-pointer', {
          'bg-gray-900 border-gray-700': completedPercentage === 0,
          'bg-cyan-900 border-cyan-700': completedPercentage > 0 && completedPercentage < 20,
          'bg-cyan-800 border-cyan-600': completedPercentage >= 20 && completedPercentage < 40,
          'bg-cyan-700 border-cyan-500': completedPercentage >= 40 && completedPercentage < 60,
          'bg-cyan-600 border-cyan-400': completedPercentage >= 60 && completedPercentage < 80,
          'bg-cyan-500 border-cyan-300': completedPercentage >= 80,
        })}
      />
      
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-gray-700 flex flex-col">
          <span className="font-semibold text-gray-400">saturday</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">01/21</span>

          <ProgressBar progress={completedPercentage} />
          
          <Popover.Arrow height={8} width={16} className="fill-gray-700" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}