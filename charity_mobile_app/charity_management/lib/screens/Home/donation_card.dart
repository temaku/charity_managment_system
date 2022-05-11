import 'package:flutter/material.dart';

class DonationCard extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Card(
      elevation: 20,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Stack(
            alignment: Alignment.bottomLeft,
            children: [
              //Ink.image(image: Image.asset("assets/images/placeholder.jpg"))
              Container(
                width: MediaQuery.of(context).size.width,
                //height: 180,
                child: ColorFiltered(
                  colorFilter: ColorFilter.mode(
                    Colors.grey, 
                    BlendMode.modulate),

                    child: Image.asset(
                    "assets/images/donate42.jpg",
                    height: 200,
                    fit: BoxFit.fitWidth,
                  ),
                ),
              ),

              Positioned(
                  //bottom: 0,
                  //left: 0,
                  child: ListTile(
                   // leading: Icon(Icons.location_pin),
                    title: Text("Eyesus Yitaweklgn", style: TextStyle(color: Colors.white, fontSize: 23, fontWeight: FontWeight.w300),),
                    subtitle: Text(
                    "wendm gashe meteh yelem wey yitaweklgn eyesuse beka aaa beka nn beka betebalew lay eredate methe yelem wey",
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w200),
                    ) ,

                  ),
                ),
            ],
          ),
          ButtonBar(
            alignment: MainAxisAlignment.start,
            children: [
              TextButton(
                onPressed: (){}, 
                child: Text("Donate"),
              ),
              SizedBox(width: 10,),
              TextButton(
                child: Text("Dismiss", style: TextStyle(color: Colors.grey),),
                onPressed: (){},
              )
            ],
            )
        ],
      ),
    );
  }

  }