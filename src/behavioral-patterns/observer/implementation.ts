// PUSH MODEL

class Subject {
  observers: Observer[];

  attach(observer: Observer) {
    if (!~this.observers.indexOf(observer)) this.observers.push(observer);
  }
  detach(observer: Observer) {
    const indexOfObserver = this.observers.indexOf(observer);

    if (~indexOfObserver) delete this.observers[indexOfObserver];
  }

  notify() {
    for (const observer of this.observers) observer.update(this);
  }
}

abstract class Observer {
  abstract update(subject: Subject): void
}

class ClockTimer extends Subject {

  getHour() {
    return 0;
  }
  getMinute() {
    return 0;
  }
  getSecond() {
    return 0;
  }

  tick() {
    // atualiza o estado interno de manutenção do tempo

    this.notify();
  }
}

class DigitalClock extends Observer {

  private subject: ClockTimer;

  update(subject: Subject) {
    if (this.subject === subject) {
      this.draw();
    }
  }

  draw() {
    // obtém os novos valores do subject

    const hour = this.subject.getHour();

    //etc.

    //desenha o relógio digital
  }
}
