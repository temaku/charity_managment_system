import 'package:charity_management/screens/Donate/components/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Donate extends StatelessWidget {
  static const routeName = 'Donate';
  const Donate({ Key key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
   // extendBodyBehindAppBar: true,
      
      appBar: AppBar(
        systemOverlayStyle: SystemUiOverlayStyle.light,
        
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
       // title: Text("Home", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 17),),

      ),
      body: Body(),
    );
  }
}