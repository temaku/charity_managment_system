import 'package:charity_management/screens/History/components/body.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class History extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("HISTORY", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),),
      ),
      body: ListView.builder(
        itemCount: 5,
        itemBuilder: (BuildContext context, int index){
          return Body();
        } ,

    ),

    );
  }
}