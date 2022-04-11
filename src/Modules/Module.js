export class Module { 
    constructor(title) { 
        this.title = title;
        this.id = Math.random();
    }
    id;
    title;
    status = false;
}
