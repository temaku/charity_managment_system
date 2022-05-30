import 'package:charity_management/Bloc/charity_bloc.dart/bloc/charity_bloc.dart';
import 'package:charity_management/screens/Home/donation_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class HomeBody extends StatelessWidget {
  const HomeBody({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<CharityBloc, CharityState>(
      builder: (context, state) {
         if(state is CharitySuccess){
           return ListView.builder(
            itemCount: state.charityModel.length,
            itemBuilder: (BuildContext context, int index) {
              return DonationCard(state.charityModel[index]);
            }
            );
      }
      return Container();
      }
    );

  
  }
}
