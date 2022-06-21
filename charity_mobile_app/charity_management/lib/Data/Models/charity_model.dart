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
  int numOfDonors;
  int sumOfDonations;
  String createdAt;
  String updatedAt;

  CharityModel({this.id, this.name, this.description, this.category, this.image, this.email, this.address, this.phone, this.numOfDonors, this.sumOfDonations,this.createdAt,this.updatedAt});

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
      numOfDonors: parsedJson['NumOfDonors'],
      sumOfDonations: parsedJson['SumofDonations'],
      createdAt: parsedJson['createdAt'],
      updatedAt: parsedJson['updatedAt'],
    );
  }

  @override
  // TODO: implement props
  List<Object> get props => [id,name,description,category,image,email,address,phone,numOfDonors,sumOfDonations,createdAt,updatedAt];

}