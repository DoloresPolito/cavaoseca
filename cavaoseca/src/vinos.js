const vinos = [

    {
        name:"Bramare Valle De Uco",
        winery:"Viña Cobos",
        year:"",
        description:"Sus aromas congregan flores blancas y violetas, cerezas y frutos negros. En el paladar es intenso con notas de tabaco, chocolate y dulce de leche. Es untuoso y de buen ingreso, amable y redondo, de taninos dulces y agradable persistencia.",
        price:"$8.970",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Bramare Lujan De Cuyo",
        winery:"Viña Cobos",
        year:"",
        description:"Intensos aromas a cassis, cerezas y moras maduras se acentúan con pimienta blanca, clavo de olor, tabaco y madera sutil. Al paladar sus taninos casi perfectos encuentran una cremosidad y justa reminiscencia de café y frutos negros en una sensación final extensa y prolongada.",
        price:"$8.970",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Bramare Pinot Noir",
        winery:"Viña Cobos",
        year:"",
        description:"De color rojo carmesí, este Pinot Noir expresa su elegancia desde la nariz donde encontramos fruta roja fresca, cerezas, guindas, que se combinan con notas de bosque, exaltando su frescura. En boca es complejo y vertical, con taninos que se hacen presentes para marcar su particular estilo.",
        price:"$8.100",
        type:"Pinot Noir",
        tipo:"Tinto"

    },

    {
        name:"Felino",
        winery:"Viña Cobos",
        year:"",
        description:"Chardonnay de buen cuerpo que descubre aromas a flores blancas, durazno blanco y ananá. Su corto paso por barrica añade complejidad con notas de pan tostado, vainilla y chocolate.",
        price:"$3.275",
        type:"Chardonnay",
        tipo:"Blanco"

    },

    {
        name:"Cocodrilo",
        winery:"Viña Cobos",
        year:"",
        description:"Nariz: Las especias expresadas en pimienta blanca y negra se muestran amalgamadas con casis y aromas florales. Boca: Tiene muy buena entrada. Se aprecia el chocolate amargo y sutiles notas de menta. Cocodrilo es un vino muy complejo, mineral, con buena concentración e intensidad, taninos marcados, redondos y dulces con un largo final.",
        price:"$6.990",
        type:"Blend",
        tipo:"Tinto"

    },

    {
        name:"Judas Malbec",
        winery:"Sottano",
        year:"",
        description:"",
        price:"$16.550",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Judas Blend",
        winery:"Sottano",
        year:"",
        description:"",
        price:"$18.850",
        type:"Blend",
        tipo:"Tinto"

    },

    {
        name:"Susana Balbo Signature",
        winery:"Susana Balbo Wines",
        year:"",
        description:"Color salmón muy elegante. En nariz posee un perfil floral sutil con aromas delicados a frutos secos. En boca, su frescura y jugosa acidez se conjugan perfectamente con sabores a grosellas y frutillas. Posee muy buen balance y estructura.",
        price:"$4.390",
        type:"Rose"

    },

    {
        name:"Brioso",
        winery:"Susana Balbo Wines",
        year:"",
        description:"",
        price:"$4.890",
        type:"Blend",
       

    },

    {
        name:"Clos de Los Siete",
        winery:"Clos de los Siete",
        year:"",
        description:"Un blend de un rojo intenso con aromas a frutos rojos maduros y especias. Posee taninos maduros que dan una sensación de redondez y una amplitud y final perdurables.",
        price:"$2.690",
        type:"?",
        tipo:"Tinto"

    },

    {
        name:"Rutini Gewurztraminer",
        winery:"Rutini",
        year:"",
        description:"",
        price:"$3.990",
        type:"?",
        tipo:"Tinto"

    },

    {
        name:"Rutini Colección Sauvignon Blanc",
        winery:"Rutini",
        year:"",
        description:"no descripcion en db",
        price:"$2.690",
        type:"Sauvignon Blanc",
        tipo:"Blanco"

    },

    {
        name:"Rutini Coleccion Malbec",
        winery:"Rutini",
        year:"",
        description:"",
        price:"$4.630",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Rutini Coleccion Chardonnay",
        winery:"Rutini",
        year:"",
        description:"",
        price:"$3.420",
        type:"Chardonnay",
        tipo:"Blanco"

    },

    {
        name:"Rutini Coleccion Cabernet Malbec",
        winery:"Rutini",
        year:"no descripcion en db",
        price:"$2.585",
        type:"Cabernet-Malbec",
        tipo:"Tinto"

    },

    {
        name:"Rutini Coleccion Franc Malbec",
        winery:"Rutini",
        year:"",
        description:"",
        price:"$2.750",
        type:"Cabernet Franc -Malbec",
        tipo:"Tinto"

    },

    {
        name:"Black",
        winery:"Mosquita Muerta",
        year:"",
        description:"",
        price:"$6.300",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Blend de Tintas*",
        winery:"Mosquita Muerta",
        year:"",
        description:"",
        price:"$3.050",
        type:"?"

    },



    {
        name:"Zaha Malbec",
        winery:"Manos Negras",
        year:"",
        description:"Aromático, personal, con notas frutales y vegetales, destaca al paladar por su paso suave, bien jugoso y largo y grato final.",
        price:"$4.395",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Zaha Cabernet Franc",
        winery:"Manos Negras",
        year:"",
        description:"Vinos con un marcado carácter mineral conjugado con recuerdos de flores que brindan en copa sensaciones de frescura que acompañan una fina textura tánica. Elegancia sutil que solo los suelos de Altamira imprimen a sus viñedos",
        price:"$4.395",
        type:"Cabernet Franc",
        tipo:"Tinto"

    },

    {
        name:"Artesano",
        winery:"Manos Negras",
        year:"",
        description:"Ofrece buena intensidad de fruta rojas y hierbas, es atractivo y profundo, con menta y tomillo; al palada es jugoso, con medio de boca intenso y ricos taninos de tiza. Su cofermentación retrata la expresión de este lugar único.",
        price:"$3.695",
        type:"Pinot Noir",
        tipo:"Tinto"

    },

    {
        name:"The President´s Blend",
        winery:"Escorihuela Gascon",
        year:"",
        description:"Nariz: Complejo con aromas que recuerdan a los frutos rojos, confituras de frutos negros sobre un fondo balsámico. Ciruelas, cerezas, moras y arándanos son algunas de las frutas que se funden con los dejos tostados de la crianza y las especias dulces.Paladar: Ataque equilibrado, amplio y jugoso. Centro de paladar sobrio con rica presencia de frutos rojos y acidez refrescante. Taninos firmes de grano fino que aporta carácter y un final prolongado.",
        price:"$5.690",
        type:"Blend",
        tipo:"Tinto"

    },

    {
        name:"Escorihuela Gascon Pequeñas Producciones",
        winery:"Escorihuela Gascon",
        year:"",
        description:"",
        price:"$5.170",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Escorihuela Gascon Pequeñas Producciones",
        winery:"Escorihuela Gascon",
        year:"",
        description:"",
        price:"$5.170",
        type:"Cabernet",
        tipo:"Tinto"

    },

    {
        name:"Escorihuela Gascon Gran Reserva",
        winery:"Escorihuela Gascon",
        year:"",
        description:"",
        price:"$2.395",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Fin del Mundo Special",
        winery:"Del fin del mundo",
        year:"",
        description:"no desc en db",
        price:"$8.290",
        type:"Blend",
        tipo:"Tinto"

    },

    {
        name:"Fin del Mundo Single Vineyard Pinot Noir",
        winery:"Del fin del mundo",
        year:"",
        description:"no desc en db",
        price:"$3.590",
        type:"Pinot Noir",
        tipo:"Tinto"

    },

    {
        name:"Fin del Mundo Single Vineyard Malbec",
        winery:"Del fin del mundo",
        year:"",
        description:"no desc en db",
        price:"$3.590",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Nicola Catena Bonarda (vino de parcela)",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$11.895",
        type:"?",
        tipo:"Tinto"

    },

    {
        name:"Malbec Argentino",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$15.550",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Dv Catena Syrah",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$2.850",
        type:"Syrah Syrah",
        tipo:"Tinto"

    },

    {
        name:"Dv Catena Malbec Malbec",
        winery:"Catena Zapata",
        year:"",
        description:"Destellos violáceos propios del varietal. En nariz se perciben notas a mermelada de ciruela y moras negras. En boca es suave, sedoso. Totalmente redondo y de taninos amables. Con final largo y persistente.",
        price:"$3.775",
        type:"Malbec",
        tipo:"Tinto"
    },

    {
        name:"Dv Catena La Pirámide",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$5.500",
        type:"Cabernet Sauvignon",
        tipo:"Tinto"

    },

    {
        name:"Dv Catena Chardonnay",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$2.530",
        type:"Chardonnay",
        tipo:"Blanco"

    },

    {
        name:"Dv Catena Cabernet Malbec",
        winery:"Catena Zapata",
        year:"",
        description:"DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas.A la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble.En boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.",
        price:"$2.425",
        type:"Cabernet Malbec",
        tipo:"Tinto"
    },

    {
        name:"Dv Catena Cabernet",
        winery:"Catena Zapata",
        year:"",
        description:"",
        price:"$3.950",
        type:"Cabernet",
        tipo:"Tinto"

    },

    {
        name:"Angelica Zapata Merlot",
        winery:"Catena Zapata",
        year:"",
        description:"Angélica Zapata Merlot, es un vino elegante y complejo de color rojo violáceo con destellos rubíes, de nariz delicada, donde sobresalen aromas que recuerdan a de frutos rojos del bosque y notas suaves de especias como pimienta negra y clavo de olor, aportados por las uvas del viñedo La Pirámide, y aromas a frutos rojos y negros maduros como cassis y grosellas aportados por las uvas de Nicasia y Adrianna. El paso por roble aporta notas suaves de especias y vainilla. En boca de impacto dulce y cuerpo medio, muy equilibrado con la acidez, se perciben taninos muy suaves y redondos que ofrecen un final longevo y agradable.",
        price:"$3.150",
        type:"Merlot",
        tipo:"Tinto"

    },

    {
        name:"Angelica Zapata Chardonnay",
        winery:"Catena Zapata",
        year:"",
        description:"En nariz se presenta concentrado e intenso, con aromas de frutas cítricas y un toque mineral. En boca, de impacto dulce, untuoso, es brillante y fresco con sabores a frutas maduras, notas de vainilla y una excelente acidez natural que le otorga un final largo y persistente.",
        price:"$3.425",
        type:"Chardonnay",
        tipo:"Blanco"

    },

    {
        name:"Angelica Zapata Cabernet Sauvignon",
        winery:"Catena Zapata",
        year:"",
        description:"El angélica Zapata Cabernet Sauvignon es un blend proveniente de uvas Cabernet de tres diferentes viñedos. El resultado es un vino de gran concentración y elegancia. El viñedo «La Pirámide» aporta aromas de frutos negros maduros. «Domingo» confiere notas de menta y eucaliptus. «La Consulta» otorga notas especiadas y de pimienta negra.Estos tres elementos se conjugan de manera excepcional otorgando una gran complejidad al blend final.",
        price:"$3.350",
        type:"Cabernet Sauvignon",
        tipo:"Tinto"

    },

    {
        name:"Angelica Zapata Cabernet Franc",
        winery:"Catena Zapata",
        year:"",
        description:"El Angélica Zapata Cabernet Franc Alta, presenta un color rojo rubí con suaves tonalidades violáceas. Posee aroma intenso y concentrado con notas de cassis, grosellas maduras, y toques de vainilla y especias dulces como pimienta negra y clavo de olor. De impacto dulce y excelente estructura en boca, muestra frutos rojos maduros con marcados dejos a eucalipto y pimienta negra. Este vino, de excelente balance y elegancia, posee ahora un final bien estructurado y persistente.",
        price:"$3.350",
        type:"Cabernet Franc",
        tipo:"Tinto"

    },


    {
        name:"Saint Felicien Malbec",
        winery:"Catena Zapata",
        year:"",
        description:"no hay descripcion en DB",
        price:"$1.895",
        type:"Malbec",
        tipo:"Tinto"

    },




    {
        name:"Bressia Profundo",
        winery:"Bressia",
        year:"",
        description:"Balanceado equilibrio varietal, destacándose los aromas asociados a las moras, frambuesas y una elegante presencia de madera que se manifiesta como chocolate, tabaco, dulce de leche y vainilla. Boca: Se ofrece muy amplio, de gran volumen y muy consistente. De entrada dulce, armónica, con final largo y memorable. Persisten los aromas de boca que recuerdan a frutos rojos confitados.",
        price:"$5.100",
        type:"Blend",
        tipo:"Tinto"

    },


    {
        name:"Bressia Piel Negra",
        winery:"Bressia",
        year:"",
        description:"Notas de cerezas rojas, moras, tomare maduro y aromas frutales y florales como pétalos de rosas y violetas. En boca es un vino de gran estructura, se ofrece muy elegante, voluminoso y con una textura adecuada.",
        price:"$5.690",
        type:"Pinot Noir",
        tipo:"Tinto"

    },


    {
        name:"Bressia Monteagrelo Malbec",
        winery:"Bressia",
        year:"",
        description:"Nariz: Frutos rojos y negros con impecable presencia de vainilla, chocolate y café derivados del roble.Boca: Entrada dulce y armónica de cuerpo voluminoso con gran carnosidad, vino muy elegante y finas notas en el final.",
        price:"$2.590",
        type:"Malbec",
        tipo:"Tinto"

    },


    {
        name:"Bressia Monteagrelo Cabernet Franc",
        winery:"Bressia",
        year:"",
        description:"Nariz: Frutos rojos y negros, pimientos rojo con impecable presencia de vainilla, chocolate y café originados en el roble durante su crianza. Boca: Entrada dulce, armónico cuerpo, volumen y carnoso. Vino muy elegante que expresa con mucha firmeza y tipicidad el varietal Cabernet Franc",
        price:"$2.590",
        type:"Cabernet Franc",
        tipo:"Tinto"

    },


    {
        name:"Bressia Lagrima Canela",
        winery:"Bressia",
        year:"",
        description:"Por tratarse de un vino que ha cumplido parcialmente su fermentación maloláctica en barricas, notaremos gran untuosidad y grasitud en boca que le brindan elegancia y longitud realzando sus cualidades.",
        price:"$5.100",
        type:"Blend Chardonay Semillon",
        tipo:"Blanco"

    },


    {
        name:"Bressia Conjuro",
        winery:"Bressia",
        year:"",
        description:"",
        price:"$10.390",
        type:"?"

    },


    {
        name:"Luca",
        winery:"Bodega Luca (Laura Catena)",
        year:"",
        description:"",
        price:"$4.870",
        type:"Syrah",
        tipo:"Tinto"

    },


    {
        name:"Luca Pinot Noir",
        winery:"Bodega Luca (Laura Catena)",
        year:"",
        description:"",
        price:"$4.870",
        type:"Pinot Noir",
        tipo:"Tinto"

    },


    {
        name:"Luca Chardonnay",
        winery:"Bodega Luca (Laura Catena)",
        year:"",
        description:"",
        price:"$4.870",
        type:"Chardonnay",
        tipo:"Blanco"

    },


    {
        name:"Luca Beso de Dante",
        winery:"Bodega Luca (Laura Catena)",
        year:"",
        description:"",
        price:"$8.570",
        type:"?",
        tipo:"Tinto"

    },


    {
        name:"Caro - Laura Catena",
        winery:"Bodega Luca (Laura Catena)",
        year:"",
        description:"",
        price:"$6.350",
        type:"?",
        tipo:"Tinto"
    },


    {
        name:"Gran Enemigo Corte",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"De color oscuro y profundo con destellos rubíes. Complejo y aromático, a fruta en compota y notas de chocolate y vainilla. Boca: Notas dulces, algo astringente, de gran cuerpo y marcada acidez.",
        price:"$7.700",
        type:"?",
        tipo:"Tinto"
    },


    {
        name:"Gran Enemigo Gualtallary",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Intenso y complejo, donde destacan las especias, acompañadas de notas de fruta negra madura y vegetales, fresco. En paladar, elegante, sutil, sorprende su excelente acidez, taninos pulidos, final largo, con agradables notas minerales.",
        price:"$8.390",
        type:"?",
        tipo:"Tinto"
    },


    {
        name:"Gran Enemigo Chacayes",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Frutados, de ciruelas negras maduras, y algunas sutiles notas minerales y especiadas. En boca es elegante y expresivo, con taninos sedosos, mucha complejidad y notas de frutos negros y especias tenues.",
        price:"$7.790",
        type:"Cabernet Franc",
        tipo:"Tinto"
    },


    {
        name:"Gran Enemigo Agrelo",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Vino de color morado oscuro con reflejos rojos. Aromas de Especias dulces, pimienta negra y ligeras notas de eucalipto y tomillo. En boca es complejo con taninos estructurados, muy largo y persistente final.",
        price:"$7.790",
        type:"Cabernet Franc",
        tipo:"Tinto"
    },

    {
        name:"Gran Enemigo El Cepillo",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Rojo rubí profundo con reflejos violáceos. En nariz dulce, fruta en compota y notas de chocolate y vainilla. En boca ataca dulce, algo astringente, de gran cuerpo y marcada acidez.",
        price:"$7.790",
        type:"?",
        tipo:"Tinto"
    },



    {
        name:"El Enemigo Malbec",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"En vista un rojo rubí de alta intensidad y destellos violáceos.En nariz mucha madera. Tardó en abrirse en copa y luego del agite aparece fruta roja madura.En boca, un ataque brutal al paladar. Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.",
        price:"$3.890",
        type:"Malbec",
        tipo:"Tinto"
    },


    {
        name:"El Enemigo Chardonnay",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Fresco, con aporte del calcáreo y la tiza del suelo de Gualtallary, el resultado es un Chardonnay chispeante, aromático y notablemente aterciopelado en boca.",
        price:"$3.760",
        type:"Chardonnay",
        tipo:"Blanco"

    },

    {
        name:"El Enemigo Cabernet Franc",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"Este Cabernet Franc es de color rojo rubí con tonos violetas suaves.En nariz, aromas intensos y notas concentradas de cassis, grosellas maduras y especias dulces que incluyen la pimienta negro.Su paso por roble ofrece notas integradas de cedro y vainilla. Impacto fresco y excelente estructura en boca, que recuerda a frutos rojos maduros con notas de eucalipto y pimienta negra. Este vino tiene un excelente equilibrio y elegancia con un final persistente bien estructurado.",
        price:"$3.950",
        type:"Cabernet Franc",
        tipo:"Tinto"

    },

    {
        name:"El Enemigo Bonarda",
        winery:"Aleanna (Adriana Catena)",
        year:"",
        description:"En vista púrpura intenso y brillante.En nariz fruta madura acompotada con un dejo herbáceo y especiado.En boca entra dulce, de cuerpo medio, y algo ligero.",
        price:"$3.950",
        type:"?",
        tipo:"Tinto"

    },

    {
        name:"Achaval Ferrer Cabernet Franc",
        winery:"Achaval Ferrer",
        year:"",
        description:"",
        price:"$2.570",
        type:"Cabernet Franc",
        tipo:"Tinto"

    },

    {
        name:"Achaval Ferrer Malbec",
        winery:"Achaval Ferrer",
        year:"",
        description:"",
        price:"$2.570",
        type:"Malbec",
        tipo:"Tinto"

    },

    {
        name:"Achaval Ferrer Quimera",
        winery:"Achaval Ferrer",
        year:"",
        description:"Blend intenso y complejo. En nariz sus aromas son cautivantes y sobresalen los frutos negros, especias y vainilla. En boca es persistente, elegante, de buen cuerpo y equilibrada acidez.",
        price:"$6.500",
        type:"Blend",
        tipo:"Tinto"

    }


]

export default vinos;