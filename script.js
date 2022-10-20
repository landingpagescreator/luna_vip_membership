//the navbar list
document.getElementById("navbar_menu").onclick = function() {
    document.getElementById("side_list").style.right = "0";
    document.getElementById("navbar_menu").style.display = "none";
}

document.getElementById("close").onclick = function() {
    document.getElementById("side_list").style.right = "-100%";
    document.getElementById("navbar_menu").style.display = "block";
}

//opinions sliders

var persons = [
    {
        'name': 'Ms Mohiba',
        'photoURL': 'url(mohiba.jpg)',
        'saying': 'أنا كنت كلما أوقع بمشكلة استسلم وفكّر هي نهاية الكون و أنو خلص وقفت حياتي لحتى تعرّفت عليكي و بدأتي في مساعدتي في الاستشارات. <br> رح أضل مستمرة معك بكل برنامج رح تعمليه وباللإستشارات الخاصة. <br> أنا اليوم أقوى بسببك وبسبب نصائحك، عم استمتع بكل تفاصيل حياتي ووصلت لمرحلة أنو ما في شي مستحيل. <br> إنتي النعمة يلي رب العالمين بعتلي ياها، الله ينوّر دربك متل ما عم تنوّري حياتي وحيات كتير بنات، بحبك وممتنة لوجودك بحياتي.',
        'flagURL': 'url(no.png)',
        'direction': 'rtl'
    }, 
    {
        'name': 'Ms Maria',
        'photoURL': 'url(maria.jpg)',
        'saying': "I was wondering who am I and what I'm doing here on earth and how life works? Rania light up my road, made my dreams and soul alive and fresh again. <br> She helped me know and connect to my higher self and to Allah, She helped me realize that Allah loves me and sent me to earth for a resaon. <br> I'm grateful for Rania's excitence on earth, I love Rania.",
        'flagURL': 'url(dz.png)',
        'direction': 'ltr'
    }, 
    {
        'name': 'Norimen',
        'photoURL': 'url(norimen.jpg)',
        'saying': "Je voulais t'écrire ce message pour te remercier pour tes consultations pleine de conseils, d'écoute, d'informations, performance et savoir faire. <br> Je te remercie du fond du coeur, Tu est faite pour faire ce métier, je te souhaites énormément de succès. <br> Tu est un très grand modèle de la femme réussie.",
        'flagURL': 'url(fr.png)',
        'direction': 'ltr'
    },
    {
        'name': 'Ghozlenne',
        'photoURL': 'url(roza.jpg)',
        'saying': 'رانيا حبيبتي نشكرك بزاف و ممتنة لوجودك كروح في هذه الارض ، انت مصدر الهام لي و متابعتي لك عمرها و توقفت من يوم عرفت حسابك من سنة مضت. <br> كانت تجربة معاك في برنامج ليبرا لي تشافي تعلمت بزاف أمور و غيّرت وعيي بيها و طريقة تفكيري و فهم احنا من و كيف خلقنا و ماذا ممكن نحقق. <br> وجودك في هذا العالم الافتراضي داعم ليا بزاف راني نشوفك قدوة في تحدياتي ان شاء الله نلتقي على ارض الواقع و تكون استشارة مباشرة ياااارب نحبك',
        'flagURL': 'url(dz.png)',
        'direction': 'rtl'
    },
    {
        'name': 'Ms Majulia',
        'photoURL': 'url(majulia.jpg)',
        'saying': 'I first met Rania Mimoune in 2019, i started the self-confidence course with her, then i took a consultation session, she gave me positive energy, and i have truly loved her since those days. <br> I always see in her that future image that reminds me that after hardship comes ease, and that hope is born from pain, and that every person has his own mission and he must live it with confidence, contentment and inner peace. <br> Blassed are those who knew her, loved her, and prayed for her.',
        'flagURL': 'url(us.png)',
        'direction': 'ltr'
    }, 
];


var current = 0;
var longue = persons.length;
var timeInt = setInterval(function() {
    var next = ((current + 1) % longue);
    var currentPerson = persons[next];
    document.getElementById("photo").style.backgroundImage = currentPerson.photoURL;
    document.getElementById("name").innerHTML = currentPerson.name;
    document.getElementById("saying").style.direction = currentPerson.direction;
    document.getElementById("saying").innerHTML = currentPerson.saying;
    document.getElementById("flag").style.backgroundImage = currentPerson.flagURL;
    current = next;
}, 15000);