part of 'charity_bloc.dart';

abstract class CharityEvent extends Equatable {
  const CharityEvent();

  @override
  List<Object> get props => [];
}

class FetchCharity extends CharityEvent{}

class RefreshCharity extends CharityEvent{}


class DonateToNodeCharity extends CharityEvent{
  //DonationModel raise;
  String  amount;
  String id;

  DonateToNodeCharity(this.amount, this.id);
}