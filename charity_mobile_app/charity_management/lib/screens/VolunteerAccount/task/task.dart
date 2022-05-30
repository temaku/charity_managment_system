import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/screens/VolunteerAccount/task/components/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Task extends StatelessWidget {
//  static const routeName = 'History';
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return BlocBuilder<TaskBloc, TaskState>(
      builder: (context, state) {
        if (state is TaskSuccess){
                
        return ListView.builder(
          itemCount: state.tasks.length,
          itemBuilder: (BuildContext context, int index) {
              return state.tasks[index].status == 'accepted'? Body(state.tasks[index]) : Container();

            
          },
        );
        }
        return Container();
      },
    );
  }
}
