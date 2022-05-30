
import 'package:charity_management/screens/Donate/donate.dart';
import 'package:charity_management/screens/Event/event.dart';
import 'package:charity_management/screens/Fundraise/fundrais_detail/fundraisedetail.dart';
import 'package:charity_management/screens/Fundraise/fundraise_donate/donate_to.dart';
import 'package:charity_management/screens/History/history.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/Navigation/tabbar.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/VolunteerAccount/navigation/volunteer_home.dart';
import 'package:charity_management/screens/VolunteerAccount/report/report.dart';
import 'package:charity_management/screens/splash/splash.dart';
import 'package:charity_management/screens/welcome/welcome_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class UserAppRoute{
  static Route generateRoute(RouteSettings settings){

    if(settings.name == '/'){
      return MaterialPageRoute(builder: (_) => WelcomeScreen());
    }

    if(settings.name == Tabbar.routeName){
      return MaterialPageRoute(builder: (_) => Tabbar());

    }

    if (settings.name == LoginScreen.routeName){
      return MaterialPageRoute(builder: (context) => LoginScreen());
    }

    if (settings.name == SignUp.routeName){
      return MaterialPageRoute(builder: (context) => SignUp());
    }

    if (settings.name == Donate.routeName){
      return MaterialPageRoute(builder: (context) => Donate());
    }

    if (settings.name == Event.routeName){
      return MaterialPageRoute(builder: (context) => Event());
    }

    if(settings.name == History.routeName){
      return MaterialPageRoute(builder: (context) => History());
    }

    if(settings.name == SplashPage.routeName){
      return MaterialPageRoute(builder: (context) => SplashPage());
    }

    // if(settings.name == FundraiseDetail.routeName){
    //   return MaterialPageRoute(builder: (context) => FundraiseDetail());
    // }

    if(settings.name == Event.routeName){
      return MaterialPageRoute(builder: (context) => Event());
    }


  }
}