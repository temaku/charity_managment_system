import 'package:bloc/bloc.dart';
import 'package:charity_management/Data/Models/event_model.dart';
import 'package:charity_management/Data/Repository/event_repository.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

part 'event_event.dart';
part 'event_state.dart';

class EventBloc extends Bloc<EventEvent, EventState> {
  EventRepository eventRepository;
  EventBloc({@required this.eventRepository}) : super(EventInitial());

  @override
  Stream<EventState> mapEventToState(EventEvent event) async*{
    // TODO: implement mapEventToState
    if(event is FetchEvent){
      yield EventLoading();
      try {

        final response = await eventRepository.getAllEvents();
        yield EventSuccess(response);
        
      } catch (e) {
        yield EventFailure();
      }
      
      

    }
  }
  
}
