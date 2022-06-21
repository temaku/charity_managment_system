
import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Bloc/charity_bloc.dart/bloc/charity_bloc.dart';
import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_stripe/flutter_stripe.dart';




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
                "Stripe payment"
              ),
            ),
    
            SizedBox(height: 10,),
    
            Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  // ChoiceChip(
                  //   label: Text("Tele-Birr"), 
                  //   labelStyle: TextStyle(color: Colors.black, fontWeight: FontWeight.w300, ),
                  //   selected: _teleSelected,
                  //   onSelected: (newBoolValue){
                  //     setState(() {
                  //       _teleSelected = newBoolValue;
                  //     });
                  //   },
                  //   shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  //   selectedColor: Colors.blue,
                  //   ),
    
                    // ChoiceChip(
                    // label: Text("CBE birr"), 
                    // labelStyle: TextStyle(color: Colors.black,fontSize: 14, fontWeight: FontWeight.w300, ),
                    // selected: _cbeSelected,
                    // onSelected: (newBoolValue){
                    //   setState(() {
                    //     _cbeSelected = newBoolValue;
                    //   });
                    // },
                    // shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    // selectedColor: Colors.blue,
                    // ),
    
                    ChoiceChip(
                    label: Text("Stripe - payment", style: TextStyle(color: Colors.white),), 
                    labelStyle: TextStyle(color: Colors.black,fontSize: 14, fontWeight: FontWeight.w300, ),
                    selected: true,
                    onSelected: (newBoolValue){
                      setState(() {
                        _helloSelected = true;
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
            //       TextFormField(
             
            //   //initialValue: "+251",
            //   decoration: InputDecoration(labelText: "Name"),
            //   validator:(value) {
            //     if(value.isEmpty){
            //       return "please enter phone number";
            //     }
            //       return null;
                
    
            //   },
    
            //   onSaved: (newValue){
            //     setState(() {
            //       this.donation.username = newValue;
            //     });
            //   },
              
    
            // ),
            // SizedBox(height: 30,),
    
            // TextFormField(
              
            //   initialValue: "+251",
            //   decoration: InputDecoration(labelText: "Phone number"),
            //   validator:(value) {
            //     if(value.isEmpty){
            //       return "please enter phone number";
            //     }
            //       return null;
              
            //   },
    
            //   onSaved: (newValue){
            //     this.donation.phone = newValue;
            //   },
              
    
            // ),
            // SizedBox(height: 30,),
    
            // TextFormField(
            //   //initialValue: "+251",
            //   decoration: InputDecoration(labelText: "Pin"),
            //   validator:(value) {
            //     if(value.isEmpty){
            //       return "please enter Pin";
            //     }
            //       return null;
                
    
            //   },
    
            //   onSaved: (newValue){
            //     this.donation.password = newValue;
            //   },
              
    
            // ),
            SizedBox(height: 30,),
            Center(
              child: Container(
                width: 250,
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
                    this.donation.amount = int.parse(newValue) * 100;
                  },
                  
    
                ),
              ),
            ),

                ],
              ),
              ),
              SizedBox(height: 30,),

            Center(
              child: Container(
                width: 150,
                child: ElevatedButton(
                  onPressed: () {
                    final form = _formKey.currentState;
                    if(form.validate()){
                      form.save();
                      donation.id = raise.id;
                     // donation.DonationOption = 'telebirr';
                      donation.userId = AuthenticationRepository.loggedUser.id;
                      
                      

                      BlocProvider.of<DonationBloc>(context).add(DonateToFundraise(donation,'USD',));

                     // if(raise.title == 'charity'){
                    //    BlocProvider.of<CharityBloc>(context).add(DonateToNodeCharity(donation.amount.toString(), donation.id));
                      // }else{
                      //  BlocProvider.of<DonationBloc>(context).add(DonateToNode(donation));
                      // }
                    }


                },
                
                 child: Text('Donate'),
                 ),
              ),
            ),



             BlocConsumer<DonationBloc, DonationState>(
               listener: (context, state) {
                 // TODO: implement listener
                 if(state is DonationFundSucess){
                  displayPaymentSheet(state.response);

                  //   showDialog(
                  //     barrierDismissible: false,
                  //    context: context, 
                  //    builder: (_){
                  //     return CupertinoAlertDialog(
                  //    title: Text('Donation Completed!'),
                  //    content: Text('Thank you for your Donation, God Bless you!'),
                  //    actions: [
                  //      CupertinoDialogAction(
                  //        child: Text('Go Back'),
                  //        onPressed: (){
                  //          Navigator.pop(context);Navigator.pop(context);
                  //        },
                  //      ),
                  //    ],


                  //  );
                  //    }
                  //    );
                     //return Container();
                   //ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Signing up sucessful")));
                   //Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) =>  LoginScreen()), (route) => false);
                 }else if( state is DonationFundFailed){
                   ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Donation Failed! please try again")));
                 }
                 
               },
             //  child: Container(),
             builder: (context, state) {
               if(state is DonationFundLoading){
                   return Center(child: CircularProgressIndicator());
                 }
              //  if(state is DonationFundSucess){

              //  }
               return Container();
             },
             ),
           
    
    
    
          ],
        ),
      ),
    );
  }

  displayPaymentSheet(dynamic paymentIntentData) async{
    try {
      await Stripe.instance.initPaymentSheet(
      paymentSheetParameters: SetupPaymentSheetParameters(
              paymentIntentClientSecret: paymentIntentData['client_secret'],
              applePay: true,
              googlePay: true,
              testEnv: true,
              style: ThemeMode.dark,
              merchantCountryCode: 'US',
              customerId: paymentIntentData['customer'],
              merchantDisplayName: 'ANNIE')).then((value){
      }
      ); 

      


      await Stripe.instance.presentPaymentSheet(
      
        parameters: $PresentPaymentSheetParameters(
         
           )).then((newValue){
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Donated Successfully')));
           }).onError((error, stackTrace){
            print('Exception/DISPLAYPAYMENTSHEET==> $error $stackTrace');
           })
      ;
      
    } on StripeException catch(e){
      print('Exception/DISPLAYPAYMENTSHEET==> $e');
      showDialog(
          context: context,
          builder: (_) => AlertDialog(
            content: Text("Cancelled "),
          ));
    }
     catch (e) {
    }
    


  }
}
