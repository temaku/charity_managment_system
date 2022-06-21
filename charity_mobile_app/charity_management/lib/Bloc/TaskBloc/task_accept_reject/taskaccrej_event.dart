class TaskAcceptRejectEvent{}

class AcceptTask extends TaskAcceptRejectEvent{
  String id;
  AcceptTask(this.id);
}

class RejectTask extends TaskAcceptRejectEvent{
  String id;
  RejectTask(this.id);
}
