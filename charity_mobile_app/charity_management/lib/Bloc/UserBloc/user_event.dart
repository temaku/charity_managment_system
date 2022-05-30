import 'package:charity_management/Data/Models/user_model.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

abstract class UserEvent extends Equatable{
  const UserEvent();
}

// class UserLogIn extends UserEvent{
//   final UserModel user;
//   UserLogIn(this.user);

//   @override
//   // TODO: implement props
//   List<Object> get props => [user];
// }
// //class Authenticated extends UserEvent{}

// class LoginButtonPressed extends UserEvent{
//   final String username;
//   final String password;
//   const LoginButtonPressed({
//     @required this.username,
//     @required this.password,
//   });
  
//   @override
//   // TODO: implement props
//   List<Object> get props => [username, password];

//   @override
//   String toString() => 
//       'LoginButtonPressed { username: $username, password: $password }';

// }

// class UserProfileLoad extends UserEvent{
//   @override
//   // TODO: implement props
//   List<Object> get props => throw UnimplementedError();
// }

class SignUpButtonPressed extends UserEvent{
  UserModel user;
  SignUpButtonPressed(this.user);

  @override
  // TODO: implement props
  List<Object> get props => [user];
}