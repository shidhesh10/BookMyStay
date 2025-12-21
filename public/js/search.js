const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('searchSuggestions');

const trendingLocations = [
    { name: "India", type: "Country" },
    { name: "United Kingdom", type: "Country" },
    { name: "United States", type: "Country" },
    { name: "France", type: "Country" },
    { name: "Goa, India", type: "City" },
    { name: "Mumbai, India", type: "City" },
    { name: "Delhi, India", type: "City" },
    { name: "Dubai, UAE", type: "City" },
    { name: "London, UK", type: "City" },
    { name: "Paris, France", type: "City" },
    { name: "New York, USA", type: "City" },
    { name: "Bali, Indonesia", type: "Island" },
    { name: "Tokyo, Japan", type: "City" },
    { name: "Sydney, Australia", type: "City" },
    { name: "Rome, Italy", type: "City" },
    { name: "Berlin, Germany", type: "City" }
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query.length === 0) {
        suggestionsBox.classList.add('d-none');
        return;
    }

    const startsWith = trendingLocations.filter(loc => loc.name.toLowerCase().startsWith(query));
    const contains = trendingLocations.filter(loc => loc.name.toLowerCase().includes(query) && !loc.name.toLowerCase().startsWith(query));
    const allMatches = [...startsWith, ...contains];

    if (allMatches.length > 0) {
        suggestionsBox.classList.remove('d-none');
        renderSuggestions(allMatches, false);
    } else {
        suggestionsBox.classList.add('d-none');
    }
});

function renderSuggestions(matches, isExpanded) {
    suggestionsBox.innerHTML = ''; 

    // 1. MANAGE SCROLLBAR STATE
    if (isExpanded) {
        suggestionsBox.classList.add('scroll-active'); // Add scrollbar
    } else {
        suggestionsBox.classList.remove('scroll-active'); // Remove scrollbar
    }

    // 2. Determine Items to Show
    const MAX_ITEMS = 5;
    const itemsToShow = isExpanded ? matches : matches.slice(0, MAX_ITEMS);

    // 3. Render Items
    itemsToShow.forEach(match => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerHTML = `
            <div class="suggestion-icon">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
                <strong>${match.name}</strong><br>
                <small class="text-muted">${match.type}</small>
            </div>
        `;
        div.addEventListener('click', () => {
            searchInput.value = match.name;
            suggestionsBox.classList.add('d-none');
            searchInput.closest('form').submit();
        });
        suggestionsBox.appendChild(div);
    });

    // 4. Render Buttons
    if (matches.length > MAX_ITEMS) {
        if (!isExpanded) {
            // SHOW MORE
            const remainingCount = matches.length - MAX_ITEMS;
            const moreBtn = createToggleBtn(`Show ${remainingCount} more...`, 'fa-chevron-down');
            moreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                renderSuggestions(matches, true); // Expand
            });
            suggestionsBox.appendChild(moreBtn);

        } else {
            // SHOW LESS
            const lessBtn = createToggleBtn('Show Less', 'fa-chevron-up');
            lessBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                renderSuggestions(matches, false); // Collapse
                suggestionsBox.scrollTop = 0; 
            });
            suggestionsBox.appendChild(lessBtn);
        }
    }
}

function createToggleBtn(text, iconClass) {
    const btn = document.createElement('div');
    btn.className = 'suggestion-item show-more-btn';
    btn.innerHTML = `
        <div class="suggestion-icon" style="background: transparent;">
            <i class="fa-solid ${iconClass}"></i>
        </div>
        <div><strong>${text}</strong></div>
    `;
    return btn;
}

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.classList.add('d-none');
    }
});