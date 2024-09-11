import '/components/top_nav/top_nav_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'offers40_widget.dart' show Offers40Widget;
import 'package:flutter/material.dart';

class Offers40Model extends FlutterFlowModel<Offers40Widget> {
  ///  State fields for stateful widgets in this page.

  // Model for topNav component.
  late TopNavModel topNavModel;

  @override
  void initState(BuildContext context) {
    topNavModel = createModel(context, () => TopNavModel());
  }

  @override
  void dispose() {
    topNavModel.dispose();
  }
}
