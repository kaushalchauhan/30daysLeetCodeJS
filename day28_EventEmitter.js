// Problem - 2694. Event Emitter
class EventEmitter {
  eventMap = {}; // event -> []
  subscribe(eventName, callback) {
    if (!this.eventMap.hasOwnProperty(eventName)) {
      this.eventMap[eventName] = new Set();
    }
    this.eventMap[eventName].add(callback);
    return {
      unsubscribe: () => {
        this.eventMap[eventName].delete(callback);
      },
    };
  }
  emit(eventName, args = []) {
    const res = [](this.eventMap(eventName) ?? []).forEach((cb) => cb(...args));
    return res;
  }
}
