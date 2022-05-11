
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/components/already_havae_an_account_check.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:charity_management/screens/components/rounded_input_field.dart';
import 'package:charity_management/screens/components/rounded_password_field.dart';
import 'package:flutter/material.dart';


class Body extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    // TODO: implement build
    return Container(
      height: size.height,
      width: double.infinity,

      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(
            top: size.height * 0.08,
           // left: 0,

            child: Text(
              "SIGN UP",
              style: TextStyle(fontWeight: FontWeight.bold ),
              ),
              ),
          SingleChildScrollView(
                      child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                RoundedInputField(
                  hintText: "Enter Full Name",
                  onChanged: (value){},
                  ),

                RoundedInputField(
                  hintText: "Enter User Name",
                  onChanged: (value){},
                  ),
                RoundedInputField(
                  hintText: "Enter Email",
                  onChanged: (value){},
                  ),
                
                RoundedInputField(
                  hintText: "Enter Phone Number",
                  onChanged: (value){},
                  ),
                
                RoundedPasswordField(
                  onChanged: (value){},
                ),

                RoundedPasswordField(
                  hintText: "Confirm Password",
                ),

                RoundedButton(
                  text: "SIGNUP",
                  press: (){},

                ),

                SizedBox(height: size.height * 0.03,),

                AlreadyHaveAnAccountCheck(
                  login: false,
                  press: () {
                    Navigator.push(
                    context, 
                    MaterialPageRoute(
                      builder: (context){
                        return LoginScreen();
                        }
                        )
                  );
                  }
                ),
              ],
            ),
          )
        ],
      ),

    );
  }
}
