import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/Profile/components/body.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Profile extends StatelessWidget{
  static const routeName = 'Profile';
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        actions: [
        IconButton(icon: Icon(Icons.logout, color: Colors.black,), onPressed: (){
          Navigator.of(context).pushNamed(LoginScreen.routeName);
          Navigator.of(context).pushAndRemoveUntil(MaterialPageRoute(builder: (context) =>  LoginScreen()), (route) => false);
          AuthenticationRepository.loggedUser =null;
          AuthenticationRepository.storage ='';

        })
      ],
        leading: BackButton(color: Colors.black,),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("PROFILE", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),),
      ),
      body: Body(),

    );
  }
}