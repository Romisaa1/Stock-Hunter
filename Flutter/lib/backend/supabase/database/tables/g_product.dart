import '../database.dart';

class GProductTable extends SupabaseTable<GProductRow> {
  @override
  String get tableName => 'GProduct';

  @override
  GProductRow createRow(Map<String, dynamic> data) => GProductRow(data);
}

class GProductRow extends SupabaseDataRow {
  GProductRow(super.data);

  @override
  SupabaseTable get table => GProductTable();

  int get id => getField<int>('id')!;
  set id(int value) => setField<int>('id', value);

  DateTime get createdAt => getField<DateTime>('created_at')!;
  set createdAt(DateTime value) => setField<DateTime>('created_at', value);

  String get name => getField<String>('name')!;
  set name(String value) => setField<String>('name', value);

  String? get description => getField<String>('Description');
  set description(String? value) => setField<String>('Description', value);
}
