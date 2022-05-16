import 'package:charity_management/screens/Event/components/event_card.dart';
import 'package:flutter/cupertino.dart';

class Body extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return ListView.builder(
   
      itemCount: 10,
      itemBuilder: (BuildContext context, int index){
      
        return EventCard();
      }
      );
  }
}