import 'package:charity_management/screens/Profile/profile.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';


class UserModel extends Equatable{
  String id;
  String username;
  String email;
  String photo;
  String phone;
  String address;
  String role;
  //String password;
  int noOfDonation;
  int totalDonations;
  bool active;


  UserModel(
    {
       this.id,
       this.username,
       this.email,
       this.photo,
       this.phone,
       this.address,
       this.role,
       this.noOfDonation,
       this.totalDonations,
       this.active,

    }
  );

  factory UserModel.fromJson(Map<String, dynamic> parsedJson){
    return UserModel(
      id: parsedJson['id'], 
      username: parsedJson['username'], 
      email: parsedJson['email'], 
      photo: parsedJson['photo'], 
      phone: parsedJson['phone'], 
      address: parsedJson['address'], 
      role: parsedJson['role'], 
      noOfDonation: parsedJson['noOfDonations'],
      totalDonations: parsedJson['totalDonations'],
      active: parsedJson['active'],
      );
  }



  @override
  // TODO: implement props
  List<Object> get props => [id,username,email,phone,address,role,noOfDonation,totalDonations];

  @override
  String toString() => 'User{id: $id, firstname: $username, lastname: $email, username: $phone, email: $email, password: $active, photo: $photo, role: $role}';
  

}