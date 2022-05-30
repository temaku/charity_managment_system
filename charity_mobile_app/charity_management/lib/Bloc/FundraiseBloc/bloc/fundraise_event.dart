part of 'fundraise_bloc.dart';

abstract class FundraiseEvent extends Equatable {
  const FundraiseEvent();

  @override
  List<Object> get props => [];
}

class FetchFundraise extends FundraiseEvent{}

class RefreshFundraise extends FundraiseEvent{}

class DonateToFundraise extends FundraiseEvent{
  DonationModel raise;
  DonateToFundraise(this.raise);
}

class AddFundraise extends FundraiseEvent{
  FundraiseModel fundraise;
  AddFundraise(this.fundraise);
}

