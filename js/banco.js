// Banco de ejercicios PAES - Geometría
// Generado automáticamente a partir de la misma fuente que el documento Word
// "Banco_Ejercicios_PAES_Geometria.docx". No editar a mano: si hay que corregir
// un ejercicio, se edita en el generador y se vuelve a exportar.

const BANCO_EJERCICIOS = {
  "triangulos": [
    {
      "subtema": "Clasificación de triángulos (según sus lados)",
      "pregunta": "Un carpintero corta tres listones de madera de 5 cm, 5 cm y 8 cm de longitud para armar un soporte triangular. Según la medida de sus lados, ¿qué tipo de triángulo forma?",
      "alternativas": [
        "Equilátero",
        "Isósceles",
        "Escaleno",
        "Rectángulo",
        "No se puede formar un triángulo con esas medidas"
      ],
      "correcta": 1,
      "respuestaLetra": "B) Isósceles",
      "pasos": [
        "Primero se verifica que las medidas formen un triángulo válido, usando la desigualdad triangular: la suma de dos lados cualesquiera debe ser mayor que el tercero.",
        "5 + 5 = 10 > 8 ✓ ; 5 + 8 = 13 > 5 ✓ ; 5 + 8 = 13 > 5 ✓. Sí es un triángulo válido.",
        "Se observa que dos de sus lados miden lo mismo (5 cm y 5 cm) y el tercero es distinto (8 cm).",
        "Un triángulo con exactamente dos lados iguales se clasifica como isósceles."
      ],
      "porque": "La alternativa B es correcta porque el triángulo tiene dos lados de igual medida (5 cm) y uno distinto (8 cm), que es exactamente la definición de triángulo isósceles."
    },
    {
      "subtema": "Propiedades de los triángulos (suma de ángulos interiores)",
      "pregunta": "La armadura triangular que sostiene el techo de una bodega tiene sus tres ángulos interiores en la razón 2 : 3 : 4. ¿Cuál es la medida del ángulo mayor de esa armadura?",
      "alternativas": [
        "40°",
        "60°",
        "80°",
        "100°",
        "120°"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 80°",
      "pasos": [
        "Se sabe que la suma de los ángulos interiores de cualquier triángulo es 180°.",
        "Si los ángulos están en la razón 2 : 3 : 4, se pueden escribir como 2x, 3x y 4x.",
        "Se plantea la ecuación: 2x + 3x + 4x = 180°, es decir, 9x = 180°.",
        "Se despeja x: x = 180° ÷ 9 = 20°.",
        "Los ángulos son entonces 2(20°) = 40°, 3(20°) = 60° y 4(20°) = 80°.",
        "El ángulo mayor corresponde al término 4x = 80°."
      ],
      "porque": "La alternativa C es correcta porque, al resolver la razón con la condición de que los ángulos interiores suman 180°, el mayor de los tres ángulos resulta ser 80°."
    },
    {
      "subtema": "Perímetro y área (resolución de problemas aplicados)",
      "pregunta": "Se quiere sembrar pasto en un terreno triangular. La base del terreno mide 24 m y la altura correspondiente a esa base mide 15 m. Si cada bolsa de semillas alcanza para cubrir 60 m², ¿cuántas bolsas se necesitan como mínimo para cubrir todo el terreno?",
      "alternativas": [
        "2 bolsas",
        "3 bolsas",
        "4 bolsas",
        "5 bolsas",
        "6 bolsas"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 3 bolsas",
      "pasos": [
        "Se calcula el área del terreno triangular usando la fórmula: Área = (base × altura) ÷ 2.",
        "Área = (24 m × 15 m) ÷ 2 = 360 m² ÷ 2 = 180 m².",
        "Se divide el área total por la cobertura de una bolsa: 180 m² ÷ 60 m²/bolsa = 3 bolsas.",
        "Como 3 es exacto, no es necesario aproximar hacia arriba: se necesitan exactamente 3 bolsas."
      ],
      "porque": "La alternativa B es correcta porque el área del terreno (180 m²) dividida en la cobertura de cada bolsa (60 m²) da exactamente 3 bolsas, sin sobrante ni déficit."
    },
    {
      "subtema": "Teorema de Pitágoras",
      "pregunta": "Una escalera de 5 m de longitud se apoya sobre un muro vertical. La base de la escalera queda ubicada a 3 m de distancia del muro. ¿A qué altura del muro llega el extremo superior de la escalera?",
      "alternativas": [
        "3 m",
        "3,5 m",
        "4 m",
        "4,5 m",
        "5 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 4 m",
      "pasos": [
        "La escalera, el muro y el suelo forman un triángulo rectángulo, donde la escalera es la hipotenusa.",
        "Se aplica el Teorema de Pitágoras: (altura)² + (distancia al muro)² = (largo escalera)².",
        "Reemplazando: altura² + 3² = 5², es decir, altura² + 9 = 25.",
        "Se despeja: altura² = 25 − 9 = 16.",
        "Se calcula la raíz cuadrada: altura = √16 = 4 m."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar el Teorema de Pitágoras con la hipotenusa de 5 m y un cateto de 3 m, el otro cateto (la altura alcanzada) mide exactamente 4 m."
    },
    {
      "subtema": "Semejanza y proporcionalidad",
      "pregunta": "A la misma hora del día, un poste de 3 m de altura proyecta una sombra de 2 m de largo. En ese mismo instante, un árbol cercano proyecta una sombra de 8 m de largo. ¿Cuál es la altura del árbol?",
      "alternativas": [
        "9 m",
        "10 m",
        "12 m",
        "14 m",
        "16 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 12 m",
      "pasos": [
        "Como el poste y el árbol reciben la luz solar en el mismo ángulo, los triángulos que forman cada objeto con su sombra son semejantes.",
        "Se plantea la proporción entre altura y sombra: altura del poste / sombra del poste = altura del árbol / sombra del árbol.",
        "Reemplazando: 3 / 2 = h / 8.",
        "Se despeja h multiplicando en cruz: h = (3 × 8) ÷ 2 = 24 ÷ 2 = 12 m."
      ],
      "porque": "La alternativa C es correcta porque la razón entre altura y sombra debe mantenerse constante en triángulos semejantes, y al aplicar esa proporción se obtiene que el árbol mide 12 m."
    },
    {
      "subtema": "Propiedades de los triángulos (desigualdad triangular)",
      "pregunta": "Un profesor entrega a sus estudiantes tres varillas rígidas, de 4 cm, 9 cm y 5 cm de longitud, y les pide formar un triángulo uniendo sus extremos. ¿Es posible construir un triángulo con estas tres varillas?",
      "alternativas": [
        "Sí, se forma un triángulo escaleno",
        "Sí, se forma un triángulo isósceles",
        "Sí, se forma un triángulo rectángulo",
        "No, porque no se cumple la desigualdad triangular",
        "No, porque los tres lados deberían ser iguales"
      ],
      "correcta": 3,
      "respuestaLetra": "D) No, porque no se cumple la desigualdad triangular",
      "pasos": [
        "Para que tres segmentos formen un triángulo, la suma de cualquier par de lados debe ser estrictamente mayor que el tercer lado (desigualdad triangular).",
        "Se revisan las tres combinaciones: 4 + 9 = 13 > 5 ✓ ; 9 + 5 = 14 > 4 ✓ ; 4 + 5 = 9, que debe compararse con 9.",
        "En la última combinación, 4 + 5 = 9, es decir, la suma es igual al tercer lado y no mayor que él.",
        "Cuando la suma de dos lados es igual al tercero, los segmentos quedan alineados en una misma recta y no logran cerrar un triángulo."
      ],
      "porque": "La alternativa D es correcta porque los lados 4 cm y 5 cm suman exactamente 9 cm, igualando al tercer lado en vez de superarlo, por lo que no se cumple la desigualdad triangular y no se puede formar un triángulo."
    },
    {
      "subtema": "Ángulos y relaciones entre ellos (ángulo exterior)",
      "pregunta": "En un triángulo ABC, el ángulo exterior ubicado en el vértice C mide 130°. El ángulo interior en el vértice A mide 55°. ¿Cuánto mide el ángulo interior en el vértice B?",
      "alternativas": [
        "50°",
        "65°",
        "75°",
        "85°",
        "95°"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 75°",
      "pasos": [
        "El Teorema del Ángulo Exterior establece que un ángulo exterior de un triángulo es igual a la suma de los dos ángulos interiores no adyacentes a él.",
        "El ángulo exterior en C (130°) es igual a la suma de los ángulos interiores en A y en B.",
        "Se plantea la ecuación: 130° = 55° + B.",
        "Se despeja: B = 130° − 55° = 75°."
      ],
      "porque": "La alternativa C es correcta porque, según el Teorema del Ángulo Exterior, el ángulo en B se obtiene restando al ángulo exterior (130°) el ángulo interior conocido en A (55°), lo que da 75°."
    },
    {
      "subtema": "Resolución de problemas aplicados (Pitágoras + área)",
      "pregunta": "Un triángulo isósceles tiene sus dos lados iguales de 13 cm cada uno, y su base mide 10 cm. ¿Cuál es el área de este triángulo?",
      "alternativas": [
        "30 cm²",
        "60 cm²",
        "65 cm²",
        "120 cm²",
        "130 cm²"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 60 cm²",
      "pasos": [
        "En un triángulo isósceles, la altura trazada desde el vértice superior hasta la base la divide exactamente en dos partes iguales, formando dos triángulos rectángulos.",
        "Cada mitad de la base mide 10 cm ÷ 2 = 5 cm, y la hipotenusa de cada triángulo rectángulo es el lado igual, 13 cm.",
        "Se aplica el Teorema de Pitágoras para encontrar la altura: altura² + 5² = 13², es decir, altura² = 169 − 25 = 144.",
        "Se calcula la raíz: altura = √144 = 12 cm.",
        "Finalmente, se calcula el área del triángulo completo: Área = (base × altura) ÷ 2 = (10 cm × 12 cm) ÷ 2 = 60 cm²."
      ],
      "porque": "La alternativa B es correcta porque, tras usar el Teorema de Pitágoras para obtener la altura (12 cm) a partir de la mitad de la base y el lado igual, el área resultante con base 10 cm y altura 12 cm es 60 cm²."
    },
    {
      "subtema": "Semejanza y proporcionalidad (planos a escala)",
      "pregunta": "En un plano dibujado a escala 1 : 500, un terreno triangular tiene uno de sus lados dibujado con una longitud de 3,2 cm. ¿Cuál es la medida real de ese lado, en metros?",
      "alternativas": [
        "1,6 m",
        "6,4 m",
        "16 m",
        "32 m",
        "160 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 16 m",
      "pasos": [
        "La escala 1 : 500 indica que cada unidad en el plano representa 500 de esas mismas unidades en la realidad.",
        "Se multiplica la medida del plano por la escala: 3,2 cm × 500 = 1 600 cm.",
        "Se convierte el resultado de centímetros a metros, dividiendo por 100: 1 600 cm ÷ 100 = 16 m."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la escala 1:500 a los 3,2 cm del plano y convertir el resultado a metros, la medida real del lado del terreno es 16 m."
    },
    {
      "subtema": "Resolución de problemas aplicados (clasificación por ángulos)",
      "pregunta": "Un triángulo tiene lados que miden 6 cm, 8 cm y 11 cm. Sin construir el triángulo, ¿cómo se puede clasificar según sus ángulos?",
      "alternativas": [
        "Acutángulo",
        "Rectángulo",
        "Obtusángulo",
        "Equilátero",
        "No se puede determinar sin construirlo"
      ],
      "correcta": 2,
      "respuestaLetra": "C) Obtusángulo",
      "pasos": [
        "Se puede usar el recíproco del Teorema de Pitágoras: si el cuadrado del lado mayor es igual, mayor o menor que la suma de los cuadrados de los otros dos lados, el triángulo es rectángulo, obtusángulo o acutángulo, respectivamente.",
        "El lado mayor es 11 cm, por lo que se calcula 11² = 121.",
        "Se calcula la suma de los cuadrados de los otros dos lados: 6² + 8² = 36 + 64 = 100.",
        "Se compara: 121 > 100, es decir, el cuadrado del lado mayor supera la suma de los cuadrados de los otros dos.",
        "Cuando esto ocurre, el ángulo opuesto al lado mayor es obtuso, por lo tanto el triángulo es obtusángulo."
      ],
      "porque": "La alternativa C es correcta porque el cuadrado del lado mayor (121) es mayor que la suma de los cuadrados de los otros dos lados (100), lo que indica que el ángulo opuesto al lado de 11 cm es obtuso."
    }
  ],
  "cuadrilateros": [
    {
      "subtema": "Cuadrado, rectángulo, rombo, romboide y trapecio (clasificación)",
      "pregunta": "Un cuadrilátero tiene sus cuatro lados de igual medida, pero sus ángulos interiores no son todos rectos. ¿Qué tipo de cuadrilátero es?",
      "alternativas": [
        "Cuadrado",
        "Rectángulo",
        "Rombo",
        "Romboide",
        "Trapecio"
      ],
      "correcta": 2,
      "respuestaLetra": "C) Rombo",
      "pasos": [
        "Un cuadrado y un rombo comparten la propiedad de tener sus cuatro lados iguales.",
        "La diferencia entre ambos está en sus ángulos: el cuadrado tiene sus cuatro ángulos rectos (90°), mientras que el rombo no necesariamente los tiene rectos.",
        "Como el enunciado indica que los lados son iguales pero los ángulos no son todos rectos, el cuadrilátero no puede ser un cuadrado.",
        "Por lo tanto, corresponde a un rombo."
      ],
      "porque": "La alternativa C es correcta porque tener los cuatro lados iguales sin que los ángulos sean todos de 90° es precisamente la definición de un rombo (a diferencia del cuadrado, que sí exige ángulos rectos)."
    },
    {
      "subtema": "Propiedades de sus lados y ángulos",
      "pregunta": "En un romboide ABCD (un paralelogramo), los ángulos consecutivos son suplementarios entre sí, es decir, suman 180°. Si el ángulo A mide 65°, ¿cuánto mide el ángulo B, consecutivo a él?",
      "alternativas": [
        "65°",
        "115°",
        "130°",
        "150°",
        "180°"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 115°",
      "pasos": [
        "Se sabe que los ángulos consecutivos de un paralelogramo son suplementarios, es decir, su suma es 180°.",
        "Se plantea la ecuación: ángulo A + ángulo B = 180°.",
        "Reemplazando el valor conocido: 65° + B = 180°.",
        "Se despeja: B = 180° − 65° = 115°."
      ],
      "porque": "La alternativa B es correcta porque, al ser A y B ángulos consecutivos de un paralelogramo, su suma debe ser 180°, y al restar 65° se obtiene 115°."
    },
    {
      "subtema": "Perímetro (resolución de problemas aplicados)",
      "pregunta": "Se quiere cercar con alambre un terreno rectangular de 18 m de largo por 12 m de ancho. Si cada metro de alambre cuesta $2.500, ¿cuánto costará cercar todo el terreno?",
      "alternativas": [
        "$108.000",
        "$135.000",
        "$150.000",
        "$165.000",
        "$180.000"
      ],
      "correcta": 2,
      "respuestaLetra": "C) $150.000",
      "pasos": [
        "Se calcula el perímetro del terreno rectangular: Perímetro = 2 × (largo + ancho).",
        "Perímetro = 2 × (18 m + 12 m) = 2 × 30 m = 60 m.",
        "Se multiplica el perímetro por el costo de cada metro de alambre: 60 m × $2.500 = $150.000."
      ],
      "porque": "La alternativa C es correcta porque el perímetro del terreno es 60 m, y al multiplicarlo por el costo de $2.500 por metro se obtiene un total de $150.000."
    },
    {
      "subtema": "Área (resolución de problemas aplicados)",
      "pregunta": "Una sala rectangular mide 6,5 m de largo por 4 m de ancho. Se quiere cubrir todo el piso con baldosas cuadradas de 0,5 m de lado. ¿Cuántas baldosas se necesitan como mínimo?",
      "alternativas": [
        "52",
        "78",
        "104",
        "130",
        "156"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 104",
      "pasos": [
        "Se calcula el área de la sala: Área = largo × ancho = 6,5 m × 4 m = 26 m².",
        "Se calcula el área de cada baldosa: Área = 0,5 m × 0,5 m = 0,25 m².",
        "Se divide el área total de la sala por el área de una baldosa: 26 m² ÷ 0,25 m² = 104."
      ],
      "porque": "La alternativa C es correcta porque el área de la sala (26 m²) dividida por el área de cada baldosa (0,25 m²) da como resultado exactamente 104 baldosas."
    },
    {
      "subtema": "Diagonales (Teorema de Pitágoras aplicado)",
      "pregunta": "Un portón rectangular mide 2,4 m de ancho por 1,8 m de alto. Para reforzarlo, se instalará una barra metálica en diagonal, de esquina a esquina. ¿Cuánto debe medir la barra?",
      "alternativas": [
        "2,4 m",
        "2,8 m",
        "3 m",
        "3,2 m",
        "3,6 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 3 m",
      "pasos": [
        "La diagonal del portón, junto con el ancho y el alto, forma un triángulo rectángulo, donde la diagonal es la hipotenusa.",
        "Se aplica el Teorema de Pitágoras: diagonal² = ancho² + alto².",
        "Reemplazando: diagonal² = 2,4² + 1,8² = 5,76 + 3,24 = 9.",
        "Se calcula la raíz cuadrada: diagonal = √9 = 3 m."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar el Teorema de Pitágoras con los lados 2,4 m y 1,8 m del portón, la diagonal resultante mide exactamente 3 m."
    },
    {
      "subtema": "Diagonales (área del rombo)",
      "pregunta": "Un terreno con forma de rombo tiene diagonales que miden 30 m y 16 m. ¿Cuál es el área de este terreno?",
      "alternativas": [
        "120 m²",
        "180 m²",
        "240 m²",
        "360 m²",
        "480 m²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 240 m²",
      "pasos": [
        "El área de un rombo se calcula multiplicando sus diagonales y dividiendo el resultado por 2: Área = (D × d) ÷ 2.",
        "Reemplazando: Área = (30 m × 16 m) ÷ 2 = 480 m² ÷ 2 = 240 m²."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula del área del rombo con sus diagonales de 30 m y 16 m, el resultado es 240 m²."
    },
    {
      "subtema": "Cuadrado, rectángulo, rombo, romboide y trapecio (área del trapecio)",
      "pregunta": "Una piscina tiene forma de trapecio. Sus lados paralelos (bases) miden 10 m y 6 m, y la distancia entre ellos (altura) es de 4 m. ¿Cuál es el área de la superficie de la piscina?",
      "alternativas": [
        "16 m²",
        "32 m²",
        "48 m²",
        "64 m²",
        "80 m²"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 32 m²",
      "pasos": [
        "El área de un trapecio se calcula con la fórmula: Área = ((base mayor + base menor) ÷ 2) × altura.",
        "Reemplazando: Área = ((10 m + 6 m) ÷ 2) × 4 m = (16 m ÷ 2) × 4 m = 8 m × 4 m.",
        "Área = 32 m²."
      ],
      "porque": "La alternativa B es correcta porque, al promediar las dos bases (10 m y 6 m) y multiplicar por la altura (4 m), se obtiene un área de 32 m²."
    },
    {
      "subtema": "Perímetro y área (resolución de problemas aplicados)",
      "pregunta": "El perímetro de un terreno rectangular es 64 m. Se sabe que el largo del terreno es el triple de su ancho. ¿Cuál es el área de este terreno?",
      "alternativas": [
        "128 m²",
        "160 m²",
        "192 m²",
        "224 m²",
        "256 m²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 192 m²",
      "pasos": [
        "Se llama x al ancho del terreno; entonces el largo es 3x.",
        "Se plantea la ecuación del perímetro: 2 × (x + 3x) = 64, es decir, 2 × 4x = 64, o sea, 8x = 64.",
        "Se despeja x: x = 64 ÷ 8 = 8 m. Entonces el ancho es 8 m y el largo es 3 × 8 = 24 m.",
        "Se calcula el área: Área = largo × ancho = 24 m × 8 m = 192 m²."
      ],
      "porque": "La alternativa C es correcta porque, al resolver la ecuación del perímetro se obtiene un ancho de 8 m y un largo de 24 m, cuyo producto (el área) es 192 m²."
    },
    {
      "subtema": "Cuadrado, rectángulo, rombo, romboide y trapecio (propiedades del trapecio isósceles)",
      "pregunta": "Un trapecio isósceles tiene sus bases de 20 cm y 12 cm, y sus lados no paralelos (laterales) miden 5 cm cada uno. ¿Cuál es el perímetro de este trapecio?",
      "alternativas": [
        "32 cm",
        "37 cm",
        "42 cm",
        "47 cm",
        "52 cm"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 42 cm",
      "pasos": [
        "En un trapecio isósceles, los dos lados no paralelos (laterales) tienen exactamente la misma medida.",
        "El perímetro se obtiene sumando los cuatro lados: las dos bases y los dos lados laterales.",
        "Perímetro = 20 cm + 12 cm + 5 cm + 5 cm = 42 cm."
      ],
      "porque": "La alternativa C es correcta porque, al sumar las dos bases (20 cm y 12 cm) y los dos lados laterales iguales (5 cm cada uno), se obtiene un perímetro de 42 cm."
    },
    {
      "subtema": "Diagonales (resolución de problemas aplicados, síntesis con Pitágoras)",
      "pregunta": "Un rombo tiene lados de 13 cm y una de sus diagonales mide 10 cm. ¿Cuál es el área de este rombo?",
      "alternativas": [
        "60 cm²",
        "65 cm²",
        "120 cm²",
        "130 cm²",
        "150 cm²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 120 cm²",
      "pasos": [
        "En un rombo, las diagonales se cortan en su punto medio y forman ángulos rectos entre sí, dividiendo al rombo en cuatro triángulos rectángulos iguales.",
        "La mitad de la diagonal conocida es 10 cm ÷ 2 = 5 cm, y la hipotenusa de cada triángulo rectángulo es el lado del rombo, 13 cm.",
        "Se aplica el Teorema de Pitágoras para hallar la mitad de la otra diagonal: (mitad)² + 5² = 13², es decir, (mitad)² = 169 − 25 = 144.",
        "Se calcula la raíz: mitad = √144 = 12 cm, por lo que la otra diagonal completa mide 2 × 12 = 24 cm.",
        "Se calcula el área del rombo: Área = (10 cm × 24 cm) ÷ 2 = 120 cm²."
      ],
      "porque": "La alternativa C es correcta porque, tras usar el Teorema de Pitágoras para obtener la segunda diagonal (24 cm) a partir del lado (13 cm) y la mitad de la diagonal conocida (5 cm), el área resultante con ambas diagonales (10 cm y 24 cm) es 120 cm²."
    }
  ],
  "circunferencia": [
    {
      "subtema": "Radio y diámetro",
      "pregunta": "La rueda de una bicicleta tiene un diámetro de 70 cm. ¿Cuál es la medida de su radio?",
      "alternativas": [
        "17,5 cm",
        "30 cm",
        "35 cm",
        "40 cm",
        "70 cm"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 35 cm",
      "pasos": [
        "El radio de una circunferencia corresponde a la mitad de su diámetro.",
        "Se calcula: radio = diámetro ÷ 2 = 70 cm ÷ 2 = 35 cm."
      ],
      "porque": "La alternativa C es correcta porque el radio siempre equivale a la mitad del diámetro, y la mitad de 70 cm es 35 cm."
    },
    {
      "subtema": "Perímetro de la circunferencia (resolución de problemas aplicados)",
      "pregunta": "Una pista circular para trotar tiene un radio de 50 m. ¿Aproximadamente cuántos metros recorre una persona al dar dos vueltas completas a la pista? (Usa π ≈ 3,14)",
      "alternativas": [
        "157 m",
        "314 m",
        "471 m",
        "628 m",
        "942 m"
      ],
      "correcta": 3,
      "respuestaLetra": "D) 628 m",
      "pasos": [
        "Se calcula el perímetro (longitud) de una vuelta a la pista: Perímetro = 2 × π × radio.",
        "Perímetro = 2 × 3,14 × 50 m = 314 m.",
        "Como la persona da dos vueltas completas, se multiplica por 2: 314 m × 2 = 628 m."
      ],
      "porque": "La alternativa D es correcta porque una vuelta a la pista mide 314 m, y al dar dos vueltas completas la persona recorre 628 m en total."
    },
    {
      "subtema": "Área del círculo (resolución de problemas aplicados)",
      "pregunta": "Un plato circular tiene un radio de 20 cm. ¿Cuál es el área aproximada de su superficie? (Usa π ≈ 3,14)",
      "alternativas": [
        "314 cm²",
        "628 cm²",
        "942 cm²",
        "1.256 cm²",
        "1.570 cm²"
      ],
      "correcta": 3,
      "respuestaLetra": "D) 1.256 cm²",
      "pasos": [
        "El área de un círculo se calcula con la fórmula: Área = π × radio².",
        "Área = 3,14 × 20² = 3,14 × 400 = 1.256 cm²."
      ],
      "porque": "La alternativa D es correcta porque, al elevar el radio (20 cm) al cuadrado y multiplicarlo por π ≈ 3,14, el área resultante es 1.256 cm²."
    },
    {
      "subtema": "Radio y diámetro (a partir del perímetro)",
      "pregunta": "El borde de una piscina circular mide 62,8 m de perímetro. ¿Cuál es el diámetro aproximado de la piscina? (Usa π ≈ 3,14)",
      "alternativas": [
        "10 m",
        "15 m",
        "20 m",
        "25 m",
        "30 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 20 m",
      "pasos": [
        "El perímetro de una circunferencia se relaciona con su diámetro mediante: Perímetro = π × diámetro.",
        "Se despeja el diámetro: diámetro = Perímetro ÷ π = 62,8 m ÷ 3,14 = 20 m."
      ],
      "porque": "La alternativa C es correcta porque, al dividir el perímetro (62,8 m) por π ≈ 3,14, se obtiene un diámetro de 20 m."
    },
    {
      "subtema": "Arcos y ángulos",
      "pregunta": "En una circunferencia, un ángulo del centro mide 90°. ¿Qué fracción de la circunferencia completa corresponde al arco determinado por ese ángulo?",
      "alternativas": [
        "1/6",
        "1/5",
        "1/4",
        "1/3",
        "1/2"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 1/4",
      "pasos": [
        "Una circunferencia completa corresponde a un ángulo central de 360°.",
        "La fracción del arco se obtiene dividiendo el ángulo dado por el ángulo total: 90° ÷ 360° = 1/4."
      ],
      "porque": "La alternativa C es correcta porque un ángulo central de 90° corresponde exactamente a la cuarta parte de los 360° de la circunferencia completa."
    },
    {
      "subtema": "Arcos y ángulos (longitud de arco)",
      "pregunta": "Una circunferencia tiene un radio de 18 cm. ¿Cuál es la longitud del arco correspondiente a un ángulo central de 60°? (Usa π ≈ 3,14)",
      "alternativas": [
        "9,42 cm",
        "12,56 cm",
        "18,84 cm",
        "25,12 cm",
        "37,68 cm"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 18,84 cm",
      "pasos": [
        "Primero se calcula el perímetro completo de la circunferencia: Perímetro = 2 × π × radio = 2 × 3,14 × 18 = 113,04 cm.",
        "La longitud de arco corresponde a la fracción del perímetro asociada al ángulo dado: fracción = 60° ÷ 360° = 1/6.",
        "Se calcula la longitud del arco: 113,04 cm ÷ 6 = 18,84 cm."
      ],
      "porque": "La alternativa C es correcta porque el ángulo de 60° corresponde a 1/6 de la circunferencia completa (113,04 cm), y esa sexta parte equivale a 18,84 cm."
    },
    {
      "subtema": "Relaciones entre circunferencia y figuras (círculo inscrito en un cuadrado)",
      "pregunta": "Un círculo está inscrito exactamente en un cuadrado de 10 cm de lado, tocando sus cuatro lados. ¿Cuál es el área de la región del cuadrado que queda fuera del círculo? (Usa π ≈ 3,14)",
      "alternativas": [
        "15 cm²",
        "21,5 cm²",
        "28,5 cm²",
        "35 cm²",
        "50 cm²"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 21,5 cm²",
      "pasos": [
        "Como el círculo está inscrito en el cuadrado tocando sus cuatro lados, el diámetro del círculo es igual al lado del cuadrado: diámetro = 10 cm, por lo que el radio es 5 cm.",
        "Se calcula el área del cuadrado: Área = 10 cm × 10 cm = 100 cm².",
        "Se calcula el área del círculo: Área = π × radio² = 3,14 × 5² = 3,14 × 25 = 78,5 cm².",
        "Se resta el área del círculo al área del cuadrado: 100 cm² − 78,5 cm² = 21,5 cm²."
      ],
      "porque": "La alternativa B es correcta porque, al restar el área del círculo inscrito (78,5 cm²) al área total del cuadrado (100 cm²), la región que queda fuera del círculo mide 21,5 cm²."
    },
    {
      "subtema": "Relaciones entre circunferencia y figuras (triángulo inscrito)",
      "pregunta": "Un triángulo rectángulo está inscrito en una circunferencia, de manera que su hipotenusa coincide exactamente con el diámetro. Los catetos del triángulo miden 9 cm y 12 cm. ¿Cuál es el radio de la circunferencia?",
      "alternativas": [
        "6 cm",
        "7,5 cm",
        "9 cm",
        "12 cm",
        "15 cm"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 7,5 cm",
      "pasos": [
        "Se calcula la hipotenusa del triángulo rectángulo usando el Teorema de Pitágoras: hipotenusa² = 9² + 12² = 81 + 144 = 225.",
        "Se calcula la raíz cuadrada: hipotenusa = √225 = 15 cm.",
        "Como la hipotenusa coincide con el diámetro de la circunferencia, el diámetro mide 15 cm.",
        "Se calcula el radio: radio = diámetro ÷ 2 = 15 cm ÷ 2 = 7,5 cm."
      ],
      "porque": "La alternativa B es correcta porque la hipotenusa del triángulo (15 cm, obtenida por Pitágoras) es igual al diámetro de la circunferencia, por lo que el radio es la mitad: 7,5 cm."
    },
    {
      "subtema": "Resolución de problemas aplicados (corona circular)",
      "pregunta": "En una plaza, un camino de piedra circular bordea un jardín circular central. El radio exterior del camino (hasta el borde de la plaza) es de 15 m, y el radio del jardín central es de 10 m. ¿Cuál es el área del camino de piedra? (Usa π ≈ 3,14)",
      "alternativas": [
        "196,25 m²",
        "314 m²",
        "392,5 m²",
        "490 m²",
        "706,5 m²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 392,5 m²",
      "pasos": [
        "Se calcula el área del círculo exterior completo (plaza más camino): Área = π × 15² = 3,14 × 225 = 706,5 m².",
        "Se calcula el área del jardín central: Área = π × 10² = 3,14 × 100 = 314 m².",
        "El área del camino corresponde a la diferencia entre ambas áreas: 706,5 m² − 314 m² = 392,5 m²."
      ],
      "porque": "La alternativa C es correcta porque el área del camino es la diferencia entre el círculo exterior completo (706,5 m²) y el jardín circular interior (314 m²), lo que da 392,5 m²."
    },
    {
      "subtema": "Resolución de problemas aplicados (vueltas de una rueda)",
      "pregunta": "Una rueda de bicicleta tiene un diámetro de 70 cm. ¿Aproximadamente cuántas vueltas completas debe dar la rueda para recorrer 220 m? (Usa π ≈ 22/7 y considera que 1 m = 100 cm)",
      "alternativas": [
        "50 vueltas",
        "70 vueltas",
        "100 vueltas",
        "150 vueltas",
        "200 vueltas"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 100 vueltas",
      "pasos": [
        "Se calcula el perímetro de la rueda (la distancia que avanza en una vuelta completa): Perímetro = π × diámetro = 22/7 × 70 cm = 220 cm.",
        "Se convierte el perímetro a metros: 220 cm = 2,2 m.",
        "Se divide la distancia total por el avance de cada vuelta: 220 m ÷ 2,2 m = 100 vueltas."
      ],
      "porque": "La alternativa C es correcta porque cada vuelta de la rueda avanza 2,2 m, y para recorrer 220 m en total se necesitan exactamente 100 vueltas."
    }
  ],
  "cuerpos": [
    {
      "subtema": "Prismas (volumen aplicado)",
      "pregunta": "Una caja de almacenamiento tiene forma de prisma rectangular, con 40 cm de largo, 25 cm de ancho y 30 cm de alto. ¿Cuál es su volumen?",
      "alternativas": [
        "18.000 cm³",
        "24.000 cm³",
        "30.000 cm³",
        "36.000 cm³",
        "42.000 cm³"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 30.000 cm³",
      "pasos": [
        "El volumen de un prisma rectangular se calcula multiplicando sus tres dimensiones: Volumen = largo × ancho × alto.",
        "Volumen = 40 cm × 25 cm × 30 cm = 30.000 cm³."
      ],
      "porque": "La alternativa C es correcta porque al multiplicar el largo, el ancho y el alto de la caja (40 cm × 25 cm × 30 cm) se obtiene un volumen de 30.000 cm³."
    },
    {
      "subtema": "Prismas (volumen con base triangular)",
      "pregunta": "Un prisma recto tiene como base un triángulo rectángulo cuyos catetos miden 6 cm y 8 cm. La altura del prisma (la distancia entre sus dos bases triangulares) es de 15 cm. ¿Cuál es el volumen de este prisma?",
      "alternativas": [
        "180 cm³",
        "240 cm³",
        "300 cm³",
        "360 cm³",
        "420 cm³"
      ],
      "correcta": 3,
      "respuestaLetra": "D) 360 cm³",
      "pasos": [
        "Se calcula el área de la base triangular: Área = (cateto₁ × cateto₂) ÷ 2 = (6 cm × 8 cm) ÷ 2 = 24 cm².",
        "El volumen del prisma se obtiene multiplicando el área de la base por la altura del prisma: Volumen = Área de la base × altura.",
        "Volumen = 24 cm² × 15 cm = 360 cm³."
      ],
      "porque": "La alternativa D es correcta porque, al multiplicar el área de la base triangular (24 cm²) por la altura del prisma (15 cm), se obtiene un volumen de 360 cm³."
    },
    {
      "subtema": "Pirámides (volumen)",
      "pregunta": "Una pirámide recta tiene base cuadrada de 6 cm de lado y una altura de 10 cm. ¿Cuál es su volumen?",
      "alternativas": [
        "60 cm³",
        "90 cm³",
        "120 cm³",
        "150 cm³",
        "180 cm³"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 120 cm³",
      "pasos": [
        "Se calcula el área de la base cuadrada: Área = lado × lado = 6 cm × 6 cm = 36 cm².",
        "El volumen de una pirámide se calcula con la fórmula: Volumen = (Área de la base × altura) ÷ 3.",
        "Volumen = (36 cm² × 10 cm) ÷ 3 = 360 cm³ ÷ 3 = 120 cm³."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula del volumen de la pirámide con área de base 36 cm² y altura 10 cm, el resultado es 120 cm³."
    },
    {
      "subtema": "Pirámides (área total)",
      "pregunta": "Una pirámide recta tiene base cuadrada de 8 cm de lado. La altura de cada cara lateral (apotema lateral) mide 5 cm. ¿Cuál es el área total de la pirámide (la suma del área de la base más las cuatro caras laterales)?",
      "alternativas": [
        "80 cm²",
        "104 cm²",
        "144 cm²",
        "164 cm²",
        "208 cm²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 144 cm²",
      "pasos": [
        "Se calcula el área de la base cuadrada: Área base = 8 cm × 8 cm = 64 cm².",
        "Se calcula el área de una cara lateral (un triángulo): Área = (base × apotema lateral) ÷ 2 = (8 cm × 5 cm) ÷ 2 = 20 cm².",
        "Como la pirámide tiene 4 caras laterales iguales: Área lateral total = 4 × 20 cm² = 80 cm².",
        "Se suma el área de la base y el área lateral: Área total = 64 cm² + 80 cm² = 144 cm²."
      ],
      "porque": "La alternativa C es correcta porque, al sumar el área de la base cuadrada (64 cm²) con el área de las cuatro caras laterales (80 cm² en total), se obtiene un área total de 144 cm²."
    },
    {
      "subtema": "Cilindros (área total)",
      "pregunta": "Un cilindro tiene un radio de 4 cm y una altura de 10 cm. ¿Cuál es su área total (la suma de las dos bases circulares más el área lateral)? (Usa π ≈ 3,14)",
      "alternativas": [
        "175,84 cm²",
        "250,72 cm²",
        "301,44 cm²",
        "351,68 cm²",
        "402,44 cm²"
      ],
      "correcta": 3,
      "respuestaLetra": "D) 351,68 cm²",
      "pasos": [
        "El área total del cilindro se calcula con la fórmula: Área total = 2 × π × radio² + 2 × π × radio × altura.",
        "Se calcula el área de las dos bases circulares: 2 × 3,14 × 4² = 2 × 3,14 × 16 = 100,48 cm².",
        "Se calcula el área lateral: 2 × 3,14 × 4 × 10 = 251,2 cm².",
        "Se suman ambas partes: 100,48 cm² + 251,2 cm² = 351,68 cm²."
      ],
      "porque": "La alternativa D es correcta porque, al sumar el área de las dos bases circulares (100,48 cm²) con el área lateral (251,2 cm²), se obtiene un área total de 351,68 cm²."
    },
    {
      "subtema": "Cilindros (volumen aplicado)",
      "pregunta": "Un estanque de agua tiene forma cilíndrica, con un radio de 2 m y una altura de 3 m. ¿Cuántos litros de agua puede almacenar como máximo, si 1 m³ equivale a 1.000 litros? (Usa π ≈ 3,14)",
      "alternativas": [
        "18.840 L",
        "26.160 L",
        "31.400 L",
        "37.680 L",
        "43.960 L"
      ],
      "correcta": 3,
      "respuestaLetra": "D) 37.680 L",
      "pasos": [
        "Se calcula el volumen del cilindro: Volumen = π × radio² × altura.",
        "Volumen = 3,14 × 2² × 3 = 3,14 × 4 × 3 = 37,68 m³.",
        "Se convierte el volumen a litros: 37,68 m³ × 1.000 L/m³ = 37.680 L."
      ],
      "porque": "La alternativa D es correcta porque el volumen del estanque es 37,68 m³, que equivalen a 37.680 litros de agua."
    },
    {
      "subtema": "Conos (volumen aplicado)",
      "pregunta": "Un cucurucho de helado tiene forma de cono, con un radio de 3 cm y una altura de 12 cm. ¿Cuál es su volumen? (Usa π ≈ 3,14)",
      "alternativas": [
        "56,52 cm³",
        "84,78 cm³",
        "113,04 cm³",
        "150,72 cm³",
        "226,08 cm³"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 113,04 cm³",
      "pasos": [
        "El volumen de un cono se calcula con la fórmula: Volumen = (π × radio² × altura) ÷ 3.",
        "Volumen = (3,14 × 3² × 12) ÷ 3 = (3,14 × 9 × 12) ÷ 3 = 339,12 ÷ 3.",
        "Volumen = 113,04 cm³."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula del volumen del cono con radio 3 cm y altura 12 cm, el resultado es 113,04 cm³."
    },
    {
      "subtema": "Conos (relación entre cono y cilindro)",
      "pregunta": "Un cilindro y un cono tienen la misma base circular y la misma altura. El volumen del cilindro es 450 cm³. ¿Cuál es el volumen del cono?",
      "alternativas": [
        "100 cm³",
        "120 cm³",
        "150 cm³",
        "180 cm³",
        "225 cm³"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 150 cm³",
      "pasos": [
        "Cuando un cono y un cilindro comparten la misma base y la misma altura, el volumen del cono es siempre un tercio del volumen del cilindro.",
        "Se calcula: Volumen del cono = Volumen del cilindro ÷ 3 = 450 cm³ ÷ 3 = 150 cm³."
      ],
      "porque": "La alternativa C es correcta porque, al compartir base y altura, el volumen del cono equivale exactamente a un tercio del volumen del cilindro, es decir, 150 cm³."
    },
    {
      "subtema": "Esferas (volumen)",
      "pregunta": "Una esfera decorativa tiene un radio de 6 cm. ¿Cuál es su volumen aproximado? (Usa π ≈ 3,14 y la fórmula Volumen = 4/3 × π × radio³)",
      "alternativas": [
        "452,16 cm³",
        "678,24 cm³",
        "904,32 cm³",
        "1.130,4 cm³",
        "1.356,48 cm³"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 904,32 cm³",
      "pasos": [
        "Se calcula el cubo del radio: radio³ = 6³ = 216.",
        "Se aplica la fórmula: Volumen = (4/3) × 3,14 × 216.",
        "Volumen = 4,186... × 216 ≈ 904,32 cm³."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula del volumen de la esfera con radio 6 cm, el resultado aproximado es 904,32 cm³."
    },
    {
      "subtema": "Esferas (área de la superficie)",
      "pregunta": "Se debe pintar la superficie completa de una esfera decorativa de 5 cm de radio. ¿Cuál es el área aproximada que se debe pintar? (Usa π ≈ 3,14 y la fórmula Área = 4 × π × radio²)",
      "alternativas": [
        "157 cm²",
        "235,5 cm²",
        "314 cm²",
        "392,5 cm²",
        "471 cm²"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 314 cm²",
      "pasos": [
        "Se aplica la fórmula del área de la superficie de una esfera: Área = 4 × π × radio².",
        "Área = 4 × 3,14 × 5² = 4 × 3,14 × 25.",
        "Área = 314 cm²."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula del área de la esfera con radio 5 cm, el resultado es exactamente 314 cm²."
    }
  ],
  "analitica": [
    {
      "subtema": "Plano cartesiano y coordenadas",
      "pregunta": "El punto P(−4, 7) se ubica en el plano cartesiano. ¿En qué cuadrante se encuentra?",
      "alternativas": [
        "Cuadrante I",
        "Cuadrante II",
        "Cuadrante III",
        "Cuadrante IV",
        "Sobre uno de los ejes"
      ],
      "correcta": 1,
      "respuestaLetra": "B) Cuadrante II",
      "pasos": [
        "En el plano cartesiano, el cuadrante II corresponde a los puntos con coordenada x negativa y coordenada y positiva.",
        "El punto P(−4, 7) tiene x = −4 (negativo) e y = 7 (positivo).",
        "Por lo tanto, P se ubica en el Cuadrante II."
      ],
      "porque": "La alternativa B es correcta porque un punto con abscisa negativa y ordenada positiva se ubica siempre en el segundo cuadrante."
    },
    {
      "subtema": "Distancia entre dos puntos (resolución de problemas aplicados)",
      "pregunta": "En el plano de una ciudad, un hospital se ubica en el punto H(2, 3) y un colegio en el punto C(7, 15), medidos en kilómetros. ¿Cuál es la distancia en línea recta entre el hospital y el colegio?",
      "alternativas": [
        "11 km",
        "12 km",
        "13 km",
        "14 km",
        "15 km"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 13 km",
      "pasos": [
        "Se aplica la fórmula de distancia entre dos puntos: d = √[(x₂−x₁)² + (y₂−y₁)²].",
        "Reemplazando: d = √[(7−2)² + (15−3)²] = √[5² + 12²] = √[25 + 144].",
        "d = √169 = 13 km."
      ],
      "porque": "La alternativa C es correcta porque, al aplicar la fórmula de distancia con las coordenadas del hospital y el colegio, el resultado es exactamente 13 km."
    },
    {
      "subtema": "Punto medio (resolución de problemas aplicados)",
      "pregunta": "Dos antenas de telecomunicaciones se ubican en los puntos A(−2, 5) y B(8, −1) de un plano coordinado, medidos en kilómetros. Se quiere instalar una antena repetidora exactamente a mitad de camino entre ambas. ¿En qué punto debe ubicarse la antena repetidora?",
      "alternativas": [
        "(2, 3)",
        "(2, 2)",
        "(3, 2)",
        "(3, 3)",
        "(5, 2)"
      ],
      "correcta": 2,
      "respuestaLetra": "C) (3, 2)",
      "pasos": [
        "Se aplica la fórmula del punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2).",
        "Reemplazando: M = ((−2+8)/2, (5+(−1))/2) = (6/2, 4/2).",
        "M = (3, 2)."
      ],
      "porque": "La alternativa C es correcta porque, al promediar las coordenadas x e y de ambas antenas, el punto medio resulta ser exactamente (3, 2)."
    },
    {
      "subtema": "Pendiente (resolución de problemas aplicados)",
      "pregunta": "Una rampa para personas con movilidad reducida debe subir desde el punto A(0, 0) hasta el punto B(12, 1,5), medidos en metros (posición horizontal, altura). ¿Cuál es la pendiente de la rampa?",
      "alternativas": [
        "0,08",
        "0,10",
        "0,125",
        "0,15",
        "0,20"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 0,125",
      "pasos": [
        "Se aplica la fórmula de la pendiente: m = (y₂ − y₁) ÷ (x₂ − x₁).",
        "Reemplazando: m = (1,5 − 0) ÷ (12 − 0) = 1,5 ÷ 12.",
        "m = 0,125."
      ],
      "porque": "La alternativa C es correcta porque, al dividir la variación de altura (1,5 m) por la variación horizontal (12 m), se obtiene una pendiente de 0,125."
    },
    {
      "subtema": "Rectas (rectas paralelas)",
      "pregunta": "La recta L1 pasa por los puntos A(1, 2) y B(4, 11). La recta L2 es paralela a L1 y pasa por el punto C(0, 5). ¿Cuál es la pendiente de la recta L2?",
      "alternativas": [
        "1/3",
        "2",
        "3",
        "4",
        "9"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 3",
      "pasos": [
        "Se calcula primero la pendiente de L1: m = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3.",
        "Dos rectas paralelas siempre tienen la misma pendiente, sin importar por qué puntos pasen.",
        "Por lo tanto, la pendiente de L2 también es 3 (el punto C solo indica su ubicación, no cambia su pendiente)."
      ],
      "porque": "La alternativa C es correcta porque las rectas paralelas comparten siempre la misma pendiente, y la pendiente de L1 (calculada con A y B) es 3."
    },
    {
      "subtema": "Rectas (rectas perpendiculares)",
      "pregunta": "La recta L1 tiene pendiente 2/5. La recta L2 es perpendicular a L1. ¿Cuál es la pendiente de la recta L2?",
      "alternativas": [
        "−5/2",
        "−2/5",
        "2/5",
        "5/2",
        "−2"
      ],
      "correcta": 0,
      "respuestaLetra": "A) −5/2",
      "pasos": [
        "Dos rectas son perpendiculares cuando el producto de sus pendientes es igual a −1.",
        "Se plantea: (2/5) × m₂ = −1.",
        "Se despeja m₂: m₂ = −1 ÷ (2/5) = −5/2."
      ],
      "porque": "La alternativa A es correcta porque la pendiente de una recta perpendicular a otra es el recíproco negativo (inverso multiplicativo con signo cambiado) de la pendiente original, y el recíproco negativo de 2/5 es −5/2."
    },
    {
      "subtema": "Interpretación geométrica de coordenadas y gráficos",
      "pregunta": "Los vértices de un triángulo son A(0, 0), B(6, 0) y C(6, 8). Usando las distancias entre sus vértices, ¿qué tipo de triángulo es, según sus lados y sus ángulos?",
      "alternativas": [
        "Equilátero",
        "Isósceles y obtusángulo",
        "Escaleno y rectángulo",
        "Escaleno y acutángulo",
        "Isósceles y rectángulo"
      ],
      "correcta": 2,
      "respuestaLetra": "C) Escaleno y rectángulo",
      "pasos": [
        "Se calculan las distancias entre cada par de vértices. AB = distancia entre A(0,0) y B(6,0) = 6.",
        "BC = distancia entre B(6,0) y C(6,8) = 8.",
        "AC = distancia entre A(0,0) y C(6,8) = √(6² + 8²) = √100 = 10.",
        "Como los tres lados (6, 8 y 10) son todos distintos, el triángulo es escaleno.",
        "Además, se cumple que 6² + 8² = 10² (36 + 64 = 100), por lo que, según el recíproco del Teorema de Pitágoras, el triángulo también es rectángulo."
      ],
      "porque": "La alternativa C es correcta porque los tres lados del triángulo son distintos (escaleno) y, además, cumplen la relación pitagórica 6² + 8² = 10², lo que indica que es rectángulo."
    },
    {
      "subtema": "Interpretación geométrica de coordenadas y gráficos (paralelogramo)",
      "pregunta": "Tres vértices de un paralelogramo ABCD son A(1, 1), B(5, 1) y C(7, 4). ¿Cuáles son las coordenadas del cuarto vértice D, de modo que ABCD sea un paralelogramo?",
      "alternativas": [
        "(3, 4)",
        "(3, 3)",
        "(4, 4)",
        "(2, 4)",
        "(3, 5)"
      ],
      "correcta": 0,
      "respuestaLetra": "A) (3, 4)",
      "pasos": [
        "En un paralelogramo ABCD, las diagonales AC y BD se cortan en el mismo punto medio.",
        "Se calcula el punto medio de la diagonal AC: M = ((1+7)/2, (1+4)/2) = (4; 2,5).",
        "Se busca el punto D tal que el punto medio de B y D sea también (4; 2,5): ((5+x)/2, (1+y)/2) = (4; 2,5).",
        "Se despeja: 5 + x = 8, por lo que x = 3; y 1 + y = 5, por lo que y = 4.",
        "Entonces D = (3, 4)."
      ],
      "porque": "La alternativa A es correcta porque, al exigir que las diagonales AC y BD compartan el mismo punto medio (propiedad de todo paralelogramo), el cuarto vértice resulta ser (3, 4)."
    },
    {
      "subtema": "Distancia entre dos puntos (perímetro, resolución de problemas aplicados)",
      "pregunta": "Un terreno triangular tiene vértices en los puntos A(0, 0), B(0, 12) y C(5, 0), medidos en metros. ¿Cuál es el perímetro de este terreno?",
      "alternativas": [
        "20 m",
        "25 m",
        "30 m",
        "35 m",
        "40 m"
      ],
      "correcta": 2,
      "respuestaLetra": "C) 30 m",
      "pasos": [
        "Se calcula la distancia AB (lado vertical): AB = 12 m.",
        "Se calcula la distancia AC (lado horizontal): AC = 5 m.",
        "Se calcula la distancia BC usando la fórmula de distancia: BC = √[(5−0)² + (0−12)²] = √[25 + 144] = √169 = 13 m.",
        "Se suman los tres lados: Perímetro = 12 m + 5 m + 13 m = 30 m."
      ],
      "porque": "La alternativa C es correcta porque, al sumar los tres lados del triángulo (12 m, 5 m y 13 m, este último obtenido con la fórmula de distancia), se obtiene un perímetro de 30 m."
    },
    {
      "subtema": "Rectas (ecuación de la recta, coeficiente de posición)",
      "pregunta": "Una recta tiene pendiente 2 y pasa por el punto (3, 10). ¿Cuál es el valor de su coeficiente de posición (el punto donde la recta corta al eje Y)?",
      "alternativas": [
        "2",
        "4",
        "6",
        "8",
        "10"
      ],
      "correcta": 1,
      "respuestaLetra": "B) 4",
      "pasos": [
        "La ecuación de una recta se puede escribir como: y = m × x + n, donde m es la pendiente y n es el coeficiente de posición.",
        "Se reemplazan los datos conocidos: 10 = 2 × 3 + n, es decir, 10 = 6 + n.",
        "Se despeja n: n = 10 − 6 = 4."
      ],
      "porque": "La alternativa B es correcta porque, al reemplazar el punto (3, 10) y la pendiente 2 en la ecuación y = mx + n y despejar n, se obtiene que el coeficiente de posición es 4."
    }
  ]
};

const LETRAS_BANCO = ["A", "B", "C", "D", "E"];

function crearTarjetaEjercicio(ejercicio, numero) {

    const tarjeta = document.createElement("div");
    tarjeta.className = "ejercicio-banco";

    const numeroP = document.createElement("p");
    numeroP.className = "ejercicio-numero";
    numeroP.textContent = "Ejercicio " + numero + " · " + ejercicio.subtema;
    tarjeta.appendChild(numeroP);

    const preguntaP = document.createElement("p");
    preguntaP.className = "ejercicio-enunciado";
    preguntaP.textContent = ejercicio.pregunta;
    tarjeta.appendChild(preguntaP);

    const alternativasDiv = document.createElement("div");
    alternativasDiv.className = "ejercicio-alternativas";

    let respondida = false;

    ejercicio.alternativas.forEach(function(alternativa, indice){

        const boton = document.createElement("button");
        boton.className = "opcion-ejercicio";
        boton.textContent = LETRAS_BANCO[indice] + ") " + alternativa;

        boton.addEventListener("click", function(){

            if(respondida){
                return;
            }
            respondida = true;

            const botones = alternativasDiv.querySelectorAll(".opcion-ejercicio");

            botones.forEach(function(b, i){
                if(i === ejercicio.correcta){
                    b.classList.add("opcion-correcta");
                }else if(i === indice){
                    b.classList.add("opcion-incorrecta");
                }
            });

            solucionDiv.hidden = false;

        });

        alternativasDiv.appendChild(boton);

    });

    tarjeta.appendChild(alternativasDiv);

    const solucionDiv = document.createElement("div");
    solucionDiv.className = "ejercicio-solucion";
    solucionDiv.hidden = true;

    const respuestaP = document.createElement("p");
    respuestaP.className = "ejercicio-respuesta";
    respuestaP.innerHTML = "<strong>Respuesta correcta:</strong> " + ejercicio.respuestaLetra;
    solucionDiv.appendChild(respuestaP);

    const resolucionTitulo = document.createElement("p");
    resolucionTitulo.innerHTML = "<strong>Resolución paso a paso:</strong>";
    resolucionTitulo.style.marginBottom = "4px";
    solucionDiv.appendChild(resolucionTitulo);

    const listaPasos = document.createElement("ol");
    ejercicio.pasos.forEach(function(paso){
        const li = document.createElement("li");
        li.textContent = paso;
        listaPasos.appendChild(li);
    });
    solucionDiv.appendChild(listaPasos);

    const porqueP = document.createElement("p");
    porqueP.className = "ejercicio-porque";
    porqueP.textContent = ejercicio.porque;
    solucionDiv.appendChild(porqueP);

    const verSolucionBtn = document.createElement("button");
    verSolucionBtn.className = "boton-ver-solucion";
    verSolucionBtn.textContent = "Ver resolución";
    verSolucionBtn.addEventListener("click", function(){
        solucionDiv.hidden = !solucionDiv.hidden;
    });

    tarjeta.appendChild(verSolucionBtn);
    tarjeta.appendChild(solucionDiv);

    return tarjeta;

}

function iniciarBancosEjercicios(){

    const contenedores = document.querySelectorAll(".banco-ejercicios");

    contenedores.forEach(function(contenedor){

        const tema = contenedor.getAttribute("data-tema");
        const ejercicios = BANCO_EJERCICIOS[tema];

        if(!ejercicios){
            return;
        }

        ejercicios.forEach(function(ejercicio, indice){
            contenedor.appendChild(crearTarjetaEjercicio(ejercicio, indice + 1));
        });

    });

}

iniciarBancosEjercicios();
