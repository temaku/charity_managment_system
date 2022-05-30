import 'dart:convert';
import 'dart:io';

import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
class CharityDataProvider {
  final _baseUrl ='https://charity-manager-api.herokuapp.com/api';
  final http.Client httpClient;
  
  CharityDataProvider({@required this.httpClient});

  Future<List<CharityModel>> getAllCharitys(String token) async{
    final response = await httpClient.get("$_baseUrl/v1/charities",
            headers: <String, String>{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer $token',
             // HttpHeaders.authorizationHeader: '$token'

            }
    );

    if(response.statusCode == 200){
      final charitys = jsonDecode(response.body)['data'] as List;
      return charitys.map((charity) => CharityModel.fromJson(charity)).toList();
    }
    else{
      throw Exception("failed to fetch charitys");
    }

  }

}