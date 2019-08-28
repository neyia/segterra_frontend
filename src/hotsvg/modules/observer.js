class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter( el => el !== observer);
    }
    
    notify(data) {
        this.observers.forEach( observer => observer.update(data));
    }
}

class State extends Subject {
    constructor(data = {}) {
        super();
        this.state = data;
    }
    
    update(data) {
        this.state = {...this.state, data};
        this.notify(this.state);
    }
    
    get() {
        return this.state;
    }
}

class Observer {
    update() {};
}

class SvgObserver extends Observer {
    constructor(el) {
        super();
        this.element = el;
    }
    
    update(state) {
        this.element.render(state);
    }
}

export {
    State,
    SvgObserver
};