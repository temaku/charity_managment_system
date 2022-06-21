import 'package:equatable/equatable.dart';

class TaskModel extends Equatable{
  String id;
  String volunteer;
  String task;
  String description;
  String status;
  String assignedAt;
  

  TaskModel({this.id, this.task, this.description, this.volunteer, this.status, this.assignedAt});


  factory TaskModel.fromJson(Map<String,dynamic> parsedJson) {
    return TaskModel(
      id: parsedJson['_id'],
      task: parsedJson['task'],
      description: parsedJson['description'],
      volunteer: parsedJson['volunteer'],
      status: parsedJson['status'],
      assignedAt: parsedJson['assignedAt']
     

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,task,description,volunteer,status,assignedAt];
}