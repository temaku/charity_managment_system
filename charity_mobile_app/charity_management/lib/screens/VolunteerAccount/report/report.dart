import 'package:charity_management/screens/VolunteerAccount/report/components/body.dart';
import 'package:flutter/material.dart';

class Report extends StatelessWidget{
  static const routeName = 'Report';
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("Report", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),),
      ),
      body: Body(),

    );

    
  }
}