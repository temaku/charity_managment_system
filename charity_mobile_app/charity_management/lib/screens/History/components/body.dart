import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/Data/Models/history_model.dart';
import 'package:charity_management/Data/Repository/charity_reposityor.dart';
import 'package:charity_management/Data/Repository/user_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Body extends StatelessWidget{
  HistoryModel history;
  //final charity;
  Body(this.history);
  //CharityModel charity;
  

  @override
  Widget build(BuildContext context) {
   // final charity = RepositoryProvider.of<CharityRepository>(context).getSingleCharity(history.charity);
    //CharityModel cha = await charity;
    // TODO: implement build
    return Container(
      margin: EdgeInsets.only(top: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 40,
            width: double.infinity,
            padding: EdgeInsets.only(left: 10),
             child: Text(
             // 'MONDAY, MAY 12',
             history.donatedAt,
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
             ),
             alignment: Alignment.centerLeft,

            decoration: BoxDecoration(
              color: Colors.grey[300] ),
            
          ),
        
      Card(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ListTile(
              //leading: Icon(Icons.money),
              title: Text(
                history.charityName,
             //  '${charity.then((value) => value.name)}',
                ),
              subtitle: Text(
               // '${charity.then((value) => value.description)}',
                history.charityDescription,
                ),
            ),

        
               Container(
               // width: MediaQuery.of(context).size.width * 0.6,
                height: MediaQuery.of(context).size.height * 0.1,
                child: Card(
                  //elevation: 10,
                  
                  child: Row(
                    children: [
                      SizedBox(width:20),
                      Column(
                        children: [
                          Container(child: Text('Donation Amount'), 
                          margin: EdgeInsets.all(10),
                          ),
                          Container(child: Text(
                          //  '500',
                          history.donate.toString(),
                             style: TextStyle(color:Colors.blue),))
                        ],
                      ),

                      SizedBox(width: 50),

                      Column(
                        children: [
                          Container(child: Text('Payment Type'),
                          margin: EdgeInsets.all(10),),
                          Container(child: Text(
                           'Stripe', 
                           // history.DonationOption,
                            style: TextStyle(color:Colors.blue),)),
                        ],
                      )

                    ],)
                ),
              
            ),

             Container(
               padding: EdgeInsets.only(left: 15),
               child: Text('Donation Time - ${history.donatedAt}',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                ),
             ),
             SizedBox(height:10)
            
          ],
        ),
      )
        ]
      ),
    );
  }

  // CharityModel getCharity() async*{
  // //  return await RepositoryProvider.of<CharityRepository>(context).getSingleCharity(state.historys[index].charity);
  // }
}