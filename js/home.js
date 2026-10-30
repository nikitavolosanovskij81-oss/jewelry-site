/* Главная: блок новинок */
var arrivals = document.getElementById('new-arrivals');

function cardHTML(p) {
  return '<article class="card">' +
    '<img src="' + p.image + '" alt="' + p.alt + '" width="400" height="500" loading="lazy">' +
    '<div class="card-body">' +
      '<h3>' + p.name + '</h3>' +
      '<p class="card-meta">' + p.category + ' · ' + p.metal + '</p>' +
      '<p class="card-price">$' + p.price + '</p>' +
    '</div>' +
  '</article>';
}

arrivals.innerHTML = PRODUCTS
  .filter(function (p) { return p.isNew; })
  .slice(0, 3)
  .map(cardHTML)
  .join('');