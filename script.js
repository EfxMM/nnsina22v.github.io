// Quiz questions and answers
const questions = [
    {
        id: 1,
        question: "Klavyeniz takılı değilse yada çalışmıyor ise ekranda görülecek yazılı hata mesajı aşağıdakilerden hangisidir?",
        correctAnswer: "Keyboard Error Or No Keyboard Present"
    },
    {
        id: 2,
        question: "BIOS menüsüne giriş için aşağıdaki tuşlardan hangisi kullanılır?",
        correctAnswer: "DEL"
    },
    {
        id: 3,
        question: "Bilgisayarınızın sabit diski bozuk veya ayarları hatalı ise ekranda görülecek yazılı hata mesajı aşağıdakilerden hangisidir?",
        correctAnswer: "Hard Disk(s) Fail"
    },
    {
        id: 4,
        question: "İşletim sistemi genellikle hangi disk bölümüne kurulur?",
        correctAnswer: "C:"
    },
    {
        id: 5,
        question: "Diskte yer açarak bilgisayarın daha hızlı çalışmasını sağlamak ve sabit diskteki gereksiz dosyaları azaltmak için aşağıdakilerden hangisi kullanılır?",
        correctAnswer: "Disk Temizleme"
    },
    {
        id: 6,
        question: "Sürücüleri elle yüklemek için Denetim Masası'ndan hangi seçenek kullanılır?",
        correctAnswer: "Donanım Ekle"
    },
    {
        id: 7,
        question: "Bir bilgisayarın bütün ayarları ve dokümanları ile birlikte alınmış yedeği aşağıdakilerden hangisidir?",
        correctAnswer: "Sistem İmajı"
    },
    {
        id: 8,
        question: "Bütün programların, üzerinde çalıştığı bellek hangisidir?",
        correctAnswer: "RAM"
    },
    {
        id: 9,
        question: "Bilgisayarın birbirlerine veya ağa bağlanmasını sağlayan kart hangisidir?",
        correctAnswer: "Ethernet kartı"
    },
    {
        id: 10,
        question: "CTRL+Z tuşunun görevi nedir?",
        correctAnswer: "Geri Al"
    },
    {
        id: 11,
        question: "Hangi sayı sistemi 0-7 arası rakamları kapsar?",
        correctAnswer: "Sekizlik"
    },
    {
        id: 12,
        question: "2 tane veri tipi yazınız.",
        correctAnswer: "int, char, string, double, float"
    },
    {
        id: 13,
        question: "a değişkenine ait kullanımlardan hangisi ile önce arttırma işlemi yapılıp daha sonra atama işlemi yapılır?",
        correctAnswer: "++a"
    },
    {
        id: 14,
        question: "Döngü deyimlerinden birini yazınız.",
        correctAnswer: "For"
    },
    {
        id: 15,
        question: "Program içerisinde farklı değerler alabilen ifadelere ne ad verilir?",
        correctAnswer: "Değişken"
    },
    {
        id: 16,
        question: "C# console komutlarındandan hangisi program çıktısını ekranda tutmak için kullanılır?",
        correctAnswer: "Console.ReadKey()"
    },
    {
        id: 17,
        question: "Karşılaştırma operatörlerini yazınız.",
        correctAnswer: "!= == < > => <="
    },
    {
        id: 18,
        question: "Mantıksal operatörleri yazınız.",
        correctAnswer: "and or not && || !"
    },
    {
        id: 19,
        question: "Üzerine buton, metin kutusu vb. nesneler yerleştirilen arabirime ne ad verilir?",
        correctAnswer: "Form"
    },
    {
        id: 20,
        question: "x.ToString() ifadesi ne işe yarar?",
        correctAnswer: "x değişkeninin veri türünü string veri türüne çevirir."
    },
    {
        id: 21,
        question: "Bir kod satırının başına eklendiğinde kod satırını yorum satırına dönüştüren operatörü yazınız.",
        correctAnswer: "//"
    },
    {
        id: 22,
        question: "Ekrana mesaj olarak yazdırılmak istenen metinsel ifadeler hangi simgeler arasında yazılmalıdır?",
        correctAnswer: "\" \""
    },
    {
        id: 23,
        question: "Üzerinde, form tasarımında kullanılabilecek nesneleri bulunduran panel hangisidir?",
        correctAnswer: "ToolBox"
    },
    {
        id: 24,
        question: "Form tasarımında kullanılan nesnelere ait özelliklerin değiştirildiği panel aşağıdakilerden hangisidir?",
        correctAnswer: "Properties"
    },
    {
        id: 25,
        question: "Tablo1'de bulunan tüm kayıtları silen komutu yazınız.",
        correctAnswer: "Delete * from Tablo1"
    },
    {
        id: 26,
        question: "Sorgu kullanarak tablo oluşturmak için kullanılan SQL deyimi aşağıdakilerden hangisidir?",
        correctAnswer: "CREATE TABLE"
    },
    {
        id: 27,
        question: "Sunucu üzerindeki en yüksek seviyedeki yetki hangisidir?",
        correctAnswer: "Sysadmin"
    },
    {
        id: 28,
        question: "Visual C# programında birden çok seçenekten sadece bir tanesini seçmemizi sağlayan nesne hangisidir?",
        correctAnswer: "Radiobutton"
    },
    {
        id: 29,
        question: "Visual C# programında ekrana mesaj yazdıran komut hangisidir?",
        correctAnswer: "Messagebox"
    },
    {
        id: 30,
        question: "Textbox nesnesinin belli sayıda karakter almasını sağlayan özellik hangisidir?",
        correctAnswer: "MaxLenght"
    },
    {
        id: 31,
        question: "Harici CSS dosyası kullanımında dosya yolu hangi etiket bölümünde belirtilir?",
        correctAnswer: "<head>…..</head>"
    },
    {
        id: 32,
        question: "Anakart üzerinde Onboard(Tümleşik) olarak takılabilecek donanım birimlerini yazınız.",
        correctAnswer: "Ekran Kartı, Ethernet Kartı, Ses Kartı"
    },
    {
        id: 33,
        question: "Visual C# programında ekrandan metinsel bilgi girişini sağlayan nesne hangisidir?",
        correctAnswer: "Textbox"
    },
    {
        id: 34,
        question: "CSS kullanımında menü elemanları üzerine gelindiğinde özellik değişimini hangisi sağlar?",
        correctAnswer: "a:hover"
    },
    {
        id: 35,
        question: "ASP.NET web form dosyalarının uzantısı nedir?",
        correctAnswer: "aspx"
    },
    {
        id: 36,
        question: "Web sayfalarımıza resim eklemek için hangi etiket yazılır?",
        correctAnswer: "<imgsrc= >"
    },
    {
        id: 37,
        question: "Stil sayfalarının dosya uzantısı aşağıdakilerden hangisidir?",
        correctAnswer: ".css"
    },
    {
        id: 38,
        question: "\"Intel Core i5-12400F 2.5 GHz 6 Çekirdek 18MB Cache LGA1700\" ifadesi hangi donanım birimine aittir?",
        correctAnswer: "İşlemci"
    },
    {
        id: 39,
        question: "textBox1.Text = \"13\"; ve textBox2.Text = \"2\"; ise textBox1.Text+textBox2.Text ifadesinin değeri nedir?",
        correctAnswer: "132"
    },
    {
        id: 40,
        question: "Geriye değer döndürmeyen metot tanımlarken başına hangi sözcük konulmalıdır?",
        correctAnswer: "Void"
    },
    {
        id: 41,
        question: "Aşağıdaki kod satırını açıklayınız: if a>5 || a<450",
        correctAnswer: "a değişkeninin değeri 5'ten büyükse veya 450'den küçükse"
    },
    {
        id: 42,
        question: "Aşağıdaki programın ekrana vereceği çıktı nedir? a=2, b=5, c=b**a, d=a+b+c, print(d)",
        correctAnswer: "32"
    },
    {
        id: 43,
        question: "Aşağıdaki Pyton programının ekrana vereceği çıktı nedir? a= \"HOŞGELDİN\", b= \"BÜŞRA\", print(a,b)",
        correctAnswer: "HOŞGELDİNBÜŞRA"
    },
    {
        id: 44,
        question: "Yazı büyüklüğünü 5 yapmak için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
        correctAnswer: "<Font Size=\"5\">"
    },
    {
        id: 45,
        question: "Tabloda yeni bir sütun oluşturmak için kullanılan etiket nedir?",
        correctAnswer: "<TD>"
    },
    {
        id: 46,
        question: "Tablonun veya hücrenin pixel cinsinden genişliğini belirlemek için aşağıdakilerden hangisi kullanılır?",
        correctAnswer: "Width"
    },
    {
        id: 47,
        question: "Web sayfamıza \"arka.jpg\" isimli resmi eklemek için hangi etiket kullanılır?",
        correctAnswer: "<img src=\"arka.jpg\">"
    },
    {
        id: 48,
        question: "\"baslik\" isimli sınıf seçicisi bir paragrafta aktifleştirmek için nasıl çağrılır?",
        correctAnswer: "Class=\"baslik\""
    },
    {
        id: 49,
        question: "Bağlantıların altındaki çizgiyi kaldırmak için hangi özellik ve değeri kullanılır?",
        correctAnswer: "Text-decoration:none;"
    },
    {
        id: 50,
        question: "Kenar dışı boşluğu ayarlamak için hangi özellik kullanılır?",
        correctAnswer: "Margin"
    },
    {
        id: 51,
        question: "Form öğelerinde şifre kutusu için input type parametresine ne yazılmalıdır?",
        correctAnswer: "Password"
    },
    {
        id: 52,
        question: "Form öğelerinde doldurulan verilerin gönderileceği sayfa hangi parametrede belirtilir?",
        correctAnswer: "Action"
    },
    {
        id: 53,
        question: "Menü çubuğunu eklemek için hangi sekmeyi kullanmalıyız?",
        correctAnswer: "Spry"
    },
    {
        id: 54,
        question: "İnternet adreslerinde karşılaştığımız \"mil\" kısaltması hangi kurumlar için kullanılır?",
        correctAnswer: "Askeri kuruluşlar"
    },
    {
        id: 55,
        question: "İnternet adreslerinde karşılaştığımız \"edu\" kısaltması hangi kurumlar için kullanılır?",
        correctAnswer: "Eğitim kurumları"
    },
    {
        id: 56,
        question: "İnternet adreslerinde karşılaştığımız \"gov\" kısaltması hangi kurumlar için kullanılır?",
        correctAnswer: "Hükümet kurumları"
    },
    {
        id: 57,
        question: "İnternet adreslerinde karşılaştığımız \"com\" kısaltması hangi kurumlar için kullanılır?",
        correctAnswer: "Ticari kuruluşlar"
    },
    {
        id: 58,
        question: "İnternet adreslerinde karşılaştığımız \"org\" kısaltması hangi kurumlar için kullanılır?",
        correctAnswer: "Ticari olmayan kuruluşlar"
    },
    {
        id: 59,
        question: "HTML'de \"Title\" etiketi hangi amaçla kullanılır?",
        correctAnswer: "Sayfaya başlık eklemek için kullanılır"
    },
    {
        id: 60,
        question: "HTML'de \"P\" etiketi hangi amaçla kullanılır?",
        correctAnswer: "paragraf oluşturmak için kullanılır"
    },
    {
        id: 61,
        question: "HTML'de \"HX\" etiketi hangi amaçla kullanılır?",
        correctAnswer: "Başlık eklemek için kullanılır"
    },
    {
        id: 62,
        question: "HTML'de \"UL\" etiketi hangi amaçla kullanılır?",
        correctAnswer: "Sırasız liste oluşturmak için kullanılır"
    },
    {
        id: 63,
        question: "HTML'de \"Br\" etiketi hangi amaçla kullanılır?",
        correctAnswer: "Satır başı yapmak yada bir alt satıra geçmek için kullanılır"
    },
    {
        id: 64,
        question: "\"Okul Sayfamız\" şeklinde bir yazıya tıklandığında \"https://adiyamandumlupinarmtal.meb.k12.tr/\" adresine yönlendirecek ve yeni pencerede açılacak olan bağlantıyı HTML kodları ile yazınız.",
        correctAnswer: "<a href=\"https://adiyamandumlupinarmtal.meb.k12.tr/\" target=\"_blank\">Okul sayfamız</a>"
    }
];

// Pagination variables
const questionsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(questions.length / questionsPerPage);

// Track user answers
const userAnswers = {};

// Function to load questions for current page
function loadQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous questions
    
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const q = questions[i];
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-${q.id}`;
        
        questionDiv.innerHTML = `
            <h3>${q.id}) ${q.question}</h3>
            <input type="text" class="answer-input" id="answer-${q.id}" placeholder="Cevabınızı buraya yazın" value="${userAnswers[q.id] || ''}">
            <button class="check-button" onclick="checkAnswer(${q.id})">Kontrol Et</button>
            <div class="result" id="result-${q.id}"></div>
        `;
        
        quizContainer.appendChild(questionDiv);
        
        // If there's a saved answer, check it
        if (userAnswers[q.id]) {
            checkAnswer(q.id);
        }
    }
    
    updatePageInfo();
    updatePaginationButtons();
}

// Function to update page information
function updatePageInfo() {
    document.getElementById('page-info').textContent = `Sayfa ${currentPage} / ${totalPages}`;
    document.getElementById('page-info-bottom').textContent = `Sayfa ${currentPage} / ${totalPages}`;
}

// Function to update pagination buttons state
function updatePaginationButtons() {
    const prevButtons = document.querySelectorAll('#prev-page, #prev-page-bottom');
    const nextButtons = document.querySelectorAll('#next-page, #next-page-bottom');
    
    prevButtons.forEach(button => {
        button.disabled = currentPage === 1;
    });
    
    nextButtons.forEach(button => {
        button.disabled = currentPage === totalPages;
    });
}

// Function to go to previous page
function goToPrevPage() {
    if (currentPage > 1) {
        saveCurrentPageAnswers();
        currentPage--;
        loadQuestions();
        window.scrollTo(0, 0);
    }
}

// Function to go to next page
function goToNextPage() {
    if (currentPage < totalPages) {
        saveCurrentPageAnswers();
        currentPage++;
        loadQuestions();
        window.scrollTo(0, 0);
    }
}

// Function to save answers from current page
function saveCurrentPageAnswers() {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const q = questions[i];
        const answerInput = document.getElementById(`answer-${q.id}`);
        if (answerInput) {
            userAnswers[q.id] = answerInput.value.trim();
        }
    }
}

// Function to check individual answer
function checkAnswer(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = document.getElementById(`answer-${questionId}`).value.trim();
    const resultDiv = document.getElementById(`result-${questionId}`);
    
    // Save the answer
    userAnswers[questionId] = userAnswer;
    
    if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Doğru!";
        resultDiv.className = "result correct";
    } else {
        resultDiv.textContent = `Yanlış! Doğru cevap: ${question.correctAnswer}`;
        resultDiv.className = "result incorrect";
    }
}

// Function to check all results
function checkAllResults() {
    // First save current page answers
    saveCurrentPageAnswers();
    
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;
    
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id] || '';
        
        if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
            correctCount++;
        } else if (userAnswer) {
            wrongCount++;
        } else {
            emptyCount++;
        }
    });
    
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('empty-count').textContent = emptyCount;
    document.getElementById('total-count').textContent = questions.length;
    document.getElementById('result-summary').classList.remove('hidden');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    
    // Add pagination event listeners
    document.getElementById('prev-page').addEventListener('click', goToPrevPage);
    document.getElementById('next-page').addEventListener('click', goToNextPage);
    document.getElementById('prev-page-bottom').addEventListener('click', goToPrevPage);
    document.getElementById('next-page-bottom').addEventListener('click', goToNextPage);
    
    document.getElementById('check-results').addEventListener('click', checkAllResults);
}); 