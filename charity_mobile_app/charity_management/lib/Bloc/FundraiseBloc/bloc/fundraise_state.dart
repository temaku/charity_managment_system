part of 'fundraise_bloc.dart';

abstract class FundraiseState extends Equatable {
  const FundraiseState();
  
  @override
  List<Object> get props => [];
}

class FundraiseInitial extends FundraiseState {}

class FundraiseLoading extends FundraiseState{}

class FundraiseSucess extends FundraiseState{
  List<FundraiseModel> fundraises;
  FundraiseSucess(this.fundraises);

  @override
  // TODO: implement props
  List<Object> get props => [fundraises];
}

class FundraiseFailure extends FundraiseState{}

class DonationState{}
class DonationInitial extends DonationState{}

class DonationFundSucess extends DonationState{
  var response;
  DonationFundSucess(this.response);
}

class DonationFundFailed extends DonationState{}

class DonationFundLoading extends DonationState{}

class AddFundraiseSucess extends DonationState{}

class AddFundraiseFailed extends DonationState{}

class AddFundraiseLoading extends DonationState{}

class DonationNodeSucess extends DonationState{

}

class DonationNodeFailed extends DonationState{}

class DonationNodeLoading extends DonationState{}