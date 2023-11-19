import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISJjcukДоговорLForm from './forms/i-i-s-jjcuk-договор-l';
import IISJjcukДолжностиLForm from './forms/i-i-s-jjcuk-должности-l';
import IISJjcukКонтрагентLForm from './forms/i-i-s-jjcuk-контрагент-l';
import IISJjcukОрганизацияLForm from './forms/i-i-s-jjcuk-организация-l';
import IISJjcukПерсоналLForm from './forms/i-i-s-jjcuk-персонал-l';
import IISJjcukРукОтдЛогLForm from './forms/i-i-s-jjcuk-рук-отд-лог-l';
import IISJjcukДоговорEForm from './forms/i-i-s-jjcuk-договор-e';
import IISJjcukДолжностиEForm from './forms/i-i-s-jjcuk-должности-e';
import IISJjcukКонтрагентEForm from './forms/i-i-s-jjcuk-контрагент-e';
import IISJjcukОрганизацияEForm from './forms/i-i-s-jjcuk-организация-e';
import IISJjcukПерсоналEForm from './forms/i-i-s-jjcuk-персонал-e';
import IISJjcukРукОтдЛогEForm from './forms/i-i-s-jjcuk-рук-отд-лог-e';
import IISJjcukДоговорModel from './models/i-i-s-jjcuk-договор';
import IISJjcukДолжностиModel from './models/i-i-s-jjcuk-должности';
import IISJjcukКонтрагентModel from './models/i-i-s-jjcuk-контрагент';
import IISJjcukОрганизацияModel from './models/i-i-s-jjcuk-организация';
import IISJjcukПерсоналModel from './models/i-i-s-jjcuk-персонал';
import IISJjcukРукОтдЛогModel from './models/i-i-s-jjcuk-рук-отд-лог';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-jjcuk-договор': IISJjcukДоговорModel,
    'i-i-s-jjcuk-должности': IISJjcukДолжностиModel,
    'i-i-s-jjcuk-контрагент': IISJjcukКонтрагентModel,
    'i-i-s-jjcuk-организация': IISJjcukОрганизацияModel,
    'i-i-s-jjcuk-персонал': IISJjcukПерсоналModel,
    'i-i-s-jjcuk-рук-отд-лог': IISJjcukРукОтдЛогModel
  },

  'application-name': 'Jjcuk',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Jjcuk',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Jjcuk',
          title: 'Jjcuk'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        jjcuk: {
          caption: 'Jjcuk',
          title: 'Jjcuk',
          'i-i-s-jjcuk-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-jjcuk-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-jjcuk-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-jjcuk-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-jjcuk-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-jjcuk-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-jjcuk-договор-l': IISJjcukДоговорLForm,
    'i-i-s-jjcuk-должности-l': IISJjcukДолжностиLForm,
    'i-i-s-jjcuk-контрагент-l': IISJjcukКонтрагентLForm,
    'i-i-s-jjcuk-организация-l': IISJjcukОрганизацияLForm,
    'i-i-s-jjcuk-персонал-l': IISJjcukПерсоналLForm,
    'i-i-s-jjcuk-рук-отд-лог-l': IISJjcukРукОтдЛогLForm,
    'i-i-s-jjcuk-договор-e': IISJjcukДоговорEForm,
    'i-i-s-jjcuk-должности-e': IISJjcukДолжностиEForm,
    'i-i-s-jjcuk-контрагент-e': IISJjcukКонтрагентEForm,
    'i-i-s-jjcuk-организация-e': IISJjcukОрганизацияEForm,
    'i-i-s-jjcuk-персонал-e': IISJjcukПерсоналEForm,
    'i-i-s-jjcuk-рук-отд-лог-e': IISJjcukРукОтдЛогEForm
  },

});

export default translations;
