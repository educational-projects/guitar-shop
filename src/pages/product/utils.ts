import dayjs from 'dayjs';
import { Comment } from '../../types/guitar';

require('dayjs/locale/ru');

export const getFormatDate = (date: string, format: string): string => dayjs(date).locale('ru').format(format);

export const getSortedUpDays = (arr: Comment[]): Comment[] => arr.slice().sort((a, b) => (dayjs(b.createAt).isAfter(dayjs(a.createAt)) ? 1 : -1));
