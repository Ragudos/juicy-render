type Subscriber<T> = (data: T) => void;

interface ObserverInterface<T> {
    subscribers: Map<number, Subscriber<T>>;
    subscribers_length: number;
    data: T;

    subscribe(subscriber: Subscriber<T>): Subscriber<T>;
}

class Observer<T> implements ObserverInterface<T> {
    subscribers: Map<number, Subscriber<T>>;
    subscribers_length: number;
    data: T;
    
    constructor(initial_data?: T) {
        this.subscribers = new Map();
        this.subscribers_length = 0;
        this.data = initial_data;
    }

    subscribe(subscriber: Subscriber<T>): () => void {
        const subscriber_id = this.subscribers_length++;
        
        this.subscribers.set(subscriber_id, subscriber);

        return () => {
            this.subscribers.delete(subscriber_id);
            this.subscribers_length -= 1;
        };
    }

    update(data: T): void {
        this.data = data;

        for (const subscriber of this.subscribers.values()) {
            subscriber(data);
        }
    }
}

type EventListenerType<K> = <K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => void;

interface StateInterface<T, K> {
    element: Element;
    method: [EventListenerType<K>, K];
    state: T;
    observer: Observer<T>;
}

class State<T, K extends keyof DocumentEventMap> implements StateInterface<T, K> {
    element: Element;
    method: [EventListenerType<K>, K];
    state: T;
    observer: Observer<T>;

    constructor(
        element: Element,
        method: [EventListenerType<K>, K],
        initial_state: T,
        action: (update: (new_state: T | ((prev_data: T) => T)) => void) => void,
    ) {
        this.element = element;
        this.method = method;
        this.state = initial_state;
        this.observer = new Observer(initial_state);

        const trigger = this.method[0];
        const trigger_type = this.method[1];
        
        if (typeof initial_state == "string") {
            element.textContent = initial_state;
        } else if (typeof initial_state == "number") {
            element.textContent = initial_state + "";
        }

        trigger(trigger_type, () => {
            action(this.update);
            this.observer.update(this.state);
        });
    }

    update = (new_state: T | ((prev_data: T) => T)): void =>  {
        console.log(new_state);

        if (typeof new_state == "function") {
            const new_state_function = new_state as (prev_data: T) => T;

            this.state = new_state_function(this.state);
        } else {
            this.state = new_state;
        }
    };
}

const btn = document.getElementById("button");

const state = new State(
    btn,
    [btn.addEventListener, "click"],
    0,
    (fn) => {
        fn((prev_data) => {
           return prev_data + 1;
        });
    }
);

state.observer.subscribe((data) => {
    btn.textContent = data + "";
});
