import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/screens/Fundraise/fundrais_detail/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class FundraiseDetail extends StatelessWidget {
  static const routeName = 'FundraiseDetail';
   FundraiseModel raise;
   FundraiseDetail(this.raise);

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
      body: Body(raise),
    );
  }
}