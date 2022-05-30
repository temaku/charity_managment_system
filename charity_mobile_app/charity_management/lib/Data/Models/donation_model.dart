import 'package:equatable/equatable.dart';

class DonationModel extends Equatable{
  String id;
  String username;
  String phone;
  String DonationOption;
  String amount;
  String userId;

  String password;
  

  DonationModel({this.id, this.username, this.phone, this.DonationOption, this.amount, this.password, this.userId});


  // factory DonationModel.fromJson(Map<String,dynamic> parsedJson) {
  //   return Donation(
  //     id: parsedJson['id'],
  //     title: parsedJson['title'],
  //     description: parsedJson['description'],
  //     amount: parsedJson['amount'],
  //     createdAt: parsedJson['createdAt'],
  //     updatedAt : parsedJson['updatedAt'],

  //   );
  // }

  @override
  // TODO: implement props
  List<Object> get props => [id,username,phone,amount,password,DonationOption];
}