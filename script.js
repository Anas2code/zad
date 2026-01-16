// Product Data
const books = [
    {
        id: 1,
        title: "للوامع البينات في شرح أسماء الله الحسنى",
        author: "الإمام فخر الدين الرازي",
        category: "Aqeedah",
        displayCategory: "العقيدة",
        image: "assets/1_lawami_albayyinat.jpg",
        description: "شرح معمق لأسماء الله الحسنى ومعانيها ودلالاتها.",
    },
    {
        id: 2,
        title: "شبح الميديا: الآثار المدمرة للظاهرة الدعوية",
        author: "محمد خلف الله",
        category: "Ethics",
        displayCategory: "قضايا معاصرة",
        image: "assets/2_shabah_al_media.jpg",
        description: "تحليل نقدي لآثار وسائل التواصل الاجتماعي على الخطاب الديني.",
    },
    {
        id: 3,
        title: "تفسير القرآن العظيم (تفسير ابن كثير)",
        author: "الإمام ابن كثير",
        category: "Tafsir",
        displayCategory: "التفسير",
        image: "assets/3_tafsir_ibn_kathir.jpg",
        description: "التفسير الكلاسيكي الأساسي، يوصى به بشدة لطلاب العلم.",
    },
    {
        id: 4,
        title: "صحيح البخاري",
        author: "الإمام البخاري",
        category: "Hadith",
        displayCategory: "الحديث",
        image: "assets/4_sahih_al_bukhari.jpg",
        description: "أصح كتاب بعد القرآن الكريم، متوفر بطبعات عالية الجودة.",
    },
    {
        id: 5,
        title: "فتح القوي المتين في شرح الأربعين",
        author: "الشيخ عبد المحسن العباد",
        category: "Hadith",
        displayCategory: "شروح الحديث",
        image: "assets/5_fath_al_qawi.jpg",
        description: "شرح شامل للأربعين النووية وتتمة الخمسين.",
    },
    {
        id: 6,
        title: "الدرر السنية في الأجوبة النجدية",
        author: "علماء الدعوة السلفية",
        category: "Fiqh",
        displayCategory: "الفقه والعقيدة",
        image: "assets/6_al_durar_al_saniyyah.jpeg",
        description: "مجموعة رسائل وفتاوى لعلماء الدعوة النجدية.",
    },
    {
        id: 7,
        title: "زاد المعاد في هدي خير العباد",
        author: "الإمام ابن القيم",
        category: "Seerah",
        displayCategory: "السيرة والفقه",
        image: "assets/7_zad_al_maad.jpg",
        description: "تحفة فنية في سيرة وهدي النبي محمد صلى الله عليه وسلم.",
    },
    {
        id: 8,
        title: "المنهاج شرح صحيح مسلم",
        author: "الإمام النووي",
        category: "Hadith",
        displayCategory: "شروح الحديث",
        image: "assets/8_al_minhaj.jpg",
        description: "أشهر شرح لصحيح مسلم وأكثرها تداولاً.",
    }
];

// DOM Elements
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const categoryPills = document.querySelectorAll('.category-pill');

// WhatsApp Config
const WA_NUMBER = "971506758855";

// Functions

/**
 * Generate WhatsApp Link
 */
function getWhatsAppLink(bookTitle) {
    const message = `السلام عليكم، أرغب بطلب كتاب: "${bookTitle}" من فضلك.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Create HTML for a single book card
 */
function createBookCard(book) {
    const waLink = getWhatsAppLink(book.title);

    return `
        <article class="book-card">
            <div class="book-image-container">
                <img src="${book.image}" 
                     alt="${book.title}" 
                     class="book-image"
                     onerror="this.src='https://placehold.co/400x600/f3f4f6/a0aec0?text=No+Image'"> 
            </div>
            <span class="book-category">${book.displayCategory}</span>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            
            <a href="${waLink}" target="_blank" class="whatsapp-btn">
                <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-47.1-156.9zM223.9 438.6c-32.6 0-64.6-9.1-92.9-26.2l-6.6-4-69 18.1 18.4-67.2-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.9 82.8-184.6 184.6-184.6 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                طلب عبر الواتساب
            </a>
        </article>
    `;
}

/**
 * Render list of books
 */
function renderBooks(list) {
    bookGrid.innerHTML = '';

    if (list.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    list.forEach(book => {
        bookGrid.innerHTML += createBookCard(book);
    });
}

/**
 * Filter functionality
 */
let currentCategory = 'all';
let currentSearch = '';

function filterBooks() {
    let filtered = books;

    // 1. Filter by Category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(book => book.category === currentCategory);
    }

    // 2. Filter by Search
    if (currentSearch) {
        filtered = filtered.filter(book =>
            book.title.toLowerCase().includes(currentSearch) ||
            book.author.toLowerCase().includes(currentSearch)
        );
    }

    renderBooks(filtered);
}

// Event Listeners

// Search Input
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    filterBooks();
});

// Category Pills
categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        // Remove active class from all
        categoryPills.forEach(p => p.classList.remove('active'));
        // Add to clicked
        pill.classList.add('active');

        // Update state
        currentCategory = pill.dataset.category;
        filterBooks();
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderBooks(books);
});
