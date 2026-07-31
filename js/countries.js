const countriesData = {
    'النمسا': {
        flag: '🇦🇹',
        code: 'AT',
        embassy_url: 'https://www.bmeia.gv.at',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'بلجيكا': {
        flag: '🇧🇪',
        code: 'BE',
        embassy_url: 'https://www.diplomatie.belgium.be',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'خطاب جهة العمل'
        ]
    },
    'التشيك': {
        flag: '🇨🇿',
        code: 'CZ',
        embassy_url: 'https://www.mzv.cz',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي 3 أشهر'
        ]
    },
    'كرواتيا': {
        flag: '🇭🇷',
        code: 'HR',
        embassy_url: 'https://mvep.gov.hr',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
    'الدنمارك': {
        flag: '🇩🇰',
        code: 'DK',
        embassy_url: 'https://www.nyidanmark.dk',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'إستونيا': {
        flag: '🇪🇪',
        code: 'EE',
        embassy_url: 'https://vm.ee',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
    'فنلندا': {
        flag: '🇫🇮',
        code: 'FI',
        embassy_url: 'https://um.fi',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'فرنسا': {
        flag: '🇫🇷',
        code: 'FR',
        embassy_url: 'https://france-visas.gouv.fr',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق لكامل المدة',
            'تذكرة طيران ذهاب وعودة',
            'كشف حساب بنكي 3 أشهر',
            'خطاب جهة العمل'
        ]
    },
    'ألمانيا': {
        flag: '🇩🇪',
        code: 'DE',
        embassy_url: 'https://www.auswaertiges-amt.de',
        visa_fee: '80 يورو',
        processing_time: '10-15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق أو دعوة',
            'تذكرة طيران',
            'كشف حساب بنكي 3-6 أشهر',
            'خطاب من جهة العمل'
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
        ]
    },
    'المجر': {
        flag: '🇭🇺',
        code: 'HU',
        embassy_url: 'https://konzinfo.mfa.gov.hu',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'آيسلندا': {
        flag: '🇮🇸',
        code: 'IS',
        embassy_url: 'https://www.government.is',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
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
        ]
    },
    'لاتفيا': {
        flag: '🇱🇻',
        code: 'LV',
        embassy_url: 'https://www.mfa.gov.lv',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
    'ليختنشتاين': {
        flag: '🇱🇮',
        code: 'LI',
        embassy_url: 'https://www.llv.li',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
    'ليتوانيا': {
        flag: '🇱🇹',
        code: 'LT',
        embassy_url: 'https://urm.lt',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'لوكسمبورغ': {
        flag: '🇱🇺',
        code: 'LU',
        embassy_url: 'https://mae.gouvernement.lu',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'خطاب جهة العمل'
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
            'وسائل مالية كافية'
        ]
    },
    'هولندا': {
        flag: '🇳🇱',
        code: 'NL',
        embassy_url: 'https://www.netherlandsandyou.nl',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'وسائل مالية كافية'
        ]
    },
    'النرويج': {
        flag: '🇳🇴',
        code: 'NO',
        embassy_url: 'https://www.udi.no',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي 30,000 يورو',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'بولندا': {
        flag: '🇵🇱',
        code: 'PL',
        embassy_url: 'https://www.gov.pl/web/dyplomacja',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
        ]
    },
    'البرتغال': {
        flag: '🇵🇹',
        code: 'PT',
        embassy_url: 'https://www.vfsglobal.com/portugal',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
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
        ]
    },
    'سلوفينيا': {
        flag: '🇸🇮',
        code: 'SI',
        embassy_url: 'https://www.gov.si',
        visa_fee: '80 يورو',
        processing_time: '15 يوم عمل',
        requirements: [
            'جواز سفر صالح 3 أشهر',
            'تأمين طبي',
            'حجز فندق',
            'تذكرة طيران',
            'كشف حساب بنكي'
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

    const reqLabels = {
        ar: data.requirements,
        en: [
            'Valid passport (3 months)',
            'Medical insurance (30,000 EUR)',
            'Hotel booking for full stay',
            'Round-trip flight ticket',
            'Bank statement (3 months)',
            'Employment letter'
        ]
    };

    const reqs = lang === 'ar' ? data.requirements : reqLabels.en.slice(0, data.requirements.length);

    let html = `<ul>`;
    reqs.forEach(req => {
        html += `<li>${req}</li>`;
    });
    html += `</ul>`;
    html += `<a href="${data.embassy_url}" target="_blank" class="btn btn-sm btn-outline-gold mt-2">
                <i class="fas fa-external-link-alt"></i> ${lang === 'ar' ? 'موقع السفارة' : 'Embassy Website'}
            </a>`;

    reqDiv.innerHTML = html;
}

function loadCountries() {
    const select = document.getElementById('countrySelect');
    if (!select) return;

    const countries = Object.keys(countriesData).sort();
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ar';
    const placeholder = (typeof translations !== 'undefined' && translations[lang] && translations[lang]['select_country']) 
        ? translations[lang]['select_country'] 
        : (lang === 'ar' ? '-- اختر الدولة --' : '-- Select Country --');

    select.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = placeholder;
    select.appendChild(defaultOption);

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = `${countriesData[country].flag} ${country}`;
        select.appendChild(option);
    });
}

// Load on DOM ready
document.addEventListener('DOMContentLoaded', loadCountries);

// Also re-load when language changes (if translations.js calls this)
if (typeof window !== 'undefined') {
    window.reloadCountries = loadCountries;
}
