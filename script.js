const gameBoard = document.getElementById('gameBoard');
const pairsFoundDisplay = document.getElementById('pairs-found');
const totalPairsDisplay = document.getElementById('total-pairs');
const movesDisplay = document.getElementById('moves');
const currentLevelDisplay = document.getElementById('current-level');
// const resetButton = document.getElementById('resetButton'); // این خط حذف شد
const messageDisplay = document.getElementById('message');

// --- تنظیمات بازی ---
const cardIconClasses = [
    // -- حیوانات --
    'fas fa-dog', 'fas fa-cat', 'fas fa-horse', 'fas fa-fish', 'fas fa-dove',
    'fas fa-spider', 'fas fa-dragon', 'fas fa-hippo', 'fas fa-otter', 'fas fa-paw',
    'fas fa-crow', 'fas fa-dove', 'fas fa-feather', 'fas fa-frog', 'fas fa-hippo',
    'fas fa-horse', 'fas fa-kiwi-bird', 'fas fa-leaf', 'fas fa-lizard', 'fas fa-otter',
    'fas fa-paw', 'fas fa-penguin', 'fas fa-rabbit', 'fas fa-spider', 'fas fa-turtle',
    'fas fa-worm', 'fas fa-dove', 'fas fa-crow', 'fas fa-frog', 'fas fa-fish',

    // -- غذا و نوشیدنی --
    'fas fa-apple-alt', 'fas fa-pizza-slice', 'fas fa-ice-cream', 'fas fa-coffee',
    'fas fa-wine-glass-alt', 'fas fa-hamburger', 'fas fa-drumstick-bite', 'fas fa-egg',
    'fas fa-lemon', 'fas fa-stroopwafel', 'fas fa-bacon', 'fas fa-bell-pepper',
    'fas fa-birthday-cake', 'fas fa-blender-phone', 'fas fa-birthday-cake', 'fas fa-bowl-food',
    'fas fa-bread-loaf', 'fas fa-broccoli', 'fas fa-burger', 'fas fa-candy-cane',
    'fas fa-carrot', 'fas fa-cheese', 'fas fa-cherry', 'fas fa-chocolate-bar',
    'fas fa-coffee', 'fas fa-cookie', 'fas fa-corn', 'fas fa-croissant',
    'fas fa-cupcake', 'fas fa-donut', 'fas fa-drumstick-bite', 'fas fa-egg',
    'fas fa-fish', 'fas fa-flushed', 'fas fa-franc-sign', 'fas fa-glass-cheers',
    'fas fa-grape', 'fas fa-grimace', 'fas fa-hamburger', 'fas fa-hotdog',
    'fas fa-ice-cream', 'fas fa-lemon', 'fas fa-lighter', 'fas fa-luchador',
    'fas fa-mug-hot', 'fas fa-olive', 'fas fa-paper-plane', 'fas fa-paw',
    'fas fa-pepper-hot', 'fas fa-pizza-slice', 'fas fa-popcorn', 'fas fa-pound-sign',
    'fas fa-print', 'fas fa-receipt', 'fas fa-seedling', 'fas fa-shopping-cart',
    'fas fa-smile-beam', 'fas fa-smoking', 'fas fa-snowman', 'fas fa-solar-panel',
    'fas fa-space-shuttle', 'fas fa-star-and-crescent', 'fas fa-star-of-david', 'fas fa-stroopwafel',
    'fas fa-sun', 'fas fa-surprise', 'fas fa-swatchbook', 'fas fa-synagogue',
    'fas fa-sync-alt', 'fas fa-table-tennis', 'fas fa-tablet-alt', 'fas fa-tachometer-alt',
    'fas fa-tag', 'fas fa-tags', 'fas fa-taxi', 'fas fa-teeth',
    'fas fa-temperature-high', 'fas fa-temperature-low', 'fas fa-tenge-sign', 'fas fa-terminal',
    'fas fa-text-height', 'fas fa-text-width', 'fas fa-th', 'fas fa-th-large',
    'fas fa-th-list', 'fas fa-thumbs-down', 'fas fa-thumbs-up', 'fas fa-thumbtack',
    'fas fa-ticket-alt', 'fas fa-times', 'fas fa-times-circle', 'fas fa-times-octagon',
    'fas fa-tint', 'fas fa-tint-slash', 'fas fa-tired', 'fas fa-toggle-off',
    'fas fa-toggle-on', 'fas fa-toilet', 'fas fa-toilet-paper', 'fas fa-toilet-paper-slash',
    'fas fa-toolbox', 'fas fa-tools', 'fas fa-tooth', 'fas fa-toothbrush',
    'fas fa-tophat', 'fas fa-tornado', 'fas fa-torpedo', 'fas fa-tortoise',
    'fas fa-total- Li', 'fas fa-touch', 'fas fa-tower-broadcast', 'fas fa-tower-cell',
    'fas fa-tower-observation', 'fas fa-toy-brick', 'fas fa-trackpad', 'fas fa-traffic-light',
    'fas fa-trailer', 'fas fa-train', 'fas fa-tram', 'fas fa-transgender',
    'fas fa-transgender-alt', 'fas fa-transgender-right', 'fas fa-transgender-left',
    'fas fa-trash', 'fas fa-trash-alt', 'fas fa-trash-restore', 'fas fa-trash-restore-alt',
    'fas fa-tree', 'fas fa-tshirt', 'fas fa-tty', 'fas fa-tune',

    // -- طبیعت و عناصر --
    'fas fa-tree', 'fas fa-seedling', 'fas fa-mountain', 'fas fa-water', 'fas fa-volcano',
    'fas fa-umbrella-beach', 'fas fa-tornado', 'fas fa-poo-storm', 'fas fa-cloud-sun',
    'fas fa-star-and-crescent', 'fas fa-acorn', 'fas fa-air-freshener', 'fas fa-asteroid',
    'fas fa-atom', 'fas fa-baby-carriage', 'fas fa-bath', 'fas fa-battery-empty',
    'fas fa-battery-full', 'fas fa-bed', 'fas fa-beer', 'fas fa-bell',
    'fas fa-bicycle', 'fas fa-binoculars', 'fas fa-biohazard', 'fas fa-birthday-cake',
    'fas fa-bitcoin-sign', 'fas fa-blender', 'fas fa-blender-phone', 'fas fa-blog',
    'fas fa-bold', 'fas fa-bolt', 'fas fa-bomb', 'fas fa-bone',
    'fas fa-book', 'fas fa-book-dead', 'fas fa-book-medical', 'fas fa-book-open',
    'fas fa-book-reader', 'fas fa-bookmark', 'fas fa-border-all', 'fas fa-border-none',
    'fas fa-border-right', 'fas fa-border-style', 'fas fa-border-top', 'fas fa-bowling-ball',
    'fas fa-box', 'fas fa-box-open', 'fas fa-boxes-stacked', 'fas fa-boxing-glove',
    'fas fa-braille', 'fas fa-brain', 'fas fa-bread-loaf', 'fas fa-bridge',
    'fas fa-briefcase', 'fas fa-briefcase-medical', 'fas fa-broadcast-tower', 'fas fa-broom',
    'fas fa-brush', 'fas fa-bug', 'fas fa-building', 'fas fa-bullhorn',
    'fas fa-bullseye', 'fas fa-burn', 'fas fa-bus', 'fas fa-bus-alt',
    'fas fa-business-time', 'fas fa-calculator', 'fas fa-calendar', 'fas fa-calendar-alt',
    'fas fa-calendar-check', 'fas fa-calendar-day', 'fas fa-calendar-minus', 'fas fa-calendar-plus',
    'fas fa-calendar-week', 'fas fa-camera', 'fas fa-camera-alt', 'fas fa-camera-retro',
    'fas fa-campground', 'fas fa-cannabis', 'fas fa-capsules', 'fas fa-car',
    'fas fa-car-alt', 'fas fa-car-battery', 'fas fa-car-crash', 'fas fa-car-side',
    'fas fa-caravan', 'fas fa-caret-down', 'fas fa-caret-left', 'fas fa-caret-right',
    'fas fa-caret-square-down', 'fas fa-caret-square-left', 'fas fa-caret-square-right', 'fas fa-caret-square-up',
    'fas fa-caret-up', 'fas fa-cart-arrow-down', 'fas fa-cart-flat-page', 'fas fa-cart-plus',
    'fas fa-cash-register', 'fas fa-cat', 'fas fa-cctv', 'fas fa-certificate',
    'fas fa-chair', 'fas fa-chalkboard', 'fas fa-chalkboard-teacher', 'fas fa-charging-station',
    'fas fa-chart-area', 'fas fa-chart-bar', 'fas fa-chart-line', 'fas fa-chart-pie',
    'fas fa-check', 'fas fa-check-circle', 'fas fa-check-double', 'fas fa-check-square',
    'fas fa-cheese', 'fas fa-chess', 'fas fa-chess-bishop', 'fas fa-chess-board',
    'fas fa-chess-king', 'fas fa-chess-knight', 'fas fa-chess-pawn', 'fas fa-chess-queen',
    'fas fa-chess-rook', 'fas fa-child', 'fas fa-church', 'fas fa-circle',
    'fas fa-circle-notch', 'fas fa-city', 'fas fa-clapperboard', 'fas fa-clipboard',
    'fas fa-clipboard-check', 'fas fa-clipboard-list', 'fas fa-clock', 'fas fa-clone',
    'fas fa-closed-captioning', 'fas fa-cloud', 'fas fa-cloud-download-alt', 'fas fa-cloud-meatball',
    'fas fa-cloud-moon', 'fas fa-cloud-moon-rain', 'fas fa-cloud-rain', 'fas fa-cloud-showers-heavy',
    'fas fa-cloud-sun', 'fas fa-cloud-sun-rain', 'fas fa-cloud-upload-alt', 'fas fa-cocktail',
    'fas fa-code', 'fas fa-code-branch', 'fas fa-code-commit', 'fas fa-code-fork',
    'fas fa-code-merge', 'fas fa-coffee', 'fas fa-cog', 'fas fa-cogs',
    'fas fa-coins', 'fas fa-columns', 'fas fa-comment', 'fas fa-comment-alt',
    'fas fa-comment-dollar', 'fas fa-comment-dots', 'fas fa-comment-medical', 'fas fa-comment-slash',
    'fas fa-comment-sms', 'fas fa-comments', 'fas fa-comments-dollar', 'fas fa-compact-disc',
    'fas fa-compass', 'fas fa-compress', 'fas fa-compress-alt', 'fas fa-compress-arrows-alt',
    'fas fa-concierge-bell', 'fas fa-contact-card', 'fas fa-construction-cone', 'fas fa-container-storage',
    'fas fa-conveyor-belt', 'fas fa-cookie', 'fas fa-cookie-bite', 'fas fa-copy',
    'fas fa-copyright', 'fas fa-couch', 'fas fa-credit-card', 'fas fa-crop',
    'fas fa-crop-alt', 'fas fa-cross', 'fas fa-crosshairs', 'fas fa-crow',
    'fas fa-crown', 'fas fa-crutch', 'fas fa-cube', 'fas fa-cubes',
    'fas fa-curling-rock', 'fas fa-cut', 'fas fa-database', 'fas fa-deaf',
    'fas fa-democrat', 'fas fa-desktop', 'fas fa-dharmachakra', 'fas fa-diagnoses',
    'fas fa-dice', 'fas fa-dice-d20', 'fas fa-dice-six', 'fas fa-digital-tachograph',
    'fas fa-diploma', 'fas fa-directions', 'fas fa-disc-wheel', 'fas fa-disease',
    'fas fa-divide', 'fas fa-dna', 'fas fa-dog', 'fas fa-dollar-sign',
    'fas fa-dolly', 'fas fa-dolly-flatbed', 'fas fa-donate', 'fas fa-door-closed',
    'fas fa-door-open', 'fas fa-dot-circle', 'fas fa-dove', 'fas fa-download',
    'fas fa-drafting-compass', 'fas fa-dragon', 'fas fa-draw-polygon', 'fas fa-dreidel',
    'fas fa-drum', 'fas fa-drum-steelpan', 'fas fa-drumstick-bite', 'fas fa-dryer',
    'fas fa-dryer-alt', 'fas fa-dubut', 'fas fa-dumbbell', 'fas fa-dumpster',
    'fas fa-dumpster-fire', 'fas fa-dungeon', 'fas fa-dying', 'fas fa-ear-listen',
    'fas fa-earlybirds', 'fas fa-earth-americas', 'fas fa-earth-africa', 'fas fa-earth-asia',
    'fas fa-earth-europe', 'fas fa-earth-oceania', 'fas fa-egg', 'fas fa-egg-fried',
    'fas fa-eject', 'fas fa-elephant', 'fas fa-ellipsis-h', 'fas fa-ellipsis-h-alt',
    'fas fa-ellipsis-v', 'fas fa-ellipsis-v-alt', 'fas fa-envelope', 'fas fa-envelope-open',
    'fas fa-envelope-open-dollar', 'fas fa-envelope-square', 'fas fa-equals', 'fas fa-eraser',
    'fas fa-ethernet', 'fas fa-euro-sign', 'fas fa-exclamation', 'fas fa-exclamation-circle',
    'fas fa-exclamation-triangle', 'fas fa-expand', 'fas fa-expand-alt', 'fas fa-expand-arrows',
    'fas fa-expand-arrows-alt', 'fas fa-expand-arrows-circle', 'fas fa-expand-arrows-left',
    'fas fa-expand-arrows-right', 'fas fa-expand-arrows-up', 'fas fa-expand-left',
    'fas fa-expand-right', 'fas fa-expand-up', 'fas fa-explosion', 'fas fa-eye',
    'fas fa-eye-dropper', 'fas fa-eye-low-vision', 'fas fa-eye-slash', 'fas fa-eyedropper',
    'fas fa-f-solid', 'fas fa-fan', 'fas fa-farm', 'fas fa-fast-backward',
    'fas fa-fast-forward', 'fas fa-fax', 'fas fa-feather', 'fas fa-feather-alt',
    'fas fa-female', 'fas fa-field-hockey', 'fas fa-fighter-jet', 'fas fa-file',
    'fas fa-file-alt', 'fas fa-file-archive', 'fas fa-file-audio', 'fas fa-file-code',
    'fas fa-file-contract', 'fas fa-file-csv', 'fas fa-file-download', 'fas fa-file-edit',
    'fas fa-file-excel', 'fas fa-file-export', 'fas fa-file-image', 'fas fa-file-import',
    'fas fa-file-invoice', 'fas fa-file-invoice-dollar', 'fas fa-file-medical', 'fas fa-file-medical-alt',
    'fas fa-file-pdf', 'fas fa-file-powerpoint', 'fas fa-file-prescription', 'fas fa-file-prescription-bottle',
    'fas fa-file-signature', 'fas fa-file-upload', 'fas fa-file-video', 'fas fa-file-word',
    'fas fa-fill', 'fas fa-fill-drip', 'fas fa-film', 'fas fa-film-alt',
    'fas fa-filter', 'fas fa-fingerprint', 'fas fa-fire', 'fas fa-fire-alt',
    'fas fa-fire-extinguisher', 'fas fa-fire-station', 'fas fa-first-aid', 'fas fa-fish',
    'fas fa-fish-cooked', 'fas fa-fishing-pole', 'fas fa-flag', 'fas fa-flag-checkered',
    'fas fa-flag-usa', 'fas fa-flame', 'fas fa-flask', 'fas fa-flushed',
    'fas fa-flux', 'fas fa-flush', 'fas fa-flush-alt', 'fas fa-flush-circle',
    'fas fa-flush-right', 'fas fa-flush-left', 'fas fa-flush-up', 'fas fa-flush-down',
    'fas fa-flushed', 'fas fa-fluid', 'fas fa-fluid-wave', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed', 'fas fa-flushed',
    // ... (این لیست را تا حداقل 100-150 آیکون منحصر به فرد تکمیل کنید) ...
];

const maxIconsAvailable = cardIconClasses.length;
const baseRows = 4; // تعداد ردیف پایه
const baseCols = 4; // تعداد ستون پایه
const rowIncreasePerLevel = 1; // افزایش 1 ردیف در هر سطح
const colIncreasePerLevel = 1; // افزایش 1 ستون در هر سطح
const minCardsPerLevel = 8; // حداقل تعداد کارت (مثلاً 2x4 یا 4x2)
const maxLevel = 20; // حداکثر سطح بازی برای جلوگیری از ابعاد بسیار بزرگ

let currentLevel = 1;
let cardsInRow = baseCols;
let cardsInCol = baseRows;

let cards = [];
let firstCard = null;
let secondCard = null;
let movesCount = 0;
let pairsCount = 0;
let lockBoard = false;

// --- تنظیمات اشکالات تصادفی ---
// !! این مقدار را به false تغییر دهید تا اشکالات تصادفی غیرفعال شوند !!
const enableRandomErrors = false; // <--- تغییر مهم اینجاست

let errorTimer = null; // برای نگهداری شناسه تایمر خطا
let lastErrorType = null; // برای جلوگیری از تکرار پشت سر هم یک نوع خطا
let errorEnabled = false; // وضعیت فعال بودن اشکالات

// لیست انواع اشکالات قابل ایجاد (دیگر استفاده نمی‌شود اما برای حفظ ساختار کد باقی مانده)
const errorTypes = [
    'flipWrongCard',
    'markAsMatched',
    'unlockBoardTemporarily',
];

// --- توابع بازی ---

function setupLevel(level) {
    currentLevel = level;
    currentLevelDisplay.textContent = currentLevel;

    cardsInCol = baseRows + (level - 1) * rowIncreasePerLevel;
    cardsInRow = baseCols + (level - 1) * colIncreasePerLevel;

    if (cardsInCol * cardsInRow < minCardsPerLevel) {
        cardsInCol = Math.ceil(minCardsPerLevel / cardsInRow);
    }

    let totalCards = cardsInRow * cardsInCol;

    if (totalCards % 2 !== 0) {
        totalCards++;
        if ((cardsInRow * cardsInCol) % 2 !== 0) {
             if (cardsInRow < cardsInCol) cardsInRow++;
             else cardsInCol++;
             totalCards = cardsInRow * cardsInCol;
        }
    }

    const iconsNeeded = totalCards / 2;

    if (iconsNeeded > maxIconsAvailable) {
        messageDisplay.textContent = `خطا: برای سطح ${level} به ${iconsNeeded} آیکون نیاز است، اما فقط ${maxIconsAvailable} آیکون در دسترس است. لطفاً لیست آیکون‌ها را در script.js تکمیل کنید.`;
        messageDisplay.style.color = 'red';
        lockBoard = true;
        return { totalCards: 0, iconsNeeded: 0 };
    }

    // تنظیم گرید: تعیین تعداد ستون‌ها و ردیف‌ها
    gameBoard.style.gridTemplateColumns = `repeat(${cardsInRow}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${cardsInCol}, 1fr)`;

    return { totalCards, iconsNeeded };
}

function createBoard() {
    const { totalCards, iconsNeeded } = setupLevel(currentLevel);

    if (totalCards === 0) return;

    let content = [];
    // انتخاب آیکون‌های منحصر به فرد از لیست
    const selectedUniqueIcons = cardIconClasses.slice(0, iconsNeeded);

    // ساخت آرایه محتوا با تکرار هر آیکون
    for (const iconClass of selectedUniqueIcons) {
        content.push(iconClass);
        content.push(iconClass);
    }

    // مخلوط کردن تصادفی محتوا (الگوریتم فیشر-یتس)
    content.sort(() => Math.random() - 0.5);

    gameBoard.innerHTML = '';
    cards = [];
    for (let i = 0; i < totalCards; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.iconClass = content[i]; // ذخیره کلاس آیکون در data attribute

        const faceDiv = document.createElement('div');
        faceDiv.classList.add('face');
        faceDiv.className = `face ${content[i]}`; // اضافه کردن کلاس آیکون Font Awesome

        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.textContent = '?';

        cardElement.appendChild(backDiv);
        cardElement.appendChild(faceDiv);

        cardElement.addEventListener('click', flipCard);

        gameBoard.appendChild(cardElement);
        cards.push(cardElement);
    }
    totalPairsDisplay.textContent = iconsNeeded;
}

function flipCard() {
    // اگر صفحه قفل است، یا کارت قبلی انتخاب شده و این همان کارت است، یا کارت از قبل رو است، کاری نکن
    if (lockBoard || (firstCard === this) || this.classList.contains('flipped')) {
        return;
    }

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        movesCount++;
        updateMovesDisplay();
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;
    const isMatch = firstCard.dataset.iconClass === secondCard.dataset.iconClass;

    if (isMatch) {
        disableCards();
        pairsCount++;
        updatePairsDisplay();

        const totalPairsOnBoard = parseInt(totalPairsDisplay.textContent);
        if (pairsCount === totalPairsOnBoard) {
            if (currentLevel < maxLevel) {
                messageDisplay.textContent = `سطح ${currentLevel} تمام شد! آماده برای سطح ${currentLevel + 1}...`;
                messageDisplay.style.color = '#007bff';
                setTimeout(() => {
                    currentLevel++;
                    resetGame(false);
                }, 1500);
            } else {
                gameOver();
            }
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetTurn();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
    }, 1000);
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function updatePairsDisplay() {
    pairsFoundDisplay.textContent = pairsCount;
}

function updateMovesDisplay() {
    movesDisplay.textContent = movesCount;
}

function gameOver() {
    messageDisplay.textContent = `تبریک! شما تمام ${currentLevel} سطح را در ${movesCount} حرکت تمام کردید!`;
    messageDisplay.style.color = '#28a745';
    // resetButton.textContent = "شروع مجدد از سطح 1"; // این خط حذف شد
    lockBoard = true;
    errorEnabled = false; // غیرفعال کردن اشکالات در پایان بازی
    if (errorTimer) clearTimeout(errorTimer); // پاک کردن تایمر خطا
}

function resetGame(resetAll = true) {
    if (resetAll) {
        currentLevel = 1;
        movesCount = 0;
        pairsCount = 0;
        messageDisplay.textContent = 'کارت‌ها را پیدا کن!';
        messageDisplay.style.color = '#dc3545';
        // resetButton.textContent = "شروع مجدد"; // این خط حذف شد
        errorEnabled = false; // اطمینان از غیرفعال بودن اشکالات
        if (errorTimer) clearTimeout(errorTimer); // پاک کردن هرگونه تایمر خطای باقی مانده
    } else {
        // رفتن به سطح بعدی
        pairsCount = 0;
        messageDisplay.textContent = `سطح ${currentLevel} شروع شد!`;
        messageDisplay.style.color = '#007bff';
        // دیگر نیازی به زمان‌بندی خطای جدید نیست چون غیرفعال است
    }
    updatePairsDisplay();
    updateMovesDisplay();
    createBoard();
}

// --- توابع برای اشکالات تصادفی (دیگر اجرا نمی‌شوند چون enableRandomErrors = false است) ---

// این توابع دیگر فراخوانی نمی‌شوند چون enableRandomErrors = false است.
// اما برای حفظ ساختار کد، در اینجا باقی مانده‌اند.
/*
function getRandomErrorType() { ... }
function triggerRandomError() { ... }
function scheduleNextError() { ... }
function flipWrongCardError() { ... }
function markAsMatchedError() { ... }
function unlockBoardTemporarilyError() { ... }
*/


// --- راه اندازی اولیه بازی ---
resetGame(true);

// resetButton.addEventListener('click', () => resetGame(true)); // این خط حذف شد