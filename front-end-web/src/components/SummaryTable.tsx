import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>


export function SummayTable() {
  const [summary, setSummary] = useState<Summary>([])
  useEffect(() => {
    api.get('/summary').then(res => setSummary(res.data))
  }, [])
  function isSame(date: string, arg1: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
          return (
            <HabitDay 
              key={date.toString()} 
              date={date}
              amount={dayInSummary?.amount} 
              completed={dayInSummary?.completed} 
            />
          )
        })}
        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div key={i} className='h-10 w-10 bg-gray-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed' />
          )
        })}
      </div>
    </div>
  );
}
