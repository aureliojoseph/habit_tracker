import * as Popover from '@radix-ui/react-popover'
import * as Checkbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'
import { Check } from 'phosphor-react'

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

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-gray-600 group-data-[state=checked]:bg-emerald-600 group-data-[state=checked]:border-emerald-600"
              >
                <Checkbox.Indicator>
                  <Check
                    size={20}
                    className="text-white"
                    weight="bold"
                  />
                </Checkbox.Indicator>
              </div>

              <span
                className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-gray-800"
              >
                Study at least 1h per day
              </span>
            </Checkbox.Root>
          </div>
          
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