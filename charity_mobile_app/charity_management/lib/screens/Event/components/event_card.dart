import 'package:flutter/material.dart';

class EventCard extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return buildSizedBox(context);

    
  }

  SizedBox buildSizedBox(BuildContext context) {
    return SizedBox(
    //height: 200,
        child: Card(
      elevation: 20,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        //mainAxisAlignment: MainAxisAlignment.spaceAround,
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
                    "assets/images/donate3.png",
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
                    //subtitle: Text('we'),
                   

                  ),
                ),
            ],
          ),


          Container(
                  //bottom: 0,
                  //left: 0,
                  child: ListTile(
                   // leading: Icon(Icons.location_pin),
                    //title: Text("Eyesus Yitaweklgn", style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),),
                    subtitle: Text(
                    "wendm gashe meteh yelem wey yitaweklgn eyesuse beka aaa beka nn beka betebalew lay eredate methe yelem wey",
                    style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),
                    ) ,

                  ),
                ),


          ButtonBar(
            alignment: MainAxisAlignment.start,
            children: [
              TextButton(
                onPressed: (){}, 
                child: Text("Join"),
              ),
              SizedBox(width: 10,),
              TextButton(
                child: Text("Dismiss", style: TextStyle(color: Colors.grey),),
                onPressed: (){},
              ),
            ],
            ),

        ],
      ),
    ),
  );
  }

  }