interface StateManager<T> {
  getState(): T
  setState(state: T): void
}

interface Observer<T> {
  observerState: T

  update(): void
}

interface SubjectState {
  name: string,
}

abstract class Subject {
  observers: Observer<SubjectState>[];

  attach(observer: Observer<SubjectState>): void {

    if (!~this.observers.indexOf(observer)) this.observers.push(observer);
  }

  detach(observer: Observer<SubjectState>): void {
    const indexOfObserver = this.observers.indexOf(observer);

    if (~indexOfObserver) delete this.observers[indexOfObserver];
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}


class ConcreteSubject extends Subject implements StateManager<SubjectState> {

  private state: SubjectState;

  getState(): SubjectState {
    return this.state;
  }

  setState(state: SubjectState): void{
    this.state = state;

    this.notify();
  }
}

class ConcreteObserver implements Observer<SubjectState> {

  subject: StateManager<SubjectState>;
  observerState: SubjectState;

  update() {
    this.observerState = this.subject.getState();
  }
}

