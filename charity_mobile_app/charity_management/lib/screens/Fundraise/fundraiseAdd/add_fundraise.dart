import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Data/DataProvider/fundraise_dataprovider.dart';
import 'package:charity_management/Data/Repository/fundraise_repository.dart';
import 'package:charity_management/screens/Fundraise/fundraiseAdd/components.dart/body.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'package:http/http.dart' as http;

class AddFundraise extends StatelessWidget {
  static const routeName = 'AddFundraise';
  //FundraiseModel raise;
  //AddFundraise(this.raise);

  @override
  Widget build(BuildContext context) {
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
        body: Body(),
      ),
    );
  }
}
