const dataSintomas = [
    {
        titulo_sintoma: "Acometimento de nervos com espessamento neural",
        descricao_sintoma: "Alteração nos nervos com espessamento, podendo causar dor e perda de função.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Adenite dolorosa",
        descricao_sintoma: "Inflamação dolorosa dos gânglios linfáticos.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Anorexia",
        descricao_sintoma: "Perda de apetite ou desejo de comer.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Antecedentes de exposição à infecção pelo vírus rábico",
        descricao_sintoma: "Histórico de contato com o vírus da raiva.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Artralgia",
        descricao_sintoma: "Dor nas articulações sem inflamação visível.",
        grupo_sintoma: "musculoesqueléticos",
        tags: "músculos, articulações, ossos, artralgia, dor"
    },
    {
        titulo_sintoma: "Artrite intensa",
        descricao_sintoma: "Inflamação severa das articulações, causando dor e rigidez.",
        grupo_sintoma: "musculoesqueléticos",
        tags: "músculos, articulações, ossos, artralgia, dor"
    },
    {
        titulo_sintoma: "Baciloscopia positiva",
        descricao_sintoma: "Resultado positivo em exame para detectar bacilos, indicando infecção.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Boca seca",
        descricao_sintoma: "Sensação de secura na boca, podendo causar dificuldade para engolir.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Calafrios",
        descricao_sintoma: "Sensação de frio com tremores involuntários.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Cansaço",
        descricao_sintoma: "Sentimento de fadiga ou falta de energia.",
        grupo_sintoma: "infecciosos-febris",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Cefaléia",
        descricao_sintoma: "Dor de cabeça.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Conjuntivite",
        descricao_sintoma: "Inflamação da conjuntiva dos olhos, causando vermelhidão e desconforto.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, mucosa, lesões, úlceras, exantema"
    },
    {
        titulo_sintoma: "Constipação",
        descricao_sintoma: "Dificuldade em evacuar, com fezes duras e secas.",
        grupo_sintoma: "digestivos",
        tags: "digestivo, estômago, diarreia, náusea, vômito"
    },
    {
        titulo_sintoma: "Contraturas musculares localizadas ou generalizadas com ou sem espasmos",
        descricao_sintoma: "Contrações involuntárias e dolorosas dos músculos.",
        grupo_sintoma: "musculoesqueleticos",
        tags: "músculos, articulações, ossos, artralgia, dor"
    },
    {
        titulo_sintoma: "Convulsão",
        descricao_sintoma: "Contrações musculares involuntárias e perda de consciência temporária.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Coriza",
        descricao_sintoma: "Secreção nasal abundante e aquosa.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, pulmão, tosse, dispneia, insuficiência"
    },
    {
        titulo_sintoma: "Deficiência motora flácida súbita",
        descricao_sintoma: "Perda repentina da força muscular com flacidez.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Desconforto respiratório",
        descricao_sintoma: "Dificuldade em respirar, sensação de falta de ar.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, pulmão, tosse, dispneia, insuficiência"
    },
    {
        titulo_sintoma: "Diarréia",
        descricao_sintoma: "Evacuações frequentes e líquidas.",
        grupo_sintoma: "digestivos",
        tags: "digestivo, estômago, diarreia, náusea, vômito"
    },
    {
        titulo_sintoma: "Diplopia",
        descricao_sintoma: "Visão dupla.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Disartria",
        descricao_sintoma: "Dificuldade em articular palavras devido a problemas neuromusculares.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Disfagia",
        descricao_sintoma: "Dificuldade em engolir alimentos ou líquidos.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Dispnéia",
        descricao_sintoma: "Dificuldade em respirar.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, pulmão, tosse, dispneia, insuficiência"
    },
    {
        titulo_sintoma: "Dissociação pulso-temperatura",
        descricao_sintoma: "Descompasso entre a frequência do pulso e a temperatura corporal.",
        grupo_sintoma: "cardiacos-circulatorios",
        tags: "coração, circulação, pulso, hipotensão, hemorragia"
    },
    {
        titulo_sintoma: "Distúrbios neurológicos em adultos",
        descricao_sintoma: "Sintomas variados relacionados ao sistema nervoso em adultos.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Doença Diarréica Aguda",
        descricao_sintoma: "Quadro de diarreia intensa e aguda.",
        grupo_sintoma: "digestivos",
        tags: "digestivo, estômago, diarreia, náusea, vômito"
    },
    {
        titulo_sintoma: "Dor abdominal",
        descricao_sintoma: "Dor localizada na região abdominal.",
        grupo_sintoma: "digestivos",
        tags: "digestivo, estômago, diarreia, náusea, vômito"
    },
    {
        titulo_sintoma: "Dor no peito",
        descricao_sintoma: "Dor na região do peito, podendo indicar problemas cardíacos ou respiratórios.",
        grupo_sintoma: "cardiacos-circulatorios",
        tags: "coração, circulação, pulso, hipotensão, hemorragia"
    },
    {
        titulo_sintoma: "Dor retroorbital",
        descricao_sintoma: "Dor localizada atrás dos olhos.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Dores no corpo",
        descricao_sintoma: "Dor generalizada em várias partes do corpo.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Encefalite",
        descricao_sintoma: "Inflamação do cérebro, podendo causar sintomas neurológicos graves.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Encefalite rábica",
        descricao_sintoma: "Inflamação do cérebro causada pelo vírus da raiva.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Escarro muco-sanguinolento",
        descricao_sintoma: "Secreção respiratória contendo muco e sangue.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, pulmão, tosse, dispneia, insuficiência"
    },
    {
        titulo_sintoma: "Esplenomegalia",
        descricao_sintoma: "Aumento do baço.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Exantema",
        descricao_sintoma: "Erupção cutânea que pode indicar uma infecção ou reação alérgica.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, mucosa, lesões, úlceras, exantema"
    },
    {
        titulo_sintoma: "Exposição a pelo menos uma situação de risco",
        descricao_sintoma: "Histórico de contato com condições ou substâncias de risco para saúde.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Exposição a substâncias químicas",
        descricao_sintoma: "Contato com substâncias químicas, podendo causar sintomas diversos.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Febre",
        descricao_sintoma: "Aumento da temperatura corporal acima do normal.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Fraqueza",
        descricao_sintoma: "Sensação de perda de força ou energia.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Hipotensão",
        descricao_sintoma: "Pressão arterial abaixo do normal.",
        grupo_sintoma: "cardiacos-circulatorios",
        tags: "coração, circulação, pulso, hipotensão, hemorragia"
    },
    {
        titulo_sintoma: "Icterícia",
        descricao_sintoma: "Coloração amarelada da pele e mucosas devido ao excesso de bilirrubina.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Insuficiência respiratória aguda de etiologia não determinada na 1ª semana da doença",
        descricao_sintoma: "Falência respiratória aguda sem causa específica identificada na primeira semana.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, pulmão, tosse, dispneia, insuficiência"
    },
    {
        titulo_sintoma: "Internado com síndrome gripal",
        descricao_sintoma: "Hospitalização devido a sintomas semelhantes aos da gripe.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Intoxicação",
        descricao_sintoma: "Efeito adverso devido à exposição a substâncias tóxicas.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Lesão de pele com alteração de sensibilidade",
        descricao_sintoma: "Dano na pele que altera a percepção sensorial na área afetada.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, mucosa, lesões, úlceras, exantema"
    },
    {
        titulo_sintoma: "Leucopenia",
        descricao_sintoma: "Redução do número de leucócitos no sangue.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Linfoadenopatia retroauricular, occipital e cervical",
        descricao_sintoma: "Aumento dos linfonodos nas regiões retroauricular, occipital e cervical.",
        grupo_sintoma: "infecciosos-febris",
        tags: "infecção, febre, vírus, bactéria, toxinas"
    },
    {
        titulo_sintoma: "Máculo-papular",
        descricao_sintoma: "Erupção cutânea caracterizada por manchas e pápulas.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, mucosa, lesões, úlceras, exantema"
    },
    {
        titulo_sintoma: "Mal-estar",
        descricao_sintoma: "Sensação geral de desconforto e indisposição.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sistêmico, cansaço, dor, icterícia, mal-estar"
    },
    {
        titulo_sintoma: "Malformação congênita em recém-nascidos",
        descricao_sintoma: "Anomalias estruturais presentes ao nascimento.",
        grupo_sintoma: "ginecologicos-congenitos",
        tags: "gravidez, malformação, congênito, recém-nascido"
    },
    {
        titulo_sintoma: "manchas vermelhas na pele",
        descricao_sintoma: "manchas vermelhas",
        grupo_sintoma: "dermatologicos",
        tags: "pintinhas vermelhas, mancha na pele"
    },
    {
        titulo_sintoma: "Manifestações hemorrágicas",
        descricao_sintoma: "Sinais de sangramento anormal, como hematomas e petéquias.",
        grupo_sintoma: "cardiacos-circulatorios",
        tags: "coração, circulação, pulso, hipotensão, hemorragia"
    },
    {
        titulo_sintoma: "Manifestações neurológicas de provável etiologia viral",
        descricao_sintoma: "Sintomas neurológicos que podem ser causados por infecção viral.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Mialgias (dor muscular)",
        descricao_sintoma: "Dor muscular generalizada.",
        grupo_sintoma: "musculoesqueleticos",
        tags: "músculos, articulações, ossos, artralgia, dor"
    },
    {
        titulo_sintoma: "Náuseas",
        descricao_sintoma: "Sensação de enjoo que pode preceder o vômito.",
        grupo_sintoma: "digestivos",
        tags: "digestivo, estômago, diarreia, náusea, vômito"
    },
    {
        titulo_sintoma: "Opistótono",
        descricao_sintoma: "Espasmo muscular que causa arqueamento do corpo.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Paralisia flácida aguda",
        descricao_sintoma: "Perda súbita de força muscular com flacidez.",
        grupo_sintoma: "Neurologicos",
        tags: "nervoso, cérebro, cognição, paralisia, convulsão"
    },
    {
        titulo_sintoma: "Perda do septo nasal",
        descricao_sintoma: "Desaparecimento parcial ou total do septo nasal, que pode levar a problemas respiratórios.",
        grupo_sintoma: "respiratorios",
        tags: "respiração, nasal, congestão, rinite"
    },
    {
        titulo_sintoma: "Petéquias",
        descricao_sintoma: "Pequenas manchas vermelhas ou roxas na pele, causadas por sangramento sob a pele.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, manchas, sangramento, hematomas"
    },
    {
        titulo_sintoma: "Picada de carrapatos",
        descricao_sintoma: "Lesão causada pela mordida de um carrapato, podendo levar a infecções ou reações alérgicas.",
        grupo_sintoma: "dermatologicos",
        tags: "pele, carrapato, infecção, mordida"
    },
    {
        titulo_sintoma: "Presença de bubões",
        descricao_sintoma: "Inchaço dos linfonodos, geralmente causado por infecções bacterianas como a peste.",
        grupo_sintoma: "infecciosos-febris",
        tags: "linfonodos, inchaço, infecção, peste"
    },
    {
        titulo_sintoma: "Prova do laço positiva",
        descricao_sintoma: "Teste diagnóstico que revela a presença de petequias e outras alterações na pele ao aplicar pressão com um laço.",
        grupo_sintoma: "infecciosos-febris",
        tags: "teste diagnóstico, petequias, pressão, laço"
    },
    {
        titulo_sintoma: "Prurido",
        descricao_sintoma: "Sensação de coceira na pele, que pode ser causada por várias condições dermatológicas ou alérgicas.",
        grupo_sintoma: "dermatologicos",
        tags: "coceira, pele, alergias, dermatologia"
    },
    {
        titulo_sintoma: "Ptose palpebral",
        descricao_sintoma: "Queda da pálpebra superior, que pode afetar a visão e ser um sinal de condições neuromusculares.",
        grupo_sintoma: "Neurologicos",
        tags: "pálpebra, visão, neuromuscular, droop"
    },
    {
        titulo_sintoma: "Pulso rápido/irregular",
        descricao_sintoma: "Alterações na frequência ou regularidade do pulso, que podem indicar problemas cardíacos.",
        grupo_sintoma: "cardiacos-circulatorios",
        tags: "pulso, frequência, irregularidade, cardíaco"
    },
    {
        titulo_sintoma: "Rigidez de nuca",
        descricao_sintoma: "Dificuldade em mover o pescoço devido a rigidez muscular, frequentemente associada a meningite ou outras infecções.",
        grupo_sintoma: "Neurologicos",
        tags: "pescoço, rigidez, meningite, dor"
    },
    {
        titulo_sintoma: "Riso sardônico",
        descricao_sintoma: "Contração involuntária dos músculos faciais que causa um sorriso forçado, frequentemente associado a condições neuromusculares.",
        grupo_sintoma: "Neurologicos",
        tags: "sorriso forçado, músculos faciais, neuromuscular, espasmo"
    },
    {
        titulo_sintoma: "Roséolas tíficas",
        descricao_sintoma: "Erupções cutâneas associadas à febre tifóide, geralmente aparecendo como manchas rosadas.",
        grupo_sintoma: "dermatologicos",
        tags: "erupções cutâneas, febre tifóide, manchas rosadas"
    },
    {
        titulo_sintoma: "Saturação de O2 < 95%",
        descricao_sintoma: "Baixa saturação de oxigênio no sangue, indicando possíveis problemas respiratórios.",
        grupo_sintoma: "respiratorios",
        tags: "oxigênio, saturação, respiração, insuficiência"
    },
    {
        titulo_sintoma: "Sinais de irritação meníngea (Kernig e Brudzinski)",
        descricao_sintoma: "Sinais clínicos que indicam irritação das meninges, frequentemente associada a meningite.",
        grupo_sintoma: "Neurologicos",
        tags: "meninges, sinais clínicos, meningite, Kernig, Brudzinski"
    },
    {
        titulo_sintoma: "Sudorese",
        descricao_sintoma: "Excesso de suor, que pode ser causado por várias condições, incluindo febre e estresse.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "suor, febre, estresse, hiperdiaforese"
    },
    {
        titulo_sintoma: "Teste rápido molecular para tuberculose positivo",
        descricao_sintoma: "Resultado positivo em teste molecular indicando a presença de tuberculose.",
        grupo_sintoma: "infecciosos-febris",
        tags: "tuberculose, teste molecular, infecção, febre"
    },
    {
        titulo_sintoma: "Torpor",
        descricao_sintoma: "Estado de sonolência e falta de energia, que pode ser causado por várias condições médicas.",
        grupo_sintoma: "sistemicos-gerais",
        tags: "sonolência, falta de energia, cansaço, mal-estar"
    },
    {
        titulo_sintoma: "Tosse seca",
        descricao_sintoma: "Tosse que não produz muco ou secreção, frequentemente associada a condições respiratórias.",
        grupo_sintoma: "respiratorios",
        tags: "tosse, seca, respiração, vias aéreas"
    },
    {
        titulo_sintoma: "Trismo",
        descricao_sintoma: "Espasmo muscular que causa dificuldade para abrir a boca, frequentemente associado a infecções ou condições neuromusculares.",
        grupo_sintoma: "Sintomas Neuromusculares",
        tags: "espasmo muscular, boca, infecção, dificuldade"
    },
    {
        titulo_sintoma: "Úlcera cutânea",
        descricao_sintoma: "Lesão aberta na pele que pode ser causada por vários fatores, incluindo infecções e doenças crônicas.",
        grupo_sintoma: "dermatologicos",
        tags: "lesão, pele, infecção, crônica"
    },
    {
        titulo_sintoma: "Úlcera na mucosa nasal",
        descricao_sintoma: "Lesão aberta na mucosa nasal, que pode causar dor e desconforto.",
        grupo_sintoma: "respiratorios",
        tags: "mucosa nasal, lesão, dor, desconforto"
    },
    {
        titulo_sintoma: "Visão turva",
        descricao_sintoma: "Perda da clareza visual, que pode ser causada por várias condições oculares ou neurológicas.",
        grupo_sintoma: "Neurologicos",
        tags: "visão, turva, olhos, clareza"
    },
    {
        titulo_sintoma: "Vômitos",
        descricao_sintoma: "Expulsão forçada do conteúdo do estômago pela boca, frequentemente associado a problemas digestivos.",
        grupo_sintoma: "digestivos",
        tags: "estômago, expulsão, náusea, digestivo"
    }
];

