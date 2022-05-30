part of 'authentication_bloc.dart';



abstract class AuthenticationState extends Equatable {
 
  @override
  List<Object> get props => [];
}

class AuthenticationUninitialized extends AuthenticationState{}

class AuthenticationAuthenticated extends AuthenticationState{

}

class AuthenticationUnauthenticated extends AuthenticationState{}

class AuthenticationLoading extends AuthenticationState{}





class UserLoginInitial extends AuthenticationState{
  final UserModel user;
  UserLoginInitial(this.user);

  @override
  // TODO: implement props
  List<Object> get props => [user];
}

class UserLoginLoading extends AuthenticationState{}

class UserLoginFailure extends AuthenticationState{
  final String error;

   UserLoginFailure({@required this.error});

  @override
  // TODO: implement props
  List<Object> get props => [error];

  @override
  String toString() => 'LoginFailure { error: $error }';
  
}