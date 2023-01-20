interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className="w-10 h-10 rounded m-2 flex items-center justify-center">
      {props.completed}
    </div>
  )
}