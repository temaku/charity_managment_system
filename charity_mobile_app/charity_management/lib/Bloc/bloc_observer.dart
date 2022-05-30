import 'package:flutter_bloc/flutter_bloc.dart';

class blocObserver extends BlocObserver{
  
  @override
  void onTransition(Bloc bloc, Transition transition) {
    // TODO: implement onTransition
    super.onTransition(bloc, transition);
    print('${bloc.runtimeType} $transition');
  }

  @override
  void onEvent(Bloc bloc, Object event) {
    // TODO: implement onEvent
    super.onEvent(bloc, event);
    print('${bloc.runtimeType} $event');
  }

 
  
}

