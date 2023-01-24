import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';
import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { useState } from 'react';

interface Props {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}
 
export function HabitDay({ defaultCompleted = 0, amount = 0, date }: Props) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM')

  const dayOfWeek = dayjs(date).format('dddd')

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger className={clsx('h-10 w-10 bg-gray-900 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-background', {
        'bg-zinc-900 border-sky-900': completedPercentage === 0,
        'bg-sky-900 border-sky-700': completedPercentage > 0 && completedPercentage < 20,
        'bg-sky-800 border-sky-600': completedPercentage >= 20 && completedPercentage < 40,
        'bg-sky-700 border-sky-500': completedPercentage >= 40 && completedPercentage < 60,
        'bg-sky-600 border-sky-500': completedPercentage >= 60 && completedPercentage < 80,
        'bg-sky-500 border-sky-400': completedPercentage >= 80,


      })} />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col' >
          <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

          <ProgressBar progress={completedPercentage}/>
          <HabitsList  date={date} onCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow className='fill-zinc-900' height={8} width={16} /> 
        </Popover.Content>

      </Popover.Portal>
    </Popover.Root> 
  )
}