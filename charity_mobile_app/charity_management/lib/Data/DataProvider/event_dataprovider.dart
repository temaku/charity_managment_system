import 'dart:convert';

import 'package:charity_management/Data/Models/event_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
class EventDataprovider {
  final _baseUrl = 'https://charity-manager-api.herokuapp.com/api';

  final http.Client httpClient;
  EventDataprovider({@required this.httpClient});

  Future<List<EventModel>> getAllEvents() async{
    final response = await httpClient.get(
      "$_baseUrl/v1/events",
      headers: <String, String>{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ${AuthenticationRepository.storage}',
             // HttpHeaders.authorizationHeader: '$token'
            }
      );

    if(response.statusCode == 200){
      final events = jsonDecode(response.body)['data'] as List;
      return events.map((event) => EventModel.fromJson(event)).toList();
    }else{
      throw Exception("failed to fetch events");
    }
  }


}