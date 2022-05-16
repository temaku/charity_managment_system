import 'package:charity_management/screens/Profile/components/body.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Profile extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("PROFILE", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),),
      ),
      body: Body(),

    );
  }
}