import 'package:charity_management/constants.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:charity_management/screens/welcome/components/background.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
//import 'package:flutter_svg/flutter_svg.dart';

class Body extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    // TODO: implement build
    
    return Background(
      child: SingleChildScrollView(
              child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("WELCOME TO CHARITY MANAGEMENT"),
            SizedBox(height: size.height * 0.05,),
            Image.asset(
              "assets/images/logo.png",
              height: size.height * 0.45,
            ),
            SizedBox(height: size.height * 0.05),
            RoundedButton(
              text: "LOGIN",
              press: (){Navigator.push(context, MaterialPageRoute(builder: (context){return LoginScreen();}));},
            ),
            RoundedButton(
              text: "SIGNUP",
              //color: kPrimaryLightColor,
              textColor: Colors.white,
              press: (){Navigator.push(context, MaterialPageRoute(builder: (context){return SignUp();}));},
            ),
          ],
        
    ),
      ),);
  }
}
