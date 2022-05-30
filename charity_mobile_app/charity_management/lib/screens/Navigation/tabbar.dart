import 'package:charity_management/screens/Donate/donate.dart';
import 'package:charity_management/screens/Event/event.dart';
import 'package:charity_management/screens/Fundraise/fundraise.dart';
import 'package:charity_management/screens/History/history.dart';
import 'package:charity_management/screens/Home/home.dart';
import 'package:charity_management/screens/Home/home_body.dart';
import 'package:charity_management/screens/Login/login.dart';
import 'package:charity_management/screens/Profile/profile.dart';
import 'package:charity_management/screens/Signup/signup.dart';
import 'package:charity_management/screens/VolunteerAccount/task/task.dart';
import 'package:charity_management/screens/welcome/welcome_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Tabbar extends StatefulWidget {
  static const routeName = 'Tabbar';
  const Tabbar({ Key key }) : super(key: key);

  @override
  State<Tabbar> createState() => _TabbarState();
}

class _TabbarState extends State<Tabbar> {
  int _selectedIndex = 0;
  PageController _pageController = PageController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home',),
          BottomNavigationBarItem(icon: Icon(Icons.event), label: "Event",),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "me",)

        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        selectedItemColor: Colors.blueAccent,
        //elevation: 40,
        ),
      
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: _selectedIndex == 0? Text('All Fundraises', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300)) : Text("CHARITYS", style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),),
        centerTitle: true,
        elevation: 0,
        //titleSpacing: 110,
        actions: [
          IconButton(icon: Icon(Icons.history, color: Colors.grey,), onPressed: (){Navigator.push(context, MaterialPageRoute(builder: (context){return History();}));}),
          IconButton(icon: Icon(Icons.event, color: Colors.blueGrey,), onPressed: (){Navigator.pushNamed(context, Event.routeName);}),
        ],
        
      ),
      body: PageView(
        controller: _pageController,
        children: [
          Fundraise(),
          HomeBody(),
          Event(),
          
          
          
         
        ],
      ),
       
    );
  }

  void _onItemTapped(int index){
    setState(() {
      _selectedIndex = index;
    });
   
    if(index == 2){
      Navigator.push(context, MaterialPageRoute(builder: (context){return Profile();}));
    }else{
       _pageController.jumpToPage(index);

    }
    //_pageController.animateToPage(index, duration: Duration(milliseconds: 1000), curve: Curves.bounceOut);
  }
}
