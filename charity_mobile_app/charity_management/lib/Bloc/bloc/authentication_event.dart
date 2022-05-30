part of 'authentication_bloc.dart';

abstract class AuthenticationEvent extends Equatable {
  //AuthenticationEvent();

}

class AppStarted extends AuthenticationEvent{
  @override
  String toString() => 'AppStarted';
  
  @override
  // TODO: implement props
  List<Object> get props => throw UnimplementedError();
}

class LoggedIn extends AuthenticationEvent{
  final String token;
  
  LoggedIn({@required this.token});
  
  @override
  // TODO: implement props
  List<Object> get props => throw UnimplementedError();
}

class LoggedOut extends AuthenticationEvent{
  @override
  String toString() => 'LoggedOut';
  @override
  // TODO: implement props
  List<Object> get props => throw UnimplementedError();

}


class LoginButtonPressed extends AuthenticationEvent{
  final String username;
  final String password;
   LoginButtonPressed({
    @required this.username,
    @required this.password,
  });
  
  @override
  // TODO: implement props
  List<Object> get props => [username, password];

  @override
  String toString() => 
      'LoginButtonPressed { username: $username, password: $password }';

}
