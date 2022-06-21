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

    

    
  }
  
}



class DonationBloc extends Bloc<DonationEvent, DonationState> {
  FundraiseRepository fundraiseRepository;
  DonationBloc({@required this.fundraiseRepository}) : super(DonationInitial());

  @override
  Stream<DonationState> mapEventToState(DonationEvent event) async* {
    // TODO: implement mapEventToState

    if(event is DonateToFundraise){
      yield DonationFundLoading();
      try {
        //final response = await fundraiseRepository.donate(event.raise);
        final response = await fundraiseRepository.createPaymentIntent(event.donation, event.currency);
        yield DonationFundSucess(response);
        
      } catch (e) {
        yield DonationFundFailed();
        
      }
    }

    if(event is DonateToNode){
      yield DonationNodeLoading();
      try {
        final response = await fundraiseRepository.donate(event.donation);
        //final response = await fundraiseRepository.createPaymentIntent(event.donation, event.currency);
        yield DonationNodeSucess();
        
      } catch (e) {
        yield DonationNodeFailed();
        
      }
    }


    if(event is AddFundraise){
      yield AddFundraiseLoading();
      try {
        final response = await fundraiseRepository.fundraise(event.fundraise);
        yield AddFundraiseSucess();
        
      } catch (e) {
        yield AddFundraiseFailed();
      }
    }

  }

}