import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  персонал: DS.belongsTo('i-i-s-jjcuk-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  персонал: {
    descriptionKey: 'models.i-i-s-jjcuk-рук-отд-лог.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РукОтдЛогE', 'i-i-s-jjcuk-рук-отд-лог', {
    
  });

  modelClass.defineProjection('РукОтдЛогL', 'i-i-s-jjcuk-рук-отд-лог', {
    
  });
};
