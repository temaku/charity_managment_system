import 'package:charity_management/Data/Models/user_model.dart';
import 'package:flutter/cupertino.dart';

class AuthenticationModel{
  String status;
  String token;
  UserModel user;

  AuthenticationModel({@required this.status, @required this.token, @required this.user});

  factory AuthenticationModel.fromJson(Map<String, dynamic> parsedJson){
    return AuthenticationModel(
      status: parsedJson['status'],
      token: parsedJson['token'],
      user: UserModel.fromJson(parsedJson['user'])
      );

  }


}