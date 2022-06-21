import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/task_accept_reject_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/task_accept_reject/taskaccrej_event.dart';
import 'package:charity_management/Data/Models/task_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Body extends StatelessWidget{
  TaskModel task;
  Body(this.task);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
     margin: EdgeInsets.only(top: 20),
      child: Card(
        elevation: 15,
        child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 40,
            width: double.infinity,
            padding: EdgeInsets.only(left: 10),
             child: Text(
              'MONDAY, MAY 12',
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, 
              //color: Colors.blue
              ),
             ),
             alignment: Alignment.centerLeft,

            decoration: BoxDecoration(
              color: Colors.grey[350] ),
            
          ),
        
       Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ListTile(
              //leading: Icon(Icons.money),
              title: Text(task.task,style: TextStyle(color: Colors.blue),),
              subtitle: Text(
                task.description,
                              style: TextStyle(
                                fontSize: 12
                              ),),
            ),

        

             Padding(
               padding: const EdgeInsets.only(top: 8),
               child: Row(
                 
                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
                 children: [
                   Container(
                     padding: EdgeInsets.only(left: 15),
                     child: Text('Assigned Time - 11:45',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                      ),
                   ),


                   Container(
                  padding: EdgeInsets.all(0),
                  //margin: EdgeInsets.only(top: 70, left: 30),
                  
                //  width: MediaQuery.of(context).size.width * 0.4,
                
                  height: 30,
                  width: 100,
                  child: ClipRRect(
                    
                    borderRadius: BorderRadius.circular(15),
                    child: FlatButton(
                        onPressed: () { BlocProvider.of<TaskAcceptRejectBloc>(context).add(AcceptTask(task.id)); },
                      //  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                        color: Colors.blue,
                        child: Text(
                          "Accept",
                          style: TextStyle(color: Colors.white, fontSize: 13),
                        )),
                  ),
                ),

                Container(
                  padding: EdgeInsets.all(0),
                  //margin: EdgeInsets.only(top: 70, left: 30),
                  
                //  width: MediaQuery.of(context).size.width * 0.4,
                
                  height: 30,
                  width: 100,
                  child: ClipRRect(
                    
                    borderRadius: BorderRadius.circular(15),
                    child: FlatButton(
                        onPressed: () {BlocProvider.of<TaskAcceptRejectBloc>(context).add(RejectTask(task.id));},
                      //  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                        color: Colors.red,
                        child: Text(
                          "Reject",
                          style: TextStyle(color: Colors.white, fontSize: 13),
                        )),
                  ),
                ),
                 ],
               ),
             ),
             SizedBox(height:10)
            
          ],
        ),


        
      
        ]
        )
      ),
    );
  }
}