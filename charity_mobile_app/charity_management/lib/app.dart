import 'package:charity_management/constants.dart';
import 'package:charity_management/screens/Navigation/tabbar.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/welcome/welcome_screen.dart';
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Charity Management',
      theme: ThemeData(
       // primaryColor: kPrimaryColor,
        scaffoldBackgroundColor: Colors.white,
      ),
      // themeMode: ThemeMode.dark,
      // darkTheme: ThemeData(
      //   bottomNavigationBarTheme: BottomNavigationBarThemeData(
      //     backgroundColor: Colors.black,
      //   )
      // ),
      home: Tabbar(),
    );
  }
}