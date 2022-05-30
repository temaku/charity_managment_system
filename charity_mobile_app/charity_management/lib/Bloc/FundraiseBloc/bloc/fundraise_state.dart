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

class DonationFundSucess extends FundraiseState{}

class DonationFundFailed extends FundraiseState{}

class AddFundraiseSucess extends FundraiseState{}

class AddFundraiseFailed extends FundraiseState{}

