const Queue = require('./queue')

const task = new Queue()

task.addQueue('Task1')
task.addQueue('Task2')
task.addQueue('Task3')
task.addQueue('Task4')

console.log(task.tasks)
task.run()