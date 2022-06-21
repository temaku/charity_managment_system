import 'package:charity_management/Bloc/FundraiseBloc/bloc/fundraise_bloc.dart';
import 'package:charity_management/Bloc/charity_bloc.dart/bloc/charity_bloc.dart';
import 'package:charity_management/screens/Fundraise/components/fundraise_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Body extends StatelessWidget {
  const Body({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<FundraiseBloc, FundraiseState>(
      builder: (context, state) {
        if(state is FundraiseLoading){
          return Center(child: CircularProgressIndicator(),);
        }
        else if( 
        state is FundraiseSucess
          ){
        return  RefreshIndicator(
          onRefresh: () async{BlocProvider.of<FundraiseBloc>(context).add(FetchFundraise());},
          child: ListView.builder(
                  itemCount: state.fundraises.length,
                  itemBuilder: (BuildContext context, int index) {
                    return FundraiseCard(state.fundraises[index], index);
                    
                  },
                  
                  ),
        );
        }

        
        return Container();
      },
    );
  }
}

