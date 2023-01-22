import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface HabitsListProps {
  date: Date
  onCompletedChanged: (completed: number) => void
}

interface HabitsInfo {
  possibleHabits: {
    id: string
    title: string
    created_at: string
  }[],
  completedHabits: string[]
}

export function HabitsList({ date, onCompletedChanged }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString()
      }
    }).then(response => {
      setHabitsInfo(response.data)
    })
  }, [])

  async function handleToggleHabit(habitId: string) {
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)
    
    await api.patch(`/habits/${habitId}/toggle`)

    let completedHabits: string[] = []

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits
    })

    onCompletedChanged(completedHabits.length)
  }

  const isDayInThePast = dayjs(date).endOf('day').isBefore(new Date())

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map(habit => {
        return (
          <Checkbox.Root
            key={habit.id}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            disabled={isDayInThePast}
            className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
          >
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-gray-600 group-data-[state=checked]:bg-emerald-600 group-data-[state=checked]:border-emerald-600 hover:bg-gray-700 hover:border-gray-500 transition-colors group-focus:outline-none group-focus:ring-2 group-focus:ring-cyan-600 group-focus:ring-offset-2 group-focus:ring-offset-background"
            >
              <Checkbox.Indicator>
                <Check
                  size={20}
                  className="text-white group-hover:text-emerald-300"
                  weight="bold"
                />
              </Checkbox.Indicator>
            </div>

            <span
              className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-gray-800"
            >
              {habit.title}
            </span>
          </Checkbox.Root>
        )
      })}
    </div>
  )
}