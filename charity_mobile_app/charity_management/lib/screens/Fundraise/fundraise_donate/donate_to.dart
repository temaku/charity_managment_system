import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Data/DataProvider/fundraise_dataprovider.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/Data/Repository/fundraise_repository.dart';
import 'package:charity_management/screens/Fundraise/fundraise_donate/body.dart';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_stripe/flutter_stripe.dart';

class DonateTo extends StatelessWidget {
  static const routeName = 'FundraiseDetail';
  FundraiseModel raise;
  DonateTo(this.raise);



  @override
  Widget build(BuildContext context) {
    Stripe.publishableKey = 'pk_test_51LC8G9BH7DonVD3DWVatc74bvTXy2GZBSWkFCk1GJdexQmlr0tZ7X5PoE8YRKxQZdjYQM1fT6h1YYnHURzSFDIuH000tdkXuQu';
    // final  raise = ModalRoute.of(context).settings.arguments as FundraiseModel;
    return BlocProvider(
      lazy: false,
      create: (context) => DonationBloc(fundraiseRepository: FundraiseRepository(fundraiseDataprovider: FundraiseDataprovider(httpClient: http.Client()))),
      child: Scaffold(
        // extendBodyBehindAppBar: true,

        appBar: AppBar(
          systemOverlayStyle: SystemUiOverlayStyle.light,

          leading: BackButton(
            color: Colors.black,
          ),
          backgroundColor: Colors.transparent,
          elevation: 0,
          // title: Text("Home", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 17),),
        ),
        body: Body(raise),
      ),
    );
  }
}
