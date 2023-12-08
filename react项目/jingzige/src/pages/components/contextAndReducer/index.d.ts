export interface TaskType {
  id: number,
  text: string,
  done: boolean,
  edit?: boolean
}
export interface TaskListProps {
  tasks: TaskType[],
  onChangeTask: (params: TaskType) => void,
  onDeleteTask: (params: number) => void
}