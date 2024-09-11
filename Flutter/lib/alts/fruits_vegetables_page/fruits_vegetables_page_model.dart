import '/components/top_nav/top_nav_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'fruits_vegetables_page_widget.dart' show FruitsVegetablesPageWidget;
import 'package:flutter/material.dart';

class FruitsVegetablesPageModel
    extends FlutterFlowModel<FruitsVegetablesPageWidget> {
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
