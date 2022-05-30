import 'dart:convert';

import 'package:charity_management/Data/Models/user_model.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
class UserDataProvider{
  final _baseUrl = 'https://charity-manager-api.herokuapp.com/api';
  final http.Client httpClient;

  UserDataProvider({@required this.httpClient});

  Future<Map<String, dynamic>> getSingleUser() async{
   // final response = await httpClient.get('$_baseUrl/v1/users');

   final response = await httpClient.post(
      "$_baseUrl/v1/auth/login",
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'username' : 'Markan',
        'password' : 'pass1234'
      }),
      );



    if(response.statusCode == 200){
      final user = jsonDecode(response.body);
      return user;
    }
    else{
      throw Exception('failed to load user');
    }
  }


    Future<void> createUser(UserModel user) async {
    final response = await httpClient.post('$_baseUrl/v1/auth/signup',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      
      },

      body: jsonEncode(<String, dynamic>{
        'username': user.username,
        'email': user.email,
        'phone': user.phone,
        'password': user.role,
        

      }),
    );;

    
    if (response.statusCode != 201){
      throw Exception('Failed to create User.');
    }

  }


}