import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  организация: DS.attr('string'),
  ответсЛицо: DS.attr('string')
});

export let ValidationRules = {
  организация: {
    descriptionKey: 'models.i-i-s-jjcuk-контрагент.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответсЛицо: {
    descriptionKey: 'models.i-i-s-jjcuk-контрагент.validations.ответсЛицо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-jjcuk-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-jjcuk-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 })
  });
};
