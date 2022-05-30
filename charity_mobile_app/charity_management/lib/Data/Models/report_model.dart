import 'package:equatable/equatable.dart';

class ReportModel extends Equatable{
  String id;
  String volunteerid;
  String title;
  String description;
  String status;
  String reportedAt;
  

  ReportModel({this.id, this.volunteerid, this.title, this.description, this.status, this.reportedAt});


  factory ReportModel.fromJson(Map<String,dynamic> parsedJson) {
    return ReportModel(
      id: parsedJson['id'],
      title: parsedJson['task'],
      description: parsedJson['description'],
      volunteerid: parsedJson['volunteerId'],
      status: parsedJson['status'],
      reportedAt: parsedJson['reportedAt']
     

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,title,description,volunteerid,status,reportedAt];
}