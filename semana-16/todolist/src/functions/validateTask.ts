import { Task } from "../types";
import { selectAllTasks } from "../data/task/selectAllTasks";

export async function checkforTaskId(id: string): Promise<void> {
  const allTasks: Task[] = await selectAllTasks();

  const taskIdExists: Task | undefined = allTasks.find(
    task => task.id === Number(id)
  );

  if (!taskIdExists) {
    throw new Error("Task ID not found");
  }
}
