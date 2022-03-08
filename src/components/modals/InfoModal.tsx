import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="N" />
        <Cell value="N" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="S" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is the Yerd Herd version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://www.youtube.com/watch?v=Gs069dndIYk"
          className="underline font-bold"
        >
          You already know
        </a>{' '}
      </p>
    </BaseModal>
  )
}
