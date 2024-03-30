export class LocalStorage {
    constructor() {
        if (!LocalStorage.instance) {
            LocalStorage.instance = this;
        }
        this._tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        this._theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
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
        // Si la date n'est pas une chaîne de caractères
        if (typeof task.deadline !== 'string') {
            // Transforme la date en chaîne de caractères
            task.deadline = task.deadline.toISOString().slice(0, 10);
        }
        // Add title if not present
        if (!task.title) {
            task.title = '';
        }
        // Add completed if not present
        if (!task.completed) {
            task.completed = false;
        }
        task.changeDate = null;
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
        // Si la date n'est pas une chaîne de caractères
        if (typeof task.deadline !== 'string') {
            // Convertion object vers date
            const dateObject = new Date(task.deadline);
            // Transforme la date en chaîne de caractères
            let month = dateObject.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            let day = dateObject.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            task.deadline = dateObject.getFullYear() + '-' + month + '-' + day;
        }
        this._tasks[index] = task;
        this.updateStorage();
    }

    updateStorage() {
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
        localStorage.setItem('theme', this._theme);
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

    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            throw Error('Unknown theme: ' + theme);
        }
        this._theme = theme;
        this.updateStorage();
    }

    getTheme() {
        return this._theme;
    }
}

export const storage = new LocalStorage();
