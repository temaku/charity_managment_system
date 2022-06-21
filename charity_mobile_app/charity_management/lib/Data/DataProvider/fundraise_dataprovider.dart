import 'dart:convert';

import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
class FundraiseDataprovider {
  final _baseUrl = 'https://charity-manager-api.herokuapp.com/api';

  final http.Client httpClient;
  FundraiseDataprovider({@required this.httpClient});

  Future<List<FundraiseModel>> getAllFundraises() async{
    final response = await httpClient.get(
      "$_baseUrl/v1/fundraises",
      headers: <String, String>{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ${AuthenticationRepository.storage}',
             // HttpHeaders.authorizationHeader: '$token'

            }
            
    );

    if(response.statusCode == 200){
      final raises = jsonDecode(response.body)['data'] as List;
      return raises.map((raise) => FundraiseModel.fromJson(raise)).toList();
    }else{
      throw Exception("failed to fetch fundraises");
    }
  }


  Future<void> donate(DonationModel donation) async{
    final response = await httpClient.post(
      '$_baseUrl/v1/fundraises/${donation.id}/donate',
      
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
      },

      body: jsonEncode(<String, dynamic>{
        "username" : donation.username ,
        "phone": donation.phone,
        "password": donation.password,
        "donate": donation.amount,
        'donateOption' : donation.DonationOption,
        'userId' : donation.userId,
      }),
    );

    if(response.statusCode != 201){
     
      throw Exception("failed to to donate");
    }
  }



  Future<void> fundraise(FundraiseModel fundraise) async{
    final response = await httpClient.post(
      '$_baseUrl/v1/fundraises',
      
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
      },

      body: jsonEncode(<String, dynamic>{
        "title" : fundraise.title ,
        "description": fundraise.description,
        "amount": fundraise.amount,
        
      }),
    );

    if(response.statusCode != 201){
      
      
    
      throw Exception("failed to fetch fundraises");
    }
  }




    Future<dynamic> createPaymentIntent(DonationModel donation, String currency) async{
    try {
       final response = await httpClient.post(
      '$_baseUrl/v1/donations/payment-sheet',
      
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ${AuthenticationRepository.storage}',
      },

      body: jsonEncode(<String, dynamic>{
        "amount" : donation.amount,
        'currency' : currency,
        'userId' : donation.userId,
        'charityOrFundId' : donation.id
      },
       ));

    return jsonDecode(response.body);
      
    } catch (e) {
      throw Exception(e.toString());
    }
   



}
}



