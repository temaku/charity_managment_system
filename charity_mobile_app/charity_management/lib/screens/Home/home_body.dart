import 'package:flutter/material.dart';

class HomeBody extends StatelessWidget {
  const HomeBody({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: DonationCard(),
    );
  }

  Widget DonationCard() {
    return Card(
      
      child: Column(
        children: [
          Stack(
            
            alignment: Alignment.center,
            children: [
              //Ink.image(image: Image.asset("assets/images/placeholder.jpg"))
              Image.asset(
                "assets/images/placeholder.jpg",
                height: 200,
                fit: BoxFit.cover,
              ),

              Positioned(
                  child: Text("wendm gashe meteh yelem wey yitaweklgn eyesuse"))
            ],
          ),
          ButtonBar(
            alignment: MainAxisAlignment.start,
            children: [
              TextButton(
                onPressed: (){}, 
                child: Text("Donate"),
              ),
              TextButton(
                child: Text("Dismiss"),
                onPressed: (){},
              )
            ],
            )
        ],
      ),
    );
  }
}
