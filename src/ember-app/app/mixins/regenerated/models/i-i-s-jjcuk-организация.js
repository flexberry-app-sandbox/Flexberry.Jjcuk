import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  юрАдрес: DS.attr('string')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-jjcuk-организация.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-jjcuk-организация', {
    иНН: attr('ИНН', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    оГРН: attr('ОГРН', { index: 2 }),
    почта: attr('Почта', { index: 3 }),
    юрАдрес: attr('Юр адрес', { index: 4 }),
    наименование: attr('Наименование', { index: 5 }),
    кПП: attr('КПП', { index: 6 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-jjcuk-организация', {
    иНН: attr('ИНН', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    оГРН: attr('ОГРН', { index: 2 }),
    почта: attr('Почта', { index: 3 }),
    юрАдрес: attr('Юр адрес', { index: 4 }),
    наименование: attr('Наименование', { index: 5 }),
    кПП: attr('КПП', { index: 6 })
  });
};
