part of 'charity_bloc.dart';

abstract class CharityEvent extends Equatable {
  const CharityEvent();

  @override
  List<Object> get props => [];
}

class FetchCharity extends CharityEvent{}

class RefreshCharity extends CharityEvent{}
