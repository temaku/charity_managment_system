import 'package:charity_management/Data/Models/task_model.dart';
import 'package:flutter/material.dart';

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

        
             

             Row(
               mainAxisAlignment: MainAxisAlignment.spaceBetween,
               children: [
                 Container(
                   padding: EdgeInsets.only(left: 15),
                   child: Text('Assigned Time - ${task.assignedAt}',
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
                      onPressed: () {},
                    //  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                      color: Colors.blue,
                      child: Text(
                        "Report",
                        style: TextStyle(color: Colors.white, fontSize: 13),
                      )),
                ),
              ),
               ],
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