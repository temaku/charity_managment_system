import 'package:charity_management/screens/Home/donation_card.dart';
import 'package:flutter/material.dart';

class HomeBody extends StatelessWidget {
  const HomeBody({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
   
      itemCount: 10,
      itemBuilder: (BuildContext context, int index){
      
        return DonationCard();
      }
      );
  }
}

 