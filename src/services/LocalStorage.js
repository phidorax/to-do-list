export class LocalStorage {
    constructor() {
        if (!LocalStorage.instance) {
            LocalStorage.instance = this;
        }
        this._tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        return LocalStorage.instance;
    }

    addTask(task) {
        // Check if id is present
        if (!task.id) {
            // Generate a new id with the maximum id + 1
            task.id = this._tasks.reduce((max, t) => t.id > max ? t.id : max, 0) + 1;
        } else if (typeof task.id === 'string') {
            task.id = parseInt(task.id);
        }
        // Check if id is present
        if (this._tasks.find(t => t.id === task.id)) {
            this.updateTask(task);
            return;
        }
        // Keep only date part of deadline
        task.deadline = task.deadline.format('YYYY-MM-DD');
        // Add title if not present
        if (!task.title) {
            task.title = '';
        }
        // Add completed if not present
        if (!task.completed) {
            task.completed = false;
        }
        this._tasks.push(task);
        this.updateStorage();
    }

    removeTask(task) {
        this._tasks = this._tasks.filter(t => t.id !== task.id);
        this.updateStorage();
    }

    updateTask(task) {
        const index = this._tasks.findIndex(t => t.id === task.id);
        // Add title if not present
        if (!task.title) {
            task.title = '';
        }
        // Add completed if not present
        if (!task.completed) {
            task.completed = false;
        }
        this._tasks[index] = task;
        this.updateStorage();
    }

    updateStorage() {
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }

    getTask(id) {
        // If id is string, convert it to number
        if (typeof id === 'string') {
            id = parseInt(id);
        }
        return this._tasks.find(function (t) {
            return t.id === id;
        });
    }

    getTasks() {
        return this._tasks;
    }
}

export const storage = new LocalStorage();
