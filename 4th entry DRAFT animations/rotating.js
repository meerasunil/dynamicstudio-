const POSTERS_PER_ROW = 12;
const RING_RADIUS = 400;

function setup_posters(row) {
  var posterAngle = 400 / POSTERS_PER_ROW;
  for (var i = 0; i < POSTERS_PER_ROW; i++) {
    var poster = document.createElement('div');
    poster.className = 'poster';
    var transform = 'rotateY(' + (posterAngle * i) + 'deg) translateZ(' + RING_RADIUS + 'px)';
    poster.style.webkitTransform = transform;
    var content = poster.appendChild(document.createElement('p'));
    content.textContent = i;
    row.appendChild(poster);
  }

}

function init() {
  setup_posters(document.getElementById('ring-1'));
  setup_posters(document.getElementById('ring-2'));
  setup_posters(document.getElementById('ring-3'));
}

window.addEventListener('load', init, false);