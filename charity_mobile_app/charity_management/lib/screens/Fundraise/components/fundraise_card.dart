import 'package:cached_network_image/cached_network_image.dart';
import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/screens/Fundraise/components/fundraiseTop.dart';
import 'package:charity_management/screens/Fundraise/fundrais_detail/fundraisedetail.dart';
import 'package:charity_management/screens/History/history.dart';
import 'package:flutter/material.dart';

class FundraiseCard extends StatelessWidget{
  FundraiseModel raise;
  int index;
  FundraiseCard(this.raise, this.index);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Column(
      children: [
        Container(
            child: index == 0 ? fundraiseTop() : SizedBox() ,
          ),
       // SizedBox(height: 20,),
        Padding(
          padding: const EdgeInsets.all(15.0),
          child: Card(
            elevation: 20,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
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

                          child: 
                          CachedNetworkImage(
                             imageUrl: index >2? "https://res.cloudinary.com/q2edsr/image/upload/v1655543883/userPhoto/2022-06-18T09-18-00.447Zcancer.jpg.jpg" : raise.image,
                             placeholder: (context, url) => Center(child: const CircularProgressIndicator()),
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
                          title: Text(raise.title, style: TextStyle(color: Colors.white, fontSize: 23, fontWeight: FontWeight.w300),),
                          // subtitle: Text(
                          // raise.description,
                          // style: TextStyle(color: Colors.white, fontWeight: FontWeight.w200),
                          // ) ,

                        ),
                      ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 10, top: 16),
                  child: Text( raise.description,
                            style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),),
                ),
                ButtonBar(
                  alignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                     
                      onPressed: (){
                         if(index > 2){raise.image = 'https://res.cloudinary.com/q2edsr/image/upload/v1655543883/userPhoto/2022-06-18T09-18-00.447Zcancer.jpg.jpg';}
                        
                         Navigator.push(context, MaterialPageRoute(builder: (context) => FundraiseDetail(raise)));}, 

                      child: Text("Donate"),
                    ),
                    SizedBox(width: 10,),
                    // TextButton(
                    //   child: Text("Dismiss", style: TextStyle(color: Colors.grey),),
                    //   onPressed: (){},
                    // )
                  ],
                  )
              ],
            ),
          ),
        ),
      ],
    );
  }

  }