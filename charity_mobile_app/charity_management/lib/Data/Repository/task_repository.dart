import 'package:charity_management/Data/DataProvider/task_dataprovider.dart';
import 'package:charity_management/Data/Models/report_model.dart';
import 'package:charity_management/Data/Models/task_model.dart';
import 'package:flutter/cupertino.dart';

class TaskRepository {
  TaskDataprovider taskDataprovider;
  TaskRepository({@required this.taskDataprovider});

  Future<List<TaskModel>> getAllTasks() async{
    return await taskDataprovider.getAllTasks();
  }

  Future<List<TaskModel>> acceptTask(String id) async{
    return await taskDataprovider.acceptTask(id);
  }

  Future<List<TaskModel>> rejectTask(String id) async{
    return await taskDataprovider.rejectTask(id);
  }

  Future<void> report(ReportModel report) async{
    return await taskDataprovider.report(report);
  }
}