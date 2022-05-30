import 'package:charity_management/Data/Models/event_model.dart';
import 'package:flutter/material.dart';

class EventCard extends StatelessWidget{
  EventModel event;
  EventCard(this.event);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return buildSizedBox(context);

    
  }

  SizedBox buildSizedBox(BuildContext context) {
    return SizedBox(
    //height: 100,
    //width: 100,
        child: Card(
      elevation: 20,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
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
                    title: Text(event.title, style: TextStyle(color: Colors.white, fontSize: 23, fontWeight: FontWeight.w300),),
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
                      event.description,
                    style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),
                    ) ,

                  ),
                ),

               Container(
                 margin: EdgeInsets.only(top: 5),
                   padding: EdgeInsets.only(left: 15),
                   child: Text('Event Time - ${event.date}',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                 ),

                 Container(
                 margin: EdgeInsets.only(top: 5),
                   padding: EdgeInsets.only(left: 15),
                   child: Row(
                     children: [
                       Text('Location - Addisu Michael - Addis Ababa ',
                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                        ),
                        Icon(Icons.location_pin, color: Colors.blue, size: 15,)
                     ],
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