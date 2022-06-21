part of 'fundraise_bloc.dart';

abstract class FundraiseEvent extends Equatable {
  const FundraiseEvent();

  @override
  List<Object> get props => [];
}

class FetchFundraise extends FundraiseEvent{}

class RefreshFundraise extends FundraiseEvent{}

class DonationEvent{}

class DonateToFundraise extends DonationEvent{
  //DonationModel raise;
  DonationModel donation;
  String currency;
  DonateToFundraise(this.donation, this.currency);
}

class DonateToNode extends DonationEvent{
  //DonationModel raise;
  DonationModel donation;

  DonateToNode(this.donation,);
}


class AddFundraise extends DonationEvent{
  FundraiseModel fundraise;
  AddFundraise(this.fundraise);
}

