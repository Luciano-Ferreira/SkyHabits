import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from 'react-native';

import clsx from 'clsx'

import { generateProgressPercentage } from '../utils/generate-progress-percentage';
import dayjs from 'dayjs';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export function HabitDay({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: Props) {
  const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0;
  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today);
  return (
    <TouchableOpacity
      className={clsx('rounded-lg border-2 m-1', {
        ['bg-zinc-900 border-sky-900 '] : amountAccomplishedPercentage === 0,
        ['bg-sky-900 border-sky-700']: amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ['bg-sky-800 border-sky-600']: amountAccomplishedPercentage >= 20 && amountAccomplishedPercentage < 40,
        ['bg-sky-700 border-sky-500']: amountAccomplishedPercentage >= 40 && amountAccomplishedPercentage < 60,
        ['bg-sky-600 border-sky-500']: amountAccomplishedPercentage >= 60 && amountAccomplishedPercentage < 80,
        ['bg-sky-500 border-sky-400']: amountAccomplishedPercentage >= 80,
        ['border-white border-4']: isCurrentDay

      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
