let gegevens = {
    "naam" : "Igor"
}

console.log(gegevens.naam)

let gegevens2 = {
        "persoon": {
            "naam": "Jeroen",
            "leeftijd": 28
        }
    
}

console.log(gegevens2.persoon.naam)
console.log(gegevens2.persoon.leeftijd)


let gegevens3 = {
    "personen": [
        {
            "naam": "Jeroen",
            "leeftijd": 28
        },
        {
            "naam": "Ton",
            "leeftijd": 31
        }
    ]
}

console.log(gegevens3.personen[0].leeftijd  )
console.log(gegevens3.personen[1].naam)

let gegevens4 = {
    "leerlingen": [
        {
            "naam": "Bas",
            "leeftijd": "17",
            "woonplaats": "Amsterdam-Noord"
        },
        {
            "naam": "Laura",
            "leeftijd": "18",
            "woonplaats": "Volendam"
        },
        {
            "naam": "Sjoerd",
            "leeftijd": "16",
            "woonplaats": "Amsterdam"
        },
        {
            "naam": "Ahmed",
            "leeftijd": "19",
            "woonplaats": "Hoorn"
        },
        {
            "naam": "Lieke",
            "leeftijd": "17",
            "woonplaats": "Amsterdam-Noord"
        },
        {
            "naam": "Guan",
            "leeftijd": "18",
            "woonplaats": "Amsterdam"
        },
        {
            "naam": "Xing",
            "leeftijd": "17",
            "woonplaats": "Haarlem"
        },
        {
            "naam": "Samara",
            "leeftijd": "19",
            "woonplaats": "Haarlem"
        }
    ],
    "docenten": [
        {
            "naam": "Jeroen",
            "leeftijd": 28,
            "woonplaats": "Alphen a/d Rijn"
        },
        {
            "naam": "Erik",
            "leeftijd": 40,
            "woonplaats": "Hoorn"
        }
    ]
}

console.log(gegevens4.docenten[1].woonplaats)