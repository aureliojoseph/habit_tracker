import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../assets/logo.svg'
import { NewHabitForm } from './NewHabitForm'

export function Header() {

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logo} alt="Habits logo" />

      <Dialog.Root>
        <Dialog.Trigger>
          <button
            type="button"
            className="border border-cyan-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-cyan-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-background"
          >
            <Plus size={20} className="text-cyan-500" />
            New Habit
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          
          <Dialog.Content className="absolute p-10 bg-gray-800 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-gray-400 rounded-lg hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-gray-900">
              <X size={24} aria-label="Close button" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Start Habit
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    </div>
  )
}