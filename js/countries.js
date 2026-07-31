const countriesData = {
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
    
    // ترجمة المتطلبات حسب اللغة
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
    const countries = Object.keys(countriesData).sort();
    
    // الاحتفاظ بالخيار الأول
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
}

// تحميل الدول عند بدء الصفحة
document.addEventListener('DOMContentLoaded', loadCountries);
