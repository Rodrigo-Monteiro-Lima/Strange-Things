import {
  getHellfireSubscriptions,
  subscribeToHellfireClube,
} from './data/hellfire-clube.js';

(function main() {
  const txtName = document.querySelector('#txtName');
  const txtEmail = document.querySelector('#txtEmail');
  const txtLevel = document.querySelector('#txtLevel');
  const txtCharacter = document.querySelector('#txtCharacter');
  document
    .querySelector('#btnSubscribe')
    .addEventListener('click', async () => {
      const subscribe = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
      };
      const id = await subscribeToHellfireClube(subscribe);
      alert(`Inscrição ${id} adicionada com sucesso!`);
    });
})();

const loadData = async () => {
  const subscriptions = await getHellfireSubscriptions();
  console.log(subscriptions);
};

loadData();
