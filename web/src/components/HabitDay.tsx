import { ProgressBar } from './ProgressBar'
import { HabitsList } from './HabitsList'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState } from 'react'

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('MM/DD')
  const dayOfTheWeek = dayjs(date).format('dddd')

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-background', {
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
          <span className="font-semibold text-gray-400">{dayOfTheWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
          
          <Popover.Arrow
            height={8}
            width={16}
            className="fill-gray-700"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}