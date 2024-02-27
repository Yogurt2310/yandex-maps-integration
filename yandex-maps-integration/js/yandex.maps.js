var myMap;
var placesToVisit = [];
var multiRoute;

var check = 0;
var checktrip = 0;
var checkinfo = 0;
var checkhelp = 0;
var checkrate = 0;
var checkblog = 0;
var checkansw = 0;

// var xLocation
// var yLocation

var places = [];
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [53.876146, 30.350590], // Могилев
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
//мост яшина(переход), серый дом, бюст романову, завод имени куйбышева, сенагога школище, спасо-преображенский храм, мемориал невинно убиенных, 
//памятник воинам погибших, памятник детям войны, землянка могилев, памятник батальону милиции, строммашина(концлагерь), дубровенка, печерский лесопарк
//железнодорожный мост с могилева кричев, подземный переход площадь ленина, жд вокзал, могилёвская телевышка, могилёвские ветряки
//костёл святого Антония, стадион торпедо
        //Получение координат вашей геолокации    
        ymaps.geolocation.get({
            provider: 'auto',
            mapStateAutoApply: true
        }).then(function (result) {
            console.log(result.geoObjects.position[0]);
            // xLocation = result.geoObjects.position[0];
            // yLocation = result.geoObjects.position[1];
            // console.log(xLocation);
            // console.log(yLocation);
        });
    [
        {"x": 53.894530, "y": 30.331986, "name": "Городская ратуша", "hint": "Музей, достопримечательность"},
        {"x": 53.899461, "y": 30.338743, "name": "Музей В. К. Бялыницкого-Бирули", "hint": "Музей, достопримечательность"},
        {"x": 53.895060, "y": 30.329779, "name": "Могилёвский областной краеведческий музей", "hint": "Музей, достопримечательность"},
        {"x": 53.897235, "y": 30.331562, "name": "Музей этнографии", "hint": "Музей, достопримечательность"},
        {"x": 53.897624, "y": 30.333067, "name": "Могилевский областной драматический театр", "hint": "Музей, достопримечательность"},
        {"x": 53.895016, "y": 30.339416, "name": "Городской парк культуры и отдыха Подниколье", "hint": "Парк культуры и отдыха сквер лесопарк"},
        {"x": 53.893972, "y": 30.345558, "name": "Могилёвский Свято-Никольский женский монастырь", "hint": "Монастырь"},
        {"x": 53.898388, "y": 30.333972, "name": "Костёл святого Станислава", "hint": "Католический храм"},
        {"x": 53.902273, "y": 30.340832, "name": "Площадь Звёзд", "hint": "Площадь Звёзд"},
        {"x": 53.908067, "y": 30.338618, "name": "Художественный музей имени П. В. Масленикова", "hint": "Музей"},
        {"x": 53.886352, "y": 30.3298678, "name": "Дворец культуры области", "hint": "Дом культуры"},
        {"x": 53.887501, "y": 30.327281, "name": "Парк аттракционов", "hint": "Парк аттракционов"},
        {"x": 53.894479, "y": 30.330574, "name": "Площадь Славы", "hint": "Площадь Славы"},
        {"x": 53.862055, "y": 30.254301, "name": "Буйническое поле", "hint": "Буйническое поле"},
        {"x": 53.868965, "y": 30.332903, "name": "Средняя школа № 18", "hint": "СШ № 18"},
        {"x": 53.875327, "y": 30.319887, "name": "Луполовский лагерь смерти", "hint": "Луполовский концлагерь"},
        {"x": 53.963183, "y": 30.382866, "name": "Полыковическая крыница", "hint": "Крыница"},
        {"x": 53.904273, "y": 30.318078, "name": "Польское кладбище", "hint": "Польское кладбище"},
        {"x": 53.934650, "y": 30.300068, "name": "Печерский лесопарк", "hint": "Печерский лесопарк"},
        {"x": 53.903395, "y": 30.321625, "name": "Мемориал Детям войны", "hint": "Детям войны"},
        {"x": 53.875504, "y": 30.420505, "name": "Мемориальный комплекс Землянка", "hint": "Землянка"},
        {"x": 53.636041, "y": 30.481587, "name": "Усадьба Толстых", "hint": "Усадьба Толстых"},
        //{"x": 53.874812, "y": 30.333396, "name": "Магазин Green", "hint": "Green"},
        {"x": 53.884467, "y": 30.337417, "name": "Памятник воинам-интернационалистам", "hint": "Памятник воинам"},
        {"x": 53.868928, "y": 30.323586, "name": "Костёл святого Антония", "hint": "Костёл святого Антония"},
        {"x": 53.869327, "y": 30.352441, "name": "Кафедральный Собор Преображения Господня", "hint": "Собор Преображения Господня"},
        {"x": 53.883237, "y": 30.414626, "name": "Стадион Торпедо","hint":  "Стадион Торпедо"},
        {"x": 53.910494, "y": 30.341114, "name": "Театр кукол","hint":  "Театр кукол"},
        {"x": 53.965859, "y": 30.308302, "name": "Памятник бойцам батальона милиции, защищавшим Могилев в июле 1941 года","hint":  "Памятник батальону милиции"},   
        // {"x": xLocation, "y": yLocation, "name": "Ваше местоположение","hint": "Вы"},   
    ].forEach(element => {
        var place = new ymaps.Placemark([element.x, element.y], {
                hintContent: element.hint,
                iconContent: element.name,
            }, {
                'preset': 'islands#yellowStretchyIcon'
            });
        places.push({"name": element.name, "obj": place});
    });



    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        // myMap.destroy();
        // ymaps.ready(init);
        // placesToVisit = [];
        // order = 0;
        // document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
        location.reload();
    };

    var geolocation = ymaps.geolocation;
    document.getElementById('myLocationButton').onclick = function () {
        hidePlaces();
        myLocationClose();
        geolocation.get({
                provider: 'browser',
                mapStateAutoApply: true
            }).then(function (result) {
                // Синим цветом пометим положение, полученное через браузер.
                // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
                result.geoObjects.options.set('preset', 'islands#geolocationIcon');
                myMap.geoObjects.add(result.geoObjects);
                console.log(geolocation);
            });
    };
    document.getElementById('moremyLocationButton').onclick = function () {
        hidePlaces();
        myLocationClose();
        geolocation.get({
                provider: 'browser',
                mapStateAutoApply: true
            }).then(function (result) {
                // Синим цветом пометим положение, полученное через браузер.
                // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
                result.geoObjects.options.set('preset', 'islands#geolocationIcon');
                myMap.geoObjects.add(result.geoObjects);
            });
    };

    document.getElementById('allLocations').onclick = function () {
        if (check == 0) {
            check = 1;
        } else {
            check = 0;
        }
        checktrip=0;
        allLocationsClose();
        hidePlaces();
        places.forEach(element => addPlace(element.obj));  
    };
    document.getElementById('moreallLocations').onclick = function () {
         if (check == 0) {
            check = 1;
        } else {
            check = 0;
        }
        allLocationsClose();
        hidePlaces();
        places.forEach(element => addPlace(element.obj));
    };

    document.getElementById('trip').onclick = function () {
        closeMenu();
        var x = document.getElementById('places');
        if (x.style.display === 'block') {
            checktrip = 0;
            hidePlaces();
            openMenu();
        } else {
            checktrip = 1;
            displayPlaces();
            tripClose();
        }
    };
    document.getElementById('moretrip').onclick = function () {
        closeMenu();
        var x = document.getElementById('places');
        if (x.style.display === 'block') {
            checktrip = 0;
            hidePlaces();
            openMenu();
        } else {
            checktrip = 1;
            displayPlaces();
            tripClose();
        }
    };

    
    console.log(places);

    places.forEach((element, index, array) => {
        var liElement = document.createElement("li");
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "places";
        newCheckbox.id = "chId_" + index;
        var label = document.createElement('label');
        label.htmlFor = "chId_" + index;
        label.appendChild(document.createTextNode(element.name));
        liElement.appendChild(newCheckbox);
        liElement.appendChild(label);
        document.getElementById("placesUl").appendChild(liElement);
        newCheckbox.onclick = function () {
            addPlace(element.obj, this);
        };
    });

}

function hidePlaces() {
    var x = document.getElementById('places');
    x.style.display = 'none';
}


function displayPlaces() {
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    var x = document.getElementById('places');
    x.style.display = 'block';
}

function addPlace(placemark, obj) {
    if(placesToVisit.indexOf(placemark) < 0) {
        myMap.geoObjects.add(placemark);
        placesToVisit.push(placemark);
    } else {
        myMap.geoObjects.remove(placemark);
        //
        var index = placesToVisit.indexOf(placemark);
        if (index !== -1) {
            placesToVisit.splice(index, 1);
        }
    }
    
}
// let al = confirm("Желаете пройти обучение по использованию данного веб приложения?")
// if (al == true) {
//     queWork()
// } 
function doMultiroutePedestrian() {
    if (multiRoute != undefined) {
        myMap.geoObjects.remove(multiRoute);
    }
    multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: placesToVisit,
        params: {
            //Тип маршрутизации - пешеходная маршрутизация.
            routingMode: 'pedestrian'
        }
    }, {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);
}
function openInfo() {
    if (document.getElementById('aboutplaces').style.display == "none")
    {
        document.getElementById('aboutplaces').style.display = "block";
        checkinfo = 1;
        infoClose();
        closeMenu();
    } else {
        checkinfo = 0;
        document.getElementById('aboutplaces').style.display = "none";
        openMenu();
    }
}

// function openSet() {
//     if (document.getElementById('options').style.display == "none")
//     {
//         document.getElementById('options').style.display = "block";
//         closeMenu();
//     } else {
//         document.getElementById('options').style.display = "none";
//         openMenu();
//     }
// }
function queWork() {
    if (document.getElementById('help').style.display == "none")
    {
        document.getElementById('help').style.display = "block";
        checkhelp = 1;
        helpClose()
        closeMenu();
    } else {
        checkhelp = 0;
        document.getElementById('help').style.display = "none";
        document.getElementById('video').pause();
        openMenu();
    }
}


// function queWork() {
//     window.location.href = './forquestion/fquestion.html';
// }
function blog() {
    if (document.getElementById('blogOkno').style.display == "none")
    {
        checkblog = 1;
        document.getElementById('blogOkno').style.display = "block";
        blogClose();
        closeMenu();
    } else {
        checkblog = 0;
        document.getElementById('blogOkno').style.display = "none";
        openMenu();
    }
}
function answers() {
    if (document.getElementById('answofque').style.display == "none")
    {
        checkansw = 1;
        document.getElementById('answofque').style.display = "block";
        answersClose();
        closeMenu();
    } else {
        checkansw = 0;
        document.getElementById('answofque').style.display = "none";
        openMenu();
    }
}
function rate() {
    if (document.getElementById('otz').style.display == "none")
    {
        checkrate = 1;
        document.getElementById('otz').style.display = "block";
        rateClose();
        closeMenu();
    } else {
        checkrate = 0;
        document.getElementById('otz').style.display = "none";
        openMenu();
    }
}

// Дополнение к основному меню
function openMenu() {
        document.getElementById('moreMenu').style.display = "block";
}
function closeMenu() {
        document.getElementById('moreMenu').style.display = "none";
}
function tripPods() {
    document.getElementById('moretrip').style.border = "2px solid black";
    document.getElementById('trip').style.color = "white";
}
function tripUnpods() {
    if(checktrip == 0){
        document.getElementById('moretrip').style.border = "none";
        document.getElementById('trip').style.color = "black";
    }
}
function myLocationButtonPods() {
    document.getElementById('moremyLocationButton').style.border = "2px solid black";
    document.getElementById('myLocationButton').style.color = "white";
}
function myLocationButtonUnpods() {
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('myLocationButton').style.color = "black";
}
function allLocationsPods() {
    document.getElementById('moreallLocations').style.border = "2px solid black";
    document.getElementById('allLocations').style.color = "white";
}
function allLocationsUnpods() {
    if (check == 0){
        document.getElementById('moreallLocations').style.border = "none";
        document.getElementById('allLocations').style.color = "black";
    }
}
function infoPods() {
    document.getElementById('moreinfo').style.border = "2px solid black";
    document.getElementById('info').style.color = "white";
}
function infoUnpods() {
    if (checkinfo == 0) {
        document.getElementById('moreinfo').style.border = "none";
        document.getElementById('info').style.color = "black";
    }
}
// function settingsPods() {
//     document.getElementById('moresettings').style.border = "2px solid black";
//     document.getElementById('settings').style.color = "white";
// }
// function settingsUnpods() {
//     document.getElementById('moresettings').style.border = "none";
//     document.getElementById('settings').style.color = "black";
// }
function questionPods() {
    document.getElementById('morequestion').style.border = "2px solid black";
    document.getElementById('question').style.color = "white";
}
function questionUnpods() {
    if (checkhelp == 0){
        document.getElementById('morequestion').style.border = "none";
        document.getElementById('question').style.color = "black";
    }
}
function blogPods() {
    document.getElementById('moreblog').style.border = "2px solid black";
    document.getElementById('blog').style.color = "white";
}
function blogUnpods() {
    if (checkblog == 0) {
        document.getElementById('moreblog').style.border = "none";
        document.getElementById('blog').style.color = "black";
    }
}
function answersPods() {
    document.getElementById('moreanswers').style.border = "2px solid black";
    document.getElementById('answers').style.color = "white";
}
function answersUnpods() {
    if (checkansw == 0) {
        document.getElementById('moreanswers').style.border = "none";
        document.getElementById('answers').style.color = "black";
    }
}
function ratePods() {
    document.getElementById('morerate').style.border = "2px solid black";
    document.getElementById('rate').style.color = "white";
}
function rateUnpods() {
    if (checkrate == 0) {
        document.getElementById('morerate').style.border = "none";
        document.getElementById('rate').style.color = "black";
    }
}
function wayPods() {
    document.getElementById('way').style.border = "1px solid black";
    document.getElementById('way').style.backgroundColor = "white";
    document.getElementById('way').style.color = "black";
}
function wayUnpods() {
    document.getElementById('way').style.border = "none";
    document.getElementById('way').style.backgroundColor = "green";
    document.getElementById('way').style.color = "white";
}
function destroyPods() {
    document.getElementById('destroyButton').style.border = "1px solid black";
    document.getElementById('destroyButton').style.backgroundColor = "white";
    document.getElementById('destroyButton').style.color = "black";
}
function destroyUnpods() {
    document.getElementById('destroyButton').style.border = "none";
    document.getElementById('destroyButton').style.backgroundColor = "red";
    document.getElementById('destroyButton').style.color = "white";
}
// function backChCol() {
//     document.getElementById('back').style.backgroundColor="gray";
//     // document.getElementById('backText').style.color="white";
// }
// function backChColAg() {
//     document.getElementById('back').style.backgroundColor=" #ADD8E6";
//     // document.getElementById('backText').style.color="black";
// }
// function backChCol1() {
//     document.getElementById('back1').style.backgroundColor="gray";
//     // document.getElementById('backText').style.color="white";
// }
// function backChColAg1() {
//     document.getElementById('back1').style.backgroundColor=" #ADD8E6";
//     // document.getElementById('backText').style.color="black";
// }

// Функции скрытия окон

function tripClose(){
    closeMenu();
    check = 0;
    checkansw = 0;
    checkblog = 0;
    checkhelp = 0;
    checkinfo = 0;
    checkrate = 0;
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('info').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('blog').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('aboutplaces').style.display = "none";
}

function myLocationClose(){
    check = 0;
    checkansw = 0;
    checkblog = 0;
    checkhelp = 0;
    checkinfo = 0;
    checkrate = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('info').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('blog').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('aboutplaces').style.display = "none";
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    hidePlaces();
    openMenu();
}

function infoClose(){
    check = 0;
    checkansw = 0;
    checkblog = 0;
    checkhelp = 0;
    checkrate = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('trip').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('blog').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    hidePlaces();
}

function blogClose(){
    check = 0;
    checkansw = 0;
    checkhelp = 0;
    checkinfo = 0;
    checkrate = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('trip').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('info').style.color = "black";
    document.getElementById('aboutplaces').style.display = "none";
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    hidePlaces();
}

function helpClose(){
    check = 0;
    checkansw = 0;
    checkblog = 0;
    checkinfo = 0;
    checkrate = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('trip').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('info').style.color = "black";
    document.getElementById('aboutplaces').style.display = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('blog').style.color = "black";
    document.getElementById('blogOkno').style.display = "none";
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    hidePlaces();
}

function answersClose(){
    check = 0;
    checkblog = 0;
    checkhelp = 0;
    checkinfo = 0;
    checkrate = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('trip').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('info').style.color = "black";
    document.getElementById('aboutplaces').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('blog').style.color = "black";
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    hidePlaces();
}

function rateClose(){
    check = 0;
    checkansw = 0;
    checkblog = 0;
    checkhelp = 0;
    checkinfo = 0;
    checktrip = 0;
    closeMenu();
    document.getElementById('allLocations').style.color = "black";
    document.getElementById('trip').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreallLocations').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('info').style.color = "black";
    document.getElementById('aboutplaces').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('blog').style.color = "black";
    if(check == 1) {
        places.forEach(element => addPlace(element.obj));
        check = 0;
    }
    hidePlaces();
}

function allLocationsClose(){
    checkansw = 0;
    checkblog = 0;
    checkhelp = 0;
    checkinfo = 0;
    checkrate = 0;
    checktrip = 0;
    document.getElementById('trip').style.color = "black";
    document.getElementById('question').style.color = "black";
    document.getElementById('answers').style.color = "black";
    document.getElementById('rate').style.color = "black";
    document.getElementById('otz').style.display = "none";
    document.getElementById('answofque').style.display = "none";
    document.getElementById('help').style.display = "none";
    document.getElementById('video').pause();
    document.getElementById('moretrip').style.border = "none";
    document.getElementById('moremyLocationButton').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('morequestion').style.border = "none";
    document.getElementById('moreanswers').style.border = "none";
    document.getElementById('morerate').style.border = "none";
    document.getElementById('moreinfo').style.border = "none";
    document.getElementById('info').style.color = "black";
    document.getElementById('aboutplaces').style.display = "none";
    document.getElementById('blogOkno').style.display = "none";
    document.getElementById('moreblog').style.border = "none";
    document.getElementById('blog').style.color = "black";
    hidePlaces();
}