import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.jjcuk.caption'),
          title: i18n.t('forms.application.sitemap.jjcuk.title'),
          children: [{
            link: 'i-i-s-jjcuk-договор-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-договор-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-jjcuk-контрагент-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-контрагент-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-jjcuk-персонал-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-персонал-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-jjcuk-должности-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-должности-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-jjcuk-организация-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-организация-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-jjcuk-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcuk.i-i-s-jjcuk-рук-отд-лог-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})