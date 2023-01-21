interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-gray-800 w-full mt-4">
      <div
        role="progressbar"
        aria-label="progress of habits completed that day"
        aria-valuenow={props.progress}
        className="h-3 rounded-lg bg-cyan-600"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}