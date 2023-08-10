//Queue Handle
class Queue {
  constructor() {
    this.tasks = [];
  }
  addQueue(task) {
    this.tasks.push(task);
  }
  process() {
    return new Promise((resolve) => {
      let randTime = Math.floor(Math.random() * 10) + 1;
      if (this.tasks.length > 0) {
        setTimeout(() => {
          let item = this.tasks.shift();
          console.log(`Queue ${item} done in ${randTime} seconds`);
          resolve(this.tasks);
        }, randTime * 1000);
      }
    });
  }
  async run() {
    while (this.tasks.length > 0) {
      await this.process();
    }
  }
}
module.exports = Queue;
