import 'package:charity_management/Bloc/bloc_observer.dart';
import 'package:charity_management/Data/DataProvider/authentication_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/charity_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/event_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/fundraise_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/task_dataprovider.dart';
import 'package:charity_management/Data/DataProvider/user_dataprovider.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/Data/Repository/charity_reposityor.dart';
import 'package:charity_management/Data/Repository/event_repository.dart';
import 'package:charity_management/Data/Repository/fundraise_repository.dart';
import 'package:charity_management/Data/Repository/task_repository.dart';
import 'package:charity_management/Data/Repository/user_repository.dart';
import 'package:charity_management/app.dart';
import 'package:flutter/material.dart';
import "package:flutter_bloc/flutter_bloc.dart";
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:http/http.dart' as http;


void main() async {

  WidgetsFlutterBinding.ensureInitialized();
  Stripe.publishableKey = 'pk_test_51LC8G9BH7DonVD3DWVatc74bvTXy2GZBSWkFCk1GJdexQmlr0tZ7X5PoE8YRKxQZdjYQM1fT6h1YYnHURzSFDIuH000tdkXuQu';
 // Stripe.merchantIdentifier = "taf";
  //await Stripe.instance.applySettings();


  Bloc.observer = blocObserver();
  final UserRepository userRepository = UserRepository(dataProvider: UserDataProvider(httpClient: http.Client()));
  final AuthenticationRepository authenticationRepository = AuthenticationRepository(authenticationDataProvider: AuthenticationDataProvider(httpClient: http.Client()));
  final CharityRepository charityRepository = CharityRepository(charityDataProvider: CharityDataProvider(httpClient: http.Client()));
  final FundraiseRepository fundraiseRepository = FundraiseRepository(fundraiseDataprovider: FundraiseDataprovider(httpClient: http.Client()));
  final TaskRepository taskRepository = TaskRepository(taskDataprovider: TaskDataprovider(httpClient: http.Client()));
  final EventRepository eventRepository = EventRepository(eventDataprovider: EventDataprovider(httpClient: http.Client()));


  runApp(MyApp(authenticationRepository: authenticationRepository, charityRepository: charityRepository, fundraiseRepository: fundraiseRepository, eventRepository: eventRepository, taskRepository: taskRepository, userRepository: userRepository,));
}