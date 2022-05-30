part of 'task_bloc.dart';

abstract class TaskEvent extends Equatable {
  const TaskEvent();

  @override
  List<Object> get props => [];
}

class FetchTask extends TaskEvent{}

class RefreshTask extends TaskEvent{}

class AcceptTask extends TaskEvent{
  String id;
  AcceptTask(this.id);
}

class RejectTask extends TaskEvent{
  String id;
  RejectTask(this.id);
}