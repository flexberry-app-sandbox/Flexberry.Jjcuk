import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-jjcuk-договор-l');
  this.route('i-i-s-jjcuk-договор-e',
  { path: 'i-i-s-jjcuk-договор-e/:id' });
  this.route('i-i-s-jjcuk-договор-e.new',
  { path: 'i-i-s-jjcuk-договор-e/new' });
  this.route('i-i-s-jjcuk-должности-l');
  this.route('i-i-s-jjcuk-должности-e',
  { path: 'i-i-s-jjcuk-должности-e/:id' });
  this.route('i-i-s-jjcuk-должности-e.new',
  { path: 'i-i-s-jjcuk-должности-e/new' });
  this.route('i-i-s-jjcuk-контрагент-l');
  this.route('i-i-s-jjcuk-контрагент-e',
  { path: 'i-i-s-jjcuk-контрагент-e/:id' });
  this.route('i-i-s-jjcuk-контрагент-e.new',
  { path: 'i-i-s-jjcuk-контрагент-e/new' });
  this.route('i-i-s-jjcuk-организация-l');
  this.route('i-i-s-jjcuk-организация-e',
  { path: 'i-i-s-jjcuk-организация-e/:id' });
  this.route('i-i-s-jjcuk-организация-e.new',
  { path: 'i-i-s-jjcuk-организация-e/new' });
  this.route('i-i-s-jjcuk-персонал-l');
  this.route('i-i-s-jjcuk-персонал-e',
  { path: 'i-i-s-jjcuk-персонал-e/:id' });
  this.route('i-i-s-jjcuk-персонал-e.new',
  { path: 'i-i-s-jjcuk-персонал-e/new' });
  this.route('i-i-s-jjcuk-рук-отд-лог-l');
  this.route('i-i-s-jjcuk-рук-отд-лог-e',
  { path: 'i-i-s-jjcuk-рук-отд-лог-e/:id' });
  this.route('i-i-s-jjcuk-рук-отд-лог-e.new',
  { path: 'i-i-s-jjcuk-рук-отд-лог-e/new' });
});

export default Router;
