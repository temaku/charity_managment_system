import 'package:charity_management/Bloc/UserBloc/user_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_event.dart';
import 'package:charity_management/Bloc/UserBloc/user_state.dart';
import 'package:charity_management/Data/Models/user_model.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/components/already_havae_an_account_check.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';




class Body extends StatefulWidget {
 // FundraiseModel raise;
 // Body(this.raise);


  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  // FundraiseModel raise;
  // _BodyState(this.raise);

 

  final _formKey = GlobalKey<FormState>();
  final UserModel user = UserModel();
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        margin: EdgeInsets.only(top: 80),
        padding: EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            
            Container(
             // padding: EdgeInsets.only(left: 10),
              child: Text(
                "Sign Up"
              ),
            ),
    
            SizedBox(height: 30,),
    
           
    
           // SizedBox(height: 20,),
    
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
             
              //initialValue: "+251",
              decoration: InputDecoration(labelText: "username"),
              validator:(value) {
                if(value.isEmpty){
                  return "please enter username";
                }
                  return null;
                
    
              },
    
              onSaved: (newValue){
                setState(() {
                  this.user.username = newValue;
                });
              },
              
    
            ),
            SizedBox(height: 30,),
    
            Container(
             // height: 150,
              child: TextFormField(
                
               // initialValue: "",
               // minLines: null,
                decoration: InputDecoration(labelText: "email"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please enter email";
                  }
                    return null;
                
                },
    
                onSaved: (newValue){
                  this.user.email = newValue;
                },
                
    
              ),
            ),
            SizedBox(height: 30,),
    
           
            //SizedBox(height: 30,),
            Container(
              //swidth: 200,
              child: TextFormField(
                //initialValue: "0.0",
                decoration: InputDecoration(labelText: "phone"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please enter phone";
                  }
                    return null;
                  
    
                },
    
                onSaved: (newValue){
                  this.user.phone = newValue;
                },
                
    
              ),
            ),

            SizedBox(height: 30,),


            Container(
              //width: 200,
              child: TextFormField(
                //initialValue: "0.0",
                obscureText: true,
                decoration: InputDecoration(labelText: "password"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please enter password";
                  }
                    return null;
                  
    
                },
    
                onSaved: (newValue){
                  this.user.role = newValue;
                },
                
    
              ),
            ),

            SizedBox(height: 30,),


            Container(
             // width: 200,
              child: TextFormField(
                obscureText: true,
                //initialValue: "0.0",
                decoration: InputDecoration(labelText: "Confirm password"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please confirm password";
                  }
                    return null;
                  
    
                },
    
                onSaved: (newValue){
                  if(newValue != user.role){
                    return 'Password unmatched';
                  }else{
                  this.user.id = newValue;
                  }
                },
                
    
              ),
            ),

                ],
              ),
              ),

              SizedBox(height: 50,),

            Container(
              alignment: Alignment.center,

             // width: 150,
              child: ElevatedButton(
                
                onPressed: (){
                  final form = _formKey.currentState;
                  if(form.validate()){
                    form.save();
                   // donation.id = raise.id;
                    
                    

                    BlocProvider.of<UserBloc>(context).add(SignUpButtonPressed(user));
                  }


              },
              
               //icon: Icon(Icons.money), 
              // label: Text("Sign up")
              child: Text('Sign Up'),
               ),
            ),

             BlocConsumer<UserBloc, UserState>(
               listener: (context, state) {
                 // TODO: implement listener
                 if(state is UserSignUpSucess){
                    showDialog(
                      barrierDismissible: false,
                     context: context, 
                     builder: (_){
                      return CupertinoAlertDialog(
                     title: Text('Sign Up Completed!'),
                     content: Text('Thank you for regestering, start helping people from now!'),
                     actions: [
                       CupertinoDialogAction(
                         child: Text('continue'),
                         onPressed: (){
                           Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) =>  LoginScreen()), (route) => false);
                         },
                       ),
                     ],


                   );
                     }
                     );
                     //return Container();
                   //ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Signing up sucessful")));
                   //Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) =>  LoginScreen()), (route) => false);
                 }else if( state is UserSignUpFailed){
                   ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Signing up failed Try again!")));
                 }
                 
               },
             //  child: Container(),
             builder: (context, state){
               if(state is UserSignUpLoading){
                   return Center(child: CircularProgressIndicator());
                 }
               return Container();
             },
             ),

             

              //SizedBox(height: size.height * 0.03,),

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
                )
           
    
    
    
          ],
        ),
      ),
    );
  }
}










//   Container newMethod(Size size, BuildContext context) {
//     return Container(
//     height: size.height,
//     width: double.infinity,

//     child: Stack(
//       alignment: Alignment.center,
//       children: [
//         Positioned(
//           top: size.height * 0.08,
//          // left: 0,

//           child: Text(
//             "SIGN UP",
//             style: TextStyle(fontWeight: FontWeight.bold ),
//             ),
//             ),
//         SingleChildScrollView(
//                     child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [
//               RoundedInputField(
//                 hintText: "Enter Full Name",
//                 onChanged: (value){},
//                 ),

//               RoundedInputField(
//                 hintText: "Enter User Name",
//                 onChanged: (value){},
//                 ),
//               RoundedInputField(
//                 hintText: "Enter Email",
//                 onChanged: (value){},
//                 ),
              
//               RoundedInputField(
//                 hintText: "Enter Phone Number",
//                 onChanged: (value){},
//                 ),
              
//               RoundedPasswordField(
//                 onChanged: (value){},
//               ),

//               RoundedPasswordField(
//                 hintText: "Confirm Password",
//               ),

//               RoundedButton(
//                 text: "SIGNUP",
//                 press: (){},

//               ),

//               SizedBox(height: size.height * 0.03,),

//               AlreadyHaveAnAccountCheck(
//                 login: false,
//                 press: () {
//                   Navigator.push(
//                   context, 
//                   MaterialPageRoute(
//                     builder: (context){
//                       return LoginScreen();
//                       }
//                       )
//                 );
//                 }
//               ),
//             ],
//           ),
//         )
//       ],
//     ),

//   );
//   }
// }
