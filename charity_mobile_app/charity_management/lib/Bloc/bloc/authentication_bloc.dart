import 'package:bloc/bloc.dart';
import 'package:charity_management/Data/Models/authentication_model.dart';
import 'package:charity_management/Data/Models/user_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

part 'authentication_event.dart';
part 'authentication_state.dart';

class AuthenticationBloc extends Bloc<AuthenticationEvent, AuthenticationState> {
 
  AuthenticationBloc({@required this.authenticationRepository})
   : assert(authenticationRepository != null), super(AuthenticationUninitialized());
  
  final AuthenticationRepository authenticationRepository;
  
  
  @override
  Stream<AuthenticationState> mapEventToState(AuthenticationEvent event) async* {
    // TODO: implement mapEventToState
    if (event is AppStarted) {
      final bool hasToken = await authenticationRepository.hasToken();

      if (hasToken) {
        yield AuthenticationAuthenticated();
      } else {
        yield AuthenticationUnauthenticated();
      }
    }

    if (event is LoggedIn) {
      yield AuthenticationLoading();
      //yield AuthenticationAuthenticated();
      await authenticationRepository.persistToken(event.token);
      yield AuthenticationAuthenticated();
    }

    if (event is LoggedOut) {
      yield AuthenticationLoading();
      await authenticationRepository.deleteToken();
      yield AuthenticationUnauthenticated();
    }





    if(event is LoginButtonPressed){
      yield UserLoginLoading();

      try {
       // final token = await authenticationRepository.authenticate(event.username, event.password);

        final userData = await authenticationRepository.authenticate(event.username, event.password);
        


       // authenticationBloc.add(LoggedIn(token: token));
       yield AuthenticationLoading();
    
      await authenticationRepository.persistToken(userData.token);
      yield AuthenticationAuthenticated();

        yield UserLoginInitial(userData.user);

        AuthenticationRepository.loggedUser= userData.user;
         
      } catch (e) {
        yield UserLoginFailure(error: e.toString());
      }




  }
  }


}