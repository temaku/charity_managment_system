part of 'event_bloc.dart';

abstract class EventEvent extends Equatable {
  const EventEvent();

  @override
  List<Object> get props => [];
}

class FetchEvent extends EventEvent{}

class RefreshEvent extends EventEvent{}