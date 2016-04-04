export interface Task {
  task: string,
  isDone: boolean,
  id: number
}

export interface LogMessage{
  task: Task,
  ts: Date,
  comment: string
}

export class TaskService {
  items: Array<Task> = [];
  logs: Array<LogMessage> = [];
  add(item: Task) {
    item.id = this._getUniqueNumber();
    this._logComment('added', item);
    return this.items.push(item);
  }

  _getUniqueNumber() {
    var max = 30;
    var min = 0;
    var idx = -1;
    do{
      idx = Math.floor(Math.random()*max + min);
    }
    while(this.items.some(x=> x.id === idx));
    return idx;
  }

  remove(id: number) {
    var idx = -1;
    this.items.some( (c, i) => {
      let retVal = (c.id === id);
      if (retVal) {
        idx = i;
      }
      return retVal;
    });
    if (idx === -1) {
      throw Error('Does not exist');
    }
    var task = this.items.splice(idx, 1);
    this._logComment('removed', task[0]);
  }

  _logComment(msg: string, task: Task) {
    this.logs.push({
      task: task,
      ts: new Date(),
      comment: msg
    });
  }
}
