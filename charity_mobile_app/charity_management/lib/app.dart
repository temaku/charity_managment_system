import 'package:charity_management/Bloc/EventBloc/bloc/event_bloc.dart';
import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Bloc/TaskBloc/bloc/task_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_state.dart';
import 'package:charity_management/Bloc/bloc/authentication_bloc.dart';
import 'package:charity_management/Bloc/charity_bloc.dart/bloc/charity_bloc.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/Data/Repository/charity_reposityor.dart';
import 'package:charity_management/Data/Repository/event_repository.dart';
import 'package:charity_management/Data/Repository/fundraise_repository.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:charity_management/Data/Repository/user_repository.dart';
import 'package:charity_management/constants.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/Navigation/tabbar.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/components/loading_indicator.dart';
import 'package:charity_management/screens/splash/splash.dart';
import 'package:charity_management/screens/user_route.dart';
import 'package:charity_management/screens/welcome/welcome_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MyApp extends StatelessWidget {
  final AuthenticationRepository authenticationRepository;
  final CharityRepository charityRepository;
  final FundraiseRepository fundraiseRepository;
  final EventRepository eventRepository;
  final TaskRepository taskRepository;
  final UserRepository userRepository;
  MyApp({@required this.authenticationRepository, @required this.charityRepository, @required this.fundraiseRepository, @required this.eventRepository, @required this.taskRepository, @required this.userRepository});
  // This widget is the root of your application.
  final _navigatorKey = GlobalKey<NavigatorState>();

  NavigatorState get _navigator => _navigatorKey.currentState;


  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(lazy: false, create: (context) => UserBloc(userRepository: userRepository,)),
        BlocProvider(lazy: false, create: (context) => AuthenticationBloc(authenticationRepository: authenticationRepository)..add(AppStarted())),
        BlocProvider(lazy: false, create: (context) => CharityBloc(charityRepository: charityRepository)),
        BlocProvider(lazy: false, create: (context) => FundraiseBloc(fundraiseRepository: fundraiseRepository)),
        BlocProvider(lazy: false, create: (context) => EventBloc(eventRepository: eventRepository)),
        BlocProvider(lazy: false, create: (context) => TaskBloc(taskRepository: taskRepository),)
        //BlocProvider(lazy: false, create: (context) => EventBloc,)
      ], 
    
    child: 
    MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Charity Management',
      theme: ThemeData(
        //primaryColor: Colors.white,
        scaffoldBackgroundColor: Colors.white,
       // backgroundColor: Colors.white
        
      ),
       themeMode: ThemeMode.light,
      // darkTheme: ThemeData(
      //   bottomNavigationBarTheme: BottomNavigationBarThemeData(
      //     backgroundColor: Colors.black,
      //   )
      // ),

      // builder: (context, child){
      //   return BlocListener<AuthenticationBloc, AuthenticationState>(
      //     listener: (context, state){

      //       if (state is AuthenticationUninitialized){
      //         _navigator.pushAndRemoveUntil<void>(MaterialPageRoute(builder: (context) => WelcomeScreen()), (route) => false);
      //         //_navigator.pushAndRemoveUntil(newRoute, (route) => false)
      //       }

      //       if (state is AuthenticationUnauthenticated){
      //         _navigator.pushAndRemoveUntil<void>(MaterialPageRoute(builder: (context) => LoginScreen()), (route) => false);
      //       }

      //       if (state is AuthenticationAuthenticated){
      //         _navigator.pushAndRemoveUntil<void>(MaterialPageRoute(builder: (context) => Tabbar()), (route) => false);
      //       }

      //       if (state is AuthenticationLoading){
      //         _navigator.pushAndRemoveUntil<void>(MaterialPageRoute(builder: (context) => LoadingIndicator()), (route) => false);
      //       }

            
      //     },
      //     child: child,
      //   );
      // } ,

        onGenerateRoute: UserAppRoute.generateRoute,
    )
    );
  }
}