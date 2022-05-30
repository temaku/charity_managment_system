import 'package:equatable/equatable.dart';

class EventModel extends Equatable{
  String id;
  String title;
  String description;
  String date;
  String organizer;

  EventModel({this.id, this.title, this.description, this.date, this.organizer});


  factory EventModel.fromJson(Map<String,dynamic> parsedJson) {
    return EventModel(
      id: parsedJson['id'],
      title: parsedJson['title'],
      description: parsedJson['description'],
      date: parsedJson['date'],
      organizer: parsedJson['organizer'],
     

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,title,description,date,organizer];
}