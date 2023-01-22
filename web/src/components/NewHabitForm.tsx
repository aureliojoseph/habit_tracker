import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])
  
  async function createNewHabit(event: FormEvent) {
    event.preventDefault()
    if (!title || weekDays.length === 0) {
      return
    }

    await api.post('habits', {
      title,
      weekDays
    })

    setTitle('')
    setWeekDays([])

    alert('Habit successfully created!')
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
      setWeekDays(weekDaysWithRemovedOne)
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddedOne)
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label
        htmlFor="title"
        className="font-semibold leading-tight"
      >
      What is your commitment?
      </label>

      <input
        type="text"
        id="title"
        placeholder="e.g.: exercise, study, sleep well, etc."
        className="p-4 rounded-lg mt-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-gray-900"
        autoFocus
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <label
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        What is the frequency?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              key={weekDay}
              className="flex items-center gap-3 group focus:outline-none"
              checked={weekDays.includes(index)}
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-gray-600 group-data-[state=checked]:bg-emerald-600 group-data-[state=checked]:border-emerald-600 hover:bg-gray-700 hover:border-gray-500 transition-colors group-focus:ring-2 group-focus:ring-cyan-600 group-focus:ring-offset-2 group-focus:ring-offset-background"
              >
                <Checkbox.Indicator>
                  <Check
                    size={20}
                    className="text-white group-hover:text-emerald-300"
                    weight="bold"
                  />
                </Checkbox.Indicator>
              </div>

              <span className="text-white leading-tight">
                {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-emerald-600 hover:bg-emerald-300 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <Check size={20} weight="bold" />
        Submit
      </button>
    </form>
  )
}