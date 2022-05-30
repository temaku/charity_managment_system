
import 'package:charity_management/screens/Event/components/body.dart';
import 'package:charity_management/screens/Navigation/tabbar.dart';
import 'package:flutter/material.dart';

class Event extends StatelessWidget {
  static const routeName = 'Event';
  const Event({ Key key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("Events", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),),
      ),
      body: Body(),

    );
  }
}