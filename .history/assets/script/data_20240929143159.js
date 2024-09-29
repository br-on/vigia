
let dataDoencas = [
    {
        titulo: "Atendimento Antirrábico",
        descricao: "Medidas de controle e prevenção da raiva humana após exposição ao vírus, geralmente por mordida de animal.",
        sintomas: "Febre, dor no local da mordida, dificuldade para engolir, agitação.",
        prevencao: "Vacinação de animais e humanos, observação de animais mordedores.",
        tratamento: "Soro antirrábico, vacina pós-exposição.",
        tags: "raiva mordida cachorro gato vacina",
        link: "http://www.portalsinan.saude.gov.br/atendimento-antirrabico"
    },
    {
        titulo: "Botulismo",
        descricao: "Intoxicação grave causada por toxinas produzidas pela bactéria Clostridium botulinum.",
        sintomas: "Paralisia flácida aguda, Paralisia muscular, dificuldade para respirar, Diplopia, Visão turva, Ptose palpebral, Boca seca, Disartria, Disfagia, Dispnéia",
        prevencao: "Manter alimentos em boas condições, evitar enlatados estufados.",
        tratamento: "Antitoxina botulínica e suporte respiratório.",
        tags: "botulismo intoxicação enlatado",
        link: "http://www.portalsinan.saude.gov.br/botulismo"
    },
    {
        titulo: "Cólera",
        descricao: "Doença infecciosa aguda causada pela ingestão de água ou alimentos contaminados pela bactéria Vibrio cholerae.",
        sintomas: "Diarreia intensa, vômitos, desidratação rápida.",
        prevencao: "Água tratada, higiene adequada e saneamento.",
        tratamento: "Hidratação oral e intravenosa, antibióticos.",
        tags: "cólera água contaminada saneamento",
        link: "http://www.portalsinan.saude.gov.br/colera"
    },
    {
        titulo: "Dengue",
        descricao: "Doença viral transmitida pelo mosquito Aedes aegypti, que causa febre alta, dores no corpo e nas articulações.",
        sintomas: "Febre, Náuseas, Vômitos, dores musculares, manchas vermelhas na pele, sangramentos, dores no corpo, ",
        prevencao: "Eliminar criadouros do mosquito, uso de repelentes.",
        tratamento: "Hidratação e controle dos sintomas; sem tratamento específico.",
        tags: "dengue febre mosquito Aedes aegypti arboviroses",
        link: "http://www.portalsinan.saude.gov.br/dengue"
    },
    {
        titulo: "Difteria",
        descricao: "Infecção bacteriana que afeta as vias respiratórias, causando inflamação da garganta e dificuldades para respirar.",
        sintomas: "Dor de garganta, febre, dificuldade para respirar, placas esbranquiçadas na garganta.",
        prevencao: "Vacinação, higiene adequada.",
        tratamento: "Antibióticos e antitoxina diftérica.",
        tags: "difteria infecção bacteriana vacina garganta",
        link: "http://www.portalsinan.saude.gov.br/difteria"
    },
    {
        titulo: "Doença de Chagas Aguda",
        descricao: "Infecção causada pelo protozoário Trypanosoma cruzi, transmitido pelo inseto barbeiro.",
        sintomas: "Febre, inchaço no local da picada, aumento do fígado e do baço.",
        prevencao: "Melhoria das condições de moradia, uso de inseticidas.",
        tratamento: "Antiparasitários e controle dos sintomas.",
        tags: "chagas barbeiro protozoário infecção",
        link: "http://www.portalsinan.saude.gov.br/doenca-de-chagas"
    },
    {
        titulo: "Febre Amarela",
        descricao: "Doença viral transmitida por mosquitos, que pode causar febre, dor de cabeça e hemorragias.",
        sintomas: "Febre, dor muscular, icterícia, sangramentos.",
        prevencao: "Vacinação, controle de mosquitos.",
        tratamento: "Hidratação, controle dos sintomas; sem tratamento específico.",
        tags: "febre amarela vacina mosquito icterícia",
        link: "http://www.portalsinan.saude.gov.br/febre-amarela"
    },
    {
        titulo: "Hanseníase",
        descricao: "Doença infecciosa crônica causada pela bactéria Mycobacterium leprae, que afeta a pele e os nervos periféricos.",
        sintomas: "Manchas na pele, perda de sensibilidade, fraqueza muscular.",
        prevencao: "Detecção precoce e tratamento adequado.",
        tratamento: "Poliquimioterapia.",
        tags: "hanseníase lepra manchas pele nervos",
        link: "http://www.portalsinan.saude.gov.br/hanseniase"
    },
    {
        titulo: "Febre de Chikungunya",
        descricao: "Doença viral transmitida pelos mosquitos Aedes aegypti e Aedes albopictus, caracterizada por febre e dor nas articulações.",
        sintomas: "Febre alta, dor intensa nas articulações, dor muscular, dor de cabeça.",
        prevencao: "Evitar acúmulo de água parada e eliminar criadouros de mosquitos.",
        tratamento: "Tratamento sintomático com analgésicos e hidratação.",
        tags: "febre chikungunya mosquito dor nas articulações",
        link: "http://www.portalsinan.saude.gov.br/febre-de-chikungunya"
    },
    {
        titulo: "Febre do Nilo Ocidental",
        descricao: "Doença viral transmitida por mosquitos, que pode causar febre, dores no corpo e, em casos graves, inflamação no cérebro.",
        sintomas: "Febre, dor de cabeça, dores no corpo, rigidez no pescoço.",
        prevencao: "Uso de repelentes e evitar áreas com infestação de mosquitos.",
        tratamento: "Não há tratamento específico, apenas controle dos sintomas.",
        tags: "febre nilo ocidental mosquito inflamação cerebral",
        link: "http://www.portalsinan.saude.gov.br/febre-do-nilo"
    },
    {
        titulo: "Febre Maculosa",
        descricao: "Doença bacteriana transmitida por carrapatos, que pode causar febre alta, dores no corpo e manchas vermelhas na pele.",
        sintomas: "Febre alta, dor muscular, manchas vermelhas na pele.",
        prevencao: "Evitar contato com carrapatos, uso de roupas protetoras.",
        tratamento: "Antibióticos, principalmente a doxiciclina.",
        tags: "febre maculosa carrapato manchas vermelhas antibióticos",
        link: "http://www.portalsinan.saude.gov.br/febre-maculosa"
    },
    {
        titulo: "Febre Tifóide",
        descricao: "Doença bacteriana causada pela ingestão de alimentos ou água contaminados com a bactéria Salmonella Typhi.",
        sintomas: "Febre prolongada, dor abdominal, diarreia ou constipação.",
        prevencao: "Higiene adequada, saneamento básico, vacinação.",
        tratamento: "Antibióticos, principalmente ciprofloxacina ou azitromicina.",
        tags: "febre tifóide salmonella alimentos água contaminada",
        link: "http://www.portalsinan.saude.gov.br/febre-tifoide"
    },
    {
        titulo: "Gestante HIV",
        descricao: "Infecção pelo vírus HIV em mulheres gestantes, que pode ser transmitido ao feto durante a gravidez, parto ou amamentação.",
        sintomas: "Os sintomas podem variar, mas muitas gestantes podem ser assintomáticas.",
        prevencao: "Uso de medicamentos antirretrovirais durante a gestação, parto e amamentação.",
        tratamento: "Uso de antirretrovirais e acompanhamento pré-natal rigoroso.",
        tags: "gestante HIV aids transmissão vertical antirretroviral",
        link: "http://www.portalsinan.saude.gov.br/hiv-gestante"
    },
    {
        titulo: "Hanseníase",
        descricao: "A hanseníase é uma doença infecciosa crônica causada pelo bacilo Mycobacterium leprae, que afeta a pele, os nervos periféricos, as mucosas e os olhos.",
        sintomas: "Lesões na pele, perda de sensibilidade em áreas afetadas, fraqueza muscular, nódulos cutâneos, deformidades nos dedos e nas extremidades.",
        prevencao: "Tratamento precoce dos casos, vacinação com BCG, e uso de medidas de higiene e proteção.",
        tratamento: "Antibióticos como a rifampicina e a dapsona, geralmente administrados por um período de 6 a 12 meses.",
        tags: "lepra, M. leprae, hanseniasis",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-samurais/hanseniase"
    },
    {
        titulo: "Hantavirose",
        descricao: "A hantavirose é uma doença viral transmitida por roedores infectados, causando febre e sintomas respiratórios.",
        sintomas: "Febre alta, dor de cabeça, dor abdominal, dor muscular, sintomas respiratórios graves como dificuldade para respirar.",
        prevencao: "Controle da população de roedores e uso de medidas de proteção ao entrar em áreas infestadas.",
        tratamento: "Cuidados de suporte e tratamento sintomático. Não há tratamento antiviral específico, mas a detecção precoce é crucial.",
        tags: "hantavirus, febre hemorrágica, roedores",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/hantavirose"
    },
    {
        titulo: "Hepatites Virais",
        descricao: "As hepatites virais são inflamações do fígado causadas por vírus, incluindo Hepatite A, B, C, D e E.",
        sintomas: "Febre, dor abdominal, icterícia (amarelamento da pele e dos olhos), cansaço, perda de apetite.",
        prevencao: "Vacinação (para Hepatites A e B), práticas de higiene, evitar compartilhamento de agulhas e relações sexuais desprotegidas.",
        tratamento: "Antivirais para Hepatites B e C, suporte e cuidados para Hepatites A e E. A Hepatite D só ocorre com a Hepatite B.",
        tags: "Hepatite A, Hepatite B, Hepatite C, Hepatite D, Hepatite E",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-samurais/hepatites-virais"
    },
    {
        titulo: "Influenza",
        descricao: "A influenza, ou gripe, é uma infecção viral respiratória causada pelos vírus influenza, que pode causar sintomas graves.",
        sintomas: "Febre, tosse seca, dor de garganta, dor muscular, fadiga, dor de cabeça.",
        prevencao: "Vacinação anual, higiene das mãos, e evitar contato próximo com pessoas doentes.",
        tratamento: "Antivirais como os inibidores de neuraminidase, tratamento sintomático com repouso e hidratação.",
        tags: "gripe, vírus influenza, vacina contra gripe",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/influenza"
    },
    {
        titulo: "Intoxicação Exógena",
        descricao: "Intoxicação exógena refere-se à exposição a substâncias tóxicas vindas de fontes externas, como produtos químicos e alimentos contaminados.",
        sintomas: "Sintomas variam conforme o tóxico, mas podem incluir náuseas, vômitos, dor abdominal, confusão, falência de órgãos.",
        prevencao: "Uso adequado de produtos químicos, segurança alimentar e monitoramento da exposição a substâncias tóxicas.",
        tratamento: "Desintoxicação, tratamento de suporte e medidas específicas conforme o tipo de tóxico envolvido.",
        tags: "intoxicação, produtos químicos, alimentos contaminados",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-samurais/intoxicacao-exogena"
    },
    {
        titulo: "Leishmaniose Tegumentar Americana",
        descricao: "A leishmaniose tegumentar americana é uma infecção parasitária que afeta a pele e as mucosas, causada por protozoários do gênero Leishmania.",
        sintomas: "Lesões cutâneas, úlceras e feridas.",
        prevencao: "Uso de repelentes, proteção contra picadas de insetos e controle de reservatórios naturais.",
        tratamento: "Medicamentos antimoniais, como o antimoniato de meglumina, e em alguns casos, tratamento com antimicrobianos.",
        tags: "leishmaniose, lesão cutânea, parasitas",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/leishmaniose-tegumentar-americana"
    },
    {
        titulo: "Leishmaniose Visceral",
        descricao: "A leishmaniose visceral é uma forma grave da leishmaniose que afeta os órgãos internos, principalmente o fígado e o baço.",
        sintomas: "Febre prolongada, perda de peso, anemia, aumento do fígado e baço.",
        prevencao: "Controle da população de vetores e proteção contra picadas de insetos.",
        tratamento: "Tratamento com antimoniais, como o antimoniato de meglumina, e em alguns casos, uso de anfotericina B.",
        tags: "leishmaniose visceral, leishmania, febre",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/leishmaniose-visceral"
    },
    {
        titulo: "Leptospirose",
        descricao: "A leptospirose é uma doença infecciosa causada pela bactéria Leptospira, transmitida principalmente por contato com água contaminada.",
        sintomas: "Febre, dor de cabeça, dor muscular, calafrios e, em casos graves, icterícia, insuficiência renal.",
        prevencao: "Evitar contato com água potencialmente contaminada, controle de roedores e uso de roupas protetoras.",
        tratamento: "Antibióticos como a doxiciclina ou penicilina, e tratamento de suporte em casos graves.",
        tags: "leptospirose, leptospira, febre",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/leptospirose"
    },
    {
        titulo: "Malária",
        descricao: "A malária é uma doença infecciosa causada por protozoários do gênero Plasmodium, transmitida por mosquitos infectados.",
        sintomas: "Febre cíclica, calafrios, dor de cabeça, dor muscular, anemia.",
        prevencao: "Uso de mosquiteiros, repelentes, e profilaxia com medicamentos antimaláricos em áreas endêmicas.",
        tratamento: "Medicamentos antimaláricos como a cloroquina, artemisinina e derivados.",
        tags: "malária, plasmodium, mosquito",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/malaria"
    },
    {
        titulo: "Meningite",
        descricao: "A meningite é uma inflamação das membranas que revestem o cérebro e a medula espinhal, causada por infecções virais, bacterianas ou fúngicas.",
        sintomas: "Febre, dor de cabeça intensa, rigidez no pescoço, náuseas, vômitos.",
        prevencao: "Vacinação, especialmente contra Neisseria meningitidis e Haemophilus influenzae, e cuidados com higiene.",
        tratamento: "Antibióticos para meningite bacteriana e tratamento sintomático para meningite viral.",
        tags: "meningite, inflamação cerebral, meningococo",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/meningite"
    },
    {
        titulo: "Notificação Individual",
        descricao: "A notificação individual é o processo de registrar e comunicar casos de doenças ou agravos à saúde pública para monitoramento e controle.",
        sintomas: "Não aplicável, refere-se ao processo de notificação de casos.",
        prevencao: "Não aplicável, refere-se ao processo de comunicação.",
        tratamento: "Não aplicável, refere-se ao processo de comunicação.",
        tags: "notificação, vigilância epidemiológica",
        link: "https://www.gov.br/saude/pt-br/assuntos/notificacao-individual"
    },
    {
        titulo: "Paralisia Flácida Aguda/Poliomielite",
        descricao: "A paralisia flácida aguda é uma condição caracterizada pela fraqueza muscular súbita, muitas vezes associada ao poliovírus.",
        sintomas: "Fraqueza muscular súbita, paralisia, dor, febre.",
        prevencao: "Vacinação com a vacina oral contra poliomielite (VOP) ou vacina inativada (VIP).",
        tratamento: "Tratamento de suporte, fisioterapia e monitoramento contínuo.",
        tags: "poliomielite, paralisia, vacina",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/poliomielite"
    },
    {
        titulo: "Peste",
        descricao: "A peste é uma doença infecciosa grave causada pela bactéria Yersinia pestis, transmitida por pulgas de roedores infectados.",
        sintomas: "Febre alta, calafrios, dor de cabeça, linfonodos inchados e doloridos (bubônica).",
        prevencao: "Controle de pulgas e roedores, uso de roupas protetoras e cuidados com a higiene.",
        tratamento: "Antibióticos como a streptomicina ou a doxiciclina, e tratamento de suporte.",
        tags: "peste bubônica, yersinia pestis, roedores",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/peste"
    },
    {
        titulo: "Raiva Humana",
        descricao: "A raiva humana é uma doença viral grave transmitida principalmente por mordidas de animais infectados, como cães.",
        sintomas: "Febre, dor de cabeça, mal-estar, sintomas neurológicos como confusão e paralisia.",
        prevencao: "Vacinação pós-exposição após mordida de animal suspeito e vacinação preventiva para pessoas em risco.",
        tratamento: "Imunização pós-exposição com vacina anti-rábica e imunoglobulina.",
        tags: "raiva, vírus, vacinação",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/raiva-humana"
    },
    {
        titulo: "Rotavírus",
        descricao: "O rotavírus é um vírus que causa gastroenterite aguda, principalmente em crianças, com sintomas como diarreia e vômitos.",
        sintomas: "Diarreia aquosa, vômitos, febre, dor abdominal.",
        prevencao: "Vacinação com a vacina oral contra rotavírus e medidas de higiene.",
        tratamento: "Reidratação oral e tratamento sintomático para diarreia e vômitos.",
        tags: "rotavírus, gastroenterite, vacinação",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/rotavirus"
    },
    {
        titulo: "Rubéola",
        descricao: "A rubéola é uma infecção viral geralmente leve, mas pode causar complicações graves se ocorrer durante a gravidez.",
        sintomas: "Erupção cutânea, febre leve, sintomas semelhantes ao resfriado.",
        prevencao: "Vacinação com a vacina tríplice viral (sarampo, caxumba e rubéola).",
        tratamento: "Tratamento sintomático para febre e erupção cutânea.",
        tags: "rubéola, vírus, vacina tríplice viral",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/rubeola"
    },
    {
        titulo: "Sarampo",
        descricao: "O sarampo é uma doença viral altamente contagiosa que causa erupção cutânea e febre.",
        sintomas: "Febre alta, erupção cutânea, tosse, coriza e conjuntivite.",
        prevencao: "Vacinação com a vacina tríplice viral e isolamento de casos.",
        tratamento: "Tratamento sintomático para febre e sintomas respiratórios.",
        tags: "sarampo, vírus, vacina tríplice viral",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/sarampo"
    },
    {
        titulo: "Sífilis Congênita",
        descricao: "A sífilis congênita é uma infecção transmitida da mãe para o bebê durante a gravidez, causada pela bactéria Treponema pallidum.",
        sintomas: "Problemas de desenvolvimento, erupções cutâneas, anomalias ósseas no recém-nascido.",
        prevencao: "Tratamento adequado da sífilis durante a gravidez e acompanhamento pré-natal.",
        tratamento: "Antibióticos como a penicilina para a mãe e o bebê.",
        tags: "sífilis, Treponema pallidum, infecção congênita",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/sifilis-congenita"
    },
    {
        titulo: "Sífilis em Gestante",
        descricao: "Sífilis em gestante é a infecção pela bactéria Treponema pallidum durante a gravidez, que pode ser transmitida ao bebê.",
        sintomas: "Úlceras genitais, erupções cutâneas, sintomas semelhantes à gripe.",
        prevencao: "Triagem e tratamento de sífilis durante o pré-natal.",
        tratamento: "Antibióticos como a penicilina para a mãe.",
        tags: "sífilis, Treponema pallidum, pré-natal",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/sifilis-em-gestante"
    },
    {
        titulo: "Síndrome da Rubéola Congênita",
        descricao: "A síndrome da rubéola congênita ocorre quando a rubéola é contraída pela mãe durante a gravidez e afeta o feto.",
        sintomas: "Defeitos cardíacos, surdez, catarata, outras anomalias congênitas.",
        prevencao: "Vacinação pré-concepcional com a vacina tríplice viral.",
        tratamento: "Tratamento sintomático e acompanhamento das complicações.",
        tags: "síndrome da rubéola congênita, rubéola, vacinação",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/sindrome-da-rubeola-congenita"
    },
    {
        titulo: "Surto",
        descricao: "Um surto é um aumento repentino no número de casos de uma doença em uma área específica ou população.",
        sintomas: "Dependem da doença específica envolvida.",
        prevencao: "Monitoramento e controle de surtos, vacinação, e medidas de higiene pública.",
        tratamento: "Tratamento depende da doença específica e controle de transmissão.",
        tags: "surto, epidemia, controle de doenças",
        link: "https://www.gov.br/saude/pt-br/assuntos/surtos"
    },
    {
        titulo: "Surto Doenças Transmitidas por Alimentos - DTA",
        descricao: "Surto de doenças transmitidas por alimentos ocorre quando um grande número de pessoas é infectado por patógenos em alimentos contaminados.",
        sintomas: "Diarreia, vômitos, dor abdominal, febre.",
        prevencao: "Segurança alimentar, controle de higiene e práticas adequadas de preparo de alimentos.",
        tratamento: "Tratamento sintomático, reidratação e, se necessário, antibióticos para patógenos específicos.",
        tags: "doenças alimentares, surto, segurança alimentar",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/doencas-transmitidas-por-alimentos"
    },
    {
        titulo: "Tétano Acidental",
        descricao: "O tétano acidental é uma infecção causada pela bactéria Clostridium tetani, geralmente adquirida através de feridas contaminadas.",
        sintomas: "Espasmos musculares, rigidez, dificuldade para engolir, dor muscular.",
        prevencao: "Vacinação com a vacina contra tétano e cuidados com feridas.",
        tratamento: "Imunoglobulina anti-tetânica, antibióticos e tratamento de suporte para espasmos musculares.",
        tags: "tétano, Clostridium tetani, vacinação",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/tetano-acidental"
    },
    {
        titulo: "Tétano Neonatal",
        descricao: "O tétano neonatal é uma forma de tétano que afeta recém-nascidos, geralmente devido à infecção da umbilical.",
        sintomas: "Rigidez muscular, dificuldade para alimentar, irritabilidade.",
        prevencao: "Vacinação adequada da mãe durante a gestação e cuidados com o cordão umbilical.",
        tratamento: "Imunoglobulina anti-tetânica, antibióticos e suporte intensivo.",
        tags: "tétano neonatal, Clostridium tetani, prevenção",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/tetano-neonatal"
    },
    {
        titulo: "Tracoma",
        descricao: "O tracoma é uma infecção ocular crônica causada pela bactéria Chlamydia trachomatis, que pode levar à cegueira se não tratada.",
        sintomas: "Olhos vermelhos, secreção ocular, cicatrização da conjuntiva.",
        prevencao: "Higiene ocular adequada e tratamento com antibióticos.",
        tratamento: "Antibióticos como a azitromicina e cirurgias para corrigir deformidades oculares.",
        tags: "tracoma, Chlamydia trachomatis, infecção ocular",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/tracoma"
    },
    {
        titulo: "Tuberculose",
        descricao: "A tuberculose é uma doença bacteriana infecciosa causada pelo Mycobacterium tuberculosis, afetando principalmente os pulmões.",
        sintomas: "Tosse persistente, febre, suores noturnos, perda de peso.",
        prevencao: "Vacinação com BCG e tratamento adequado de pacientes infectados.",
        tratamento: "Antibióticos como rifampicina, isoniazida, pirazinamida e etambutol.",
        tags: "tuberculose, Mycobacterium tuberculosis, vacinação BCG",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/tuberculose"
    },
    {
        titulo: "Violência Interpessoal/Autoprovocada",
        descricao: "A violência interpessoal e autoprovocada inclui agressões físicas e psicológicas realizadas por indivíduos contra si mesmos ou outros.",
        sintomas: "Lesões físicas, estresse psicológico, comportamentos autodestrutivos.",
        prevencao: "Programas de conscientização, suporte psicológico e estratégias de prevenção de violência.",
        tratamento: "Tratamento psicológico, apoio social e intervenção médica conforme necessário.",
        tags: "violência, agressão, suporte psicológico",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/violencia-interpessoal-autoprovocada"
    },
    {
        titulo: "Zika Vírus",
        descricao: "O zika vírus é um vírus transmitido por mosquitos que pode causar febre e erupção cutânea, com risco de complicações neurológicas e síndromes congênitas.",
        sintomas: "Febre baixa, erupção cutânea, dor nas articulações, conjuntivite, Malformação congênita em recém-nascidos",
        prevencao: "Uso de repelentes, roupas protetoras e eliminação de criadouros de mosquitos.",
        tratamento: "Tratamento sintomático para febre e erupção cutânea.",
        tags: "zika vírus, mosquito, prevenção",
        link: "https://www.gov.br/saude/pt-br/assuntos/doencas-e-agravos/zika-virus"
    },
    
];
