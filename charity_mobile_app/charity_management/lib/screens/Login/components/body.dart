import 'package:charity_management/Bloc/EventBloc/bloc/event_bloc.dart';
import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_event.dart';
import 'package:charity_management/Bloc/UserBloc/user_state.dart';
import 'package:charity_management/Bloc/bloc/authentication_bloc.dart';
import 'package:charity_management/Bloc/charity_bloc.dart/bloc/charity_bloc.dart';
import 'package:charity_management/constants.dart';
import 'package:charity_management/screens/Login/components/background.dart';
import 'package:charity_management/screens/Navigation/tabbar.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/VolunteerAccount/navigation/volunteer_home.dart';
import 'package:charity_management/screens/components/already_havae_an_account_check.dart';
import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:charity_management/screens/components/rounded_input_field.dart';
import 'package:charity_management/screens/components/rounded_password_field.dart';
import 'package:charity_management/screens/components/text_field_container.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Body extends StatelessWidget {
  Body({
    Key key,
  }) : super(key: key);

  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return  Background(
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "LOGIN",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                SizedBox(height: size.height * 0.03),
                Image.asset(
                  "assets/images/logo.png",
                  height: size.height * 0.35,
                ),
                SizedBox(height: size.height * 0.03),

                // login username we dont know how to pass the controller so hard coded
                RoundedInputField(
                  hintText: "Username",
                  onChanged: (value) {},
                  controller: _usernameController,
                ),

                RoundedPasswordField(
                  onChanged: (value) {},
                  controller: _passwordController,
                ),


              


                




                BlocListener<AuthenticationBloc, AuthenticationState>(
                  listener: (context, state) {
                    // TODO: implement listener
                    if(state is AuthenticationAuthenticated){
                      
                      
                      
                    //  Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => Tabbar()), (route) => false);
                   //   BlocProvider.of<FundraiseBloc>(context).add(FetchFundraise());
                    //  context.read<EventBloc>().add(FetchEvent());
                    }
                    if(state is UserLoginInitial){
                        if(state.user.role == 'donor'){
                          BlocProvider.of<CharityBloc>(context).add(FetchCharity());
                          Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => Tabbar()), (route) => false);
                           BlocProvider.of<FundraiseBloc>(context).add(FetchFundraise());
                           context.read<EventBloc>().add(FetchEvent());
                           context.read<UserBloc>().add(FetchUserHistory(state.user.id));

                           


                        }else if(state.user.role == 'volunteers'){
                          Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) =>  VolunteerHome()), (route) => false);
                          BlocProvider.of<TaskBloc>(context).add(FetchTask());
                        }

                      }
                  },



                  child: RoundedButton(
                    text: "LOGIN",
                    press: () {
                  //    state is! UserLoginLoading
                          //? 
                          _onLoginButtonPressed(context);
                        //  : null;
                    },
                  ),
                ),

                SizedBox(height: size.height * 0.03),

                BlocBuilder<AuthenticationBloc, AuthenticationState>(
                  builder: (context, state) {
                    if(state is UserLoginFailure){
                      return Text(
                        "Wrong Username or Password",
                        style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold),

                      );

                    }
                    return Container(
                                  child: state is UserLoginLoading
                                      ? CircularProgressIndicator()
                                      : null,
                                      
                                );
                  },
                ),

                
    SizedBox(height: 30,),

                AlreadyHaveAnAccountCheck(
                login: true,
                press: () {
                  Navigator.push(
                  context, 
                  MaterialPageRoute(
                    builder: (context){
                      return SignUp();
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

  _onLoginButtonPressed(BuildContext context) {
    BlocProvider.of<AuthenticationBloc>(context).add(LoginButtonPressed(
        username: _usernameController.text,
        password: _passwordController.text));
  }

}