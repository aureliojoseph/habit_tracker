import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'

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
  return (
    <form className="w-full flex flex-col mt-6">
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
        className="p-4 rounded-lg mt-3 bg-gray-800 text-white placeholder:text-gray-400"
        autoFocus
      />

      <label
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        What is the frequency?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map(weekDay => {
          return (
            <Checkbox.Root key={weekDay} className="flex items-center gap-3 group">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-gray-600 group-data-[state=checked]:bg-emerald-600 group-data-[state=checked]:border-emerald-600 hover:bg-gray-700 hover:border-gray-500"
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
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-emerald-600 hover:bg-emerald-300 hover:text-gray-600"
      >
        <Check size={20} weight="bold" />
        Submit
      </button>
    </form>
  )
}