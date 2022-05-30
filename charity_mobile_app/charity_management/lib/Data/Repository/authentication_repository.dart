import 'package:charity_management/Data/DataProvider/authentication_dataprovider.dart';
import 'package:charity_management/Data/Models/authentication_model.dart';
import 'package:charity_management/Data/Models/user_model.dart';
import 'package:flutter/cupertino.dart';
//import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AuthenticationRepository{
  AuthenticationDataProvider authenticationDataProvider;
  AuthenticationRepository({@required this.authenticationDataProvider})
        :  assert(AuthenticationRepository != null);


 // final storage = FlutterSecureStorage();
  static String storage ='null';
  static String storage2 ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQxYjk0OTY4NmNlOGFjZGYzZjQ2MyIsImlhdCI6MTY1MzQ2MDg4OCwiZXhwIjoxNjYxMjM2ODg4fQ.Y2E0Ct6JgFIcMWgzjSFAqwbAfCd2lXWX2JqcD7XVH0I";
  static UserModel loggedUser = null;

  Future<AuthenticationModel> authenticate(String username, String password) async{
    final response = await authenticationDataProvider.LogIn(username, password);

    //await storage.write(key: 'token', value: AuthenticationModel.fromJson(response).token);
   // loggedUser = AuthenticationModel.fromJson(response);
    
    return AuthenticationModel.fromJson(response);

  }

  Future<void> deleteToken() async{
    //delete from keystore
  //  await storage.delete(key: 'token');
  await Future.delayed(Duration(seconds: 1));
    storage = 'null';
    return;

  }
  //write to keystore
  Future<void> persistToken(String token) async{
    //write to keystore/keychain
  // await storage.write(key: 'token', value: token);
   //await Future.delayed(Duration(seconds: 1));
    storage = token;
    return;

  }
  //rad tooken
  Future<bool> hasToken() async{
    //final token = await storage.read(key: 'token');
    await Future.delayed(Duration(seconds: 1));
    final token = storage;
    if(token != 'null'){
      return true;
    }else{
    return false;
    }
   
  }

  Future<String> getToken() async{
   // final token = await storage.read(key: 'token');
    return storage;
  }


}