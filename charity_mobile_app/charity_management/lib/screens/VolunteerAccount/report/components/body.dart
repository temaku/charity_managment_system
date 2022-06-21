import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/Data/DataProvider/task_dataprovider.dart';
import 'package:charity_management/Data/Models/report_model.dart';
import 'package:charity_management/Data/Models/task_model.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:http/http.dart' as http;

class Body extends StatelessWidget {
  TaskModel task;
  Body(this.task);
  ReportModel report = ReportModel(); // TaskModel task;
 // Body(this.task);
 final _titleController = TextEditingController();
 final _descriptionController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return SingleChildScrollView(
      child: BlocProvider(lazy:false, create: (context) => ReportBloc(taskRepository: TaskRepository(taskDataprovider: TaskDataprovider(httpClient: http.Client()))),
      child: 
      Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            
    
    
    
            Container(
              margin: EdgeInsets.fromLTRB(10, 15, 10, 0),
              child: Text(
                'You are assigned to do!',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.w300,
                  
                ),
              ),
            ),
    
            SizedBox(height: 20,),
    
    
            
    
    
             
    
           
    
    
            Container(
              margin: EdgeInsets.fromLTRB(10, 10, 10, 0),
              child: Text(
               // task.task,
               task.task,
                style: TextStyle(
                  fontSize: 23,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
    
    
            Container(
             // height: 180,
              decoration: BoxDecoration(
                //border: Border.all(color: Colors.blueAccent)
              ),
              margin: EdgeInsets.fromLTRB(10, 10, 10, 0),
              child: Text(
                    task.description,
                     style: TextStyle(
                //  fontSize: 23,
                    fontWeight: FontWeight.w300,
                ),
              ),
            ),
            SizedBox(height: 50,),

            Padding(
              padding: EdgeInsets.only(left: 8),
              child: Text('Title'),
            ),
            Container(
              padding: EdgeInsets.all(8.0),
              //height: 150,
              child: TextField(
              //  onSubmitted: (value),
                controller: _titleController,
                // expands: true,
                // maxLines: null,
              //  decoration: InputDecoration(border: Border.all(color: Colors.green)),
    
              ),
            ),

            Padding(
              padding: EdgeInsets.all(8),
              child: Text('Report Description'),
            ),
    
            Container(
              
              padding: EdgeInsets.all(8.0),
              height: 150,
              child: TextField(
                controller: _descriptionController,
                expands: true,
                maxLines: null,
              //  decoration: InputDecoration(border: Border.all(color: Colors.green)),
    
              ),
            ),
    
             Align(
               alignment: Alignment.topRight,
               child: Container(
                      padding: EdgeInsets.all(0),
                      
                      alignment: Alignment.topRight,
                      margin: EdgeInsets.only(top: 20, right: 20 ),
                      
                    //  width: MediaQuery.of(context).size.width * 0.4,
                    
                     // height: 30,
                      width: 100,
                      child: ClipRRect(
                        
                        borderRadius: BorderRadius.circular(15),
                        child: FlatButton(
                            onPressed: () {
                              report.id = task.id;
                            
                              report.volunteerid = task.volunteer;
                              report.title = _titleController.text;
                              report.description = _titleController.text;
                              
                             // BlocProvider.of<TaskBloc>(context).add(AcceptTask(task.id)); 
                              BlocProvider.of<ReportBloc>(context).add(ReportTask(report));
                              },
                          //  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                            color: Colors.blue,
                            child: Text(
                              "Report",
                              style: TextStyle(color: Colors.white, fontSize: 13),
                            )),
                      ),
                    ),
             ),

             Center(
               child: BlocConsumer<TaskBloc, TaskState>
               (builder: (context, state){
                 if( state is ReportLoading){
                   return CircularProgressIndicator();
                 }

                 return Container();
               } ,

               listener: (context, state){
                 if(state is ReportSuccess){
                  return ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text("Report Successfully submitted")));
                 }

                 if(state is ReportFailed ){
                   ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Report not Submitted something wrong")));

                 }
               },

              // return Container();
               ),
             ),
     
          ],
        ),
      ),
    )
    );
  }
}
