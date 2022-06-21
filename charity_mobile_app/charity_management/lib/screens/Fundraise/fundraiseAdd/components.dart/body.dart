
import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';




class Body extends StatefulWidget {
 // FundraiseModel raise;
 // Body(this.raise);


  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  // FundraiseModel raise;
  // _BodyState(this.raise);

 

  final _formKey = GlobalKey<FormState>();
  final FundraiseModel fundraise = FundraiseModel();
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
                "Help to reach peoples",
                style: TextStyle(
                  fontSize: 25, 
                ),
                )
    
            ),
            Container(
             // padding: EdgeInsets.only(left: 10),
              child: Text(
                "Start Campaign"
              ),
            ),
    
            SizedBox(height: 70,),


           // ElevatedButton.icon(
              // onPressed: (){pickImage();}, 
              // icon: Icon(Icons.image_outlined), 
              // label: Text('Select image')),
    
           
    
            SizedBox(height: 20,),
    
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
             
              //initialValue: "+251",
              decoration: InputDecoration(labelText: "Title"),
              validator:(value) {
                if(value.isEmpty){
                  return "please enter Title";
                }
                  return null;
                
    
              },
    
              onSaved: (newValue){
                setState(() {
                  this.fundraise.title = newValue;
                });
              },
              
    
            ),
            SizedBox(height: 30,),
    
            Container(
              height: 150,
              child: TextFormField(
                
               // initialValue: "",
                expands: true,
                maxLines: null,
               // minLines: null,
                decoration: InputDecoration(labelText: "Description"),
                validator:(value) {
                  if(value.isEmpty){
                    return "please enter description";
                  }
                    return null;
                
                },
    
                onSaved: (newValue){
                  this.fundraise.description = newValue;
                },
                
    
              ),
            ),
            SizedBox(height: 30,),
    
           
   
            Container(
            //  width: 200,
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
                  this.fundraise.amount = int.parse(newValue) ;
                },
                
    
              ),
            ),

                ],
              ),
              ),

              SizedBox(height: 30,),

            ElevatedButton.icon(
              onPressed: (){
                final form = _formKey.currentState;
                if(form.validate()){
                  form.save();
                 // donation.id = raise.id;
                  
                  

                  BlocProvider.of<DonationBloc>(context).add(AddFundraise(fundraise));
                }


            },
            
             icon: Icon(Icons.money), 
             label: Text("Submit Fundraise")),



             BlocConsumer<DonationBloc, DonationState>(
               listener: (context, state) {
                 // TODO: implement listener
                 if(state is AddFundraiseSucess){
                    showDialog(
                      barrierDismissible: false,
                     context: context, 
                     builder: (_){
                      return CupertinoAlertDialog(
                     title: Text('Fundraise Submitted!'),
                     content: Text('Soon People will start Donating Thank you'),
                     actions: [
                       CupertinoDialogAction(
                         child: Text('Okay'),
                         onPressed: (){
                           Navigator.pop(context);
                           //Navigator.pop(context);
                         },
                       ),
                     ],


                   );
                     }
                     );
                     //return Container();
                   //ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Signing up sucessful")));
                   //Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) =>  LoginScreen()), (route) => false);
                 }else if( state is AddFundraiseFailed){
                   ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Fundraising Failed! please try again")));
                 }
                 
               },
             //  child: Container(),
             builder: (context, state){
               if(state is AddFundraiseLoading){
                   return Center(child: CircularProgressIndicator());
                 }
               return Container();
             },
             ),
           
           
    
    
    
          ],
        ),
      ),
    );


  }

  Future pickImage() async{
   // final image = await ima
  }
}
