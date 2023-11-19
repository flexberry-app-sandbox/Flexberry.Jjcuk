import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-jjcuk-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-jjcuk-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-jjcuk-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('I d должности', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-jjcuk-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('I d должности', { index: 1 })
  });
};
