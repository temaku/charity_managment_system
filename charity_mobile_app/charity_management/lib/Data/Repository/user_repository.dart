import 'package:charity_management/Data/DataProvider/authentication_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/user_dataprovider.dart';
import 'package:charity_management/Data/Models/history_model.dart';
import 'package:charity_management/Data/Models/user_model.dart';
import 'package:flutter/cupertino.dart';

class UserRepository{
  final UserDataProvider dataProvider;
  
  //final UserModel userModel;
  UserRepository({@required this.dataProvider})
      : assert(dataProvider != null);

  Future<UserModel> getSingleUser() async{
    //dynamic  user;
    final user = await dataProvider.getSingleUser();
    //final user = authenticationDataProvider.LogIn('Markan', 'pass1234');
    return UserModel.fromJson(user['user']);
    

  }

    Future<void> createUser(UserModel user) async {
    return await dataProvider.createUser(user);
  }

  Future<List<HistoryModel>> getUserHistory(String id) async{
    //dynamic  user;
    return await dataProvider.getUserHistory(id);
    
    

  }

  
}