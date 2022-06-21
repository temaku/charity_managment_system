import 'package:bloc/bloc.dart';
import 'package:charity_management/Data/Models/report_model.dart';
import 'package:charity_management/Data/Models/task_model.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart';

part 'task_event.dart';
part 'task_state.dart';

class TaskBloc extends Bloc<TaskEvent, TaskState> {
  TaskRepository taskRepository;
  TaskBloc({@required this.taskRepository}) : super(TaskInitial());

  @override
  Stream<TaskState> mapEventToState(TaskEvent event) async* {
    // TODO: implement mapEventToState
    if(event is FetchTask){
      yield TaskLoading();
      try {

        final response = await taskRepository.getAllTasks();
        yield  TaskSuccess(response);
        
      } catch (e) {
        yield TaskFailure();
      }
  }

  // if (event is AcceptTask){
  //   try {
  //     final response = await taskRepository.acceptTask(event.id);
  //     yield TaskAccepted();
  //     //yield 
      
  //   } catch (e) {
  //     yield TaskFailure();
  //   }
  // }

  // if (event is RejectTask){
  //   try {
  //     final response = await taskRepository.rejectTask(event.id);
  //     yield TaskSuccess(response);
      
  //   } catch (e) {
  //     yield TaskFailure();
  //   }
  // }

  if( event is ReportTask){
    yield ReportLoading();
    try {
      final response = await taskRepository.report(event.report);
      yield ReportSuccess();
      
    } catch (e) {
      yield ReportFailed();
    }
  }


}
}




class ReportBloc extends Bloc<TaskEvent, TaskState> {
  TaskRepository taskRepository;
  ReportBloc({@required this.taskRepository}) : super(TaskInitial());

  @override
  Stream<TaskState> mapEventToState(TaskEvent event) async* {
    // TODO: implement mapEventToState
   

  if( event is ReportTask){
    yield ReportLoading();
    try {
      final response = await taskRepository.report(event.report);
      yield ReportSuccess();
      
    } catch (e) {
      yield ReportFailed();
    }
  }


}
}


