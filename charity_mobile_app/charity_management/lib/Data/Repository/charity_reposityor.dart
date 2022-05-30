import 'package:charity_management/Data/DataProvider/charity_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/charity_dataprovider.dart';
import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:flutter/cupertino.dart';

class CharityRepository{
  CharityDataProvider charityDataProvider;
  
  CharityRepository({@required this.charityDataProvider});

  Future<List<CharityModel>> getAllCharitys(String token) async{
    return await charityDataProvider.getAllCharitys(token);
    
  }
}