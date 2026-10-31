// database/resident-evil.js (Финальное исправление слэшей путей)
window.gameDatabase = window.gameDatabase || {};

Object.assign(gameDatabase, {
    "RE 2 Remake": {
        title: "Resident Evil 2 Remake", 
        meta: "Capcom  •  2019  •  Survival Horror",
        bg: "images/backgrounds/re2-bg.jpg",     // ИСПРАВЛЕНО: слэш изменен на /
        cover: "images/covers/re2-cover.jpg",    // ИСПРАВЛЕНО: слэш изменен на /
        desc: "Культовое переосмысление биологической катастрофы в Раккун-Сити. Офицер-новичок Леон С. Кеннеди и студентка Клэр Редфилд пытаются выжить в зараженном мегаполисе, управляемом теневыми экспериментами корпорации Umbrella.",
        tags: ["Survival Horror", "Sci-Fi", "Action", "Zombies"],
        featured: [
            { title: "Инцидент в Раккун-Сити", desc: "Хронология краха промышленного мегаполиса после утечки Т-вируса.", img: "images/featured/re2-incident.jpg" },
            { title: "Био-оружие: Тиран (Т-103)", desc: "Анатомия и тактические протоколы борьбы с неуязвимым преследователем.", img: "images/featured/re2-tyrant.jpg" },
            { title: "Подземный комплекс NEST", desc: "Исследования фармацевтического гиганта Umbrella.", img: "images/featured/re2-nest.jpg" }
        ],
        /* ПОЛНЫЙ ЛОР-СПИСОК ПЕРСОНАЖЕЙ — СЕРИЯ RESIDENT EVIL 2 */
        wikiCharacters: [
            {
                name: "Leon S. Kennedy", role: "R.P.D. Officer • Rookie", avatar: "images/characters/re2-leon.jpg",
                quote: "“Это не обычный день на новой работе. Но я должен докопаться до сути этого кошмара.”",
                stats: [{ label: "HP", val: "100%" }, { label: "Firepower", val: "A+" }, { label: "Mobility", val: "High" }]
            },
            {
                name: "Claire Redfield", role: "Search Survivor • Student", avatar: "images/characters/re2-claire.jpg",
                quote: "“Я приехала сюда только ради брата, но теперь Крис — не единственная моя забота.”",
                stats: [{ label: "HP", val: "95%" }, { label: "Firepower", val: "A" }, { label: "Mobility", val: "Max" }]
            },
            {
                name: "Ada Wong", role: "Mercenary • FBI Spy", avatar: "images/characters/re2-ada.jpg",
                quote: "“Леон, ты хороший парень, но тебе лучше уйти. Здесь решаются серьезные вопросы.”",
                stats: [{ label: "HP", val: "80%" }, { label: "Firepower", val: "B+" }, { label: "Danger Level", val: "High" }]
            },
            {
                name: "Tyrant (Mr. X)", role: "Umbrella Bio-Weapon • T-103", avatar: "images/characters/re2-tyrant-char.jpg",
                quote: "“ [Тяжелые шаги приближаются из темноты полицейского участка] ”",
                stats: [{ label: "HP", val: "Immortal" }, { label: "Firepower", val: "S+" }, { label: "Threat Level", val: "S+" }]
            }
        ], // Полное закрытие массива персонажей для Resident Evil 2 Remake
        media: `<div class="featured-card"><h5>Official Reveal Trailer</h5></div>`
    }
});
