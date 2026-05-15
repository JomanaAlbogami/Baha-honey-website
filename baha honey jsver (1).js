// دالة الترحيب حسب الوقت
function welcomeByUserTime() {
    const hour = new Date().getHours();
    let message = "";

    if (hour >= 5 && hour < 12) {
        message = "صباح الخير! ☀️ ابدأ يومك بملعقة من عسل الباحة لنشاط يدوم.";
    } else if (hour >= 12 && hour < 18) {
        message = "مساء الخير! ✨ عسل الباحة يضيف طعماً رائعاً لقهوتك المسائية.";
    } else {
        message = "أهلاً بك في المساء! 🌙 عسل الباحة قبل النوم خيار صحي ومثالي.";
    }
    
    alert(message); // تظهر كرسالة منبثقة
}

// دالة إظهار اسم المصممة
function showDesigner() {
    alert("هذا الموقع تم تصميمه بكل حب بواسطة: [تولان , جمانة , دانة , رزان , لمار , ليان ] 👩‍💻");
}

// دالة طلب العسل (Confirm)
function orderNow() {
  var result = confirm("هل تريد طلب عسل الباحة الطبيعي؟");
  if (result) {
    alert("✅ شكراً! سيتم التواصل معك قريباً.");
  } else {
    alert("يسعدنا خدمتك في أي وقت 😊");
  }
}

// دالة إرسال الواتساب (التصحيح النهائي)
function sendMessage() {
    var name = document.getElementById('cName').value.trim();
    var phone = document.getElementById('cPhone').value.trim();
    var msg = document.getElementById('cMsg').value.trim();

    if (!name || !phone) {
        alert('يرجى ملء الاسم ورقم الجوال');
        return;
    }

    var text = 'السلام عليكم\nأنا ' + name + '\nالجوال: ' + phone + (msg ? '\n' + msg : '');
    window.open('https://wa.me/9665XXXXXXXX?text=' + encodeURIComponent(text), '_blank');
}

// تشغيل الوظائف عند تحميل الصفحة "بدون تعارض"
window.addEventListener('load', function() {
    // 1. تشغيل رسالة الوقت فوراً
    welcomeByUserTime();
    
    // 2. تشغيل أنميشن التنبيه (إذا كنتِ أضفتِ الـ HTML الخاص به)
    const alertBox = document.getElementById('customAlert');
    if (alertBox) {
        setTimeout(() => {
            alertBox.classList.add('show');
            setTimeout(() => { alertBox.classList.remove('show'); }, 4000);
        }, 1000);
    }
});
