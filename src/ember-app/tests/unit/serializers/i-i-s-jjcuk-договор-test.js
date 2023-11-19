import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjcuk-договор', 'Unit | Serializer | i-i-s-jjcuk-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-jjcuk-договор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-jjcuk-договор',
    'model:i-i-s-jjcuk-должности',
    'model:i-i-s-jjcuk-контрагент',
    'model:i-i-s-jjcuk-организация',
    'model:i-i-s-jjcuk-персонал',
    'model:i-i-s-jjcuk-рук-отд-лог',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
