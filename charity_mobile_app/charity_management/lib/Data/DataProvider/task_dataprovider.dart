import 'dart:convert';

import 'package:charity_management/Data/Models/report_model.dart';
import 'package:charity_management/Data/Models/task_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
class TaskDataprovider {
  final _baseUrl = 'https://charity-manager-api.herokuapp.com/api';

  final http.Client httpClient;
  TaskDataprovider({@required this.httpClient});

  Future<List<TaskModel>> getAllTasks() async{
    final response = await httpClient.get(
      "$_baseUrl/v1/tasks",
      headers: <String, String>{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ${AuthenticationRepository.storage}',
             // HttpHeaders.authorizationHeader: '$token'

            }
      );

    if(response.statusCode == 200){
      final tasks = jsonDecode(response.body)['data'] as List;
      return tasks.map((task) => TaskModel.fromJson(task)).toList();
    }else{
      throw Exception("failed to fetch Tasks");
    }
  }

  Future<TaskModel> acceptTask(String id) async{
    final response =await httpClient.patch(
      '$_baseUrl/v1/tasks/$id',
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
      },
      body: jsonEncode(<String, dynamic>{
        'status' : 'accepted',
      })

      );

      if(response.statusCode == 200){
        final task = jsonDecode(response.body)['data'];
        return TaskModel.fromJson(task);
        }else{
      throw Exception("failed to accept Task");
    }
    
  }


  Future<TaskModel> rejectTask(String id) async{
    final response =await httpClient.patch(
      '$_baseUrl/v1/tasks/$id',
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
      },
      body: jsonEncode(<String, String>{
        'status' : 'rejected',
      })

      );

      if(response.statusCode == 200){
        final task = jsonDecode(response.body)['data'];
        return TaskModel.fromJson(task);
        }else{
      throw Exception("failed to reject Task");
    }
    
  }

    Future<void> report(ReportModel report) async{
      final response = await httpClient.post(
        '$_baseUrl/v1/reports',

        headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
        },

        body: jsonEncode(<String, dynamic>{
          'title' : report.title,
          'description' : report.description,
          'volunterId' : report.volunteerid,
        }),

      );

      if(response.statusCode == 201){
        return;
      }
      else{
        throw Exception('failed to create report');
      }
    }


}