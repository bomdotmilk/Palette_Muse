  // Art-inspired color palettes
        const palettes = [
            {
                title: "Midnight Serenade",
                desc: "Moody blues and deep purples",
                colors: ["#0a1128", "#001f54", "#034078", "#1282a2", "#fefcfb"],
                likes: 1243,
                tags: ["dark", "cool", "minimal", "blue"]
            },
            {
                title: "Desert Mirage",
                desc: "Warm sands and sunset hues",
                colors: ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"],
                likes: 982,
                tags: ["warm", "earth", "sunset"]
            },
            {
                title: "Neon Dreams",
                desc: "Electric brights for bold designs",
                colors: ["#ff6b6b", "#ff9e00", "#ffd166", "#06d6a0", "#118ab2"],
                likes: 1567,
                tags: ["bright", "vibrant", "modern"]
            },
            {
                title: "Pastel Reverie",
                desc: "Soft whispers of color",
                colors: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
                likes: 876,
                tags: ["soft", "light", "gentle"]
            },
            {
                title: "Forest Canopy",
                desc: "Nature's green symphony",
                colors: ["#386641", "#6a994e", "#a7c957", "#f2e8cf", "#bc4749"],
                likes: 1120,
                tags: ["nature", "green", "organic"]
            },
            {
                title: "Ocean Depths",
                desc: "From surface to abyss",
                colors: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8"],
                likes: 1345,
                tags: ["cool", "blue", "water", "blue"]
            },
            {
                title: "Vintage Film",
                desc: "Retro muted tones",
                colors: ["#eae2b7", "#fcbf49", "#f77f00", "#d62828", "#003049"],
                likes: 765,
                tags: ["retro", "muted", "warm", "red"]
            },
            {
                title: "Arctic Dawn",
                desc: "Icy cool morning light",
                colors: ["#8ecae6", "#219ebc", "#126782", "#023047", "#ffb703"],
                likes: 923,
                tags: ["cool", "light", "winter", "blue"]
            },
            {
                title: "Berry Harvest",
                desc: "Juicy fruit tones",
                colors: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
                likes: 1087,
                tags: ["vibrant", "fruit", "contrast", "red"]
            },
            {
                title: "Mystic Twilight",
                desc: "Dusky purple magic",
                colors: ["#3a0ca3", "#7209b7", "#f72585", "#b5179e", "#480ca8"],
                likes: 1423,
                tags: ["purple", "dark", "mystical"]
            },
            {
                title: "Clay Terracotta",
                desc: "Earthen Mediterranean",
                colors: ["#d8b4a0", "#dbd3d8", "#d5b9b2", "#e7c8c0", "#a26769"],
                likes: 654,
                tags: ["earth", "warm", "clay"]
            },
            {
                title: "Cyber Neon",
                desc: "Futuristic glow",
                colors: ["#ff0a54", "#ff477e", "#ff5c8a", "#ff7096", "#ff85a1"],
                likes: 1789,
                tags: ["neon", "bright", "modern"]
            },
            {
            title: "Sakura Breeze",
                desc: "Soft pinks and florals like spring in Kyoto",
                colors: ["#ffe3e3", "#f8c8dc", "#f3a6b3", "#e58ca3", "#d77a8d"],
                likes: 1120,
                tags: ["soft", "japanese", "pastel"]
            },
            {
                title: "Seoul Pastel",
                desc: "Trendy Korean tones with soft muted flair",
                colors: ["#f2d8d8", "#d8e2dc", "#b5c0d0", "#a2a8d3", "#8eaccd"],
                likes: 1345,
                tags: ["korean", "minimal", "pastel", "blue"]
            },
            {
                title: "Forest Haze",
                desc: "Foggy woods and deep green layers",
                colors: ["#2a4d3b", "#3e6259", "#658e67", "#a8c686", "#e6f2d9"],
                likes: 845,
                tags: ["nature", "earthy", "green"]
            },
            {
                title: "Ocean Whisper",
                desc: "Serene blues and soft foamy whites",
                colors: ["#d9f0ff", "#a9d6e5", "#89c2d9", "#61a5c2", "#468faf"],
                likes: 1032,
                tags: ["cool", "sea", "minimal", "blue"]
            },
            {
                title: "Matcha Harmony",
                desc: "Calming greens inspired by Japanese tea",
                colors: ["#edf1d6", "#d6e8db", "#adc178", "#a98467", "#6c584c"],
                likes: 921,
                tags: ["japanese", "earth", "calm"]
            },
            {
                title: "Retro Pop",
                desc: "Playful pop tones from retro posters",
                colors: ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d"],
                likes: 1165,
                tags: ["vintage", "fun", "bold", "red"]
            },
            {
                title: "Clouded Lilac",
                desc: "Muted purples and soft mists",
                colors: ["#e0b1cb", "#cbaacb", "#d6d3f0", "#a9bcd0", "#f1f1f1"],
                likes: 1198,
                tags: ["soft", "purple", "dreamy", "white"]
            },
            {
                title: "Monochrome Mood",
                desc: "Greyscale tones with quiet elegance",
                colors: ["#121212", "#2e2e2e", "#555555", "#aaaaaa", "#f0f0f0"],
                likes: 1390,
                tags: ["minimal", "monochrome", "modern", "black", "white"]
            },
                {
            title: "Amber Bloom",
            desc: "Golden hues mixed with muted floral tones",
            colors: ["#ffd7ba", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
            likes: 0,
            tags: ["warm", "floral", "vintage"]
        },
        {
            title: "Glacier Calm",
            desc: "Icy whites and subtle blue-greens",
            colors: ["#e0fbfc", "#c2dde6", "#9ad1d4", "#70a9a1", "#40514e"],
            likes: 0,
            tags: ["cool", "minimal", "glacier"]
        },
        {
            title: "Sunset Punch",
            desc: "Juicy orange-reds and purples from twilight skies",
            colors: ["#ff9f1c", "#ff4040", "#d7263d", "#762c2c", "#2e1f27"],
            likes: 0,
            tags: ["bold", "sunset", "punchy", "red"]
        },
        {
            title: "Muted Clay",
            desc: "Modern earthy tones for calm compositions",
            colors: ["#e0c097", "#c4a484", "#a47148", "#663f2d", "#402218"],
            likes: 0,
            tags: ["earth", "modern", "neutral"]
        },
        {
            title: "Lavender Dreams",
            desc: "Soft lavenders and dreamy whites",
            colors: ["#e6e6fa", "#d8bfd8", "#dda0dd", "#ba55d3", "#9932cc"],
            likes: 0,
            tags: ["purple", "soft", "dreamy"]
        }
    ];



const palettesContainer = document.getElementById('palettesContainer');
const filterBtns = document.querySelectorAll('.btn[data-filter]');
const toast = document.getElementById('toast');

//  modal element
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <span class="close-btn">&times;</span>
  <div class="modal-content">
    <div class="modal-colors" id="modalColors"></div>
    <div class="modal-info">
      <h2 class="modal-title" id="modalTitle"></h2>
      <p class="modal-desc" id="modalDesc"></p>
      <div class="modal-tags" id="modalTags"></div>
      <div class="likes">
        <i class="like-btn fa-regular fa-star"></i>
        <span id="modalLikes"></span>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modal);

const searchInput = document.getElementById('searchInput');

// Initialize
function init() {
    renderPalettes('trending');
    setupEventListeners();
    setupSearch();
}

function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderPalettes('trending');
            return;
        }
        
        // Search by color hex or tag
        const filteredPalettes = palettes.filter(palette => {

            // Check if search term is a color hex
            const isColorSearch = searchTerm.startsWith('#') && 
                palette.colors.some(color => color.toLowerCase() === searchTerm);
            
            // Check if search term matches any tag
            const isTagSearch = palette.tags.some(tag => 
                tag.toLowerCase().includes(searchTerm));
            
            // Check if search term matches title or description
            const isTextSearch = palette.title.toLowerCase().includes(searchTerm) || 
                palette.desc.toLowerCase().includes(searchTerm);
            
            return isColorSearch || isTagSearch || isTextSearch;
        });
        
        renderSearchResults(filteredPalettes);
    });
}

function renderSearchResults(filteredPalettes) {
    palettesContainer.innerHTML = '';
    
    if (filteredPalettes.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No palettes found matching your search.';
        palettesContainer.appendChild(noResults);
        return;
    }
    
    filteredPalettes.forEach(palette => {
        const paletteElement = createPaletteElement(palette);
        palettesContainer.appendChild(paletteElement);
    });
}

// Render palettes based on filter
function renderPalettes(filter, palettesToRender = null) {
    palettesContainer.innerHTML = '';
    
    let palettesToShow = palettesToRender || [...palettes];
    
    if (filter === 'popular') {
        palettesToShow.sort((a, b) => b.likes - a.likes);
    } else if (filter === 'new') {
        palettesToShow.reverse();
    } else if (filter === 'random') {
        palettesToShow = shuffleArray(palettesToShow);
    }
    
    palettesToShow = palettesToShow.slice(0, filter === 'random' ? 
        Math.floor(Math.random() * palettes.length) + 1 : 
        palettes.length);
    
    palettesToShow.forEach(palette => {
        const paletteElement = createPaletteElement(palette);
        palettesContainer.appendChild(paletteElement);
    });
}

//  palette element
function createPaletteElement(palette) {
    const paletteDiv = document.createElement('div');
    paletteDiv.className = 'palette';
    
    //  click event to open modal
    paletteDiv.addEventListener('click', (e) => {
        // Don't open modal if clicking on a color or likes
        if (!e.target.closest('.color') && !e.target.closest('.likes')) {
            openModal(palette);
        }
    });
    
    const colorsDiv = document.createElement('div');
    colorsDiv.className = 'colors';
    
    palette.colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        
        const colorCode = document.createElement('span');
        colorCode.className = 'color-code';
        colorCode.textContent = color;
        
        colorDiv.appendChild(colorCode);
        colorsDiv.appendChild(colorDiv);
        
        colorDiv.addEventListener('click', () => {
            copyToClipboard(color);
            showToast();
        });
    });
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'palette-info';
    
    const metaDiv = document.createElement('div');
    metaDiv.className = 'palette-meta';
    
    const title = document.createElement('div');
    title.className = 'palette-title';
    title.textContent = palette.title;
    
    const likes = document.createElement('div');
    likes.className = 'likes';
    likes.innerHTML = `<i class="like-btn fa-regular fa-star"></i> ${palette.likes.toLocaleString()}`;
    
    //  click event to like button
    const likeBtn = likes.querySelector('.like-btn');
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        likeBtn.classList.toggle('fas');
        likeBtn.classList.toggle('fa-regular');
    });
    
    metaDiv.appendChild(title);
    metaDiv.appendChild(likes);
    
    const desc = document.createElement('div');
    desc.className = 'palette-desc';
    desc.textContent = palette.desc;
    
    infoDiv.appendChild(metaDiv);
    infoDiv.appendChild(desc);
    
    paletteDiv.appendChild(colorsDiv);
    paletteDiv.appendChild(infoDiv);
    
    return paletteDiv;
}

// Open modal with palette details
function openModal(palette) {
    const modalColors = document.getElementById('modalColors');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalLikes = document.getElementById('modalLikes');
    const modalTags = document.getElementById('modalTags');
    
    // Clear previous content
    modalColors.innerHTML = '';
    modalTags.innerHTML = '';
    
    // Set palette info
    modalTitle.textContent = palette.title;
    modalDesc.textContent = palette.desc;
    modalLikes.textContent = palette.likes.toLocaleString();
    
    // Create color swatches
    palette.colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.flex = '1';
        colorDiv.style.position = 'relative';
        
        const colorCode = document.createElement('span');
        colorCode.className = 'color-code';
        colorCode.textContent = color;
        colorCode.style.position = 'absolute';
        colorCode.style.bottom = '20px';
        colorCode.style.left = '50%';
        colorCode.style.transform = 'translateX(-50%)';
        colorCode.style.opacity = '1';
        
        colorDiv.appendChild(colorCode);
        modalColors.appendChild(colorDiv);
        
        colorDiv.addEventListener('click', () => {
            copyToClipboard(color);
            showToast();
        });
    });
    
    // Create tags
    palette.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'modal-tag';
        tagSpan.textContent = tag;
        modalTags.appendChild(tagSpan);
    });
    
    // Set up like button in modal
    const modalLikeBtn = modal.querySelector('.like-btn');
    modalLikeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modalLikeBtn.classList.toggle('fas');
        modalLikeBtn.classList.toggle('fa-regular');
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        searchInput.value = ''; // Clear search input
        renderPalettes(filter);
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
    
    // Close modal when clicking X
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Helper functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize
init();