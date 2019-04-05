var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {    products: [
          {

              name: "МИЛОКО",
              price: 320+" "+"тг",
              description: [
                "вкусное молоко",
                "что-то еще"
               ],
              photos: [
                "milkin.png",
                "ilk.jpg",
                "3m.jpg",
                "1m.jpg"
              ]
          },
          {
            name: "LeBleu",
              price: 550+" "+"тг",
            description: [
              "вкусное молоко",
              "что-то еще"
             ],
            photos: [
              "5m.jpg",
              "6m.jpg",
              "7m.jpg",
              "8m.jpg"
            ]
          },
          {

            name: "Эмиль",
              price: 320+" "+"тг",
            description: [
              "вкусное молоко",
              "что-то еще"
             ],
            photos: [
              "9m.jpg",
              "10m.jpg",
              "11m.jpg",
              "12m.jpg"
            ]
          }
      ],
      category:[
        {
          category: "Молоко",
          e: "Молоко"
         }]
     },);
});

router.get('/cheese', function(req, res,next) {
  res.render('index', { products: [
          {
            category: "Сыр",
            e: "Сыр",
              name: "LeBlue",
              price: 7800+" "+"тг/кг",
            description: [
              "вкусный сыр",
              "что-то еще"
             ],
             photos: [
                "5m.jpg",
                "13m.jpg",
                "14m.jpg",
                "15m.jpg"
              ]

          },

          {
              name: "AA",
              price: 7800+" "+"тг/кг",
            description: [
              "вкусный сыр",
              "что-то еще"
             ],
             photos: [
                "16m.png",
                "17m.jpeg",
                "18m.jpg",
                "19m.jpg"
              ]
          },
          {
              name: "fsef",
              price: 7800+" "+"тг/кг",
            description: [
              "вкусный сыр",
              "что-то еще"
             ],
             photos: [
                "20m.jpg",
                "21m.jpg",
                "22m.jpg",
                "23m.jpg"
              ]
          }
      ],
      category:[
        {
          category: "Сыр",
          e: "Сыр"
         }] });
})
router.get('/icecream', function(req, res, next) {
  res.render('index', { products: [
          {
            category: "Мороженое",
            e: "Мороженое",
              name: "Bambino",
              price: '1800 тг',
              description: [
                "вкусное мороженое",
                "что-то еще"
               ],

              photos: [
                 "24m.png",
                 "25m.jpg",
                 "26m.jpg",
                 "27m.jpg"
               ]
          },
          {
              name: "Tutti-frutti",
              price: '600 тг',
              description: [
                "вкусное мороженое",
                "что-то еще"
               ],
              photos: [
                 "28m.jpg",
                 "29m.jpg",
                 "30m.jpg",
                 "31m.jpg"
               ]
          },
          {
              name: "33 пингвина",
              price: "700 тг",
              description: [
                "вкусное мороженое",
                "что-то еще"
               ],

              photos: [
                 "32m.jpg",
                 "33m.png",
                 "34m.jpg",
                 "35m.jpg"
               ]
          }

        ],
        category:[
          {
            category: "мороженое",
            e: "мороженое"
           }] });

});
router.get('/yogurt', function(req, res, next) {
  res.render('index', { products: [
          {
            name: "Йогурт Landliebe",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
            "yogurt.jpg",
            "yogurt2.jpg",
            "yogurt3.jpg",
              "yogurt.jpg"
            ]
          },
          {
            name: "Йогурт Чудо",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
              "wonder.jpg",
              "wonder2.jpg",
              "wonder3.jpg",
                "wonder.jpg",
            ]
        },
        {
            name: "Йогурт Chobani",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
              "chobani.jpg",
              "chobani2.jpg",
              "chobani3.jpg",
              "chobani.jpg"
            ]
        }
      ],
      category:[
        {
          category: "Йогурты",
          e: "Йогурты"
         }] });
});
router.get('/milkshake', function(req, res, next) {
  res.render('index', { products: [
        {
            name: "Коктейль Молочный",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
            "milkshake.jpg",
            "milkshake2.jpg",
            "milkshake3.jpg",
            "milkshake.jpg"
            ]
        },
        {
            name: "Коктейль Молочный",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
            "milkshake4.jpg",
            "milkshake5.jpg",
            "milkshake6.jpg",
            "milkshake7.jpg",
            ]
        }
      ],
      category:[
        {
          category: "Коктейли",
          e: "Коктейли"
         }] });
});
router.get('/chocolate', function(req, res, next) {
  res.render('index', { products: [
          {
              name: "Шоколад Wonka",
              price: '500тг',
              description: [
                "вкусный шоколад",
                "Еще что-то"
            ],
            photos: [
            "wonka3.jpg",
            "wonka.jpg",
            "wonka2.jpg",
            "wonka3.jpg",
            ]
          },
          {
              name: "Шоколад AlpenGold Oreo",
              price: '300тг',
                 description: [
                  "вкусный шоколад",
                "Еще что-то"
            ],
            photos: [
            "alpen.jpg",
            "alpen3.jpg",
            "alpen2.jpg",
            "alpen.jpg",
            ]
          },
		   {
              name: "Шоколад Milka TUC",
              price: '350тг',
                 description: [
                  "вкусный шоколад",
                "Еще что-то"
            ],
            photos: [
            "milka.jpg",
            "milka2.jpg",
            "milka3.jpg",
            "milka.jpg",
            ]
          }
        ],
        category:[
          {
            category: "Шоколад",
            e: "Шоколад"
           }] });
});
router.get('/cookie', function(req, res, next) {
  res.render('index', { products: [
         		   {
              name: "Печенье TUC ",
              price: '430тг',
                 description: [
                "вкусное печенье",
                "Еще что-то"
            ],
            photos: [
            "tuc3.jpg",
            "tuc2.jpg",
            "tuc.jpg",
            "tuc3.jpg",
            ]
          },
		   		   {
              name: "Печенье Oreo ",
              price: '430тг',
                 description: [
                "вкусное печенье",
                "Еще что-то"
            ],
            photos: [
            "oreo.jpg",
            "oreo2.jpg",
            "oreo3.jpg",
            "oreo.jpg",
            ]
          }
        ],
        category:[
          {
            category: "Печенье",
            e: "Печенье"
           }] });
});

module.exports = router;
