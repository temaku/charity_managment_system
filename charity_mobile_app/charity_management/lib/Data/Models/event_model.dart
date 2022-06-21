import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

class EventModel extends Equatable{
  String id;
  String title;
  String description;
  String date;
  String organizer;
  String image;

  EventModel({this.id, this.title, this.description, this.image, this.date, this.organizer});


  factory EventModel.fromJson(Map<String,dynamic> parsedJson) {
    return EventModel(
      id: parsedJson['id'],
      title: parsedJson['title'],
      description: parsedJson['description'],
      date: parsedJson['date'],
      organizer: parsedJson['organizer'],
      image: parsedJson['image'],
     

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,title,description,date,organizer];
}