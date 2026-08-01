// ============================================
// ملف الترجمة - Al EmlaQ Files
// دعم اللغة العربية والإنجليزية
// ============================================

const translations = {
    ar: {
        // شريط التنقل
        'nav_home': 'الرئيسية',
        'nav_step1': 'الخطوة 1',
        'nav_step2': 'الخطوة 2',
        'nav_step3': 'الخطوة 3',
        'nav_step4': 'الخطوة 4',

        // مؤشر التقدم
        'step1_label': 'البيانات',
        'step2_label': 'المستندات',
        'step3_label': 'الخدمات',
        'step4_label': 'المراجعة',

        // الخطوة 1
        'step1_title': 'البيانات الشخصية و جواز السفر',
        'step1_subtitle': 'أدخل بياناتك الشخصية كما في جواز السفر',
        'country_label': 'الدولة المطلوبة *',
        'select_country': '-- اختر الدولة --',
        'select_country_hint': 'اختر دولة لعرض المتطلبات',
        'visa_type_label': 'نوع التأشيرة',
        'visa_tourism': 'سياحة',
        'visa_business': 'عمل',
        'visa_study': 'دراسة',
        'visa_family': 'زيارة عائلية',
        'visa_official': 'زيارة رسمية',
        'visa_medical': 'أسباب طبية',
        'visa_transit': 'عبور مطار',
        'stay_days_label': 'مدة الإقامة (أيام)',

        // البيانات الشخصية
        'personal_data': 'البيانات الشخصية',
        'surname_label': 'اللقب (كما في جواز السفر) *',
        'firstname_label': 'الاسم الأول (كما في جواز السفر) *',
        'birth_date_label': 'تاريخ الميلاد (يوم-شهر-سنة) *',
        'birth_place_label': 'مكان الميلاد',
        'birth_country_label': 'بلد الميلاد',
        'nationality_label': 'الجنسية الحالية *',
        'sex_label': 'الجنس',
        'male': 'ذكر',
        'female': 'أنثى',
        'other': 'أخرى',
        'civil_status_label': 'الحالة الاجتماعية',
        'single': 'أعزب',
        'married': 'متزوج',
        'registered_partnership': 'شراكة مسجلة',
        'separated': 'منفصل',
        'divorced': 'مطلق',
        'widow': 'أرمل',
        'national_id_label': 'الرقم القومي (إن وجد)',
        'other_nationalities_label': 'جنسيات أخرى',

        // بيانات جواز السفر
        'passport_data': 'بيانات جواز السفر',
        'passport_type_label': 'نوع وثيقة السفر',
        'ordinary_passport': 'جواز سفر عادي',
        'diplomatic_passport': 'جواز سفر دبلوماسي',
        'service_passport': 'جواز سفر خدمة',
        'official_passport': 'جواز سفر رسمي',
        'special_passport': 'جواز سفر خاص',
        'passport_number_label': 'رقم وثيقة السفر *',
        'passport_issue_date_label': 'تاريخ الإصدار',
        'passport_expiry_label': 'تاريخ الانتهاء *',
        'passport_issued_by_label': 'جهة الإصدار (البلد)',

        // بيانات الاتصال
        'contact_data': 'بيانات الاتصال',
        'home_address_label': 'عنوان السكن',
        'email_label': 'البريد الإلكتروني *',
        'phone_label': 'رقم الهاتف *',

        // بيانات العمل
        'work_data': 'بيانات العمل / الدراسة',
        'occupation_label': 'المهنة الحالية',
        'employer_label': 'جهة العمل / الدراسة',
        'employer_address_label': 'عنوان جهة العمل / الدراسة',
        'employer_phone_label': 'هاتف جهة العمل',

        // الخطوة 2
        'step2_title': 'تفاصيل الرحلة والمستندات',
        'step2_subtitle': 'أدخل تفاصيل الرحلة وقم برفع المستندات المطلوبة',
        'trip_details': 'تفاصيل الرحلة',
        'main_destination_label': 'الوجهة الرئيسية *',
        'first_entry_label': 'دولة أول دخول *',
        'entries_count_label': 'عدد مرات الدخول المطلوبة',
        'single_entry': 'دخول مرة واحدة',
        'two_entries': 'دخول مرتين',
        'multiple_entries': 'دخول متعدد',
        'purpose_detail_label': 'معلومات إضافية عن الغرض',
        'arrival_date_label': 'تاريخ الوصول المتوقع *',
        'departure_date_label': 'تاريخ المغادرة المتوقع *',
        'fingerprints_label': 'هل تم أخذ بصمات الأصابع سابقاً لطلب شنغن؟',
        'yes': 'نعم',
        'no': 'لا',
        'fingerprints_date_label': 'تاريخ أخذ البصمات (إن وجد)',

        // الإقامة
        'accommodation_data': 'بيانات الإقامة / المدعو',
        'inviting_person_label': 'اسم المدعو / الفندق في دولة الوجهة',
        'inviting_phone_label': 'هاتف المدعو / الفندق',
        'inviting_email_label': 'بريد المدعو / الفندق',
        'inviting_address_label': 'عنوان المدعو / الفندق',

        // الشركة
        'company_data': 'بيانات الشركة / المنظمة المدعوة',
        'company_name_label': 'اسم وعنوان الشركة / المنظمة',
        'company_phone_label': 'هاتف الشركة',
        'contact_person_label': 'مسؤول الاتصال (الاسم والعنوان والهاتف والبريد)',

        // التكاليف
        'costs_data': 'تكاليف السفر والمعيشة',
        'costs_covered_by_label': 'تُمول التكاليف بواسطة',
        'by_applicant': 'مقدم الطلب',
        'by_sponsor': 'ضامن / مضيف',
        'by_company': 'شركة / منظمة',
        'by_other': 'أخرى',
        'means_of_support_label': 'وسائل الدعم',

        // فرد العائلة
        'eu_family_data': 'بيانات فرد العائلة من الاتحاد الأوروبي (إن وجد)',
        'eu_family_surname_label': 'اللقب',
        'eu_family_firstname_label': 'الاسم الأول',
        'eu_family_dob_label': 'تاريخ الميلاد',
        'eu_family_nationality_label': 'الجنسية',
        'eu_family_document_label': 'رقم جواز السفر أو بطاقة الهوية',
        'eu_family_relation_label': 'صلة القرابة',

        // حجز الفندق
        'hotel_booking_title': '🏨 حجز الفندق',
        'confirm_hotel': 'تم حجز الفندق',
        'documents_title': '📎 رفع المستندات',
        'passport_label': 'صورة جواز السفر *',
        'insurance_label': 'التأمين الطبي *',
        'work_label': 'إثبات العمل / السجل التجاري',
        'bank_label': 'كشف الحساب البنكي',
        'photo_label': 'الصورة الشخصية',
        'hotel_file_label': 'حجز الفندق (PDF) *',
        'upload_hint': 'اضغط للرفع',
        'hotel_confirmed': '✅ تم تأكيد حجز الفندق',
        'hotel_not_confirmed': '⚠️ الرجاء تأكيد حجز الفندق',

        // الخطوة 3
        'step3_title': 'خدمات السفر',
        'step3_subtitle': 'اختر الخدمات التي تحتاجها لرحلتك',
        'flight_booking': 'حجز الطيران',
        'flight_desc': 'أفضل عروض الطيران',
        'insurance_booking': 'التأمين الطبي',
        'insurance_desc': 'تغطية 30,000 يورو',
        'car_rental': 'تأجير سيارات',
        'car_desc': 'سيارات بأسعار مميزة',
        'skip_services': 'تخطي الخدمات',
        'skip_desc': 'متابعة بدون خدمات',

        // الخطوة 4
        'step4_title': 'مراجعة الملف النهائي',
        'step4_subtitle': 'تأكد من صحة جميع البيانات قبل الطباعة',
        'review_placeholder': 'الملف جاهز للعرض بعد إكمال جميع الخطوات',
        'print_file': 'طباعة الملف',
        'download_pdf': 'تحميل PDF',
        'new_file': 'ملف جديد',

        // أزرار
        'next_step': 'التالي',
        'back_step': 'السابق',

        // التذييل
        'footer_text': 'أداة مساعدة لتحضير ملفات تأشيرة شنغن - ليست بديلاً عن التقديم الرسمي',

        // رسائل
        'select_country_first': 'الرجاء اختيار الدولة أولاً',
        'confirm_all_documents': 'الرجاء رفع جميع المستندات وتأكيد حجز الفندق',
        'file_ready': 'الملف جاهز!',
        'reset_confirm': 'هل أنت متأكد من رغبتك في بدء ملف جديد؟ سيتم مسح جميع البيانات.',
        'fill_required_fields': 'الرجاء ملء جميع الحقول الإلزامية المعلمة بـ (*)'
    },

    en: {
        // Navigation
        'nav_home': 'Home',
        'nav_step1': 'Step 1',
        'nav_step2': 'Step 2',
        'nav_step3': 'Step 3',
        'nav_step4': 'Step 4',

        // Progress
        'step1_label': 'Data',
        'step2_label': 'Documents',
        'step3_label': 'Services',
        'step4_label': 'Review',

        // Step 1
        'step1_title': 'Personal Data & Passport',
        'step1_subtitle': 'Enter your personal data as in your passport',
        'country_label': 'Required Country *',
        'select_country': '-- Select Country --',
        'select_country_hint': 'Select a country to view requirements',
        'visa_type_label': 'Visa Type',
        'visa_tourism': 'Tourism',
        'visa_business': 'Business',
        'visa_study': 'Study',
        'visa_family': 'Family Visit',
        'visa_official': 'Official Visit',
        'visa_medical': 'Medical Reasons',
        'visa_transit': 'Airport Transit',
        'stay_days_label': 'Stay Duration (Days)',

        // Personal Data
        'personal_data': 'Personal Data',
        'surname_label': 'Surname (as in passport) *',
        'firstname_label': 'First Name(s) (as in passport) *',
        'birth_date_label': 'Date of Birth (day-month-year) *',
        'birth_place_label': 'Place of Birth',
        'birth_country_label': 'Country of Birth',
        'nationality_label': 'Current Nationality *',
        'sex_label': 'Sex',
        'male': 'Male',
        'female': 'Female',
        'other': 'Other',
        'civil_status_label': 'Civil Status',
        'single': 'Single',
        'married': 'Married',
        'registered_partnership': 'Registered Partnership',
        'separated': 'Separated',
        'divorced': 'Divorced',
        'widow': 'Widow(er)',
        'national_id_label': 'National Identity Number',
        'other_nationalities_label': 'Other Nationalities',

        // Passport Data
        'passport_data': 'Passport Data',
        'passport_type_label': 'Type of Travel Document',
        'ordinary_passport': 'Ordinary Passport',
        'diplomatic_passport': 'Diplomatic Passport',
        'service_passport': 'Service Passport',
        'official_passport': 'Official Passport',
        'special_passport': 'Special Passport',
        'passport_number_label': 'Number of Travel Document *',
        'passport_issue_date_label': 'Date of Issue',
        'passport_expiry_label': 'Valid Until *',
        'passport_issued_by_label': 'Issued by (Country)',

        // Contact Data
        'contact_data': 'Contact Information',
        'home_address_label': 'Home Address',
        'email_label': 'Email Address *',
        'phone_label': 'Telephone Number *',

        // Work Data
        'work_data': 'Work / Study Information',
        'occupation_label': 'Current Occupation',
        'employer_label': 'Employer / Educational Establishment',
        'employer_address_label': 'Employer Address',
        'employer_phone_label': 'Employer Telephone',

        // Step 2
        'step2_title': 'Trip Details & Documents',
        'step2_subtitle': 'Enter trip details and upload required documents',
        'trip_details': 'Trip Details',
        'main_destination_label': 'Member State of Main Destination *',
        'first_entry_label': 'Member State of First Entry *',
        'entries_count_label': 'Number of Entries Requested',
        'single_entry': 'Single Entry',
        'two_entries': 'Two Entries',
        'multiple_entries': 'Multiple Entries',
        'purpose_detail_label': 'Additional Information on Purpose',
        'arrival_date_label': 'Intended Date of Arrival *',
        'departure_date_label': 'Intended Date of Departure *',
        'fingerprints_label': 'Fingerprints collected previously for Schengen visa?',
        'yes': 'Yes',
        'no': 'No',
        'fingerprints_date_label': 'Date, if known',

        // Accommodation
        'accommodation_data': 'Accommodation / Inviting Person',
        'inviting_person_label': 'Name of Inviting Person / Hotel',
        'inviting_phone_label': 'Telephone No.',
        'inviting_email_label': 'Email Address',
        'inviting_address_label': 'Address',

        // Company
        'company_data': 'Inviting Company / Organisation',
        'company_name_label': 'Name and Address',
        'company_phone_label': 'Telephone No.',
        'contact_person_label': 'Contact Person Details',

        // Costs
        'costs_data': 'Cost of Travelling and Living',
        'costs_covered_by_label': 'Covered by',
        'by_applicant': 'Applicant',
        'by_sponsor': 'Sponsor / Host',
        'by_company': 'Company / Organisation',
        'by_other': 'Other',
        'means_of_support_label': 'Means of Support',

        // EU Family
        'eu_family_data': 'EU/EEA/CH Family Member (if applicable)',
        'eu_family_surname_label': 'Surname',
        'eu_family_firstname_label': 'First Name(s)',
        'eu_family_dob_label': 'Date of Birth',
        'eu_family_nationality_label': 'Nationality',
        'eu_family_document_label': 'Travel Document or ID Card No.',
        'eu_family_relation_label': 'Family Relationship',

        // Hotel & Documents
        'hotel_booking_title': '🏨 Hotel Booking',
        'confirm_hotel': 'Hotel Booked',
        'documents_title': '📎 Upload Documents',
        'passport_label': 'Passport Copy *',
        'insurance_label': 'Medical Insurance *',
        'work_label': 'Employment Proof / Commercial Register',
        'bank_label': 'Bank Statement',
        'photo_label': 'Passport Photo',
        'hotel_file_label': 'Hotel Booking (PDF) *',
        'upload_hint': 'Click to upload',
        'hotel_confirmed': '✅ Hotel booking confirmed',
        'hotel_not_confirmed': '⚠️ Please confirm hotel booking',

        // Step 3
        'step3_title': 'Travel Services',
        'step3_subtitle': 'Choose the services you need for your trip',
        'flight_booking': 'Flight Booking',
        'flight_desc': 'Best flight deals',
        'insurance_booking': 'Medical Insurance',
        'insurance_desc': 'Coverage 30,000 EUR',
        'car_rental': 'Car Rental',
        'car_desc': 'Cars at great prices',
        'skip_services': 'Skip Services',
        'skip_desc': 'Continue without services',

        // Step 4
        'step4_title': 'Final File Review',
        'step4_subtitle': 'Verify all data is correct before printing',
        'review_placeholder': 'File ready to view after completing all steps',
        'print_file': 'Print File',
        'download_pdf': 'Download PDF',
        'new_file': 'New File',

        // Buttons
        'next_step': 'Next',
        'back_step': 'Back',

        // Footer
        'footer_text': 'Schengen visa file preparation assistant - Not a substitute for official submission',

        // Messages
        'select_country_first': 'Please select a country first',
        'confirm_all_documents': 'Please upload all documents and confirm hotel booking',
        'file_ready': 'File ready!',
        'reset_confirm': 'Are you sure you want to start a new file? All data will be cleared.',
        'fill_required_fields': 'Please fill all required fields marked with (*)'
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
        const firstOption = countrySelect.querySelector('option[value=""]');
        if (firstOption) {
            firstOption.textContent = translations[currentLang]['select_country'];
        }
    }

    localStorage.setItem('al-emlaq-lang', currentLang);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('al-emlaq-lang');
    if (savedLang && savedLang !== 'ar') {
        currentLang = savedLang;
        toggleLanguage();
    }
});
