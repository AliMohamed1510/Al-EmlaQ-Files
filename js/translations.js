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
        'step1_title': 'اختر وجهتك',
        'step1_subtitle': 'حدد الدولة التي تنوي السفر إليها',
        'country_label': 'الدولة المطلوبة',
        'select_country': '-- اختر الدولة --',
        'select_country_hint': 'اختر دولة لعرض المتطلبات',
        'visa_type_label': 'نوع التأشيرة',
        'visa_tourism': 'سياحة',
        'visa_business': 'عمل',
        'visa_study': 'دراسة',
        'visa_family': 'زيارة عائلية',
        'stay_days_label': 'مدة الإقامة (أيام)',
        
        // الخطوة 2
        'step2_title': 'حجز الفندق والمستندات',
        'step2_subtitle': 'قم بحجز فندقك ورفع المستندات المطلوبة',
        'hotel_booking_title': '🏨 حجز الفندق',
        'confirm_hotel': 'تم حجز الفندق',
        'documents_title': '📎 رفع المستندات',
        'passport_label': 'صورة جواز السفر',
        'insurance_label': 'التأمين الطبي',
        'work_label': 'إثبات العمل / السجل التجاري',
        'bank_label': 'كشف الحساب البنكي',
        'photo_label': 'الصورة الشخصية',
        'hotel_file_label': 'حجز الفندق (PDF)',
        'upload_hint': 'اضغط للرفع',
        'hotel_confirmed': '✅ تم تأكيد حجز الفندق',
        'hotel_not_confirmed': '⚠️ الرجاء تأكيد حجز الفندق',
        'flight_ticket_title': '✈️ حجز تذكرة الطيران (وهمية للتأشيرة)',
        'flight_ticket_desc': 'احصل على تذكرة طيران وهمية مجانية بصيغة PDF تحتوي على رقم حجز (PNR) وQR Code — مقبولة في 195+ دولة وسفارة.',
        'go_myjet24': 'MyJet24 — تذكرة مجانية',
        'epti_title': '🛠️ التأمين الطبي — المجمعة المصرية',
        'epti_desc': 'موقع رسمي مصري لإصدار وثيقة تأمين السفر للخارج. مطلوبة للتأشيرة ويمكن طباعتها فوراً بعد الدفع.',
        'go_epti': 'EPTI — وثيقة التأمين',
        
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
        'reset_confirm': 'هل أنت متأكد من رغبتك في بدء ملف جديد؟ سيتم مسح جميع البيانات.'
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
        'step1_title': 'Choose Your Destination',
        'step1_subtitle': 'Select the country you plan to travel to',
        'country_label': 'Required Country',
        'select_country': '-- Select Country --',
        'select_country_hint': 'Select a country to view requirements',
        'visa_type_label': 'Visa Type',
        'visa_tourism': 'Tourism',
        'visa_business': 'Business',
        'visa_study': 'Study',
        'visa_family': 'Family Visit',
        'stay_days_label': 'Stay Duration (Days)',
        
        // Step 2
        'step2_title': 'Hotel Booking & Documents',
        'step2_subtitle': 'Book your hotel and upload required documents',
        'hotel_booking_title': '🏨 Hotel Booking',
        'confirm_hotel': 'Hotel Booked',
        'documents_title': '📎 Upload Documents',
        'passport_label': 'Passport Copy',
        'insurance_label': 'Medical Insurance',
        'work_label': 'Employment Proof / Commercial Register',
        'bank_label': 'Bank Statement',
        'photo_label': 'Passport Photo',
        'hotel_file_label': 'Hotel Booking (PDF)',
        'upload_hint': 'Click to upload',
        'hotel_confirmed': '✅ Hotel booking confirmed',
        'hotel_not_confirmed': '⚠️ Please confirm hotel booking',
        'flight_ticket_title': '✈️ Flight Ticket (Dummy for Visa)',
        'flight_ticket_desc': 'Get a free dummy flight ticket PDF with booking reference (PNR) & QR Code — accepted in 195+ countries & embassies.',
        'go_myjet24': 'MyJet24 — Free Ticket',
        'epti_title': '🛠️ Travel Insurance — EPTI Egypt',
        'epti_desc': 'Official Egyptian website for issuing outbound travel insurance policies. Required for visa applications and can be printed immediately after payment.',
        'go_epti': 'EPTI — Insurance Policy',
        
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
        'reset_confirm': 'Are you sure you want to start a new file? All data will be cleared.'
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث النصوص
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث زر اللغة
    const langLabel = document.getElementById('langLabel');
    langLabel.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    
    // تحديث placeholder في select
    const countrySelect = document.getElementById('countrySelect');
    const firstOption = countrySelect.querySelector('option[value=""]');
    if (firstOption) {
        firstOption.textContent = translations[currentLang]['select_country'];
    }
    
    // حفظ اللغة في localStorage
    localStorage.setItem('al-emlaq-lang', currentLang);
}

// تحميل اللغة المحفوظة
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('al-emlaq-lang');
    if (savedLang && savedLang !== 'ar') {
        currentLang = savedLang;
        toggleLanguage();
    }
});
