import 'package:charity_management/Data/DataProvider/event_dataprovider.dart';
import 'package:charity_management/Data/Models/event_model.dart';
import 'package:flutter/cupertino.dart';

class EventRepository {
  EventDataprovider eventDataprovider;
  EventRepository({@required this.eventDataprovider});


  Future<List<EventModel>> getAllEvents() async{
    return await eventDataprovider.getAllEvents();
  }
}