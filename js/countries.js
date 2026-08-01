// ============================================
// بيانات دول الشنغن - Al EmlaQ Files (FIXED)
// ============================================

const countriesData = {
    'إيطاليا': {
        flag: '🇮🇹',
        code: 'IT',
        embassy_url: 'https://vistoperitalia.esteri.it',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking',
            'Flight ticket',
            'Bank statement'
        ]
    },
    'إسبانيا': {
        flag: '🇪🇸',
        code: 'ES',
        embassy_url: 'https://www.exteriores.gob.es',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ],
        requirements_en: [
            'Valid passport',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Sufficient funds'
        ]
    },
    'سويسرا': {
        flag: '🇨🇭',
        code: 'CH',
        embassy_url: 'https://www.sem.admin.ch',
        visa_fee: '80 يورو',
        processing_time: '10-15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking',
            'Flight ticket',
            'Bank statement'
        ]
    },
    'السويد': {
        flag: '🇸🇪',
        code: 'SE',
        embassy_url: 'https://www.migrationsverket.se',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Sufficient funds'
        ]
    },
    'سلوفاكيا': {
        flag: '🇸🇰',
        code: 'SK',
        embassy_url: 'https://www.mzv.sk',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Sufficient funds'
        ]
    },
    'البرتغال': {
        flag: '🇵🇹',
        code: 'PT',
        embassy_url: 'https://www.vistos.mne.pt',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق أو دعوة',
            'تذكرة طيران ذهاب وعودة',
            'كشف حساب بنكي 3 أشهر',
            'خطاب جهة العمل'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking or invitation',
            'Round-trip flight ticket',
            'Bank statement (3 months)',
            'Employment letter'
        ]
    },
    'مالطا': {
        flag: '🇲🇹',
        code: 'MT',
        embassy_url: 'https://identitymalta.com',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Bank statement'
        ]
    },
    'المجر-هنغاريا': {
        flag: '🇭🇺',
        code: 'HU',
        embassy_url: 'https://konzuliszolgalat.kormany.hu',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق أو دعوة',
            'تذكرة طيران',
            'كشف حساب بنكي',
            'خطاب جهة العمل'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking or invitation',
            'Flight ticket',
            'Bank statement',
            'Employment letter'
        ]
    },
    'اليونان': {
        flag: '🇬🇷',
        code: 'GR',
        embassy_url: 'https://www.mfa.gr',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Financial means'
        ]
    },
    'كرواتيا': {
        flag: '🇭🇷',
        code: 'HR',
        embassy_url: 'https://www.mvep.hr',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق أو دعوة',
            'تذكرة طيران ذهاب وعودة',
            'كشف حساب بنكي',
            'خطاب جهة العمل'
        ],
        requirements_en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking or invitation',
            'Round-trip flight ticket',
            'Bank statement',
            'Employment letter'
        ]
    },
    'النمسا': {
        flag: '🇦🇹',
        code: 'AT',
        embassy_url: 'https://www.bmeia.gv.at',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ],
        requirements_en: [
            'Valid passport',
            'Medical insurance',
            'Hotel booking',
            'Flight ticket',
            'Bank statement'
        ]
    }
};

function updateCountryInfo() {
    const country = document.getElementById('countrySelect').value;
    const flagDisplay = document.getElementById('countryFlagDisplay');
    const nameDisplay = document.getElementById('countryNameDisplay');
    const reqDiv = document.getElementById('countryRequirements');

    if (!country || !countriesData[country]) {
        flagDisplay.textContent = '🌍';
        nameDisplay.textContent = translations[currentLang]['select_country'];
        reqDiv.innerHTML = `<p class="text-muted">${translations[currentLang]['select_country_hint']}</p>`;
        return;
    }

    const data = countriesData[country];
    const lang = currentLang;

    flagDisplay.textContent = data.flag;
    nameDisplay.textContent = country;

    // Use translated requirements based on language
    const reqs = lang === 'ar' ? data.requirements : (data.requirements_en || data.requirements);

    let html = `<ul>`;
    reqs.forEach(req => {
        html += `<li>${req}</li>`;
    });
    html += `</ul>`;
    html += `<a href="${data.embassy_url}" target="_blank" class="btn-outline-gold mt-2">
                <i class="fas fa-external-link-alt"></i> ${lang === 'ar' ? 'موقع السفارة' : 'Embassy Website'}
            </a>`;

    reqDiv.innerHTML = html;

    // Auto-fill main destination and first entry
    const mainDest = document.getElementById('mainDestination');
    const firstEntry = document.getElementById('firstEntry');
    if (mainDest && !mainDest.value) mainDest.value = country;
    if (firstEntry && !firstEntry.value) firstEntry.value = country;
}

function loadCountries() {
    const select = document.getElementById('countrySelect');
    if (!select) return;
    const countries = Object.keys(countriesData).sort();

    // Save current selection
    const currentValue = select.value;

    select.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = translations[currentLang]['select_country'];
    select.appendChild(defaultOption);

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = `${countriesData[country].flag} ${country}`;
        select.appendChild(option);
    });

    // Restore selection
    if (currentValue && countriesData[currentValue]) {
        select.value = currentValue;
    }
}

// تحميل الدول عند بدء الصفحة
document.addEventListener('DOMContentLoaded', loadCountries);
