import 'package:equatable/equatable.dart';

class FundraiseModel extends Equatable{
  String id;
  String title;
  String description;
  int amount;
  //String image;

  String createdAt;
  String updatedAt;

  FundraiseModel({this.id, this.title, this.description, this.amount, this.createdAt, this.updatedAt});


  factory FundraiseModel.fromJson(Map<String,dynamic> parsedJson) {
    return FundraiseModel(
      id: parsedJson['id'],
      title: parsedJson['title'],
      description: parsedJson['description'],
      amount: parsedJson['amount'],
      createdAt: parsedJson['createdAt'],
      updatedAt : parsedJson['updatedAt'],

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,title,description,amount,createdAt,updatedAt];
}