import { Component } from '@angular/core';
import { Task } from '../models/task.model'; // Import the Task model

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Complete task 1 description here.',
      reward: 5, // $5 reward
      level: 1,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Complete task 2 description here.',
      reward: 10, // $10 reward
      level: 2,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Complete task 3 description here.',
      reward: 20, // $20 reward
      level: 3,
    },
    // Add more tasks as needed
  ];

  completeTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    alert(`Task "${task.title}" completed! You earned $${task.reward}.`);
  }
  

  constructor() {}
}
