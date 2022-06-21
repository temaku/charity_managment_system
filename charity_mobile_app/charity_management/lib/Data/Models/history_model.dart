import 'package:equatable/equatable.dart';

class HistoryModel extends Equatable{
  String id;
  String charityName;
  String charityDescription;
 // String donor;
  String DonationOption;
  String status;
  int phone;
  int donate;
  String donatedAt;
  

  HistoryModel({this.id, this.charityName, this.charityDescription, this.DonationOption, this.status, this.phone, this.donate,this.donatedAt});


  factory HistoryModel.fromJson(Map<String,dynamic> parsedJson) {
    return HistoryModel(
      id: parsedJson['_id'],
      charityName: parsedJson['charity']['name'],
      charityDescription: parsedJson['charity']['description'],
      
      DonationOption: parsedJson['DonationOption'],
      status: parsedJson['status'],
      phone: parsedJson['phone'],
      donate: parsedJson['donate'],
      donatedAt: parsedJson['donatedAt']
     

    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,DonationOption,status,donatedAt];
}