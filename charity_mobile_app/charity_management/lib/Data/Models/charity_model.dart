import 'package:equatable/equatable.dart';

class CharityModel extends Equatable{
  String id;
  String name;
  String description;
  String category;
  String image;
  String email;
  String address;
  String phone;
  int NumOfDonors;
  int SumOfDonations;
  String createdAt;
  String updatedAt;

  CharityModel({this.id, this.name, this.description, this.category, this.image, this.email, this.address, this.phone, this.NumOfDonors, this.SumOfDonations,this.createdAt,this.updatedAt});

  factory CharityModel.fromJson(Map<String, dynamic> parsedJson){
    return CharityModel(
      id: parsedJson['id'],
      name: parsedJson['name'],
      description: parsedJson['description'],
      category: parsedJson['category'],
      image: parsedJson['image'],
      email: parsedJson['email'],
      address: parsedJson['address'],
      phone: parsedJson['phone'],
      NumOfDonors: parsedJson['NumOfDonors'],
      SumOfDonations: parsedJson['SumOfDonations'],
      createdAt: parsedJson['createdAt'],
      updatedAt: parsedJson['updatedAt'],
    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,name,description,category,image,email,address,phone,NumOfDonors,SumOfDonations,createdAt,updatedAt];

}