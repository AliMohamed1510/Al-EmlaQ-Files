// ============================================
// الملف الرئيسي - Al EmlaQ Files
// ============================================

// ===== المتغيرات العامة =====
let uploadedFiles = {};
let fileNames = {};
let isHotelConfirmed = false;
let currentStep = 1;
let skippedServices = false;

// ===== التحكم في الخطوات =====
function goToStep(step) {
    // إخفاء جميع الخطوات
    document.querySelectorAll('.step-section').forEach(el => {
        el.classList.remove('active');
    });
    
    // إظهار الخطوة المطلوبة
    const target = document.getElementById(`step${step}`);
    if (target) {
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // تحديث مؤشر التقدم
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        const num = index + 1;
        dot.classList.remove('active', 'completed');
        if (num === step) {
            dot.classList.add('active');
        } else if (num < step) {
            dot.classList.add('completed');
        }
    });
    
    // تحديث الخطوط
    document.querySelectorAll('.step-line').forEach((line, index) => {
        line.classList.toggle('active', index < step - 1);
    });
    
    currentStep = step;
    
    // إذا وصلنا للخطوة 4، عرض الملف
    if (step === 4) {
        generateFilePreview();
    }
}

// ===== تبديل الوضع المظلم =====
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('al-emlaq-theme', 'light');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('al-emlaq-theme', 'dark');
    }
}

// تحميل الثيم المحفوظ
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('al-emlaq-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('themeIcon').className = 'fas fa-sun';
    }
});

// ===== حجز الفندق =====
function bookHotel(platform) {
    const country = document.getElementById('countrySelect').value;
    if (!country) {
        showHotelStatus(translations[currentLang]['select_country_first'], 'error');
        return;
    }
    
    const urls = {
        'booking': 'https://www.booking.com/index.ar.html',
        'agoda': 'https://www.agoda.com/ar/',
        'expedia': 'https://www.expedia.com/'
    };
    
    window.open(urls[platform] || urls.booking, '_blank');
}

// ===== تأكيد حجز الفندق =====
function confirmHotel() {
    const country = document.getElementById('countrySelect').value;
    if (!country) {
        showHotelStatus(translations[currentLang]['select_country_first'], 'error');
        return;
    }
    
    isHotelConfirmed = true;
    const btn = document.querySelector('.btn-confirm-hotel');
    btn.classList.add('confirmed');
    btn.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang]['hotel_confirmed']}`;
    
    showHotelStatus(translations[currentLang]['hotel_confirmed'], 'success');
}

function bookDummyTicket() {
    window.open('https://myjet24.com/', '_blank');
}

function openEPTI() {
    window.open('https://epti-egy.org/Traveltargetweb/Pages/Policy_Qry2/Default.aspx', '_blank');
}

function showHotelStatus(message, type) {
    const statusDiv = document.getElementById('hotelStatus');
    statusDiv.textContent = message;
    statusDiv.className = `hotel-status show ${type}`;
}

// ===== رفع الملفات =====
document.addEventListener('DOMContentLoaded', function() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                const id = this.id;
                const nameDisplay = document.getElementById(id + 'Name');
                if (nameDisplay) {
                    nameDisplay.textContent = fileName;
                    nameDisplay.style.color = '#c9a84c';
                }
                // إضافة class للإشارة إلى وجود ملف
                const uploadArea = this.closest('.upload-area');
                if (uploadArea) {
                    uploadArea.classList.add('has-file');
                }
                uploadedFiles[id] = this.files[0];
                fileNames[id] = fileName;
            }
        });
    });
});

// ===== معالجة الملفات =====
function processFiles() {
    const required = ['passportFile', 'insuranceFile', 'workFile', 'bankFile', 'photoFile', 'hotelFile'];
    let allUploaded = true;
    let missing = [];
    
    required.forEach(id => {
        if (!uploadedFiles[id]) {
            allUploaded = false;
            const label = document.querySelector(`label[for="${id}"]`)?.textContent || id;
            missing.push(label);
        }
    });
    
    if (!isHotelConfirmed) {
        allUploaded = false;
        missing.push(translations[currentLang]['hotel_booking_title']);
    }
    
    if (allUploaded) {
        showStatus(translations[currentLang]['file_ready'], 'success');
        goToStep(4);
    } else {
        showStatus(`${translations[currentLang]['confirm_all_documents']}: ${missing.join(', ')}`, 'error');
    }
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('uploadStatus') || createStatusDiv();
    statusDiv.textContent = message;
    statusDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
}

function createStatusDiv() {
    const div = document.createElement('div');
    div.id = 'uploadStatus';
    document.querySelector('.documents-section').appendChild(div);
    return div;
}

// ===== الخدمات =====
function bookFlight() {
    window.open('https://www.google.com/travel/flights', '_blank');
    goToStep(4);
}

function buyInsurance() {
    window.open('https://www.axa-schengen.com/ar', '_blank');
    goToStep(4);
}

function bookCar() {
    window.open('https://www.rentalcars.com', '_blank');
    goToStep(4);
}

function skipServices() {
    skippedServices = true;
    goToStep(4);
}

// ===== إنشاء معاينة الملف =====
function generateFilePreview() {
    const container = document.getElementById('filePreview');
    const country = document.getElementById('countrySelect').value;
    const visaType = document.getElementById('visaType').value;
    const stayDays = document.getElementById('stayDays').value;
    const lang = currentLang;
    
    if (!country || !isHotelConfirmed || Object.keys(uploadedFiles).length < 6) {
        container.innerHTML = `
            <div class="review-placeholder">
                <i class="fas fa-file-alt"></i>
                <p>${translations[lang]['review_placeholder']}</p>
            </div>
        `;
        return;
    }
    
    const data = countriesData[country];
    const fileList = {
        'passportFile': 'جواز السفر',
        'hotelFile': 'حجز الفندق',
        'insuranceFile': 'التأمين الطبي',
        'workFile': 'إثبات العمل',
        'bankFile': 'كشف الحساب',
        'photoFile': 'الصورة الشخصية'
    };
    
    let filesHTML = '';
    Object.keys(fileNames).forEach(key => {
        if (fileNames[key]) {
            filesHTML += `<li><i class="fas fa-file"></i> ${fileList[key] || key}: ${fileNames[key]}</li>`;
        }
    });
    
    const countryLabel = lang === 'ar' ? 'الدولة' : 'Country';
    const visaLabel = lang === 'ar' ? 'نوع التأشيرة' : 'Visa Type';
    const stayLabel = lang === 'ar' ? 'مدة الإقامة' : 'Stay Duration';
    const hotelLabel = lang === 'ar' ? 'حجز الفندق' : 'Hotel Booking';
    const filesLabel = lang === 'ar' ? 'المستندات المرفوعة' : 'Uploaded Documents';
    
    container.innerHTML = `
        <div class="review-content">
            <div class="review-item">
                <span class="review-label">${countryLabel}</span>
                <span class="review-value">${data.flag} ${country}</span>
            </div>
            <div class="review-item">
                <span class="review-label">${visaLabel}</span>
                <span class="review-value">${visaType}</span>
            </div>
            <div class="review-item">
                <span class="review-label">${stayLabel}</span>
                <span class="review-value">${stayDays} ${lang === 'ar' ? 'يوم' : 'days'}</span>
            </div>
            <div class="review-item">
                <span class="review-label">${hotelLabel}</span>
                <span class="review-value">${isHotelConfirmed ? '✅ ' + (lang === 'ar' ? 'مؤكد' : 'Confirmed') : '❌ ' + (lang === 'ar' ? 'غير مؤكد' : 'Not confirmed')}</span>
            </div>
            <div class="review-files">
                <span class="review-label">${filesLabel}</span>
                <ul>${filesHTML}</ul>
            </div>
            <div class="review-item mt-2">
                <span class="review-label" style="color: var(--accent);">
                    ${lang === 'ar' ? '📌 تأكد من صحة جميع البيانات قبل الطباعة' : '📌 Verify all data is correct before printing'}
                </span>
            </div>
        </div>
    `;
}

// ===== طباعة الملف =====
function printFile() {
    const container = document.getElementById('filePreview');
    if (container.querySelector('.review-placeholder')) {
        alert(translations[currentLang]['review_placeholder']);
        return;
    }
    window.print();
}

// ===== تحميل PDF =====
function downloadPDF() {
    const container = document.getElementById('filePreview');
    if (container.querySelector('.review-placeholder')) {
        alert(translations[currentLang]['review_placeholder']);
        return;
    }
    
    const element = document.getElementById('filePreview');
    const opt = {
        margin: 15,
        filename: `Al_EmlaQ_Files_${new Date().toISOString().slice(0,10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

// ===== إعادة تعيين =====
function resetAll() {
    if (!confirm(translations[currentLang]['reset_confirm'])) return;
    
    // إعادة تعيين الحقول
    document.getElementById('countrySelect').value = '';
    document.getElementById('visaType').value = 'سياحة';
    document.getElementById('stayDays').value = '7';
    document.getElementById('hotelStatus').className = 'hotel-status';
    document.getElementById('hotelStatus').textContent = '';
    
    // إعادة تعيين رفع الملفات
    document.querySelectorAll('input[type="file"]').forEach(input => {
        input.value = '';
        const nameDisplay = document.getElementById(input.id + 'Name');
        if (nameDisplay) nameDisplay.textContent = '';
        const uploadArea = input.closest('.upload-area');
        if (uploadArea) uploadArea.classList.remove('has-file');
    });
    
    // إعادة تعيين المتغيرات
    uploadedFiles = {};
    fileNames = {};
    isHotelConfirmed = false;
    skippedServices = false;
    
    // إعادة تعيين زر تأكيد الفندق
    const btn = document.querySelector('.btn-confirm-hotel');
    btn.classList.remove('confirmed');
    btn.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang]['confirm_hotel']}`;
    
    // إعادة تعيين معلومات الدولة
    document.getElementById('countryFlagDisplay').textContent = '🌍';
    document.getElementById('countryNameDisplay').textContent = translations[currentLang]['select_country'];
    document.getElementById('countryRequirements').innerHTML = `<p class="text-muted">${translations[currentLang]['select_country_hint']}</p>`;
    
    // إعادة تعيين معاينة الملف
    document.getElementById('filePreview').innerHTML = `
        <div class="review-placeholder">
            <i class="fas fa-file-alt"></i>
            <p>${translations[currentLang]['review_placeholder']}</p>
        </div>
    `;
    
    // العودة للخطوة 1
    goToStep(1);
}

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل الخطوة الأولى
    goToStep(1);
    
    console.log('✦ Al EmlaQ Files ✦');
    console.log('تم تحميل الموقع بنجاح');
});
