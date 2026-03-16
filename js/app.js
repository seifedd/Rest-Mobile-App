/* ============================================
   Restaurant Finder — Application Logic
   ============================================ */

// --- Restaurant Data ---
const RESTAURANTS = [
  {
    id: 1,
    name: "Le Petit Bistro",
    address: "12 Rue de la Paix, Downtown",
    rating: 5,
    specialty: "French",
    phone: "+1 (555) 234-5678",
    lat: 36.8065,
    lng: 10.1815,
    likes: 142,
    dislikes: 8,
    description: "An intimate French bistro offering classic dishes with a modern twist. Known for our coq au vin and crème brûlée, sourced from local farms.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Sakura Sushi",
    address: "45 Avenue Habib Bourguiba, Midtown",
    rating: 4,
    specialty: "Japanese",
    phone: "+1 (555) 345-6789",
    lat: 36.8002,
    lng: 10.1860,
    likes: 98,
    dislikes: 12,
    description: "Authentic Japanese cuisine featuring fresh sushi rolls, sashimi platters, and traditional ramen bowls prepared by our master chef.",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Pizzeria Napoli",
    address: "78 Via Roma, Little Italy",
    rating: 4,
    specialty: "Italian",
    phone: "+1 (555) 456-7890",
    lat: 36.8120,
    lng: 10.1755,
    likes: 210,
    dislikes: 15,
    description: "Wood-fired Neapolitan pizzas made with imported Italian ingredients. Our dough is fermented for 72 hours for the perfect crust.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "The Spice Route",
    address: "23 Market Street, Spice Quarter",
    rating: 5,
    specialty: "Indian",
    phone: "+1 (555) 567-8901",
    lat: 36.7950,
    lng: 10.1900,
    likes: 175,
    dislikes: 6,
    description: "A culinary journey through India's diverse regional cuisines. From butter chicken to dosa, every dish is crafted with hand-ground spices.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    name: "El Mariachi",
    address: "56 Calle Fiesta, Sunset Strip",
    rating: 3,
    specialty: "Mexican",
    phone: "+1 (555) 678-9012",
    lat: 36.8180,
    lng: 10.1680,
    likes: 67,
    dislikes: 22,
    description: "Vibrant Mexican cantina serving street-style tacos, fresh guacamole, and craft margaritas. Live mariachi music every weekend.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Golden Dragon",
    address: "89 Lotus Lane, Chinatown",
    rating: 4,
    specialty: "Chinese",
    phone: "+1 (555) 789-0123",
    lat: 36.8030,
    lng: 10.1785,
    likes: 134,
    dislikes: 18,
    description: "Traditional Cantonese and Szechuan dishes served in an elegant setting. Famous for our dim sum brunch and Peking duck.",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=600&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Chez Marcel",
    address: "34 Boulevard Saint-Germain, Arts District",
    rating: 5,
    specialty: "French",
    phone: "+1 (555) 890-1234",
    lat: 36.8095,
    lng: 10.1840,
    likes: 256,
    dislikes: 4,
    description: "Fine dining French restaurant with Michelin-trained chefs. Seasonal tasting menus paired with our curated wine selection.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Burger & Beyond",
    address: "101 Main Street, Food Hall",
    rating: 3,
    specialty: "American",
    phone: "+1 (555) 901-2345",
    lat: 36.7980,
    lng: 10.1920,
    likes: 89,
    dislikes: 30,
    description: "Gourmet burgers made with grass-fed beef and artisan buns. Don't miss our truffle fries and craft beer selection.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Olive & Vine",
    address: "67 Mediterranean Way, Harbor",
    rating: 4,
    specialty: "Mediterranean",
    phone: "+1 (555) 012-3456",
    lat: 36.8150,
    lng: 10.1710,
    likes: 112,
    dislikes: 9,
    description: "Fresh Mediterranean cuisine inspired by coastal flavors. Grilled seafood, mezze platters, and homemade hummus in a breezy setting.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop"
  },
  {
    id: 10,
    name: "Thai Orchid",
    address: "42 Silk Road, East Village",
    rating: 4,
    specialty: "Thai",
    phone: "+1 (555) 123-4567",
    lat: 36.8042,
    lng: 10.1802,
    likes: 156,
    dislikes: 11,
    description: "Authentic Thai cuisine with a perfect balance of sweet, sour, salty, and spicy. Our pad thai and green curry are legendary.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop"
  },
  {
    id: 11,
    name: "Dar El Jeld",
    address: "5 Rue Dar El Jeld, Medina",
    rating: 5,
    specialty: "Tunisian",
    phone: "+1 (555) 234-6789",
    lat: 36.7990,
    lng: 10.1700,
    likes: 198,
    dislikes: 3,
    description: "Award-winning Tunisian cuisine in a beautifully restored 18th-century palace. Experience traditional couscous, brik, and tagine.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop"
  },
  {
    id: 12,
    name: "Seoul Kitchen",
    address: "88 Gangnam Ave, K-Town",
    rating: 3,
    specialty: "Korean",
    phone: "+1 (555) 345-7890",
    lat: 36.8110,
    lng: 10.1880,
    likes: 76,
    dislikes: 19,
    description: "Korean BBQ and comfort food at its finest. Grill your own meats at the table and enjoy our banchan spread.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&h=400&fit=crop"
  },
  {
    id: 13,
    name: "La Terrazza",
    address: "15 Rooftop Plaza, Sky District",
    rating: 5,
    specialty: "Italian",
    phone: "+1 (555) 456-8901",
    lat: 36.8075,
    lng: 10.1765,
    likes: 231,
    dislikes: 7,
    description: "Rooftop Italian dining with panoramic city views. Handmade pasta, truffle risotto, and an extensive Italian wine cellar.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&h=400&fit=crop"
  },
  {
    id: 14,
    name: "Tandoori Nights",
    address: "99 Curry Lane, Flavor Town",
    rating: 4,
    specialty: "Indian",
    phone: "+1 (555) 567-9012",
    lat: 36.7965,
    lng: 10.1935,
    likes: 145,
    dislikes: 14,
    description: "Smoky tandoori dishes and rich curries made in our traditional clay oven. Best naan bread in the city.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop"
  },
  {
    id: 15,
    name: "The Catch",
    address: "7 Fisherman's Wharf, Portside",
    rating: 4,
    specialty: "Seafood",
    phone: "+1 (555) 678-0123",
    lat: 36.8200,
    lng: 10.1650,
    likes: 167,
    dislikes: 10,
    description: "Farm-to-table seafood restaurant with daily catches. Lobster bisque, grilled swordfish, and our famous clam chowder.",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop"
  }
];

// --- State ---
let state = {
  searchQuery: '',
  activeSpecialty: 'All',
  minRating: 0,
  sortBy: 'name',
  userLocation: null,
  interactions: {} // { [id]: 'liked' | 'disliked' }
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTheme();
  initSearch();
  initFilters();
  initSort();
  initLocation();
  render();
});

// --- Theme ---
function initTheme() {
  const saved = localStorage.getItem('rf-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rf-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

// --- Search ---
function initSearch() {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    render();
  });
}

// --- Filters ---
function initFilters() {
  const specialties = ['All', ...new Set(RESTAURANTS.map(r => r.specialty))];
  const container = document.getElementById('specialtyFilters');

  specialties.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (s === 'All' ? ' active' : '');
    btn.textContent = s;
    btn.id = `filter-${s.toLowerCase().replace(/\s+/g, '-')}`;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeSpecialty = s;
      render();
    });
    container.appendChild(btn);
  });

  // Star rating filter
  const starContainer = document.getElementById('starFilter');
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'star-btn';
    btn.textContent = '⭐';
    btn.title = `${i}+ stars`;
    btn.id = `star-filter-${i}`;
    btn.addEventListener('click', () => {
      if (state.minRating === i) {
        state.minRating = 0;
        starContainer.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
      } else {
        state.minRating = i;
        starContainer.querySelectorAll('.star-btn').forEach((b, idx) => {
          b.classList.toggle('active', idx < i);
        });
      }
      render();
    });
    starContainer.appendChild(btn);
  }
}

// --- Sort ---
function initSort() {
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    render();
  });
}

// --- Location ---
function initLocation() {
  const banner = document.getElementById('locationBanner');
  const btn = document.getElementById('enableLocation');

  if ('geolocation' in navigator) {
    btn.addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          state.userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          banner.querySelector('.location-text').textContent = '📍 Location enabled — sorting by proximity available';
          btn.textContent = 'Disable';
          btn.onclick = () => {
            state.userLocation = null;
            banner.querySelector('.location-text').textContent = '📍 Enable location for distance-based sorting';
            btn.textContent = 'Enable';
            if (state.sortBy === 'distance') {
              state.sortBy = 'name';
              document.getElementById('sortSelect').value = 'name';
            }
            render();
          };
          // Show distance sort option
          const distOpt = document.getElementById('sortDistance');
          if (distOpt) distOpt.disabled = false;
          render();
        },
        () => {
          banner.querySelector('.location-text').textContent = '⚠️ Location access denied';
        }
      );
    });
  } else {
    banner.style.display = 'none';
  }
}

// --- Filtering & Sorting ---
function getFilteredRestaurants() {
  let results = [...RESTAURANTS];

  // Apply search
  if (state.searchQuery) {
    results = results.filter(r =>
      r.name.toLowerCase().includes(state.searchQuery) ||
      r.specialty.toLowerCase().includes(state.searchQuery) ||
      r.address.toLowerCase().includes(state.searchQuery)
    );
  }

  // Apply specialty filter
  if (state.activeSpecialty !== 'All') {
    results = results.filter(r => r.specialty === state.activeSpecialty);
  }

  // Apply rating filter
  if (state.minRating > 0) {
    results = results.filter(r => r.rating >= state.minRating);
  }

  // Apply sort
  results.sort((a, b) => {
    switch (state.sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'likes':
        return getLikes(b) - getLikes(a);
      case 'distance':
        if (!state.userLocation) return 0;
        return getDistance(a) - getDistance(b);
      default:
        return 0;
    }
  });

  return results;
}

function getDistance(restaurant) {
  if (!state.userLocation) return Infinity;
  const R = 6371; // km
  const dLat = deg2rad(restaurant.lat - state.userLocation.lat);
  const dLng = deg2rad(restaurant.lng - state.userLocation.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(state.userLocation.lat)) * Math.cos(deg2rad(restaurant.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getLikes(restaurant) {
  const interaction = state.interactions[restaurant.id];
  let likes = restaurant.likes;
  let dislikes = restaurant.dislikes;
  if (interaction === 'liked') likes++;
  if (interaction === 'disliked') dislikes++;
  return likes - dislikes;
}

// --- Render ---
function render() {
  const grid = document.getElementById('cardsGrid');
  const results = getFilteredRestaurants();

  // Update count
  document.getElementById('resultsCount').innerHTML =
    `Showing <span>${results.length}</span> restaurant${results.length !== 1 ? 's' : ''}`;

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="icon">🍽️</div>
        <h3>No restaurants found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = results.map((r, i) => renderCard(r, i)).join('');

  // Attach event listeners
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.action-btn')) return;
      const id = parseInt(card.dataset.id);
      openModal(RESTAURANTS.find(r => r.id === id));
    });
  });

  grid.querySelectorAll('.action-btn.like').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleInteraction(parseInt(btn.dataset.id), 'liked');
    });
  });

  grid.querySelectorAll('.action-btn.dislike').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleInteraction(parseInt(btn.dataset.id), 'disliked');
    });
  });
}

function renderCard(r) {
  const interaction = state.interactions[r.id];
  const likes = r.likes + (interaction === 'liked' ? 1 : 0);
  const dislikes = r.dislikes + (interaction === 'disliked' ? 1 : 0);
  const stars = '⭐'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  const distText = state.userLocation
    ? `${getDistance(r).toFixed(1)} km away`
    : '';

  return `
    <article class="card" data-id="${r.id}" id="card-${r.id}">
      <div class="card-img-wrapper">
        <img class="card-img" src="${r.image}" alt="${r.name}" loading="lazy" />
        ${distText ? `<span class="card-badge">📍 ${distText}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${r.name}</h3>
          <div class="card-rating">
            <span class="star">${stars.slice(0, 3)}</span>
            <span class="rating-num">${r.rating}.0</span>
          </div>
        </div>
        <span class="card-specialty">${r.specialty}</span>
        <p class="card-address">📍 ${r.address}</p>
        <div class="card-footer">
          <div class="card-actions">
            <button class="action-btn like ${interaction === 'liked' ? 'liked' : ''}" data-id="${r.id}" id="like-btn-${r.id}">
              👍 <span>${likes}</span>
            </button>
            <button class="action-btn dislike ${interaction === 'disliked' ? 'disliked' : ''}" data-id="${r.id}" id="dislike-btn-${r.id}">
              👎 <span>${dislikes}</span>
            </button>
          </div>
          <span class="card-phone">📞 ${r.phone}</span>
        </div>
      </div>
    </article>
  `;
}

// --- Interactions ---
function toggleInteraction(id, type) {
  if (state.interactions[id] === type) {
    delete state.interactions[id];
  } else {
    state.interactions[id] = type;
  }
  saveState();
  render();

  // animate
  const btn = document.querySelector(`.action-btn.${type === 'liked' ? 'like' : 'dislike'}[data-id="${id}"]`);
  if (btn) {
    btn.classList.add('animate');
    setTimeout(() => btn.classList.remove('animate'), 350);
  }
}

// --- Modal ---
function openModal(r) {
  const overlay = document.getElementById('modalOverlay');
  const interaction = state.interactions[r.id];
  const likes = r.likes + (interaction === 'liked' ? 1 : 0);
  const dislikes = r.dislikes + (interaction === 'disliked' ? 1 : 0);
  const stars = '⭐'.repeat(r.rating);

  document.getElementById('modalContent').innerHTML = `
    <div style="position:relative;">
      <img class="modal-img" src="${r.image}" alt="${r.name}" />
      <button class="modal-close" id="modalClose" aria-label="Close modal">✕</button>
    </div>
    <div class="modal-body">
      <h2 class="modal-title">${r.name}</h2>
      <span class="modal-specialty">${r.specialty}</span>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <span class="icon">⭐</span>
          <span>${stars} (${r.rating}.0)</span>
        </div>
        <div class="modal-meta-item">
          <span class="icon">📍</span>
          <span>${r.address}</span>
        </div>
        <div class="modal-meta-item">
          <span class="icon">📞</span>
          <span>${r.phone}</span>
        </div>
        ${state.userLocation ? `
        <div class="modal-meta-item">
          <span class="icon">🧭</span>
          <span>${getDistance(r).toFixed(1)} km away</span>
        </div>
        ` : ''}
      </div>
      <p class="modal-description">${r.description}</p>
      <div class="modal-actions">
        <button class="action-btn like ${interaction === 'liked' ? 'liked' : ''}" data-id="${r.id}" id="modal-like-btn">
          👍 Like <span>(${likes})</span>
        </button>
        <button class="action-btn dislike ${interaction === 'disliked' ? 'disliked' : ''}" data-id="${r.id}" id="modal-dislike-btn">
          👎 Dislike <span>(${dislikes})</span>
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Event listeners
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById('modal-like-btn').addEventListener('click', () => {
    toggleInteraction(r.id, 'liked');
    openModal(RESTAURANTS.find(rest => rest.id === r.id)); // refresh modal
  });
  document.getElementById('modal-dislike-btn').addEventListener('click', () => {
    toggleInteraction(r.id, 'disliked');
    openModal(RESTAURANTS.find(rest => rest.id === r.id));
  });

  // ESC to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// --- Persistence ---
function saveState() {
  localStorage.setItem('rf-interactions', JSON.stringify(state.interactions));
}

function loadState() {
  try {
    const saved = localStorage.getItem('rf-interactions');
    if (saved) state.interactions = JSON.parse(saved);
  } catch (e) {
    state.interactions = {};
  }
}
