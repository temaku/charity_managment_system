import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/task_accept_reject_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/taskaccrej_state.dart';
import 'package:charity_management/Data/DataProvider/task_dataprovider.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:charity_management/screens/VolunteerAccount/task/pending/components/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:http/http.dart' as http;

class Pending extends StatelessWidget {
//  static const routeName = 'History';
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return BlocProvider(
  //    lazy: false,
      create: (context) => TaskAcceptRejectBloc(taskRepository: TaskRepository(taskDataprovider: TaskDataprovider(httpClient: http.Client()))),
      lazy: false,
      child: BlocListener<TaskAcceptRejectBloc, TaskAcceptRejectState>(
        listener: (context, state){
          if (state is TaskAccepted) {
            BlocProvider.of<TaskBloc>(context).add(FetchTask());
            return ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text("Task Accepted")));
          }

          if (state is TaskRejected) {
            BlocProvider.of<TaskBloc>(context).add(FetchTask());
            return ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text("Task Rejected")));
          }

          if (state is TaskAcceptFailure) {
            return ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text("Task Accept operation Failed")));
          }
          if (state is TaskRejectFailure) {
            return ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text("Task Reject operation Failed")));
          }

          //update ui when task is accepted or rejected
          // if(state is TaskAccepted || state is TaskRejected){
          //   BlocProvider.of<TaskBloc>(context).add(FetchTask());
          // }


          

        },
        child: BlocConsumer<TaskBloc, TaskState>(
        listener: (context, state) {
          
        },
        //buildWhen: (previous, current) => current is TaskSuccess,
        builder: (context, state) {
          // if(state is TaskLoading){
          //   return Center(child: CircularProgressIndicator());
          // }
          if (state is TaskSuccess) {
            return ListView.builder(
              itemCount: state.tasks.length,
              itemBuilder: (BuildContext context, int index) {
                return 
                //Body(state.tasks[index]);
                  state.tasks[index].status == 'pending'? Body(state.tasks[index]) : Container();
              },
            );
          }
          if (state is TaskFailure) {
            return Text("this is your problem");
          }

          


          return Center(child: CircularProgressIndicator());
        },
        
      ),
        ),
    );
  }
}
