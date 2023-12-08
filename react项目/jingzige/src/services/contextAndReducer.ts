import axios from 'axios'
import { TaskType } from '@/pages/components/contextAndReducerOriginal/index.d'

const initialTasks: TaskType[] = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false },
];

export async function fetchTaskList() {
  return Promise.resolve({
    code: 200,
    data: initialTasks
  })
}