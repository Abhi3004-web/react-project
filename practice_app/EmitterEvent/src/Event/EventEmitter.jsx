class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Set();
    }

    this.events[eventName].add(callback);

    // return unsubscribe function (optional improvement)
    return () => this.off(eventName, callback);
  }

  // Unsubscribe
  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName].delete(callback);

    // clean empty events
    if (this.events[eventName].size === 0) {
      delete this.events[eventName];
    }
  }

  // Emit event
  emit(eventName, payload) {
    const listeners = this.events[eventName];

    if (!listeners || listeners.size === 0) {
      console.warn(`No listeners registered for event: ${eventName}`);
      return;
    }

    listeners.forEach((listener) => {
      try {
        listener(payload);
      } catch (error) {
        console.error(`Error in listener for event ${eventName}`, error);
      }
    });
  }
}

export const eventEmitter = new EventEmitter();