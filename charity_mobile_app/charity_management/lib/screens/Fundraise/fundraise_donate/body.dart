
import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';




class Body extends StatefulWidget {
  FundraiseModel raise;
  Body(this.raise);


  @override
  State<Body> createState() => _BodyState(raise);
}

class _BodyState extends State<Body> {
  FundraiseModel raise;
  _BodyState(this.raise);
  bool _isSelected = false;
  bool _teleSelected = false;
  bool _cbeSelected = false;
  bool _helloSelected = false;

  final _formKey = GlobalKey<FormState>();
  final DonationModel donation = DonationModel();
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        padding: EdgeInsets.all(8),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              //padding: EdgeInsets.only(left: 10),
              child: Text(
                "Payment options",
                style: TextStyle(
                  fontSize: 25, 
                ),
                )
    
            ),
            Container(
             // padding: EdgeInsets.only(left: 10),
              child: Text(
                "Credit card"
              ),
            ),
    
            SizedBox(height: 10,),
    
            Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ChoiceChip(
                    label: Text("Tele-Birr"), 
                    labelStyle: TextStyle(color: Colors.black, fontWeight: FontWeight.w300, ),
                    selected: _teleSelected,
                    onSelected: (newBoolValue){
                      setState(() {
                        _teleSelected = newBoolValue;
                      });
                    },
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    selectedColor: Colors.blue,
                    ),
    
                    ChoiceChip(
                    label: Text("CBE birr"), 
                    labelStyle: TextStyle(color: Colors.black,fontSize: 14, fontWeight: FontWeight.w300, ),
                    selected: _cbeSelected,
                    onSelected: (newBoolValue){
                      setState(() {
                        _cbeSelected = newBoolValue;
                      });
                    },
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    selectedColor: Colors.blue,
                    ),
    
                    ChoiceChip(
                    label: Text("Hello-cash"), 
                    labelStyle: TextStyle(color: Colors.black,fontSize: 14, fontWeight: FontWeight.w300, ),
                    selected: _helloSelected,
                    onSelected: (newBoolValue){
                      setState(() {
                        _helloSelected = newBoolValue;
                      });
                    },
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    selectedColor: Colors.blue,
                    ),
                    
                    
                ],
              )
            ),
    
            SizedBox(height: 20,),
    
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
             
              //initialValue: "+251",
              decoration: InputDecoration(labelText: "Name"),
              validator:(value) {
                if(value.isEmpty){
                  return "please enter phone number";
                }
                  return null;
                
    
              },
    
              onSaved: (newValue){
                setState(() {
                  this.donation.username = newValue;
                });
              },
              
    
            ),
            SizedBox(height: 30,),
    
            TextFormField(
              
              initialValue: "+251",
              decoration: InputDecoration(labelText: "Phone number"),
              validator:(value) {
                if(value.isEmpty){
                  return "please enter phone number";
                }
                  return null;
              
              },
    
              onSaved: (newValue){
                this.donation.phone = newValue;
              },
              
    
            ),
            SizedBox(height: 30,),
    
            TextFormField(
              //initialValue: "+251",
              decoration: InputDecoration(labelText: "Pin"),
              validator:(value) {
                if(value.isEmpty){
                  return "please enter Pin";
                }
                  return null;
                
    
              },
    
              onSaved: (newValue){
                this.donation.password = newValue;
              },
              
    
            ),
            SizedBox(height: 30,),
            Container(
              width: 200,
              child: TextFormField(
                //initialValue: "0.0",
                decoration: InputDecoration(labelText: "Amount"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please enter Amount";
                  }
                    return null;
                  
    
                },
    
                onSaved: (newValue){
                  this.donation.amount = newValue;
                },
                
    
              ),
            ),

                ],
              ),
              ),

            ElevatedButton.icon(
              onPressed: (){
                final form = _formKey.currentState;
                if(form.validate()){
                  form.save();
                  donation.id = raise.id;
                  
                  

                  BlocProvider.of<FundraiseBloc>(context).add(DonateToFundraise(donation));
                }


            },
            
             icon: Icon(Icons.money), 
             label: Text("Donate"))
           
    
    
    
          ],
        ),
      ),
    );
  }
}
