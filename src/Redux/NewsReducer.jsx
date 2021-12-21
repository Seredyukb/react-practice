let initialState = {
  newsData: [
    {
      id: 1,
      resourceName: "Onliner",
      description: "Черная пятница. Лучшие телевизоры и акустика этой пятницы",
      resourceLogo:
        "https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1637668848",
      linkUrl:
        "https://tech.onliner.by/2021/11/24/televizory-i-akustika-chernoj-pyatnicy",
      photoUrl:
        "https://content.onliner.by/news/970x485/1c12fa9e0638dc7179b996705e421df2.jpeg",
    },
    {
      id: 2,
      resourceName: "Onliner",
      resourceLogo:
        "https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1637668848",
      description: "4 причины купить Lada X-RAY",
      description1:
        "Стильные и динамичные кроссоверы LADA XRAY и LADA XRAY Cross уже давно полюбились белорусам. Эти автомобили заслужили народную любовь не только благодаря своему стильному внешнему виду, но и благодаря своей практичности. В автоцентре Минск-Лада на покупку моделей семейства LADA XRAY действуют различные выгодные предложения. Мы собрали ТОП-4 причин, почему стоит прямо сейчас отправиться на Серова, 1 за покупкой популярного кроссовера от LADA:",
      linkUrl:
        "https://autodealers.onliner.by/minsklada/?utm_source=onliner&utm_medium=main_page&utm_campaign=lada2511&utm_content=plitka2511",
      photoUrl:
        "https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://autodealers.onliner.by/wp-content/uploads/2021/11/xray_cross_2.jpg",
    },
    {
      id: 3,
      resourceName: "Sostav",
      resourceLogo: "https://www.sostav.ru/app/public/design/logo2918-05v3.svg",
      description:
        "Мария Донских, dentsu: «Люди больше думают про опыт и ценность, которую этот опыт приносит»",
      linkUrl: "https://www.sostav.ru/publication/dentsu-rekonfa-51501.html",
      photoUrl: "https://www.sostav.ru/images/news/2021/11/25/fcj34tid.jpg",
    },
  ],
};

const NewsReducer = (state = initialState, action) => {
  return state;
};
export default NewsReducer;
