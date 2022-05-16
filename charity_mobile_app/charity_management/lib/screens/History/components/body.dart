import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Body extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      margin: EdgeInsets.only(top: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 40,
            width: double.infinity,
            padding: EdgeInsets.only(left: 10),
             child: Text(
              'MONDAY, MAY 12',
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
             ),
             alignment: Alignment.centerLeft,

            decoration: BoxDecoration(
              color: Colors.grey[300] ),
            
          ),
        
      Card(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ListTile(
              //leading: Icon(Icons.money),
              title: Text('Mekedonia charity'),
              subtitle: Text('Gubznayen nigesbet eske chika eske shbet kberbgn yene geta'),
            ),

        
               Container(
               // width: MediaQuery.of(context).size.width * 0.6,
                height: MediaQuery.of(context).size.height * 0.1,
                child: Card(
                  //elevation: 10,
                  
                  child: Row(
                    children: [
                      SizedBox(width:20),
                      Column(
                        children: [
                          Container(child: Text('Donation Amount'), 
                          margin: EdgeInsets.all(10),
                          ),
                          Container(child: Text('500', style: TextStyle(color:Colors.blue),))
                        ],
                      ),

                      SizedBox(width: 50),

                      Column(
                        children: [
                          Container(child: Text('Payment Type'),
                          margin: EdgeInsets.all(10),),
                          Container(child: Text('Tele Birr', style: TextStyle(color:Colors.blue),)),
                        ],
                      )

                    ],)
                ),
              
            ),

             Container(
               padding: EdgeInsets.only(left: 15),
               child: Text('Donation Time - 11:45',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                ),
             ),
             SizedBox(height:10)
            
          ],
        ),
      )
        ]
      ),
    );
  }
}