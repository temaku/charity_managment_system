import 'package:charity_management/screens/components/rounded_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            // margin: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.0425),
            margin: EdgeInsets.fromLTRB(10, 0, 10, 0),
            height: MediaQuery.of(context).size.height * 0.25,
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



          Container(
            margin: EdgeInsets.fromLTRB(10, 15, 10, 0),
            child: Text(
              'Help them for better charity',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.w400,
                
              ),
            ),
          ),

          SizedBox(height: 20,),


          


           Container(
               padding: EdgeInsets.only(left: 10),
               child: Text('140+ donated',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                ),
             ),
             //SizedBox(height:10),

          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              height: 8,
             // padding: EdgeInsets.all(5),
              child: LinearProgressIndicator(
                value: 0.3,
                //color: Colors.blueAccent,
             //   valueColor: Colors.blueGrey[100],
                
              ),
            ),
          ),

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: EdgeInsets.only(left: 10),
                child: Text(
              'Goals: \$5000',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
             ),
              ),

              Container(
                padding: EdgeInsets.only(left: 0, right: 10),
                child: Text(
              'Raised: \$2934',
              style: TextStyle(fontSize: 17, fontWeight: FontWeight.w300, color: Colors.blue),
             ),
              ),
            ],
          ),


          SizedBox(height: 20,),




          Container(
            margin: EdgeInsets.fromLTRB(10, 10, 10, 0),
            child: Text(
              'Mekedonia',
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),


          Container(
            height: 180,
            decoration: BoxDecoration(
              //border: Border.all(color: Colors.blueAccent)
            ),
            margin: EdgeInsets.fromLTRB(10, 10, 10, 0),
            child: Text(
              'Mekedonia is a non profit organization that has been working in charity since the 90s, its a home for the homeless a rehabitation for the mentally ill no descrimination no coding Mekedonia is a non profit organization that has been working in charity since the 90s, its a home for the homeless a rehabitation for the mentally ill no descrimination no coding Mekedonia is a non profit organization that has been working in charity since the 90s, its a home for the homeless a rehabitation',
              style: TextStyle(
              //  fontSize: 23,
                  fontWeight: FontWeight.w300,
              ),
            ),
          ),

          Container(

            
      margin: EdgeInsets.only(top: 70, left: 30),
      width: MediaQuery.of(context).size.width * 0.8,

      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: FlatButton(
          onPressed: (){},
         padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
         color: Colors.blue,
         child: Text(
           "Donate Now",
           style: TextStyle(color: Colors.white),
           )),
      ),
    ),






        ],
      ),
    );
  }
}
