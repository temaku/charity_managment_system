import 'package:charity_management/screens/Fundraise/fundraise.dart';
import 'package:charity_management/screens/Profile/profile.dart';
import 'package:charity_management/screens/VolunteerAccount/task/pending/pending.dart';
import 'package:charity_management/screens/VolunteerAccount/task/task.dart';
import 'package:flutter/material.dart';

class VolunteerHome extends StatefulWidget {
  static const routeName = 'Tabbar';
  const VolunteerHome({ Key key }) : super(key: key);

  @override
  State<VolunteerHome> createState() => _VolunteerHome();
}

class _VolunteerHome extends State<VolunteerHome> {
  int _selectedIndex = 0;
  PageController _pageController = PageController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home',),
          BottomNavigationBarItem(icon: Icon(Icons.event), label: "*Pendding",),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "me",)

        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        selectedItemColor: Colors.blueAccent,
        //elevation: 40,
        ),
      
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text("Tasks", style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),),
        centerTitle: true,
        elevation: 0,
        //titleSpacing: 110,
        actions: [
         // IconButton(icon: Icon(Icons.history), onPressed: (){Navigator.push(context, MaterialPageRoute(builder: (context){return History();}));}),
          IconButton(icon: Icon(Icons.event), onPressed: null),
        ],
        
      ),
      body: PageView(
        controller: _pageController,
        children: [
          Task(),
          Pending()
          
         
        ],
      ),
       
    );
  }

  void _onItemTapped(int index){
    setState(() {
      _selectedIndex = index;
    });
   
    // if(index == 2){
    //  // Navigator.push(context, MaterialPageRoute(builder: (context){return Profile();}));
    // }else{
    //    _pageController.jumpToPage(index);

    // }
    //_pageController.animateToPage(index, duration: Duration(milliseconds: 1000), curve: Curves.bounceOut);
    _pageController.jumpToPage(index);
  }
}