
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/taskaccrej_event.dart';
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/taskaccrej_state.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class TaskAcceptRejectBloc extends Bloc<TaskAcceptRejectEvent, TaskAcceptRejectState> {
  TaskRepository taskRepository;
  TaskAcceptRejectBloc({@required this.taskRepository}) : super(TaskAcceptRejectInitial());

  @override
  Stream<TaskAcceptRejectState> mapEventToState(TaskAcceptRejectEvent event) async* {
    // TODO: implement mapEventToState


  if (event is AcceptTask){
    try {
      final response = await taskRepository.acceptTask(event.id);
      yield TaskAccepted();
      //yield 
      
    } catch (e) {
      yield TaskAcceptFailure();
    }
  }

  if (event is RejectTask){
    try {
      final response = await taskRepository.rejectTask(event.id);
      yield TaskRejected();
      
    } catch (e) {
      yield TaskRejectFailure();
    }
  }


}
}