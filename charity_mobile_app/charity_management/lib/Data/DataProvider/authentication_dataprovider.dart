import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
class AuthenticationDataProvider {
  final _baseUrl = 'https://charity-manager-api.herokuapp.com/api';
  final http.Client httpClient;

  AuthenticationDataProvider({@required this.httpClient});

  Future<dynamic> LogIn(String username, String password) async{
    final response = await httpClient.post(
      "$_baseUrl/v1/auth/login",
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'username' : '$username',
        'password' : '$password'
      }),
      );

    if (response.statusCode == 200){
      return jsonDecode(response.body);
    }else{
      throw Exception("user Anauthenticated the reason tell ");
    }
  }


}

