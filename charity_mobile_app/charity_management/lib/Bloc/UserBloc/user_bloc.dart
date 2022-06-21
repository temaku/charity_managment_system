import 'package:charity_management/Bloc/UserBloc/user_event.dart';
import 'package:charity_management/Bloc/UserBloc/user_state.dart';
import 'package:charity_management/Bloc/bloc/authentication_bloc.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/Data/Repository/user_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class UserBloc extends Bloc<UserEvent, UserState> {
  final UserRepository userRepository;

  UserBloc({
    @required this.userRepository,
    })
  : super(UserSignUpInitial());

  @override
  Stream<UserState> mapEventToState(UserEvent event) async*{

    if(event is SignUpButtonPressed){
      yield UserSignUpLoading();
      try {
        final response = await userRepository.createUser(event.user);
        yield UserSignUpSucess();
        
      } catch (e) {
        yield UserSignUpFailed();
      }
    }

    if(event is FetchUserHistory){
      yield UserHistoryLoading();
      try {
        final historys = await userRepository.getUserHistory(event.id);
        yield UserHistorySuccess(historys);
        
      } catch (e) {
        yield UserHistoryFailed();
      }
    }




    // TODO: implement mapEventToState
    // if(event is UserLogIn){
    //   try {
    //     final user = await authRepository.authenticate(event.user);
    //     if(user.status == "authorized"){
    //     yield Authenticated(user);
    //     }
    //     else{
    //       yield UnAuthenticated();
    //     }
    //   } catch (_) {
    //     yield UnAuthenticated();
    //   }
      



    // }

    // if(event is LoginButtonPressed){
    //   yield UserLoginLoading();

    //   try {
    //     final token = await authenticationRepository.authenticate(event.username, event.password);


    //     authenticationBloc.add(LoggedIn(token: token));
    //     yield UserLoginInitial();
         
    //   } catch (e) {
    //     yield UserLoginFailure(error: e.toString());
    //   }

    //     // if(event is UserProfileLoad){
    //     //   final user = userRepository.getSingleUser();
    //     //   yield UserProfileLoaded(user);
          
    //     // }

    // }
  }
    
  }