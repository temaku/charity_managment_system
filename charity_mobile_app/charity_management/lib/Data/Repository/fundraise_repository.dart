import 'package:charity_management/Data/DataProvider/fundraise_dataprovider.dart';
import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:flutter/cupertino.dart';

class FundraiseRepository {
  FundraiseDataprovider fundraiseDataprovider;
  FundraiseRepository({@required this.fundraiseDataprovider});


  Future<List<FundraiseModel>> getAllFundraises() async{
    return await fundraiseDataprovider.getAllFundraises();
  }

  Future<void> donate(DonationModel donation) async{
    return await fundraiseDataprovider.donate(donation);
  }

  Future<void> fundraise(FundraiseModel fundraise) async{
    return await fundraiseDataprovider.fundraise(fundraise);
  }
}