

import 'package:charity_management/screens/Fundraise/fundraiseAdd/components.dart/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class AddFundraise extends StatelessWidget {
  static const routeName = 'AddFundraise';
   //FundraiseModel raise;
   //AddFundraise(this.raise);

  @override
  Widget build(BuildContext context) {
   // final  raise = ModalRoute.of(context).settings.arguments as FundraiseModel;
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