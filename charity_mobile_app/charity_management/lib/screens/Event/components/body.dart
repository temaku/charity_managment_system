import 'package:charity_management/Bloc/EventBloc/bloc/event_bloc.dart';
import 'package:charity_management/screens/Event/components/event_card.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return BlocBuilder<EventBloc, EventState>(
      builder: (context, state) {
        if(state is EventSuccess){
        return ListView.builder(
            itemCount: state.events.length,
            itemBuilder: (BuildContext context, int index) {
              return EventCard(state.events[index]);
            });

        }else if (state is EventLoading){
          return CircularProgressIndicator();
        }
        return Container();
      },
    );
  }
}
