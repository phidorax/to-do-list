export class LocalStorage {
    constructor() {
        if (!LocalStorage.instance) {
            LocalStorage.instance = this;
        }
        this._tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        return LocalStorage.instance;
    }

    addTask(task) {
        this._tasks.push(task);
        this.updateStorage();
    }

    removeTask(task) {
        this._tasks = this._tasks.filter(t => t.id !== task.id);
        this.updateStorage();
    }

    updateTask(task) {
        const index = this._tasks.findIndex(t => t.id === task.id);
        this._tasks[index] = task;
        this.updateStorage();
    }

    updateStorage() {
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }

    getTask(id) {
        console.log(this._tasks)
        var t = this._tasks.find(function (t) {
            console.log('t.id',t.id, 'id', id)
            return t.id == id;
        });
        console.log('t',t)
        return t;
    }

    getTasks() {
        return this._tasks;
    }
}

export const storage = new LocalStorage();
