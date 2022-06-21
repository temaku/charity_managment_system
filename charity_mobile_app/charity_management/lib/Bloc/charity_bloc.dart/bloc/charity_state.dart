part of 'charity_bloc.dart';

abstract class CharityState extends Equatable {
  const CharityState();
  
  @override
  List<Object> get props => [];
}

class CharityInitial extends CharityState {}

class CharityLoading extends CharityState{}

class CharitySuccess extends CharityState{
  List<CharityModel> charityModel;
  CharitySuccess(this.charityModel);

  @override
  // TODO: implement props
  List<Object> get props => [charityModel];
}


class CharityFailure extends CharityState{}

class DonationNodeSucess extends CharityState{

}

class DonationNodeFailed extends CharityState{}

class DonationNodeLoading extends CharityState{}