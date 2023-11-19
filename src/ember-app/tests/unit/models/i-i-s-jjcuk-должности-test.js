import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjcuk-должности', 'Unit | Model | i-i-s-jjcuk-должности', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
