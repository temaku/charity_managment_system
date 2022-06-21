import 'package:bloc/bloc.dart';
import 'package:charity_management/Data/Models/charity_model.dart';
import 'package:charity_management/Data/Repository/authentication_repository.dart';
import 'package:charity_management/Data/Repository/charity_reposityor.dart';
import 'package:charity_management/screens/Donate/donate.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';

part 'charity_event.dart';
part 'charity_state.dart';

class CharityBloc extends Bloc<CharityEvent, CharityState> {
  CharityRepository charityRepository;
  CharityBloc({@required this.charityRepository}) : super(CharityInitial());

  @override
  Stream<CharityState> mapEventToState(CharityEvent event) async* {
    // TODO: implement mapEventToState
    if(event is FetchCharity){
      yield CharityLoading();
      try {
        final charitys = await charityRepository.getAllCharitys(AuthenticationRepository.storage);
        yield CharitySuccess(charitys);
        
      } catch (e) {
        yield CharityFailure();
      }

    }

    if(event is DonateToNodeCharity){
      yield DonationNodeLoading();
      try {
        final charitys = await charityRepository.donateToCharity(event.amount, event.id);
        yield DonationNodeSucess();
        
      } catch (e) {
        yield DonationNodeFailed();
      }

    }
  }
  
}
