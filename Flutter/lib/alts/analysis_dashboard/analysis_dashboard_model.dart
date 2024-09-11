import '/flutter_flow/flutter_flow_util.dart';
import 'analysis_dashboard_widget.dart' show AnalysisDashboardWidget;
import 'package:flutter/material.dart';

class AnalysisDashboardModel extends FlutterFlowModel<AnalysisDashboardWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    unfocusNode.dispose();
  }
}
