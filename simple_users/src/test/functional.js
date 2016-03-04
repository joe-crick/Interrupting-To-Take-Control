import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('simple_users functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('simple_users main page shows up', function() {
  F('title').text('simple_users', 'Title is set');
});
