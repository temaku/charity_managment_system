import 'package:cached_network_image/cached_network_image.dart';
import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/screens/Home/charity_detail/charity_detail.dart';

import 'package:flutter/material.dart';


class DonationCard extends StatelessWidget{
  CharityModel charity;
  DonationCard(this.charity);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Card(
      elevation: 20,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
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

                    child: CachedNetworkImage(
                             imageUrl: charity.image,
                             placeholder: (context, url) => Center(child: const CircularProgressIndicator()),
                  //  placeholder: kTransparentImage,
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
                    title: Text(charity.name, style: TextStyle(color: Colors.white, fontSize: 23, fontWeight: FontWeight.w300),),
                    // subtitle: Text(
                    // charity.description,
                    // style: TextStyle(color: Colors.white, fontWeight: FontWeight.w200),
                    // ) ,

                  ),
                ),
            ],
          ),
          Container(
            padding: EdgeInsets.all(5),
            child: Text(
                    charity.description,
                    style: TextStyle(color: Colors.black, fontWeight: FontWeight.w300),
                    ) ,
          ),
          ButtonBar(
            alignment: MainAxisAlignment.end,
            children: [
              TextButton(
                onPressed: (){Navigator.push(context, MaterialPageRoute(builder: (context) => CharityDetail(charity)));}, 
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
    );
  }

  }