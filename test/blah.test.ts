import Repiq from '../src';

const instance = new Repiq();

fetch('/api').then(response => {
  instance.push('/api', response);
});

instance.addEventListenerToProcess('/api', data => {});
function onClickApiButton() {}
