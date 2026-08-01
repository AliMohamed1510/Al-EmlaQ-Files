// ============================================
// الملف الرئيسي - Al EmlaQ Files (FIXED v2)
// ============================================

// ===== المتغيرات العامة =====
let uploadedFiles = {};
let fileNames = {};
let isHotelConfirmed = false;
let currentStep = 1;
let skippedServices = false;

// ===== الحقول الإلزامية =====
const requiredFields = {
    1: ['countrySelect', 'surname', 'firstname', 'birthDate', 'nationality', 'passportNumber', 'passportExpiry', 'email', 'phone'],
    2: ['mainDestination', 'firstEntry', 'arrivalDate', 'departureDate']
};

const requiredFiles = ['passportFile', 'insuranceFile', 'hotelFile'];

// ===== التحقق من الحقول الإلزامية =====
function validateStep(step) {
    const fields = requiredFields[step];
    if (!fields) return true;

    let isValid = true;
    let firstError = null;

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const value = el.value.trim();
        if (!value) {
            isValid = false;
            el.classList.add('is-invalid');
            el.style.borderColor = '#dc3545';
            el.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.15)';
            if (!firstError) firstError = el;
        } else {
            el.classList.remove('is-invalid');
            el.style.borderColor = '';
            el.style.boxShadow = '';
        }
    });

    // التحقق من الملفات في الخطوة 2
    if (step === 2) {
        let filesValid = true;
        requiredFiles.forEach(id => {
            const uploadArea = document.querySelector(`#${id}`)?.closest('.upload-area');
            if (!uploadedFiles[id]) {
                filesValid = false;
                if (uploadArea) {
                    uploadArea.style.borderColor = '#dc3545';
                    uploadArea.style.background = 'rgba(220, 53, 69, 0.05)';
                }
            } else {
                if (uploadArea) {
                    uploadArea.style.borderColor = '';
                    uploadArea.style.background = '';
                }
            }
        });

        if (!isHotelConfirmed) {
            filesValid = false;
            const hotelBtn = document.querySelector('.btn-confirm-hotel');
            if (hotelBtn) {
                hotelBtn.style.animation = 'shake 0.5s ease';
                setTimeout(() => hotelBtn.style.animation = '', 500);
            }
        }

        if (!filesValid) isValid = false;
    }

    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
    }

    return isValid;
}

// ===== إزالة التحقق عند الكتابة =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('input', function() {
            this.classList.remove('is-invalid');
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
        el.addEventListener('change', function() {
            this.classList.remove('is-invalid');
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
});

// ===== التحكم في الخطوات =====
function goToStep(step) {
    // التحقق قبل الانتقال للأمام
    if (step > currentStep && !validateStep(currentStep)) {
        showToast(translations[currentLang]['fill_required_fields'] || 'الرجاء ملء جميع الحقول الإلزامية', 'error');
        return;
    }

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
        generatePrintableForm();
    }
}

// ===== Toast Notification =====
function showToast(message, type = 'info') {
    const existing = document.querySelector('.al-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `al-toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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
                    uploadArea.style.borderColor = '';
                    uploadArea.style.background = '';
                }
                uploadedFiles[id] = this.files[0];
                fileNames[id] = fileName;
            }
        });
    });
});

// ===== جمع جميع بيانات النموذج =====
function collectFormData() {
    return {
        // الدولة والتأشيرة
        country: document.getElementById('countrySelect')?.value || '',
        visaType: document.getElementById('visaType')?.value || '',
        stayDays: document.getElementById('stayDays')?.value || '',

        // البيانات الشخصية
        surname: document.getElementById('surname')?.value || '',
        firstname: document.getElementById('firstname')?.value || '',
        birthDate: document.getElementById('birthDate')?.value || '',
        birthPlace: document.getElementById('birthPlace')?.value || '',
        birthCountry: document.getElementById('birthCountry')?.value || '',
        nationality: document.getElementById('nationality')?.value || '',
        sex: document.getElementById('sex')?.value || '',
        civilStatus: document.getElementById('civilStatus')?.value || '',
        nationalId: document.getElementById('nationalId')?.value || '',
        otherNationalities: document.getElementById('otherNationalities')?.value || '',

        // جواز السفر
        passportType: document.getElementById('passportType')?.value || '',
        passportNumber: document.getElementById('passportNumber')?.value || '',
        passportIssueDate: document.getElementById('passportIssueDate')?.value || '',
        passportExpiry: document.getElementById('passportExpiry')?.value || '',
        passportIssuedBy: document.getElementById('passportIssuedBy')?.value || '',

        // الاتصال
        homeAddress: document.getElementById('homeAddress')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',

        // العمل
        occupation: document.getElementById('occupation')?.value || '',
        employer: document.getElementById('employer')?.value || '',
        employerAddress: document.getElementById('employerAddress')?.value || '',
        employerPhone: document.getElementById('employerPhone')?.value || '',

        // الرحلة
        mainDestination: document.getElementById('mainDestination')?.value || '',
        firstEntry: document.getElementById('firstEntry')?.value || '',
        entriesCount: document.getElementById('entriesCount')?.value || '',
        purposeDetail: document.getElementById('purposeDetail')?.value || '',
        arrivalDate: document.getElementById('arrivalDate')?.value || '',
        departureDate: document.getElementById('departureDate')?.value || '',
        fingerprints: document.getElementById('fingerprints')?.value || '',
        fingerprintsDate: document.getElementById('fingerprintsDate')?.value || '',

        // الإقامة
        invitingPerson: document.getElementById('invitingPerson')?.value || '',
        invitingPhone: document.getElementById('invitingPhone')?.value || '',
        invitingEmail: document.getElementById('invitingEmail')?.value || '',
        invitingAddress: document.getElementById('invitingAddress')?.value || '',

        // الشركة
        companyName: document.getElementById('companyName')?.value || '',
        companyPhone: document.getElementById('companyPhone')?.value || '',
        contactPerson: document.getElementById('contactPerson')?.value || '',

        // التكاليف
        costsCoveredBy: document.getElementById('costsCoveredBy')?.value || '',
        meansOfSupport: document.getElementById('meansOfSupport')?.value || '',

        // فرد العائلة
        euFamilySurname: document.getElementById('euFamilySurname')?.value || '',
        euFamilyFirstname: document.getElementById('euFamilyFirstname')?.value || '',
        euFamilyDob: document.getElementById('euFamilyDob')?.value || '',
        euFamilyNationality: document.getElementById('euFamilyNationality')?.value || '',
        euFamilyDocument: document.getElementById('euFamilyDocument')?.value || '',
        euFamilyRelation: document.getElementById('euFamilyRelation')?.value || ''
    };
}

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
    const data = collectFormData();
    const lang = currentLang;

    if (!data.country) {
        container.innerHTML = `
            <div class="review-placeholder">
                <i class="fas fa-file-alt"></i>
                <p>${translations[lang]['review_placeholder']}</p>
            </div>
        `;
        return;
    }

    const countryData = countriesData[data.country];
    const fileList = {
        'passportFile': lang === 'ar' ? 'جواز السفر' : 'Passport',
        'hotelFile': lang === 'ar' ? 'حجز الفندق' : 'Hotel Booking',
        'insuranceFile': lang === 'ar' ? 'التأمين الطبي' : 'Insurance',
        'workFile': lang === 'ar' ? 'إثبات العمل' : 'Work Proof',
        'bankFile': lang === 'ar' ? 'كشف الحساب' : 'Bank Statement',
        'photoFile': lang === 'ar' ? 'الصورة الشخصية' : 'Photo'
    };

    let filesHTML = '';
    Object.keys(fileNames).forEach(key => {
        if (fileNames[key]) {
            filesHTML += `<li><i class="fas fa-check-circle"></i> ${fileList[key] || key}: ${fileNames[key]}</li>`;
        }
    });

    const row = (label, value) => {
        if (!value) return '';
        return `
            <div class="review-item">
                <span class="review-label">${label}</span>
                <span class="review-value">${value}</span>
            </div>
        `;
    };

    const sectionTitle = (title) => `
        <div class="review-section-title">
            <i class="fas fa-circle"></i> ${title}
        </div>
    `;

    container.innerHTML = `
        <div class="review-content">
            <div class="review-header">
                <h3>Al EmlaQ Files - ${lang === 'ar' ? 'ملف تأشيرة شنغن' : 'Schengen Visa File'}</h3>
                <p>${new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')}</p>
            </div>

            ${sectionTitle(lang === 'ar' ? 'الدولة والتأشيرة' : 'Country & Visa')}
            ${row(lang === 'ar' ? 'الدولة' : 'Country', countryData ? `${countryData.flag} ${data.country}` : data.country)}
            ${row(lang === 'ar' ? 'نوع التأشيرة' : 'Visa Type', data.visaType)}
            ${row(lang === 'ar' ? 'مدة الإقامة' : 'Stay Duration', data.stayDays ? data.stayDays + (lang === 'ar' ? ' يوم' : ' days') : '')}

            ${sectionTitle(lang === 'ar' ? 'البيانات الشخصية' : 'Personal Data')}
            ${row(lang === 'ar' ? 'اللقب' : 'Surname', data.surname)}
            ${row(lang === 'ar' ? 'الاسم الأول' : 'First Name(s)', data.firstname)}
            ${row(lang === 'ar' ? 'تاريخ الميلاد' : 'Date of Birth', data.birthDate)}
            ${row(lang === 'ar' ? 'مكان الميلاد' : 'Place of Birth', data.birthPlace)}
            ${row(lang === 'ar' ? 'بلد الميلاد' : 'Country of Birth', data.birthCountry)}
            ${row(lang === 'ar' ? 'الجنسية' : 'Nationality', data.nationality)}
            ${row(lang === 'ar' ? 'الجنس' : 'Sex', data.sex)}
            ${row(lang === 'ar' ? 'الحالة الاجتماعية' : 'Civil Status', data.civilStatus)}
            ${row(lang === 'ar' ? 'الرقم القومي' : 'National ID', data.nationalId)}
            ${row(lang === 'ar' ? 'جنسيات أخرى' : 'Other Nationalities', data.otherNationalities)}

            ${sectionTitle(lang === 'ar' ? 'بيانات جواز السفر' : 'Passport Data')}
            ${row(lang === 'ar' ? 'نوع الوثيقة' : 'Document Type', data.passportType)}
            ${row(lang === 'ar' ? 'رقم الجواز' : 'Document No.', data.passportNumber)}
            ${row(lang === 'ar' ? 'تاريخ الإصدار' : 'Date of Issue', data.passportIssueDate)}
            ${row(lang === 'ar' ? 'تاريخ الانتهاء' : 'Valid Until', data.passportExpiry)}
            ${row(lang === 'ar' ? 'جهة الإصدار' : 'Issued by', data.passportIssuedBy)}

            ${sectionTitle(lang === 'ar' ? 'بيانات الاتصال' : 'Contact Information')}
            ${row(lang === 'ar' ? 'العنوان' : 'Address', data.homeAddress)}
            ${row(lang === 'ar' ? 'البريد الإلكتروني' : 'Email', data.email)}
            ${row(lang === 'ar' ? 'الهاتف' : 'Telephone', data.phone)}

            ${sectionTitle(lang === 'ar' ? 'بيانات العمل' : 'Work / Study')}
            ${row(lang === 'ar' ? 'المهنة' : 'Occupation', data.occupation)}
            ${row(lang === 'ar' ? 'جهة العمل' : 'Employer', data.employer)}
            ${row(lang === 'ar' ? 'عنوان جهة العمل' : 'Employer Address', data.employerAddress)}
            ${row(lang === 'ar' ? 'هاتف جهة العمل' : 'Employer Phone', data.employerPhone)}

            ${sectionTitle(lang === 'ar' ? 'تفاصيل الرحلة' : 'Trip Details')}
            ${row(lang === 'ar' ? 'الوجهة الرئيسية' : 'Main Destination', data.mainDestination)}
            ${row(lang === 'ar' ? 'أول دخول' : 'First Entry', data.firstEntry)}
            ${row(lang === 'ar' ? 'عدد مرات الدخول' : 'Entries', data.entriesCount)}
            ${row(lang === 'ar' ? 'الغرض من الزيارة' : 'Purpose', data.purposeDetail)}
            ${row(lang === 'ar' ? 'تاريخ الوصول' : 'Arrival', data.arrivalDate)}
            ${row(lang === 'ar' ? 'تاريخ المغادرة' : 'Departure', data.departureDate)}
            ${row(lang === 'ar' ? 'بصمات سابقة' : 'Previous Fingerprints', data.fingerprints)}
            ${data.fingerprints === 'نعم' || data.fingerprints === 'Yes' ? row(lang === 'ar' ? 'تاريخ البصمات' : 'Fingerprints Date', data.fingerprintsDate) : ''}

            ${sectionTitle(lang === 'ar' ? 'الإقامة / المدعو' : 'Accommodation')}
            ${row(lang === 'ar' ? 'اسم المدعو/الفندق' : 'Inviting Person/Hotel', data.invitingPerson)}
            ${row(lang === 'ar' ? 'هاتف المدعو' : 'Inviting Phone', data.invitingPhone)}
            ${row(lang === 'ar' ? 'بريد المدعو' : 'Inviting Email', data.invitingEmail)}
            ${row(lang === 'ar' ? 'عنوان المدعو' : 'Inviting Address', data.invitingAddress)}

            ${sectionTitle(lang === 'ar' ? 'الشركة المدعوة' : 'Inviting Company')}
            ${row(lang === 'ar' ? 'اسم الشركة' : 'Company Name', data.companyName)}
            ${row(lang === 'ar' ? 'هاتف الشركة' : 'Company Phone', data.companyPhone)}
            ${row(lang === 'ar' ? 'مسؤول الاتصال' : 'Contact Person', data.contactPerson)}

            ${sectionTitle(lang === 'ar' ? 'التكاليف' : 'Costs')}
            ${row(lang === 'ar' ? 'الممول' : 'Covered by', data.costsCoveredBy)}
            ${row(lang === 'ar' ? 'وسائل الدعم' : 'Means of Support', data.meansOfSupport)}

            ${data.euFamilySurname ? sectionTitle(lang === 'ar' ? 'فرد العائلة من الاتحاد الأوروبي' : 'EU Family Member') : ''}
            ${row(lang === 'ar' ? 'اللقب' : 'Surname', data.euFamilySurname)}
            ${row(lang === 'ar' ? 'الاسم' : 'First Name', data.euFamilyFirstname)}
            ${row(lang === 'ar' ? 'تاريخ الميلاد' : 'Date of Birth', data.euFamilyDob)}
            ${row(lang === 'ar' ? 'الجنسية' : 'Nationality', data.euFamilyNationality)}
            ${row(lang === 'ar' ? 'رقم الجواز' : 'Document No.', data.euFamilyDocument)}
            ${row(lang === 'ar' ? 'صلة القرابة' : 'Relationship', data.euFamilyRelation)}

            ${sectionTitle(lang === 'ar' ? 'المستندات المرفوعة' : 'Uploaded Documents')}
            <div class="review-files">
                <ul>${filesHTML || '<li>' + (lang === 'ar' ? 'لا توجد ملفات مرفوعة' : 'No files uploaded') + '</li>'}</ul>
            </div>

            ${row(lang === 'ar' ? 'حجز الفندق' : 'Hotel Booking', isHotelConfirmed ? '✅ ' + (lang === 'ar' ? 'مؤكد' : 'Confirmed') : '❌ ' + (lang === 'ar' ? 'غير مؤكد' : 'Not confirmed'))}

            <div class="review-item mt-3 warning-box">
                <span class="review-label" style="color: var(--accent);">
                    ${lang === 'ar' ? '📌 تأكد من صحة جميع البيانات قبل الطباعة' : '📌 Verify all data is correct before printing'}
                </span>
            </div>
        </div>
    `;
}

// ===== إنشاء نموذج الطباعة الرسمي =====
function generatePrintableForm() {
    const data = collectFormData();
    const lang = currentLang;

    let printable = document.getElementById('printableForm');
    if (!printable) {
        printable = document.createElement('div');
        printable.id = 'printableForm';
        document.body.appendChild(printable);
    }

    const isAr = lang === 'ar';
    const lbl = (ar, en) => isAr ? ar : en;

    printable.innerHTML = `
        <div class="schengen-form">
            <div class="form-header">
                <div class="form-title">
                    <h1>${lbl('نموذج طلب تأشيرة شنغن', 'Application for Schengen Visa')}</h1>
                    <p class="form-subtitle">${lbl('هذا النموذج مجاني', 'This application form is free')}</p>
                </div>
                <div class="photo-box">
                    <span>${lbl('صورة شخصية', 'Photo')}</span>
                    <small>35mm × 45mm</small>
                </div>
            </div>

            <div class="form-section-official">
                <div class="field-row">
                    <div class="field-num">1</div>
                    <div class="field-content">
                        <label>${lbl('اللقب (العائلي)', 'Surname (Family name)')}</label>
                        <div class="field-value">${data.surname || ''}</div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">2</div>
                    <div class="field-content">
                        <label>${lbl('اللقب عند الولادة', 'Surname at birth (Former family name(s))')}</label>
                        <div class="field-value">${data.surname || ''}</div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">3</div>
                    <div class="field-content">
                        <label>${lbl('الاسم الأول (الأسماء)', 'First name(s) (Given name(s))')}</label>
                        <div class="field-value">${data.firstname || ''}</div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">4</div>
                        <div class="field-content">
                            <label>${lbl('تاريخ الميلاد (يوم-شهر-سنة)', 'Date of birth (day-month-year)')}</label>
                            <div class="field-value">${data.birthDate || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">5</div>
                        <div class="field-content">
                            <label>${lbl('مكان الميلاد', 'Place of birth')}</label>
                            <div class="field-value">${data.birthPlace || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">6</div>
                        <div class="field-content">
                            <label>${lbl('بلد الميلاد', 'Country of birth')}</label>
                            <div class="field-value">${data.birthCountry || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">7</div>
                        <div class="field-content">
                            <label>${lbl('الجنسية الحالية', 'Current nationality')}</label>
                            <div class="field-value">${data.nationality || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">8</div>
                        <div class="field-content">
                            <label>${lbl('الجنس', 'Sex')}</label>
                            <div class="checkbox-group">
                                <span class="checkbox-item ${data.sex === 'ذكر' || data.sex === 'Male' ? 'checked' : ''}">${lbl('ذكر', 'Male')}</span>
                                <span class="checkbox-item ${data.sex === 'أنثى' || data.sex === 'Female' ? 'checked' : ''}">${lbl('أنثى', 'Female')}</span>
                                <span class="checkbox-item ${data.sex === 'أخرى' || data.sex === 'Other' ? 'checked' : ''}">${lbl('أخرى', 'Other')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">9</div>
                        <div class="field-content">
                            <label>${lbl('الحالة الاجتماعية', 'Civil status')}</label>
                            <div class="field-value">${data.civilStatus || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">11</div>
                    <div class="field-content">
                        <label>${lbl('الرقم القومي', 'National identity number, where applicable')}</label>
                        <div class="field-value">${data.nationalId || ''}</div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">12</div>
                    <div class="field-content">
                        <label>${lbl('نوع وثيقة السفر', 'Type of travel document')}</label>
                        <div class="field-value">${data.passportType || ''}</div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">13</div>
                        <div class="field-content">
                            <label>${lbl('رقم الوثيقة', 'Number of travel document')}</label>
                            <div class="field-value">${data.passportNumber || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">14</div>
                        <div class="field-content">
                            <label>${lbl('تاريخ الإصدار', 'Date of issue')}</label>
                            <div class="field-value">${data.passportIssueDate || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">15</div>
                        <div class="field-content">
                            <label>${lbl('صالح حتى', 'Valid until')}</label>
                            <div class="field-value">${data.passportExpiry || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">16</div>
                        <div class="field-content">
                            <label>${lbl('جهة الإصدار', 'Issued by')}</label>
                            <div class="field-value">${data.passportIssuedBy || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">18</div>
                    <div class="field-content">
                        <label>${lbl('عنوان السكن', 'Home address')}</label>
                        <div class="field-value">${data.homeAddress || ''}</div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">-</div>
                        <div class="field-content">
                            <label>${lbl('البريد الإلكتروني', 'E-mail address')}</label>
                            <div class="field-value">${data.email || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">-</div>
                        <div class="field-content">
                            <label>${lbl('رقم الهاتف', 'Telephone number')}</label>
                            <div class="field-value">${data.phone || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">19</div>
                        <div class="field-content">
                            <label>${lbl('المهنة الحالية', 'Current occupation')}</label>
                            <div class="field-value">${data.occupation || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">20</div>
                        <div class="field-content">
                            <label>${lbl('جهة العمل', "Employer and employer's address")}</label>
                            <div class="field-value">${data.employer || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">21</div>
                        <div class="field-content">
                            <label>${lbl('الوجهة الرئيسية', 'Main destination')}</label>
                            <div class="field-value">${data.mainDestination || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">22</div>
                        <div class="field-content">
                            <label>${lbl('نوع التأشيرة', 'Type of visa')}</label>
                            <div class="field-value">${data.visaType || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">23</div>
                        <div class="field-content">
                            <label>${lbl('عدد مرات الدخول', 'Number of entries requested')}</label>
                            <div class="field-value">${data.entriesCount || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">24</div>
                        <div class="field-content">
                            <label>${lbl('مدة الإقامة (أيام)', 'Duration of intended stay')}</label>
                            <div class="field-value">${data.stayDays || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">28</div>
                        <div class="field-content">
                            <label>${lbl('تاريخ الوصول المتوقع', 'Intended date of arrival')}</label>
                            <div class="field-value">${data.arrivalDate || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">29</div>
                        <div class="field-content">
                            <label>${lbl('تاريخ المغادرة المتوقع', 'Intended date of departure')}</label>
                            <div class="field-value">${data.departureDate || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">26</div>
                    <div class="field-content">
                        <label>${lbl('هل تم أخذ بصمات الأصابع سابقاً؟', 'Fingerprints collected previously?')}</label>
                        <div class="checkbox-group">
                            <span class="checkbox-item ${data.fingerprints === 'نعم' || data.fingerprints === 'Yes' ? 'checked' : ''}">${lbl('نعم', 'Yes')}</span>
                            <span class="checkbox-item ${data.fingerprints === 'لا' || data.fingerprints === 'No' ? 'checked' : ''}">${lbl('لا', 'No')}</span>
                            <span class="field-inline">${lbl('تاريخ:', 'Date:')} ${data.fingerprintsDate || '_____'}</span>
                        </div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">31</div>
                    <div class="field-content">
                        <label>${lbl('اسم المدعو / الفندق', 'Name of inviting person / hotel')}</label>
                        <div class="field-value">${data.invitingPerson || ''}</div>
                    </div>
                </div>
                <div class="field-row">
                    <div class="field-num">32</div>
                    <div class="field-content">
                        <label>${lbl('اسم الشركة المدعوة', 'Name and address of inviting company')}</label>
                        <div class="field-value">${data.companyName || ''}</div>
                    </div>
                </div>
                <div class="field-row two-cols">
                    <div class="field-half">
                        <div class="field-num">33</div>
                        <div class="field-content">
                            <label>${lbl('تُمول التكاليف بواسطة', 'Cost of travelling and living covered by')}</label>
                            <div class="field-value">${data.costsCoveredBy || ''}</div>
                        </div>
                    </div>
                    <div class="field-half">
                        <div class="field-num">34</div>
                        <div class="field-content">
                            <label>${lbl('وسائل الدعم', 'Means of support')}</label>
                            <div class="field-value">${data.meansOfSupport || ''}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-footer-official">
                <div class="signature-line">
                    <label>${lbl('تاريخ ومكان التقديم', 'Date and place')}</label>
                    <div class="line"></div>
                </div>
                <div class="signature-line">
                    <label>${lbl('التوقيع', 'Signature')}</label>
                    <div class="line"></div>
                </div>
            </div>

            <div class="form-watermark">
                Al EmlaQ Files - ${new Date().toLocaleDateString()}
            </div>
        </div>
    `;
}

// ===== طباعة الملف =====
function printFile() {
    const container = document.getElementById('filePreview');
    if (container.querySelector('.review-placeholder')) {
        showToast(translations[currentLang]['review_placeholder'], 'error');
        return;
    }
    generatePrintableForm();
    window.print();
}

// ===== تحميل PDF =====
function downloadPDF() {
    const container = document.getElementById('filePreview');
    if (container.querySelector('.review-placeholder')) {
        showToast(translations[currentLang]['review_placeholder'], 'error');
        return;
    }

    const element = document.getElementById('filePreview');
    const opt = {
        margin: 10,
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

    const fields = [
        'countrySelect', 'visaType', 'stayDays', 'surname', 'firstname', 'birthDate',
        'birthPlace', 'birthCountry', 'nationality', 'sex', 'civilStatus', 'nationalId',
        'otherNationalities', 'passportType', 'passportNumber', 'passportIssueDate',
        'passportExpiry', 'passportIssuedBy', 'homeAddress', 'email', 'phone',
        'occupation', 'employer', 'employerAddress', 'employerPhone',
        'mainDestination', 'firstEntry', 'entriesCount', 'purposeDetail',
        'arrivalDate', 'departureDate', 'fingerprints', 'fingerprintsDate',
        'invitingPerson', 'invitingPhone', 'invitingEmail', 'invitingAddress',
        'companyName', 'companyPhone', 'contactPerson', 'costsCoveredBy', 'meansOfSupport',
        'euFamilySurname', 'euFamilyFirstname', 'euFamilyDob', 'euFamilyNationality',
        'euFamilyDocument', 'euFamilyRelation'
    ];

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'SELECT') {
                el.selectedIndex = 0;
            } else {
                el.value = '';
            }
            el.classList.remove('is-invalid');
            el.style.borderColor = '';
            el.style.boxShadow = '';
        }
    });

    document.getElementById('stayDays').value = '7';
    document.getElementById('nationality').value = 'مصري';
    document.getElementById('passportIssuedBy').value = 'مصر';

    document.querySelectorAll('input[type="file"]').forEach(input => {
        input.value = '';
        const nameDisplay = document.getElementById(input.id + 'Name');
        if (nameDisplay) nameDisplay.textContent = '';
        const uploadArea = input.closest('.upload-area');
        if (uploadArea) {
            uploadArea.classList.remove('has-file');
            uploadArea.style.borderColor = '';
            uploadArea.style.background = '';
        }
    });

    uploadedFiles = {};
    fileNames = {};
    isHotelConfirmed = false;
    skippedServices = false;

    const btn = document.querySelector('.btn-confirm-hotel');
    if (btn) {
        btn.classList.remove('confirmed');
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang]['confirm_hotel']}`;
    }

    document.getElementById('countryFlagDisplay').textContent = '🌍';
    document.getElementById('countryNameDisplay').textContent = translations[currentLang]['select_country'];
    document.getElementById('countryRequirements').innerHTML = `<p class="text-muted">${translations[currentLang]['select_country_hint']}</p>`;

    document.getElementById('filePreview').innerHTML = `
        <div class="review-placeholder">
            <i class="fas fa-file-alt"></i>
            <p>${translations[currentLang]['review_placeholder']}</p>
        </div>
    `;

    const printable = document.getElementById('printableForm');
    if (printable) printable.innerHTML = '';

    goToStep(1);
}

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    goToStep(1);
    console.log('✦ Al EmlaQ Files ✦');
    console.log('تم تحميل الموقع بنجاح');
});
