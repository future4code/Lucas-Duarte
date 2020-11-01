import { Task, STATUS } from "../types";
import { selectAllTasks } from "../data/task/selectTasks";

export async function checkforTaskId(id: string): Promise<void> {
  const allTasks: Task[] = await selectAllTasks();

  const taskIdExists: Task | undefined = allTasks.find(
    task => task.id === Number(id)
  );

  if (!taskIdExists) {
    throw new Error("Task ID not found");
  }
}

export async function checkIfItIsAValidStatus(status: string): Promise<void> {
  status.toLowerCase();
  if (
    !(
      status === STATUS.TO_DO ||
      status === STATUS.DOING ||
      status === STATUS.DONE
    )
  ) {
    throw new Error(`Status must be "to do", "doing" or "done"`);
  }
}
