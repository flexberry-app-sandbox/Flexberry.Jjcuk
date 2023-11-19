import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаключ: DS.attr('date'),
  датаНачала: DS.attr('date'),
  датаОконч: DS.attr('date'),
  обязанПосред: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-jjcuk-контрагент', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-jjcuk-организация', { inverse: null, async: false }),
  рукОтдЛог: DS.belongsTo('i-i-s-jjcuk-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаключ: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.датаЗаключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  обязанПосред: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.обязанПосред.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-jjcuk-договор.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-jjcuk-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаОконч: attr('Дата оконч', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-jjcuk-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаОконч: attr('Дата оконч', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 })
  });
};
