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

    // لو مفيش دولة مختارة، نعرض placeholder
    if (!country) {
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
        'passportFile': lang === 'ar' ? 'جواز السفر' : 'Passport',
        'hotelFile': lang === 'ar' ? 'حجز الفندق' : 'Hotel Booking',
        'insuranceFile': lang === 'ar' ? 'التأمين الطبي' : 'Insurance',
        'workFile': lang === 'ar' ? 'إثبات العمل' : 'Work Proof',
        'bankFile': lang === 'ar' ? 'كشف الحساب' : 'Bank Statement',
        'photoFile': lang === 'ar' ? 'الصورة الشخصية' : 'Photo'
    };

    let filesHTML = '';
    let uploadedCount = 0;
    Object.keys(fileList).forEach(key => {
        if (fileNames[key]) {
            filesHTML += `<li><i class="fas fa-check-circle" style="color:#28a745;"></i> ${fileList[key]}: ${fileNames[key]}</li>`;
            uploadedCount++;
        } else {
            filesHTML += `<li><i class="fas fa-times-circle" style="color:#dc3545;"></i> ${fileList[key]}: ${lang === 'ar' ? 'غير مرفوع' : 'Not uploaded'}</li>`;
        }
    });

    const countryLabel = lang === 'ar' ? 'الدولة' : 'Country';
    const visaLabel = lang === 'ar' ? 'نوع التأشيرة' : 'Visa Type';
    const stayLabel = lang === 'ar' ? 'مدة الإقامة' : 'Stay Duration';
    const hotelLabel = lang === 'ar' ? 'حجز الفندق' : 'Hotel Booking';
    const filesLabel = lang === 'ar' ? 'المستندات' : 'Documents';
    const statusLabel = lang === 'ar' ? 'الحالة' : 'Status';

    const allReady = isHotelConfirmed && uploadedCount >= 6;
    const statusText = allReady 
        ? (lang === 'ar' ? '✅ الملف جاهز للتقديم' : '✅ File ready for submission')
        : (lang === 'ar' ? '⚠️ يرجى إكمال المستندات المطلوبة' : '⚠️ Please complete required documents');

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
                <span class="review-label">${filesLabel} (${uploadedCount}/6)</span>
                <ul>${filesHTML}</ul>
            </div>
            <div class="review-item" style="border-top:2px solid var(--accent);margin-top:15px;padding-top:15px;">
                <span class="review-label" style="color: var(--accent);font-weight:900;">${statusLabel}</span>
                <span class="review-value" style="color: ${allReady ? '#28a745' : '#dc3545'};">${statusText}</span>
            </div>
            <div class="review-item mt-2">
                <span class="review-label" style="color: var(--text-secondary);font-size:0.85rem;">
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

    // طباعة بس محتوى المراجعة
    const printWindow = window.open('', '_blank');
    const content = container.innerHTML;
    const lang = currentLang;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${lang}" dir="${dir}">
        <head>
            <meta charset="UTF-8">
            <title>Al EmlaQ Files - ${lang === 'ar' ? 'ملف التأشيرة' : 'Visa File'}</title>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Cairo', sans-serif; 
                    padding: 40px; 
                    background: #fff; 
                    color: #1a1a2e;
                    line-height: 1.8;
                }
                .review-item { 
                    display: flex; 
                    justify-content: space-between; 
                    padding: 12px 0; 
                    border-bottom: 1px solid #eee; 
                }
                .review-label { color: #666; font-weight: 600; }
                .review-value { font-weight: 700; }
                .review-files { margin-top: 15px; }
                .review-files li { list-style: none; padding: 6px 0; color: #555; }
                .review-files li i { color: #c9a84c; margin-left: 8px; }
                h2 { text-align: center; margin-bottom: 30px; color: #1a1a2e; font-size: 1.8rem; }
                .header-line { 
                    width: 60px; height: 3px; background: #c9a84c; 
                    margin: 10px auto 30px; border-radius: 2px; 
                }
                .footer-note { 
                    margin-top: 40px; padding-top: 20px; border-top: 2px solid #c9a84c;
                    text-align: center; color: #888; font-size: 0.85rem; 
                }
                ul { padding: 0; }
                @media print { body { padding: 20px; } }
            </style>
        </head>
        <body>
            <h2>${lang === 'ar' ? '✦ Al EmlaQ Files ✦' : '✦ Al EmlaQ Files ✦'}</h2>
            <div class="header-line"></div>
            ${content}
            <div class="footer-note">
                ${lang === 'ar' 
                    ? 'أداة مساعدة لتحضير ملفات تأشيرة شنغن - ليست بديلاً عن التقديم الرسمي' 
                    : 'Schengen visa file preparation assistant - Not a substitute for official submission'}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
}

// ===== تحميل PDF =====
function downloadPDF() {
    const container = document.getElementById('filePreview');
    if (container.querySelector('.review-placeholder')) {
        alert(translations[currentLang]['review_placeholder']);
        return;
    }

    // التأكد من تحميل مكتبة html2pdf
    if (typeof html2pdf === 'undefined') {
        alert(currentLang === 'ar' 
            ? 'جاري تحميل المكتبة... الرجاء المحاولة بعد ثوانٍ' 
            : 'Library loading... Please try again in a few seconds');
        return;
    }

    // إظهار مؤشر التحميل
    const btn = document.querySelector('.action-btn.pdf');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'ar' ? 'جاري التحميل...' : 'Downloading...');
    btn.disabled = true;

    const element = document.getElementById('filePreview');
    const opt = {
        margin: 10,
        filename: `Al_EmlaQ_Files_${new Date().toISOString().slice(0,10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save()
        .then(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        })
        .catch(err => {
            console.error('PDF Error:', err);
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert(currentLang === 'ar' 
                ? 'حدث خطأ أثناء تحميل PDF. جرب الطباعة بدلاً من ذلك.' 
                : 'Error downloading PDF. Try printing instead.');
        });
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
