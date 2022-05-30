import 'package:charity_management/Data/Models/task_model.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Body extends StatelessWidget {
 // TaskModel task;
 // Body(this.task);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return SingleChildScrollView(
      child: Container(
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
               "task name is",
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
                   // task.description,
                   "the discription of this task is for yo to do the don do dis to me yemie ye hind actor id on ove all tiktok the discription of this task is for yo to do the don do dis to me yemie ye hind actor id on ove all tiktok",
                     style: TextStyle(
                //  fontSize: 23,
                    fontWeight: FontWeight.w300,
                ),
              ),
            ),
    
            Container(
              padding: EdgeInsets.all(8.0),
              height: 150,
              child: TextField(
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
                             // BlocProvider.of<TaskBloc>(context).add(AcceptTask(task.id)); 
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
    
    
    
    
    
    
          ],
        ),
      ),
    );
  }
}
