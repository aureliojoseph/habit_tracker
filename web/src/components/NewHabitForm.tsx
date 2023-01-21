import { Check } from "phosphor-react";

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