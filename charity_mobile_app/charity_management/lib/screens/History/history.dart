import 'package:charity_management/Bloc/UserBloc/user_bloc.dart';
import 'package:charity_management/Bloc/UserBloc/user_state.dart';
import 'package:charity_management/Data/DataProvider/user_dataprovider.dart';
import 'package:charity_management/Data/Repository/charity_reposityor.dart';
import 'package:charity_management/Data/Repository/user_repository.dart';
import 'package:charity_management/screens/History/components/body.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:http/http.dart' as http;

class History extends StatelessWidget {
  static const routeName = 'History';
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          color: Colors.black,
        ),
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text(
          "HISTORY",
          style: TextStyle(
              color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 18),
        ),
      ),
      body: RepositoryProvider(
        create: (context) => UserRepository(dataProvider: UserDataProvider(httpClient: http.Client())),
        child: BlocBuilder<UserBloc, UserState>(
          builder: (context, state) {
            if (state is UserHistorySuccess) {

              return ListView.builder(
                itemCount: state.historys.length,
                itemBuilder: (BuildContext context, int index) {
                 // final charity =  await RepositoryProvider.of<CharityRepository>(context).getSingleCharity(state.historys[index].charity);
                  return Body(state.historys[index]);
                },
              );
            }
            return Container();
          },
        ),
      ),
    );
  }
}
