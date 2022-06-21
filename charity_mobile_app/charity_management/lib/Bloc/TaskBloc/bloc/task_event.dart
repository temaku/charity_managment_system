part of 'task_bloc.dart';

abstract class TaskEvent extends Equatable {
  const TaskEvent();

  @override
  List<Object> get props => [];
}

class FetchTask extends TaskEvent{}

class RefreshTask extends TaskEvent{}

class ReportTask extends TaskEvent{
  ReportModel report;
  ReportTask(this.report);
}

