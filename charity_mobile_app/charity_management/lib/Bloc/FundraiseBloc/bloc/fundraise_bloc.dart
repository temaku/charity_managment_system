import 'package:bloc/bloc.dart';
import 'package:charity_management/Data/Models/donation_model.dart';
import 'package:charity_management/Data/Models/fundraise_model.dart';
import 'package:charity_management/Data/Repository/fundraise_repository.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

part 'fundraise_event.dart';
part 'fundraise_state.dart';

class FundraiseBloc extends Bloc<FundraiseEvent, FundraiseState> {
  FundraiseRepository fundraiseRepository;
  FundraiseBloc({@required this.fundraiseRepository}) : super(FundraiseInitial());

  @override
  Stream<FundraiseState> mapEventToState(FundraiseEvent event) async* {
    // TODO: implement mapEventToState

    if(event is FetchFundraise){
      yield FundraiseLoading();
      try {

        final response = await fundraiseRepository.getAllFundraises();
        yield FundraiseSucess(response);
        
      } catch (e) {
        yield FundraiseFailure();
      }
      
      

    }

    if(event is DonateToFundraise){
      try {
        final response = await fundraiseRepository.donate(event.raise);
        yield DonationFundSucess();
        
      } catch (e) {
        yield DonationFundFailed();
      }
    }

    if(event is AddFundraise){
      try {
        final response = await fundraiseRepository.fundraise(event.fundraise);
        yield AddFundraiseSucess();
        
      } catch (e) {
        yield AddFundraiseFailed();
      }
    }
  }
  
}
