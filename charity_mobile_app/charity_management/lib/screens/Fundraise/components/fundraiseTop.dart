import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/screens/Fundraise/fundraiseAdd/add_fundraise.dart';
import 'package:flutter/material.dart';

class fundraiseTop extends StatelessWidget {
  // final String name;
  // const fundraiseTop(
  //   this.name
  // );

  @override
  Widget build(BuildContext context) {
    return Column(
     // mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.all(10.0),
          child: Text(
            'Hello ${AuthenticationRepository.loggedUser.username}',
            style: TextStyle(
              color: Colors.blueAccent,
              fontSize: 18,
              fontWeight: FontWeight.w400,
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 10),
          child: Text(
            "What do you wanna donate today?",
            style: TextStyle(
              // color: Colors.blueAccent,
              // fontSize: 18,
              fontWeight: FontWeight.w300,
            ),
          ),
        ),
        SizedBox(
          height: 20,
        ),
        Stack(
          children: [
            Container(
              // margin: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.0425),
              margin: EdgeInsets.fromLTRB(10, 0, 10, 0),
              height: MediaQuery.of(context).size.height * 0.2,
              width: double.infinity,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Image.asset(
                  'assets/images/donate3.png',
                  fit: BoxFit.cover,
                ),
              ),
        
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
        
                // color: Colors.black
              ),
            ),
            Positioned(
              left: 40,
              top: 70,
              child: Text(
                "Do you want to fundraise!",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Positioned(
              top: 100,
              left: 40,
              child: Container(
                padding: EdgeInsets.all(0),
                //margin: EdgeInsets.only(top: 70, left: 30),
        
                //  width: MediaQuery.of(context).size.width * 0.4,
        
                height: 40,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(15),
                  child: FlatButton(
                      onPressed: () { Navigator.push(context, MaterialPageRoute(builder: (context) => AddFundraise()));},
                      //  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                      color: Colors.blue,
                      child: Text(
                        "Start Campign",
                        style: TextStyle(color: Colors.white),
                      )),
                ),
              ),
            )
          ],
        ),
        SizedBox(height: 30),
        Container(
          margin: EdgeInsets.only(left: 10, bottom: 20),
          child: Text(
              "Top Fundraise's!",
              style: TextStyle(
                color: Colors.black,
                fontSize: 23,
                fontWeight: FontWeight.w300,
              ),
          ),
        ),
        
          
         
      
      ],
    );
  }
}

