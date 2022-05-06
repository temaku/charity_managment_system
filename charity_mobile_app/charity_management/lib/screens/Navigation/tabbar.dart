import 'package:charity_management/screens/Home/home.dart';
import 'package:charity_management/screens/Home/home_body.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Tabbar extends StatefulWidget {
  const Tabbar({ Key key }) : super(key: key);

  @override
  State<Tabbar> createState() => _TabbarState();
}

class _TabbarState extends State<Tabbar> {
  int _selectedIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home',),
          BottomNavigationBarItem(icon: Icon(Icons.history), label: "Donate",),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "me",)

        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        selectedItemColor: Colors.blueAccent,
        //elevation: 40,
        ),
      
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text("Donations", style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),),
        centerTitle: true,
        elevation: 0,
        //titleSpacing: 110,
        actions: [
          IconButton(icon: Icon(Icons.history), onPressed: null),
          IconButton(icon: Icon(Icons.event), onPressed: null),
        ],
        
      ),
      body: HomeBody(),
    );
  }

  void _onItemTapped(int index){
    setState(() {
      _selectedIndex = index;
    });
  }
}
