part of 'task_bloc.dart';

abstract class TaskState extends Equatable {
  const TaskState();
  
  @override
  List<Object> get props => [];
}

class TaskInitial extends TaskState {}

class TaskLoading extends TaskState{}

class TaskSuccess extends TaskState{
  List<TaskModel> tasks;
  TaskSuccess(this.tasks);

  @override
  // TODO: implement props
  List<Object> get props => [tasks];
}
class TaskFailure extends TaskState{}

class ReportLoading extends TaskState{}

class ReportSuccess extends TaskState{}

class ReportFailed extends TaskState{}
