import 'package:charity_management/Data/Models/authentication_model.dart';
import 'package:charity_management/Data/Models/history_model.dart';
import 'package:charity_management/Data/Models/user_model.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

abstract class UserState extends Equatable{
  const UserState();
  

  @override
  // TODO: implement props
  List<Object> get props => [''];
}

 class UserSignUpInitial extends UserState{}

// class UserLoginLoading extends UserState{}

// class UserLoginFailure extends UserState{
//   final String error;

//   const UserLoginFailure({@required this.error});

//   @override
//   // TODO: implement props
//   List<Object> get props => [error];

//   @override
//   String toString() => 'LoginFailure { error: $error }';
  
// }

// class UserProfileLoaded extends UserState{
//   UserModel user;
//   UserProfileLoaded(this.user);
// }

class UserSignUpSucess extends UserState{}

class UserSignUpFailed extends UserState{}

class UserSignUpLoading extends UserState{}


class UserHistorySuccess extends UserState{
  List<HistoryModel> historys;
  UserHistorySuccess(this.historys);
}

class UserHistoryFailed extends UserState{}

class UserHistoryLoading extends UserState{}