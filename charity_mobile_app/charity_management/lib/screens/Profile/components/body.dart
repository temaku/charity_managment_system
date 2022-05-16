import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Body extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      width: double.infinity,
     // height: douuble.in,
      
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              // Container(
              //   decoration: BoxDecoration(
              //     border: Border.all(
              //       color: Colors.blue,
              //       width: 5,
                    
              //     ),
              //     borderRadius: BorderRadius.circular(100),
              //    // shape: BoxShape.circle,
              //   ),
              //   height: 150,
              //   width: 150,
              //   child: Image.asset(
              //     'assets/images/pro.jpg',
              //     fit: BoxFit.fill,
              //   ),
              //   ),



                Container(
                  margin: EdgeInsets.only(left:10, right: 10),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.blue,
                    ),
                    borderRadius: BorderRadius.circular(100),
                  ),
                  child: CircleAvatar(
                    radius:50.0,
                    //backgroundColor: Colors.black,
                    child: ClipRRect(
                      child: Image.asset('assets/images/pro.jpg'),
                      borderRadius: BorderRadius.circular(50),
                      
                    ),
                  ),
                 ),

                Container(
                 // height: 100,
                  decoration: BoxDecoration(
                  //  border: Border.all(color: Colors.black)
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    
                    children: [
                      Container(
                        margin: EdgeInsets.all(0),
                       
                        child: Text("name",
                        textAlign: TextAlign.left,),
                        
                      ),
                    //  SizedBox(height:10),
                       Container(
                        child: Text("userDonor01@gmail.com"),
                       ),
                       Text(
                         'Donor Account', 
                       style: TextStyle(color:Colors.blue, fontWeight: FontWeight.bold),
                       textAlign: TextAlign.start,
                       )
                      
                      
                    ],
                  ),
                )

            ],
          ),
         // SizedBox(height: 20),


          Center(
            child: Container(
              width: MediaQuery.of(context).size.width * 0.6,
              height: MediaQuery.of(context).size.height * 0.1,
              child: Card(
                elevation: 10,
                
                child: Row(
                  children: [
                    SizedBox(width:20),
                    Column(
                      children: [
                        Container(child: Text('12', style: TextStyle(color:Colors.blue),), 
                        margin: EdgeInsets.all(10),
                        ),
                        Container(child: Text('Donations'))
                      ],
                    ),

                    SizedBox(width: 50),

                    Column(
                      children: [
                        Container(child: Text('500', style: TextStyle(color:Colors.blue)),
                        margin: EdgeInsets.all(10),),
                        Container(child: Text('BIRR'))
                      ],
                    )

                  ],)
              ),
            ),
          ),


          SizedBox(height: 70),
       

          Container(
            margin: EdgeInsets.only(left:20),
            height: 200,
            child: Row(
             // mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("Username"),
                    Text("Phone Number"),
                    Text("Address"),
                  ]
                ),
                SizedBox(width:30),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Text('@charity101', style: TextStyle(color: Colors.blue),),
                     Text('+2519234546', style: TextStyle(color: Colors.blue),),
                     Text('Addis Ababa Kirkos sub city', style: TextStyle(color: Colors.blue),)
                  ],
                ),
              ],
            ),
          )

        ],
      ),
    );
  }
}