const btnQuote = document.getElementById('btn-quote');
const quote = document.getElementById('quote');
const btnDeliveries = document.getElementById('btn-deliveries');
const deliveries = document.getElementById('deliveries');

btnQuote.addEventListener('click', () => {
  deliveries.classList.add('hidden');
  btnDeliveries.classList.remove('active');

  quote.classList.remove('hidden');
  btnQuote.classList.add('active');
});

btnDeliveries.addEventListener('click', () => {
  deliveries.classList.remove('hidden');
  btnDeliveries.classList.add('active');

  quote.classList.add('hidden');
  btnQuote.classList.remove('active');
});


const item = document.getElementById('item');
const modal = document.getElementById('modal');
const btnAccept = document.getElementById('aceptar');
const btnAccept2 = document.getElementById('btn-accept');
const btnCancel = document.getElementById('rechazar');
const tableHidden = document.getElementById('table-hidden');

btnAccept.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

btnCancel.addEventListener('click', () => {
  item.innerHTML = '';
  item.className = '';
});

btnAccept2.addEventListener('click', () => {
  modal.classList.add('hidden');
  item.innerHTML = '';
  item.className = '';
  tableHidden.classList.remove('table-hidden');
});
