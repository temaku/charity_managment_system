part of 'event_bloc.dart';

abstract class EventState extends Equatable {
  const EventState();
  
  @override
  List<Object> get props => [];
}

class EventInitial extends EventState {}

class EventLoading extends EventState{}

class EventSuccess extends EventState{
  List<EventModel> events;
  EventSuccess(this.events);

  @override
  // TODO: implement props
  List<Object> get props => [events];
}

class EventFailure extends EventState{}