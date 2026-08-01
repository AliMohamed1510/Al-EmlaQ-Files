import fitz  # PyMuPDF
import json
import sys
from pathlib import Path

# ============================================
# Al EmlaQ Files - PDF Stamper
# يدمج البيانات في نموذج السفارة الأصلي
# ============================================

# إحداثيات الحقول لكل دولة (A4 - النقطة الأصلية أعلى يسار)
COORDS = {
    "italy": {
        "surname": (120, 150),
        "firstname": (120, 180),
        "birthDate": (120, 210),
        "birthPlace": (300, 210),
        "nationality": (120, 240),
        "passportNumber": (120, 330),
        "passportIssueDate": (250, 330),
        "passportExpiry": (380, 330),
        "passportIssuedBy": (120, 360),
        "homeAddress": (120, 420),
        "email": (120, 450),
        "phone": (350, 450),
        "occupation": (120, 480),
        "employer": (300, 480),
        "mainDestination": (120, 540),
        "firstEntry": (350, 540),
        "arrivalDate": (120, 570),
        "departureDate": (350, 570),
        "invitingPerson": (120, 630),
        "companyName": (120, 660),
    },
    # نضيف باقي الدول بنفس الطريقة...
}

def fill_schengen_form(template_path: str, data: dict, output_path: str, country: str = "italy"):
    """
    تدمج البيانات في ملف PDF السفارة الأصلي
    """
    doc = fitz.open(template_path)
    page = doc[0]
    
    coords = COORDS.get(country, COORDS["italy"])
    
    for field, value in data.items():
        if field in coords and value:
            x, y = coords[field]
            # نضيف النص فوق النموذج
            page.insert_text(
                (x, y),
                str(value),
                fontsize=10,
                color=(0, 0, 0),  # أسود
                fontname="helv"
            )
    
    doc.save(output_path)
    print(f"✅ تم الحفظ: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("الاستخدام: python stamper.py <template.pdf> <data.json> <output.pdf> [country]")
        sys.exit(1)
    
    template = sys.argv[1]
    data_file = sys.argv[2]
    output = sys.argv[3]
    country = sys.argv[4] if len(sys.argv) > 4 else "italy"
    
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    fill_schengen_form(template, data, output, country)
