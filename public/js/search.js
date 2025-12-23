const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

let allListings = [];
let expanded = false;

if (searchInput && suggestionsBox) {
  searchInput.addEventListener("input", async (e) => {
    const query = e.target.value.trim();

    if (!query) {
      hideSuggestions();
      return;
    }

    try {
      const res = await fetch(`/api/listings/search?q=${query}`);
      allListings = await res.json();

      console.log("TOTAL RESULTS:", allListings.length);

      if (allListings.length === 0) {
        hideSuggestions();
        return;
      }

      expanded = false;
      renderSuggestions();
    } catch (err) {
      console.error("Search Error:", err);
    }
    console.log("Input detected:", e.target.value);
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      hideSuggestions();
    }
  });
}

// RENDER FUNCTION
function renderSuggestions() {
  suggestionsBox.innerHTML = "";

  suggestionsBox.style.display = "block";

  suggestionsBox.classList.remove('d-none');

  suggestionsBox.style.maxHeight = expanded ? "300px" : "none";
  suggestionsBox.style.minHeight = expanded ? "400px" : "auto";



  if (expanded) {
    suggestionsBox.classList.add("scroll-active");
  }


  const visibleListings = expanded
    ? allListings
    : allListings.slice(0, 5);

  visibleListings.forEach((listing) => {
    const div = document.createElement("div");
    div.className = "suggestion-item";

    div.innerHTML = `
      <div class="suggestion-icon">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div>
        <strong>${listing.title}</strong><br />
        <small>${listing.location}, ${listing.country}</small>
      </div>
    `;

    div.addEventListener("click", () => {
      window.location.href = `/listings/${listing._id}`;
    });

    suggestionsBox.appendChild(div);
  });

  // SHOW MORE
  if (!expanded && allListings.length >= 5) {
    const moreBtn = document.createElement("div");
    moreBtn.className = "suggestion-item show-more-btn";
    moreBtn.innerText = `Show ${allListings.length - 5} more`;

    moreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expanded = true;
      suggestionsBox.classList.add("scroll-active");
      renderSuggestions();
    });

    suggestionsBox.appendChild(moreBtn);
  }

  // SHOW LESS
  if (expanded) {
    const lessBtn = document.createElement("div");
    lessBtn.className = "suggestion-item show-more-btn";
    lessBtn.innerHTML = `Show less ▲`;

    lessBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expanded = false;
      suggestionsBox.scrollTop = 0;
      renderSuggestions();
    });

    suggestionsBox.appendChild(lessBtn);
  }
}

function hideSuggestions() {
  suggestionsBox.style.display = "none";
  suggestionsBox.innerHTML = "";
}
