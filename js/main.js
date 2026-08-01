// ===== إضافة علامة النجمة للحقول الإلزامية =====
function markRequiredFields() {
    const requiredFieldIds = [
        'countrySelect', 'surname', 'firstname', 'birthDate', 
        'nationality', 'passportNumber', 'passportExpiry', 
        'email', 'phone', 'mainDestination', 'firstEntry', 
        'arrivalDate', 'departureDate'
    ];
    
    requiredFieldIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const label = el.closest('.form-group')?.querySelector('label');
            if (label && !label.querySelector('.required-star')) {
                const star = document.createElement('span');
                star.className = 'required-star';
                star.textContent = ' *';
                star.style.color = '#dc3545';
                label.appendChild(star);
            }
        }
    });
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود الموجود ...
    markRequiredFields();
});
