
import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/screens/Home/charity_detail/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CharityDetail extends StatelessWidget {
  static const routeName = 'CharityDetail';
   CharityModel charity;
   CharityDetail(this.charity);

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
      body: Body(charity),
    );
  }
}