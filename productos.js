const productos = [
  {
    codigo: "7506331302033",
    descripcion: "AUROCAIN c/60 TABS. 300 MG.",
    formula: "Abacavir",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7506353200508",
    descripcion: "NARKSON c/30 TABS. 600/300 MG.",
    formula: "Abacavir+Lamivudina",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7503004908875",
    descripcion: "ACARBOSA (Alpharma) c/30 TABS.  50 MG.",
    formula: "Acarbosa  50mg",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226292410",
    descripcion: "ACARBOSA (Alpharma) c/30 TABS. 100 MG.               ",
    formula: "Acarbosa 100mg",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001162457",
    descripcion: "MYCINADOL CREMA Tubo 60 G. 1.5 G/100 G.",
    formula: "Aceclofenaco (Crema Tópica)",
    laboratorio: "SONS"
  },
  {
    codigo: "803288480706",
    descripcion: "ALMENDERM PLUS CREMA Fco. c/240 ML.",
    formula: "Aceite de almendras dulces+Hidroxido de calcio",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7506022807502",
    descripcion: "ACEITE de BERGAMOTA (Karla-Di) 120 ML. ",
    formula: "Aceite de Bergamota.",
    laboratorio: "NATL.ELITE"
  },
  {
    codigo: "7502259890157",
    descripcion: "ADEVIT EMULSIÓN Sabor Plátano Fco. 240 ML.",
    formula: "Aceite de hígado de bacalao (fuente de vitaminas A y D)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "803288480096",
    descripcion: "BACAOVIT ELIXIR 340 ML.",
    formula: "Aceite de hígado de bacalao (fuente de vitaminas A y D)",
    laboratorio: "BQM"
  },
  {
    codigo: "7502259890027",
    descripcion: "OMEGA LINAZA c/30 CAPS. 1.5 G.",
    formula: "Aceite de Linaza (Omega 3-6-9)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810292",
    descripcion: "OMEGA-3 c/EPA y DHA (Supra) c/72 CAPS. 500 MG.",
    formula: "Aceite de Pescado (Omega 3)",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502008988159",
    descripcion: "AMEGON OMEGA 3 c/60 CAPS. 1200 MG.",
    formula: "Aceite de pescado (Omega 3) en combinación.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008988906",
    descripcion: "AMEGON Kids (OMEGA 3-6-9) c/60 CAPS. 650 MG.",
    formula: "Aceite de Salmón (Omega 3-6-9)",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008988425",
    descripcion: "AMEGON 3-6-9 c/60 CAPS. 1200 MG.",
    formula: "Aceite de Salmón (Omega 3-6-9)",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503181043031",
    descripcion: "OMEGA 3-6-9 (Vida Herbal) c/60 CAPS 1.4 G. ",
    formula: "Aceite de Salmón (Omega 3-6-9)",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7506022805485",
    descripcion: "ACEITE DE OSO SHAMPOO 500 ML.",
    formula: "Aceite Vegetal",
    laboratorio: "DISER"
  },
  {
    codigo: "7506022806550",
    descripcion: "SHAMPOO ACEITE DE AVESTRUZ (Karla Di) 500 ML.",
    formula: "Aceite Vegetal",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501590283956",
    descripcion: "OMG-3 c/60 CAPSULAS 1.6 G.               ",
    formula: "Aceites de: Pescado/Oliva/Linaza/Cártamo (Omega 3-6-9)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502216800984",
    descripcion: "ACEMETACINA (Ultra) c/14 CAPS. L.P. 90 MG.",
    formula: "Acemetacina 90mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216807440",
    descripcion: "ACEMETACINA (Avivia) c/14 CAPS. L.P. 90 MG.",
    formula: "Acemetacina 90mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502009746345",
    descripcion: "URDINAT c/14 CAPS. L.P. 90 MG.",
    formula: "Acemetacina 90mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501471889611",
    descripcion: "FITROMTEC c/20 TABS. 4 MG.",
    formula: "Acenocumarol",
    laboratorio: "TECNOFARMA"
  },
  {
    codigo: "7502211788720",
    descripcion: "MYSNAMOC SOLUCIÓN p/Nebn. c/5 AMPTAS. 2 ML. 200 MG/1 ML.",
    formula: "Acetilcisteína (Sol. p/Inhalación)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501672690399",
    descripcion: "CLOVEX CREMA Tubo c/5 G. 50 MG/1 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "ARLEX"
  },
  {
    codigo: "780083141585",
    descripcion: "SOVICLOR CREMA Tubo c/5 G. 0.05 G/1 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "785118753597",
    descripcion: "LESACLOR CREMA 5% Tubo c/5 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501836003294",
    descripcion: "VIRESTAT CREMA Tubo c/5 G. 0.05 G/100 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501109766468",
    descripcion: "VIROXIL CREMA 5% Color Piel TUBO c/5 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502003389012",
    descripcion: "ZIVERONE CREMA Tubo c/5 G. 50 MG/1 G.",
    formula: "Aciclovir (Crema Tópica)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "75050801",
    descripcion: "ACICLOVIR (Opko) Ungüento Oft. TUBO c/4.5 G. 30 MG/1 G.",
    formula: "Aciclovir (Oftalmico)",
    laboratorio: "EXAKTA"
  },
  {
    codigo: "785118753528",
    descripcion: "LESACLOR SUSP. Fco. 125 ML. 200 MG/5 ML.",
    formula: "Aciclovir 200mg. (Susp. Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502003388053",
    descripcion: "ZIVERONE SUSP. Fco. 120 ML. 200 MG/5 ML.",
    formula: "Aciclovir 200mg. (Susp. Oral).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502247374164",
    descripcion: "LANDVIR c/25 TABS. 200 MG.",
    formula: "Aciclovir 200mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501573900276",
    descripcion: "BRIMEX c/25 COMPS. 200 MG.",
    formula: "Aciclovir 200mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501109765270",
    descripcion: "VIROXIL c/25 TABS. 200 MG.",
    formula: "Aciclovir 200mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502003388060",
    descripcion: "ZIVERONE c/25 TABS. 200 MG.",
    formula: "Aciclovir 200mg. (Tabs. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501573921264",
    descripcion: "BRIMEX c/35 TABS. 400 MG.",
    formula: "Aciclovir 400mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "785120753530",
    descripcion: "LESACLOR c/35 TABS. 400 MG.",
    formula: "Aciclovir 400mg. (Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "780083141165",
    descripcion: "SOVICLOR c/35 TABS. 800 MG.",
    formula: "Aciclovir 800mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001162976",
    descripcion: "ASPITAK-P c/30 COMPS. 100 MG.",
    formula: "Ácido Acetilsalicílico 100mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "7501299308950",
    descripcion: "ÁCIDO ACETILSALICÍLICO (Pharmagen) c/30 TABS. L.R. 100 MG.",
    formula: "Ácido Acetilsalicílico 100mg. (Liberación retardada).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7502216804869",
    descripcion: "ÁCIDO ACETILSALICÍLICO (Avivia) c/30 TABS. L.R. 100 MG.",
    formula: "Ácido Acetilsalicílico 100mg. (Liberación retardada).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503049078489",
    descripcion: "DALABUL c/30 TABS. L.R. 100 MG.",
    formula: "Ácido Acetilsalicílico 100mg. (Liberación retardada).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216798373",
    descripcion: "ÁCIDO ACETILSALICÍLICO (Ultra) c/30 TABS. L.R. 100 MG.",
    formula: "Ácido Acetilsalicílico 100mg. (Liberación retardada).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384504908",
    descripcion: "ÁCIDO ACETILSALICÍLICO (Psicofarma) c/20 TABS. Efervs. 300 MG.",
    formula: "Ácido Acetilsalicílico 300mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "75017125",
    descripcion: "ANTACSAL c/20 TABS. 500 MG.",
    formula: "Ácido Acetilsalicílico 500mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908684",
    descripcion: "ÁCIDO ACETILSALICÍLICO (Alpharma) c/20 TABS. 500 MG.",
    formula: "Ácido Acetilsalicílico 500mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501825300595",
    descripcion: "MIDOLEN Adulto c/30 TABS. 500 MG.",
    formula: "Ácido Acetilsalicílico 500mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502216805484",
    descripcion: "ÁCIDO ACETILSALICÍLICO/CAFEÍNA (Avivia) c/10 SOBS. POLVO 850/65 MG.",
    formula: "Ácido Acetilsalicílico+Cafeína (Polvo).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501563380736",
    descripcion: "BIOTRONATO c/30 TABS. 10 MG.",
    formula: "Ácido Alendrónico 10mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501349014190",
    descripcion: "ÁCIDO ALENDRÓNICO (Amsa) c/30 TABS. 10 MG.",
    formula: "Ácido Alendrónico 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563380750",
    descripcion: "BIOTRONATO c/4 TABS. 70 MG.",
    formula: "Ácido Alendrónico 70mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501349020870",
    descripcion: "ÁCIDO ALENDRÓNICO (Amsa) c/ 4 TABS. 70 MG.",
    formula: "Ácido Alendrónico 70mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501075717860",
    descripcion: "OXIVAG c/4 TABS. 70 MG.",
    formula: "Ácido Alendrónico 70mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502226290157",
    descripcion: "DRONADIL c/4 TABS. 70 MG.",
    formula: "Ácido Alendrónico 70mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501277030620",
    descripcion: "ÁCIDO ALENDRÓNICO/COLECALCIFEROL c/4 TABS. 70 MG/5600 U.I.",
    formula: "Ácido Alendrónico+Colecalciferol (Vitamina D)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501573900399",
    descripcion: "C-MESSEL c/20 TABS. 100 MG.",
    formula: "Ácido Ascórbico  100mg. (Tabs. orales)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502227427156",
    descripcion: "RAMICO c/30 CAPS. 500 MG.",
    formula: "Ácido Ascórbico  500mg. (Tabs/Caps. Orales)",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501590287855",
    descripcion: "VITA KID-C JARABE s/AZÚCAR Sab. Naranja 240 ML.",
    formula: "Ácido Ascórbico (Vitamina-C) Suplemento alimenticio Infantil.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502009744082",
    descripcion: "ANIMALIN C Fco. c/60 Gomitas 3 G.",
    formula: "Ácido Ascórbico (Vitamina-C) Suplemento alimenticio Infantil.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501258206723",
    descripcion: "OXITAL-C c/10 TABS. EFERVS. Sab. Naranja 1000 MG.",
    formula: "Ácido Ascórbico 1g. (Tabs. efervs.)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502223112155",
    descripcion: "NORATOQUIM c/10 TABS. EFERVS. Sabor Naranja 1 G.",
    formula: "Ácido Ascórbico 1g. (Tabs. efervs.)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501590281389",
    descripcion: "ADELITESE c/60 TABS. Masticables 250 MG.",
    formula: "Ácido Ascórbico 250mg. (Tabs. Orales)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502215787613",
    descripcion: "ADRIPHEL c/10 COMPS. EFERVS. Sabor Naranja 2 G.",
    formula: "Ácido Ascórbico 2g. (Tabs. efervs.)",
    laboratorio: "VANQUISH"
  },
  {
    codigo: "7502223111196",
    descripcion: "NORATOQUIM c/10 TABS. EFERVS. Sabor Naranja 2 G.",
    formula: "Ácido Ascórbico 2g. (Tabs. efervs.)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501258207010",
    descripcion: "OXITAL-C FORTE c/10 TABS. EFERVS. Sab. Naranja 2000 MG.",
    formula: "Ácido Ascórbico 2g. (Tabs. efervs.)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501590285110",
    descripcion: "REGRIPAX+VYM c/30 CAPS. 300/250/16.4 MG.",
    formula: "Ácido ascórbico+Echinacea+Zinc",
    laboratorio: "CMD"
  },
  {
    codigo: "7501258215824",
    descripcion: "OXITAL-ZN c/10 TABS. EFERVS. Sab. Naranja 1000/10 MG.",
    formula: "Ácido Ascórbico+Zinc (Tabs. efervs.)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502274791828",
    descripcion: "ENVACAL c/90 TABS. 0.4 MG.",
    formula: "Ácido Fólico 0.4mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501590222214",
    descripcion: "MATERFOL c/90 TABS. 400 MCG.",
    formula: "Ácido Fólico 0.4mg.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502010580969",
    descripcion: "ÁCIDO FÓLICO (Sydenham) c/20 TABS. 5 MG.",
    formula: "Ácido Fólico 5.0mg.",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502010580976",
    descripcion: "ÁCIDO FÓLICO (Sydenham) c/50 TABS. 5 MG.",
    formula: "Ácido Fólico 5.0mg.",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502010580983",
    descripcion: "ÁCIDO FÓLICO (Sydenham) c/92 TABS. 5 MG.",
    formula: "Ácido Fólico 5.0mg.",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7503004908264",
    descripcion: "IRONFOL c/30 TABS. 100 MG/350 MCG.",
    formula: "Ácido Fólico+Hierro",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001037267",
    descripcion: "COFEDEX c/30 GRAG. 30 MG/350 MCG.",
    formula: "Ácido Fólico+Hierro",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502223112353",
    descripcion: "QUIMISTREN c/30 TABS. 100 MG/800 MCG.",
    formula: "Ácido Fólico+Hierro",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502259891130",
    descripcion: "VIFOL+Hierro c/60 TABS. 180 MG.",
    formula: "Ácido Fólico+Hierro (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "637420602004",
    descripcion: "FERLOR A.F. c/30 TABS. 600MG.",
    formula: "Ácido Fólico+Hierro (Suplemento Alimenticio)",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420612607",
    descripcion: "FERLOR A.F. c/60 TABS. 180 MG.",
    formula: "Ácido Fólico+Hierro (Suplemento Alimenticio)",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7503020089275",
    descripcion: "BIOFOLIC-400 c/60 TABS. 190 MG.",
    formula: "Ácido Fólico+Hierro (Suplemento Alimenticio)",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502009747656",
    descripcion: "KURTOSIL CREMA Tubo c/15 G. 20-1 MG/1 G.",
    formula: "Ácido fusídico+Betametasona",
    laboratorio: "MAVER"
  },
  {
    codigo: "803288480300",
    descripcion: "BIOKROLL JARABE 240 ML.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "BQM"
  },
  {
    codigo: "803288480393",
    descripcion: "BIOKROLL c/60 TABS. 1.30 G.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "BQM"
  },
  {
    codigo: "7501590210075",
    descripcion: "GLUTAMAX c/ 60 TABS. 0.62 G.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "CMD"
  },
  {
    codigo: "7501590281778",
    descripcion: "GLUTAMAX GOLD c/60 TABS. 0.66 G.          ",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "CMD"
  },
  {
    codigo: "714908101065",
    descripcion: "ACTIKROLL JARABE Para Niños 250 ML.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501590222221",
    descripcion: "MAXIBILOBA c/60 COMPS. 250 MG.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "CMD"
  },
  {
    codigo: "714908100433",
    descripcion: "ACTIKROLL c/100 TABS. 807 MG.",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908107784",
    descripcion: "ACTIKROLL JARABE Para Niños 250 ML. (Duo Pack)",
    formula: "Ácido glutámico en combinación.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502259892045",
    descripcion: "YUVIGEN c/30 CAPS. 845 MG.",
    formula: "Ácido Hialurónico en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7503181044557",
    descripcion: "ÁCIDO HIALURÓNICO (Vida Herbal) c/60 TABS. 500 MG. ",
    formula: "Ácido Hialurónico en combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7502259891956",
    descripcion: "ÁCIDO HIALURÓNICO/COLÁGENO/BIOTINA Fco. c/30 GOMITAS 4.5 G.",
    formula: "Ácido Hialurónico en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810025",
    descripcion: "COLÁGENO c/AC. HIALURÓNICO (Supra) Polvo Sab. Manzana Bote c/1.1 KG.",
    formula: "Ácido Hialurónico en combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7501299370414",
    descripcion: "ÁCIDO IBANDRÓNICO (Pharmagen) c/1 TABLETA 150 MG.",
    formula: "Ácido Ibandrónico",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7502227874387",
    descripcion: "ESPEFLUN c/50 COMPS. 500 MG.",
    formula: "Ácido Micofenólico (Micofenolato de mofetilo)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502225093438",
    descripcion: "LANFETIL-500 c/50 TABS. 500 MG.",
    formula: "Ácido Micofenólico (Micofenolato de mofetilo)",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7506442703804",
    descripcion: "MICOFENOLATO DE MOFETILO (Camber) c/50 COMS. 500 MG.",
    formula: "Ácido Micofenólico (Micofenolato de mofetilo)",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501836000071",
    descripcion: "AZURON c/20 TABS.  500/50 MG.",
    formula: "Ácido Nalidixico+Fenazopiridina",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502001165533",
    descripcion: "NALIXONE c/20 TABS. 500/50 MG.",
    formula: "Ácido Nalidixico+Fenazopiridina",
    laboratorio: "SONS"
  },
  {
    codigo: "7501825300038",
    descripcion: "AZOGEN c/20 TABS. 500/50 MG.",
    formula: "Ácido Nalidixico+Fenazopiridina",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502227871904",
    descripcion: "REOSVEC c/4 TABLETAS 35 MG.",
    formula: "Ácido Risedrónico 35mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216793446",
    descripcion: "ACIDO RISEDRONICO (Ultra) c/4 TABS. 35 MG.",
    formula: "Ácido Risedrónico 35mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502247377752",
    descripcion: "SERALIS VIP c/10 TABS. 35 MG/2800 UI",
    formula: "Ácido Risedrónico+Colecalcíferol (Vitamina D)",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502223553552",
    descripcion: "DURCOX c/50 CAPS. 250 MG.",
    formula: "Ácido Ursodesoxicólico",
    laboratorio: "SYNTHON"
  },
  {
    codigo: "7506022806574",
    descripcion: "ACONDICIONADOR DE BERGAMOTA (Karla Di) 500 ML.",
    formula: "Acondicionador de Bergamota.",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022807496",
    descripcion: "AGUA DE ROSAS (Karla Di) Loción Facial Fco. 250 ML.",
    formula: "Agua de Rosas",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501384553692",
    descripcion: "ALBENDAZOL (Psicofarma) c/6 TABS. 200 MG.",
    formula: "Albendazol 200mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "75006471",
    descripcion: "VERMISEN SUSP. Fco. 20 ML. 400 MG/20 ML.",
    formula: "Albendazol 20mg/1ml. (Susp. Oral).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501563381443",
    descripcion: "ILIDES SUSPENSIÓN Fco. 20 ML. 20 MG/1 ML.",
    formula: "Albendazol 20mg/1ml. (Susp. Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7503004908646",
    descripcion: "ALBENDAZOL (Alpharma) SUSP. Fco. 20 ML. 2 G/100 ML.",
    formula: "Albendazol 20mg/1ml. (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001165311",
    descripcion: "DIVILTAC Sol. Iny. c/1 AMPTA. 150-10 MG/1 ML.",
    formula: "Algestona+Estradiol 150/10mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "780083141226",
    descripcion: "PERLUDIL Sol. Iny. c/1 AMPTA. 150-10 MG/1 ML.",
    formula: "Algestona+Estradiol 150/10mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502280810179",
    descripcion: "KIDS SHAKE (Supra) Polvo Sabor Vainilla BOTE c/1.1 KG.",
    formula: "Alimento en polvo para preparar malteada (Vitaminas, Minerales y Proteínas.)",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502280810315",
    descripcion: "KIDS SHAKE (Supra) Polvo Sabor Chocolate BOTE c/1.1 KG.",
    formula: "Alimento en polvo para preparar malteada (Vitaminas, Minerales y Proteínas.)",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "714908106145",
    descripcion: "LOEV (Aloe Vera) SUSPENSION Fco. c/1 L.",
    formula: "Aloe vera (Sábila) en Combinación.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501563370690",
    descripcion: "BIONOL c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502227871317",
    descripcion: "ARRAMPLOR c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501384546809",
    descripcion: "ALOPURINOL (Neolpharma) c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7506442703866",
    descripcion: "ALOPURINOL (Camber) c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501563380231",
    descripcion: "ALOPURINOL (Randall) c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501571201986",
    descripcion: "ALZOPRIM c/20 TABS. 300 MG.",
    formula: "Alopurinol 300mg.",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501482201631",
    descripcion: "KENDRAGEL SUSP. Fco. 240 ML. 3.7-4.0 G/100 ML.",
    formula: "Aluminio+Magnesio",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274791361",
    descripcion: "KENDRAGEL c/50 TABS. Masticables 200/200 MG. ",
    formula: "Aluminio+Magnesio",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502001165298",
    descripcion: "EXHANTIL SUSP. Sab. Menta-Limón Fco. 320 ML. 3.7-4-0.5 G/100 ML.",
    formula: "Aluminio+Magnesio+Dimeticona (Susp. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501836005526",
    descripcion: "ULGEL SUSP. Fco. 240 ML. 3.7-4.0-0.5 G/100 ML.",
    formula: "Aluminio+Magnesio+Dimeticona (Susp. Oral).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "780083140595",
    descripcion: "PLUSGEL SUSP. Fco. 360 ML. 3.7-4.0-0.5 G/100 ML.",
    formula: "Aluminio+Magnesio+Dimeticona (Susp. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501836009531",
    descripcion: "ULGEL SUSP. Fco. 360 ML. 3.7-4.0-0.5 G/100 ML.",
    formula: "Aluminio+Magnesio+Dimeticona (Susp. Oral).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "780083140588",
    descripcion: "PLUSGEL c/50 TABS. MAST. Sab. Menta-Limón 200/200/20 MG.",
    formula: "Aluminio+Magnesio+Dimeticona (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501825305200",
    descripcion: "ESPRADEN c/30 TABS. 10/200/200/50 MG.",
    formula: "Aluminio+Magnesio+Dimeticona+Metoclopramida.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009746048",
    descripcion: "VERIGRIN-F SOL. Pediátrico Fco. Gotero 30 ML. 2.5-0.1-15 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Gotas Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083148584",
    descripcion: "AMPIGRIN PFC SOL. Pedtco. Fco. 30 ML. 2.5-0.1-15.0 G/100 ML. y Gotero",
    formula: "Amantadina+Clorfenamina+Paracetamol (Gotas Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501537102968",
    descripcion: "FAYRUS SOL. Infantil Fco. 60 ML. 0.5-0.02-3.00 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502009746116",
    descripcion: "AMATDNA/CLORFNA/PARCTML. (Maver) JBE. INF. Fco. 60 ML. 0.50-0.02-3.0 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083148577",
    descripcion: "AMPIGRIN PFC JBE. Infantil Fco. 60 ML. 0.50-0.02-3.00 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502240450230",
    descripcion: "ROSEL SOLUCIÓN Infantil Fco. 60 ML. 0.5-0.02-3.0 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502006923534",
    descripcion: "BREGAMIN AV JBE. Fco. 60 ML. 0.50-0.02-3.00 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502001165588",
    descripcion: "AMPAMIL JARABE Fco. 60 ML. 0.5-0.02-3.00 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009746062",
    descripcion: "VERIGRIN-F JBE. Infantil Fco. 60 ML. 0.5-0.02-3.00 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501478316974",
    descripcion: "DELIM XR SOL. Infantil Fco. 60 ML. 3.00-0.50-0.02 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Sol./Jbe.).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7503003738879",
    descripcion: "ROSEL-T c/15 TABS. 50/3/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502227875544",
    descripcion: "FROSDEM c/24 CAPS. 300/50/3 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501537103026",
    descripcion: "FAYRUS c/24 CAPS. 50/3/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502216807884",
    descripcion: "AMATDNA/CLORFNA/PARCTML. (Ultra) c/24 CAPS. 50/3/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502001166479",
    descripcion: "AMPAMIL c/24 CAPS. 3/50/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083148676",
    descripcion: "AMPIGRIN PFC Cja. c/24 CAPS. 3/50/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503003738404",
    descripcion: "ROSEL c/24 CAPS. 50/3/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502009746628",
    descripcion: "VERIGRIN-F c/24 CAPS. 50/3/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150013",
    descripcion: "AMPIGRIN PFC Fco. c/24 CAPS. 3/50/300 MG.",
    formula: "Amantadina+Clorfenamina+Paracetamol (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502006923558",
    descripcion: "BREALITAM AV SOL. Fco. 60 ML. 0.50-0.02-0.055-3.0 G/100 ML.",
    formula: "Amantadina+Clorfenamina+Paracetamol+Fenilefrina.",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502006922759",
    descripcion: "MUSALTEN SOL. GOTAS Fco. 30 ML. 750 MG/100 ML.",
    formula: "Ambroxol  7.5mg/1ml. (Sol. Gotas Pediátricas).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502001037137",
    descripcion: "MINISOL SOL. Fco. Gotero 30 ML. 7.5 MG/1 ML.",
    formula: "Ambroxol  7.5mg/1ml. (Sol. Gotas Pediátricas).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7503000422566",
    descripcion: "VIAXOL SOL. Pedtco. Fco. Gotero 30 ML. 7.5 MG/1 ML.",
    formula: "Ambroxol  7.5mg/1ml. (Sol. Gotas Pediátricas).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501299379233",
    descripcion: "AMBROXOL (Pharmagen) SOL. GOTAS Fco. 30 ML. 0.75 G/100 ML.",
    formula: "Ambroxol  7.5mg/1ml. (Sol. Gotas Pediátricas).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "18010",
    descripcion: "LOEXOM SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501563380002",
    descripcion: "BIONOXOL SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501573902706",
    descripcion: "CLOXAN SOLUCIÓN Fco. 120 ML. 15 MG/5 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563380071",
    descripcion: "AMBROXOL (Randall) SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501075713459",
    descripcion: "MUCIBRON SOLUCIÓN Fco. 120 ML. 0.300 G/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502274791743",
    descripcion: "TOBRIN SOLUCIÓN s/Azúcar Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502211788331",
    descripcion: "AMBROXOL (Loeffler) SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502006922742",
    descripcion: "MUSALTEN SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502001033405",
    descripcion: "SOLVO SOL. Fco. 120 ML. 0.300 G/100 ML. (3 MG/1 ML.)",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501277060016",
    descripcion: "AMBROXOL (Apotex) SOL. Fco. 120 ML. 15 MG/5 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502211780014",
    descripcion: "BROXOFFLER SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "780083140960",
    descripcion: "BROSOLAN SOL. Fco. 120 ML. 300 MG/100 ML.",
    formula: "Ambroxol 15mg/5ml. (Sol. Oral Infantil).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501537102111",
    descripcion: "OXOLVAN c/20 TABS. 30 MG.",
    formula: "Ambroxol 30mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7501573900337",
    descripcion: "CLOXAN c/20 COMPS. 30 MG.",
    formula: "Ambroxol 30mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563380323",
    descripcion: "AMBROXOL (Randall) c/20 COMPS. 30 MG.",
    formula: "Ambroxol 30mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563381573",
    descripcion: "BIONOXOL c/20 COMPS. 30 MG.",
    formula: "Ambroxol 30mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7503000422757",
    descripcion: "PENTIBROXIL c/16 CAPS. 500/30 MG.",
    formula: "Ambroxol+Amoxicilina (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007212",
    descripcion: "VANMOXOL c/12 CAPS. 500/30 MG.",
    formula: "Ambroxol+Amoxicilina (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740183",
    descripcion: "PENTIBROXIL c/12 CAPS. 500/30 MG.",
    formula: "Ambroxol+Amoxicilina (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083141738",
    descripcion: "GIMABROL c/12 CAPS. 500/30 MG.",
    formula: "Ambroxol+Amoxicilina (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503001007205",
    descripcion: "VANMOXOL SUSP. Fco. 90 ML. 250-15 MG/5 ML.",
    formula: "Ambroxol+Amoxicilina (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503000422764",
    descripcion: "PENTIBROXIL SUSP. Fco. 90 ML. 250-15 MG/5 ML.",
    formula: "Ambroxol+Amoxicilina (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009740770",
    descripcion: "CEFABROXIL SUSP. Fco. 75 ML. 250-15 MG/5 ML.",
    formula: "Ambroxol+Cefalexina.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741500",
    descripcion: "CEFABROXIL c/15 TABS. 500/30 MG.",
    formula: "Ambroxol+Cefalexina.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825300342",
    descripcion: "EBROMIN-P SOL. Fco. 120 ML. 150 MG-100 MCG/100 ML.",
    formula: "Ambroxol+Clenbuterol (Sol. Oral Infantil).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "785118754242",
    descripcion: "SUPRATEX DAC SOL. Fco. 120 ML. 300-600 MG/100 ML.",
    formula: "Ambroxol+Levodropropizina.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009749766",
    descripcion: "VIAXOL-LVDP SOL. Fco. 120 ML. 300-600 MG/100 ML.",
    formula: "Ambroxol+Levodropropizina.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502003381672",
    descripcion: "DIZOLVIN FLUX SOL. Fco. 120 ML. 300-600 MG/100 ML.",
    formula: "Ambroxol+Levodropropizina.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501075723830",
    descripcion: "ATROXOLAM JBE. Fco. 150 ML. 7.0-1.5 MG/1 ML.",
    formula: "Ambroxol+Teofilina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502009747168",
    descripcion: "FEDRIMIN SOL. Fco. 150 ML. 0.700-0.150 G/100 ML.",
    formula: "Ambroxol+Teofilina",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349020740",
    descripcion: "AMIKACINA Pediátrico (Amsa) Sol. Iny. c/1 AMPTA. Plástico 100 MG/2 ML.",
    formula: "Amikacina 100mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349020603",
    descripcion: "AMIKACINA Pediátrico (Amsa) Sol. Iny. c/2 AMPTAS. Plástico 100 MG/2 ML.",
    formula: "Amikacina 100mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501125105104",
    descripcion: "AMK Pedíátrico Sol. Iny. c/1 AMPTA. 100 MG/2 ML.",
    formula: "Amikacina 100mg.",
    laboratorio: "PISA"
  },
  {
    codigo: "7501349021440",
    descripcion: "AMIKACINA (Amsa) Sol. Iny. c/1 AMPTA. 500 MG/2 ML.",
    formula: "Amikacina 500mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502268545635",
    descripcion: "AMK Sol. Iny. c/1 AMPTA. 500 MG/2 ML.",
    formula: "Amikacina 500mg.",
    laboratorio: "PISA"
  },
  {
    codigo: "7501125105135",
    descripcion: "AMK Sol. Iny. c/1 AMPTA. 500 MG/2 ML.",
    formula: "Amikacina 500mg.",
    laboratorio: "PISA"
  },
  {
    codigo: "7501349021488",
    descripcion: "AMIKACINA (Amsa) Sol. Iny. c/2 AMPTAS. 500 MG/2 ML.",
    formula: "Amikacina 500mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "637420602028",
    descripcion: "RELDESS c/30 TABS. 600 MG.",
    formula: "Aminoácidos GABA+Lecitina de Soya+Vitamina C",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7506331302187",
    descripcion: "NORABINDO c/20 TABS. 200 MG.",
    formula: "Amiodarona (Tabs. Orales).",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "780083146603",
    descripcion: "COLLIDIPIN c/10 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009744136",
    descripcion: "NORDIVER c/10 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502209858152",
    descripcion: "ZAGAPSOL c/10 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7500464881700",
    descripcion: "AMLODIPINO (Umback) c/30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "UMBACK"
  },
  {
    codigo: "7502227872680",
    descripcion: "PRESLOPIN c/10 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216793231",
    descripcion: "AMLODIPINO (Ultra) c/ 10 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502209858176",
    descripcion: "ZAGAPSOL c/20 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502227872697",
    descripcion: "PRESLOPIN c/30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502209858169",
    descripcion: "ZAGAPSOL c/30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501493865921",
    descripcion: "LALPRO c/30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502216804661",
    descripcion: "AMLODIPINO (Avivia) c/ 30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216793675",
    descripcion: "AMLODIPINO (Ultra) c/ 30 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216793378",
    descripcion: "AMLODIPINO (Ultra) c/100 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804814",
    descripcion: "AMLODIPINO (Avivia) c/100 TABS. 5 MG.",
    formula: "Amlodipino  5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503001007281",
    descripcion: "VANDIX c/12 CAPS. 250 MG.               ",
    formula: "Amoxicilina  250mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503000422733",
    descripcion: "PENTICLOX SUSP. Fco. 60 ML. 250 MG/5 ML.",
    formula: "Amoxicilina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503000422726",
    descripcion: "PENTICLOX SUSP. Fco. 90 ML. 250 MG/5 ML.",
    formula: "Amoxicilina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007069",
    descripcion: "VANDIX SUSP. Fco. 75 ML. 250 MG/5 ML.               ",
    formula: "Amoxicilina  250mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740527",
    descripcion: "PENTICLOX SUSP. Fco. 75 ML. 250 MG/5 ML.",
    formula: "Amoxicilina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083141875",
    descripcion: "GIMALXINA SUSP. Fco. 75 ML. 250 MG/5 ML.",
    formula: "Amoxicilina  250mg. (Susp. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501349021570",
    descripcion: "AMOXICILINA (Amsa) c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501385490521",
    descripcion: "AMOXICILINA (Hormona) c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7503001007052",
    descripcion: "VANDIX c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009745973",
    descripcion: "AMOXICILINA (Medigen) c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001163904",
    descripcion: "ACROXIL c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7503001009407",
    descripcion: "VANDIX c/15 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "780083140663",
    descripcion: "GIMALXINA c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503000422702",
    descripcion: "PENTICLOX c/12 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501385490293",
    descripcion: "ORMOCYN T-5 c/20 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "780083144876",
    descripcion: "GIMALXINA c/60 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083148379",
    descripcion: "GIMALXINA c/90 CAPS. 500 MG.",
    formula: "Amoxicilina  500mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503000422740",
    descripcion: "PENTICLOX SUSP. Fco. 60 ML. 500 MG/5 ML.",
    formula: "Amoxicilina  500mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021839",
    descripcion: "AMOXICILINA (Amsa) SUSP. Fco. 75 ML. 500 MG/5 ML.",
    formula: "Amoxicilina  500mg. (Susp. Oral).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007076",
    descripcion: "VANDIX SUSP. Fco. 75 ML. 500 MG/5 ML.               ",
    formula: "Amoxicilina  500mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "780083141882",
    descripcion: "GIMALXINA SUSP. Fco. 75 ML. 500 MG/5 ML.",
    formula: "Amoxicilina  500mg. (Susp. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501349029774",
    descripcion: "AMOXI./AC.CLAVCO. (Amsa) SUSP. Pedtca. Fco. 60 ML. 125-31.25 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 125/31.25mg. (Susp. Oral)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007236",
    descripcion: "VALCLAN SUSP. Pediátrico Fco. 60 ML. 125-31.25 MG/5 ML.       ",
    formula: "Amoxicilina+Ácido Clavulánico 125/31.25mg. (Susp. Oral)",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740206",
    descripcion: "CLAMOXIN SUSP. Fco. 60 ML. 125-31.25 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 125/31.25mg. (Susp. Oral)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001008615",
    descripcion: "VALCLAN 12H. SUSP. Pediátrico Fco. 40 ML. 200-28.5 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 200/28.50mg. (Susp. Oral 12H)",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740497",
    descripcion: "CLAMOXIN 12H SUSP. Pediátrico Fco. 40 ML. 200-28.5 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 200/28.50mg. (Susp. Oral 12H)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349029255",
    descripcion: "AMOXI./AC.CLAVCO. (Amsa) SUSP. Fco. 50 ML. 200-28.57 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 200/28.50mg. (Susp. Oral 12H)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349029408",
    descripcion: "GRAMAXIN SUSP. Fco. 60 ML. 250-62.5 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 250/62.50mg. (Susp. Oral).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007175",
    descripcion: "VALCLAN SUSP. Junior Fco. 60 ML. 250-62.5 MG/5 ML.  ",
    formula: "Amoxicilina+Ácido Clavulánico 250/62.50mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740213",
    descripcion: "CLAMOXIN SUSP. Fco. 60 ML. 250-62.50 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 250/62.50mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349029828",
    descripcion: "AMOXI./AC.CLAVCO. (Amsa) SUSP. Fco. 50 ML. 400-57.14 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 400/57mg. (Susp. Oral 12H).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007182",
    descripcion: "VALCLAN 12H. SUSP. Junior Fco. 60 ML. 400-57 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 400/57mg. (Susp. Oral 12H).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740503",
    descripcion: "CLAMOXIN 12H SUSP. Junior Fco. 50 ML. 400-57 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 400/57mg. (Susp. Oral 12H).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007199",
    descripcion: "VALCLAN c/10 TABS. 500/125 MG.               ",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503001007724",
    descripcion: "VALCLAN c/12 TABS. 500/125 MG.               ",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502001161559",
    descripcion: "ACARBIXIN c/10 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501349011243",
    descripcion: "GRAMAXIN c/12 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "780083149178",
    descripcion: "GIMACLAV c/10 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009740992",
    descripcion: "CLAMOXIN c/10 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001008684",
    descripcion: "VALCLAN c/16 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009745010",
    descripcion: "CLAMOXIN c/12 TABS. 500/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 500/125mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001009414",
    descripcion: "VALCLAN 12H. SUSP. Fco. 50 ML. 600-42.90 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 600/42.9mg. (Susp. Oral 12H).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009745140",
    descripcion: "CLAMOXIN-S SUSP. Fco. 50 ML. 600-42.90 MG/5 ML.",
    formula: "Amoxicilina+Ácido Clavulánico 600/42.9mg. (Susp. Oral 12H).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349026230",
    descripcion: "AMOXI./AC.CLAVCO. (Amsa) c/10 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001164468",
    descripcion: "ACARBIXIN LQS c/10 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "SONS"
  },
  {
    codigo: "7503001007250",
    descripcion: "VALCLAN 12H. c/10 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009740763",
    descripcion: "CLAMOXIN 12H c/10 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083149185",
    descripcion: "GIMACLAV 12h c/10 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503001009117",
    descripcion: "VALCLAN 12H. c/14 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009746055",
    descripcion: "CLAMOXIN 12H c/14 TABS. 875/125 MG.",
    formula: "Amoxicilina+Ácido Clavulánico 875/125mg. (Tabs. Orales 12H).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007120",
    descripcion: "MEXAPIN SUSP. Fco. 60 ML. 125 MG/5 ML.",
    formula: "Ampicilina  125mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503001007274",
    descripcion: "MEXAPIN SUSP. Fco. 90 ML. 250 MG/5 ML.",
    formula: "Ampicilina  250mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503000422719",
    descripcion: "PENTIVER SUSP. Fco. 90 ML. 250 MG/5 ML.",
    formula: "Ampicilina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007137",
    descripcion: "MEXAPIN SUSP. Fco. 60 ML. 250 MG/5 ML.",
    formula: "Ampicilina  250mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502001161191",
    descripcion: "EXPICIN SUSP. Fco. 90 ML. 250 MG/5 ML.",
    formula: "Ampicilina  250mg. (Susp. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7503001007151",
    descripcion: "MEXAPIN c/20 CAPS. 250 MG.",
    formula: "Ampicilina  250mg. (Tabs/Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503000422696",
    descripcion: "PENTIVER SUSP. Fco. 60 ML. 500 MG/5 ML.",
    formula: "Ampicilina  500mg. (Susp. Oral)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007144",
    descripcion: "MEXAPIN SUSP. Fco. 60 ML. 500 MG/5 ML.               ",
    formula: "Ampicilina  500mg. (Susp. Oral)",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503000422658",
    descripcion: "PENTIVER c/12 CAPS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021594",
    descripcion: "AMPICILINA (Amsa) c/20 TABS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007168",
    descripcion: "MEXAPIN c/20 CAPS. 500 MG.               ",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502001165328",
    descripcion: "EXPICIN c/20 CAPS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "SONS"
  },
  {
    codigo: "7503000422665",
    descripcion: "PENTIVER c/20 TABS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501070614041",
    descripcion: "PENBRITIN c/20 CAPS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7501471888430",
    descripcion: "AMPITECNO-T c/20 TABS. 500 MG.",
    formula: "Ampicilina  500mg. (Tabs/Caps. Orales)",
    laboratorio: "TECNOFARMA"
  },
  {
    codigo: "7501349022874",
    descripcion: "AMPICILINA (Amsa) Sol. Iny. c/1 FCO. AMP. 1 G/5 ML.",
    formula: "Ampicilina 1g. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503000422672",
    descripcion: "PENTIVER c/8 TABLETAS 1 G.",
    formula: "Ampicilina 1g. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001008219",
    descripcion: "MEXAPIN c/10 TABLETAS 1 G.",
    formula: "Ampicilina 1g. (Tabs. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7501349022881",
    descripcion: "AMPICILINA (Amsa) c/10 TABLETAS 1 G.",
    formula: "Ampicilina 1g. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001163799",
    descripcion: "ZUMORIN c/12 TABLETAS 1 G.",
    formula: "Ampicilina 1g. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001166981",
    descripcion: "LAUR Adulto Sol. Iny. c/3 FCO. AMP. 500 MG. y 3 Jeringas.",
    formula: "Ampicilina+Metamizol+Guaifenesina+Lidocaina+Clorfenamina (ADULTO).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083140922",
    descripcion: "AMPIGRIN Adulto Sol. Iny. c/3 FCO. AMP. 500 MG. y 3 Jeringas.",
    formula: "Ampicilina+Metamizol+Guaifenesina+Lidocaina+Clorfenamina (ADULTO).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001167001",
    descripcion: "LAUR Infantil Sol. Iny. c/3 FCO. AMP. 250 MG. y 3 Jeringas.",
    formula: "Ampicilina+Metamizol+Guaifenesina+Lidocaina+Clorfenamina (INFANTIL).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083140939",
    descripcion: "AMPIGRIN Infantil Sol. Iny. c/3 FCO. AMP. 250 MG. y 3 Jeringas.",
    formula: "Ampicilina+Metamizol+Guaifenesina+Lidocaina+Clorfenamina (INFANTIL).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506313800403",
    descripcion: "ZOITOL c/28 TABS. 1 MG.",
    formula: "Anastrozol",
    laboratorio: "RAAM"
  },
  {
    codigo: "7506335700033",
    descripcion: "ACETRAZ c/28 TABS. 1 MG.",
    formula: "Anastrozol",
    laboratorio: "ACCORD"
  },
  {
    codigo: "637420410890",
    descripcion: "SOLCLIN-CB Jabón líquido antiséptico p/Manos al 1% Fco. 120 ML. ",
    formula: "Antiséptico a base de Cloruro de benzalconio (Jabón).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501723501568",
    descripcion: "ECODINE-BF Solución Antiséptica Bucofaríngeo Cja/Fco. 120 ML. 8 G/100 ML.",
    formula: "Antiséptico a base de Yodopovidona (Solución Bucofaríngea).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "637420200804",
    descripcion: "SOLVIN Solución Antiséptica Bucofaríngea Fco. 120 ML. 8 G/100 ML.",
    formula: "Antiséptico a base de Yodopovidona (Solución Bucofaríngea).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420200811",
    descripcion: "SOLVIN Solución Antiséptica Espuma Fco. 120 ML. 8 G/100 ML.",
    formula: "Antiséptico a base de Yodopovidona (Solución Espuma).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501723501612",
    descripcion: "ECODINE-S Solución Antiséptica Tópica Cja/Fco. 120 ML. 10 G/100 ML.",
    formula: "Antiséptico a base de Yodopovidona (Solución Tópica).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "637420200897",
    descripcion: "SOLVIN Solución Antiséptica Tópica Fco. 120 ML. 10 G/100 ML.",
    formula: "Antiséptico a base de Yodopovidona (Solución Tópica).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502009747205",
    descripcion: "BENZOCAÍNA (Maver) GEL Sabor Uva Tubo c/10 G. 0.1 G/1 G.",
    formula: "Antiséptico y anestésico bucal a base de Benzocaína (Gel).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747670",
    descripcion: "BENZOCAÍNA (Maver) SOL. Bucal 20% Fco. 9.7 ML.",
    formula: "Antiséptico y anestésico bucal a base de Benzocaína (Solución).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506442700391",
    descripcion: "ARIPIPRAZOL (Camber) c/10 TABS. 15 MG.",
    formula: "Aripiprazol 15mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700407",
    descripcion: "ARIPIPRAZOL (Camber) c/20 TABS. 15 MG.",
    formula: "Aripiprazol 15mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506335702938",
    descripcion: "ATFREN c/10 TABS. 30 MG.",
    formula: "Aripiprazol 30mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "803288480010",
    descripcion: "ARNIDOL CREMA TUBO c/35 G.",
    formula: "Árnica compuesta",
    laboratorio: "BQM"
  },
  {
    codigo: "803288480683",
    descripcion: "ARNIDOL SPORT Roll-On Fco. c/60 G.",
    formula: "Árnica compuesta",
    laboratorio: "BQM"
  },
  {
    codigo: "7503002773680",
    descripcion: "SUANCADOL GEL CORPORAL Tubo c/100 G.",
    formula: "Árnica compuesta",
    laboratorio: "SUANCA"
  },
  {
    codigo: "714908105650",
    descripcion: "SALUDOL GEL TOPICO Tubo c/100 G.",
    formula: "Árnica compuesta",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501249600424",
    descripcion: "ATAZANAVIR (TempusPharma) c/30 CAPS. 300 MG.",
    formula: "Atazanavir",
    laboratorio: "IFA"
  },
  {
    codigo: "656599040103",
    descripcion: "INTERNOL c/ 28 TABS.  50 MG.",
    formula: "Atenolol  50mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501109761746",
    descripcion: "ATENOLOL (Perrigo) c/30 TABS. 50 MG.",
    formula: "Atenolol  50mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501825301721",
    descripcion: "BIOFILEN c/28 TABS.  50 MG.",
    formula: "Atenolol  50mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "656599040110",
    descripcion: "INTERNOL c/ 28 TABS. 100 MG.",
    formula: "Atenolol 100mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501825301752",
    descripcion: "BIOFILEN c/28 TABS. 100 MG.",
    formula: "Atenolol 100mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502216806504",
    descripcion: "ATOMOXETINA (Ultra) c/14 CAPS. 10 MG.",
    formula: "Atomoxetina  10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227879832",
    descripcion: "DANPRINON c/14 CAPS. 10 MG. ",
    formula: "Atomoxetina  10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216806511",
    descripcion: "ATOMOXETINA (Ultra) c/14 CAPS. 40 MG.",
    formula: "Atomoxetina  40mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216806535",
    descripcion: "ATOMOXETINA (Ultra) c/14 CAPS. 60 MG.",
    formula: "Atomoxetina  60mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502001163881",
    descripcion: "DYLAXYL c/20 TABS. 10 MG.",
    formula: "Atorvastatina 10mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009744884",
    descripcion: "ODIVITOR c/20 TABS. 10 MG.",
    formula: "Atorvastatina 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009744877",
    descripcion: "ODIVITOR c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349024526",
    descripcion: "ATORVASTATINA (Amsa) c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227877661",
    descripcion: "DESLOCRON c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009748332",
    descripcion: "ATORVASTATINA (Medigen) c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501384548520",
    descripcion: "ATORVASTATINA (Psicofarma) c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502247373228",
    descripcion: "BACAT c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7503028771615",
    descripcion: "ATORVASTATINA (Suanca) c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7503044633096",
    descripcion: "ATORVASTATINA (Corne) c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7502001167070",
    descripcion: "DYLAXYL c/20 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "785120754810",
    descripcion: "ATORLIP c/10 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216791275",
    descripcion: "ATORVASTATINA (Ultra) c/30 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502247373495",
    descripcion: "BACAT c/30 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7503044633102",
    descripcion: "ATORVASTATINA (Corne) c/30 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7503044633119",
    descripcion: "ATORVASTATINA (Corne) c/60 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7503028771660",
    descripcion: "ATORVASTATINA (Suanca) c/60 TABS. 20 MG.",
    formula: "Atorvastatina 20mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501349028913",
    descripcion: "ATORVASTATINA (Amsa) c/10 TABS. 40 MG.",
    formula: "Atorvastatina 40mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501277034123",
    descripcion: "ATORVASTATINA (Apotex) c/ 7 TABS. 40 MG.",
    formula: "Atorvastatina 40mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "780083148942",
    descripcion: "COLLIPROL c/15 TABS. 40 MG. ",
    formula: "Atorvastatina 40mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001167049",
    descripcion: "DYLAXYL c/20 TABS. 40 MG.",
    formula: "Atorvastatina 40mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "785120754858",
    descripcion: "ATORLIP c/10 TABS. 40 MG.",
    formula: "Atorvastatina 40mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502256040227",
    descripcion: "GENEAKEL Sol. Iny. I.V. c/1 FCO. AMP. 5 ML. 7.5 MG/1 ML.",
    formula: "Atosiban 37.5mg.",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7506022800084",
    descripcion: "JABÓN de AVENA (Karla Di) Barra c/100 G.",
    formula: "Avena (Jabón)",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022800091",
    descripcion: "JABÓN de AVENA y MIEL (Karla Di) Barra c/100 G.",
    formula: "Avena+Miel de abeja (Jabón).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501258210393",
    descripcion: "AZITROMICINA (Serral) SUSP. Fco. 15 ML. 200 MG/5 ML.",
    formula: "Azitromicina 200mg. (Susp. Oral).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501299307304",
    descripcion: "AZITROMICINA (Pharmagen) SUSP. 600 MG/15 ML. (200mg/5ml.)",
    formula: "Azitromicina 200mg. (Susp. Oral).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7502211783527",
    descripcion: "SICALAN SUSP. Fco. 30 ML. 4 G/100 ML.",
    formula: "Azitromicina 200mg. (Susp. Oral).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502240450018",
    descripcion: "CHARYN c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "780083143275",
    descripcion: "ZERTALIN c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502226291901",
    descripcion: "AZITROMICINA (Alpharma) c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908387",
    descripcion: "AZIPHAR c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502227871348",
    descripcion: "CRAZTRONIN  c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501842900341",
    descripcion: "SAMITROGEN c/3 CAPS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7501075718096",
    descripcion: "MARZIVAG c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7503004908585",
    descripcion: "AZIPHAR c/4 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502240450025",
    descripcion: "CHARYN c/4 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502227871355",
    descripcion: "CRAZTRONIN c/4 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "785118753757",
    descripcion: "AZIBIOT c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501258210386",
    descripcion: "AZITROMICINA (Serral) c/3 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501842900150",
    descripcion: "SAMITROGEN c/6 CAPS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "780083143176",
    descripcion: "ZERTALIN c/6 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501842900167",
    descripcion: "SAMITROGEN c/9 CAPS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "780083149338",
    descripcion: "ZERTALIN c/9 TABS. 500 MG.",
    formula: "Azitromicina 500mg. (Tabs/Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506022800886",
    descripcion: "JABON de AZUFRE (Karla Di) Barra c/100 G.",
    formula: "Azufre (Jabón)",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502259892175",
    descripcion: "ENTERIVER c/12 CAPS. 468 MG.",
    formula: "Bacillus Clausii, Esporas de (Suplemento alimenticio).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502004401621",
    descripcion: "OFFENICORT POLVO pH 5.75 c/1 SOBRE 90 G. 86.85 G.",
    formula: "Baño coloide (Harina de soya)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7506353200560",
    descripcion: "ALISOY POLVO c/1 SOBRE 90 G. 1.8-86.85/90.0 G.",
    formula: "Baño coloide (Harina de soya+Polividona)",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7503028771684",
    descripcion: "BAÑO COLOIDE (Suanca) POLVO pH 5.75 c/1 SOBRE 90 G. 96.5-2.0 G/100 G.",
    formula: "Baño coloide (Harina de soya+Polividona)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501672690139",
    descripcion: "RIBAN POLVO pH 5.75 c/1 SOBRE 90 G. 96.5-2.0 G/100 G.",
    formula: "Baño coloide (Harina de soya+Polividona)",
    laboratorio: "ARLEX"
  },
  {
    codigo: "7503028771745",
    descripcion: "SUADERM POLVO pH 5.75 c/1 SOBRE 90 G. 96.5-2.0 G/100 G.",
    formula: "Baño coloide (Harina de soya+Polividona)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501258205078",
    descripcion: "BAÑO COLOIDE (Serral) POLVO pH 5.75 c/1 SOBRE c/90 G. 86.85-1.80 G/90 G.",
    formula: "Baño coloide (Harina de soya+Polividona)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501562762922",
    descripcion: "HFA-DOBIPRO AEROSOL p/Inhalación c/200 DOSIS 50 MCG.",
    formula: "Beclometasona  50mcg. (Aerosol p/Inhalación Bucal)",
    laboratorio: "SALUS"
  },
  {
    codigo: "7502213042752",
    descripcion: "CLOFHIVEN AEROSOL p/Inhalación c/200 DOSIS  50 MCG.",
    formula: "Beclometasona  50mcg. (Aerosol p/Inhalación Bucal)",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502213042806",
    descripcion: "CLOFHIVEN AEROSOL p/Inhalación c/200 DOSIS 250 MCG.",
    formula: "Beclometasona 250mcg. (Aerosol p/Inhalación Bucal)",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501573906469",
    descripcion: "BIOBEND SOL. Bucofaríngea Fco. 360 ML. 0.15 G/100 ML.",
    formula: "Bencidamina (Solución Enjuague)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503002772768",
    descripcion: "MARACINA SOL. BUCAL Fco. c/360 ML. 150 MG/100 ML.",
    formula: "Bencidamina (Solución Enjuague)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502211784197",
    descripcion: "BENIFLANT SOL. BUCAL Fco. c/360 ML. 0.15 G/100 ML.",
    formula: "Bencidamina (Solución Enjuague)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501573906476",
    descripcion: "BIOBEND SOL. Bucofaringea Fco. Atomizador 30 ML. 0.15 G/100 ML.",
    formula: "Bencidamina (Solución Spray)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503028771400",
    descripcion: "MARACINA SOL. BUCAL Fco. Atomizador c/30 ML. 150 MG/100 ML.",
    formula: "Bencidamina (Solución Spray)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "785118754235",
    descripcion: "ARTROBEN SOL. BUCAL Fco. Atomizador c/30 ML. 45 MG/30 ML.",
    formula: "Bencidamina (Solución Spray)",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502211789031",
    descripcion: "BENIFLANT SOL. BUCAL Fco. Atomizador c/30 ML. 0.15 G/100 ML.",
    formula: "Bencidamina (Solución Spray)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501349025288",
    descripcion: "BENZATINA BPNA. (Amsa) Susp. Iny. c/1 FCO. AMP. 1´200,000 U/5 ML.",
    formula: "Bencilpenicilina Benzatínica 1´200,000 U.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349025271",
    descripcion: "BENZATINA BPNA./BPNA.PROC./BPNA. (Amsa) Susp. Iny. c/1 FCO. AMP. 1´200M UI/3 ML.",
    formula: "Bencilpenicilinas Benzatínica, Procaínica y Cristalina 1´200,000 U. (6:3:3)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501130713240",
    descripcion: "CAPSICOF c/10 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502227424377",
    descripcion: "PHARBEN c/20 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7503004908660",
    descripcion: "BENZONATATO (Alpharma) c/20 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501277078011",
    descripcion: "D-TATO c/20 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277060139",
    descripcion: "BENZONATATO (Apotex) c/20 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501130713189",
    descripcion: "CAPSICOF c/20 CAPS. 100 MG.",
    formula: "Benzonatato (Oral).",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7506022806543",
    descripcion: "JABON de BERGAMOTA (Karla Di) Barra c/100 G.",
    formula: "Bergamota (Jabón).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022806468",
    descripcion: "SHAMPOO DE BERGAMOTA (Karla Di) 500 ML.",
    formula: "Bergamota (Shampoo).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022807632",
    descripcion: "SHAMPOO DE BERGAMOTA (Karla Di) 1 L.",
    formula: "Bergamota (Shampoo).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501384546830",
    descripcion: "BETAHISTINA (Psicofarma) c/20 TABS. 16 MG.",
    formula: "Betahistina 16mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501349029965",
    descripcion: "BETAHISTINA (Amsa) c/30 TABS. 24 MG.",
    formula: "Betahistina 24mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009747373",
    descripcion: "BITENVER c/30 TABS. 24 MG.",
    formula: "Betahistina 24mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384546847",
    descripcion: "BETAHISTINA (Psicofarma) c/30 TABS. 24 MG.",
    formula: "Betahistina 24mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502001166592",
    descripcion: "SONBLEFAM´S CREMA Tubo c/40 G. 0.10 G/100 G.",
    formula: "Betametasona 0.10% (Cutáneo).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502245840852",
    descripcion: "PHEX-BESIL Sol. Iny. c/1 AMPTA. 4.0 MG/1.0 ML.",
    formula: "Betametasona de acción rápida 4mg. (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7502213040819",
    descripcion: "ROIXOTAN Sol. Iny. c/1 AMPTA. 4 MG/1 ML.",
    formula: "Betametasona de acción rápida 4mg. (Sol. Inyectable).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502213040826",
    descripcion: "ROIXOTAN Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Betametasona de acción rápida 8mg. (Sol. Inyectable).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502009740916",
    descripcion: "ERISPAN Sol. Iny. c/1 AMPTA. 8 MG/2 ML. y Jeringa.",
    formula: "Betametasona de acción rápida 8mg. (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001164833",
    descripcion: "DISON´S DEX Susp. Iny. c/1 AMPTA. 5-2 MG/1 ML. y Jeringa.",
    formula: "Betametasona de acción rápida y prolongada 5/2mg. (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502256040166",
    descripcion: "KRAFASIN CREMA Tubo c/40 G. 0.05-0.10-1.0 G/100 G.",
    formula: "Betametasona+Clotrimazol+Gentamicina",
    laboratorio: "DANKEL"
  },
  {
    codigo: "780083148966",
    descripcion: "GELMICIN CREMA Tubo c/40 G. 0.05-0.10-1 G/100 G.",
    formula: "Betametasona+Clotrimazol+Gentamicina",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501571201511",
    descripcion: "BETRIGEN CREMA Tubo c/25 G. 0.050-0.100-1.0 G/100 G.",
    formula: "Betametasona+Clotrimazol+Gentamicina",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501836003614",
    descripcion: "PRUBAGEN CREMA Tubo c/40 G. 0.05-0.1-1.0 %. ",
    formula: "Betametasona+Clotrimazol+Gentamicina",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502001166066",
    descripcion: "BARMICIL Compuesto CREMA Tubo c/40 G. 50mg-1g-0.1g/100 G.",
    formula: "Betametasona+Clotrimazol+Gentamicina",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573900412",
    descripcion: "BIFAREN c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209858145",
    descripcion: "FIBROXOL c/10 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502209858121",
    descripcion: "FIBROXOL c/20 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563380064",
    descripcion: "BIONOLIP c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502209858138",
    descripcion: "FIBROXOL c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563380149",
    descripcion: "BEZAFIBRATO (Randall) c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7503000422498",
    descripcion: "REDALIP c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501258200127",
    descripcion: "COLSER c/30 TABS. 200 MG.",
    formula: "Bezafibrato 200mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502003389913",
    descripcion: "BEZAFIBRATO (Rayere) c/10 TABS. L.P. 400 MG.",
    formula: "Bezafibrato 400mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501349028296",
    descripcion: "BICALUTAMIDA (Amsa) c/14 TABS. 50 MG.",
    formula: "Bicalutamida  50mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216795075",
    descripcion: "BICALUTAMIDA (Ultra) c/14 TABS. 50 MG.",
    formula: "Bicalutamida  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506335700910",
    descripcion: "DUODOX c/28 TABS. 50 MG.",
    formula: "Bicalutamida  50mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502259892298",
    descripcion: "LACTIV FIT c/15 CAPS. 445 MG.",
    formula: "Bifidobacterium lactis BPL1.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501109763092",
    descripcion: "BIFONAZOL (Perrigo) CREMA 1% TUBO c/20 G.",
    formula: "Bifonazol",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502009746093",
    descripcion: "SIBICOS CREMA Tubo c/20 G. 1.0 G/100 G.",
    formula: "Bifonazol",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502259891376",
    descripcion: "ZULIK c/90 TABS. Masticables 911 MG.",
    formula: "Bioflavonoides en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7503020089190",
    descripcion: "VANESIR c/45 TABS. 500 MG.",
    formula: "Bioflavonoides en combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7503020089077",
    descripcion: "EXZON c/90 TABS. Masticables 490 MG.",
    formula: "Bioflavonoides en combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259892144",
    descripcion: "BIOTINA c/VITAMINA E y AC. GERMEN DE TRIGO (Naturex) c/30 CAPS. 700 MG.",
    formula: "Biotina en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501384503369",
    descripcion: "BIPERIDENO (Psicofarma) c/30 TABS. 2 MG.",
    formula: "Biperideno",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501384543969",
    descripcion: "BIPERIDENO (Psicofarma) c/50 TABS. 2 MG.",
    formula: "Biperideno",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009749636",
    descripcion: "BASILCOR c/10 TABS. L.R. 5 MG.",
    formula: "Bisacodilo",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506331300428",
    descripcion: "CAURODOL c/30 TABS. 2.5 MG.",
    formula: "Bisoprolol  2.5mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501109763375",
    descripcion: "BISOPROLOL (Quifa) c/30 TABS. 2.50 MG.",
    formula: "Bisoprolol  2.5mg.",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501384547882",
    descripcion: "BISOPROLOL (Neolpharma) c/30 TABS. 2.5 MG.",
    formula: "Bisoprolol  2.5mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501277028900",
    descripcion: "LOROPRAX c/30 TABS. 5 MG.",
    formula: "Bisoprolol  5.0mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7506331300459",
    descripcion: "CAURODOL c/30 TABS. 5 MG.",
    formula: "Bisoprolol  5.0mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501277028696",
    descripcion: "BISOPROLOL (Apotex) c/30 TABS. 5 MG.",
    formula: "Bisoprolol  5.0mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501258209465",
    descripcion: "PROTECTOR SOLAR (Serral) FPS 50+UVA/UVB Crema Tubo c/125 G.",
    formula: "Bloqueador solar corporal adulto FPS 50",
    laboratorio: "SERRAL"
  },
  {
    codigo: "793969649136",
    descripcion: "NEZIBA Protector Solar ADULTO FPS 50+UVA/UVB Crema Tubo c/130 G.",
    formula: "Bloqueador solar corporal adulto FPS 50",
    laboratorio: "NEZIBA"
  },
  {
    codigo: "7501258208017",
    descripcion: "PROTECTOR SOLAR KIDS (Serral) FPS 50+UVA/UVB Crema Tubo c/125 G.",
    formula: "Bloqueador solar Infantil FPS50",
    laboratorio: "SERRAL"
  },
  {
    codigo: "8906055580325",
    descripcion: "VORZUX Sol. Iny. c/1 FCO. AMP. 3.50 MG.",
    formula: "Bortezomib",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7501573903260",
    descripcion: "BROMHEXINA (Biomep) SOL. Adulto Fco. 100 ML. 160 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Adulto).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502211781189",
    descripcion: "BROMICOF SOLUCIÓN Adulto Fco. 100 ML. 160 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Adulto).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501825301271",
    descripcion: "NORMOFLEX SOL. Adulto Fco. 100 ML. 160 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Adulto).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501573903246",
    descripcion: "BROMHEXINA (Biomep) SOL. Infantil Fco. 100 ML.  80 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Infantil).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502211781059",
    descripcion: "BROMICOF SOLUCIÓN Infantil Fco. 100 ML.  80 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Infantil).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501825301288",
    descripcion: "NORMOFLEX SOL. Infantil Fco. 100 ML.  80 MG/100 ML.",
    formula: "Bromhexina (Sol. Oral Infantil).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7503000422887",
    descripcion: "BROMIXEN c/12 CAPS. 500/8 MG.",
    formula: "Bromhexina+Amoxicilina (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001163775",
    descripcion: "ACROXIL-C c/12 CAPS. 500-8 MG.",
    formula: "Bromhexina+Amoxicilina (Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009746079",
    descripcion: "BROMIXEN SUSP. Fco. 90 ML. 250-8 MG/5 ML.",
    formula: "Bromhexina+Amoxicilina (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001169296",
    descripcion: "ACROXIL-C SUSP. Fco. 60 ML. 250-8 MG/5 ML.",
    formula: "Bromhexina+Amoxicilina (Susp. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009741289",
    descripcion: "CEPOBROM c/12 CAPS. 500/8.782 MG.",
    formula: "Bromhexina+Cefalexina (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009740978",
    descripcion: "CEPOBROM SUSP. Fco. 100 ML. 250-4.39 MG/5 ML.",
    formula: "Bromhexina+Cefalexina (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502213042745",
    descripcion: "PROTAISOL AEROSOL p/Inhalación c/200 DOSIS 20 MCG.",
    formula: "Bromuro de Ipratropio (Aerosol p/Inhalación Bucal).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7503002772799",
    descripcion: "SUANTROLIN SOL. p/Nebulización Fco. 20 ML. 25 MG/100 ML.",
    formula: "Bromuro de Ipratropio (Solución p/Nebulización)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7503002773178",
    descripcion: "IPRASUAVELIN SOL. p/Nebulización c/10 AMPTAS. 0.5-2.5 MG/2.5 ML.",
    formula: "Bromuro de Ipratropio+Salbutamol (Solución p/Nebulización)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "8901117290600",
    descripcion: "IPRATROPIO/SALBUTAMOL (Zeux) SOL. p/Nebn. c/10 AMPTAS. 0.5-2.5 MG/2.5 ML. ",
    formula: "Bromuro de Ipratropio+Salbutamol (Solución p/Nebulización)",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7502009747021",
    descripcion: "LONVITOL SOL. p/Nebulización c/10 AMPTAS. 0.5-2.5 MG/2.5 ML.",
    formula: "Bromuro de Ipratropio+Salbutamol (Solución p/Nebulización)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501075724196",
    descripcion: "BRATEM SOL. p/Nebulización c/10 AMPTAS. 0.5-2.5 MG/2.5 ML.",
    formula: "Bromuro de Ipratropio+Salbutamol (Solución p/Nebulización)",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349029330",
    descripcion: "IPRATROPIO/SALBUTAMOL (Amsa) SOL. p/Nebn. c/10 AMPTAS. 0.5-2.5 MG/2.5 ML.",
    formula: "Bromuro de Ipratropio+Salbutamol (Solución p/Nebulización)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502223111097",
    descripcion: "QUIMTUSINE SUSP. NASAL p/Inhalación Fco. 6 ML. c/120 Dosis 32 MCG.",
    formula: "Budesonida  32mcg. (Susp. p/Inhalación Nasal).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502223111103",
    descripcion: "QUIMTUSINE SUSP. NASAL p/Inhalación Fco. 6 ML. c/120 Dosis 64 MCG.",
    formula: "Budesonida  64mcg. (Susp. p/Inhalación Nasal).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "8901117290013",
    descripcion: "BUDESONIDA (Zeux) SUSP. p/Nebn. c/5 AMPTAS. 0.25 MG/2 ML. ",
    formula: "Budesonida 0.250mg/2ml. Susp. p/Nebulización.",
    laboratorio: "ZEUX"
  },
  {
    codigo: "8901117290020",
    descripcion: "BUDESONIDA (Zeux) SUSP. p/Nebn. c/5 AMPTAS. 0.50 MG/2 ML. ",
    formula: "Budesonida 0.500mg/2ml. Susp. p/Nebulización.",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7502256040524",
    descripcion: "DANKIAL-B SUSP. p/Nebn. c/5 AMPTAS. 0.500 MG/2 ML.",
    formula: "Budesonida 0.500mg/2ml. Susp. p/Nebulización.",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7502216790551",
    descripcion: "BUMETANIDA (Ultra) c/20 TABS. 1 MG. ",
    formula: "Bumetanida",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009748868",
    descripcion: "BUDIMIN c/20 TABS. 1 MG.",
    formula: "Bumetanida",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502226294872",
    descripcion: "LEMOPHAR Sol. Iny. c/3 AMPTAS. 20 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina (Sol. Inyectable).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502213042370",
    descripcion: "FHASPEM Sol. Iny. c/3 AMPTAS. 20 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina (Sol. Inyectable).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501476073916",
    descripcion: "CRYOPINA Sol. Iny. c/3 AMPTAS. 20 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502009748295",
    descripcion: "FIUROX Sol. Iny. c/3 AMPTAS. 20 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7237079290466",
    descripcion: "VADISMED Sol. Iny. c/3 AMPTAS. 20 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina (Sol. Inyectable).",
    laboratorio: "FARMADEXTRUM"
  },
  {
    codigo: "7501537103385",
    descripcion: "BRUPACIL c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502274791842",
    descripcion: "KAFRASOL c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501349024601",
    descripcion: "BUTILHIOSCINA (Amsa) c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501571200859",
    descripcion: "GRAFIN c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "821998000601",
    descripcion: "BUTILHIOSCINA (Schoen) c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7506494600229",
    descripcion: "DIASIL c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7503003134503",
    descripcion: "LEMOPHAR c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226293271",
    descripcion: "HIOSCINA (Alpharma) c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501573900535",
    descripcion: "BIOMESINA c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502211789901",
    descripcion: "BUTILHIOSCINA (Loeffler) c/10 TABS 10 MG. ",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "780083149864",
    descripcion: "PASMODIL-PFC c/12 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501258208000",
    descripcion: "SERRALPINA c/10 TABS. 10 MG.",
    formula: "Butilhioscina ó Hioscina (Tabs. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009742392",
    descripcion: "DOLTRIX c/20 TABS. 125/10 MG.",
    formula: "Butilhioscina ó Hioscina+Clonixinato de Lisina 10/125mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741487",
    descripcion: "DOLTRIX c/10 TABS. 250/10 MG.",
    formula: "Butilhioscina ó Hioscina+Clonixinato de Lisina 10/250mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502003386141",
    descripcion: "PRESTODOL Compuesto c/10 TABS. 250/10 MG.",
    formula: "Butilhioscina ó Hioscina+Clonixinato de Lisina 10/250mg. (Tabs/Caps. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502009741326",
    descripcion: "DOLTRIX Sol. Iny. c/6 AMPTAS. (1-2) 100-20 MG/4 ML.",
    formula: "Butilhioscina ó Hioscina+Clonixinato de Lisina 20/100mg. (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501836010087",
    descripcion: "REALDRAX-MXD c/10 TABS. 20/400 MG.",
    formula: "Butilhioscina ó Hioscina+Ibuprofeno (Tabs. Orales).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "780083140076",
    descripcion: "PASMODIL Sol. Iny. c/1 AMPTA. 20 MG-2.5 G/5 ML.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Sol. Inyectable).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001160019",
    descripcion: "BUSCONET Sol. Iny. c/1 AMPTA. 20 MG-2.5 G/5 ML.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502211789888",
    descripcion: "NEOSEDAL-DUO Sol. Iny. c/3 AMPTAS. 20 MG-2.5 G/5 ML.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Sol. Inyectable).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001160026",
    descripcion: "BUSCONET c/10 TABS. 10/250 MG.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573900115",
    descripcion: "BIOMESINA Compuesta c/10 GRAG. 10/250 MG.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7506449300075",
    descripcion: "BUTILHIOSCINA/METAMIZOL SÓDICO (ADN Pharma) c/10 GRAG. 10/250 MG.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Tabs. Orales).",
    laboratorio: "ADN PHARMA"
  },
  {
    codigo: "7501258203418",
    descripcion: "SERRALPINA COMPUESTA c/10 TABS. 10/250 MG.",
    formula: "Butilhioscina ó Hioscina+Metamizol Sódico (Tabs. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501836003621",
    descripcion: "PRECICOL SOLUCIÓN Fco. Gotero 20 ML. 2-100 MG/1 ML.",
    formula: "Butilhioscina ó Hioscina+Paracetamol (Sol. Gotas).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "780083149895",
    descripcion: "PASMODIL DUO c/24 TABS. 10/500 MG.",
    formula: "Butilhioscina ó Hioscina+Paracetamol (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502211786788",
    descripcion: "VILADOL-PLUS c/20 TABS. 10/500 MG.",
    formula: "Butilhioscina ó Hioscina+Paracetamol (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501836009746",
    descripcion: "PRECICOL c/20 TABS. 10/500 MG.",
    formula: "Butilhioscina ó Hioscina+Paracetamol (Tabs. Orales).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502213042127",
    descripcion: "PROGOFHAL c/2 TABS. 0.50 MG.",
    formula: "Cabergolina",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502227873793",
    descripcion: "EMPERCROZ c/2 TABS. 0.5 MG.",
    formula: "Cabergolina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216795037",
    descripcion: "CABERGOLINA (Ultra) c/2 TABS. 0.5 MG.",
    formula: "Cabergolina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216795129",
    descripcion: "CABERGOLINA (Ultra) c/8 TABS. 0.5 MG.",
    formula: "Cabergolina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506022800121",
    descripcion: "JABON de CACAHUANANCHE (Karla Di) 100 G.",
    formula: "Cacahuananche (Jabón).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502299970390",
    descripcion: "MORNING COFFE Sabor CHURRO c/10 SOBS. 5 G.",
    formula: "Cafe+Colágeno Hidrolizado (Polvo)",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7500462933777",
    descripcion: "KALAMYN LOCIÓN CREMA 180 ML.",
    formula: "Calamina",
    laboratorio: "ADN PHARMA"
  },
  {
    codigo: "7506449300136",
    descripcion: "KALAMYN PLUS LOCIÓN CREMA 180 ML.",
    formula: "Calamina",
    laboratorio: "ADN PHARMA"
  },
  {
    codigo: "637420223803",
    descripcion: "CALAZIN SUSP. TOPICA Fco. 180 ML. 8 G/100 ML.",
    formula: "Calamina",
    laboratorio: "SOLAR"
  },
  {
    codigo: "714908107906",
    descripcion: "CALTRÓN SUSPENSIÓN 360 ML.",
    formula: "Calcio (Susp. Oral).",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501563381726",
    descripcion: "BIONOKALTRAN c/12 COMPS. Efervescentes 500 MG.",
    formula: "Calcio 500mg. (Comps. Efervescentes)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501384504939",
    descripcion: "CALCIO (Psicofarma) c/12 COMPS. Efervescentes 500 MG.",
    formula: "Calcio 500mg. (Comps. Efervescentes)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501563380439",
    descripcion: "CALCIO (Randall) c/12 COMPS. Efervescentes 500 MG.",
    formula: "Calcio 500mg. (Comps. Efervescentes)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "714908107517",
    descripcion: "CALTRÓN FORN-K c/60 TABS. 600 MG.",
    formula: "Calcio 600mg",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7503181042140",
    descripcion: "GL CORAL (Vida Herbal) c/100 TABS. 500 MG. ",
    formula: "Calcio de coral en combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7502211789857",
    descripcion: "CALFORTE-D c/30 CAPS. 1.3 G.",
    formula: "Calcio+Colecalciferol",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501590288456",
    descripcion: "SENFEM-NOVO c/60 TABS. 600 MG/400 UI.",
    formula: "Calcio+Colecalciferol",
    laboratorio: "CMD"
  },
  {
    codigo: "714908101003",
    descripcion: "CALTRÓN 600+MAGNESIO c/60 TABS. 600/5.8 MG.",
    formula: "Calcio+Magnesio",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7503002615270",
    descripcion: "ALFEM c/60 TABS. 600 MG/60 MG/200 UI.",
    formula: "Calcio+Magnesio+Colecalciferol",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501590284939",
    descripcion: "DENFOR 600 c/60 COMPS. 1.74 G.",
    formula: "Calcio+Magnesio+Vitaminas",
    laboratorio: "CMD"
  },
  {
    codigo: "7502299970529",
    descripcion: "WITRI-K Sabor PIÑA c/30 TABS. 600 MG/400 UI. ",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7503049078311",
    descripcion: "CALCIO/VITAMINA D3+OMEGA-3 (Avivia) c/30 TABS. 600 MG/400 UI. ",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "803288480669",
    descripcion: "BIONADAL SUSP. Cja. Fco. c/360 ML. ",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "BQM"
  },
  {
    codigo: "7502259892076",
    descripcion: "GOMIX (Calcio+) ADULTO Fco. c/50 GOMITAS 6 G.",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "714908107913",
    descripcion: "CALTRÓN K-LTRN SUSPENSIÓN 360 ML.",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908107524",
    descripcion: "CALTRÓN K-LTRN SUSPENSIÓN 360 ML.",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908100099",
    descripcion: "CALTRÓN 600+D c/60 TABS. 600 MG/150 UI.",
    formula: "Calcio+Vitamina D (Suplemento Alimenticio)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7503027446125",
    descripcion: "ERCATRIV-M c/30 CAPS. 0.25 MCG.",
    formula: "Calcitriol",
    laboratorio: "PROGELA"
  },
  {
    codigo: "7502227425435",
    descripcion: "GELDEX c/50 CAPS. 0.25 MCG.",
    formula: "Calcitriol",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502004402154",
    descripcion: "ISOCAR SUSPENSIÓN Fco. 120 ML. 1-0.05 G/5 ML.               ",
    formula: "Caolín+Pectina.",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "803288480102",
    descripcion: "CAPSIFLAM CREMA TUBO c/35 G.",
    formula: "Capsicum",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7501482201884",
    descripcion: "NEULASTROL c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502227870150",
    descripcion: "SABTRES c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501563310146",
    descripcion: "BIODEZIL c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501384541187",
    descripcion: "CAPTOPRIL (Psicofarma) c/30 TABS. 25 MG",
    formula: "Captopril 25mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502216792579",
    descripcion: "CAPTOPRIL (Ultra) c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804678",
    descripcion: "CAPTOPRIL (Avivia) c/ 30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075713862",
    descripcion: "NOVAPRES c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502208894854",
    descripcion: "BRUCAP c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7503000422405",
    descripcion: "ALTIVER c/30 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216791695",
    descripcion: "REDUPREC c/100 TABS. 25 MG.",
    formula: "Captopril 25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009745980",
    descripcion: "ALTIVER c/30 TABS. 50 MG.",
    formula: "Captopril 50mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "656599040134",
    descripcion: "IPYROL c/30 TABS. 50 MG.",
    formula: "Captopril 50mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502009740701",
    descripcion: "CO-ALTIVER c/15 TABS. 25/12.5 MG.",
    formula: "Captopril+Hidroclorotiazida 25/12.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009740718",
    descripcion: "CO-ALTIVER c/15 TABS. 50/25 MG.",
    formula: "Captopril+Hidroclorotiazida 50/25mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501563381269",
    descripcion: "BIONEURYL SUSPENSIÓN Fco. 120 ML. 2 G/100 ML.",
    formula: "Carbamazepina 100mg. (Susp. Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501384541163",
    descripcion: "CARBAMAZEPINA (Psicofarma) c/20 TABS. 200 MG.",
    formula: "Carbamazepina 200mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501563381207",
    descripcion: "BIONEURIL c/20 TABS. 200 MG.",
    formula: "Carbamazepina 200mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501482201334",
    descripcion: "SOLPREXOL c/20 TABS. 200 MG.",
    formula: "Carbamazepina 200mg. (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501109766116",
    descripcion: "CARBAMAZEPINA (Quifa) c/20 TABS. 200 MG.",
    formula: "Carbamazepina 200mg. (Tabs. Orales).",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501563380545",
    descripcion: "CARBAMAZEPINA (Randall) c/20 TABS. 200 MG.",
    formula: "Carbamazepina 200mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502009747779",
    descripcion: "CULMINAX SOLUCIÓN Adulto Fco. 150 ML. 375 MG/5 ML.",
    formula: "Carbocisteína (Adulto)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747786",
    descripcion: "CULMINAX SOLUCIÓN Pediátrico Fco. 150 ML. 250 MG/5 ML.",
    formula: "Carbocisteína (Pediátrico)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506022806260",
    descripcion: "JABÓN de CARBÓN ACTIVADO (Karla Di) Barra c/100 G.",
    formula: "Carbón Activado (Jabón corporal).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502009743993",
    descripcion: "CARNITINA+B c/30 CAPS. 560 MG.",
    formula: "Carnitina (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7503181042188",
    descripcion: "V HERBAL c/60 CAPS. 500 MG. ",
    formula: "Carnitina (Suplemento Alimenticio)",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "781584367382",
    descripcion: "BIO-CARNITINA c/60 CAPS. 450 MG.",
    formula: "Carnitina (Suplemento Alimenticio)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "714908107944",
    descripcion: "SHARKY CAPS c/60 CAPS. 508 MG.",
    formula: "Cartilago de Tiburón.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7506331301388",
    descripcion: "CRABUDOL c/14 TABS.  6.25 MG.",
    formula: "Carvedilol  6.25mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501590281105",
    descripcion: "ALEVARIN c/45 CAPS. 166.60 MG.",
    formula: "Castaño de Indias (Caps. Orales).",
    laboratorio: "CMD"
  },
  {
    codigo: "7501130742790",
    descripcion: "FLEBOCAPS c/30 CAPS. 250 MG.",
    formula: "Castaño de Indias (Caps. Orales).",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7503020089695",
    descripcion: "VANESIR GEL Tubo c/ 50 G.",
    formula: "Castaño de indias en combinación (Caps. Orales).",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "803288480331",
    descripcion: "VARIFLAM GEL TUBO c/35 G.",
    formula: "Castaño de indias en combinación (Caps. Orales).",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7502280810452",
    descripcion: "CIR-Q MAX c/CÚRCUMA Y GROSELLERO (Supra) c/72 CAPS. 500 MG.",
    formula: "Castaño de indias en combinación (Caps. Orales).",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7501590286100",
    descripcion: "HUCIUS c/30 CAPS. 250/70 MG.",
    formula: "Castaño de indias en combinación (Caps. Orales).",
    laboratorio: "CMD"
  },
  {
    codigo: "803288480737",
    descripcion: "HEMMAFIX GEL TUBO c/35 G.",
    formula: "Castaño de indias en combinación (Crema/Gel).",
    laboratorio: "BQM"
  },
  {
    codigo: "7503020089206",
    descripcion: "VANESIR GEL Tubo c/200 G.",
    formula: "Castaño de indias en combinación (Crema/Gel).",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502009741043",
    descripcion: "FASICLOR SUSP. Fco. 75 ML. 125 MG/5 ML.",
    formula: "Cefaclor 125mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741456",
    descripcion: "FASICLOR c/15 CAPS. 250 MG.",
    formula: "Cefaclor 250mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741050",
    descripcion: "FASICLOR SUSP. Fco. 75 ML. 250 MG/5 ML.",
    formula: "Cefaclor 250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741067",
    descripcion: "FASICLOR SUSP. Fco. 50 ML. 375 MG/5 ML.",
    formula: "Cefaclor 375mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083142377",
    descripcion: "CEFLACID c/15 CAPS. 500 MG.",
    formula: "Cefaclor 500mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009741425",
    descripcion: "FASICLOR c/15 CAPS. 500 MG.",
    formula: "Cefaclor 500mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503000422610",
    descripcion: "CEFALVER SUSP. Fco. 90 ML. 125 MG/5 ML.",
    formula: "Cefalexina  125mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349020634",
    descripcion: "CEFALEXINA (Amsa) SUSP. Fco. 100 ML. 250 MG/5 ML. ",
    formula: "Cefalexina  250mg. (Susp. Oral).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503000422627",
    descripcion: "CEFALVER SUSP. Fco. 90 ML. 250 MG/5 ML.",
    formula: "Cefalexina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009743627",
    descripcion: "CEFALEXINA (Medigen) SUSP. Fco. 100 ML. 250 MG/5 ML.",
    formula: "Cefalexina  250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503000422863",
    descripcion: "CEFALVER c/12 CAPS. 500 MG.",
    formula: "Cefalexina  500mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021181",
    descripcion: "CEFALEXINA (Amsa) c/20 CAPS. 500 MG.",
    formula: "Cefalexina  500mg. (Tabs/Caps. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009740480",
    descripcion: "CEFALVER c/20 CAPS. 500 MG.",
    formula: "Cefalexina  500mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745607",
    descripcion: "CEFALEXINA (Maver) c/20 TABS. 500 MG.",
    formula: "Cefalexina  500mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745614",
    descripcion: "CEFALVER c/12 TABS. 1 G.",
    formula: "Cefalexina 1g. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349022768",
    descripcion: "CEFALOTINA (Amsa) Sol. Iny. c/1 FCO. AMP. 1 G/5 ML. ",
    formula: "Cefalotina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506022315298",
    descripcion: "PIMERZEN Sol. Iny. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Cefepima 1g.",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7501493873216",
    descripcion: "SULOVAL Sol. Iny. c/1 FCO. AMP. 1 G/3 ML.",
    formula: "Cefepima 1g.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502009745737",
    descripcion: "BENEVENTOL SUSP. Fco. 50 ML. 100 MG/5 ML.",
    formula: "Cefixima 100mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502208894687",
    descripcion: "AMIXBRU c/6 CAPS. 400 MG.",
    formula: "Cefixima 400mg. (Caps. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502009745928",
    descripcion: "BENEVENTOL c/3 CAPS. 400 MG.",
    formula: "Cefixima 400mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746253",
    descripcion: "BENEVENTOL c/6 CAPS. 400 MG.",
    formula: "Cefixima 400mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021808",
    descripcion: "CEFOTAXIMA (Amsa) I.M. Sol. Iny. c/1 FCO. AMP. 500 MG/2 ML.",
    formula: "Cefotaxima  500mg. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349022515",
    descripcion: "CEFOTAXIMA (Amsa) I.M. Sol. Iny. c/1 FCO. AMP. 1 G/4 ML.",
    formula: "Cefotaxima 1g. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349022133",
    descripcion: "CEFOTAXIMA (Amsa) I.V. Sol. Iny. c/1 FCO. AMP. 1 G/4 ML.",
    formula: "Cefotaxima 1g. (I.V.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506022320872",
    descripcion: "TAXISENSI Sol. Iny. c/1 FCO. AMP. 1 G/4 ML.",
    formula: "Cefotaxima 1g. (I.V.)",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7501349022799",
    descripcion: "CEFTAZIDIMA (Amsa) Sol. Iny. IM. ó IV. c/1 FCO. AMP. 1 G/3 ML.",
    formula: "Ceftazidima 1g.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506022316387",
    descripcion: "ZIDIMASENSI Sol. Iny. IM. ó IV. c/1 FCO. AMP. 1 G/3 ML.",
    formula: "Ceftazidima 1g.",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7501125106163",
    descripcion: "IZADIMA Sol. Iny. IM. ó IV. c/1 FCO. AMP. 1 G/3 ML.",
    formula: "Ceftazidima 1g.",
    laboratorio: "PISA"
  },
  {
    codigo: "7502009746352",
    descripcion: "DEXAL c/5 CÁPSULAS 400 MG.",
    formula: "Ceftibuteno (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747335",
    descripcion: "DEXAL SUSP. Fco. 30 ML. 36 MG/1 ML.",
    formula: "Ceftibuteno (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009748585",
    descripcion: "XENTRIAC I.M. Sol. Iny. c/1 FCO. AMP. 500 MG/2 ML.",
    formula: "Ceftriaxona  500mg. (I.M.)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021471",
    descripcion: "CEFTRIAXONA (Amsa) I.M. Sol. Iny. c/1 FCO. AMP. 500 MG/2 ML.",
    formula: "Ceftriaxona  500mg. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349011007",
    descripcion: "AMCEF I.M. Sol. Iny. c/1 FCO. AMP. 500 MG/2 ML.",
    formula: "Ceftriaxona  500mg. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502208891235",
    descripcion: "TRIXONA I.M. Sol. Iny. c/1 FCO. AMP. 500 MG/2 ML.",
    formula: "Ceftriaxona  500mg. (I.M.)",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502009748578",
    descripcion: "XENTRIAC I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502208894557",
    descripcion: "CEFTRIAXONA (Bruluagsa) I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7506022330574",
    descripcion: "ZENSIF I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7501349022461",
    descripcion: "CEFTRIAXONA (Amsa) I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349012004",
    descripcion: "AMCEF I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "780083149840",
    descripcion: "CEFTRIAXONA (Collins) I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502208891228",
    descripcion: "TRIXONA I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7501493800786",
    descripcion: "XONATIL I.M. Sol. Iny. c/1 FCO. AMP. 1 G/ 3.5 ML.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "KENER"
  },
  {
    codigo: "780083149130",
    descripcion: "TRAXICOLL I.M. Sol. Iny. c/1 FCO. AMP. 1 G/3.5 ML. y Jeringa.",
    formula: "Ceftriaxona 1g. (I.M.)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506331300237",
    descripcion: "AUROVIAX 1000 Sol. Iny.  IV. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Ceftriaxona 1g. (I.V.)",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501349022010",
    descripcion: "CEFTRIAXONA (Amsa) Sol. Iny. IV. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Ceftriaxona 1g. (I.V.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349012011",
    descripcion: "AMCEF Sol. Iny. IV. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Ceftriaxona 1g. (I.V.)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506022330567",
    descripcion: "ZENSIF Sol. Iny. IV. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Ceftriaxona 1g. (I.V.)",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7502208891198",
    descripcion: "TRIXONA I.V.  Sol. Iny. c/1 FCO. AMP. 1 G/10 ML.",
    formula: "Ceftriaxona 1g. (I.V.)",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502009741302",
    descripcion: "CEFAGEN SUSP. Pediátrica Fco. 50 ML. 125 MG/5 ML.",
    formula: "Cefuroxima 125mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741296",
    descripcion: "CEFAGEN SUSP. Fco. 50 ML. 250 MG/5 ML.",
    formula: "Cefuroxima 250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745119",
    descripcion: "CEFAGEN c/10 TABS. 250 MG.",
    formula: "Cefuroxima 250mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745126",
    descripcion: "CEFAGEN c/10 TABS. 500 MG.",
    formula: "Cefuroxima 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501125195105",
    descripcion: "CEFUROXIMA (Amsa) Sol. Iny. IM. ó IV. c/1 FCO. AMP. 750 MG/5 ML.",
    formula: "Cefuroxima 750mg/ 5ml. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009748660",
    descripcion: "CELECOXIB (Medigen) c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216805361",
    descripcion: "CELECOXIB (Ultra) c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442703835",
    descripcion: "CELECOXIB (Camber) c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "785118754327",
    descripcion: "CICLOX c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502274791736",
    descripcion: "TRICOXA c/10 CAPS. 200 MG. ",
    formula: "Celecoxib 200mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502226294858",
    descripcion: "CELECOXIB (Alpharma) c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216805378",
    descripcion: "CELECOXIB (Ultra) c/20 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442704849",
    descripcion: "CELECOXIB (Camber) c/20 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502009746406",
    descripcion: "DELECON c/10 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502226294865",
    descripcion: "CELECOXIB (Alpharma) c/20 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216805385",
    descripcion: "CELECOXIB (Ultra) c/30 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442704856",
    descripcion: "CELECOXIB (Camber) c/30 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501249600219",
    descripcion: "CELECOXIB (TempusPharma) c/30 CAPS. 200 MG.",
    formula: "Celecoxib 200mg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7506022808233",
    descripcion: "CERA de BERGAMOTA p/CABELLO y BARBA (Karla Di) Tarro c/90 G.",
    formula: "Cera para cabello",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501573906346",
    descripcion: "RETIRIX SOLUCIÓN Fco. 50 ML. 100 MG/100 ML.",
    formula: "Cetirizina (Sol. Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501258205870",
    descripcion: "VISERTRAL SOLUCION Fco 50 ML. 1 MG/1 ML.",
    formula: "Cetirizina (Sol. Oral)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501825304562",
    descripcion: "DEGORTZIN SOLUCIÓN Fco. 50 ML. 1 MG/1 ML.",
    formula: "Cetirizina (Sol. Oral)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7257427600280",
    descripcion: "TRADAXIN Cja. c/10 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "SBL"
  },
  {
    codigo: "7501277092314",
    descripcion: "CETIRIZINA (Apotex) c/10 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502227872123",
    descripcion: "RAAMCINET c/10 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7257427604004",
    descripcion: "TRADAXIN Cja. c/20 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "SBL"
  },
  {
    codigo: "7501258205863",
    descripcion: "VISERTRAL c/10 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501825305002",
    descripcion: "DEGORTZIN c/10 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7503044182174",
    descripcion: "TRADAXIN Cja. c/20 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "SBL"
  },
  {
    codigo: "7257427604028",
    descripcion: "TRADAXIN Fco. c/30 TABS. 10 MG.",
    formula: "Cetirizina (Tabs. Orales)",
    laboratorio: "SBL"
  },
  {
    codigo: "7501590287992",
    descripcion: "REDBELGY B12 c/30 TABS. Masticables 1000 MCG.",
    formula: "Cianocobalamina (Tabs. Orales)",
    laboratorio: "CMD"
  },
  {
    codigo: "7503044182006",
    descripcion: "CESSABIT c/30 TABS. 10 MG.",
    formula: "Ciclobenzaprina",
    laboratorio: "SBL"
  },
  {
    codigo: "7501258213592",
    descripcion: "BENCOPRIM c/100 TABS. 10 MG.",
    formula: "Ciclobenzaprina",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009742736",
    descripcion: "FEMIREM c/60 TABS. 185 MG.",
    formula: "Cimicifuga racemosa (Black Cohosh)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502227871409",
    descripcion: "CYSLEV c/60 TABS. 75 MG.",
    formula: "Cinarizina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503004908820",
    descripcion: "CINARIZINA (Alpharma) c/60 TABS. 75 MG.",
    formula: "Cinarizina",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "785120754254",
    descripcion: "VENOXIL c/60 TABS. 75 MG.",
    formula: "Cinarizina",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216796379",
    descripcion: "CINARIZINA (Ultra) c/60 TABS. 75 MG.",
    formula: "Cinarizina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804838",
    descripcion: "CINARIZINA (Avivia) c/60 TABS. 75 MG.",
    formula: "Cinarizina",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216805415",
    descripcion: "CINITAPRIDA (Avivia) c/30 SOBS. GRANULADO 1 MG.",
    formula: "Cinitaprida (Granulado).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502274791712",
    descripcion: "ADYRTAP c/25 TABS. 1 MG. ",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7503002773147",
    descripcion: "OKZAK c/25 COMPS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501349027312",
    descripcion: "CINITAPRIDA (Amsa) c/25 COMPS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227875520",
    descripcion: "AMROL c/25 TABS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501384546762",
    descripcion: "CINITAPRIDA (Neolpharma) c/25 TABS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502009745874",
    descripcion: "RILOVER c/25 COMPS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216793934",
    descripcion: "CINITAPRIDA (Ultra) c/25 COMPS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804722",
    descripcion: "CINITAPRIDA (Avivia) c/25 COMPS. 1 MG.",
    formula: "Cinitaprida (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7506484500768",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Blanco A:1.25cm; L: 10m. Cja. c/24 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 1.25x10 (Color blanco).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500799",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Piel A: 1.25cm; L: 10m. Cja. c/24 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 1.25x10 (Color piel).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500775",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Blanco A: 2.5cm; L: 10m. Caja c/12 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 2.50x10 (Color blanco).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500805",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Piel A: 2.5cm; L: 10m. Caja. c/12 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 2.50x10 (Color piel).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500782",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Blanco A: 5cm; L: 10m. Caja c/6 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 5.00x10 (Color blanco).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500812",
    descripcion: "CINTA MICROPOROSA (Codifarma) Rollo Col. Piel A: 5cm; L: 10m. Caja c/6 Pzs.",
    formula: "Cinta adhesiva microporosa de papel 5.00x10 (Color piel).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502009748608",
    descripcion: "VIBRAXIN c/30 CAPS. 100 MG.",
    formula: "Ciprofibrato.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349027817",
    descripcion: "CIPROFLOXACINO (Amsa) SOL. Oft. Fco. Gotero 5 ML. 3 MG/1 ML.",
    formula: "Ciprofloxacino (Sol. Oftálmica)",
    laboratorio: "AMSA"
  },
  {
    codigo: "75052805",
    descripcion: "CIPROFLOXACINO (Opko) Sol. Oft. Fco. Gotero 5 ML. 3.0 MG/1 ML.",
    formula: "Ciprofloxacino (Sol. Oftálmica)",
    laboratorio: "OPKO"
  },
  {
    codigo: "780083144814",
    descripcion: "KENZOFLEX SOL. Oftálmica Fco. Gotero 5 ML. 3 MG/1 ML.",
    formula: "Ciprofloxacino (Sol. Oftálmica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "8907695019633",
    descripcion: "OSIPRAZ Sol. Iny. c/1 Fco. 100 ML. 200 MG/100 ML. ",
    formula: "Ciprofloxacino 200mg. (Sol. Inyectable).",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7501052713625",
    descripcion: "CEPOKAB Sol. Iny. c/1 FCO. 100 ML. 2 MG/1 ML.",
    formula: "Ciprofloxacino 200mg. (Sol. Inyectable).",
    laboratorio: "FRESENIUS"
  },
  {
    codigo: "7501573900900",
    descripcion: "Z-XIN c/12 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083140526",
    descripcion: "KENZOFLEX Cja. c/12 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501571200224",
    descripcion: "CIQFADIN c/ 8 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7503000422429",
    descripcion: "CIPRAIN c/10 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501563381481",
    descripcion: "BIOFLOX c/8 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501573900306",
    descripcion: "Z-XIN c/ 8 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501349020894",
    descripcion: "CIPROFLOXACINO (Amsa) c/12 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216792418",
    descripcion: "CIPROFLOXACINO (Ultra) c/ 8 TABS. 250 MG.",
    formula: "Ciprofloxacino 250mg. (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009743863",
    descripcion: "CIPROFLOXACINO (Medigen) c/8 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501478315694",
    descripcion: "VIFLOXINA c/8 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7501573900061",
    descripcion: "Z-XIN c/8 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501482201266",
    descripcion: "DEIXEDOL c/10 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501571201238",
    descripcion: "CIQFADIN c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7506331300671",
    descripcion: "FLUBINDO c/ 8 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501573900955",
    descripcion: "Z-XIN c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501349021532",
    descripcion: "CIPROFLOXACINO (Amsa) c/14 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506331300688",
    descripcion: "FLUBINDO c/14 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501537161163",
    descripcion: "BRUBIOL c/10 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502216792371",
    descripcion: "CIPROFLOXACINO (Ultra) c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "780083140540",
    descripcion: "KENZOFLEX Cja. c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503000422436",
    descripcion: "CIPRAIN c/10 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150112",
    descripcion: "KENZOFLEX Cja. c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506335701306",
    descripcion: "FLUXACORD c/14 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502216803848",
    descripcion: "CIPROFLOXACINO (Avivia) c/12 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083143060",
    descripcion: "KENZOFLEX Fco. c/28 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501385492273",
    descripcion: "CIPROFLOXACINO (Hormona) c/14 TABS. 500 MG.",
    formula: "Ciprofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "780083148928",
    descripcion: "KENZOFLEX DUO Sol. Oftálmica Fco. Gotero 5 ML. 3.5-1 MG/1 ML.",
    formula: "Ciprofloxacino+Dexametasona (Sol. Oftálmica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001164338",
    descripcion: "CIPROFLOXACINO/DEXAMETASONA (Son´s) Sol. Oft. Fco Gotero 5 ML. 3.5-1 MG/1 ML.",
    formula: "Ciprofloxacino+Dexametasona (Sol. Oftálmica)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001162693",
    descripcion: "PHENDEX SUSP. Ótica Fco. Gotero 10 ML. 2-10-50 MG/1 ML.",
    formula: "Ciprofloxacino+Hidrocortisona+Lidocaina",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009747663",
    descripcion: "HEFRACIL SOL. Fco. No.1 c/210 ML. y Fco. No.2 c/10 ML. 40 MG-300 MCG/100 ML.",
    formula: "Ciproheptadina+Cianocobalamina (Sol. Oral)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009740299",
    descripcion: "PRESISTIN SUSP. Fco. 60 ML. 1 MG/1 ML.",
    formula: "Cisaprida  1mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503000422184",
    descripcion: "PRESISTIN c/30 TABS.  5 MG.",
    formula: "Cisaprida  5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349028326",
    descripcion: "CISAPRIDA (Amsa) c/30 TABS. 5 MG.",
    formula: "Cisaprida  5mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503000422191",
    descripcion: "PRESISTIN c/30 TABS. 10 MG.",
    formula: "Cisaprida 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502211788959",
    descripcion: "CITRANOROX Sol. Iny. c/1 AMPTA. 5 ML. 2 MG/1 ML.",
    formula: "Cisatracurio besilato de",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "8902220115866",
    descripcion: "CITALOPRAM (Torrent) c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "TORRENT"
  },
  {
    codigo: "7502227876398",
    descripcion: "OMISIP c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501349024922",
    descripcion: "CITALOPRAM (Amsa) c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501293200014",
    descripcion: "CITALOPRAM (Medix) c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "MEDIX"
  },
  {
    codigo: "7501384544171",
    descripcion: "CITALOPRAM (Psicofarma) c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "8902220115798",
    descripcion: "CITALOPRAM (Torrent) c/28 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "TORRENT"
  },
  {
    codigo: "7502231320047",
    descripcion: "NORECSERO c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "MICROMEX"
  },
  {
    codigo: "7501277084036",
    descripcion: "APOPRAN c/14 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502231320054",
    descripcion: "NORECSERO c/28 TABS. 20 MG.",
    formula: "Citalopram",
    laboratorio: "MICROMEX"
  },
  {
    codigo: "7502009749322",
    descripcion: "CONIAX c/10 COMPS. 500 MG. ",
    formula: "Citicolina  500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502299970796",
    descripcion: "LUNO KIDS c/30 TABS. Masticables Sabor Chocolate 600 MG.",
    formula: "Citrato de magnesio+L-Teanina+Gaba.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970789",
    descripcion: "LUNO ADULT c/30 CAPS. 500 MG.",
    formula: "Citrato de magnesio+L-Teanina+Gaba.",
    laboratorio: "DR. WILL"
  },
  {
    codigo: "7502009747199",
    descripcion: "ZUROLIX SOLUCION Fco. 150 ML. 30-5 G/100 ML.",
    formula: "Citrato de potasio+Ácido cítrico",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749230",
    descripcion: "KLARIX SUSP. Fco. 60 ML. 125 MG/5 ML. ",
    formula: "Claritromicina 125mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "785118752330",
    descripcion: "KROBICIN SUSP. Fco. 60 ML. 125 MG/5 ML.",
    formula: "Claritromicina 125mg. (Susp. Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009749223",
    descripcion: "KLARIX SUSP. Fco. 60 ML. 250 MG/5 ML.",
    formula: "Claritromicina 250mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "785118752347",
    descripcion: "KROBICIN SUSP. Fco. 60 ML. 250 MG/5 ML.",
    formula: "Claritromicina 250mg. (Susp. Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7503003134541",
    descripcion: "KLARPHARMA c/10 TABS. 250 MG.",
    formula: "Claritromicina 250mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501573900573",
    descripcion: "DOYCUR c/10 TABS. 250 MG.",
    formula: "Claritromicina 250mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009740442",
    descripcion: "KLARIX c/10 TABS. 250 MG.",
    formula: "Claritromicina 250mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021686",
    descripcion: "CLARITROMICINA (Amsa) c/10 TABS. 500 MG. ",
    formula: "Claritromicina 500mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009740510",
    descripcion: "KLARIX c/10 TABS. 500 MG.",
    formula: "Claritromicina 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "785118753979",
    descripcion: "VIKROL c/10 TABS. 500 MG.",
    formula: "Claritromicina 500mg. (Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501573900580",
    descripcion: "DOYCUR c/10 TABS. 500 MG.",
    formula: "Claritromicina 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7506313800427",
    descripcion: "SINAX GEL Tubo c/30 G. 1 G/100 G.",
    formula: "Clindamicina 1% (Gel Tópico).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501672690771",
    descripcion: "FEISCLIN GEL Tubo c/30 G. 1 G/100 G.",
    formula: "Clindamicina 1% (Gel Tópico).",
    laboratorio: "ARLEX"
  },
  {
    codigo: "785118752415",
    descripcion: "DALATINA GEL Tubo c/30 G. 1 G/100 G.",
    formula: "Clindamicina 1% (Gel Tópico).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501349020788",
    descripcion: "CLINDAMICINA (Amsa) c/16 CAPS 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227870228",
    descripcion: "FOSHLENN c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501075720051",
    descripcion: "LYRFHIS c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216803855",
    descripcion: "CLINDAMICINA (Avivia) c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502223550919",
    descripcion: "DALAFAR c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "NAFAR"
  },
  {
    codigo: "7502216793132",
    descripcion: "CLINDAMICINA (Ultra) c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "780083142605",
    descripcion: "CIGMADIL c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009740558",
    descripcion: "INDACIL c/16 CAPS. 300 MG.",
    formula: "Clindamicina 300mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384505820",
    descripcion: "CLINDAMICINA (Neolpharma) Sol. Iny. c/1 AMPTA. 300 MG/2 ML.",
    formula: "Clindamicina 300mg. (Sol. Inyectable).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501349020900",
    descripcion: "CLINDAMICINA (Amsa) Sol. Iny. c/1 AMPTA. 300 MG/2 ML.",
    formula: "Clindamicina 300mg. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384505837",
    descripcion: "CLINDAMICINA (Neolpharma) Sol. Iny. c/5 AMPTAS. 300 MG/2 ML.",
    formula: "Clindamicina 300mg. (Sol. Inyectable).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7150239239764",
    descripcion: "DRASTEP Sol. Iny. c/1 AMPTA. 600 MG/4 ML.",
    formula: "Clindamicina 600mg. (Sol. Inyectable).",
    laboratorio: "FARMADEXTRUM"
  },
  {
    codigo: "7501349021860",
    descripcion: "CLINDAMICINA (Amsa) Sol. Iny. c/1 AMPTA. 600 MG/4 ML.",
    formula: "Clindamicina 600mg. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349021044",
    descripcion: "CLINDAMICINA (Amsa) Sol. Iny. c/5 AMPTAS. 600 MG/4 ML.",
    formula: "Clindamicina 600mg. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "785118752941",
    descripcion: "MAVIFEM Crema Vaginal TUBO c/30 G. 2-8 G/100 G. y 6 Aplics. ",
    formula: "Clindamicina+Ketoconazol 100+400mg. (Crema Vaginal)",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502001166110",
    descripcion: "FEMITAB c/7 ÓVULOS 100/400 MG.",
    formula: "Clindamicina+Ketoconazol 100+400mg. (Tabs./Ovulos Vaginales)",
    laboratorio: "SONS"
  },
  {
    codigo: "7503027446392",
    descripcion: "KIARA c/7 CAPS. Vaginales 100/400 MG. ",
    formula: "Clindamicina+Ketoconazol 100+400mg. (Tabs./Ovulos Vaginales)",
    laboratorio: "PROGELA"
  },
  {
    codigo: "7267983313548",
    descripcion: "MOCEDAM Crema Vaginal TUBO c/18 G. 800-100 MG/5 G. y 3 Aplics.",
    formula: "Clindamicina+Ketoconazol 100+800mg. (Crema Vaginal)",
    laboratorio: "FARMADEXTRUM"
  },
  {
    codigo: "7503004908677",
    descripcion: "CLIOQUINOL (Alpharma) CREMA 3% Tubo c/20 G.",
    formula: "Clioquinol",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503003134787",
    descripcion: "LASALAR-Y SIMPLE CREMA 3% Tubo c/20 G.",
    formula: "Clioquinol",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501258203593",
    descripcion: "LONIXER c/10 TABS. 125 MG.",
    formula: "Clonixinato de Lisina 125mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501258203586",
    descripcion: "LONIXER c/10 TABS. 250 MG.",
    formula: "Clonixinato de Lisina 250mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502003386127",
    descripcion: "PRESTODOL c/10 TABS. 250 MG.",
    formula: "Clonixinato de Lisina 250mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502009749179",
    descripcion: "CICLOBENZAPRINA/CLONIXINATO DE LISINA (Maver) c/20 TABS. 5/125 MG. ",
    formula: "Clonixinato de Lisina+Ciclobenzaprina 125/5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502209850620",
    descripcion: "CIDORIX c/14 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "SOLARA"
  },
  {
    codigo: "7502209858190",
    descripcion: "CIDORIX c/14 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501075719253",
    descripcion: "DEVIPLAT c/14 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501563381375",
    descripcion: "BIOSAHANI c/14 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7506313800090",
    descripcion: "FEDSINA c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502209858183",
    descripcion: "CIDORIX c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563381382",
    descripcion: "BIOSAHANI c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563381139",
    descripcion: "CLOPIDOGREL (Randall) c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502216797079",
    descripcion: "CLOPIDOGREL (Ultra) c/14 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501075719260",
    descripcion: "DEVIPLAT c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501277093762",
    descripcion: "CLOPIDOGREL (Apotex) c/28 TABS. 75 MG.",
    formula: "Clopidogrel",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502009747755",
    descripcion: "VERICIL c/28 TABS. 75/100 MG.",
    formula: "Clopidogrel+Ácido Acetilsalicílico",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501836000255",
    descripcion: "LEBROCETIN c/12 CAPS. 250 MG.",
    formula: "Cloranfenicol  250mg.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502004401225",
    descripcion: "FENICOL SOL. Oftálmica 0.5% Fco. Gotero 15 ML. ",
    formula: "Cloranfenicol (Sol. Oftalmica).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501349028753",
    descripcion: "CLORANFENICOL (Amsa) SOL. Oft. Fco. Gotero 15 ML. 5 MG/1 ML.",
    formula: "Cloranfenicol (Sol. Oftalmica). RED FRÍA",
    laboratorio: "AMSA"
  },
  {
    codigo: "75049645",
    descripcion: "CLORANFENICOL (Opko) Sol. Oft. Fco. Gotero 15 ML. 5 MG/1 ML.",
    formula: "Cloranfenicol (Sol. Oftalmica). RED FRÍA",
    laboratorio: "OPKO"
  },
  {
    codigo: "75049638",
    descripcion: "CLORANFENICOL (Opko) Ungto. Oft. TUBO c/5 G. 5 MG/1 G.",
    formula: "Cloranfenicol (Ungüento oftálmico).",
    laboratorio: "EXAKTA"
  },
  {
    codigo: "7502001167513",
    descripcion: "PORAL SUSP. Oftálmica Fco. Gotero 5 ML. 10-5 MG/1 ML.",
    formula: "Cloranfenicol+Hidrocortisona (OFTALMICO).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573909903",
    descripcion: "DOCSI JARABE Fco. 120 ML. 50 MG/100 ML. ",
    formula: "Clorfenamina (Jarabe)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501825300120",
    descripcion: "BLENDOX JARABE Fco. 60 ML. 50 MG/100 ML.",
    formula: "Clorfenamina (Jarabe)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501573900153",
    descripcion: "DOCSI c/20 TABS. 4 MG.",
    formula: "Clorfenamina (Tabs. Orales)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501825300137",
    descripcion: "BLENDOX c/20 TABS. 4 MG.",
    formula: "Clorfenamina (Tabs. Orales)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502006923527",
    descripcion: "BREGAMIN JARABE Fco. 120 ML. 0.02-0.05 G/100 ML.",
    formula: "Clorfenamina+Fenilefrina",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502006922520",
    descripcion: "BREGAMIN SOL. Fco. Gotero 15 ML. 2-5-60 MG/1 ML.",
    formula: "Clorfenamina+Fenilefrina+Paracetamol (Sol. Gotas)",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502001163058",
    descripcion: "GRIPSON SOL. Fco. Gotero 15 ML. 5-2-60 MG/1 ML.",
    formula: "Clorfenamina+Fenilefrina+Paracetamol (Sol. Gotas)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502006920519",
    descripcion: "BREGAMIN Adulto c/12 TABS. 4/5/500 MG.",
    formula: "Clorfenamina+Fenilefrina+Paracetamol (Tabs. Orales Adulto)",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502009747236",
    descripcion: "EXALIV c/24 TABS. 325/5/2 MG.",
    formula: "Clorfenamina+Fenilefrina+Paracetamol (Tabs. Orales Adulto)",
    laboratorio: "MAVER"
  },
  {
    codigo: "714908105483",
    descripcion: "SALUFILA SOL. Sabor Menta-Hierbabuena 500 ML.",
    formula: "Clorofila en combinación.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "821998000250",
    descripcion: "CLOROPIRAMINA (Schoen) c/20 TABS. 25 MG.",
    formula: "Cloropiramina (Tabs. Orales).",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7506494600205",
    descripcion: "BIRTRIX C/20 TABS. 25 MG.",
    formula: "Cloropiramina (Tabs. Orales).",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502226291871",
    descripcion: "CLORTALIDONA (Alpharma) c/30 TABS. 50 MG.",
    formula: "Clortalidona",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503003134664",
    descripcion: "HIDROPHARM c/30 TABS. 50 MG.",
    formula: "Clortalidona",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501277060238",
    descripcion: "CLORTALIDONA (Apotex) c/20 TABS. 50 MG.",
    formula: "Clortalidona",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501563381238",
    descripcion: "BIORALIN c/20 TABS. 50 MG.",
    formula: "Clortalidona",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380309",
    descripcion: "CLORTALIDONA (Randall) c/20 TABS. 50 MG.",
    formula: "Clortalidona",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501476029333",
    descripcion: "SOL. ISTCA. CLRO. DE SODIO (Cryopharma) Sol. Iny. 0.9% c/100 AMPTAS. 10 ML.",
    formula: "Cloruro de Sodio (Sol. Inyectable) Microsolución.",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502004401218",
    descripcion: "CLOTRIMAZOL (Avivia) CREMA TOPICA Tubo c/30 G. 1 G/100 G.",
    formula: "Clotrimazol (Crema Dérmica 1%).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501573904403",
    descripcion: "LOZAMIR-C CREMA Tubo c/30 G. 1.0 G/100 G.",
    formula: "Clotrimazol (Crema Dérmica 1%).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502001165977",
    descripcion: "CLOTRIMAZOL (Son´s) CREMA 1% DERMICA Tubo c/30 G.",
    formula: "Clotrimazol (Crema Dérmica 1%).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009740367",
    descripcion: "TENESCAN CREMA Tubo c/20 G. 10 MG/1 G.",
    formula: "Clotrimazol (Crema Dérmica 1%).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227426876",
    descripcion: "DEREGEL CREMA 1% TUBO c/30 G.",
    formula: "Clotrimazol (Crema Dérmica 1%).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501573906407",
    descripcion: "LOZAMIR-V CREMA VAGINAL 2% Tubo c/20 G. y 3 Aplics.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503002772881",
    descripcion: "CERYLOR CREMA Vaginal 2% Tubo c/20 G. y 3 Aplics.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501836009586",
    descripcion: "LIFERZOL-V CREMA VAGINAL 2% TUBO c/20 G. y 3 Aplics.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502009740374",
    descripcion: "TENESCAN-V CREMA 2% Tubo c/20 G. y 3 Aplics.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227426852",
    descripcion: "BEMYNEX-V CREMA 2% Tubo c/20 G. y 3 Aplicadores.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502001165984",
    descripcion: "CLOTRIMAZOL (Son´s) CREMA 2% VAGINAL Tubo c/20 G. y 3 Aplics.",
    formula: "Clotrimazol (Crema Vaginal 2%).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001163485",
    descripcion: "CLOTRIMAZOL (Son´s) DUAL 3 Dias c/3 OVS. 200 MG. y Tubo CMA. 10 G. 1%.",
    formula: "Clotrimazol (Óvulos 200mg. y Crema Vaginal 1%)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001164413",
    descripcion: "CLOTRIMAZOL (Son´s) c/1 ÓVULO 500 MG.",
    formula: "Clotrimazol (Óvulos 500mg)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009749490",
    descripcion: "CLOTRIMAZOL/DEXAMETASONA (Maver) CREMA Tubo c/30 G. 1-0.04 G/100 G.",
    formula: "Clotrimazol+Dexametasona",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506022803153",
    descripcion: "JABON Para BEBE (Karla Di) 100 G.",
    formula: "Cocoato de sodio",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502299970710",
    descripcion: "COENZIMA Q-10 Facial (Dr. Will R. Lax) c/30 CAPS. 650 MG. ",
    formula: "Coenzima Q-10. (Cápsulas faciales).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970765",
    descripcion: "COLÁGENO Facial (Dr. Will R. Lax) c/30 CAPS. 650 MG.",
    formula: "Colágeno (Cosmético).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970123",
    descripcion: "COLÁGENO Facial (Dr. Will R. Lax) c/60 CAPS. 650 MG.",
    formula: "Colágeno (Cosmético).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502009741524",
    descripcion: "COLÁGENO HIDROLIZADO c/60 TABS. 700 MG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008986896",
    descripcion: "FELAGEN c/60 TABS. 500 MG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503181042058",
    descripcion: "HERBOFX c/100 COMPS. 700 MG. ",
    formula: "Colágeno en Combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "781584367436",
    descripcion: "BIO-COLÁGENO POLVO Sabor Uva BOTE c/450 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "781584367429",
    descripcion: "BIO-COLÁGENO POLVO Sabor Naranja BOTE c/450 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "781584367535",
    descripcion: "BIO-COLÁGENO POLVO Sabor Naranja BOLSA c/450 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "781584367542",
    descripcion: "BIO-COLÁGENO POLVO Sabor Uva BOLSA c/450 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503181041556",
    descripcion: "COLAGENER c/60 TABS. 660 MG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502280810186",
    descripcion: "COLLAGEN SKIN (Supra) c/72 CAPS. 500 MG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7503181043147",
    descripcion: "COLÁGENO (VidaHerbal) c/100 COMPS. 700 MG. ",
    formula: "Colágeno en Combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7501590287541",
    descripcion: "KARABELL Colágeno POLVO c/15 SOBRES 10 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502280810070",
    descripcion: "SUPRA CLL COLÁGENO Polvo c/GUANABANA Bote c/1.1 KG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502280810094",
    descripcion: "SUPRA CLL COLAGENO Polvo c/MANZANA VERDE Bote c/1.1 KG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502280810124",
    descripcion: "SUPRA CLL COLÁGENO Polvo c/UVA Bote c/1.1 KG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502280810568",
    descripcion: "CLL COLÁGENO c/OMEGA 3,6,9 (Supra) POLVO Sab. Natural Bote c/1.1 KG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502280810063",
    descripcion: "CLL COLÁGENO (Supra) Polvo c/ARÁNDANO Bote c/1.1 KG.",
    formula: "Colágeno en Combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502259891451",
    descripcion: "COLÁGENO HIDROLIZADO POLVO Sin Azúcar Sabor Uva BOTE c/200 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502009744051",
    descripcion: "COLÁGENO HIDROLIZADO y ACEROLA (Naturex) POLVO Sab. Mandna. Fco. c/200 G.",
    formula: "Colágeno en Combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502266031116",
    descripcion: "COLAGENER-3 POLVO Sabor Pepino-Limón s/Ázucar BOLSA c/150 G. ",
    formula: "Colágeno en Combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259892373",
    descripcion: "S-KIN X c/10 SOBS. POLVO 5 G.",
    formula: "Colágeno, péptidos de (en combinación).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501573909958",
    descripcion: "COLCHICINA (Biomep) c/30 TABS. 1 MG. ",
    formula: "Colchicina",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501109762446",
    descripcion: "COLCHIQUIM c/20 TABS. 1 MG.",
    formula: "Colchicina",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109764198",
    descripcion: "COLCHICINA (Perrigo) c/30 TABS. 1 MG.",
    formula: "Colchicina",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501590288814",
    descripcion: "SORU-V c/30 TABS. Masticables 4000 UI. ",
    formula: "Colecalciferol   4000 UI.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502227427811",
    descripcion: "DETRESGEL c/30 CAPS. 5000 UI.",
    formula: "Colecalciferol   5000 UI.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502227427330",
    descripcion: "DETRESGEL c/60 CAPS. 5000 UI.",
    formula: "Colecalciferol   5000 UI.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501590288425",
    descripcion: "DEKA 32 c/30 CAPS. 300 MG.",
    formula: "Colecalciferol (D3)+Menaquinona (K2)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502245841255",
    descripcion: "AVECITALFIN Sol. Iny. c/1 FCO. AMP. 10 ML. 5-100-1 MG/1 ML y 5 Jgas.",
    formula: "Complejo B [Tiamina, Cianocobalamina]+Lidocaína (Sol. Iny.)",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501258205092",
    descripcion: "FORTICAL c/30 TABS. 50/50/50/0.25 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 0.25mg]+Diclofenaco 50mg. (Tabs.)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009740602",
    descripcion: "DOLVIFEN c/30 TABS. L.R. 50/50/50/1 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1.0mg]+Diclofenaco  50mg. (Tabs.)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216790865",
    descripcion: "DICLOFENACO/COMPLEJO B (Ultra) c/30 TABS. 50/50/50/1 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1.0mg]+Diclofenaco  50mg. (Tabs.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216791602",
    descripcion: "ARIFLAM FORTE c/30 TABS. 50/50/50/1.0 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1.0mg]+Diclofenaco  50mg. (Tabs.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216803879",
    descripcion: "DICLOFENACO/COMPLEJO B (Avivia) c/30 TABS. 50/50/50/1 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1.0mg]+Diclofenaco  50mg. (Tabs.)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501258205085",
    descripcion: "FORTICAL Forte c/30 TABS. 50/50/50/1 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1.0mg]+Diclofenaco  50mg. (Tabs.)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502001039247",
    descripcion: "DOLO-TRIRONVIT Sol. Iny. c/3 Dosis 100-100-1-75 MG/3 ML. y 3 Jeringas.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 1mg]+Diclofenaco 75mg. (Sol. Iny.)",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502001166974",
    descripcion: "DICLOVITH-B-FRT Sol. Iny. c/3 Dosis 100,100,20,5,75 MG/3 ML. y 3 Jgas.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina 5mg]+Diclofenaco 75mg. (Sol. Iny.)",
    laboratorio: "SONS"
  },
  {
    codigo: "7501563380118",
    descripcion: "BIOTRIVIN c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380224",
    descripcion: "TIAMINA/PIRIDOXINA/CIANOCOBALAMINA (Randall) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502274791811",
    descripcion: "LODEXIED c/30 TABS. 100/5.0/0.05 MG. ",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502010581294",
    descripcion: "COMPLEJO B (Sydenham) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502227426111",
    descripcion: "ZEBETYN GEL c/30 CAPS. 100/5/0.05 MG. ",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502216792784",
    descripcion: "COMPLEJO B (Ultra) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502226295473",
    descripcion: "TIAMINA/PIRIDOXINA/CIANOCOBALAMINA (Alpharma) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216803633",
    descripcion: "COMPLEJO B (Avivia) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216803640",
    descripcion: "COMPLEJO B DIABETICO (Avivia) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503049078441",
    descripcion: "COMPLEJO B (Avivia) c/30 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502010581508",
    descripcion: "MIFISUR c/60 TABS. 100/5/0.05 MG.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina] Tabs.",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502001039261",
    descripcion: "DEXA-TRIRONVIT Sol. Iny. c/2 AMPTAS. (1-2) 100-100-1-4 MG/3 ML.",
    formula: "Complejo B [Tiamina, Piridoxina, Cianocobalamina]+Dexametasona+Lidocaína (Sol. Iny.)",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502001167261",
    descripcion: "SONSPIXINA Sol. Iny. c/10 AMPTAS. (1-2) 100-100-10 MG/2 ML. y 5 Jeringas.",
    formula: "Complejo B [Tiamina, Piridoxina, Hidroxocobalamina] Sol. Iny.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009746574",
    descripcion: "TREXIVER 50,000 Sol. Iny. c/5 AMPTAS. 100-50-10 MG/2 ML. y 5 Jeringas.",
    formula: "Complejo B [Tiamina, Piridoxina, Hidroxocobalamina] Sol. Iny.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009742835",
    descripcion: "MAXI-B c/30 TABS. 670 MG.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "637420612522",
    descripcion: "KARIM KIDD c/90 TABS. 190 MG.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420614748",
    descripcion: "KARIM HIERRO c/60 TABS. 550 MG.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501590286179",
    descripcion: "COPLEFOR-B c/50 CAPS. 1.12 G.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "CMD"
  },
  {
    codigo: "7502227427170",
    descripcion: "COMPLEJO-B/HIERRO/ZINC y LECITINA DE SOYA (Gelpharma) c/60 CAPS. 0.42 G.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "714908100303",
    descripcion: "COMPLEJO B y B12 (Salud Natural) c/50 TABS.",
    formula: "Complejo B enriquecido (Caps/Tabs).",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "637420114040",
    descripcion: "KARIM HIERRO SOLUCIÓN Sab. Plátano Fco. 240 ML.",
    formula: "Complejo B enriquecido (Sol. Oral).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420410906",
    descripcion: "KARIM KIDD JBE. Sabor Naranja Fco. 240 ML.",
    formula: "Complejo B enriquecido (Sol. Oral).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501825300175",
    descripcion: "CONVIFER c/HIERRO SOL. Fco. 110 ML.",
    formula: "Complejo B+Ciproheptadina+Hierro",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501825300991",
    descripcion: "CONVIFER c/HIERRO SOL. Fco. 220 ML",
    formula: "Complejo B+Ciproheptadina+Hierro",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502283560163",
    descripcion: "COMPRESA FRÍA PARCHE DE HIDROGEL (CertusPharma) Sobre c/2 Pzs.",
    formula: "Compresa fría (Parche de hidrogel).",
    laboratorio: "CERTUS PHARMA"
  },
  {
    codigo: "7506022805928",
    descripcion: "CONCHA NACAR c/VITAMINA-E (Karla Di) CREMA Tarro c/90 G.",
    formula: "Concha Nácar (Crema).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022805911",
    descripcion: "CONCHA NACAR (Karla Di) CREMA Tarro c/90 G.",
    formula: "Concha Nácar (Crema).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022800916",
    descripcion: "JABÓN de CONCHA NÁCAR (Karla Di) Barra c/100 G.",
    formula: "Concha Nácar (Jabón).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022807267",
    descripcion: "RETINOL c/VITAMINA-E CREMA (Karla Di) Tarro c/90 G.",
    formula: "Crema cosmética antiedad",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022807274",
    descripcion: "PLACENTA CREMA (Karla-Di) Tarro c/90 G.",
    formula: "Crema cosmética antiedad",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "75053086",
    descripcion: "CROMOGLICATO DE SODIO (Opko) Sol. Oft. Fco. Gotero 5 ML. 40 MG/1 ML.",
    formula: "Cromoglicato de Sodio 4% (Oftalmico)",
    laboratorio: "OPKO"
  },
  {
    codigo: "8400005809",
    descripcion: "CROMOGLICATO de SODIO (Grin) Sol. Oft. 4% Fco. Gotero 5 ML.",
    formula: "Cromoglicato de Sodio 4% (Oftalmico)",
    laboratorio: "GRIN"
  },
  {
    codigo: "7502280810230",
    descripcion: "CÚRCUMA (Supra) c/72 CAPS. 500 MG.",
    formula: "Cúrcuma",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7501590287947",
    descripcion: "LIBREX c/30 TABLETAS 850 MG.",
    formula: "Cúrcuma",
    laboratorio: "CMD"
  },
  {
    codigo: "7502227875483",
    descripcion: "FREWER c/20 TABS. 6 MG.",
    formula: "Deflazacort  6mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009746727",
    descripcion: "CARIDEN c/20 TABS.  6 MG.",
    formula: "Deflazacort  6mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502213042011",
    descripcion: "DANZAFHAL c/20 TABS. 6 MG.",
    formula: "Deflazacort  6mg.",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502004402635",
    descripcion: "DEFLAZACORT (Offenbach) c/20 TABS. 6 MG.",
    formula: "Deflazacort  6mg.",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501075726084",
    descripcion: "DEFLAZACORT (Novag) c/20 TABS. 6 MG.",
    formula: "Deflazacort  6mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502213042028",
    descripcion: "DANZAFHAL c/10 TABS. 30 MG.",
    formula: "Deflazacort 30mg.",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502009746734",
    descripcion: "CARIDEN c/10 TABS. 30 MG.",
    formula: "Deflazacort 30mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501075726091",
    descripcion: "DEFLAZACORT (Novag) c/10 TABS. 30 MG.",
    formula: "Deflazacort 30mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501573907688",
    descripcion: "VALGAB JARABE Fco. 60 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502223111080",
    descripcion: "HISTAPHARM JARABE Fco.  60 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502223112452",
    descripcion: "HISTAPHARM JARABE Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501573907701",
    descripcion: "VALGAB JARABE Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009745768",
    descripcion: "BENNET SOLUCIÓN Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501537102975",
    descripcion: "BLOTAMIN JARABE Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7501478315847",
    descripcion: "DESVITAE SOL. Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "VITAE"
  },
  {
    codigo: "7501825304395",
    descripcion: "DEGORTRINA JARABE Fco. 120 ML. 50 MG/100 ML.",
    formula: "Desloratadina (Sol. Oral)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502208894809",
    descripcion: "ABRUNT c/10 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502223112346",
    descripcion: "HISTAPHARM c/10 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502247374249",
    descripcion: "LIRUDINE c/10 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502009745881",
    descripcion: "BENNET c/10 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502223112438",
    descripcion: "HISTAPHARM c/30 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502247374256",
    descripcion: "LIRUDINE c/30 TABS. 5 MG.",
    formula: "Desloratadina (Tabs. Orales)",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502256040098",
    descripcion: "NADINKEL SOL. p/Inhalación Nasal Fco. 2.5 ML. c/25 DOSIS 10 MCG.",
    formula: "Desmopresina (Nasal)",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7503049078120",
    descripcion: "DESVENLAFAXINA (Avivia) c/14 TABS. L.P.  50 MG. ",
    formula: "Desvenlafaxina  50mg. (Tabs. Orales.)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790834",
    descripcion: "DESVENLAFAXINA (Ultra) c/14 TABS. L.P.  50 MG. ",
    formula: "Desvenlafaxina  50mg. (Tabs. Orales.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216790827",
    descripcion: "DESVENLAFAXINA (Ultra) c/28 TABS. L.P.  50 MG. ",
    formula: "Desvenlafaxina  50mg. (Tabs. Orales.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078113",
    descripcion: "DESVENLAFAXINA (Avivia) c/28 TABS. L.P.  50 MG. ",
    formula: "Desvenlafaxina  50mg. (Tabs. Orales.)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790872",
    descripcion: "DESVENLAFAXINA (Ultra) c/14 TABS. L.P. 100 MG. ",
    formula: "Desvenlafaxina 100mg. (Tabs. Orales.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078144",
    descripcion: "DESVENLAFAXINA (Avivia) c/14 TABS. L.P. 100 MG. ",
    formula: "Desvenlafaxina 100mg. (Tabs. Orales.)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790841",
    descripcion: "DESVENLAFAXINA (Ultra) c/28 TABS. L.P. 100 MG.",
    formula: "Desvenlafaxina 100mg. (Tabs. Orales.)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078137",
    descripcion: "DESVENLAFAXINA (Avivia) c/28 TABS. L.P. 100 MG.",
    formula: "Desvenlafaxina 100mg. (Tabs. Orales.)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502245840692",
    descripcion: "REXIPATEN Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501349027329",
    descripcion: "DEXAMETASONA (Amsa) Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501476090685",
    descripcion: "CRYOMETASONA Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502009745775",
    descripcion: "DEXAMETASONA (Medigen) Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7502001166844",
    descripcion: "METAX Sol. Iny. c/1 AMPTA. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502245841347",
    descripcion: "REXIPATEN Sol. Iny. c/3 AMPTAS. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7502001038844",
    descripcion: "TRIRONVIT DEX Sol. Iny. c/3 AMPTAS. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501476085582",
    descripcion: "CRYOMETASONA Sol. Iny. c/3 AMPTAS. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502001166776",
    descripcion: "METAX Sol. Iny. c/3 AMPTAS. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009743597",
    descripcion: "VERICORT Sol. Iny. c/3 AMPTAS. 8 MG/2 ML.",
    formula: "Dexametasona (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502004401331",
    descripcion: "DECADOFFEN Sol. Oftálmica Fco. Gotero 5 ML. 1 MG/1 ML.",
    formula: "Dexametasona (Sol. Oftálmica)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502209810020",
    descripcion: "ADRECORT Cja/Fco. c/30 TABS. 0.5 MG.",
    formula: "Dexametasona 0.5mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502209810013",
    descripcion: "ADRECORT Cja/Fco. c/20 TABS. 0.5 MG.",
    formula: "Dexametasona 0.5mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501342801124",
    descripcion: "DEXAMETASONA (Avivia) c/30 TABS. 0.5 MG.",
    formula: "Dexametasona 0.5mg. (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502209810044",
    descripcion: "ADRECORT Cja/Fco. c/20 TABS. 1 MG.",
    formula: "Dexametasona 1mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501825300533",
    descripcion: "LERGOSIN-A c/15 TABS. 0.25/2 MG.",
    formula: "Dexametasona+Clorfenamina",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502001039278",
    descripcion: "YALOTAL c/24 GRAG. 0.5/100 MG.",
    formula: "Dexametasona+Fenilbutazona.",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501644700330",
    descripcion: "DIBUTASONA c/30 GRAG. 0.5/100 MG.",
    formula: "Dexametasona+Fenilbutazona.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "780083150099",
    descripcion: "ZOLIDIME c/20 GRAG. 200/100/0.5/200 MG.",
    formula: "Dexametasona+Fenilbutazona+Ácido Acetilsalicílico+Aluminio.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140274",
    descripcion: "ZOLIDIME c/20 GRAG. 200/100/0.5/200 MG.",
    formula: "Dexametasona+Fenilbutazona+Ácido Acetilsalicílico+Aluminio.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083150082",
    descripcion: "VENGESIC c/20 GRAG. 100/0.5/200/200 MG.",
    formula: "Dexametasona+Fenilbutazona+Metocarbamol+Aluminio.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140731",
    descripcion: "VENGESIC c/20 GRAG. 100/0.5/200/200 MG.",
    formula: "Dexametasona+Fenilbutazona+Metocarbamol+Aluminio.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001165014",
    descripcion: "DEXIMET c/30 GRAG. 25/0.25 MG.",
    formula: "Dexametasona+Indometacina.",
    laboratorio: "SONS"
  },
  {
    codigo: "780083139889",
    descripcion: "GOTADEX SOL. Oftálmica Fco. Gotero 5 ML. 1.0/3.5 MG/1 ML.",
    formula: "Dexametasona+Neomicina (Sol. Oftálmica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501349029668",
    descripcion: "DEXAMETASONA/NEOMICINA (Amsa) Sol. Oft. Fco. Got. 10 ML. 1-3.5 MG/1 ML.",
    formula: "Dexametasona+Neomicina (Sol. Oftálmica)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001167520",
    descripcion: "SONDEX-OF SOL. Oftálmica Fco. Gotero 5 ML. 3.5-1.0 MG/1 ML.",
    formula: "Dexametasona+Neomicina (Sol. Oftálmica)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502004401454",
    descripcion: "DEXNE OFTÁLMICO SOL. Fco Gotero 4 ML. 100-500 MG/100 ML.",
    formula: "Dexametasona+Neomicina (Sol. Oftálmica)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502001162815",
    descripcion: "NEODEFRIN SOL. Nasal Fco. Gotero 15 ML. 0.5-3.5-5.0 MG/1 ML.",
    formula: "Dexametasona+Neomicina+Fenilefrina (NASAL).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083139544",
    descripcion: "BEXINE SOL. NASAL Fco. Gotero 15 ML. 0.5-3.5-5.0 MG/1 ML.",
    formula: "Dexametasona+Neomicina+Fenilefrina (NASAL).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502004401409",
    descripcion: "DEXNE NASAL SOL. Fco. Gotero 10 ML. 1.0-3.5-2.5 MG/1 ML.",
    formula: "Dexametasona+Neomicina+Fenilefrina (NASAL).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502004401508",
    descripcion: "DEXNE ÓTICO SOL. Fco. Gotero 10 ML. 1.0-3.5-15.0 MG/1 ML.",
    formula: "Dexametasona+Neomicina+Lidocaína. (OTICO).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502226295954",
    descripcion: "DEXKETOPROFENO c/10 TABS. 25 MG.",
    formula: "Dexketoprofeno (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502009746222",
    descripcion: "DOXON c/10 TABS. 25 MG.",
    formula: "Dexketoprofeno (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009748844",
    descripcion: "DOXON c/20 TABS. 25 MG.",
    formula: "Dexketoprofeno (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749391",
    descripcion: "DEXLANSOPRAZOL (Maver) c/14 CAPS. L.R. 30 MG. ",
    formula: "Dexlansoprazol 30mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503049078281",
    descripcion: "DEXLANSOPRAZOL (Avivia) c/ 7 CAPS. L.R. 60 MG.",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790681",
    descripcion: "DEXLANSOPRAZOL (Ultra) c/14 CAPS. L.R. 60 MG. ",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216790698",
    descripcion: "DEXLANSOPRAZOL (Ultra) c/ 7 CAPS. L.R. 60 MG. ",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009749384",
    descripcion: "DEXLANSOPRAZOL (Maver) c/14 CAPS. L.R. 60 MG. ",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503049078298",
    descripcion: "DEXLANSOPRAZOL (Avivia) c/14 CAPS. L.R. 60 MG.",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790674",
    descripcion: "DEXLANSOPRAZOL (Ultra) c/28 CAPS. L.R. 60 MG. ",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078304",
    descripcion: "DEXLANSOPRAZOL (Avivia) c/28 CAPS. L.R. 60 MG.",
    formula: "Dexlansoprazol 60mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "781100163900",
    descripcion: "KAMEDIX Sol. Iny. c/5 FCO. AMP. 200 MCG/2 ML.",
    formula: "Dexmedetomidina",
    laboratorio: "FARMADEXTRUM"
  },
  {
    codigo: "7811001639006",
    descripcion: "KAMEDIX Sol. Iny. c/5 FCO. AMP. 200 MCG/2 ML.",
    formula: "Dexmedetomidina",
    laboratorio: "FARMADEXTRUM"
  },
  {
    codigo: "7502245840623",
    descripcion: "AVEMEDIT Sol. Iny. c/5 FCO. AMP. 200 MCG/2 ML.",
    formula: "Dexmedetomidina",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7502009745997",
    descripcion: "PAMEDAN POMADA 5% Tubo c/ 30 G. ",
    formula: "Dexpantenol (Pomada protectora)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749421",
    descripcion: "DEXPANTENOL (Maver) CREMA 5% "Tattoo" Tubo c/30 G.",
    formula: "Dexpantenol (Pomada protectora)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001167124",
    descripcion: "DEXPANTENOL (Son´s) POMADA Protectora "Tattoo" Tubo c/30 G. 5.0 G/100 G.",
    formula: "Dexpantenol (Pomada protectora)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001166578",
    descripcion: "BABYSONS POMADA Tubo c/30 G. 5.0 G/100 G. ",
    formula: "Dexpantenol (Pomada protectora)",
    laboratorio: "SONS"
  },
  {
    codigo: "18008",
    descripcion: "BALSEDRINA JARABE Fco. 120 ML. 300 MG/100 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501563370997",
    descripcion: "BIOQUIDAN JARABE Fco. 120 ML. 15 MG/5 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380408",
    descripcion: "DEXTROMETORFANO JARABE (Randall) Fco. 120 ML. 15 MG/5 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501571200231",
    descripcion: "BALSEDRINA JARABE Fco. 120 ML. 300 MG/100 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501825300076",
    descripcion: "DEBEQUIN JARABE Fco. 120 ML. 300 MG/100 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501277078073",
    descripcion: "PROTAN JARABE Fco. 120 ML. 15 MG/5 ML.",
    formula: "Dextrometorfano. (Susp. Oral.)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501573908036",
    descripcion: "BROXTORFAN JBE. Infantil  Fco. 120 ML. 113-150 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "17485",
    descripcion: "SOLVO DEX JBE. Infantil Fco. 120 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502009740275",
    descripcion: "COBADEX SOL. Infantil Fco. 120 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001164482",
    descripcion: "BROMINOL-C JARABE Infantil Fco. 120 ML. 113-150 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501478315830",
    descripcion: "NAVIFLEXOL SOL. Infantil Fco. 150 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502211789284",
    descripcion: "FARIBROX TM JBE. Infantil Fco. 150 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001063464",
    descripcion: "SOLVO DEX JBE. Infantil Fco. 120 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501825303817",
    descripcion: "DEGORQUIN JBE. Infantil Fco. 150 ML. 113-150 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502003380590",
    descripcion: "BROGAL-T SOL. Infantil Fco. 120 ML. 150-113 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol.  Infantil).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "16834",
    descripcion: "SOLVO DEX JBE. Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501573907992",
    descripcion: "BROXTORFAN JBE. Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501478316806",
    descripcion: "NAVIFLEXOL SOL. Adulto Fco. 150 ML.  225-225 MG/100 ML. ",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502009740268",
    descripcion: "COBADEX SOL. Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001164475",
    descripcion: "BROMINOL-C JARABE Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502211789277",
    descripcion: "FARIBROX TM JBE. Adulto Fco. 150 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001033443",
    descripcion: "SOLVO DEX JBE. Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502003380583",
    descripcion: "BROGAL-T SOL. Adulto Fco. 120 ML. 225-225 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Adulto).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501478316066",
    descripcion: "NAVIFLEXOL SOL. Pediátrica Fco. Gotero 30 ML. 400-400 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Pediátrica).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502009745805",
    descripcion: "COBADEX SOL. Pediátrico Fco. Gotero 30 ML. 400-400 MG/100 ML.",
    formula: "Dextrometorfano+Ambroxol ( Sol. Pediátrica).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501573905431",
    descripcion: "TROMEFEN JARABE Adulto Fco. 120 ML. 150-2000 MG/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (ADULTO)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501836000101",
    descripcion: "BECTOSAN JARABE Fco. 120 ML. 0.300-1.5 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (ADULTO)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501825300274",
    descripcion: "DEBEQUIN-C JARABE Adulto Fco. 120 ML. 0.3-2.0 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (ADULTO)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "17811",
    descripcion: "KARIFAN JARABE Infantil Fco. 100 ML. 0.150-1.0 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (INFANTIL)",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501573905417",
    descripcion: "TROMEFEN JARABE Infantil Fco. 120 ML. 100-1500 MG/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (INFANTIL)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502001033306",
    descripcion: "KARIFAN JARABE Infantil Fco. 100 ML. 0.150-1.0 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (INFANTIL)",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501825301004",
    descripcion: "DEBEQUIN-C JBE. Infantil  Fco. 120 ML. 0.15-1.0 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (INFANTIL)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502003388527",
    descripcion: "YADEGAL SOL. Pediátrico Fco. Gotero 30 ML. 0.275-2.25 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina. (PEDIATRICO)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502001163072",
    descripcion: "RIDIN JARABE Adulto Fco. 120 ML. 0.150-2.0-0.020 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Clorfenamina. (ADULTO)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502003388510",
    descripcion: "YADEGAL Compuesto JARABE Fco. 120 ML. 0.20-2.0-0.03 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Clorfenamina. (ADULTO)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502001163232",
    descripcion: "RIDIN JARABE Pediátrico Fco. 120 ML. 0.100-1.0-0.010 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Clorfenamina. (INFANTIL)",
    laboratorio: "SONS"
  },
  {
    codigo: "7501342801100",
    descripcion: "DEXTRFNO/GUIAFNA/FENLNA. (Avivia) JBE. Ad. Fco. 118 ML 0.300/2.4/0.050 G.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Adulto).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502209810365",
    descripcion: "TUSILEN JARABE Adulto Fco. 118 ML. 0.300-2.4-0.050 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Adulto).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009742132",
    descripcion: "EXALVER (GFD) SOL. Infantil Fco. 120 ML. 5.0-0.25-0.50 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Infantil)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825304371",
    descripcion: "FLEMIGOR SOL. Infantil Fco. 150 ML. 2000-100-200 MG/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Infantil)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009742149",
    descripcion: "EXALVER (GFD) SOL. Pedtco. Fco. Gotero 30 ML. 5-0.25-0.50 G/100 ML.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Pediátrico)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825304388",
    descripcion: "FLEMIGOR SOL. Pedtco. Fco. 60 ML. 2000-100-200 MG/100 ML. y Dosificador.",
    formula: "Dextrometorfano+Guaifenesina+Fenilefrina. (Pediátrico)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502209810358",
    descripcion: "TUSILEN Pediátrico JARABE Fco. 118 ML. 0.150-1.2-3.0 G/100 G.",
    formula: "Dextrometorfano+Guaifenesina+Paracetamol. (INFANTIL).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7503049078380",
    descripcion: "DEXTRFNO/GUIAFNA/PARCTML. (Avivia) JBE. Ped. Fco.118 ML. 0.150/1.2/3 G.",
    formula: "Dextrometorfano+Guaifenesina+Paracetamol. (INFANTIL).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502001163065",
    descripcion: "OXIN JARABE Adulto Fco. 120 ML. 0.15-2.50 G/100 ML.",
    formula: "Dextrometorfano+Sulfoguayacol. (ADULTO).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001163119",
    descripcion: "OXIN JBE. Infantil Fco. 120 ML. 0.100-1.5 G/100 ML.",
    formula: "Dextrometorfano+Sulfoguayacol. (INFANTIL).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009745096",
    descripcion: "VIAFLEX c/30 CAPS. 50 MG.",
    formula: "Diacereína",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501250812328",
    descripcion: "DIACEREÍNA (Teva) c/20 CAPS. 50 MG.",
    formula: "Diacereína",
    laboratorio: "TEVA"
  },
  {
    codigo: "7501825300786",
    descripcion: "SEDICLON c/30 TABS. 10 MG.",
    formula: "Dicicloverina",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501349027848",
    descripcion: "DICLOFENACO (Amsa) Sol. Oftálmica Fco. Got. 5 ML. 1 MG/1 ML.",
    formula: "Diclofenaco (Sol. Oftálmica).",
    laboratorio: "AMSA"
  },
  {
    codigo: "8400007391",
    descripcion: "DICLOFENACO (Grin) Sol. Oft. Fco. Gotero 5 ML. 1 MG/1 ML.",
    formula: "Diclofenaco (Sol. Oftálmica).",
    laboratorio: "GRIN"
  },
  {
    codigo: "7502226294421",
    descripcion: "DICLOFENACO (Alpharma) GEL 1% TUBO c/40 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503028771677",
    descripcion: "CRADOXOL GEL 1.160% Tubo c/60 G. ",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502227426869",
    descripcion: "ROTUMAL GEL 1.16% Tubo c/60 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502009740251",
    descripcion: "MAFENA GEL Tubo c/60 G. 1.16 G/100 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083141066",
    descripcion: "VOLFENAC GEL 1.235% Tubo c/60 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "COLLINS"
  },
  {
    codigo: "785118752866",
    descripcion: "FENAGEL GEL 1.160% Tubo c/60 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502001160118",
    descripcion: "ATALAK Sport CREMA 1.0% TUBO c/60 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "SONS"
  },
  {
    codigo: "7502003381559",
    descripcion: "DOLFLAM GEL 1.0% Tubo c/60 G.",
    formula: "Diclofenaco (Tópico) 1.16%",
    laboratorio: "RAYERE"
  },
  {
    codigo: "780083149024",
    descripcion: "VOLFENAC GEL 2.32% 12h Tubo c/100 G.",
    formula: "Diclofenaco (Topico) 2.32%",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502211784241",
    descripcion: "DOFLATEM SUSP. Fco. 120 ML. 0.18 G/100 ML.",
    formula: "Diclofenaco ácido libre 180mg. (Susp. Oral.)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502227427491",
    descripcion: "ROTUMAL /10 CAPS. 25 MG. ",
    formula: "Diclofenaco Potásico 25mg. (Caps/Tabs).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502227426159",
    descripcion: "ROTUMAL c/30 CAPS. 25 MG.",
    formula: "Diclofenaco Potásico 25mg. (Caps/Tabs).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7503000422351",
    descripcion: "MAFENA c/20 TABS. 50 MG.",
    formula: "Diclofenaco Sódico  50mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502226292038",
    descripcion: "DICLOFENACO (Alpharma) Sol. Iny. c/2 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502245840173",
    descripcion: "DIFETRIL Sol. Iny. c/2 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501349025929",
    descripcion: "DICLOFENACO (Amsa) Sol. Iny. c/2 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "780083142018",
    descripcion: "VOLFENAC Sol. Iny. c/2 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001160101",
    descripcion: "ATALAK Sol. Iny. c/2 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083142025",
    descripcion: "VOLFENAC Sol. Iny. c/4 AMPTAS. 75 MG/3 ML.",
    formula: "Diclofenaco Sódico  75mg. (Sol. Inyectable).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216802919",
    descripcion: "DICLOFENACO (Ultra) c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216802964",
    descripcion: "ARIFLAM c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384546250",
    descripcion: "DICLOFENACO (Neolpharma) c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502216803862",
    descripcion: "DICLOFENACO (Avivia) c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502009746017",
    descripcion: "DICLOFENACO (Medigen) c/20 TABS. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501537102845",
    descripcion: "NEDICLON c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7503000422368",
    descripcion: "MAFENA Retard c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150150",
    descripcion: "VOLFENAC Retard c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083148898",
    descripcion: "VOLFENAC Retard c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501385494932",
    descripcion: "ORMOFEN c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7502216803015",
    descripcion: "ARIFLAM c/50 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502003381573",
    descripcion: "DOLFLAM Retard c/20 TABS. L.P. 100 MG.",
    formula: "Diclofenaco Sódico 100mg. (Tabs. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502003381610",
    descripcion: "CARISOPRODOL/DICLOFENACO (Rayere) c/20 TABS. 50/200 MG.",
    formula: "Diclofenaco Sódico+Carisoprodol.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "656599040226",
    descripcion: "TOFEL c/10 TABS. 50/500 MG.",
    formula: "Diclofenaco Sódico+Paracetamol.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7503001007083",
    descripcion: "AMIFARIN SUSP. Fco. 60 ML. 125 MG/5 ML.               ",
    formula: "Dicloxacilina  125mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503001007298",
    descripcion: "AMIFARIN c/20 CAPS. 250 MG.",
    formula: "Dicloxacilina  250mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7503001007090",
    descripcion: "AMIFARIN SUSP. Fco. 60 ML. 250 MG/5 ML.",
    formula: "Dicloxacilina  250mg. (Susp. Oral).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502001163782",
    descripcion: "DICLEOPHEN c/12 CAPS. 500 MG.",
    formula: "Dicloxacilina  500mg. (Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7503001007106",
    descripcion: "AMIFARIN c/12 CAPS. 500 MG.               ",
    formula: "Dicloxacilina  500mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502009747229",
    descripcion: "DIXEN c/20 CAPS. 500 MG.",
    formula: "Dicloxacilina  500mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503001007113",
    descripcion: "AMIFARIN c/20 CAPS. 500 MG.               ",
    formula: "Dicloxacilina  500mg. (Caps. Orales).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "780083146238",
    descripcion: "COXACLAN c/20 CAPS. 500 MG.",
    formula: "Dicloxacilina  500mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506353200478",
    descripcion: "VIVASSE POLVO Sabor Natural LATA c/400 G.",
    formula: "Dieta polimérica  (nutrición completa y balanceada, normocalorica 1.0 Kcal.)",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "714908100815",
    descripcion: "ENERSOY Sabor Vainilla POLVO Bote c/500 G.",
    formula: "Dieta polimérica  (nutrición completa y balanceada, normocalorica 1.0 Kcal.)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908107418",
    descripcion: "ENERSOY Sabor Fresa POLVO Bote c/500 G.",
    formula: "Dieta polimérica  (nutrición completa y balanceada, normocalorica 1.0 Kcal.)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908100822",
    descripcion: "ENERSOY Sabor Chocolate POLVO Bote c/500 G.",
    formula: "Dieta polimérica  (nutrición completa y balanceada, normocalorica 1.0 Kcal.)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "714908107395",
    descripcion: "ENERSOY Sabor Natural POLVO Bote c/500 G.",
    formula: "Dieta polimérica  (nutrición completa y balanceada, normocalorica 1.0 Kcal.)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501563381733",
    descripcion: "BIONARYL JARABE Fco. 120 ML. 250 MG/100 ML.",
    formula: "Difenhidramina (Jarabe)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563382778",
    descripcion: "DIFENHIDRAMINA (Randall) JARABE Fco. 120 ML. 250 MG/100 ML.",
    formula: "Difenhidramina (Jarabe)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501493874695",
    descripcion: "DIFENHISTAT Sol. Iny. c/1 FCO. AMP. 10 ML. 10 MG/1 ML.",
    formula: "Difenhidramina (Sol. Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "656599040264",
    descripcion: "VICNITE c/ 20 CAPS. 25 MG.",
    formula: "Difenhidramina 25mg. (Tabs/Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501825304142",
    descripcion: "HIDRIGORT c/8 TABS. 50 MG.",
    formula: "Difenhidramina 50mg. (Tabs/Caps. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "656599040288",
    descripcion: "VICNITE c/ 20 CAPS. 50 MG.",
    formula: "Difenhidramina 50mg. (Tabs/Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501563370614",
    descripcion: "BIOMITIN c/30 TABS. 25 MG.",
    formula: "Difenidol  25mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563382815",
    descripcion: "DIFENIDOL (Randall) c/30 TABS. 25 MG.",
    formula: "Difenidol  25mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501384547165",
    descripcion: "DIFENIDOL (Neolpharma) c/30 TABS. 25 MG.",
    formula: "Difenidol  25mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502001162532",
    descripcion: "SONS c/30 TABS. 25 MG.",
    formula: "Difenidol  25mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501349028937",
    descripcion: "DIFENIDOL (Amsa) Sol. Iny. c/2 AMPTAS. 40 MG/2 ML.",
    formula: "Difenidol (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001162549",
    descripcion: "DIPHAFEN Sol. Iny. c/2 AMPTAS. 40 MG/2 ML.",
    formula: "Difenidol (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "656599041704",
    descripcion: "VIDAXIL c/ 20 TABS. 0.125 MG.",
    formula: "Digoxina 0.125mg (Tabs. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "656599041407",
    descripcion: "VIDAXIL c/ 20 TABS. 0.250 MG.",
    formula: "Digoxina 0.250mg (Tabs. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501258203609",
    descripcion: "DILTIAZEM (Serral) c/30 TABS. 30 MG.",
    formula: "Diltiazem  30mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502003388077",
    descripcion: "VOMISIN Infantil Fco. Gotero 15 ML. 25 MG/1 ML.",
    formula: "Dimenhidrinato (Gotas Orales)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501825305125",
    descripcion: "BITDRU JARABE Fco. 125 ML. 250 MG/100 ML.",
    formula: "Dimenhidrinato (Jarabe).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501130713196",
    descripcion: "DIMICAPS c/12 CAPS. 50 MG.",
    formula: "Dimenhidrinato (Tabs. Orales)",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502003388107",
    descripcion: "VOMISIN c/20 TABS. 50 MG.",
    formula: "Dimenhidrinato (Tabs. Orales)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501825301875",
    descripcion: "DINTREFERGOT SUSP. Fco. 30 ML. y Gotero 100 MG/1 ML.",
    formula: "Dimeticona",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502240450827",
    descripcion: "MEVEDIM c/15 TABS. 600 MG.",
    formula: "Diosmina",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502010580778",
    descripcion: "DIOSMINA (Sydenham) c/15 COMPS. 600 MG.",
    formula: "Diosmina",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502010580785",
    descripcion: "DIOSMINA (Sydenham) c/30 COMPS. 600 MG.",
    formula: "Diosmina",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502240450834",
    descripcion: "MEVEDIM c/30 TABS. 600 MG.",
    formula: "Diosmina",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501349029460",
    descripcion: "DIOSMINA/HESPERIDINA (Amsa) c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501478317179",
    descripcion: "TREVERIN c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "VITAE"
  },
  {
    codigo: "7500464881724",
    descripcion: "DIOSMINA/HESPERIDINA (Umback) c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "UMBACK"
  },
  {
    codigo: "7502009747700",
    descripcion: "DIOSMINA/HESPERIDINA (Medigen) c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501075723724",
    descripcion: "ROVEMAX c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502010580426",
    descripcion: "DIOSMINA/HESPERIDINA (Sydenham) c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7501109763634",
    descripcion: "DIOSMINA/HESPERIDINA (Perrigo) c/20 TABS. 500 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502009745898",
    descripcion: "FLAUSIVER c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502010580440",
    descripcion: "DIOSMINA/HESPERIDINA (Sydenham) c/30 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7501277024728",
    descripcion: "DIOSMINA/HESPERIDINA (Apotex) c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277024711",
    descripcion: "CIRCUTAST c/20 TABS. 450/50 MG.",
    formula: "Diosmina+Hesperidina",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277032273",
    descripcion: "DIOSMINA/HESPERIDINA (Apotex) c/20 TABS. 450/50 MG. (2 Pack)",
    formula: "Diosmina+Hesperidina",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502209810112",
    descripcion: "DEPOFIN SUSP. Fco. 60 ML. 4-10-1 G/100 ML. ",
    formula: "Diyodohidroxiquinoleina+Caolin+Pectina",
    laboratorio: "AVITUS"
  },
  {
    codigo: "8901120094332",
    descripcion: "PRAZY c/30 TABS. 10 MG.",
    formula: "Domperidona 10mg.",
    laboratorio: "ZYDUS"
  },
  {
    codigo: "7506442701817",
    descripcion: "DONEPEZILO (Camber) c/28 TABS.  5 MG.",
    formula: "Donepecilo  5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442701831",
    descripcion: "DONEPEZILO (Camber) c/28 TABS. 10 MG.",
    formula: "Donepecilo 10mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501349024946",
    descripcion: "DONEPECILO (Amsa) c/28 TABS. 10 MG.",
    formula: "Donepecilo 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227876213",
    descripcion: "BRAIX c/28 TABS. 10.0 MG.",
    formula: "Donepecilo 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "75050733",
    descripcion: "DORZOLAMIDA (Opko) SOL. OFT. Fco. Gotero 5 ML. 20 MG/1 ML.",
    formula: "Dorzolamida",
    laboratorio: "OPKO"
  },
  {
    codigo: "780083147273",
    descripcion: "ZOTILOX SOL. Oftálmica Fco. Gotero 5 ML. 20-5 MG/1 ML.",
    formula: "Dorzolamida+Timolol",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501493872370",
    descripcion: "TROVOST SOL. OFT. Fco. Gotero 5 ML. 20-5 MG/1 ML.",
    formula: "Dorzolamida+Timolol",
    laboratorio: "KENER"
  },
  {
    codigo: "75052812",
    descripcion: "DORZOLAMIDA/TIMOLOL (Opko) Sol. Oft. Fco. Gotero 5 ML. 20-5 MG/1 ML.",
    formula: "Dorzolamida+Timolol",
    laboratorio: "OPKO"
  },
  {
    codigo: "8400005816",
    descripcion: "DORZOLAMIDA/TIMOLOL (Grin) Sol. Oft. Fco. Gotero 5 ML. 20-5 MG/1 ML.",
    formula: "Dorzolamida+Timolol",
    laboratorio: "GRIN"
  },
  {
    codigo: "656599040394",
    descripcion: "XIDOR c/ 24 TABS. 2 MG.",
    formula: "Doxazosina 2mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "656599040417",
    descripcion: "XIDOR c/20 TABS. 4 MG.",
    formula: "Doxazosina 4mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502226291857",
    descripcion: "DOXICICLINA (Alpharma) c/10 TABS. 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "75017156",
    descripcion: "VIVRADOXIL c/10 TABS. 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502227870259",
    descripcion: "ROXIDOLIN c/10 CAPS. 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501563380026",
    descripcion: "DOXICICLINA (Randall) c/10 CAPS. 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501493888302",
    descripcion: "KENCICLEN c/10 CAPS 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7501493874459",
    descripcion: "DOXICICLINA (Kener) c/28 CAPS. 100 MG.",
    formula: "Doxiciclina 100mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502211789321",
    descripcion: "GANTAMIN JARABE Fco. 120 ML. 300 MG/100 ML.",
    formula: "Dropropizina (Jarabe).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502009745560",
    descripcion: "BIOXOVER JARABE Fco. 120 ML. 300 MG/100 ML.",
    formula: "Dropropizina (Jarabe).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501075725988",
    descripcion: "LETOAZIN JARABE Fco. 120 ML. 3 MG/1 ML.",
    formula: "Dropropizina (Jarabe).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501825305231",
    descripcion: "FARIGORT JARABE Adulto Fco. 200 ML. 300/160 MG/100 ML.",
    formula: "Dropropizina+Bromhexina (Jbe. Adulto).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009749520",
    descripcion: "DROPROPIZINA/BROMHEXINA (Maver) Adulto Fco. 200 ML. 300-160 MG/100 ML.",
    formula: "Dropropizina+Bromhexina (Jbe. Adulto).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825305248",
    descripcion: "FARIGORT JARABE Infantil Fco. 200 ML. 150/80 MG/100 ML.",
    formula: "Dropropizina+Bromhexina (Jbe. Infantil).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009749537",
    descripcion: "DROPROPIZINA/BROMHEXINA (Maver) Infantil Fco. 200 ML. 150-80 MG/100 ML.",
    formula: "Dropropizina+Bromhexina (Jbe. Infantil).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502240450988",
    descripcion: "NINTILIX SOL. Infantil Sab. Fresa Fco. 200 ML.  0.150-0.080 G/100 ML.",
    formula: "Dropropizina+Bromhexina (Jbe. Infantil).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502009745485",
    descripcion: "IDELIVER PRO c/ 7 TABS. L.R. 30 MG. ",
    formula: "Duloxetina 30mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227879948",
    descripcion: "CARBOPRIL c/ 7 CAPS. L.R. 30 MG.",
    formula: "Duloxetina 30mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501384545994",
    descripcion: "DULOXETINA (Psicofarma) c/ 7 CAPS. L.R. 30 MG.",
    formula: "Duloxetina 30mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009745478",
    descripcion: "IDELIVER PRO c/14 TABS. L.R. 60 MG.",
    formula: "Duloxetina 60mg. (Tabs. Orales de liberación retardada.)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384546007",
    descripcion: "DULOXETINA (Psicofarma) c/14 CAPS. L.R. 60 MG.",
    formula: "Duloxetina 60mg. (Tabs. Orales de liberación retardada.)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501249602183",
    descripcion: "DULOXETINA (TempusPharma) c/14 CAPS. L.R. 60 MG.",
    formula: "Duloxetina 60mg. (Tabs. Orales de liberación retardada.)",
    laboratorio: "IFA"
  },
  {
    codigo: "7501590224034",
    descripcion: "REGRIPAX c/60 CAPS. 150 MG.",
    formula: "Echinacea",
    laboratorio: "CMD"
  },
  {
    codigo: "7506331301371",
    descripcion: "EZIVAURO c/30 TABS. 600 MG.",
    formula: "Efavirenz",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501482201655",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor CEREZA c/1 SOBRE 28.12 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274790968",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor DURAZNO c/1 SOBRE 28.12 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274790791",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor MANGO c/1 SOBRE 28.48 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274790951",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor CHICLE MORA AZUL c/1 SOBRE 28.13 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274792054",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor UVA c/1 SOBRE 28.14 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274790807",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor COCO c/1 SOBRE 28.14 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274790814",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor UVA c/1 SOBRE 28.14 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501277078332",
    descripcion: "ELECTROLITOS APO Polvo Sabor Naranja Caja c/4 SOBS. 28.3 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277078325",
    descripcion: "ELECTROLITOS APO Polvo Sabor Manzana Caja c/ 4 SOBS. 28.3 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277078318",
    descripcion: "ELECTROLITOS APO Polvo Sabor Limón Caja c/4 SOBS. 28.3 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502274792061",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor UVA Exhib. c/25 SOBS. 28.14 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501277032307",
    descripcion: "ELECTROLITOS APO Polvo Sabor Manzana Exhib. c/25 SOBS. 28.3 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277032614",
    descripcion: "ELECTROLITOS APO Polvo Sabor Manzana Caja c/100 SOBS. 28.3 G.",
    formula: "Electrólitos orales en polvo con Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501482201662",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor NATURAL c/1 SOBRE 27.9 G.",
    formula: "Electrólitos orales en polvo sin Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501277078295",
    descripcion: "ELECTROLITOS APO Polvo Sabor Natural Exhib. c/25 Sobs. 27.9 G",
    formula: "Electrólitos orales en polvo sin Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501482201099",
    descripcion: "VOLDRATOL POLVO p/SOLUCIÓN Sabor NATURAL Exhib. c/25 SOBS. 27.9 G.",
    formula: "Electrólitos orales en polvo sin Sabor (Fórmula estándar) 311 mmol/L.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7506442701947",
    descripcion: "LUVIREN-PRO c/30 TABS. 200/245 MG.",
    formula: "Emtricitabina+Tenofovir",
    laboratorio: "HETERO"
  },
  {
    codigo: "656599040431",
    descripcion: "PRIMAZEN c/30 TABS.  5 MG.",
    formula: "Enalapril  5mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502227872246",
    descripcion: "OLAVAC c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501573900221",
    descripcion: "VEXOTIL c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502216792845",
    descripcion: "ENALAPRIL (Ultra) c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384541170",
    descripcion: "ENALAPRIL (Psicofarma) c/30 TABS. 10 MG.               ",
    formula: "Enalapril 10mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501075711332",
    descripcion: "ENOVAL c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216791299",
    descripcion: "ADYTENN c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501563381580",
    descripcion: "BIONAFIL c/30 TABS. 10 MG.",
    formula: "Enalapril 10mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501384543068",
    descripcion: "ENALAPRIL (Psicofarma) c/30 TABS. 20 MG.               ",
    formula: "Enalapril 20mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501072350299",
    descripcion: "CLEXANE Sol. Iny c/2 JGAS. Prellenadas 60 MG/0.6 ML. ",
    formula: "Enoxaparina sódica 60mg.",
    laboratorio: "SANOFI"
  },
  {
    codigo: "7506353200256",
    descripcion: "PRENREX c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501075723212",
    descripcion: "PAFERLU c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502227874264",
    descripcion: "EMPROXEC c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7506494600236",
    descripcion: "METRIDEL c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "821998000403",
    descripcion: "EPINASTINA (Schoen) c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502216796775",
    descripcion: "EPINASTINA (Ultra) c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502004401614",
    descripcion: "OFFURINA c/10 TABS. 20 MG.",
    formula: "Epinastina",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501836000194",
    descripcion: "ERITROLAT SUSP. Fco. 60 ML. 125 MG/5 ML.",
    formula: "Eritromicina 125mg. (Susp. Oral).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7500464881779",
    descripcion: "ERITROMICINA (Umback) SUSP. Fco. 100 ML. 250 MG/5 ML.",
    formula: "Eritromicina 250mg. (Susp. Oral).",
    laboratorio: "UMBACK"
  },
  {
    codigo: "7502226292175",
    descripcion: "ERITROMICINA (Neolpharma) SUSP. Fco. 100 ML. 250 MG/5 ML.",
    formula: "Eritromicina 250mg. (Susp. Oral).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502226292182",
    descripcion: "BIOERTER SUSP. Fco. 100 ML. 250 MG/5 ML.",
    formula: "Eritromicina 250mg. (Susp. Oral).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502226294773",
    descripcion: "ERITROMICINA (Alpharma) c/20 TABS. 500 MG.",
    formula: "Eritromicina 500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503003134268",
    descripcion: "TROPHARMA c/20 TABS. 500 MG.",
    formula: "Eritromicina 500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501563381474",
    descripcion: "BIOTRIL c/20 TABS. 500 MG.",
    formula: "Eritromicina 500mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380170",
    descripcion: "ERITROMICINA (Randall) c/20 TABS. 500 MG.",
    formula: "Eritromicina 500mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501349026841",
    descripcion: "ERITROPOYETINA HNA. RECBNTE. (Amsa) Sol. Iny. c/6 FCO. AMP. 4000 UI/1 ML.",
    formula: "Eritropoyetina 4000 U.I.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506331302002",
    descripcion: "RELOZIBIN Sol. Iny. c/1 FCO. AMP. 1 G.",
    formula: "Ertapenem",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7506331300343",
    descripcion: "ASITALOX  c/14 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501384544799",
    descripcion: "ESCITALOPRAM (Neolpharma) c/14 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502227874295",
    descripcion: "NANDRESTO c/28 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009744938",
    descripcion: "BLUSYVER-PRO c/14 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349024465",
    descripcion: "ESCITALOPRAM (Amsa) c/14 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "785120755442",
    descripcion: "PRALEX c/28 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502247373914",
    descripcion: "PRATAL c/28 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502009744945",
    descripcion: "BLUSYVER-PRO c/28 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349024366",
    descripcion: "ESCITALOPRAM (Amsa) c/28 TABS. 10 MG.",
    formula: "Escitalopram 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502231320733",
    descripcion: "ESCITALOPRAM (Micro) c/28 TABS. 20 MG.",
    formula: "Escitalopram 20mg",
    laboratorio: "MICROMEX"
  },
  {
    codigo: "7502009748912",
    descripcion: "MUNIVER c/14 TABS. Lib. Rtda. 40 MG.",
    formula: "Esomeprazol 40mg. (Tabs. Orales de Liberación retardada).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749292",
    descripcion: "ESOMEPRAZOL (Maver) c/28 TABS. Lib. Rtda. 40 MG.",
    formula: "Esomeprazol 40mg. (Tabs. Orales de Liberación retardada).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216808362",
    descripcion: "ESOMEPRAZOL (Ultra) c/ 7 TABS. 40 MG.",
    formula: "Esomeprazol 40mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216808430",
    descripcion: "ESOMEPRAZOL (Ultra) c/14 TABS. 40 MG.",
    formula: "Esomeprazol 40mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216808379",
    descripcion: "ESOMEPRAZOL (Ultra) c/28 TABS. 40 MG.",
    formula: "Esomeprazol 40mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501563383102",
    descripcion: "BIOLACTONA c/20 TABS. 25 MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563381160",
    descripcion: "ESPIRONOLACTONA (Randall) c/30 TABS. 25 MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563381788",
    descripcion: "BIOLACTONA c/30 TABS. 25MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502216802889",
    descripcion: "ESPIRONOLACTONA (Ultra) c/20 TABS. 25 MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804746",
    descripcion: "ESPIRONOLACTONA (Avivia) c/20 TABS. 25 MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216805798",
    descripcion: "ESPIRONOLACTONA (Ultra) c/30 TABS. 25 MG.",
    formula: "Espironolactona  25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502001166998",
    descripcion: "SONSVAL CREMA VAGINAL Tubo c/15 G. 1 MG/1 G. y Aplicador.",
    formula: "Estriol (Crema Vaginal).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001167018",
    descripcion: "SONSVAL c/15 ÓVULOS 0.5 MG.",
    formula: "Estriol (Óvulos).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502216805842",
    descripcion: "ESTRÓGENOS CONJUGADOS (Avivia) Cma. Vag. Tubo c/43 G. 62.5 MG/100 G.",
    formula: "Estrogenos conjugados (Crema vaginal)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216796782",
    descripcion: "ESTRÓGENOS CONJUGADOS (Ultra) Cma. Vag. Tubo c/43 G. 62.5 MG/100 G.",
    formula: "Estrogenos conjugados (Crema vaginal)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216808539",
    descripcion: "ESTRÓGENOS CONJUGADOS (Ultra) c/28 TABS. 0.625 MG.",
    formula: "Estrogenos conjugados (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501349027787",
    descripcion: "ETORICOXIB (Amsa) c/14 COMPS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216807457",
    descripcion: "ETORICOXIB (Ultra) c/ 7 COMPS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009746482",
    descripcion: "EXICORT c/ 7 COMPS.  90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503044633140",
    descripcion: "ETORICOXIB (Corne) c/ 7 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501249600998",
    descripcion: "ETORICOXIB (TempusPharma) c/14 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "IFA"
  },
  {
    codigo: "7506442700575",
    descripcion: "ETORICOXIB (Camber) c/14 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501075723397",
    descripcion: "IYALIB c/14 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7503044633157",
    descripcion: "ETORICOXIB (Corne) c/14 TABS. 90 MG. ",
    formula: "Etoricoxib  90mg",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501349027992",
    descripcion: "ETORICOXIB (Amsa) c/28 COMPS. 90 MG. ",
    formula: "Etoricoxib  90mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506353200317",
    descripcion: "MINABRON c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7506442700582",
    descripcion: "ETORICOXIB (Camber) c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502009746505",
    descripcion: "EXICORT c/28 COMPS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503028771585",
    descripcion: "ETORICOXIB (Suanca) c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501249601001",
    descripcion: "ETORICOXIB (TempusPharma) c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "IFA"
  },
  {
    codigo: "7501075723403",
    descripcion: "IYALIB c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501277030729",
    descripcion: "FILCOS c/14 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "APOPHARMA"
  },
  {
    codigo: "7501277030736",
    descripcion: "FILCOS c/28 TABS. 90 MG.",
    formula: "Etoricoxib  90mg",
    laboratorio: "APOPHARMA"
  },
  {
    codigo: "7501249601018",
    descripcion: "ETORICOXIB (TempusPharma) c/7 TABS. 120 MG.",
    formula: "Etoricoxib 120mg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7501493802391",
    descripcion: "CYNMIDAT c/7 TABS. 120 MG. ",
    formula: "Etoricoxib 120mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502009746499",
    descripcion: "EXICORT c/7 COMPS. 120 MG.",
    formula: "Etoricoxib 120mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506442700520",
    descripcion: "ETORICOXIB (Camber) c/7 TABS. 120 MG.",
    formula: "Etoricoxib 120mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501277030750",
    descripcion: "ETORICOXIB (Apotex) c/7 TABS. 120 MG.",
    formula: "Etoricoxib 120mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277030712",
    descripcion: "FILCOS c/7 TABS. 120 MG.",
    formula: "Etoricoxib 120mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502274790753",
    descripcion: "KAZIMIBE c/28 TABS. 10 MG.",
    formula: "Ezetimiba",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7506344500822",
    descripcion: "MALUGAMO c/28 TABS. 10 MG.",
    formula: "Ezetimiba",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7502009746581",
    descripcion: "EDIZAT c/28 TABS. 10 MG.",
    formula: "Ezetimiba",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349024533",
    descripcion: "EZETIMIBA/SIMVASTATINA (Amsa) c/14 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506344500839",
    descripcion: "GOLIDONEZ c/14 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7501075723182",
    descripcion: "MIASIMBAG c/14 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349024540",
    descripcion: "EZETIMIBA/SIMVASTATINA (Amsa) c/28 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502213042479",
    descripcion: "FHEVARTIL c/28 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7506344500846",
    descripcion: "GOLIDONEZ c/28 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7501075723199",
    descripcion: "MIASIMBAG c/28 TABS. 10/20 MG.",
    formula: "Ezetimiba+Simvastatina 10/20mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501130713363",
    descripcion: "ULTIDIN c/30 CAPS. 20 MG.",
    formula: "Famotidina 20mg.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502227871423",
    descripcion: "XYSVOL c/10 TABS. L.P. 5 MG.",
    formula: "Felodipino",
    laboratorio: "RAAM"
  },
  {
    codigo: "7506353200119",
    descripcion: "GLITAZOR c/10 TABS. L.P. 5 MG",
    formula: "Felodipino",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502216796348",
    descripcion: "FELODIPINO (Ultra) c/20 TABS. L.P. 5 MG.",
    formula: "Felodipino",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804739",
    descripcion: "FELODIPINO (Avivia) c/20 TABS. L.P. 5 MG.",
    formula: "Felodipino",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216792647",
    descripcion: "DYLOFEN Retard c/20 TABS. L.P. 5 MG.",
    formula: "Felodipino",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384545659",
    descripcion: "FENAZOPIRIDINA (Psicofarma) c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501563380613",
    descripcion: "BIOFERINA Fco. c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380101",
    descripcion: "BIOFERINA Cja. c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502227876572",
    descripcion: "DESLOTRIM c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501563380194",
    descripcion: "FENAZOPIRIDINA (Randall) c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "RANDALL"
  },
  {
    codigo: "785118752477",
    descripcion: "UREZOL c/20 TABS. 100 MG.",
    formula: "Fenazopiridina",
    laboratorio: "MAVI"
  },
  {
    codigo: "780083140250",
    descripcion: "UROVEC c/24 CAPS. 50/250/125 MG.",
    formula: "Fenazopiridina+Sulfametoxazol+Tetraciclina.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502004402468",
    descripcion: "LOFENICAL Sol. Nasal 0.25% Fco. 15 ML.",
    formula: "Fenilefrina (Sol. Nasal)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501493868915",
    descripcion: "COMVUFEN Sol. Iny. c/1 AMPTA. 250 MG/5 ML.",
    formula: "Fenitoína (Sol. Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "7502231620079",
    descripcion: "FENITOÍNA SÓDICA (Russek) Sol. Iny. c/1 AMPTA. 250 MG/5 ML.",
    formula: "Fenitoína (Sol. Inyectable).",
    laboratorio: "RUSSEK"
  },
  {
    codigo: "7502211784005",
    descripcion: "FENIFFLER-T c/50 TABS. 100 MG.",
    formula: "Fenitoína (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501563381252",
    descripcion: "BIODAN c/50 TABS. 100 MG.",
    formula: "Fenitoína (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380521",
    descripcion: "FENITOÍNA (Randall) c/50 TABS. 100 MG.",
    formula: "Fenitoína (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501384544225",
    descripcion: "FENITOÍNA (Psicofarma) c/50 TABS. 100 MG.",
    formula: "Fenitoína (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501258216005",
    descripcion: "CORDIALIBREL c/15 CAPS. 160 MG.",
    formula: "Fenofibrato 160mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502216790537",
    descripcion: "FENOFIBRATO (Ultra) c/15 CAPS. 160 MG.",
    formula: "Fenofibrato 160mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078045",
    descripcion: "FENOFIBRATO (Avivia) c/15 CAPS. 160 MG. ",
    formula: "Fenofibrato 160mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503049078052",
    descripcion: "FENOFIBRATO (Avivia) c/30 CAPS. 160 MG. ",
    formula: "Fenofibrato 160mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790513",
    descripcion: "FENOFIBRATO (Ultra) c/30 CAPS. 160 MG.",
    formula: "Fenofibrato 160mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501258214629",
    descripcion: "CORDIALIBREL c/30 CAPS. 160 MG.",
    formula: "Fenofibrato 160mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7503002615379",
    descripcion: "FELOCOR c/20 TABS. 100/2.5/250 MG.",
    formula: "Fenofibrato+Ácido fólico+Metformina",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "780083143077",
    descripcion: "POTA-VI-KIN c/40 TABS. 800,000 UI.",
    formula: "Fenoximetilpenicilina 800,000 U.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573904151",
    descripcion: "BIOSTAFEX c/10 TABS. 120 MG.",
    formula: "Fexofenadina 120mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501349027060",
    descripcion: "FEXOFENADINA (Amsa) c/10 COMPS. 120 MG.",
    formula: "Fexofenadina 120mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502003380224",
    descripcion: "APERTUM-OX c/10 TABS. 120 MG.",
    formula: "Fexofenadina 120mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501349025059",
    descripcion: "FEXOFENADINA (Amsa) c/10 COMPS. 180 MG.",
    formula: "Fexofenadina 180mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501573904212",
    descripcion: "BIOSTAFEX c/10 TABS. 180 MG.",
    formula: "Fexofenadina 180mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502227875568",
    descripcion: "DESROTAN c/10 TABS. 180 MG.",
    formula: "Fexofenadina 180mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502003380231",
    descripcion: "APERTUM-OX c/10 TABS. 180 MG.",
    formula: "Fexofenadina 180mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7506335700019",
    descripcion: "STERYX c/30 TABS. 5 MG.",
    formula: "Finasterida 5mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501482202225",
    descripcion: "TYCROPS c/30 TABS. 5 MG.",
    formula: "Finasterida 5mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501563380248",
    descripcion: "FINASTERIDA (Randall) c/30 TABS. 5 MG.",
    formula: "Finasterida 5mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501075718157",
    descripcion: "NOVARIDE c/30 TABS. 5 MG.",
    formula: "Finasterida 5mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216793880",
    descripcion: "FINASTERIDA (Ultra) c/30 TABS. 5 MG.",
    formula: "Finasterida 5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501052712796",
    descripcion: "CANFREZOL Sol. Iny. ENVASE c/50 ML. 2 MG/1 ML.",
    formula: "Fluconazol (Sol. Inyectable).",
    laboratorio: "FRESENIUS"
  },
  {
    codigo: "7501349020139",
    descripcion: "FLUCONAZOL (Amsa) c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227874424",
    descripcion: "AMEZTRAM c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502209858114",
    descripcion: "SOLARISOL c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502216807525",
    descripcion: "FLUCONAZOL (Avivia) c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216802896",
    descripcion: "FLUCONAZOL (Ultra) c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216793583",
    descripcion: "FLERIDUX c/10 CAPS. 100 MG.",
    formula: "Fluconazol 100mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501349012943",
    descripcion: "FLUCONAZOL (Amsa) c/1 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7257427604622",
    descripcion: "DOFIL c/ 1 CÁPSULAS 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "SBL"
  },
  {
    codigo: "7502227875575",
    descripcion: "AMEZTRAM c/1 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "656599040493",
    descripcion: "FLUATRON c/1 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "656599044927",
    descripcion: "FLUATRON c/1 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7257427604646",
    descripcion: "DOFIL c/ 4 CÁPSULAS 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "SBL"
  },
  {
    codigo: "7502003389135",
    descripcion: "ZOLDICAM c/ 3 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "656599040509",
    descripcion: "FLUATRON c/10 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "656599044934",
    descripcion: "FLUATRON c/10 CAPS. 150 MG.",
    formula: "Fluconazol 150mg. (Caps. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7503049078151",
    descripcion: "FLUCONAZOL/TINIDAZOL (Avivia) c/4 TABS. 37.5/500 MG.",
    formula: "Fluconazol+Tinidazol (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790926",
    descripcion: "FLUCONAZOL/TINIDAZOL (Ultra) c/4 TABS. 37.5/500 MG.",
    formula: "Fluconazol+Tinidazol (Tabs. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009748776",
    descripcion: "FAUX c/4 TABS. 37.5/500 MG.",
    formula: "Fluconazol+Tinidazol (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502226294988",
    descripcion: "FLUNARIZINA (Alpharma) c/20 TABS.  5 MG.",
    formula: "Flunarizina  5mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502227876428",
    descripcion: "BREFLUMAR c/20 TABS. 5 MG.",
    formula: "Flunarizina  5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502226294476",
    descripcion: "FLUOCINOLONA (Alpharma) CREMA Tubo c/20 G. 0.01 G/100 G.",
    formula: "Fluocinolona 0.010g.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908240",
    descripcion: "LONASON CREMA Tubo c/40 G. 0.01 G/100 G.              ",
    formula: "Fluocinolona 0.010g.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908721",
    descripcion: "FLUOCINOLONA (Alpharma) CREMA Tubo c/40 G. 0.01 G/100 G.",
    formula: "Fluocinolona 0.010g.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502004401157",
    descripcion: "CORTILONA CREMA Tubo c/30 G.  0.01 G/100 G.              ",
    formula: "Fluocinolona 0.010g.",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502001161511",
    descripcion: "BENTIX CREMA Tubo c/40 G. 3.0-0.01/100 G.",
    formula: "Fluocinolona+Clioquinol 0.010/3.0g.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502004401201",
    descripcion: "CORTILONA Compuesto CREMA Tubo c/30 G. 0.01-3.0 G/100 G.",
    formula: "Fluocinolona+Clioquinol 0.010/3.0g.",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502001164086",
    descripcion: "NYSMOSON´S-V c/10 OVULOS. 0.5mg/500mg/100,000u.",
    formula: "Fluocinolona+Metronidazol+Nistatina.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502211788935",
    descripcion: "FLUOCINOLONA/METRONIDAZOL/NISTATINA c/10 OVS. 0.5mg/500mg/100,000u.",
    formula: "Fluocinolona+Metronidazol+Nistatina.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001166028",
    descripcion: "NEODERM-F CREMA Tubo c/40 G. 0.01-0.35 G/100 G.",
    formula: "Fluocinolona+Neomicina 0.010/0.350g.",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573900290",
    descripcion: "OVISEN c/14 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502227871508",
    descripcion: "ANIUP c/14 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501075717563",
    descripcion: "F-EXINA c/14 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7503003738725",
    descripcion: "ZATIN c/14 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501349024861",
    descripcion: "FLUOXETINA (Amsa) c/14 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384504892",
    descripcion: "FLUOXETINA (Psicofarma) c/14 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501075717518",
    descripcion: "F-EXINA c/20 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501573909408",
    descripcion: "OVISEN c/28 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502227871515",
    descripcion: "ANIUP c/28 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503003738732",
    descripcion: "ZATIN c/30 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501825301653",
    descripcion: "INDOZUL c/28 TABS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "780083141318",
    descripcion: "FLOCET c/100 CAPS. 20 MG.",
    formula: "Fluoxetina",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502213042882",
    descripcion: "FHISFLUNAL AEROSOL p/Inhalación c/120 DOSIS 50 MCG.",
    formula: "Fluticasona  50mcg. (Aerosol p/Inhalación Bucal).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502009748851",
    descripcion: "FOSFOMICINA (Maver) c/12 CAPS. 500 MG.",
    formula: "Fosfomicina cálcica 500mg. (Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501563381740",
    descripcion: "BIOFUROSO SUSP. Fco. 120 ML. 2.9 G/100 ML.",
    formula: "Fumarato Ferroso (Susp. Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563310337",
    descripcion: "BIOFUROSO c/50 TABS. 200 MG.",
    formula: "Fumarato Ferroso (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380163",
    descripcion: "FUMARATO FERROSO (Randall) c/50 TABS. 200 MG.",
    formula: "Fumarato Ferroso (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502001162013",
    descripcion: "EXOFUR SUSP. Fco. 120 ML. 0.350-20-1 G/100 ML.",
    formula: "Furazolidona+Caolin+Pectina.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001037120",
    descripcion: "FURADERKA SUSP. Fco. 120 ML. 333MG-20G-1.0G/100 ML.",
    formula: "Furazolidona+Caolin+Pectina.",
    laboratorio: "EDERKA"
  },
  {
    codigo: "780083139759",
    descripcion: "DIALGIN SUSP. Fco. 120 ML. 0.40-1.25-20-1-0.02 G/100 ML.",
    formula: "Furazolidona+Diyodohidroxiquinoleina+Homatropina+Caolin+Pectina.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140205",
    descripcion: "THRECHOP SUSP. Fco. 120 ML. 0.40-1.25-20-1-0.02 G/100 ML.",
    formula: "Furazolidona+Diyodohidroxiquinoleina+Homatropina+Caolin+Pectina.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083139766",
    descripcion: "DIALGIN c/20 TABS. 50/200/2/200 MG.",
    formula: "Furazolidona+Diyodohidroxiquinoleina+Homatropina+Carbon Activado.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140212",
    descripcion: "THRECHOP c/20 TABS. 50/200/2/200 MG.",
    formula: "Furazolidona+Diyodohidroxiquinoleina+Homatropina+Carbon Activado.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501349024571",
    descripcion: "FUROSEMIDA (Amsa) Sol. Iny. c/5 AMPTAS. 20 MG/2 ML.",
    formula: "Furosemida (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501476099251",
    descripcion: "FURODIUROL Sol. Iny. c/5 AMPTAS. 20 MG/2 ML.",
    formula: "Furosemida (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502245840395",
    descripcion: "FURAVITEM Sol. Iny. c/5 AMPTAS. 20 MG/2 ML.",
    formula: "Furosemida (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501571201870",
    descripcion: "KLIMYN c/20 TABS. 40 MG.",
    formula: "Furosemida (Tabs. Orales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501563380187",
    descripcion: "FUROSEMIDA (Randall) c/20 TABS. 40 MG.",
    formula: "Furosemida (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501573900375",
    descripcion: "DIURMESSEL c/20 TABS. 40 MG.",
    formula: "Furosemida (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563380095",
    descripcion: "BIOMISEN c/20 TABS. 40 MG.",
    formula: "Furosemida (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501384504120",
    descripcion: "FUROSEMIDA (Neolpharma) c/20 TABS. 40 MG.",
    formula: "Furosemida (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501349020436",
    descripcion: "GABAPENTINA (Amsa) c/15 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563380569",
    descripcion: "BIOPRIDOL Fco. c/15 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502240450773",
    descripcion: "WERMY c/15 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502216801271",
    descripcion: "GABAPENTINA (Ultra) c/15 CAPS. 300 MG. ",
    formula: "Gabapentina 300mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502225090994",
    descripcion: "BLUGAT c/15 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502240450780",
    descripcion: "WERMY c/30 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501349020443",
    descripcion: "GABAPENTINA (Amsa) c/30 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563380767",
    descripcion: "BIOPRIDOL Fco. c/30 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502216801288",
    descripcion: "GABAPENTINA (Ultra) c/30 CAPS. 300 MG.",
    formula: "Gabapentina 300mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384541620",
    descripcion: "GABAPENTINA (Psicofarma) c/15 CAPS. 400 MG.",
    formula: "Gabapentina 400mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501258211024",
    descripcion: "GABAPENTINA/TIAMINA/CIANOCOBALAMINA c/30 TABS. 300/100/0.20 MG.",
    formula: "Gabapentina+Tiamina+Cianocobalamina",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501590285028",
    descripcion: "QUERITER c/30 CAPS. 300 MG.",
    formula: "Garcinia cambogia",
    laboratorio: "CMD"
  },
  {
    codigo: "7501476025731",
    descripcion: "GEMXIT Sol. Iny. c/1 FCO. AMP. 1 G.",
    formula: "Gemcitabina 1g. ",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7501249607768",
    descripcion: "GEMFIBROZILO (TempusPharma) c/14 TABS. 600 MG.",
    formula: "Gemfibrozilo",
    laboratorio: "IFA"
  },
  {
    codigo: "7502003386547",
    descripcion: "GEMFIBROZILO (Rayere) c/14 TABS. 600 MG.",
    formula: "Gemfibrozilo",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501125105234",
    descripcion: "IKATIN Sol. Iny. c/1 AMPTA. 20 MG/2 ML.",
    formula: "Gentamicina  20mg",
    laboratorio: "PISA"
  },
  {
    codigo: "7502001162136",
    descripcion: "GENKOVA Sol. Iny. c/1 AMPTA.  20 MG/2 ML.",
    formula: "Gentamicina  20mg",
    laboratorio: "SONS"
  },
  {
    codigo: "7501349025387",
    descripcion: "GENTAMICINA (Amsa) Sol. Iny. c/1 AMPTA.  80 MG/2 ML.",
    formula: "Gentamicina  80mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001160415",
    descripcion: "GENKOVA Sol. Iny. c/1 AMPTA.  80 MG/2 ML.",
    formula: "Gentamicina  80mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001161351",
    descripcion: "GENKOVA Sol. Iny. c/5 AMPTAS.  80 MG/2 ML.",
    formula: "Gentamicina  80mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "7501349026377",
    descripcion: "GENTAMICINA (Amsa) Sol. Iny. c/1 AMPTA. 160 MG/2 ML.",
    formula: "Gentamicina 160mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349026094",
    descripcion: "GENTAMICINA (Amsa) Sol. Iny. c/5 AMPTAS. 160 MG/2 ML..",
    formula: "Gentamicina 160mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001161368",
    descripcion: "GENKOVA Sol. Iny. c/5 AMPTAS. 160 MG/2 ML.",
    formula: "Gentamicina 160mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "714908106251",
    descripcion: "LINGNUM c/30 CAPS. 40 MG.",
    formula: "Ginkgo Biloba",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501573910428",
    descripcion: "OCRIX c/50 TABS. 5 MG.",
    formula: "Glibenclamida",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563382013",
    descripcion: "GLIBENCLAMIDA (Randall) c/50 TABS. 5 MG.",
    formula: "Glibenclamida",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501075714739",
    descripcion: "REGLUSAN c/50 TABS. 5 MG.",
    formula: "Glibenclamida",
    laboratorio: "NOVAG"
  },
  {
    codigo: "75070328",
    descripcion: "GLIBENCLAMIDA (Loeffler) c/50 TABS. 5 MG.",
    formula: "Glibenclamida",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502216804807",
    descripcion: "GLIBENCLAMIDA (Avivia) c/50 TABS. 5 MG.",
    formula: "Glibenclamida",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7506335700354",
    descripcion: "ADIRIPEM c/30 TABS. 2 MG.",
    formula: "Glimepirida 2mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502211784029",
    descripcion: "ZUKEDIB c/30 TABS. 2 MG.",
    formula: "Glimepirida 2mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7506335700378",
    descripcion: "ADIRIPEM c/30 TABS. 4 MG.",
    formula: "Glimepirida 4mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502211784036",
    descripcion: "ZUKEDIB c/30 TABS. 4 MG.",
    formula: "Glimepirida 4mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "656599025223",
    descripcion: "FLUMEDIL Fco. c/ 30 TABS.  5 MG.",
    formula: "Glipizida  5mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "780083141523",
    descripcion: "LUDITEC c/20 TABS. 10 MG.",
    formula: "Glipizida 10mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "656599040561",
    descripcion: "FLUMEDIL Caja c/30 TABS. 10 MG.",
    formula: "Glipizida 10mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "637420410838",
    descripcion: "SOLCLIN-GC Jabón Quirúrgico al 4% Fco. 120 ML. ",
    formula: "Gluconato de Clorhexidina al 4% (Solución Jabonosa).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420114811",
    descripcion: "SOLCLIN ESPUMA Solución Antiséptica p/Manos Fco. 75 ML. ",
    formula: "Gluconato de Clorhexidina+Cloruro de Benzalconio (Solución tópica).",
    laboratorio: "SOLAR"
  },
  {
    codigo: "714908107722",
    descripcion: "ARIFLEX c/30 SOBS. POLVO p/SOLUCIÓN 1.500/1.200 G.",
    formula: "Glucosamina+Condroitina (Polvo).",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502009749018",
    descripcion: "GLADIATRON c/30 SOBS. POLVO 1500/1200 MG.",
    formula: "Glucosamina+Condroitina (Polvo).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227426067",
    descripcion: "CARTICAP FOR c/60 CAPS. 300/200/30/20 MG.",
    formula: "Glucosamina+Condroitina en combinación.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "803288480447",
    descripcion: "TRIFEDOL CREMA Tubo c/35 G.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "BQM"
  },
  {
    codigo: "7502259891086",
    descripcion: "SINERLEX c/30 TABS. 1.01 G.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501478316288",
    descripcion: "GLUCOSAMINA+MSM c/60 TABS. 250/200 MG.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502008986599",
    descripcion: "MOREX Compuesto c/30 TABS. 500 MG.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502280810247",
    descripcion: "FLX c/COLÁGENO (Supra) c/72 CAPS. 500 MG.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7501590211201",
    descripcion: "FLEXTRIN c/30 COMPS. 300/200/25 MG.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "CMD"
  },
  {
    codigo: "803288480430",
    descripcion: "TRIFEDOL c/60 TABS. 1.21 G.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7502259892205",
    descripcion: "SINERLEX Polvo c/20 SOBRES. 10 G.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501590286032",
    descripcion: "MULTIMIX FX POLVO Sab. Arándano-Fresa c/20 SOBRES 10 G.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502280810001",
    descripcion: "FLX-ACT c/GLUCOSAMINA (Supra) Polvo Bote c/1.1 KG.",
    formula: "Glucosamina+Condroitina en combinación. (Suplemento Alimenticio)",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502216809765",
    descripcion: "KERNOLINE-LESS POLVO c/30 SOBS. 1500 MG y 30 SOBS. 15 MG.",
    formula: "Glucosamina+Meloxicam",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502259891468",
    descripcion: "GLUTEC Polvo c/3 SOBRES 15 G.",
    formula: "Glutamina+Lactobacillus reuteri",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810308",
    descripcion: "GRENETINA PLUS c/NARANJA (Supra) POLVO Bote c/1.1 KG.",
    formula: "Grenetina hidrolizada en combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "656599040585",
    descripcion: "DEFLENOL c/20 TABS. L.P. 600 MG.",
    formula: "Guaifenesina",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501672690948",
    descripcion: "OTOFEN JARABE Fco. 140 ML. 0.1-0.05 G/5 ML.",
    formula: "Guaifenesina+Oxolamina (Jarabe Adulto)",
    laboratorio: "ARLEX"
  },
  {
    codigo: "7501573904335",
    descripcion: "FENOCOL JARABE Fco. 140 ML. 2.0-1.0 G/100 ML.",
    formula: "Guaifenesina+Oxolamina (Jarabe Adulto)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "803288480225",
    descripcion: "GUAYAP-TOL c/30 CAPS. 740 MG.",
    formula: "Guayacol+Eucalipto (ADULTO).",
    laboratorio: "BQM"
  },
  {
    codigo: "7501384546625",
    descripcion: "HALOPERIDOL (Psicofarma) c/20 TABS. 5 MG.",
    formula: "Haloperidol (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501277030224",
    descripcion: "HALOPERIDOL (Apotex) c/20 TABS. 5 MG.",
    formula: "Haloperidol (Tabs. Orales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "17707",
    descripcion: "FLENALUD JARABE Fco. 120 ML. 0.700 G/100 ML.",
    formula: "Hedera helix (Hiedra)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502009745102",
    descripcion: "HIDRIVER JARABE Fco. 100 ML. 0.7 G/100 ML.",
    formula: "Hedera helix (Hiedra)",
    laboratorio: "MAVER"
  },
  {
    codigo: "714908107760",
    descripcion: "FLENALUD JARABE Fco. 120 ML. 0.700 G/100 ML.",
    formula: "Hedera helix (Hiedra)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501590284779",
    descripcion: "SITO-GRIX JARABE Fco. 120 ML. 0.084 G/100 ML.",
    formula: "Hedera helix (Hiedra)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502259890089",
    descripcion: "GUVATOX JBE. Fco. 120 ML. 10.84-0.54 G/100 ML.",
    formula: "Hedera helix (Hiedra) compuesta.",
    laboratorio: "MAVER"
  },
  {
    codigo: "8400009265",
    descripcion: "HIALURONATO DE SODIO (Grin) Sol. Oft. Fco. Gotero 15 ML. 4 MG/1 ML.",
    formula: "Hialuronato de Sodio",
    laboratorio: "GRIN"
  },
  {
    codigo: "75058661",
    descripcion: "HIALURONATO DE SODIO (Opko) SOL. Oft. Fco. Gotero 10 ML. 4 MG/1 ML.",
    formula: "Hialuronato de Sodio",
    laboratorio: "OPKO"
  },
  {
    codigo: "7501471888829",
    descripcion: "DILA-TEC c/20 TABS. 10 MG.",
    formula: "Hidralazina (Tabs. Orales).",
    laboratorio: "TECNOFARMA"
  },
  {
    codigo: "7501384546519",
    descripcion: "HIDROCLOROTIAZIDA (Neolpharma) c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501482201839",
    descripcion: "NAXTROL c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "821998000298",
    descripcion: "HIDROCLOROTIAZIDA (Schoen) c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502009746383",
    descripcion: "DIZIVER c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506494600250",
    descripcion: "SYSTOCAL c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502216794993",
    descripcion: "HIDROCLOROTIAZIDA (Ultra) c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804845",
    descripcion: "HIDROCLOROTIAZIDA (Avivia) c/20 TABS. 25 MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "656599040608",
    descripcion: "ACORTIZ Cja. c/20 TABS. 25MG.",
    formula: "Hidroclorotiazida 25mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "656599040639",
    descripcion: "ACORTIZ Cja. c/20 TABS. 50 MG.",
    formula: "Hidroclorotiazida 50mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501562722421",
    descripcion: "LULSADERM-H CREMA Tubo c/15 G. 1 MG/1 G.",
    formula: "Hidrocortisona (Crema tópica al 0.1%)",
    laboratorio: "SALUS"
  },
  {
    codigo: "7502004402017",
    descripcion: "HIDROFFEN CREMA Tubo c/15 G. 0.1 G/100 G.",
    formula: "Hidrocortisona (Crema tópica al 0.1%)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "780083142537",
    descripcion: "COLLICORT CREMA al 1.0% Tubo c/60 G.",
    formula: "Hidrocortisona (Crema tópica al 1.0%)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501109763078",
    descripcion: "HIDROCORTISONA (Perrigo) CREMA al 1% Tubo c/60 G.",
    formula: "Hidrocortisona (Crema tópica al 1.0%)",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "780083142544",
    descripcion: "COLLICORT CREMA al 2.5% Tubo c/60 G.",
    formula: "Hidrocortisona (Crema tópica al 2.5%)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501476012748",
    descripcion: "NOSITROL Sol. Iny. c/1 FCO. AMP. 100 MG/2 ML.",
    formula: "Hidrocortisona 100mg. (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502256040029",
    descripcion: "TISODANK Sol. Iny. c/1 FCO. AMP. 500 MG/5 ML.",
    formula: "Hidrocortisona 500mg. (Sol. Inyectable).",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7501537102272",
    descripcion: "FLEBONADROL Sol. Iny. c/1 FCO. AMP. 500 MG/4 ML.",
    formula: "Hidrocortisona 500mg. (Sol. Inyectable).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7501476018351",
    descripcion: "NOSITROL Sol. Iny. c/1 FCO. AMP. 500 MG/5 ML.",
    formula: "Hidrocortisona 500mg. (Sol. Inyectable).",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502001162600",
    descripcion: "PORAL SOL. Ótica Fco. Gotero 10 ML. 10-25-20 MG/1 ML.",
    formula: "Hidrocortisona+Cloranfenicol+Benzocaína",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009747618",
    descripcion: "HIDROXICLOROQUINA (Medigen) c/20 TABS. 200 MG.",
    formula: "Hidroxicloroquina",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501258215947",
    descripcion: "RUQUIMOX c/20 TABS. 200 MG.",
    formula: "Hidroxicloroquina",
    laboratorio: "SERRAL"
  },
  {
    codigo: "780083148935",
    descripcion: "OPTALAG SOL. OFT. Uso Diario Fco. Gotero 15 ML. 3-1 MG/1 ML.",
    formula: "Hidroxipropilmetilcelulosa+Dextran 70 (Oftálmico)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502227875964",
    descripcion: "XYLAM c/30 TABS. 10 MG.",
    formula: "Hidroxizina 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "785120754681",
    descripcion: "HIDROXIN c/30 TABS. 10 MG.",
    formula: "Hidroxizina 10mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "714908106213",
    descripcion: "RILAS-NAT c/60 TABS. 150 MG.",
    formula: "Hierba de San Juan 150 mg.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502259890072",
    descripcion: "ANIMALIN Hierro SOL. Fco. 240 ML. 10-6.66 MG/5 ML.",
    formula: "Hierro (Suplemento Alimenticio) ",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502001037281",
    descripcion: "COFEDEX Sol. Iny. c/3 AMPTAS. 100 MG/2 ML.",
    formula: "Hierro Dextrano",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501349028654",
    descripcion: "HIPROMELOSA (Amsa) Sol. Oftálmica 0.5% Fco. Gotero 10 ML.",
    formula: "Hipromelosa al 0.5%",
    laboratorio: "AMSA"
  },
  {
    codigo: "8400005830",
    descripcion: "HIPROMELOSA (Grin) Sol. Oft. 0.5% Fco. Gotero 10 ML.",
    formula: "Hipromelosa al 0.5%",
    laboratorio: "GRIN"
  },
  {
    codigo: "75049737",
    descripcion: "HIPROMELOSA (Opko) Sol. Oft. 0.5% Fco. Gotero 15 ML.",
    formula: "Hipromelosa al 0.5%",
    laboratorio: "OPKO"
  },
  {
    codigo: "7501493828148",
    descripcion: "KILADEL SOL. OFT. Fco. Gotero 15 ML. 5 MG/1 ML.",
    formula: "Hipromelosa al 0.5%",
    laboratorio: "KENER"
  },
  {
    codigo: "7502009743948",
    descripcion: "QUERYABA c/30 TABS. 500 MG.",
    formula: "Hojas de guayaba (Quercetina)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259890126",
    descripcion: "QUERYABA-G c/60 TABS. 545 MG.",
    formula: "Hojas de guayaba en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810209",
    descripcion: "SUPRA RESTLI-KOL c/72 CAPS. 500 MG.",
    formula: "Hojas de guayaba en combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502223112384",
    descripcion: "FIDOIN-Q SUSP. Pediátrico Fco. 15 ML. 40 MG/1 ML.",
    formula: "Ibuprofeno  40mg. (Susp. Gotas).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502211780359",
    descripcion: "AFLUSIL SUSP. Fco. 120 ML. 2 G/100 ML.",
    formula: "Ibuprofeno 100mg. (Susp. Oral).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502009745430",
    descripcion: "DOLVER SUSP. Sab. Cereza Fco. 120 ML. 100 MG/5 ML.",
    formula: "Ibuprofeno 100mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083141929",
    descripcion: "DOLPRIN SUSP. Fco. 120 ML. 2 G/100 ML.",
    formula: "Ibuprofeno 100mg. (Susp. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502208894571",
    descripcion: "AFLENO SUSP. Infantil Fco. 120 ML. 100 MG/5 ML.",
    formula: "Ibuprofeno 100mg. (Susp. Oral).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7501130713387",
    descripcion: "EUFENIL c/10 CAPS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Cápsula blanda).",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "780083140762",
    descripcion: "DOLPRIN c/10 TABS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573900146",
    descripcion: "IFENTIL c/10 TABS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503000422337",
    descripcion: "DOLVER 200 c/10 TABS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746123",
    descripcion: "DOLVER 200 c/20 TABS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501109763023",
    descripcion: "IBUPROFENO (Perrigo) c/12 TABS. 200 MG.",
    formula: "Ibuprofeno 200mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501478316516",
    descripcion: "DULFAN c/10 CAPS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Cápsula blanda)",
    laboratorio: "VITAE"
  },
  {
    codigo: "7501130713516",
    descripcion: "EUFENIL FORTE c/10 CAPS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Cápsula blanda)",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7501573900108",
    descripcion: "PRO-XB c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503000422320",
    descripcion: "DOLVER c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001165502",
    descripcion: "BRIXSONS c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502208894489",
    descripcion: "AFLENO c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7501842900099",
    descripcion: "ADOPREN Caja c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "780083150051",
    descripcion: "DOLPROFEN c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083148829",
    descripcion: "DOLPROFEN c/10 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501277028511",
    descripcion: "GOBROSAN c/20 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "780083148812",
    descripcion: "DOLPROFEN c/45 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501842900693",
    descripcion: "ADOPREN Fco. c/50 TABS. 400 MG.",
    formula: "Ibuprofeno 400mg. (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502009747274",
    descripcion: "DOLVER c/10 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150068",
    descripcion: "DOLPROFEN c/10 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083148843",
    descripcion: "DOLPROFEN c/10 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501842900105",
    descripcion: "ADOPREN Caja c/10 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502009745652",
    descripcion: "DOLVER c/20 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083148836",
    descripcion: "DOLPROFEN c/45 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501842900709",
    descripcion: "ADOPREN Fco. c/45 TABS. 600 MG.",
    formula: "Ibuprofeno 600mg. (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7501478315540",
    descripcion: "ARBUFENTAB c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502001165496",
    descripcion: "BRIXSONS c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "780083150075",
    descripcion: "DOLPROFEN c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083148805",
    descripcion: "DOLPROFEN c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009747281",
    descripcion: "DOLVER c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501842952890",
    descripcion: "ADOPREN Caja c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502208894496",
    descripcion: "AFLENO c/10 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502009745669",
    descripcion: "DOLVER c/20 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501842900716",
    descripcion: "ADOPREN Fco. c/50 TABS. 800 MG.",
    formula: "Ibuprofeno 800mg. (Caps/Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7501478316813",
    descripcion: "IBUPROFENO/CAFEÍNA (Gelpharma) c/10 CAPS. 400/100 MG.",
    formula: "Ibuprofeno+Cafeína 400/100mg.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7502227427903",
    descripcion: "ALGIDOL ZEN c/10 CAPS. 200/25 MG.",
    formula: "Ibuprofeno+Difenhidramina.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501842951657",
    descripcion: "PAKID c/20 TABS. 325/200 MG.",
    formula: "Ibuprofeno+Paracetamol (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7501836009661",
    descripcion: "DUALGOS c/20 TABS. 325/200 MG.",
    formula: "Ibuprofeno+Paracetamol (Tabs. Orales).",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501277032181",
    descripcion: "IMATINIB (Apotex) c/60 TABS. 100 MG.",
    formula: "Imatinib",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7506022327857",
    descripcion: "SENSIMITINA Sol. Iny. c/1 FCO. AMP. 500/500 MG.",
    formula: "Imipenem+Cilastatina 500/500mg.",
    laboratorio: "JAYOR"
  },
  {
    codigo: "8908010980727",
    descripcion: "IMETIN Sol. Iny. c/1 FCO. AMP. 500/500 MG.",
    formula: "Imipenem+Cilastatina 500/500mg.",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7502211780854",
    descripcion: "ARTAXOL c/15 SUPOSITORIOS 100 MG.",
    formula: "Indometacina (Supositorios)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501563380286",
    descripcion: "INDOMETACINA (Randall) c/30 CAPS. 25 MG.",
    formula: "Indometacina 25mg. (Caps. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "75016784",
    descripcion: "BIOMETACIN c/30 CAPS. 25 MG.",
    formula: "Indometacina 25mg. (Caps. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7506494600090",
    descripcion: "RUMOQUIN N.F. GEL Tubo c/60 G. 500-50 MG/100 G.",
    formula: "Indometacina+Betametasona",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502009746932",
    descripcion: "TRADITOR GEL Tubo c/60 G. 500-50 MG/100 G.",
    formula: "Indometacina+Betametasona",
    laboratorio: "MAVER"
  },
  {
    codigo: "821998000519",
    descripcion: "RUMOQUIN N.F. c/10 TABS. 215/25/0.75 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502009748677",
    descripcion: "BETAMETASONA/INDOMETACINA/METOCARBAMOL (Medigen) c/20 CAPS. 0.75/25/215 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "821998000571",
    descripcion: "RUMOQUIN N.F. c/20 TABS. 215/25/0.75 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502216790124",
    descripcion: "INDOMETACINA/BETAMETASONA/METOCARBAMOL (Ultra) c/20 CAPS. 25/0.75/215 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009746420",
    descripcion: "VERATRIN c/20 CAPS. 0.75/25/215 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "MAVER"
  },
  {
    codigo: "821998000502",
    descripcion: "RUMOQUIN N.F. c/30 TABS. 215/25/0.75 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502001162426",
    descripcion: "ARDOSONS c/20 CAPS. 25/0.75/215 MG.",
    formula: "Indometacina+Betametasona+Metocarbamol.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502247375543",
    descripcion: "BONGLIXAN Sol. Iny. c/1 FCO. AMP. 10 ML. 100 UI/1 ML.",
    formula: "Insulina Glargina (Acción prolongada).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501349022454",
    descripcion: "IRBESARTÁN (Amsa) c/14 TABS. 150 MG.",
    formula: "Irbesartán 150mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216799325",
    descripcion: "IRBESARTÁN (Ultra) c/14 TABS. 150 MG.",
    formula: "Irbesartán 150mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442700605",
    descripcion: "IRBESARTÁN (Camber) c/28 TABS. 150 MG.",
    formula: "Irbesartán 150mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501349022492",
    descripcion: "IRBESARTÁN (Amsa) c/28 TABS. 150 MG.",
    formula: "Irbesartán 150mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216799318",
    descripcion: "IRBESARTÁN (Ultra) c/28 TABS. 150 MG.",
    formula: "Irbesartán 150mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442700612",
    descripcion: "IRBESARTÁN (Camber) c/14 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7501349020535",
    descripcion: "IRBESARTÁN (Amsa) c/14 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506442700629",
    descripcion: "IRBESARTÁN (Camber) c/28 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502216809802",
    descripcion: "DIOGENA c/28 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501349020542",
    descripcion: "IRBESARTÁN (Amsa) c/28 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216804715",
    descripcion: "IRBESARTÁN (Avivia) c/28 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216799301",
    descripcion: "IRBESARTÁN (Ultra) c/28 TABS. 300 MG.",
    formula: "Irbesartán 300mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216790971",
    descripcion: "IRBESARTÁN/AMLODIPINO (Ultra) c/14 TABS. 300/ 5 MG.",
    formula: "Irbesartán+Amlodipino 300/ 5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078243",
    descripcion: "IRBESARTÁN/AMLODIPINO (Avivia) c/14 TABS. 300/ 5 MG.",
    formula: "Irbesartán+Amlodipino 300/ 5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503049078250",
    descripcion: "IRBESARTÁN/AMLODIPINO (Avivia) c/28 TABS. 300/ 5 MG.",
    formula: "Irbesartán+Amlodipino 300/ 5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790964",
    descripcion: "IRBESARTÁN/AMLODIPINO (Ultra) c/28 TABS. 300/ 5 MG.",
    formula: "Irbesartán+Amlodipino 300/ 5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216790995",
    descripcion: "IRBESARTÁN/AMLODIPINO (Ultra) c/14 TABS. 300/10 MG. ",
    formula: "Irbesartán+Amlodipino 300/10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078267",
    descripcion: "IRBESARTÁN/AMLODIPINO (Avivia) c/14 TABS. 300/10 MG. ",
    formula: "Irbesartán+Amlodipino 300/10mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790988",
    descripcion: "IRBESARTÁN/AMLODIPINO (Ultra) c/28 TABS. 300/10 MG. ",
    formula: "Irbesartán+Amlodipino 300/10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078274",
    descripcion: "IRBESARTÁN/AMLODIPINO (Avivia) c/28 TABS. 300/10 MG.",
    formula: "Irbesartán+Amlodipino 300/10mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7506442700636",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Camber) c/14 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502216803183",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Ultra) c/14 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501075722543",
    descripcion: "PABESORAG c/28 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502247375840",
    descripcion: "TIFICOM c/28 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502216809819",
    descripcion: "DIOGENA-DRA c/14 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442700643",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Camber) c/28 TABS. 150/12.5 MG",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502216803138",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Ultra) c/28 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216809826",
    descripcion: "DIOGENA-DRA c/28 TABS. 150/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 150/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442700650",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Camber) c/14 TABS. 300/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 300/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700667",
    descripcion: "IRBESARTÁN/HIDROCLOROTIAZIDA (Camber) c/28 TABS. 300/12.5 MG.",
    formula: "Irbesartán+Hidroclorotiazida 300/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506331302385",
    descripcion: "CETABINDO Sol. Iny. c/1 FCO. AMP. 100 MG/5 ML.",
    formula: "Irinotecan 100mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7503004908707",
    descripcion: "ISOCONAZOL (Alpharma) CREMA Tubo c/20 G. 1 G/100 G.               ",
    formula: "Isoconazol (Crema Tópica)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501573905363",
    descripcion: "LICOM CREMA 1.0% Tubo c/20 G. ",
    formula: "Isoconazol (Crema Tópica)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501672690252",
    descripcion: "E-MIZOL CREMA Tubo c/20 G. 1 G/100 G.",
    formula: "Isoconazol (Crema Tópica)",
    laboratorio: "ARLEX"
  },
  {
    codigo: "7501075711011",
    descripcion: "DEBISOR c/20 TABS.10 MG.",
    formula: "Isosorbida  10mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501563381146",
    descripcion: "ISOSORBIDA (Randall) c/20 TABS. 10 MG.",
    formula: "Isosorbida  10mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "75016791",
    descripcion: "BIORDYN c/20 TABS. 10 MG.",
    formula: "Isosorbida  10mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502009747298",
    descripcion: "ADONAT JALEA TÓPICA Tubo c/25 G. 0.75 G/100 G.",
    formula: "Isotipendilo (Tópico)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216790933",
    descripcion: "ITOPRIDA (Ultra) c/30 TABS. 50 MG.",
    formula: "Itoprida",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078205",
    descripcion: "ITOPRIDA (Avivia) c/30 TABS. 50 MG.",
    formula: "Itoprida",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502009747328",
    descripcion: "LAPRIVER c/30 TABS. 50 MG.",
    formula: "Itoprida",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501258211017",
    descripcion: "ITOPRIDA (Serral) c/30 TABS. 50 MG.",
    formula: "Itoprida",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502209855113",
    descripcion: "ZITRIASOL c/15 CAPS. 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "SOLARA"
  },
  {
    codigo: "7502209858107",
    descripcion: "ZITRIASOL c/15 CAPS. 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501573920182",
    descripcion: "RIXTAL c/15 CAPS. 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501075717174",
    descripcion: "ITRACONAZOL (Novag) c/15 CAPS. 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216804876",
    descripcion: "ITRACONAZOL (Avivia) c/15 CAPS 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216793392",
    descripcion: "ITRACONAZOL (Ultra) c/15 CAPS 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227878057",
    descripcion: "MARBREN c/15 CAPS. 100 MG.",
    formula: "Itraconazol (15 Cápsulas).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503003738671",
    descripcion: "SEPIA c/16 CAPS. 33.3/166.6 MG.",
    formula: "Itraconazol+Secnidazol",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502009747359",
    descripcion: "VERIDEX c/2 TABS. 6 MG.",
    formula: "Ivermectina",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506022800220",
    descripcion: "JABÓN de JITOMATE (Karla Di) Barra c/100 G.",
    formula: "Jabón capilar (Barra).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022800138",
    descripcion: "JABÓN de CALÉNDULA (Karla Di) Barra c/100 G.",
    formula: "Jabón facial.",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022808479",
    descripcion: "JABÓN LÍQUIDO DE CALÉNDULA (Karla Di) 500 ML.",
    formula: "Jabón líquido de Caléndula.",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7506022800282",
    descripcion: "JABÓN NEUTRO HIPOALERGÉNICO (Karla Di) Barra c/100 G.",
    formula: "Jabón neutro corporal.",
    laboratorio: "NATL.ELITE"
  },
  {
    codigo: "7506022800305",
    descripcion: "JABÓN PERRO FELIZ (Karla Di) Barra c/100 G.",
    formula: "Jabón para mascotas.",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502299970758",
    descripcion: "JALEA REAL Facial (Dr. Will R. Lax) c/30 CAPS. 650 MG.",
    formula: "Jalea real (Cápsulas faciales).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970215",
    descripcion: "JALEA REAL Facial (Dr. Will R. Lax) c/60 CAPS. 650 MG.",
    formula: "Jalea real (Cápsulas faciales).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "803288480089",
    descripcion: "ABEJALEA c/30 CAPS. 500 MG.",
    formula: "Jalea real en combinacion.",
    laboratorio: "BQM"
  },
  {
    codigo: "714908100501",
    descripcion: "BEE-CAP´S c/50 CAPS. 875 MG.",
    formula: "Jalea real en combinacion.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501573902928",
    descripcion: "KETOCONAZOL (Biomep) CREMA Tubo c/30 G. 2.0 G/100 G.",
    formula: "Ketoconazol (Crema Tópica)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502001164017",
    descripcion: "MI-KE-SON´S CREMA Tubo c/30 G. 2 G.",
    formula: "Ketoconazol (Crema Tópica)",
    laboratorio: "SONS"
  },
  {
    codigo: "7501277073009",
    descripcion: "KETOCONAZOL (Apotex) CREMA 2% TUBO c/30 G.",
    formula: "Ketoconazol (Crema Tópica)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "780083141592",
    descripcion: "AKORAZOL CREMA Tubo c/60 G. 2 G/100 G.",
    formula: "Ketoconazol (Crema Tópica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573900528",
    descripcion: "MESSELZOL c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501571200347",
    descripcion: "KONATURIL c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501075717150",
    descripcion: "LIZOVAG c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502001164024",
    descripcion: "MI-KE-SON´S c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "SONS"
  },
  {
    codigo: "7501299300145",
    descripcion: "CONAZOL c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "LIOMONT"
  },
  {
    codigo: "7502003385540",
    descripcion: "ONOFIN-K c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "656599040691",
    descripcion: "KEPLOZOL c/10 TABS. 200 MG.",
    formula: "Ketoconazol (Tabs. Orales)",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501836000927",
    descripcion: "TINIAZOL SHAMPOO Fco. 120 ML. 2 G/100 ML.",
    formula: "Ketoconazol 2% (Champú)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502245840654",
    descripcion: "QUIPOTREN Sol. Iny. c/6 AMPTAS. 100 MG/2 ML.",
    formula: "Ketoprofeno (Sol. iny. I.M.)",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7502001165151",
    descripcion: "ARTHRIL c/15 CAPS. 100 MG.",
    formula: "Ketoprofeno 100mg. (Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501293202544",
    descripcion: "KETOPROFENO (Medix) c/10 CAPS. L.P. 150 MG.",
    formula: "Ketoprofeno 150mg. (Caps. Orales de Liberación Prolongada).",
    laboratorio: "MEDIX"
  },
  {
    codigo: "7501825301820",
    descripcion: "DOLFORT-DE c/12 TABS. 100/300 MG.",
    formula: "Ketoprofeno+Paracetamol.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "8400007674",
    descripcion: "KETOROLACO (Grin) Sol. Oft. Fco. Gotero 5 ML. 5 MG/1 ML.   ",
    formula: "Ketorolaco (Oftalmico).",
    laboratorio: "GRIN"
  },
  {
    codigo: "7503002772737",
    descripcion: "KT-SUAN GEL Tópica 2% Tubo c/30 G.",
    formula: "Ketorolaco (Tópico)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502226291932",
    descripcion: "KETOROLACO (Alpharma) c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502009745942",
    descripcion: "KETOROLACO (Medigen) c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227870532",
    descripcion: "VOYDOL c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009740244",
    descripcion: "LOROTEC c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501075716924",
    descripcion: "NOVAKEROL c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216803893",
    descripcion: "KETOROLACO (Avivia) c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502247374294",
    descripcion: "LANDACO c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "780083148683",
    descripcion: "DOLIKAN c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216801196",
    descripcion: "KETOROLACO (Ultra) c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "785120754766",
    descripcion: "MAVIDOL c/10 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216792616",
    descripcion: "ULTILAP c/50 TABS. 10 MG.",
    formula: "Ketorolaco 10mg. (Oral).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503002772652",
    descripcion: "LUKSU Sol. Iny. c/3 AMPTAS. 30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501349024267",
    descripcion: "KETOROLACO (Amsa) Sol. Iny. c/3 AMPTAS. 30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384549299",
    descripcion: "KETOROLACO (Neolpharma) Sol. Iny. c/3 AMPTAS. 30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502245840258",
    descripcion: "TREVINAL Sol. Iny. c/3 AMPTAS.  30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "785120754773",
    descripcion: "MAVIDOL Sol. Iny. c/3 AMPTAS. 30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502001160323",
    descripcion: "FINLAC Sol. Iny. c/3 AMPTAS. 30 MG/1 ML.",
    formula: "Ketorolaco 30mg. (Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501349024328",
    descripcion: "KETOROLACO (Amsa) c/4 TABS. Sublinguales 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009748363",
    descripcion: "KETOROLACO (Medigen) c/4 TABS. Sublinguales 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7502240450049",
    descripcion: "LACDOL-S c/4 TABS. Sublinguales 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501349023369",
    descripcion: "KETOROLACO (Amsa) c/6 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009740664",
    descripcion: "LOROTEC-F c/4 TABS. Sublinguales 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502240451022",
    descripcion: "LACDOL-S c/6 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502216808188",
    descripcion: "RALUCSUM c/4 TABS. SUBLINGUAL Sabor Menta 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227876817",
    descripcion: "VOYDOL-S c/4 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009746154",
    descripcion: "LOROTEC-F c/6 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "MAVER"
  },
  {
    codigo: "785120754759",
    descripcion: "MAVIDOL SL c/4 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216808119",
    descripcion: "RALUCSUM c/6 TABS. Sublingual Sabor Menta 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501109762071",
    descripcion: "KETOROLACO (Perrigo) c/6 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502003387636",
    descripcion: "TOLORAN c/4 TABS. Sublingual 30 MG.",
    formula: "Ketorolaco 30mg. (Sublingual).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7500464881731",
    descripcion: "KETOROLACO/TRAMADOL (Umback) Sol. Iny. c/2 AMPTAS. 10-25 MG/1 ML. (Duo Pack)",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "UMBACK"
  },
  {
    codigo: "7502245841095",
    descripcion: "PRETAMEL Sol. Iny. c/3 AMPTAS. 10-25 MG/1 ML.",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501349029040",
    descripcion: "KETOROLACO/TRAMADOL (Amsa) Sol. Iny. c/3 AMPTAS. 10-25 MG/1 ML.",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501299308844",
    descripcion: "KETOROLACO/TRAMADOL (Pharmagen) Sol. Iny. c/3 AMPTAS. 10-25 MG/1 ML.",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7501493874299",
    descripcion: "ATENKOR Sol. Iny. c/2 AMPTAS. 10-25 MG/1 ML.",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "785120755046",
    descripcion: "MAVIDOL TR Sol. Iny. c/3 AMPTAS. 10-25 MG/1 ML.",
    formula: "Ketorolaco+Tramadol (Inyectable).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009749001",
    descripcion: "LOROTEC-DUO c/10 CAPS. 10-25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227874202",
    descripcion: "ORDEGAN c/10 CAPS. 10/25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "RAAM"
  },
  {
    codigo: "785120754841",
    descripcion: "MAVIDOL TR c/10 CAPS. 10/25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009749056",
    descripcion: "LOROTEC-DUO c/40 CAPS. 10-25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501250811642",
    descripcion: "KETOROLACO/TRAMADOL (Teva) c/10 CAPS. 10-25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "TEVA"
  },
  {
    codigo: "7502227874219",
    descripcion: "ORDEGAN c/30 CAPS. 10/25 MG.",
    formula: "Ketorolaco+Tramadol (Oral).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7506313800229",
    descripcion: "CALEBRAM c/ 4 TABS. Sublingual 25-10 MG.",
    formula: "Ketorolaco+Tramadol (Sublingual).",
    laboratorio: "RAAM"
  },
  {
    codigo: "785120755022",
    descripcion: "MAVIDOL TR c/4 TABS. Sublingual 10/25 MG.",
    formula: "Ketorolaco+Tramadol (Sublingual).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7506313800236",
    descripcion: "CALEBRAM c/10 TABS. Sublingual 25-10 MG.",
    formula: "Ketorolaco+Tramadol (Sublingual).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502261162105",
    descripcion: "KETOROLACO/TRAMADOL (Teva) c/10 TABS. Sublingual 10/25 MG.",
    formula: "Ketorolaco+Tramadol (Sublingual).",
    laboratorio: "TEVA"
  },
  {
    codigo: "7501563370973",
    descripcion: "BIOTIFEN SOLUCIÓN Fco. 120 ML. 20 MG/100 ML.",
    formula: "Ketotifeno (Sol. Oral)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380385",
    descripcion: "KETOTIFENO (Randall) SOL. Fco. 120 ML. 20 MG/100 ML.",
    formula: "Ketotifeno (Sol. Oral)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501825305170",
    descripcion: "ASDERT-K JARABE Fco. 120 ML. 20 MG/100 ML.",
    formula: "Ketotifeno (Sol. Oral)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502211780229",
    descripcion: "KERAFFLER SOLUCIÓN Fco. 120 ML. 20 MG/100 ML.",
    formula: "Ketotifeno (Sol. Oral)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502004402802",
    descripcion: "OSATEN c/30 COMPS. 1 MG.",
    formula: "Ketotifeno (Tabs. Orales)",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501258200288",
    descripcion: "ASMARAL-K c/30 TABS. 1 MG.",
    formula: "Ketotifeno (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502211789017",
    descripcion: "LAKSHAFFLER JARABE Fco. 125 ML. 10 G/15 ML.",
    formula: "Lactulosa",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502009745584",
    descripcion: "OPPELVER JARABE Fco. 125 ML. 10 G/15 ML.",
    formula: "Lactulosa",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502209858237",
    descripcion: "ELAPHTERÓN c/28 TABS. Dispersables  25 MG.",
    formula: "Lamotrigina  25mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501384543990",
    descripcion: "LAMOTRIGINA (Psicofarma) c/28 TABS. Dispersables  25 MG.",
    formula: "Lamotrigina  25mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502209858251",
    descripcion: "ELAPHTERÓN c/28 TABS. Dispersables 100 MG.",
    formula: "Lamotrigina 100mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "17491",
    descripcion: "LAMOTRIGINA (Avivia) c/28 TABS. Dispersables 100 MG.",
    formula: "Lamotrigina 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501349020085",
    descripcion: "LAMOTRIGINA (Amsa) c/28 TABS. Mast/Dispble. 100 MG.",
    formula: "Lamotrigina 100mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502209851573",
    descripcion: "LAMOTRIGINA (Avivia) c/28 TABS. Dispersables 100 MG.",
    formula: "Lamotrigina 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501384544003",
    descripcion: "LAMOTRIGINA (Psicofarma) c/28 TABS. Dispersables 100 MG.",
    formula: "Lamotrigina 100mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501573901105",
    descripcion: "DITIL c/14 CAPS. 15 MG.",
    formula: "Lansoprazol 15mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009740749",
    descripcion: "AVANCID c/14 CAPS. L.R. 15 MG.",
    formula: "Lansoprazol 15mg. (Tabs. Orales de Liberación retardada).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503003738961",
    descripcion: "AMDORY c/14 CAPS. 30 MG.",
    formula: "Lansoprazol 30mg.",
    laboratorio: "WERMAR"
  },
  {
    codigo: "656599040738",
    descripcion: "SORIFRAN c/10 CAPS. 30 MG.",
    formula: "Lansoprazol 30mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501825301608",
    descripcion: "PALATRIN c/14 TABS. 30 MG. ",
    formula: "Lansoprazol 30mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009740756",
    descripcion: "AVANCID c/14 CAPS. L.R. 30 MG.",
    formula: "Lansoprazol 30mg. (Tabs. Orales de Lliberación retardada).",
    laboratorio: "MAVER"
  },
  {
    codigo: "75055813",
    descripcion: "LATANOPROST (Opko) SOL. OFT. Fco. Gotero 3 ML. 0.05 MG/1 ML.",
    formula: "Latanoprost",
    laboratorio: "OPKO"
  },
  {
    codigo: "7506022800237",
    descripcion: "JABÓN de LECHE DE BURRA (Karla Di) Barra c/100 G.",
    formula: "Leche de burra (Jabón).",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7502009746178",
    descripcion: "AVATTOR c/30 COMPS. 20 MG.",
    formula: "Leflunomida  20mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503028771738",
    descripcion: "LEFLUNOMIDA (Suanca) c/30 TABS. 20 MG.",
    formula: "Leflunomida  20mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502216800885",
    descripcion: "LEFLUNOMIDA (Ultra) c/30 COMPS. 20 MG.",
    formula: "Leflunomida  20mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506335703188",
    descripcion: "LETZ c/30 TABS. 2.5 MG. ",
    formula: "Letrozol",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501476018627",
    descripcion: "LORELIN Susp. Iny. c/1 FCO. AMP.  3.75 MG/2 ML. y Equipo. p/Admon.",
    formula: "Leuprorelina  3.75mg.",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7501476086220",
    descripcion: "LORELIN Susp. Iny. c/1 FCO. AMP. 11.25 MG/2 ML. y Equipo. p/Admon.",
    formula: "Leuprorelina 11.25mg.",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502008980573",
    descripcion: "LEVADURA de CERVEZA HD c/100 TABS. 500 MG.",
    formula: "Levadura de Cerveza",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "781584367412",
    descripcion: "BIO-LEVADURA c/90 CAPS. 550 MG.",
    formula: "Levadura de Cerveza",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7506353200287",
    descripcion: "ENDOESTAT SOLUCIÓN Fco. 300 ML. 10 G/100 ML.",
    formula: "Levetiracetam  100mg. (Sol. Oral).",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7506331301135",
    descripcion: "AUTEVAZEN c/30 TABS 500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7506344500754",
    descripcion: "URCADIOL c/60 TABS.  500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7502274791163",
    descripcion: "VIXGOPLISOL c/60 TABS. 500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7506331301142",
    descripcion: "AUTEVAZEN c/60 TABS. 500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501349021112",
    descripcion: "LEVETIRACETAM (Amsa) c/60 TABS. 500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384547325",
    descripcion: "LEVETIRACETAM (Psicofarma) c/60 TABS. 500 MG.",
    formula: "Levetiracetam  500mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502274791064",
    descripcion: "VIXGOPLISOL c/30 TABS. 1000 MG.",
    formula: "Levetiracetam 1000mg. (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501349022249",
    descripcion: "LEVETIRACETAM (Amsa) c/30 TABS. 1000 MG. ",
    formula: "Levetiracetam 1000mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227876435",
    descripcion: "ALEMAP c/30 TABS. 1 G.",
    formula: "Levetiracetam 1000mg. (Tabs. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501075721751",
    descripcion: "EVICOVAC c/30 TABS. 1000 MG.",
    formula: "Levetiracetam 1000mg. (Tabs. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501384547332",
    descripcion: "LEVETIRACETAM (Psicofarma) c/30 TABS. 1000 MG.",
    formula: "Levetiracetam 1000mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009745591",
    descripcion: "WEMBLEY Sol. Iny. c/5 AMPTAS. 1 G/5 ML.",
    formula: "Levocarnitina  1g. (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "17702",
    descripcion: "KENTILEN Sol. Iny. c/5 AMPTAS. 1 G/5 ML.",
    formula: "Levocarnitina  1g. (Sol. Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "7501493873629",
    descripcion: "KENTILEN Sol. Iny. c/5 AMPTAS. 1 G/5 ML.",
    formula: "Levocarnitina  1g. (Sol. Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "7501478316073",
    descripcion: "BOCETIX SOL. Sab. Sandía s/Azúcar Fco. 150 ML. 0.5 MG/1 ML.",
    formula: "Levocetirizina (Sol. Oral Infantil).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7501478316226",
    descripcion: "BOCETIX c/10 TABS. 5 MG.",
    formula: "Levocetirizina (Tabs. Orales).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502227427408",
    descripcion: "ESGARO c/10 CAPS. 5 MG.",
    formula: "Levocetirizina (Tabs. Orales).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501075722604",
    descripcion: "BELAZIX c/20 TABS. 5 MG.",
    formula: "Levocetirizina (Tabs. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501258214469",
    descripcion: "KOMZIMBA c/10 TABS. 5 MG.",
    formula: "Levocetirizina (Tabs. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "785118754259",
    descripcion: "SUPRATEX JARABE Fco. 120 ML. 600 MG/100 ML.",
    formula: "Levodropropizina",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502003388008",
    descripcion: "VELATUSS SOLUCIÓN Fco. 120 ML. 600 MG/100 ML.",
    formula: "Levodropropizina",
    laboratorio: "RAYERE"
  },
  {
    codigo: "8907695007050",
    descripcion: "OPLAV Sol. Iny. Envase 100 ML. 500 MG/100 ML.",
    formula: "Levofloxacino 500mg. (Sol. Inyectable).",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7501052712802",
    descripcion: "QUINOFRES Sol. Iny. Envase 100 ML. 500 MG/100 ML.",
    formula: "Levofloxacino 500mg. (Sol. Inyectable).",
    laboratorio: "FRESENIUS"
  },
  {
    codigo: "7501384547066",
    descripcion: "LEVOFLOXACINO (Neolpharma) c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "780083146863",
    descripcion: "UNIQUIN c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502213042059",
    descripcion: "PROXSAFLO c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501573909293",
    descripcion: "LEFAREX c/7 TABS. 500 MG. ",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502225092479",
    descripcion: "CINA c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501349021419",
    descripcion: "LEVOFLOXACINO (Amsa) c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "785118754280",
    descripcion: "SIBOFIX c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501258203104",
    descripcion: "LEVOFLOXACINO (Serral) c/7 TABS. 500 MG.",
    formula: "Levofloxacino 500mg. (Tabs. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502225092486",
    descripcion: "CINA c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501573909309",
    descripcion: "LEFAREX c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083146856",
    descripcion: "UNIQUIN c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501384547073",
    descripcion: "LEVOFLOXACINO (Neolpharma) c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "785118754297",
    descripcion: "SIBOFIX c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501349021433",
    descripcion: "LEVOFLOXACINO (Amsa) c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502213042066",
    descripcion: "PROXSAFLO c/7 TABS. 750 MG.",
    formula: "Levofloxacino 750mg. (Tabs. Orales).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502216806450",
    descripcion: "LADIADES c/2 TABS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216806467",
    descripcion: "LEVONORGESTREL (Ultra) c/2 TABS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216806344",
    descripcion: "LEVONORGESTREL (Avivia) c/2 TABS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501249600240",
    descripcion: "LEVONORGESTREL (TempusPharma) c/2 COMPS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7501644703768",
    descripcion: "SILOGIN c/2 TABS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501644704208",
    descripcion: "LEVONORGESTREL (Perrigo) c/2 TABS. 0.75 MG.",
    formula: "Levonorgestrel 0.75mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109762798",
    descripcion: "EVELYN c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7506449300020",
    descripcion: "LEVONORGESTREL (ADN) c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "ADN PHARMA"
  },
  {
    codigo: "7501249600042",
    descripcion: "LEVONORGESTREL (TempusPharma) c/1 COMP. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7502216806474",
    descripcion: "LEVONORGESTREL (Ultra) c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502214983375",
    descripcion: "LEVONORGESTREL (Prudence) c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "DKT"
  },
  {
    codigo: "7502216806337",
    descripcion: "LEVONORGESTREL (Avivia) c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216806481",
    descripcion: "LADIADES c/1 TAB. 1.5 MG.",
    formula: "Levonorgestrel 1.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501644707490",
    descripcion: "LEVONORGESTREL/ETINILESTRADIOL (Perrigo) c/28 TABS. 0.15/0.03 MG",
    formula: "Levonorgestrel+Etinilestradiol (21 Tabs. activas y 7 inactivas).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501644707506",
    descripcion: "LEVONORGESTREL/ETINILESTRADIOL (Perrigo) c/21 TABS 0.15/0.03 MG.",
    formula: "Levonorgestrel+Etinilestradiol (21 Tabs. activas).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501249605450",
    descripcion: "LEVONORGESTREL-ETINILESTRADIOL (TempusPharma) c/21 TABS 0.15/0.03 MG.",
    formula: "Levonorgestrel+Etinilestradiol (21 Tabs. activas).",
    laboratorio: "IFA"
  },
  {
    codigo: "7501249600813",
    descripcion: "LEVOTIROXINA (TempusPharma) c/100 TABS. 100 MCG.",
    formula: "Levotiroxina Sódica 100mcg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7501298204260",
    descripcion: "LEVOTIROXINA SÓDICA (Merck) c/100 TABS. 100 MCG.",
    formula: "Levotiroxina Sódica 100mcg.",
    laboratorio: "MERCK"
  },
  {
    codigo: "7501349020153",
    descripcion: "LEVOTIROXINA SÓDICA (Amsa) c/100 TABS. 100 MCG.",
    formula: "Levotiroxina Sódica 100mcg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "780083141325",
    descripcion: "SINTROCID c/100 TABS. 0.100 MG.",
    formula: "Levotiroxina Sódica 100mcg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503181042072",
    descripcion: "HERBAPROST c/100 COMPS. 700 MG. ",
    formula: "Licopeno en combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7503003134398",
    descripcion: "ALPHASENS UNGÜENTO 5% Tubo c/35 G.",
    formula: "Lidocaína (Crema tópica al 5%)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908738",
    descripcion: "LIDOCAINA (Alpharma) UNGÜENTO 5% Tubo c/35 G.",
    formula: "Lidocaína (Crema tópica al 5%)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502223111202",
    descripcion: "PHARMACAINE SOL. 10% Fco. Atomizador 115 ML.",
    formula: "Lidocaína (Solución topica al 10%).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502211788928",
    descripcion: "DESYN-N c/6 SUPOSITORIOS 60/5 MG.",
    formula: "Lidocaína+Hidrocortisona (Supositorios).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001164864",
    descripcion: "GOODSIT c/6 SUPOSITORIOS 60/5 MG.",
    formula: "Lidocaína+Hidrocortisona (Supositorios).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502272150023",
    descripcion: "ARTIZON Ungüento Rectal TUBO c/40 G. 5.000-0.250 G/100 G. y Aplicador.",
    formula: "Lidocaína+Hidrocortisona (Ungüento Rectal).",
    laboratorio: "ARLEX"
  },
  {
    codigo: "7502001160507",
    descripcion: "ZISUAL-C Ungüento Rectal TUBO c/30 G. 50-2.5-180-35 MG/1 G. y 6 Aplics.",
    formula: "Lidocaína+Hidrocortisona (Ungüento Rectal).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001161597",
    descripcion: "LISONIN Sol. Iny. Infantil c/1 AMPTA. 300 MG/1 ML. y Jeringa.",
    formula: "Lincomicina 300mg (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009740855",
    descripcion: "LINCOVER Sol. Iny. PEDIÁTRICO c/3 AMPTAS. 300 MG/1 ML.",
    formula: "Lincomicina 300mg (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349020771",
    descripcion: "LINCOMICINA (Amsa) Sol. Iny. c/6 AMPTAS. 300 MG/1 ML..",
    formula: "Lincomicina 300mg (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001161610",
    descripcion: "LISONIN Sol. Iny. Infantil c/6 AMPTAS. 300 MG/1 ML.",
    formula: "Lincomicina 300mg (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009740794",
    descripcion: "LINCOVER c/16 CAPS. 500 MG.",
    formula: "Lincomicina 500mg (Cáps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001161856",
    descripcion: "LISONIN c/12 CAPS. 500 MG.",
    formula: "Lincomicina 500mg (Cáps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001161627",
    descripcion: "LISONIN Sol. Iny. Adulto c/1 AMPTA. 600 MG/2 ML. y Jeringa.",
    formula: "Lincomicina 600mg (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009740848",
    descripcion: "LINCOVER Sol. Iny. ADULTO c/3 AMPTAS. 600 MG/2 ML.",
    formula: "Lincomicina 600mg (Sol. Inyectable).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021983",
    descripcion: "LINCOMICINA (Amsa) Sol. Iny. c/6 AMPTAS. 600 MG/2 ML.",
    formula: "Lincomicina 600mg (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001161641",
    descripcion: "LISONIN Sol. Iny. Adulto c/6 AMPTAS. 600 MG/2 ML.",
    formula: "Lincomicina 600mg (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7506442701794",
    descripcion: "LINEZOLID (Camber) c/10 TABS. 600 MG. ",
    formula: "Linezolid (Tabs. Orales).",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502227875841",
    descripcion: "RODIMIX c/10 TABS. 600 MG",
    formula: "Linezolid (Tabs. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501573925071",
    descripcion: "DOSTERIL c/30 TABS. 10 MG.",
    formula: "Lisinopril 10mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501493888982",
    descripcion: "KESIPRIL c/30 TABS. 10 MG.",
    formula: "Lisinopril 10mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7501571201573",
    descripcion: "NODIAMEX c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "IQFA"
  },
  {
    codigo: "780083150181",
    descripcion: "DILOSTOP c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "COLLINS"
  },
  {
    codigo: "75016845",
    descripcion: "HURPLEX c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501573900283",
    descripcion: "EXCLEFIN c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083142506",
    descripcion: "DILOSTOP c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "COLLINS"
  },
  {
    codigo: "656599040769",
    descripcion: "DIPERA c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502001165434",
    descripcion: "LOP c/12 TABS. 2 MG.",
    formula: "Loperamida",
    laboratorio: "SONS"
  },
  {
    codigo: "7501299379066",
    descripcion: "LORATADINA (Pharmagen) SOL. GOTAS Pedtca. Fco. 30 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral Pediátrica)",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7502009740312",
    descripcion: "LARITOL SOL. Pedtco. Fco. Gotero 30 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral Pediátrica)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501836003607",
    descripcion: "ALERFIN SOL. GOTAS Sab. Miel-Lima Limón Fco. 30 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral Pediátrica)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501573902652",
    descripcion: "GRIMERAL SOLUCIÓN Fco. 30 ML. 5 MG/5 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502274791767",
    descripcion: "MORTRIXOL SOLUCIÓN Fco. 60 ML. 100 MG/100 ML. ",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501573902614",
    descripcion: "GRIMERAL SOLUCIÓN Fco. 60 ML. 5 MG/5 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502001163553",
    descripcion: "ALUDIX JARABE Fco. 60 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009740305",
    descripcion: "LARITOL SOLUCIÓN Fco. 60 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502211780915",
    descripcion: "DOTAGIL JARABE Fco. 60 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "780083142704",
    descripcion: "LOVARIN JARABE Fco. 60 ML. 100 MG/100 ML.",
    formula: "Loratadina (Sol. Oral)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009746031",
    descripcion: "LORATADINA (Medigen) c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501573908982",
    descripcion: "GRIMERAL c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209858022",
    descripcion: "HISTINA c/10 TABS. 10 MG. ",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009740435",
    descripcion: "LARITOL c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150198",
    descripcion: "LOVARIN c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083141981",
    descripcion: "LOVARIN c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573908975",
    descripcion: "GRIMERAL c/20 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209858039",
    descripcion: "HISTINA c/20 TABS. 10 MG. ",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009742828",
    descripcion: "LARITOL c/20 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349024779",
    descripcion: "LORATADINA (Amsa) c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216793415",
    descripcion: "LORATADINA (Ultra) c/20 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501385491566",
    descripcion: "LORATADINA (Hormona) c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7501644704154",
    descripcion: "LORATADINA (Perrigo) c/20 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501825301509",
    descripcion: "ALBATRINA c/10 TABS. 10 MG.",
    formula: "Loratadina (Tabs. Orales)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009742798",
    descripcion: "LARITOL-EX SOLUCIÓN Fco. Gotero 30 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral Pediátrica).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825301578",
    descripcion: "BRONAR SOLUCIÓN GOTAS Pedtcas. Fco. 30 ML. 600-100 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral Pediátrica).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501573904700",
    descripcion: "GRISTALIT SOLUCIÓN Fco.  30 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501573904694",
    descripcion: "GRISTALIT SOLUCIÓN Fco. 60 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501573904687",
    descripcion: "GRISTALIT SOLUCIÓN Fco. 120 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502213042073",
    descripcion: "FHLEMLESS SOLUCIÓN 12 HRS. Fco. 120 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "780083146214",
    descripcion: "LOVARIN-EX SOLUCIÓN Fco. 120 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502211781141",
    descripcion: "BISINCOF JARABE Fco. 120 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502009740657",
    descripcion: "LARITOL-EX SOLUCIÓN Fco. 120 ML. 100-600 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825301561",
    descripcion: "BRONAR SOLUCIÓN Fco. 120 ML. 600-100 MG/100 ML.",
    formula: "Loratadina+Ambroxol (Sol. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009741005",
    descripcion: "LARITOL-EX c/10 TABS. 5/30 MG.",
    formula: "Loratadina+Ambroxol (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "656599040806",
    descripcion: "CILONAXOL c/10 TABS. 5/30 MG.",
    formula: "Loratadina+Ambroxol (Tabs. Orales).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502001167162",
    descripcion: "EXYOFUR SOL. 12H Fco 60 ML. 100-5 MG/100 ML.",
    formula: "Loratadina+Betametasona (Sol. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502213040031",
    descripcion: "FARMALOR SOL. Pediátrica Fco. 60 ML. 100-5 MG/100 ML.",
    formula: "Loratadina+Betametasona (Sol. Oral).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "780083148546",
    descripcion: "COBEDINA-NS 12H SOL. Pedtca. Fco. 60 ML. 100-5 MG/100 ML.",
    formula: "Loratadina+Betametasona (Sol. Oral).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501258206563",
    descripcion: "TAMEX SOLUCIÓN Fco. 60 ML. 100-5 MG/100 ML.",
    formula: "Loratadina+Betametasona (Sol. Oral).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009744129",
    descripcion: "ERISPAN Compuesto SOL. Pedtca. Fco. 60 ML. 100-5 MG/100 ML.",
    formula: "Loratadina+Betametasona (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083150129",
    descripcion: "COBEDINA-NS 12H c/10 TABS. 5.0/0.25 MG.",
    formula: "Loratadina+Betametasona (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009746239",
    descripcion: "ERISPAN Compuesto c/10 TABS. 5/0.25 MG.",
    formula: "Loratadina+Betametasona (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083148645",
    descripcion: "COBEDINA-NS 12H c/10 TABS. 5.0/0.25 MG.",
    formula: "Loratadina+Betametasona (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009746246",
    descripcion: "ERISPAN Compuesto c/20 TABS. 5/0.25 MG",
    formula: "Loratadina+Betametasona (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501258204002",
    descripcion: "TAMEX c/10 TABS. 5.0/0.25 MG.",
    formula: "Loratadina+Betametasona (Tabs. Orales).",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501573907121",
    descripcion: "DISTRAFIN JARABE Adulto Fco. 120 ML. 400-100 MG/100 ML.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Adulto).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009740817",
    descripcion: "LARITOL-D SOLUCIÓN ADULTO Fco. 120 ML. 100-200 MG/100 ML.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Adulto).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825303039",
    descripcion: "BRAMIN-FLU JARABE Fco. 120 ML. 0.1-0.4 G/100 ML.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Adulto).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501573907091",
    descripcion: "DISTRAFIN JARABE Infantil Fco. 60 ML. 200-50 MG/100 ML.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Infantil).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009741784",
    descripcion: "LARITOL-D JARABE INFANTIL Fco. 60 ML. 50-100 MG/100 ML.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Infantil).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825302643",
    descripcion: "BRAFELIX SOLUCION Fco. 60 ML. 50-200 MG/100 ML. y Dosificador",
    formula: "Loratadina+Fenilefrina (Sol. Oral Infantil).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501825302964",
    descripcion: "BRAFELIX SOLUCIÓN Fco. 30 ML. 50-200 MG/100 ML. y Dosificador.",
    formula: "Loratadina+Fenilefrina (Sol. Oral Pediátrica).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009743856",
    descripcion: "LARITOL-D c/10 TABS. L.P. 5/30 MG.",
    formula: "Loratadina+Fenilefrina (Tabs. Orales Adulto).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746802",
    descripcion: "VERSISTOL c/10 SOBS. Granulado 3 G.",
    formula: "L-Ornitina L-Aspartato",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502240450070",
    descripcion: "PUNAB c/30 TABS 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7501349028159",
    descripcion: "LOSARTÁN (Amsa) c/30 COMPS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216803657",
    descripcion: "LOSARTÁN (Ultra) c/30 TABS.  50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009745904",
    descripcion: "LOSARTÁN (Medigen) c/30 TABS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "821998000229",
    descripcion: "LOSARTÁN (Schoen) c/30 TABS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "780083146818",
    descripcion: "STAARS c/30 COMPS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506494600243",
    descripcion: "PLAVISIN c/30 TABS 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502216803923",
    descripcion: "LOSARTÁN (Avivia) c/30 TABS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502009744013",
    descripcion: "ALDERÁN c/30 TABS.  50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216803954",
    descripcion: "LOSARTÁN (Avivia) c/60 TABS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "821998000588",
    descripcion: "LOSARTÁN (Schoen) c/90 TABS. 50 MG.",
    formula: "Losartán  50mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502216804333",
    descripcion: "LOSARTÁN (Ultra) c/15 TABS. 100 MG.",
    formula: "Losartán 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501573904861",
    descripcion: "JOMASAR c/30 TABS. 100 MG.",
    formula: "Losartán 100mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502240450711",
    descripcion: "PUNAB c/15 TABS. 100 MG.",
    formula: "Losartán 100mg.",
    laboratorio: "WERMAR"
  },
  {
    codigo: "7502009744358",
    descripcion: "ALDERÁN c/15 TABS. 100 MG.",
    formula: "Losartán 100mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216807679",
    descripcion: "VIOPEXA c/30 TABS. 100 MG.",
    formula: "Losartán 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506494600021",
    descripcion: "LOSARTÁN/HIDROCLOROTIAZIDA (Schoen) c/30 COMPS. 50/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida  50/12.5mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502216795204",
    descripcion: "LOSARTÁN/HIDROCLOROTIAZIDA (Ultra) c/30 TABS. 50/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida  50/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506494600267",
    descripcion: "SYSTOCAL-DUO c/30 COMPS. 50/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida  50/12.5mg.",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502009742767",
    descripcion: "CO-TARSAN c/15 COMPS.  50/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida  50/12.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009742774",
    descripcion: "CO-TARSAN c/30 COMPS.  50/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida  50/12.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009744327",
    descripcion: "CO-TARSAN c/15 COMPS. 100/12.5 MG.",
    formula: "Losartán+Hidroclorotiazida 100/12.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796119",
    descripcion: "LOSARTÁN/HIDROCLOROTIAZIDA (Ultra) c/15 TABS. 100/25 MG.",
    formula: "Losartán+Hidroclorotiazida 100/25.0mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009742781",
    descripcion: "CO-TARSAN c/15 COMPS. 100/25 MG.",
    formula: "Losartán+Hidroclorotiazida 100/25.0mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501109768110",
    descripcion: "LUBIFEM Lubricante Vaginal GEL Tubo c/113 G.",
    formula: "Lubricante vaginal a base de Agua (Natural) ",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502299970383",
    descripcion: "PRO CLIMAX GEL ESTIMULANTE ÍNTIMO Tubo c/60 G.",
    formula: "Lubricante vaginal a base de Agua (Natural) ",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7501590287039",
    descripcion: "ABUZZ c/60 CAPS. 0.5735 G.",
    formula: "Maca (Extracto seco de Lepidium meyenii Walp).",
    laboratorio: "CMD"
  },
  {
    codigo: "7503002615645",
    descripcion: "KOILOSELL Sab. Natural c/4 SOBRES POLVO 109.6 G. 105 G.",
    formula: "Macrogol (Polietilenglicol)",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7503002773130",
    descripcion: "SULIZOL Sab. Natural c/4 SOBRES POLVO 109.65 G. 105 G.",
    formula: "Macrogol (Polietilenglicol)+Electrólitos.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502009745522",
    descripcion: "GALAVER GEL c/10 Sobres 10 ML. 80-10 MG/1 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral en sobre).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216809161",
    descripcion: "MAGALDRATO/DIMETICONA GEL (Avivia) c/10 Sobres 10 ML. 80-10 MG/1 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral en sobre).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083150525",
    descripcion: "XENOPIR GEL c/10 Sobres 10 ML. 80-10 MG/1 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral en sobre).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009747908",
    descripcion: "MAGALDRATO/DIMETICONA (Medigen) GEL Fco. 120 ML. 8-1 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501825305187",
    descripcion: "BARDIGAS SUSP. Fco. 250 ML. 0.8-0.1 G/10 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502006921936",
    descripcion: "MADIFARM SUSP. Fco. 250 ML. 8.0-1.0 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502009745027",
    descripcion: "GALAVER GEL Fco. 250 ML. 8-1 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "785118754228",
    descripcion: "GRALOXEN GEL Fco. 250 ML. 8-1 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501109763511",
    descripcion: "MAGALDRATO/DIMETICONA (Quifa) GEL Fco. 250 ML. 8-1 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109763733",
    descripcion: "MADRILCAN GEL Fco. 250 ML. 8-1 G/100 ML.",
    formula: "Magaldrato+Dimeticona (Gel Oral).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502259892403",
    descripcion: "CITRATO DE MAGNESIO/LECITINA DE SOYA (Naturex) c/30 CAPS. 1.82 G.",
    formula: "Magnesio en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501109790739",
    descripcion: "NORMEX Leche de Magnesia SUSP.  Fco. 60 ML. 8.5 G/100 ML.",
    formula: "Magnesio, hidroxido de",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109790029",
    descripcion: "NORMEX Leche de Magnesia SUSP. Fco. 180 ML. 8.5 G/100 ML.",
    formula: "Magnesio, hidroxido de",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109760541",
    descripcion: "NORMEX Leche de Magnesia SUSP. Fco. 360 ML. 8.5 G/100 ML.",
    formula: "Magnesio, hidroxido de",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502209810099",
    descripcion: "CHOFABOL GRANULADO Fco. c/100 G. 25-1-1-0.05-5 G/100 G.",
    formula: "Magnesio+Boldo+Cynara Scolymys+Belladona+Peptona.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7506022800268",
    descripcion: "JABÓN de MANZANILLA (Karla Di) Barra c/100 G.",
    formula: "Manzanilla (Jabón)",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501825300878",
    descripcion: "VERMICOL SUSP. Fco. 30 ML. 2 G/100 ML.",
    formula: "Mebendazol 100mg. (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502001165748",
    descripcion: "EXBENZOL c/6 TABS. 100 MG.",
    formula: "Mebendazol 100mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501070648626",
    descripcion: "MEBECICLOL c/18 TABS. 300/60 MG.",
    formula: "Mebendazol+Tinidazol",
    laboratorio: "SANFER"
  },
  {
    codigo: "780083139568",
    descripcion: "BONAZIN SOL. Fco. Gotero 10 ML. 8.33-16.66 MG/1 ML.",
    formula: "Meclizina+Piridoxina (Sol. Gotas).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001162518",
    descripcion: "MECLISON SOL. Fco. Gotero 15 ML. 8.330-16.660 MG/1 ML.",
    formula: "Meclizina+Piridoxina (Sol. Gotas).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001037076",
    descripcion: "EMEDYL SOL. Fco. Gotero 15 ML. 8.330-16.660 MG/1 ML.",
    formula: "Meclizina+Piridoxina (Sol. Gotas).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502004403458",
    descripcion: "VO-REMI SOL. Fco. Gotero 15 ML. 8.33/16.0 MG/1 ML.               ",
    formula: "Meclizina+Piridoxina (Sol. Gotas).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "780083139575",
    descripcion: "BONAZIN Sol. Iny. c/1 AMPTA. 25-50-20 MG/1 ML.",
    formula: "Meclizina+Piridoxina (Sol. Inyectable).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502004403502",
    descripcion: "VO-REMI Sol. Iny. c/5 AMPTAS. 25-50 MG/1 ML.",
    formula: "Meclizina+Piridoxina (Sol. Inyectable).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502001162525",
    descripcion: "MECLISON c/20 TABS. 25/50 MG.",
    formula: "Meclizina+Piridoxina (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502004403557",
    descripcion: "VO-REMI c/12 TABS. 25/50 MG.",
    formula: "Meclizina+Piridoxina (Tabs. Orales).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "714908100228",
    descripcion: "REVENOX c/60 TABS. 3 MG.",
    formula: "Melatonina 3mg.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502274792115",
    descripcion: "MELNOTEX c/ 20 TABS. Sublinguales 5 MG.",
    formula: "Melatonina 5mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502274792139",
    descripcion: "MELNOTEX c/120 TABS. Sublinguales 5 MG.",
    formula: "Melatonina 5mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "780083142285",
    descripcion: "AURICAM c/20 TABS. 7.5 MG.",
    formula: "Meloxicam  7.5mg",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502209858046",
    descripcion: "MENFLIXIL c/14 TABS.  7.5 MG.",
    formula: "Meloxicam  7.5mg",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7503003134695",
    descripcion: "ANFLATOX c/14 TABS. 7.5 MG.",
    formula: "Meloxicam  7.5mg",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502009740466",
    descripcion: "FLEXIVER c/14 TABS. 7.5 MG.",
    formula: "Meloxicam  7.5mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502209858053",
    descripcion: "MENFLIXIL c/14 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009740459",
    descripcion: "FLEXIVER c/10 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "785120754087",
    descripcion: "MAVICAM c/10 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "MAVI"
  },
  {
    codigo: "780083142292",
    descripcion: "AURICAM c/10 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503004908967",
    descripcion: "ANFLATOX c/10 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502209850361",
    descripcion: "MELOXICAM (Avivia) c/14 TABS. 15 MG.",
    formula: "Meloxicam 15mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502009742101",
    descripcion: "FLEXIVER Compuesto c/20 CAPS.  7.5/215 MG.",
    formula: "Meloxicam+Metocarbamol  7.5/215mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216792197",
    descripcion: "RETOFLAM-F c/10 TABS. 215/15 MG.",
    formula: "Meloxicam+Metocarbamol 15/215mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227876848",
    descripcion: "OFELICON c/10 CAPS. 15/215 MG.",
    formula: "Meloxicam+Metocarbamol 15/215mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009742095",
    descripcion: "FLEXIVER Compuesto c/10 CAPS. 15/215 MG.",
    formula: "Meloxicam+Metocarbamol 15/215mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746208",
    descripcion: "FLEXIVER Compuesto c/20 CAPS. 15/215 MG.",
    formula: "Meloxicam+Metocarbamol 15/215mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506331300909",
    descripcion: "LINYBINDO c/14 TABS. 10 MG.",
    formula: "Memantina 10mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501384547912",
    descripcion: "MEMANTINA (Psicofarma) c/28 TABS. 10 MG.",
    formula: "Memantina 10mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502242701194",
    descripcion: "MEMANTINA (Corne) c/14 TABS. 10 MG. ",
    formula: "Memantina 10mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7502003389975",
    descripcion: "MEMANTINA (Rayere) c/14 TABS. 10 MG.",
    formula: "Memantina 10mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502242701200",
    descripcion: "MEMANTINA (Corne) c/28 TABS. 10 MG. ",
    formula: "Memantina 10mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501349024427",
    descripcion: "MEMANTINA (Amsa) c/30 TABS. 10 MG.",
    formula: "Memantina 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502242701217",
    descripcion: "MEMANTINA (Corne) c/14 TABS. 20 MG. ",
    formula: "Memantina 20mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501349024489",
    descripcion: "MEMANTINA (Amsa) c/14 TABS. 20 MG.",
    formula: "Memantina 20mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502003389982",
    descripcion: "MEMANTINA (Rayere) c/14 TABS. 20 MG.",
    formula: "Memantina 20mg.",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501349024649",
    descripcion: "MEMANTINA (Amsa) c/28 TABS. 20 MG.",
    formula: "Memantina 20mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502242701224",
    descripcion: "MEMANTINA (Corne) c/28 TABS. 20 MG. ",
    formula: "Memantina 20mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "714908105902",
    descripcion: "MINAZZA LINIMENTO 10 ML.",
    formula: "Mentha x Piperita",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7506331300053",
    descripcion: "MERONNY Sol. Iny. c/1 FCO. AMP. 500 MG.",
    formula: "Meropenem  500mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501493867895",
    descripcion: "MERMAVIE Sol. Iny. c/1 FCO. AMP.  500 MG.",
    formula: "Meropenem  500mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7506331300060",
    descripcion: "MERONNY Sol. Iny. c/1 FCO. AMP. 1 G.",
    formula: "Meropenem 1g.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501493867901",
    descripcion: "MERMAVIE Sol. Iny. c/1 FCO. AMP. 1 G/20 ML.",
    formula: "Meropenem 1g.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502001165229",
    descripcion: "MEROPENEM (Son´s) Sol. Iny. c/1 FCO. AMP. 1.0 G.",
    formula: "Meropenem 1g.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001160040",
    descripcion: "EXODALINA Sol. Iny. c/3 AMPTAS. 2.15 G/5 ML.",
    formula: "Metamizol Magnésico 2g. (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502226293776",
    descripcion: "METAMIZOL SÓDICO (Alpharma) Sol. Iny. c/3 AMPTAS. 1 G/2 ML.",
    formula: "Metamizol Sódico 1.0g. (Sol. Inyectable).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001160064",
    descripcion: "MAGNIL Sol. Iny. c/3 AMPTAS. 1 G/2 ML.",
    formula: "Metamizol Sódico 1.0g. (Sol. Inyectable).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001039018",
    descripcion: "PIROMIL Sol. Iny. c/3 AMPTAS. 1 G/2 ML.",
    formula: "Metamizol Sódico 1.0g. (Sol. Inyectable).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502001160231",
    descripcion: "MAGNIL JARABE Infantil Fco. 100 ML. 250 MG/5 ML.",
    formula: "Metamizol Sódico 250mg. (Jarabe).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001032279",
    descripcion: "FIVERÍN JARABE Infantil Fco. 100 ML. 5 G/100 ML.",
    formula: "Metamizol Sódico 250mg. (Jarabe).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502211780687",
    descripcion: "NEOSEDAL JARABE Fco. 120 ML. 5 G/100 ML.",
    formula: "Metamizol Sódico 250mg. (Jarabe).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501825300687",
    descripcion: "PIROMEBRINA JARABE Fco. 120 ML. 5 G/100 ML.",
    formula: "Metamizol Sódico 250mg. (Jarabe).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502001038707",
    descripcion: "BIODOLGYN SOL. Fco. Gotero 15 ML. 500 MG/1 ML.",
    formula: "Metamizol Sódico 500mg. (Sol. Gotas).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501825300816",
    descripcion: "SUPRIM SOL. GOTAS Pediátricas Fco. 15 ML. 500 MG/1 ML.",
    formula: "Metamizol Sódico 500mg. (Sol. Gotas).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502226290850",
    descripcion: "AVAFONTAN c/10 TABS. 500 MG.               ",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7503004908813",
    descripcion: "METAMIZOL SODICO (Neolpharma) c/10 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501573901082",
    descripcion: "MESSELFENIL c/10 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209810150",
    descripcion: "METAPIRONA Cja/Fco. c/10 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563310016",
    descripcion: "LOZIMA c/10 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501342801131",
    descripcion: "METAMIZOL SÓDICO (Avivia) c/10 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502001036260",
    descripcion: "PIROMIL c/20 TABS. 500 MG.",
    formula: "Metamizol Sódico 500mg. (Tabs. Orales).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7501836003256",
    descripcion: "DINAMEL c/30 TABS. 500 MG.",
    formula: "Metformina  500mg.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502211789345",
    descripcion: "METFORMINA (Loeffler) c/40 TABS. 500 MG.",
    formula: "Metformina  500mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502226293929",
    descripcion: "METFORMINA (Alpharma) c/30 TABS. L.P. 500 MG.",
    formula: "Metformina  500mg. (Liberación Prolongada)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226293936",
    descripcion: "METFORMINA (Alpharma) c/30 TABS. L.P. 750 MG.",
    formula: "Metformina  750mg. (Liberación Prolongada)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501277034345",
    descripcion: "METFORMINA (Apotex) c/30 COMPS. L.P. 750 MG.",
    formula: "Metformina  750mg. (Liberación Prolongada)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277034338",
    descripcion: "METFORMINA (Apotex) c/60 TABS. L.P. 750 MG.",
    formula: "Metformina  750mg. (Liberación Prolongada)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501349022140",
    descripcion: "METFORMINA (Amsa) c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "780083141714",
    descripcion: "ANGLUCID c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503004908776",
    descripcion: "METFORMINA (Alpharma) c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501563380262",
    descripcion: "METFORMINA (Randall) c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502211789352",
    descripcion: "METFORMINA (Loeffler) c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501563381801",
    descripcion: "BIODID c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501482201143",
    descripcion: "ZAPRIR Caja c/30 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "780083141868",
    descripcion: "ANGLUCID c/50 TABS. 850 MG.",
    formula: "Metformina  850mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501277034369",
    descripcion: "METFORMINA (Apotex) c/30 COMPS. L.P. 1000 MG.",
    formula: "Metformina 1000mg. (Liberación Prolongada)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501571201771",
    descripcion: "SIBET-C c/30 TABS. 500/2.5 MG.",
    formula: "Metformina+Glibenclamida  500/2.5mg.",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501101600050",
    descripcion: "METFORMINA/GLIBENCLAMIDA (Loeffler) c/40 TABS. 500/2.5 MG.",
    formula: "Metformina+Glibenclamida  500/2.5mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501573900245",
    descripcion: "WADIL c/30 TABS. 500/2.5 MG.",
    formula: "Metformina+Glibenclamida  500/2.5mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083142230",
    descripcion: "DUO-ANGLUCID c/30 TABS. 500/5.0 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573900252",
    descripcion: "WADIL c/30 TABS. 500/5 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501101600067",
    descripcion: "GLIBENCLAMIDA/METFORMINA (Loeffler) c/40 TABS. 5/500 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "780083142209",
    descripcion: "DUO-ANGLUCID c/60 TABS. 500/5 MG",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "17698",
    descripcion: "SONSIMINA c/60 TABS. 500/5 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573900627",
    descripcion: "WADIL c/60 TABS. 500/5 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "785118754204",
    descripcion: "MAVIGLIN c/60 TABS. 500/5.0 MG.",
    formula: "Metformina+Glibenclamida  500/5mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501573900122",
    descripcion: "HIPERMESSEL c/30 TABS. 250 MG.",
    formula: "Metildopa 250mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501476040123",
    descripcion: "SOLSOLONA Susp. Iny. c/1 FCO. AMP. 2 ML. 40 MG/1 ML.",
    formula: "Metilprednisolona  80mg.",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502256040104",
    descripcion: "DISMINONA Sol. Iny. c/1 FCO. AMP. 500 MG/8 ML. (62.5 MG/1 ML.)",
    formula: "Metilprednisolona 500mg.",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7502227426982",
    descripcion: "ML-PRIM c/12 CAPS. 375/200 MG.",
    formula: "Metocarbamol+Ibuprofeno.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501836000118",
    descripcion: "CARBAFEN c/30 TABS. 350/400 MG.",
    formula: "Metocarbamol+Paracetamol.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "75006433",
    descripcion: "CIRULAN SOL. Fco. Gotero 20 ML. 400 MG/100 ML.",
    formula: "Metoclopramida (Sol. Gotas)",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502211780113",
    descripcion: "GIGEMET SOL. Fco. Gotero 20 ML. 400 MG/100 ML.",
    formula: "Metoclopramida (Sol. Gotas)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501384547929",
    descripcion: "METOCLOPRAMIDA (Neolpharma) Sol. Iny. c/6 AMPTAS. 10 MG/2 ML.",
    formula: "Metoclopramida (Sol. Inyectable)",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501349024151",
    descripcion: "METOCLOPRAMIDA (Amsa) Sol. Iny. c/6 AMPTAS. 10 MG/2 ML.",
    formula: "Metoclopramida (Sol. Inyectable)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502245840364",
    descripcion: "VIMECLOL Sol. Iny. c/6 AMPTAS. 10 MG/2 ML.",
    formula: "Metoclopramida (Sol. Inyectable)",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501571200606",
    descripcion: "MIPRAMID c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501482201853",
    descripcion: "TINOLPRO c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501563380156",
    descripcion: "METOCLOPRAMIDA (Randall) c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502227871676",
    descripcion: "CONYSMIN c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216807365",
    descripcion: "METOCLOPRAMIDA (Avivia) c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075710786",
    descripcion: "CIRULAN c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502208892638",
    descripcion: "DIRPASID c/20 TABS. 10 MG.",
    formula: "Metoclopramida (Tabs. Orales)",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "656599040882",
    descripcion: "MEZELOL c/ 20 TABS.  50 MG.",
    formula: "Metoprolol   50mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501571200675",
    descripcion: "PROMICED c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "IQFA"
  },
  {
    codigo: "821998000700",
    descripcion: "METOPROLOL (Schoen) c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7506494600212",
    descripcion: "DELANDEX c/20 TABS.100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7501493888944",
    descripcion: "KENAPROL c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502208894892",
    descripcion: "NIPRESOL c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7501563381542",
    descripcion: "BIOPROL c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501258200394",
    descripcion: "SERMETROL c/20 TABS. 100 MG.",
    formula: "Metoprolol  100mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501349023468",
    descripcion: "METOTREXATO (Amsa) c/50 TABS. 2.5 MG.",
    formula: "Metotrexato  2.5mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563381528",
    descripcion: "BIOTAZOL SUSP. Fco. 120 ML. 5 G/100 ML.",
    formula: "Metronidazol 250mg. (Susp. Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563382037",
    descripcion: "METRONIDAZOL (Randall) SUSP. Fco. 120 ML. 5 G/100 ML.",
    formula: "Metronidazol 250mg. (Susp. Oral).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7503003134008",
    descripcion: "ELYZOL-S SUSP. Fco. 120 ML. 250 MG/5 ML.               ",
    formula: "Metronidazol 250mg. (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001164567",
    descripcion: "METROSON c/20 TABS. 250 MG.",
    formula: "Metronidazol 250mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "8907695041337",
    descripcion: "METRIS Sol. Iny. c/1 Fco. 100 ML. 500 MG/100 ML.",
    formula: "Metronidazol 500mg. (Sol. Inyectable).",
    laboratorio: "ZEUX"
  },
  {
    codigo: "7501052712369",
    descripcion: "KABIZOL Sol. Iny. 0.5% Envase 100 ML.",
    formula: "Metronidazol 500mg. (Sol. Inyectable).",
    laboratorio: "FRESENIUS"
  },
  {
    codigo: "7501573900016",
    descripcion: "MESSELDAZOL c/20 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563380316",
    descripcion: "METRONIDAZOL (Randall) c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501573900542",
    descripcion: "MESSELDAZOL c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563370805",
    descripcion: "BIOTAZOL c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502226291888",
    descripcion: "METRONIDAZOL (Alpharma) c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "75017095",
    descripcion: "ELYZOL c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501299370179",
    descripcion: "METRONIDAZOL (Pharmagen) c/30 TABS. 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Orales).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7501571201108",
    descripcion: "SAMONIL-V c/10 TABS. Vaginales 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Vaginales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501563381153",
    descripcion: "METRONIDAZOL (Randall) c/10 TABS. Vaginales 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Vaginales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563381368",
    descripcion: "BIOMONA c/10 TABS. Vaginales 500 MG.",
    formula: "Metronidazol 500mg. (Tabs. Vaginales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501299379158",
    descripcion: "METRONIDAZOL/DIYODOHNA. (Pharmagen) SUSP. Fco. 120 ML. 2.5-2.0 G/100 ML.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 125/100mg. (Susp. Oral).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7502211780069",
    descripcion: "STOMFFLER PLUS SUSP. Fco. 120 ML. 2.5-2.0 G/100 ML.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 125/100mg. (Susp. Oral).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502004400150",
    descripcion: "AMEBYL SUSP. Fco. 120 ML. 125-100 MG/5 ML.               ",
    formula: "Metronidazol+Diyodohidroxiquinoleína 125/100mg. (Susp. Oral).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7503000422634",
    descripcion: "NORECIL 600 c/20 TABS. 400/200 MG.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 400/200mg. (Tabs/Caps. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501299370315",
    descripcion: "METRONIDAZOL/DIYODOHIDROXIQUINOLEÍNA (Pharmagen) c/30 CAPS. 400/200 MG.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 400/200mg. (Tabs/Caps. Orales).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "780083139858",
    descripcion: "FLAGOSIL 400 c/30 CAPS. 400/200 MG.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 400/200mg. (Tabs/Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502004400204",
    descripcion: "AMEBYL c/20 TABS. 400/400 MG.",
    formula: "Metronidazol+Diyodohidroxiquinoleína 400/400mg. (Tabs/Caps. Orales).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502001164697",
    descripcion: "FENIMETH-V c/12 ÓVULOS. 500mg/100,000ui.",
    formula: "Metronidazol+Nistatina",
    laboratorio: "SONS"
  },
  {
    codigo: "7503181041488",
    descripcion: "TAMARIN-LX c/30 CAPS. 445 MG.",
    formula: "Mezcla de plantas para Estreñimiento ocasional.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502266031154",
    descripcion: "FIBOTAX c/10 SOBS. FIBRA s/Azúcar 10 G.",
    formula: "Mezcla de plantas para Estreñimiento ocasional.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502008989347",
    descripcion: "MÁXRED c/30 CAPS. 1200 MG.",
    formula: "Mezcla de plantas para Estreñimiento ocasional.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502259892274",
    descripcion: "VITERAL-T c/6 SOBS. 10 G.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008986117",
    descripcion: "AJOPARS c/60 CAPS. 500 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502259891581",
    descripcion: "BLACK GARLIC c/60 CAPS. 600 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810193",
    descripcion: "DB-NAT c/NEEM (Supra) c/72 CAPS. 500 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7501590285615",
    descripcion: "CATAFENI HG c/30 CAPS. 250 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502259892052",
    descripcion: "KOFFIEX Sabor Capuchino Cja. c/15 SOBS. POLVO 10 G.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810575",
    descripcion: "SUPRA AJO NEGRO c/72 CAPS. 500 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502299970314",
    descripcion: "CITRUS SLIM Té para infusión Fco. c/150 G. POLVO.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502008980191",
    descripcion: "CAPFINT IMMUNE SYSTEM c/60 CAPS. 500 MG.",
    formula: "Mezcla de plantas para fortalecer el sistema inmune.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502259891154",
    descripcion: "ZEH´N c/60 CAPS. 545 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810278",
    descripcion: "SUPRA SUPRESIN ES3 c/36 CAPS. 500 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "7502259892250",
    descripcion: "ANIMALIN NITE Fco. c/30 Gomitas. 3 G.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008988227",
    descripcion: "KTÁL X-3 Noche c/30 CAPS. 650 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008986650",
    descripcion: "KTÁL X-3 c/30 CAPS. 500 MG.             ",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008981211",
    descripcion: "KTÁL X-3 JARABE 240 ML.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503181042225",
    descripcion: "HERBAENTREX c/100 COMPS. 700 MG. ",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "803288480133",
    descripcion: "CAL-MORE c/30 CAPS. 510 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "BQM"
  },
  {
    codigo: "7502259892304",
    descripcion: "L-TEANINA, AZAHAR, MANZANILLA, TORONJIL Fco. c/30 GOMITAS 3 G.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008988272",
    descripcion: "KTÁL X-3 Noche c/60 CAPS. 650 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008986643",
    descripcion: "KTÁL X-3 c/60 CAPS. 500 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7501590285004",
    descripcion: "VALNAIT c/30 CAPS. 250 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "CMD"
  },
  {
    codigo: "7500326106972",
    descripcion: "MEM-EH c/30 TABS. 800 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "714908107920",
    descripcion: "TAFLAVIX c/40 TABS. 100/60 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502299970437",
    descripcion: "5-HTP/L-TEANINA/MAGNESIO (Dr. Will R. Lax) c/60 CAPS. 750 MG.",
    formula: "Mezcla de plantas para Insomnio y Estres.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7506217112008",
    descripcion: "HOT VAPOR UNGÜENTO Tarro c/ 50 G.",
    formula: "Mezcla de plantas para la congestión nasal, tos y dolores musculares (Ungüento topico).",
    laboratorio: "SWISS NATURAL"
  },
  {
    codigo: "803288480539",
    descripcion: "GUAYAP-TOL UNGÜENTO Tubo c/40 G.",
    formula: "Mezcla de plantas para la congestión nasal, tos y dolores musculares (Ungüento topico).",
    laboratorio: "BQM"
  },
  {
    codigo: "7506217112015",
    descripcion: "HOT VAPOR UNGÜENTO Tarro c/100 G.",
    formula: "Mezcla de plantas para la congestión nasal, tos y dolores musculares (Ungüento topico).",
    laboratorio: "SWISS NATURAL"
  },
  {
    codigo: "637420606033",
    descripcion: "CARGENSOL c/60 TABS. 500 MG. ",
    formula: "Mezcla de plantas para mejorar la digestión.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501590288715",
    descripcion: "IVERKRAM c/30  CAPS. 275/3.33 MG. ",
    formula: "Mezcla de plantas para mejorar la digestión.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502259891109",
    descripcion: "ARISOL JBE. Fco. 120 ML. 250-23.41-3.12 MG/5 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259891178",
    descripcion: "PALETA OSITO Bolsa c/16 PZAS. 10 G.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502280810339",
    descripcion: "SUPRA MIEL JARABE 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "714908100013",
    descripcion: "EUCALIN Adulto JARABE 120 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501590284199",
    descripcion: "HONICOF-Ex JARABE Fco. 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "CMD"
  },
  {
    codigo: "714908100051",
    descripcion: "EUCALIN Adulto JARABE 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502259892328",
    descripcion: "PALETA OSITO Bolsa c/40 Pzs. 40 Kcal/10 G. ",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501590284465",
    descripcion: "BRONKITOSE MIELIMÓN-SAZ JARABE Fco. 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja. (Diabeticos)",
    laboratorio: "CMD"
  },
  {
    codigo: "7503020089374",
    descripcion: "NATUBRON Cero Azúcar JARABE Fco. 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja. (Diabeticos)",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "714908101485",
    descripcion: "EUCALIN Infantil JARABE 240 ML.",
    formula: "Mezcla de plantas para Resfriado común y Tos con miel de abeja. (Infantil)",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502259891833",
    descripcion: "BRONILIP c/10 CARAMELOS 2.5 G.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "714908107203",
    descripcion: "EUCALIN Agave JARABE Fco. 250 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7502259891116",
    descripcion: "ARISOL D JBE. Fco. 120 ML. 250-41.66-3.12-23.41 MG/5 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "637420140872",
    descripcion: "EPICOL Zero INFANTIL SOLUCIÓN Sin Azúcar Fco. 120 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420140889",
    descripcion: "EPICOL Zero ADULTO SOLUCIÓN Sin Azúcar Fco. 120 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420144078",
    descripcion: "EPICOL Zero INFANTIL SOLUCIÓN Sin Azúcar Fco. 240 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420144085",
    descripcion: "EPICOL Zero ADULTO SOLUCIÓN Sin Azúcar Fco. 240 ML.",
    formula: "Mezcla de plantas para resfriado común y tos SIN AZÚCAR.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420440804",
    descripcion: "EPICOL Natural JARABE Fco. 120 ML.",
    formula: "Mezcla de Plantas para Resfriado común y Tos.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7503181043048",
    descripcion: "HERBABIOTIC c/100 COMPS. 700 MG. ",
    formula: "Mezcla de Plantas para Resfriado común y Tos.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "637420444000",
    descripcion: "EPICOL Natural JARABE Fco. 240 ML.",
    formula: "Mezcla de Plantas para Resfriado común y Tos.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502299970222",
    descripcion: "LEMON BEE (Dr. Will R. Lax) c/30 Gomitas Sab. Miel-Limón 6 G.",
    formula: "Mezcla de Plantas para Resfriado común y Tos.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502008988937",
    descripcion: "VAR-HERD c/100 TABS. 500 MG.",
    formula: "Mezcla de plantas para tratamiento hemorroidal.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503004908714",
    descripcion: "MICONAZOL (Alpharma) CREMA 2% Tubo c/20 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501563380033",
    descripcion: "BIODANTYL-C CREMA Tubo c/20 G. 2 G/100 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501573902720",
    descripcion: "MENAZAN CREMA 2% Tubo c/20 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7503003134206",
    descripcion: "NACOMIC CREMA 2% Tubo c/30 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501563380293",
    descripcion: "MICONAZOL (Randall) CREMA Tubo c/20 G. 2 G/100 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502213042134",
    descripcion: "FRESHMIN CREMA 2% Tubo c/20 G.",
    formula: "Miconazol (Crema Tópica).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "6191140003410",
    descripcion: "JABON de MIEL DE ABEJA (Karla Di) 100 G.",
    formula: "Miel de abeja",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7501258210379",
    descripcion: "MINOCICLINA (Serral) c/10 TABS. 100 MG.",
    formula: "Minociclina 100mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501109769056",
    descripcion: "AGECAPS MUJER SOL. TÓPICA Fco. Atomizador 60 ML. 2 G/100 ML.",
    formula: "Minoxidil al 2%",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109769070",
    descripcion: "AGECAPS HOMBRE SOL. TÓPICA Fco. Atomizador 60 ML. 2 G/100 ML.",
    formula: "Minoxidil al 2%",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109769063",
    descripcion: "AGECAPS HOMBRE SOL. TÓPICA Fco. Atomizador 60 ML. 5 G/100 ML.",
    formula: "Minoxidil al 5%",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501258210270",
    descripcion: "ASTOPIL SOLUCIÓN TÓPICA 5.0% Aerosol Fco. 60 ML.",
    formula: "Minoxidil al 5%",
    laboratorio: "ADVAITA"
  },
  {
    codigo: "7506331300985",
    descripcion: "CONALPIN c/30 TABS. Orodispersables 30 MG.",
    formula: "Mirtazapina 30mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7502227876077",
    descripcion: "OCIPLOS c/30 TABS. Dispersables 30 MG.",
    formula: "Mirtazapina 30mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501277093908",
    descripcion: "MISOPROSTOL (Apotex) c/28 TABS. 200 MCG.",
    formula: "Misoprostol",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501258205221",
    descripcion: "CYRUX c/28 TABS. 200 MCG.",
    formula: "Misoprostol",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7506331302040",
    descripcion: "ZAURONESS c/ 7 TABS. 200 MG.",
    formula: "Modafinilo",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7506331302064",
    descripcion: "ZAURONESS c/28 TABS. 200 MG.",
    formula: "Modafinilo",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7502256040203",
    descripcion: "SIGDAN SUSP. p/INHALACIÓN NASAL 0.05% Fco. 18 ML. c/140 Dosis 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7502213042813",
    descripcion: "MOFHINIS SUSP. p/INHALACIÓN NASAL Fco. 18 ML. c/140 Dosis 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501349028036",
    descripcion: "MOMETASONA (Amsa) SUSP. p/INHALACIÓN NASAL 0.05% Fco. 18 ML. c/140 Dosis 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502223112506",
    descripcion: "QUIMAFRON SUSP. p/INHALACIÓN NASAL 0.05% Fco. 18 ML. c/140 Dosis 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501277028436",
    descripcion: "DIMUXON SUSP. p/INHALACIÓN NASAL 0.05% Fco. 18 ML. c/140 Dosis 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277028399",
    descripcion: "MOMETASONA (Apotex) SUSP. p/INHALACIÓN NASAL 0.05% Fco. 18 ML. c/140 Ds. 50 MCG.",
    formula: "Mometasona 50mcg/1 Dosis. (Adulto)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502256040197",
    descripcion: "SIGDAN SUSP. SPRAY NASAL Fco. 10 ML. c/60 Dosis. 0.5 MG/1 ML.",
    formula: "Mometasona 50mcg/1 Dosis. (Pediátrico)",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7502009744440",
    descripcion: "VALTROVER-G c/10 SOBS. Granulado 4 MG. ",
    formula: "Montelukast  4mg. (Granulado)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227875506",
    descripcion: "ONTRONON c/20 TABS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009745089",
    descripcion: "VALTROVER-M c/30 COMPS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384545574",
    descripcion: "MONTELUKAST (Neolpharma) c/20 TABS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502009744976",
    descripcion: "VALTROVER-M c/20 COMPS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227875513",
    descripcion: "ONTRONON c/30 TABS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503044633188",
    descripcion: "MONTELUKAST (Corne) c/20 TABS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "CORNE"
  },
  {
    codigo: "7502242700050",
    descripcion: "MONTELUKAST (Corne) c/30 TABS. Masticables 5 MG.",
    formula: "Montelukast  5mg. (Tabs. Masticables)",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501384547233",
    descripcion: "MONTELUKAST (Neolpharma) c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "780083148904",
    descripcion: "SENLOIR c/20 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009744433",
    descripcion: "VALTROVER c/20 COMPS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503028771653",
    descripcion: "MONTELUKAST (Suanca) c/20 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502009744907",
    descripcion: "VALTROVER c/30 COMPS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503028771608",
    descripcion: "MONTELUKAST (Suanca) c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501349024991",
    descripcion: "MONTELUKAST (Amsa) c/20 COMPS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506335700095",
    descripcion: "SINBRUX c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7503044633133",
    descripcion: "MONTELUKAST (Corne) c/20 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "CORNE"
  },
  {
    codigo: "7502227875957",
    descripcion: "KATSORAAM c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502247374362",
    descripcion: "MONK c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7503044633126",
    descripcion: "MONTELUKAST (Corne) c/30 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501258210942",
    descripcion: "INHALST c/20 TABS. 10 MG.",
    formula: "Montelukast 10mg. (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501075727159",
    descripcion: "NOVOFROX c/7 TABS. 400 MG.",
    formula: "Moxifloxacino (Tabs. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7506442700742",
    descripcion: "MOXIFLOXACINO (Camber) c/7 TABS. 400 MG.",
    formula: "Moxifloxacino (Tabs. Orales).",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502216805972",
    descripcion: "MOXIFLOXACINO (Avivia) c/7 TABS. 400 MG.",
    formula: "Moxifloxacino (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503049078496",
    descripcion: "DUPEO c/7 TABS. 400 MG.",
    formula: "Moxifloxacino (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501258207584",
    descripcion: "MUPIROCINA (Serral) UNGÜENTO 2% Tubo c/15 G.",
    formula: "Mupirocina",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009745836",
    descripcion: "BERNIVER UNGÜENTO 2% Tubo c/15 G.",
    formula: "Mupirocina",
    laboratorio: "MAVER"
  },
  {
    codigo: "75016418",
    descripcion: "ALPHADINAL 0.05% SOL. NASAL Fco. Gotero 15 ML.",
    formula: "Nafazolina 0.5mg. (Sol. Nasal infantil)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "75016401",
    descripcion: "ALPHADINAL 0.1% SOL. NASAL Fco. Gotero 15 ML.",
    formula: "Nafazolina 1mg. (Sol. Nasal adulto)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "780083144807",
    descripcion: "FAZOLIN SOL. Oftálmica Fco. Gotero 15 ML. 1.0 MG/1 ML.",
    formula: "Nafazolina 1mg. (Sol. Oftálmica)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "75051549",
    descripcion: "NAFAZOLINA (Opko) Sol. Oftálmica Fco. Gotero 15 ML. 1 MG/1 ML.",
    formula: "Nafazolina 1mg. (Sol. Oftálmica)",
    laboratorio: "OPKO"
  },
  {
    codigo: "780083146207",
    descripcion: "FAZOLIN-F SOL. Oftálmica Fco. Gotero 15 ML. 3.0-0.16 MG/1 ML.",
    formula: "Nafazolina+Feniramina",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502001165762",
    descripcion: "FENIXIL-OF SOL. Oftálmica Fco. Gotero 15 ML. 0.16-3.0 MG/1 ML.",
    formula: "Nafazolina+Feniramina",
    laboratorio: "SONS"
  },
  {
    codigo: "7501825300731",
    descripcion: "PROXALIN-S SUSP. Fco. 100 ML. 2.5 G/100 ML.",
    formula: "Naproxeno 125mg. (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501349020320",
    descripcion: "NAPROXENO (Amsa) c/30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501573900467",
    descripcion: "MESSELXEN c/ 30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563380347",
    descripcion: "NAPROXENO (Randall) c/30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502009740176",
    descripcion: "DOLXEN c/20 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501299370018",
    descripcion: "NAPROXENO (Pharmagen) c/30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7503004908042",
    descripcion: "FLAVOXEN c/30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908769",
    descripcion: "NAPROXENO (Alpharma) c/30 TABS. 250 MG.",
    formula: "Naproxeno 250mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501573909170",
    descripcion: "MESSELXEN c/15 TABS. 500 MG.",
    formula: "Naproxeno 500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009741593",
    descripcion: "DOLXEN c/10 TABS. 500 MG.",
    formula: "Naproxeno 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503000422467",
    descripcion: "DOLXEN c/20 TABS. 500 MG.",
    formula: "Naproxeno 500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501573908111",
    descripcion: "BIXEN c/20 TABS. 275 MG.",
    formula: "Naproxeno Sódico 275mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501277091751",
    descripcion: "DIVADAYS 24 HRS. c/12 TABS. 550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales CÓLICOS).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502226291925",
    descripcion: "NAPROXENO (Psicofarma) c/12 TABS. 550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501384541132",
    descripcion: "ALEBREM c/12 TABS. 550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501573908104",
    descripcion: "BIXEN c/12 TABS.  550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501109764587",
    descripcion: "NAPROXENO SÓDICO (Perrigo) c/12 TABS. 550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501478316158",
    descripcion: "FLAXENDOL Exhib. c/30x2 TABS. 550 MG.",
    formula: "Naproxeno Sódico 550mg. (Tabs. Orales).",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502211784043",
    descripcion: "PENSODIL-S c/5 Supositorios 100/200 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Supositorios).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001038646",
    descripcion: "PROXAN COMPUESTO SUSP. Fco. 80 ML. 125-100 MG/5 ML.",
    formula: "Naproxeno Sódico+Paracetamol (Susp. Oral).",
    laboratorio: "EDERKA"
  },
  {
    codigo: "7502001165595",
    descripcion: "VELSAY-S Compuesto SUSP. Fco. 100 ML. 125-100 MG/5 ML.",
    formula: "Naproxeno Sódico+Paracetamol (Susp. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501825300717",
    descripcion: "PROXALIN PLUS SUSP. Fco. 100 ML. 125-100 MG/5 ML.",
    formula: "Naproxeno Sódico+Paracetamol (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "780083141608",
    descripcion: "DECOSIL Cja. c/10 TABS. 275/300 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501573900177",
    descripcion: "BRAX c/10 TABS. 300/275 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502226294520",
    descripcion: "NAPROXENO/PARACETAMOL (Psicofarma) c/15 TABS. 275/300 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501825300748",
    descripcion: "PROXALIN PLUS c/10 TABS. 300/250 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501109760107",
    descripcion: "NEORPAN PLUS c/15 TABS. 275/300 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501825300724",
    descripcion: "PROXALIN PLUS c/16 TABS. 300/250 MG.",
    formula: "Naproxeno Sódico+Paracetamol (Tabs. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "785120754483",
    descripcion: "CARIDOXEN c/30 CAPS. 250/200 MG.",
    formula: "Naproxeno+Carisoprodol",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501836003140",
    descripcion: "CONTRAXEN c/30 CAPS. 200/250 MG.",
    formula: "Naproxeno+Carisoprodol",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502009745546",
    descripcion: "LUMBOXEN GEL "Azul" Tubo c/35 G. 10-2 G/100 G.",
    formula: "Naproxeno+Lidocaína",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747311",
    descripcion: "LUMBOXEN GEL "Rosa" Tubo c/35 G. 10-2 G/100 G.",
    formula: "Naproxeno+Lidocaína",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745539",
    descripcion: "LUMBOXEN GEL "Rojo" Tubo c/35 G. 10-2 G/100 G.",
    formula: "Naproxeno+Lidocaína",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825300618",
    descripcion: "NEOKAP-LF SUSP. Fco.  90 ML. 0.71-20-1 G/100 ML.",
    formula: "Neomicina+Caolín+Pectina (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "17393",
    descripcion: "NEOXIL SUSP. Fco. 120 ML. 0.710-20.0-1.0 G/100 ML.",
    formula: "Neomicina+Caolín+Pectina (Susp. Oral).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7502004402703",
    descripcion: "NEOXIL SUSP. Fco. 120 ML. 0.710-20.0-1.0 G/100 ML.",
    formula: "Neomicina+Caolín+Pectina (Susp. Oral).",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501825300083",
    descripcion: "NEOKAP-LF SUSP. Fco. 180 ML. 0.71-20-1 G/100 ML.",
    formula: "Neomicina+Caolín+Pectina (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501075722253",
    descripcion: "NINEKA c/20 TABS. 129/280/30 MG.",
    formula: "Neomicina+Caolín+Pectina (Tabs. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501825300519",
    descripcion: "NEOKAP-LF c/20 TABS. 129/280/30 MG.",
    formula: "Neomicina+Caolín+Pectina (Tabs. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501825305224",
    descripcion: "NEOKAP-LF c/20 TABS. 129/280/30 MG.",
    formula: "Neomicina+Caolín+Pectina (Tabs. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502001167087",
    descripcion: "ORTORA SOL. ÓTICA Fco. Gotero 20 ML. 0.350-2.0 G/100 ML.",
    formula: "Neomicina+Lidocaina (ÓTICO)",
    laboratorio: "SONS"
  },
  {
    codigo: "780083140021",
    descripcion: "OTILIN SOL. ÓTICA Fco. Gotero 20 ML. 2 G-0.350 G/100 ML.",
    formula: "Neomicina+Lidocaina (ÓTICO)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "75050764",
    descripcion: "NEOM+PLMXNA-B+BACTNA (Opko) Ungto. Oft. 3.5 G. 3.5mg-5000ui-400ui/1 G.",
    formula: "Neomicina+Polimixina-B+Bacitracina (Ugto. Oftalmico).",
    laboratorio: "OPKO"
  },
  {
    codigo: "75035655",
    descripcion: "SULNED Sol. Oft. Fco. Gotero 15 ML. 1.75mg-5000u-25mcg/1 ML.",
    formula: "Neomicina+Polimixina-B+Gramicidina",
    laboratorio: "PIZZARD"
  },
  {
    codigo: "75049805",
    descripcion: "NEOM+PLMXNA-B+GRAMNA (Opko) Sol.Oft. Fco.Got 15 ML. 1.75mg-5000ui-25mcg/1 ML.",
    formula: "Neomicina+Polimixina-B+Gramicidina",
    laboratorio: "OPKO"
  },
  {
    codigo: "7502001165724",
    descripcion: "RASPISONS UNGÜENTO Tubo c/28 G. 0.350 G-100,000 UI/100 G.",
    formula: "Neomicina+Retinol",
    laboratorio: "SONS"
  },
  {
    codigo: "7501109768059",
    descripcion: "NIQÜITIN "ETAPA 1" c/7 PARCHES TRANSDÉRMICOS 21 MG.",
    formula: "Nicotina (Etapa 1) 21mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109768066",
    descripcion: "NIQÜITIN "ETAPA 2" c/7 PARCHES TRANSDÉRMICOS 14 MG.",
    formula: "Nicotina (Etapa 2) 14mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109768073",
    descripcion: "NIQÜITIN "ETAPA 3" c/7 PARCHES TRANSDÉRMICOS  7 MG.",
    formula: "Nicotina (Etapa 3) 7mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501562820233",
    descripcion: "NIFEZZARD c/20 CAPS. 10 MG.",
    formula: "Nifedipino 10mg.",
    laboratorio: "PIZZARD"
  },
  {
    codigo: "7502216803978",
    descripcion: "NIFEDIPINO (Avivia) c/30 COMPS. L.P. 30 MG.",
    formula: "Nifedipino 30mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216796331",
    descripcion: "NIFEDIPINO (Ultra) c/30 COMPS. L.P. 30 MG.",
    formula: "Nifedipino 30mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216792289",
    descripcion: "ANHITEN-A c/30 COMPS. L.P. 30 MG.",
    formula: "Nifedipino 30mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501825304555",
    descripcion: "BRAXIGORT SUSP. Fco. 90 ML. 4.4 G/100 ML.",
    formula: "Nifuroxazida (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502001165953",
    descripcion: "REXURDIR c/16 CAPS. 400 MG.",
    formula: "Nifuroxazida (Tabs/Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501563382792",
    descripcion: "NISTATINA (Randall) SUSP. Fco. 24 ML. 2,400,000 UI.",
    formula: "Nistatina (Susp. Oral).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7503003134701",
    descripcion: "MIBESAN-S SUSP. Fco./Gotero 24 ML. 100,000 UI/1 ML.",
    formula: "Nistatina (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908844",
    descripcion: "NISTATINA (Alpharma) SUSP. Fco./Gotero 24 ML. 100,000 UI/1 ML.",
    formula: "Nistatina (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501109760770",
    descripcion: "NISTA-QUIM SUSP. Fco. 24 ML. 2,400,000 UI.",
    formula: "Nistatina (Susp. Oral).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109762330",
    descripcion: "NISTATINA (Perrigo) SUSP. Fco. 24 ML. 2,400,000 UI.",
    formula: "Nistatina (Susp. Oral).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501563310450",
    descripcion: "BISTATIN-V c/12 TABS.Vaginales 100,000 U.I.",
    formula: "Nistatina (Tabs. Vaginales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501277090921",
    descripcion: "APONISTAN-V c/12 TABS. Vaginales 100,000 U.I.",
    formula: "Nistatina (Tabs. Vaginales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "780083142872",
    descripcion: "BIDROZIL CREMA Tubo c/40 G. 100,000 U-1 MG/1 G.",
    formula: "Nistatina+Triamcinolona",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501070636395",
    descripcion: "ZOTANIXIN c/6 TABS. 500 MG.",
    formula: "Nitazoxanida 500mg. (Caps/Tabs. Orales).",
    laboratorio: "SANFER"
  },
  {
    codigo: "7502211783954",
    descripcion: "ROSANIL c/7 TABS. 500 MG.",
    formula: "Nitazoxanida 500mg. (Caps/Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7896015519223",
    descripcion: "SENSODYNE WHITENING+ANTI-SARRO Crema Dental Tubo c/50 G.",
    formula: "Nitrato de potasio+Fluoruro de sodio (Crema Dental)",
    laboratorio: "HALEON"
  },
  {
    codigo: "7502211788454",
    descripcion: "NITROFURAL c/6 ÓVULOS 6 MG.",
    formula: "Nitrofural ó Nitrofurazona (Óvulos)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502211782018",
    descripcion: "PROBIZAL c/6 ÓVULOS 6 MG.",
    formula: "Nitrofural ó Nitrofurazona (Óvulos)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501825300823",
    descripcion: "SURONIT c/12 TABS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501563380279",
    descripcion: "NITROFURANTOÍNA (Randall) c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502274790579",
    descripcion: "RALOBAX c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502213042325",
    descripcion: "TERFHICID c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501563310399",
    descripcion: "BIOFURIN c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7503049078427",
    descripcion: "NITROFURANTOÍNA (Avivia) c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "785120753349",
    descripcion: "MACROFURIN c/40 CAPS. 100 MG.",
    formula: "Nitrofurantoína (Caps/Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502231321594",
    descripcion: "SUSMOS Sol. Iny. c/1 FCO. AMP. 50 MG/2 ML.",
    formula: "Nitroprusiato de Sodio",
    laboratorio: "MICROMEX"
  },
  {
    codigo: "7502001163867",
    descripcion: "PREVEPOST Sol. Iny. c/1 AMPTA. 50-5 MG/1 ML. y Jeringa.",
    formula: "Noretisterona+Estradiol",
    laboratorio: "SONS"
  },
  {
    codigo: "785120755497",
    descripcion: "NORQUINOL c/20 TABS. 400 MG.",
    formula: "Norfloxacino",
    laboratorio: "MAVI"
  },
  {
    codigo: "656599041339",
    descripcion: "AXOFLANOL c/20 TABS. 400 MG.",
    formula: "Norfloxacino",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502227879559",
    descripcion: "JULAB c/ 8 TABS. 400/100 MG. ",
    formula: "Norfloxacino+Fenazopiridina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503004908301",
    descripcion: "FLONACIN c/8 TABS. 400 MG.",
    formula: "Ofloxacino 400mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "785118753887",
    descripcion: "FLOSEP c/8 TABS. 400 MG.",
    formula: "Ofloxacino 400mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502227872017",
    descripcion: "RIXIVOC c/8 TABS. 400 MG.",
    formula: "Ofloxacino 400mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501349028470",
    descripcion: "OLANZAPINA (Amsa) c/14 TABS. 5 MG.",
    formula: "Olanzapina  5mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384547172",
    descripcion: "OLANZAPINA (Psicofarma) c/14 TABS. 5 MG.",
    formula: "Olanzapina  5mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501277092307",
    descripcion: "OLANZAPINA (Apotex) c/14 TABS.  5 MG.",
    formula: "Olanzapina  5mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502227876473",
    descripcion: "EFLECON c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501482201792",
    descripcion: "IZEFRIN c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502009744426",
    descripcion: "OXATECH c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796874",
    descripcion: "OLANZAPINA (Ultra) c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227876497",
    descripcion: "EFLECON c/28 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216804937",
    descripcion: "OLANZAPINA (Avivia) c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075720501",
    descripcion: "BOSNOV c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349024243",
    descripcion: "OLANZAPINA (Amsa) c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501075720570",
    descripcion: "BOSNOV c/28 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501384546502",
    descripcion: "OLANZAPINA (Psicofarma) c/14 TABS. 10 MG.",
    formula: "Olanzapina 10mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7506442700759",
    descripcion: "OLMESARTÁN (Camber) c/14 TABS. 20 MG.",
    formula: "Olmesartán 20mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700766",
    descripcion: "OLMESARTÁN (Camber) c/28 TABS. 20 MG.",
    formula: "Olmesartán 20mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700773",
    descripcion: "OLMESARTÁN (Camber) c/14 TABS. 40 MG.",
    formula: "Olmesartán 40mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700780",
    descripcion: "OLMESARTÁN (Camber) c/28 TABS. 40 MG.",
    formula: "Olmesartán 40mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700797",
    descripcion: "OLMESARTÁN/HIDROCLOROTIAZIDA (Camber) c/14 TABS. 20/12.5 MG.",
    formula: "Olmesartán+Hidroclorotiazida 20/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700803",
    descripcion: "OLMESARTÁN/HIDROCLOROTIAZIDA (Camber) c/28 TABS. 20/12.5 MG.",
    formula: "Olmesartán+Hidroclorotiazida 20/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700810",
    descripcion: "OLMESARTÁN/HIDROCLOROTIAZIDA (Camber) c/14 TABS. 40/12.5 MG.",
    formula: "Olmesartán+Hidroclorotiazida 40/12.5mg",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442700827",
    descripcion: "OLMESARTÁN/HIDROCLOROTIAZIDA (Camber) c/28 TABS. 40/12.5 MG.",
    formula: "Olmesartán+Hidroclorotiazida 40/12.5mg",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502231320986",
    descripcion: "OLOPATADINA (Micromex) SOL. Oft. Fco. Gotero 5 ML. 1 MG/1 ML.",
    formula: "Olopatadina (Sol. Oftálmica).",
    laboratorio: "MICRO "
  },
  {
    codigo: "7502227879993",
    descripcion: "BRUNRAAM Fco. c/14 CAPS. 20 MG. ",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501842900976",
    descripcion: "OMYGEN c/ 7 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502223556263",
    descripcion: "ZOLUFEN c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "SYNTHON"
  },
  {
    codigo: "7502216792685",
    descripcion: "OMEPRAZOL (Ultra) c/  7 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501493888548",
    descripcion: "OZOKEN c/7 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "KENER"
  },
  {
    codigo: "7501573902584",
    descripcion: "SAROX c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501075711042",
    descripcion: "DANOVAG c/ 7 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501842901065",
    descripcion: "OMYGEN c/14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502208892669",
    descripcion: "AGRIXAL c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7501493888746",
    descripcion: "OZOKEN c/14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "KENER"
  },
  {
    codigo: "7502226296265",
    descripcion: "OMEPRAZOL (Alpharma) c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216792555",
    descripcion: "OMEPRAZOL (Ultra) c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804005",
    descripcion: "OMEPRAZOL (Avivia) c/ 14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075720365",
    descripcion: "DANOVAG c/14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502223553477",
    descripcion: "ZOLUFEN c/ 30 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "SYNTHON"
  },
  {
    codigo: "7501573909859",
    descripcion: "SAROX c/ 28 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502226296272",
    descripcion: "OMEPRAZOL (Alpharma) c/28 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "780083148348",
    descripcion: "ALBOZ c/14 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502208894397",
    descripcion: "AGRIXAL c/ 28 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502216792760",
    descripcion: "OMEPRAZOL (Ultra) c/ 30 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804012",
    descripcion: "OMEPRAZOL (Avivia) c/ 30 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083141356",
    descripcion: "ALBOZ c/30 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216803800",
    descripcion: "OMEPRAZOL (Avivia) c/ 60 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501842901003",
    descripcion: "OMYGEN c/60 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502223553033",
    descripcion: "ZOLUFEN c/120 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "SYNTHON"
  },
  {
    codigo: "7501482200016",
    descripcion: "AKTYZAR c/120 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502208891471",
    descripcion: "AGRIXAL c/100 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502216792920",
    descripcion: "OMEPRAZOL (Ultra) c/120 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216803817",
    descripcion: "OMEPRAZOL (Avivia) c/120 CAPS. 20 MG.",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083141936",
    descripcion: "ALBOZ c/60 CAPS. 20 MG. (Oferta 2x1)",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501842901034",
    descripcion: "OMYGEN c/60 CAPS. 20 MG. (2 Pack)",
    formula: "Omeprazol 20mg. (Caps. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7502001162365",
    descripcion: "MORNIN c/7 CAPS. 40 MG.",
    formula: "Omeprazol 40mg. (Caps. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502003385359",
    descripcion: "NovOLEXIN c/ 7 CAPS. 40 MG.",
    formula: "Omeprazol 40mg. (Caps. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502003385366",
    descripcion: "NovOLEXIN c/14 CAPS. 40 MG.",
    formula: "Omeprazol 40mg. (Caps. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7506022330598",
    descripcion: "OMIZELÓN Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML. ",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7503002773154",
    descripcion: "FINULCER Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML.",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502245840005",
    descripcion: "OMEPRAZOL (Vitalis) Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML.",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7501349028234",
    descripcion: "OMEPRAZOL (Amsa) Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML.",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502213042158",
    descripcion: "LIOFHICIN Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML.",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501493980433",
    descripcion: "PREZOLAX Sol. Iny. c/1 FCO. AMP. 40 MG/10 ML.",
    formula: "Omeprazol 40mg. (Sol. Inyectable).",
    laboratorio: "KENER"
  },
  {
    codigo: "7502227870716",
    descripcion: "VYLKOR c/10 TABS. 8 MG.",
    formula: "Ondansetron (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501258214414",
    descripcion: "ZINCOLSET c/10 TABS. 8 MG.",
    formula: "Ondansetron (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502226290218",
    descripcion: "KRINDOR c/10 TABS. 8 MG.",
    formula: "Ondansetron (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502245841859",
    descripcion: "SETRONALIS Sol. Iny. c/3 AMPTAS. 8 MG/4 ML.",
    formula: "Ondansetron 8mg. (Sol. Inyectable).",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7506022315038",
    descripcion: "NAVONTEC Sol. Iny. c/3 AMPTAS. 8 MG/4 ML.",
    formula: "Ondansetron 8mg. (Sol. Inyectable).",
    laboratorio: "JAYOR"
  },
  {
    codigo: "785120754797",
    descripcion: "INDANSEN Sol. Iny. c/3 AMPTAS. 8 MG/4 ML.",
    formula: "Ondansetron 8mg. (Sol. Inyectable).",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009749131",
    descripcion: "PARACETAMOL/ORFENADRINA (Maver) c/50 TABS. 450/35 MG. ",
    formula: "Orfenadrina+Paracetamol",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227875537",
    descripcion: "VASDECOM c/30 CAPS. 60 MG.",
    formula: "Orlistat  60mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502226293943",
    descripcion: "ORLISTAT (Alpharma) c/30 CAPS. 60 MG.",
    formula: "Orlistat  60mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226293950",
    descripcion: "ORLISTAT (Alpharma) c/60 CAPS. 60 MG.",
    formula: "Orlistat  60mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502227871942",
    descripcion: "VASDECOM c/21 CAPS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501075718959",
    descripcion: "BELIVAG c/21 TABS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501277093854",
    descripcion: "TALISSA c/21 CAPS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501349027343",
    descripcion: "AMSAFAST c/21 CAPS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009745317",
    descripcion: "DEMOLEX c/21 CAPS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501075718942",
    descripcion: "BELIVAG c/42 TABS. 120 MG.",
    formula: "Orlistat 120mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502240450902",
    descripcion: "WERNICROS c/10 CAPS. 75 MG.",
    formula: "Oseltamivir 75mg. (Caps. Orales)",
    laboratorio: "WERMAR"
  },
  {
    codigo: "780083149857",
    descripcion: "TAVIDEN-FLU c/10 CAPS. 75 MG.",
    formula: "Oseltamivir 75mg. (Caps. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501258208178",
    descripcion: "ESTRANIM c/10 CAPS. 75 MG.",
    formula: "Oseltamivir 75mg. (Caps. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009744570",
    descripcion: "SINFONIL c/20 TABS. 300 MG.",
    formula: "Oxcarbazepina 300mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506313800373",
    descripcion: "DORIRAAM c/20 TABS. 300 MG.",
    formula: "Oxcarbazepina 300mg. (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501384542405",
    descripcion: "OXCARBAZEPINA (Psicofarma) c/20 TABS. 300 MG.",
    formula: "Oxcarbazepina 300mg. (Tabs. Orales)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009744587",
    descripcion: "SINFONIL c/20 TABS. 600 MG.",
    formula: "Oxcarbazepina 600mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506313800380",
    descripcion: "DORIRAAM c/20 TABS. 600 MG.",
    formula: "Oxcarbazepina 600mg. (Tabs. Orales)",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009745393",
    descripcion: "SIRACUX JARABE ADULTO Fco. 120 ML. 0.200-0.225 G/100 ML.",
    formula: "Oxeladina+Ambroxol (Sol/Jbe. Adulto).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825304524",
    descripcion: "DEGORXEL JBE. Adulto Fco. 120 ML. 200-225 MG/100 ML.",
    formula: "Oxeladina+Ambroxol (Sol/Jbe. Adulto).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502003381153",
    descripcion: "CONNEX US SOLUCIÓN Adulto Fco. 120 ML. 225-200 MG/100 ML.",
    formula: "Oxeladina+Ambroxol (Sol/Jbe. Adulto).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502009745409",
    descripcion: "SIRACUX JARABE INFANTIL Fco. 120 ML. 0.100-0.115 G/100 ML.",
    formula: "Oxeladina+Ambroxol (Sol/Jbe. Infantil).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502003381146",
    descripcion: "CONNEX US SOLUCIÓN Infantil Fco. 120 ML. 115-100 MG/100 ML.",
    formula: "Oxeladina+Ambroxol (Sol/Jbe. Infantil).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502009749698",
    descripcion: "BROMHEXINA/OXELADINA JARABE (Maver) Fco. 225 ML. 60 MG-120 MG/100 ML.",
    formula: "Oxeladina+Bromhexina (Jarabe).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503004908851",
    descripcion: "ÓXIDO DE ZINC (Alpharma) PASTA 25% Tarro c/30 G.",
    formula: "Óxido de Zinc 25%",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502213042233",
    descripcion: "XIMAFHIT PASTA 25% Tarro c/30 G.",
    formula: "Óxido de Zinc 25%",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501289511421",
    descripcion: "PASTA DE LASSAR ANDRÓMACO 25% Tarro c/ 30 G.",
    formula: "Óxido de Zinc 25%",
    laboratorio: "ANDROMACO"
  },
  {
    codigo: "7501109761869",
    descripcion: "ÓXIDO DE ZINC (Quifa) CREMA 25% Tubo c/45 G.",
    formula: "Óxido de Zinc 25%",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109761722",
    descripcion: "SANIDERM CREMA 25% Tubo c/45 G.",
    formula: "Óxido de Zinc 25%",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7500462933722",
    descripcion: "ADN POMADA SUVIZANTE Tarro c/30 G.",
    formula: "Oxido de Zinc Compuesto.",
    laboratorio: "ADN PHARMA"
  },
  {
    codigo: "7502008986766",
    descripcion: "PALMODERM Crema Tubo c/60 G.",
    formula: "Oxido de Zinc Compuesto.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "803288480072",
    descripcion: "BIODERM CREMA TUBO c/35 G.",
    formula: "Oxido de Zinc Compuesto.",
    laboratorio: "BQM"
  },
  {
    codigo: "637420501208",
    descripcion: "SUTIN Natural POMADA Tubo c/35 G.",
    formula: "Oxido de Zinc Compuesto.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7501836006042",
    descripcion: "VIRINDREZ SOL. NASAL Adulto 0.050% Fco. Atomizador 20 ML.",
    formula: "Oximetazolina (Sol. Nasal) ADULTO.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501109764761",
    descripcion: "NAZTRIL SOL. NASAL 0.05% Fco. Atomizador c/30 ML.",
    formula: "Oximetazolina (Sol. Nasal) ADULTO.",
    laboratorio: "QUIFA"
  },
  {
    codigo: "780083144302",
    descripcion: "COLLIFRIN SOL. NASAL Adulto 0.05% Fco. 20 ML.",
    formula: "Oximetazolina (Sol. Nasal) ADULTO.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501836006028",
    descripcion: "VIRINDREZ SOL. NASAL Infantil 0.025% Fco. Atomizador 20 ML.",
    formula: "Oximetazolina (Sol. Nasal) INFANTIL.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "780083144296",
    descripcion: "COLLIFRIN SOL. Nasal INFANTIL 0.025% Fco. Atomizador 20 ML.",
    formula: "Oximetazolina (Sol. Nasal) INFANTIL.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501493866379",
    descripcion: "LUBYOX SOL. Oftálmica al 0.025% Fco. Gotero 15 ML.",
    formula: "Oximetazolina (Sol. Oftálmica).",
    laboratorio: "KENER"
  },
  {
    codigo: "7501476020101",
    descripcion: "XITOCIN Sol. Iny. c/50 AMPTAS. 5 UI/1 ML.",
    formula: "Oxitocina",
    laboratorio: "CRYOPHARMA  "
  },
  {
    codigo: "7502209810211",
    descripcion: "OXOTUSIN JARABE Fco. 118 ML. 1.0 G/100 ML. ",
    formula: "Oxolamina",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502001163089",
    descripcion: "TUKSON JBE. Fco. 100 ML. 50 MG/5 ML.",
    formula: "Oxolamina",
    laboratorio: "SONS"
  },
  {
    codigo: "7502001165397",
    descripcion: "ZIMETON c/20 TABS. 130/50/40 MG.",
    formula: "Pancreatina+Dimeticona+Bilis de Buey",
    laboratorio: "SONS"
  },
  {
    codigo: "7502005861028",
    descripcion: "DIXIFLEN c/30 GRAG. 130/50/40/5 MG.",
    formula: "Pancreatina+Dimeticona+Bilis de buey+Celulasa.",
    laboratorio: "FARCORAL"
  },
  {
    codigo: "7501349022485",
    descripcion: "PANTOPRAZOL (Amsa) c/7 TABS. L.R. 20 MG.",
    formula: "Pantoprazol 20mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "18009",
    descripcion: "ECCER c/14 TABS. L.R. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502247374218",
    descripcion: "NOGASLAN c/14 TABS. 40 MG",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7506335702471",
    descripcion: "ECCER c/14 TABS. L.R. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501349028364",
    descripcion: "POPRAM c/14 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501349028845",
    descripcion: "POPRAM c/28 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502247376694",
    descripcion: "NOGASLAN c/28 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7506335702501",
    descripcion: "ECCER c/28 TABS. L.R. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501277094141",
    descripcion: "PANTOPRAZOL (Apotex) c/14 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502247376915",
    descripcion: "NOGASLAN c/28 TABS. 40 MG. (2 Pack)",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501277094127",
    descripcion: "EfectReflu c/14 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277094158",
    descripcion: "PANTOPRAZOL (Apotex) c/28 TABS. 40 MG.",
    formula: "Pantoprazol 40mg. (Tabs. Orales).",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501109761623",
    descripcion: "ANTIDOL-ITO Pediátrico c/30 TABS. Masts. 80 MG.",
    formula: "Paracetamol   80mg. (Tabs. Orales Pdtco.).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7503001007649",
    descripcion: "WAMINDEL SOL. GOTAS Pediátricas Fco. 15 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7501482202003",
    descripcion: "AMOLGEN SOL. Fco./Gotero 15 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7502209810273",
    descripcion: "TEMPERAL SOL. Pedtca. Fco. Gotero 15 ML. 100 MG/1 ML. ",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7503001007656",
    descripcion: "WAMINDEL SOL. GOTAS Pediátricas Fco. 30 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502209810280",
    descripcion: "TEMPERAL SOL. Pedtca. Fco. Gotero 20 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502209810297",
    descripcion: "TEMPERAL SOL. Pedtca. Fco. Gotero 30 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "780083142308",
    descripcion: "TEMPIRE SOL. Fco. Gotero 30 ML. 100 MG/1 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501109763139",
    descripcion: "PARACETAMOL (Perrigo) SOL. Fco. Gotero 30 ML. 10 G/100 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109760565",
    descripcion: "ANTIDOL-ITO SOL. Fco. Gotero 30 ML. 10 G/100 ML.",
    formula: "Paracetamol  100mg. (Sol. Gotas Pdtco.).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7503001007663",
    descripcion: "WAMINDEL SOLUCIÓN Infantil Fco. 120 ML. 3.2 G/100 ML.",
    formula: "Paracetamol  160mg. (Jarabe).",
    laboratorio: "WANDEL"
  },
  {
    codigo: "7502211780045",
    descripcion: "PROSEDAL JBE. Fco. 120 ML. 3.2 G/100 ML.",
    formula: "Paracetamol  160mg. (Jarabe).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502001160385",
    descripcion: "SON´S PIRAL JARABE Infantil Fco. 120 ML. 3.2 G/100 ML.",
    formula: "Paracetamol  160mg. (Jarabe).",
    laboratorio: "SONS"
  },
  {
    codigo: "7502211788447",
    descripcion: "PARACETAMOL (Loeffler) c/3 SUPOSITORIOS 300 MG.",
    formula: "Paracetamol  300mg. (Supositorios).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502211781745",
    descripcion: "PIREMOL c/3 SUPOSITORIOS 300 MG.",
    formula: "Paracetamol  300mg. (Supositorios).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502211781752",
    descripcion: "PIREMOL c/6 SUPOSITORIOS 300 MG.",
    formula: "Paracetamol  300mg. (Supositorios).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502208894960",
    descripcion: "PORTEM c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502209858077",
    descripcion: "SOLTADOL c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7506494600168",
    descripcion: "AVANTEN c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7501573900443",
    descripcion: "QUITADOL c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501571200552",
    descripcion: "ICETAZOL c/10 TABS.  500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "IQFA"
  },
  {
    codigo: "7503004908691",
    descripcion: "PARACETAMOL (Alpharma) c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "75017071",
    descripcion: "PHARMACEN-T c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501563380446",
    descripcion: "BIOFER c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502274790852",
    descripcion: "AMOLGEN c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "SOLFRAN"
  },
  {
    codigo: "7501563380651",
    descripcion: "BIOFER c/20 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502209810303",
    descripcion: "TEMPERAL c/10 TABS. 500 MG. ",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009746536",
    descripcion: "CORIVER c/20 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501385490217",
    descripcion: "AC-FAST c/10 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "SANFER"
  },
  {
    codigo: "7502209810327",
    descripcion: "TEMPERAL c/20 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501109760657",
    descripcion: "ANTIDOL c/20 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502003380033",
    descripcion: "ACETAFEN c/12 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502209810341",
    descripcion: "TEMPERAL c/50 TABS. 500 MG.",
    formula: "Paracetamol  500mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009746543",
    descripcion: "CORIVER c/24 TABS. 650 MG.",
    formula: "Paracetamol  650mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501109760671",
    descripcion: "PARACETAMOL (Perrigo) c/24 TABS. 650 MG.",
    formula: "Paracetamol  650mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501537168995",
    descripcion: "PORTEM c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502208894977",
    descripcion: "PORTEM c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502009747052",
    descripcion: "CORIVER c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502209858084",
    descripcion: "SOLTADOL c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563380675",
    descripcion: "BIOFER c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501573900269",
    descripcion: "QUITADOL c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209850866",
    descripcion: "PARACETAMOL (Avivia) c/10 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501563380583",
    descripcion: "BIOFER c/20 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501711616021",
    descripcion: "ANALPHEN c/20 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502209858060",
    descripcion: "SOLTADOL c/20 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502003380149",
    descripcion: "ACETAFEN c/12 TABS. 750 MG.",
    formula: "Paracetamol  750mg. (Tabs. Orales).",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7506453900582",
    descripcion: "ZURECET Sol. Iny. c/1 FCO. AMP. 1 G/100 ML.",
    formula: "Paracetamol 1000mg. (Sol. Inyectable).",
    laboratorio: "ZURICH"
  },
  {
    codigo: "7501109763214",
    descripcion: "MIGRAÑA (Perrigo) c/24 TABS 250/250/65 MG.",
    formula: "Paracetamol+Ácido Acetilsalicílico+Cafeína",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501109761388",
    descripcion: "QUIMOFEÍNA c/20 TABS. 500/50 MG.",
    formula: "Paracetamol+Cafeína 500/50mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501349029347",
    descripcion: "PARCML/CAFNA/FENLNA/CLRFNA (Amsa) c/10 TABS. 500/25/5/4 MG.",
    formula: "Paracetamol+Cafeína+Fenilefrina+Clorfenamina (CLORFENAMINA COMPUESTA).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563380200",
    descripcion: "CLORFENAMINA COMPUESTA (Randall) c/10 TABS. 500/25/5/4 MG.",
    formula: "Paracetamol+Cafeína+Fenilefrina+Clorfenamina (CLORFENAMINA COMPUESTA).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563310573",
    descripcion: "BIOFLUSIN c/10 TABS. 500/25/5/4 MG.",
    formula: "Paracetamol+Cafeína+Fenilefrina+Clorfenamina (CLORFENAMINA COMPUESTA).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502209810129",
    descripcion: "FEBRINOL-C c/12 CAPS. 500/25/5/4 MG.",
    formula: "Paracetamol+Cafeína+Fenilefrina+Clorfenamina (CLORFENAMINA COMPUESTA).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501109762583",
    descripcion: "MASFEROL c/10 TABS. 500/25/5/4 MG.",
    formula: "Paracetamol+Cafeína+Fenilefrina+Clorfenamina (CLORFENAMINA COMPUESTA).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502009748301",
    descripcion: "PARACETAMOL/CLORZOXAZONA (Medigen) c/30 TABS. 300/250 MG.",
    formula: "Paracetamol+Clorzoxazona",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7502009746147",
    descripcion: "EXALVER-G (Manz-Can) Granulado c/6 SOBS. 650/20/10/4 MG.",
    formula: "Paracetamol+Fenilefrina+Clorfenamina+Dextrometorfano (Granulado)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825301301",
    descripcion: "DEQUIN SOL. GOTAS Pedtcas. Fco. 30 ML. 2.0-0.10-0.02-2.5 G/100 ML.",
    formula: "Paracetamol+Fenilefrina+Clorfenamina+Guaifenesina (Sol. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009740732",
    descripcion: "CO-EXALIV SOLUCIÓN Fco. 120 ML. 0.10/0.02/2.0/2.5 G/100 ML.",
    formula: "Paracetamol+Fenilefrina+Clorfenamina+Guaifenesina (Sol/Jbe. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825301059",
    descripcion: "DEQUIN SOL. Infantil Fco. 120 ML. 2.0-0.1-0.2-2.5 G/100 ML.",
    formula: "Paracetamol+Fenilefrina+Clorfenamina+Guaifenesina (Sol/Jbe. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009741746",
    descripcion: "EXALVER (PFD) JBE. Fco. 120 ML. 2.13-0.04-0.10 G/100 ML.",
    formula: "Paracetamol+Fenilefrina+Dextrometorfano",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741753",
    descripcion: "EXALVER (PFD) c/10 TABS. 500/5/15 MG.",
    formula: "Paracetamol+Fenilefrina+Dextrometorfano",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009741340",
    descripcion: "LARITOL-G GNDO. (Manzana-Canela) c/6 SOBS. 600-10-2.5 MG/10 G.",
    formula: "Paracetamol+Loratadina+Fenilefrina (Granulado)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746086",
    descripcion: "LARITOL-G SOL. Pedtco. Fco. 120 ML. 33.33 MG-16.66 MG-3.2 G/100 ML.",
    formula: "Paracetamol+Loratadina+Fenilefrina (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747144",
    descripcion: "LADY FEMM Cja. c/1 PARCHE TÉRMICO.",
    formula: "Parche térmico para cólico",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747076",
    descripcion: "LADY FEMM Cja. c/3 PARCHES TÉRMICOS.",
    formula: "Parche térmico para cólico",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083146665",
    descripcion: "COLLEPAX c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501349024939",
    descripcion: "PAROXETINA (Amsa) c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384545673",
    descripcion: "PAROXETINA (Psicofarma) c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502227872628",
    descripcion: "ONTRACEL  c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216793729",
    descripcion: "PAROXETINA (Ultra) c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804968",
    descripcion: "PAROXETINA (Avivia) c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075718041",
    descripcion: "IXICROL c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501384543358",
    descripcion: "PAROXETINA (Psicofarma) c/20 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501277093588",
    descripcion: "PAROXETINA (Apotex) c/10 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7502216793972",
    descripcion: "PAROXETINA (Ultra) c/20 TABS. 20 MG.",
    formula: "Paroxetina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501277032624",
    descripcion: "PAROXETINA (Apotex) c/10 TABS. 20 MG. (2 Pack)",
    formula: "Paroxetina",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501349028487",
    descripcion: "PENTOXIFILINA (Amsa) c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501563380491",
    descripcion: "PENTOXIFILINA (Randall) c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "RANDALL"
  },
  {
    codigo: "17487",
    descripcion: "PENTOXIFILINA (Randall) c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501385495786",
    descripcion: "PENTOXIFILINA (Hormona) c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7501384504946",
    descripcion: "PENTOXIFILINA (Psicofarma) c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501258204590",
    descripcion: "PENSIRAL c/30 TABS. L.P. 400 MG.",
    formula: "Pentoxifilina",
    laboratorio: "SERRAL"
  },
  {
    codigo: "780083150518",
    descripcion: "IDRALIV 0.5% Sol. Nasal Srpay Fco. 30 ML.",
    formula: "Peróxido de hidrógeno 0.5% (Sol. Nasal)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502006922728",
    descripcion: "MOTILAXIL SOLUCIÓN Fco. 120 ML. 5 MG/5 ML.",
    formula: "Picosulfato sódico (Solución Oral).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7501825305118",
    descripcion: "PINAGORT JARABE Fco. 125 ML. 100 MG/100 ML.",
    formula: "Picosulfato sódico (Solución Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502006920021",
    descripcion: "MOTILAXIL-T c/20 TABLETAS 5 MG.",
    formula: "Picosulfato sódico (Tabs. Orales).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7501590287114",
    descripcion: "PADIO c/20 TABLETAS 5 MG.",
    formula: "Picosulfato sódico (Tabs. Orales).",
    laboratorio: "CMD"
  },
  {
    codigo: "7502009749773",
    descripcion: "PIDOTIMOD (Maver) c/10 FCOS. MONODOSIS 400 MG/7 ML.",
    formula: "Pidotimod (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501573909699",
    descripcion: "BRIOMON c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "821998000434",
    descripcion: "BROMURO DE PINAVERIO (Schoen) c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7501384505271",
    descripcion: "BROMURO DE PINAVERIO (Neolpharma) c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501836009593",
    descripcion: "BLOCAFER c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7506494600199",
    descripcion: "BELIREX c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7502216795044",
    descripcion: "BROMURO DE PINAVERIO (Ultra) c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "785118753771",
    descripcion: "DISTENTAL c/14 TABS. 100 MG.",
    formula: "Pinaverio 100mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502009748387",
    descripcion: "PIOGLITAZONA (Medigen) c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349021211",
    descripcion: "PIOGLITAZONA (Amsa) c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502247375505",
    descripcion: "PLAGOX c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502009745034",
    descripcion: "GLIOZAC c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796737",
    descripcion: "PIOGLITAZONA (Ultra) c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804999",
    descripcion: "PIOGLITAZONA (Avivia) c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501384547974",
    descripcion: "PIOGLITAZONA (Neolpharma) c/7 TABS. 15 MG.",
    formula: "Pioglitazona 15mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7501349024175",
    descripcion: "PIOGLITAZONA (Amsa) c/7 TABS. 30 MG.",
    formula: "Pioglitazona 30mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216805002",
    descripcion: "PIOGLITAZONA (Avivia) c/7 TABS. 30 MG.",
    formula: "Pioglitazona 30mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216798878",
    descripcion: "PIOGLITAZONA (Ultra) c/7 TABS. 30 MG.",
    formula: "Pioglitazona 30mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009744969",
    descripcion: "GLIOZAC c/7 TABS. 30 MG.",
    formula: "Pioglitazona 30mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506331300336",
    descripcion: "LINTAZ-4.5 Sol. Iny. c/1 FCO. AMP. 4/0.5 G.",
    formula: "Piperacilina+Tazobactam",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7502209810228",
    descripcion: "PIPERAZIL JARABE Fco. 115 ML. 11 G/100 ML. ",
    formula: "Piperazina",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502216790902",
    descripcion: "PIPERIDOLATO (Ultra) c/30 COMPS. 100 MG. ",
    formula: "Piperidolato",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078199",
    descripcion: "PIPERIDOLATO (Avivia) c/30 COPMS. 100 MG.",
    formula: "Piperidolato",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502223111271",
    descripcion: "ESCADROX c/30 TABS. 800 MG.",
    formula: "Piracetam (Tabs. Orales).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502009748592",
    descripcion: "MEMAXIL c/30 TABS. 800 MG.",
    formula: "Piracetam (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009748448",
    descripcion: "CETILVER GEL Tubo c/10 G. 8 G/100 G.",
    formula: "Pirfenidona",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501258215336",
    descripcion: "CICADONA CREMA Tubo c/15 G. 8 G/100 G.",
    formula: "Pirfenidona",
    laboratorio: "ADVAITA"
  },
  {
    codigo: "7502009746710",
    descripcion: "MONAXYL c/20 TABS.  60 MG.",
    formula: "Piridostigmina 60mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501836000675",
    descripcion: "REUTRICAM CREMA Tubo c/30 G. 0.5 G/100 G.",
    formula: "Piroxicam (Crema tópica)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502001165045",
    descripcion: "DOLZYCAM GEL 0.5% Tópico TUBO c/60 G.",
    formula: "Piroxicam (Crema tópica)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502003386714",
    descripcion: "R-TYFLAM GEL 0.5% Tubo c/60 G.",
    formula: "Piroxicam (Crema tópica)",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501563380354",
    descripcion: "PIROXICAM (Randall) c/20 TABS. 20 MG.",
    formula: "Piroxicam (Oral)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7502216805019",
    descripcion: "PIROXICAM (Avivia) c/20 TABS. 20 MG.",
    formula: "Piroxicam (Oral)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216797376",
    descripcion: "PIROXICAM (Ultra) c/20 TABS. 20 MG.",
    formula: "Piroxicam (Oral)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501573900498",
    descripcion: "RIPOX c/20 TABS. 20 MG.",
    formula: "Piroxicam (Oral)",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501563381559",
    descripcion: "BIOXIMIL c/20 TABS. 20 MG.",
    formula: "Piroxicam (Oral)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "780083140328",
    descripcion: "FIBROMUCIL POLVO Sabor Fresa Fco. c/250 G. 31.49 G/100 G.",
    formula: "Plantago psyllium con Sabor",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140441",
    descripcion: "FIBROMUCIL POLVO Sabor Naranja Fco. c/250 G. 31.49 G/100 G.",
    formula: "Plantago psyllium con Sabor",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083149925",
    descripcion: "FIBROMUCIL POLVO Sabor Naranja 0% AZUCAR Fco. c/250 G. 31.49 G/100 G.",
    formula: "Plantago psyllium con Sabor",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083140311",
    descripcion: "FIBROMUCIL POLVO Sabor Natural Fco. c/250 G. 49.70 G/100 G.",
    formula: "Plantago psyllium Natural",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7503002615102",
    descripcion: "PSILAX POLVO Sabor NATURAL Sobre c/400 G. 49.7 G/100 G. ",
    formula: "Plantago psyllium Natural",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501349024021",
    descripcion: "PRAMIPEXOL (Amsa) c/30 TABS. 0.5 MG.",
    formula: "Pramipexol 0.50mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506353200201",
    descripcion: "BRONID c/30 TABS. 0.5 MG.",
    formula: "Pramipexol 0.50mg.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502216796317",
    descripcion: "PRAMIPEXOL (Ultra) c/30 TABS. 0.50 MG.",
    formula: "Pramipexol 0.50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503028771714",
    descripcion: "PRAMIPEXOL (Suanca) c/30 TABS. 0.5 MG.",
    formula: "Pramipexol 0.50mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7506353200195",
    descripcion: "BRONID c/30 TABS. 1.0 MG.",
    formula: "Pramipexol 1.00mg.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502209858299",
    descripcion: "STRIACOL c/15 TABS. 10 MG. ",
    formula: "Pravastatina 10mg.",
    laboratorio: "SOLARA"
  },
  {
    codigo: "7502209858275",
    descripcion: "STRIACOL c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "SOLARA"
  },
  {
    codigo: "7501349014299",
    descripcion: "PRAVASTATINA (Amsa) c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501571202518",
    descripcion: "VALPRASTIN c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501493866577",
    descripcion: "GLICOSAR c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502009740534",
    descripcion: "PRASIVER c/15 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501573900436",
    descripcion: "COLPRADIN c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501075716801",
    descripcion: "NOVINA c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502009741470",
    descripcion: "PRASIVER c/30 TABS. 10 MG. ",
    formula: "Pravastatina 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384504922",
    descripcion: "PRAVASTATINA (Psicofarma) c/30 TABS. 10 MG.",
    formula: "Pravastatina 10mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009741722",
    descripcion: "PRASIVER c/15 TABS. 20 MG.",
    formula: "Pravastatina 20mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501493866744",
    descripcion: "GLICOSAR c/30 TABS. 20 MG.",
    formula: "Pravastatina 20mg",
    laboratorio: "KENER"
  },
  {
    codigo: "7502009746321",
    descripcion: "NISOLVER SOLUCIÓN Fco. 100 ML. 1 MG/1 ML.",
    formula: "Prednisolona 1mg. (Sol. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502223111288",
    descripcion: "QUIMUNEX SOLUCIÓN Fco. 100 ML. 100 MG/100 ML.",
    formula: "Prednisolona 1mg. (Sol. Oral).",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501571202426",
    descripcion: "LOSINON c/20 TABS. 5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "IQFA"
  },
  {
    codigo: "7501349028494",
    descripcion: "PREDNISONA (Amsa) c/20 TABS.  5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502209810235",
    descripcion: "PREMAGNOL c/20 TABS. 5.0 MG. ",
    formula: "Prednisona  5mg.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501384546816",
    descripcion: "PREDNISONA (Neolpharma) c/20 TABS. 5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "NEOLPHARMA"
  },
  {
    codigo: "7502227876107",
    descripcion: "DONSICOL c/20 TABS.  5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501342801148",
    descripcion: "PREDNISONA (Avivia) c/20 TABS. 5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083142339",
    descripcion: "NOSIPREN c/30 TABS.  5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083142841",
    descripcion: "NOSIPREN c/100 TABS.  5 MG.",
    formula: "Prednisona  5mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083142827",
    descripcion: "NOSIPREN c/30 TABS. 20 MG.",
    formula: "Prednisona 20mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "780083142858",
    descripcion: "NOSIPREN c/100 TABS. 20 MG.",
    formula: "Prednisona 20mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009748400",
    descripcion: "PREGABALINA (Medigen) c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "MEDIGEN"
  },
  {
    codigo: "7501349025967",
    descripcion: "PREGABALINA (Amsa) c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501384545482",
    descripcion: "PREGABALINA (Psicofarma) c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "785118754358",
    descripcion: "BUTIXOL c/14 CAPS. 75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216799806",
    descripcion: "PREGABALINA (Ultra) c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501075721096",
    descripcion: "ANIERNOV c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349025943",
    descripcion: "PREGABALINA (Amsa) c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216805057",
    descripcion: "PREGABALINA (Avivia) c/14 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216799813",
    descripcion: "PREGABALINA (Ultra) c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009745362",
    descripcion: "BIPALVER c/14 CAPS. 75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "725742761681",
    descripcion: "GABADIOL c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "SBL"
  },
  {
    codigo: "7501075721072",
    descripcion: "ANIERNOV c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501384545499",
    descripcion: "PREGABALINA (Psicofarma) c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502247373471",
    descripcion: "GALBAX c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502009745423",
    descripcion: "BIPALVER c/28 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "725742761698",
    descripcion: "GABADIOL c/60 CAPS.  75 MG.",
    formula: "Pregabalina  75mg",
    laboratorio: "SBL"
  },
  {
    codigo: "7501349022959",
    descripcion: "PREGABALINA (Amsa) c/14 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "785118754341",
    descripcion: "BUTIXOL c/14 CAPS.  150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501384545505",
    descripcion: "PREGABALINA (Psicofarma) c/14 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502216799820",
    descripcion: "PREGABALINA (Ultra) c/14 TABS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "17699",
    descripcion: "PREGABALINA (Avivia) c/14 TABS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501384545512",
    descripcion: "PREGABALINA (Psicofarma) c/28 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502216805033",
    descripcion: "PREGABALINA (Avivia) c/14 TABS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501349022935",
    descripcion: "PREGABALINA (Amsa) c/28 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216799837",
    descripcion: "PREGABALINA (Ultra) c/28 TABS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501075721089",
    descripcion: "ANIERNOV c/28 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502009745379",
    descripcion: "BIPALVER c/28 CAPS. 150 MG. ",
    formula: "Pregabalina 150mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "725742761735",
    descripcion: "GABADIOL c/60 CAPS. 150 MG.",
    formula: "Pregabalina 150mg",
    laboratorio: "SBL"
  },
  {
    codigo: "7501342809021",
    descripcion: "VIVE GOLD EDITION Liso Caja c/3 CONDONES.",
    formula: "Preservativo liso clásico",
    laboratorio: "ALLEN"
  },
  {
    codigo: "7404001750255",
    descripcion: "VIVE MÁS NATURAL Ultra Delgados Cja. c/3 CONDONES.",
    formula: "Preservativo liso ultra delgado",
    laboratorio: "ALLEN"
  },
  {
    codigo: "7501342809038",
    descripcion: "VIVE GOLD EDITION Extra Sensible Caja c/3 CONDONES.",
    formula: "Preservativo liso ultra delgado",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502259891758",
    descripcion: "LACTICILUS c/100 TABS. Masticables 0.42 G.",
    formula: "Probiótico (Lactobacilos Sporogenes en combinación).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502259891383",
    descripcion: "PROBIOVER c/12 CAPS. 467 MG.",
    formula: "Probiótico (Saccharomyces boulardii)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502259891444",
    descripcion: "PROBIOVER Pediátrico c/6 SOBRES POLVO 1 G.",
    formula: "Probiótico (Saccharomyces boulardii)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009743832",
    descripcion: "LACTIV SP c/30 TABS. Masticables. 573 MG.",
    formula: "Probióticos (Lactobacilos Adulto).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008989149",
    descripcion: "LACTO HERD c/30 TABS. Masticables 500 MG.",
    formula: "Probióticos (Lactobacilos Adulto).",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7500326108778",
    descripcion: "D-GELAC+FS c/30 CAPS. 495 MG.",
    formula: "Probióticos (Lactobacilos Adulto).",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259890096",
    descripcion: "LACTIV Kids c/30 TABS. MAST. Sabor Uva. 537 MG.",
    formula: "Probióticos (Lactobacilos Infantil).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259890331",
    descripcion: "LACTIV Kids c/6 SOBRES POLVO 5 G.",
    formula: "Probióticos (Lactobacilos Infantil).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008989156",
    descripcion: "LACTO HERD KIDS c/30 TABS. Masticables Sab. Uva  500 MG.",
    formula: "Probióticos (Lactobacilos Infantil).",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503020089329",
    descripcion: "KIDDYLAC POLVO c/6 SOBRES. 5 G.",
    formula: "Probióticos (Lactobacilos Infantil).",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259891482",
    descripcion: "LACTIV Mujer c/6 SOBRES POLVO 2 G.",
    formula: "Probióticos (Lactobacilos Mujer).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259892335",
    descripcion: "LACTIV Kids SUSP. Fco Gotero 9.4 ML/3 G.",
    formula: "Probióticos (Lactobacilos Pediátrico).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259890973",
    descripcion: "LACTIV c/6 SOBRES POLVO 1 G.",
    formula: "Probióticos (Lactobacilos Pediátrico).",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259892359",
    descripcion: "LACTIV GB c/30 CAPS. 750 MG.",
    formula: "Probióticos en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502001167254",
    descripcion: "ANNEM´S GEL Tubo c/80 G. 1 G/100 G.",
    formula: "Progesterona (Gel)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502256040555",
    descripcion: "DANKELDIONA GEL Tubo c/80 G. 1 G/100 G.",
    formula: "Progesterona (Gel)",
    laboratorio: "DANKEL"
  },
  {
    codigo: "7502216802001",
    descripcion: "PROGESTERONA (Ultra) GEL Tubo c/80 G. 1.0 G/100 G.",
    formula: "Progesterona (Gel)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502001167223",
    descripcion: "ERA Sol. Iny. c/6 AMPTAS. 50 MG/2 ML. ",
    formula: "Progesterona (Inyectable)",
    laboratorio: "SONS"
  },
  {
    codigo: "7502009749100",
    descripcion: "ORFEOX c/20 TABS. 150 MG. ",
    formula: "Propafenona",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501563380088",
    descripcion: "PROPAFENONA (Randall) c/20 TABS. 150 MG.",
    formula: "Propafenona",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563381351",
    descripcion: "BIOPAFEN c/20 TABS. 150 MG.",
    formula: "Propafenona",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501052713196",
    descripcion: "FRESOFOL Emulsión Iny. 1% c/5 AMPTAS. 0.20 G/20 ML.",
    formula: "Propofol 20mg.",
    laboratorio: "FRESENIUS"
  },
  {
    codigo: "8902413020274",
    descripcion: "PROZEUX Emulsión Iny. 1% c/5 FCOS. AMP. 200 MG/20 ML.",
    formula: "Propofol 20mg.",
    laboratorio: "ZEUX"
  },
  {
    codigo: "656599041018",
    descripcion: "PRANIDOL c/ 24 TABS. 20 MG.",
    formula: "Propranolol 20mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501277071685",
    descripcion: "PROCHOR c/30 TABS. 40 MG.",
    formula: "Propranolol 40mg.",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501258203395",
    descripcion: "SINTASER c/ 30 TABS. 40 MG.",
    formula: "Propranolol 40mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502009742163",
    descripcion: "QUICKLY Tipo Pluma Caja c/1 PRUEBA.",
    formula: "Prueba de embarazo.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506335300011",
    descripcion: "ULTRA BABY TEST tipo pluma c/1 PRUEBA.",
    formula: "Prueba de embarazo.",
    laboratorio: "FARCORPE"
  },
  {
    codigo: "7502009747953",
    descripcion: "EASY TEST Tipo pluma Caja c/1 PRUEBA.",
    formula: "Prueba de embarazo.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506448901778",
    descripcion: "ONE STEP Prueba de Embarazo Tipo Pluma c/1 Pza.",
    formula: "Prueba de embarazo.",
    laboratorio: "IMPLEMEDIX"
  },
  {
    codigo: "7501249600851",
    descripcion: "QUETIAPINA (Tempus Pharma) c/30 TABS.  25 MG.",
    formula: "Quetiapina  25mg.",
    laboratorio: "IFA"
  },
  {
    codigo: "7506442700889",
    descripcion: "QUETIAPINA (Camber) c/30 TABS.  25 MG.",
    formula: "Quetiapina  25mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7503028771721",
    descripcion: "QUETIAPINA (Suanca) c/30 TABS.  25 MG.",
    formula: "Quetiapina  25mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "8903855059990",
    descripcion: "QUETIAPINA (Zeux) c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "TORRENT"
  },
  {
    codigo: "7503028771646",
    descripcion: "QUETIAPINA (Suanca) c/30 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502227875872",
    descripcion: "ALREX c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502247374393",
    descripcion: "FISHRE c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501075727548",
    descripcion: "GAELORAX c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501075724684",
    descripcion: "GAELORAX c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216803282",
    descripcion: "QUETIAPINA (Ultra) c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501384545697",
    descripcion: "QUETIAPINA (Alpharma) c/60 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7506442700872",
    descripcion: "QUETIAPINA (Camber) c/30 TABS. 100 MG.",
    formula: "Quetiapina 100mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7502006921967",
    descripcion: "FARMIVER SUSP. Infantil Fco. 10 ML. 100-400 MG/10 ML.",
    formula: "Quinfamida+Albendazol (Infantil).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502006921974",
    descripcion: "FARMIVER SUSP. Junior Fco. 20 ML. 200-400 MG/20 ML.",
    formula: "Quinfamida+Albendazol (Junior).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502006921950",
    descripcion: "FARMIVER SUSP. Pediátrica Fco. 10 ML. 100-200 MG/10 ML.",
    formula: "Quinfamida+Albendazol (Pediátrico).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7502208894915",
    descripcion: "LO-BRUQUIN c/2 TABS. 150/200 MG.",
    formula: "Quinfamida+Albendazol (Tabs. Orales) 150/200mg.",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7502006920038",
    descripcion: "FARMIVER c/2 TABS. 150/200 MG.",
    formula: "Quinfamida+Albendazol (Tabs. Orales) 150/200mg.",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7506313800205",
    descripcion: "DAVLEEN c/2 TABS. 150/200 MG.",
    formula: "Quinfamida+Albendazol (Tabs. Orales) 150/200mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501070635329",
    descripcion: "ALBENDAZOL/QUINFAMIDA (Sanfer) c/2 TABS. 200/150 MG.",
    formula: "Quinfamida+Albendazol (Tabs. Orales) 150/200mg.",
    laboratorio: "SANFER"
  },
  {
    codigo: "7502009749407",
    descripcion: "RACECADOTRILO (Maver) c/18 SOBS. Granulado 10 MG.",
    formula: "Racecadotrilo (Granulado) 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749414",
    descripcion: "RACECADOTRILO (Maver) c/18 SOBS. Granulado 30 MG.",
    formula: "Racecadotrilo (Granulado) 30mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009746369",
    descripcion: "ALVISVER c/14 TABS. 60 MG.",
    formula: "Raloxifeno",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216808508",
    descripcion: "ULOS-H c/28 TABS. 60 MG.",
    formula: "Raloxifeno",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502213042400",
    descripcion: "CANZEFHIN c/28 TABS. 60 MG.",
    formula: "Raloxifeno",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502009746338",
    descripcion: "ALVISVER c/28 TABS. 60 MG.",
    formula: "Raloxifeno",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501249606846",
    descripcion: "RALOXIFENO (TempusPharma) c/28 TABS. 60 MG.",
    formula: "Raloxifeno",
    laboratorio: "IFA"
  },
  {
    codigo: "7502009744334",
    descripcion: "PRILVER c/16 TABS. 2.5 MG.",
    formula: "Ramipril  2.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227871799",
    descripcion: "VENESDEN c/16 TABS.  2.5 MG.",
    formula: "Ramipril  2.5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009744341",
    descripcion: "PRILVER c/16 TABS. 5 MG.",
    formula: "Ramipril  5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502227871805",
    descripcion: "VENESDEN c/16 TABS.  5 MG.",
    formula: "Ramipril  5mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "803288480560",
    descripcion: "BIOZICK Loción Repelente SPRAY Fco. 250 ML.",
    formula: "Repelente de Mosquitos e insectos.",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7502008986940",
    descripcion: "PIOKLEAN GEL Repelente p/CABELLO 150 G.",
    formula: "Repelente de piojos Gel fijador.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008986995",
    descripcion: "PIOKLEAN SHAMPOO/PEINE 150 ML.",
    formula: "Repelente de piojos Shampoo.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502008986933",
    descripcion: "PIOKLEAN SPRAY REPELENTE 130 ML.               ",
    formula: "Repelente de piojos Spray.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502226290867",
    descripcion: "RETINOL (Alpharma) c/40 CAPS. 50,000 U.I.",
    formula: "Retinol (Vitamina A) Caps. Orales.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226290027",
    descripcion: "BIOLYSIN GB c/40 CAPS. 50,000 UI.               ",
    formula: "Retinol (Vitamina A) Caps. Orales.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503002615546",
    descripcion: "ARENOL SOL. Fco. Gotero 4 ML. 1´250,000 UI/1 ML.",
    formula: "Retinol (Vitamina A) Sol. Oral.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501384506087",
    descripcion: "ACECOVYL SOL. Fco. y Gotero 15 ML. 9000ui-125mg-1800ui/1 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Gotas.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501384506070",
    descripcion: "VITAMINA A,C,D (Psicofarma) SOL. Fco. Got. 15 ML. 9000 UI-125 MG-1800 UI/1 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Gotas.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7503002615584",
    descripcion: "ZARTID SOL. Fco. Gotero 15 ML. 8000 UI-1500 UI-80 MG/1 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Gotas.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502001164246",
    descripcion: "ALFADEC SOL. GOTAS Fco. 20 ML. 5000 UI-400 UI-60 MG/1 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Gotas.",
    laboratorio: "SONS"
  },
  {
    codigo: "7501825300885",
    descripcion: "VI-DEA-C SOL. Inf . GTS. Fco. 25 ML. 500M UI-40M UI-3000 MG/100 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Gotas.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502226294506",
    descripcion: "RETINOL/ÁCIDO ASCÓRBICO/COLECALCIFEROL (Alpharma) Sol. Oral c/1 AMPTA. 3 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Ingerible.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502223110168",
    descripcion: "VITAMINAS C,D,A Sol. Oral c/5 AMPTAS. 250/0.010/1/15 MG. 3 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Ingerible.",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502226294513",
    descripcion: "RETINOL/ÁCIDO ASCÓRBICO/COLECALCIFEROL (Alpharma) Sol. Oral c/5 AMPTAS. 3 ML.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Ingerible.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001167094",
    descripcion: "ALFADEC Sol. Oral c/5 AMPTAS. 3 ML. 6000 UI/1200 UI/499.65 MG.",
    formula: "Retinol+Ácido ascórbico+Colecalciferol (Vitaminas ACD) Sol. Ingerible.",
    laboratorio: "SONS"
  },
  {
    codigo: "803288480027",
    descripcion: "BIOXILINA CREMA TUBO c/35 G.",
    formula: "Retinol+Citricidal",
    laboratorio: "BQM"
  },
  {
    codigo: "803288480508",
    descripcion: "BACAOVIT c/30 CAPS. 800 MG.",
    formula: "Retinol+Ergocalciferol (Vitaminas AD) Caps. Orales.",
    laboratorio: "BQM"
  },
  {
    codigo: "803288480690",
    descripcion: "TIBUVIT c/75 CAPS. 500 MG.",
    formula: "Retinol+Ergocalciferol (Vitaminas AD) Caps. Orales.",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7501349029958",
    descripcion: "RETINOL/ERGOCALCIFEROL (Amsa) Sol. Ingble. c/1 AMPTA. 6000-400 U/3 ML.",
    formula: "Retinol+Ergocalciferol (Vitaminas AD) Sol. Ingerible.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502001165489",
    descripcion: "A-D-KAN Sol. Ingerible c/3 AMPTAS. 6000-400 UI/3 ML.",
    formula: "Retinol+Ergocalciferol (Vitaminas AD) Sol. Ingerible.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502004400051",
    descripcion: "ADEKALS Sol. Ingerible c/3 AMPTAS. 5000-400 UI/3 ML.",
    formula: "Retinol+Ergocalciferol (Vitaminas AD) Sol. Ingerible.",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501590288012",
    descripcion: "KAHA c/30 CÁPSULAS.",
    formula: "Rhodiola rosea+Vitaminas",
    laboratorio: "CMD"
  },
  {
    codigo: "7502009749452",
    descripcion: "DAIMANT c/14 CAPS. 100 MG.",
    formula: "Rimantadina",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501384543983",
    descripcion: "RISPERIDONA (Psicofarma) c/40 TABS. 2 MG.",
    formula: "Risperidona 2mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502009749254",
    descripcion: "RIVAROXABÁN (Maver) c/30 COMPS. 10 MG.",
    formula: "Rivaroxabán 10mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749247",
    descripcion: "RIVAROXABÁN (Maver) c/28 COMPS. 20 MG. ",
    formula: "Rivaroxabán 20mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502226293738",
    descripcion: "ROSUVASTATINA (Alpharma) c/30 TABS. 10 MG.",
    formula: "Rosuvastatina 10mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "785120755459",
    descripcion: "CROSTOX c/30 TABS. 10 MG.",
    formula: "Rosuvastatina 10mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502242701323",
    descripcion: "ROSUVASTATINA (Corne) c/30 TABS. 10 MG.",
    formula: "Rosuvastatina 10mg.",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501349024588",
    descripcion: "ROSUVASTATINA (Amsa) c/30 TABS. 10 MG.",
    formula: "Rosuvastatina 10mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502226293158",
    descripcion: "ROSUVASTATINA (Alpharma) c/15 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503028771691",
    descripcion: "ROSUVASTATINA (Suanca) c/10 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7501349024977",
    descripcion: "ROSUVASTATINA (Amsa) c/15 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "785120755466",
    descripcion: "CROSTOX c/30 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "MAVI"
  },
  {
    codigo: "7506331301258",
    descripcion: "TRAUSTABINDO c/30 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7502242701330",
    descripcion: "ROSUVASTATINA (Corne) c/30 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "CORNE"
  },
  {
    codigo: "7501349024090",
    descripcion: "ROSUVASTATINA (Amsa) c/30 TABS. 20 MG.",
    formula: "Rosuvastatina 20mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502008989163",
    descripcion: "WINROST c/90 TABS. 500 MG.",
    formula: "Rusco+Lactobacilos+Vitamina C",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503049078168",
    descripcion: "RUSCUS/HESPERIDINA/ÁCIDO ASCÓRBICO (Avivia) c/30 CAPS. 150/150/100 MG.",
    formula: "Ruscus+Hesperidina+Ácido ascórbico.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790810",
    descripcion: "ULTRADRAE c/30 CAPS. 150/150/100 MG.",
    formula: "Ruscus+Hesperidina+Ácido ascórbico.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506022327635",
    descripcion: "BRESALTEC AEROSOL p/Inhalación Fco. c/200 Dosis 100 MCG.",
    formula: "Salbutamol (Aerosol p/Inhalación Bucal).",
    laboratorio: "BIOSYNTEC"
  },
  {
    codigo: "7502213042738",
    descripcion: "FARMAREST AEROSOL p/Inhalación c/1 Fco. c/200 Dosis 100 MCG.",
    formula: "Salbutamol (Aerosol p/Inhalación Bucal).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "656599010021",
    descripcion: "SALBUTAMOL AEROSOL p/Inhalación c/1 Fco. 13.5 G. c/200 Dosis. 100 MCG.",
    formula: "Salbutamol (Aerosol p/Inhalación Bucal).",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7501563380378",
    descripcion: "SALBUTAMOL (Randall) JARABE Fco. 60 ML. 40 MG/100 ML.",
    formula: "Salbutamol (Solución Oral).",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501563370966",
    descripcion: "BIORENYN JARABE Fco. 60 ML. 40 MG/100 ML.",
    formula: "Salbutamol (Solución Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502006923503",
    descripcion: "AVEDOX FC JBE. Fco. 120 ML. 40 MG/100 ML.",
    formula: "Salbutamol (Solución Oral).",
    laboratorio: "FARMA.CONT."
  },
  {
    codigo: "7501825301035",
    descripcion: "EXAFIL JBE. Fco. 120 ML. 40 MG/100 ML.",
    formula: "Salbutamol (Solución Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7503002772782",
    descripcion: "VETRIVATOX SOL. p/Nebulización Fco. 10 ML. 5 MG/1 ML.",
    formula: "Salbutamol (Solución p/Nebulización).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7506353200218",
    descripcion: "SOFAMIX SOL. p/Nebulización Fco. 10 ML. 5 MG/1 ML.",
    formula: "Salbutamol (Solución p/Nebulización).",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502213042769",
    descripcion: "NEBSAL SOL. p/Inhalación Fco. 10 ML. 5 MG/1 ML.",
    formula: "Salbutamol (Solución p/Nebulización).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501349028050",
    descripcion: "SALBUTAMOL (Amsa) SOL. p/Nebulización Fco. 10 ML. 5 MG/1 ML.",
    formula: "Salbutamol (Solución p/Nebulización).",
    laboratorio: "AMSA"
  },
  {
    codigo: "7503001007694",
    descripcion: "WEXPEC SOL. Fco. 120 ML. 2-7.5 MG/5 ML.",
    formula: "Salbutamol+Ambroxol.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502009740282",
    descripcion: "FLUXOL SOL. Fco. 120 ML. 40-150 MG/100 ML.",
    formula: "Salbutamol+Ambroxol.",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083146221",
    descripcion: "BROSOFLUX SOLUCIÓN Fco. 120 ML. 150-40 MG/100 ML.",
    formula: "Salbutamol+Ambroxol.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7501825301707",
    descripcion: "FLUVICIL SOL. Fco. 120 ML. 150-40 MG/100 ML.",
    formula: "Salbutamol+Ambroxol.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501563380705",
    descripcion: "EFILAT c/50 TABS. Efervescentes 766/460/155 MG.",
    formula: "Sales de potasio",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563382020",
    descripcion: "SALES DE POTASIO (Randall) c/50 TABS. Efervescentes 766/460/155 MG.",
    formula: "Sales de potasio",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501109760039",
    descripcion: "PARCHE POROSO TOPICO Sobre c/1 Pza. 12.5x18.5cm. 0.077 G.",
    formula: "Salicilato de metilo",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109760033",
    descripcion: "PARCHE POROSO TÓPICO Tira c/6 Pzas. 12.5x18.5cm. 0.077 G.",
    formula: "Salicilato de metilo",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7501109760886",
    descripcion: "PARCHE NEGRO TOPICO Sob. c/1 Pza.12.5x18.5cm. 0.175/0.003 G.",
    formula: "Salicilato de metilo+Belladona",
    laboratorio: "QUIFA"
  },
  {
    codigo: "7502213042776",
    descripcion: "BRULSAR AEROSOL p/Inhalación Fco. c/120 Dosis 25 MCG.",
    formula: "Salmeterol (Aerosol p/Inhalación Bucal).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502213042653",
    descripcion: "ULFHINLAS AIR AEROSOL p/Inhalación Fco. 120 Dosis 25-50 MCG.",
    formula: "Salmeterol+Fluticasona 25/ 50mcg. (Aerosol p/Inhalación Bucal).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7501590288852",
    descripcion: "SAMBÚ JBE. Fco.120 ML. 10 G/100 ML.",
    formula: "Sambucus (Saúco negro, Elderberry)",
    laboratorio: "CMD"
  },
  {
    codigo: "7501075713473",
    descripcion: "MINOVAG c/8 TABS. 500 MG.",
    formula: "Secnidazol  500mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7506022800060",
    descripcion: "JABON ANTIACNE (Karla Di) 100 G.",
    formula: "Sello de oro+diente de león+fenogreco+sorosi.",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "821998000595",
    descripcion: "SENÓSIDOS A-B (Schoen) c/20 TABS. 8.6 MG.",
    formula: "Senósidos A-B  8.6mg. (Tabs. Orales)",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7501075723137",
    descripcion: "NOVAKOSID c/20 TABS. 8.6 MG.",
    formula: "Senósidos A-B  8.6mg. (Tabs. Orales)",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216796393",
    descripcion: "SENÓSIDOS A-B (Ultra) c/20 TABS. 8.6 MG.",
    formula: "Senósidos A-B  8.6mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502226296487",
    descripcion: "SENÓSIDOS A-B (Alpharma) c/60 TABS. 8.6 MG.",
    formula: "Senósidos A-B  8.6mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216804074",
    descripcion: "SENÓSIDOS A-B (Avivia) c/60 TABS. 8.6 MG.",
    formula: "Senósidos A-B  8.6mg. (Tabs. Orales)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502227426142",
    descripcion: "RUVOLSY c/30 CAPS. 12 MG.",
    formula: "Senosidos A-B 12mg. (Tabs. Orales)",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501130713158",
    descripcion: "LAXACAPS c/30 CAPS. 12/50 MG.",
    formula: "Senósidos A-B+Concentrado de Ciruela",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7501590284335",
    descripcion: "PROSTASAN Caja/Blister c/30 CAPS. 160 MG.",
    formula: "Serenoa Repens (Saw Palmeto)",
    laboratorio: "CMD"
  },
  {
    codigo: "7501590283734",
    descripcion: "PROSTASAN Caja/Frasco c/60 CAPS. 160 MG.",
    formula: "Serenoa Repens (Saw Palmeto)",
    laboratorio: "CMD"
  },
  {
    codigo: "7502280810377",
    descripcion: "PRST-MEN c/SEMILLA DE CALABAZA (Supra) c/72 CAPS. 500 MG.",
    formula: "Serenoa Repens (Saw Palmeto) en combinación.",
    laboratorio: "SUPRA NATURA"
  },
  {
    codigo: "780083150006",
    descripcion: "ALUPREX Fco. c/20 CAPS.  50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506331301005",
    descripcion: "VEDAVIXA c/14 TABS.  50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7501349021310",
    descripcion: "SERTRALINA (Amsa) c/14 TABS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7500464881717",
    descripcion: "SERTRALINA (Umback) c/14 CAPS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "UMBACK"
  },
  {
    codigo: "780083143565",
    descripcion: "ALUPREX Cja. c/20 CAPS.  50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502247374706",
    descripcion: "TRAKOS c/14 TABS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501563380255",
    descripcion: "SERTRALINA (Randall) c/14 TABS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501384541194",
    descripcion: "SERTRALINA (Psicofarma) c/14 TABS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502254000339",
    descripcion: "ACORTRAL c/14 TABS. 50 MG. ",
    formula: "Sertralina  50mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501493865839",
    descripcion: "SALINAKER c/14 CAPS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7501384544706",
    descripcion: "SERTRALINA (Psicofarma) c/28 TABS. 50 MG.",
    formula: "Sertralina  50mg.",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7502247376908",
    descripcion: "TRAKOS c/28 TABS. 50 MG. (2 Pack)",
    formula: "Sertralina  50mg.",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "781584367559",
    descripcion: "BIO SERUM c/2% ÁCIDO HIALURÓNICO SOL. Fco. c/30 ML.",
    formula: "Sérum facial.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7506022807830",
    descripcion: "SHAMPOO BERGAMOTA+ALBAHACA y MENTA (Karla Di) 500 ML.",
    formula: "Shampoo Herbal (Capilar)",
    laboratorio: "KARLA DI"
  },
  {
    codigo: "7503049078373",
    descripcion: "LADY MOON Shampoo Íntimo Uso Diario BALANCE PH Fco. 250 ML.",
    formula: "Shampoo íntimo de uso externo",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501573904755",
    descripcion: "DIONIXOL c/1 TAB.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502227874134",
    descripcion: "ACTIRAAM c/ 1 TAB.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009744457",
    descripcion: "VOGUEL c/ 1 TAB.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796812",
    descripcion: "SILDENAFIL (Ultra) c/1 TAB. 50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501573904762",
    descripcion: "DIONIXOL c/4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083146887",
    descripcion: "MAZZOGRAN c/ 4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216796829",
    descripcion: "SILDENAFIL (Ultra) c/4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227874110",
    descripcion: "ACTIRAAM c/ 4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501825301967",
    descripcion: "MAXIFORT Zimax c/ 1 TAB.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "780083146894",
    descripcion: "MAZZOGRAN c/ 1 TAB.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502009744556",
    descripcion: "VOGUEL c/ 4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "785118752965",
    descripcion: "FIGRAL c/ 4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502227874127",
    descripcion: "ACTIRAAM c/10 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009744563",
    descripcion: "VOGUEL c/10 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083146948",
    descripcion: "MAZZOGRAN c/10 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216807938",
    descripcion: "SILDENAFIL (Ultra) c/4 TABS.  50 MG. (Oferta 2x1)",
    formula: "Sildenafil  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216806580",
    descripcion: "SILDENAFIL (Ultra) c/8 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501825300052",
    descripcion: "MAXIFORT Zimax c/ 4 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "785118753955",
    descripcion: "FIGRAL c/10 TABS.  50 MG.",
    formula: "Sildenafil  50mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501825302704",
    descripcion: "MAXIFORT Zimax c/10 TABS.  50 MG. ",
    formula: "Sildenafil  50mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009745690",
    descripcion: "VOGUEL-M c/1 TAB. Masticable 50 MG.",
    formula: "Sildenafil  50mg. (Acción rápida)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009745706",
    descripcion: "VOGUEL-M c/4 TABS. Masticables 50 MG.",
    formula: "Sildenafil  50mg. (Acción rápida)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501573904779",
    descripcion: "DIONIXOL c/1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7501478316165",
    descripcion: "YSUS c/1 TABLETA 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502227874141",
    descripcion: "ACTIRAAM c/ 1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502009744914",
    descripcion: "VOGUEL c/ 1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796836",
    descripcion: "SILDENAFIL (Ultra) c/1 TABS. 100 MG",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501109765997",
    descripcion: "SILDENAFIL (Perrigo) c/4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502216804043",
    descripcion: "SILDENAFIL (Avivia) c/1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501573904786",
    descripcion: "DIONIXOL c/4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "780083146900",
    descripcion: "MAZZOGRAN c/ 1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502227874158",
    descripcion: "ACTIRAAM c/ 4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501478316172",
    descripcion: "YSUS c/4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "VITAE"
  },
  {
    codigo: "785118753818",
    descripcion: "FIGRAL c/ 1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7501825302896",
    descripcion: "MAXIFORT Zimax c/ 1 TAB. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009744594",
    descripcion: "VOGUEL c/ 4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216796843",
    descripcion: "SILDENAFIL (Ultra) c/4 TABS. 100 MG",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216804050",
    descripcion: "SILDENAFIL (Avivia) c/4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "785118753825",
    descripcion: "FIGRAL c/ 4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216807914",
    descripcion: "SILDENAFIL (Ultra) c/4 TABS. 100 MG (Oferta 2x1)",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227874165",
    descripcion: "ACTIRAAM c/10 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216809697",
    descripcion: "OSIDEA GL c/4 TABS. 100 MG. (Oferta 2x1)",
    formula: "Sildenafil 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "780083146955",
    descripcion: "MAZZOGRAN c/10 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216806597",
    descripcion: "SILDENAFIL (Ultra) c/8 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501825300069",
    descripcion: "MAXIFORT Zimax c/ 4 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009747090",
    descripcion: "VOGUEL c/10 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501258211345",
    descripcion: "EDEGRA c/10 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "785118753962",
    descripcion: "FIGRAL c/10 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502216809680",
    descripcion: "OSIDEA GL c/8 TABS. 100 MG. (Oferta 2x1)",
    formula: "Sildenafil 100mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216807945",
    descripcion: "SILDENAFIL (Ultra) c/8 TABS. 100 MG. (Oferta 2x1)",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501258211352",
    descripcion: "EDEGRA c/20 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7501825302902",
    descripcion: "MAXIFORT Zimax c/10 TABS. 100 MG. ",
    formula: "Sildenafil 100mg.",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502216808461",
    descripcion: "SILDENAFIL (Ultra) Exhib. c/20 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "785118754273",
    descripcion: "FIGRAL Exhib. c/20 TABS. 100 MG.",
    formula: "Sildenafil 100mg.",
    laboratorio: "MAVI"
  },
  {
    codigo: "780083147839",
    descripcion: "MAZZOGRAN c/10 TABS. 100 MG. (3 Pack)",
    formula: "Sildenafil 100mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502216804425",
    descripcion: "SILDENAFIL (Ultra) c/1 SOBRE Gel Oral 100 MG/5 G.",
    formula: "Sildenafil 100mg. (Acción rápida)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216803176",
    descripcion: "OSIDEA GL c/1 SOBRE Gel Oral 100 MG. (Oferta 2x1)",
    formula: "Sildenafil 100mg. (Acción rápida)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216804401",
    descripcion: "SILDENAFIL (Ultra) c/4 SOBS. Gel Oral 100 MG/5 G.",
    formula: "Sildenafil 100mg. (Acción rápida)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216803169",
    descripcion: "OSIDEA GL c/4 SOBRES Gel Oral 100 MG. (Oferta 2x1)",
    formula: "Sildenafil 100mg. (Acción rápida)",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7503181043024",
    descripcion: "HERBO MARIN c/90 TABS. 700 MG. ",
    formula: "Silimarina (Silybum marianum ó Cardo mariano) en combinación.",
    laboratorio: "VIDA HERBAL"
  },
  {
    codigo: "7501590241093",
    descripcion: "ETAGERIN c/60 COMPS. 150 MG.",
    formula: "Silimarina (Silybum marianum ó Cardo mariano).",
    laboratorio: "CMD"
  },
  {
    codigo: "714908106329",
    descripcion: "MILTLAN c/60 CAPS. 120 MG.",
    formula: "Silimarina (Silybum marianum ó Cardo mariano).",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7501130742776",
    descripcion: "DIGECAPS c/30 CAPS. 50 MG.",
    formula: "Silimarina (Silybum marianum ó Cardo mariano).",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7501493866348",
    descripcion: "SIMVASTATINA (Kener) c/30 TABS. 10 MG.",
    formula: "Simvastatina 10mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7501493889545",
    descripcion: "XANTEROK c/30 TABS. 20 MG.",
    formula: "Simvastatina 20mg.",
    laboratorio: "KENER"
  },
  {
    codigo: "7502227871935",
    descripcion: "P-HYSPLAN c/60 TABS. 1 MG.",
    formula: "Sirolimus",
    laboratorio: "RAAM"
  },
  {
    codigo: "7506442703897",
    descripcion: "SITAGLIPTINA (Camber) c/28 TABS.  50 MG.",
    formula: "Sitagliptina  50mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506442703880",
    descripcion: "SITAGLIPTINA (Camber) c/28 TABS. 100 MG.",
    formula: "Sitagliptina 100mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7506022331175",
    descripcion: "SONDA NELATON de LATEX (SensiMedical) Long. 40cm. Cal. 16 Fr. c/1 Pza. ",
    formula: "Sonda Nélaton Calibre 16.",
    laboratorio: "JAYOR"
  },
  {
    codigo: "7502211788393",
    descripcion: "SUBSALICILATO DE BISMUTO (Loeffler) SUSP. Fco. 240 ML. 1.750 G/100 ML.",
    formula: "Subsalicilato de Bismuto (Susp. Oral) 1.75g.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "785118752637",
    descripcion: "ITAMOL c/24 TABS. Masticables 262 MG.",
    formula: "Subsalicilato de Bismuto (Tabs. Orales).",
    laboratorio: "MAVI"
  },
  {
    codigo: "17486",
    descripcion: "SUCRALFATO (Sydenham) c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7503002772508",
    descripcion: "ALIVOATO c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7506344500785",
    descripcion: "MOGAMIGUE c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7502216793439",
    descripcion: "SUCRALFATO (Ultra) c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501349022805",
    descripcion: "SUCRALFATO (Amsa) c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227877098",
    descripcion: "ALOMOON c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502010581607",
    descripcion: "SUCRALFATO (Sydenham) c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "SYDENHAM"
  },
  {
    codigo: "7502216804975",
    descripcion: "SUCRALFATO (Avivia) c/40 TABS. 1 G.",
    formula: "Sucralfato",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501563381795",
    descripcion: "BIOARGIROL-C CREMA Tarro c/30 G. 1 G/100 G.",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563382808",
    descripcion: "SULFADIAZINA DE PLATA (Randall)  Tarro c/30 G. 1 G/100 G.",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7506494600106",
    descripcion: "SULFADIAZINA DE PLATA (Schoen) CREMA 1% Tubo c/28 G. ",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7502211781615",
    descripcion: "ARGEMOL CREMA Tarro c/28 G. 1 G.",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501836000828",
    descripcion: "ARGENTAL CREMA 1% Tubo c/28 G.",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501563381771",
    descripcion: "BIOARGIROL-C CREMA Tarro c/375 G. 1 G/100 G.",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7506494600045",
    descripcion: "SULFADIAZINA DE PLATA (Schoen) CREMA 1% Tarro c/375 G. ",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7506494600113",
    descripcion: "SULFADIAZINA DE PLATA (Schoen) CREMA 1% Tarro c/375 G. ",
    formula: "Sulfadiazina de plata (Crema dermica)",
    laboratorio: "SCHOEN"
  },
  {
    codigo: "7501109763986",
    descripcion: "MAGSOKON POLVO Individual Cuadrito 26 G.",
    formula: "Sulfato de magnesio (Sal de Epsom)",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501563381467",
    descripcion: "BIOFENOR c/30 TABS. 60.27 MG.",
    formula: "Sulfato Ferroso (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380132",
    descripcion: "BIO-DAC c/20 TABS. 200 MG.",
    formula: "Sulindaco",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7503004908752",
    descripcion: "SULINDACO (Alpharma) c/20 TABS. 200 MG.",
    formula: "Sulindaco",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "75016944",
    descripcion: "CLISON c/20 TABS. 200 MG.",
    formula: "Sulindaco",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "656599041179",
    descripcion: "NOGRAINE c/2 TABS.  50 MG.",
    formula: "Sumatriptán  50mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502227871058",
    descripcion: "FERMIG c/ 2 TABS. 100 MG.",
    formula: "Sumatriptán 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "780083143541",
    descripcion: "TEBEGRAN c/2 COMPS. 100 MG.",
    formula: "Sumatriptán 100mg.",
    laboratorio: "COLLINS"
  },
  {
    codigo: "656599041186",
    descripcion: "NOGRAINE c/2 TABS. 100 MG.",
    formula: "Sumatriptán 100mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502227871188",
    descripcion: "FERMIG c/ 4 TABS. 100 MG.",
    formula: "Sumatriptán 100mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501590288798",
    descripcion: "NERÉO SABOR MORA AZUL Bolsa c/10 SOBS. 14 G.",
    formula: "Suplemento hidratante+Electrólitos orales (Polvo).",
    laboratorio: "CMD"
  },
  {
    codigo: "7502299970833",
    descripcion: "ELECTRÓLITO Suplemento Hidratante (Dr. Will) Sab. COCO c/25 SOBS. 20 G. ",
    formula: "Suplemento hidratante+Electrólitos orales (Polvo).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970840",
    descripcion: "ELECTRÓLITO Suplemento Hidratante (Dr. Will) Sab. TAMARINDO c/25 SOBS. 20 G.",
    formula: "Suplemento hidratante+Electrólitos orales (Polvo).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502299970864",
    descripcion: "ELECTRÓLITO Suplemento Hidratante (Dr. Will) Sab. MICHELADA c/25 SOBS. 20 G.",
    formula: "Suplemento hidratante+Electrólitos orales (Polvo).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502227872772",
    descripcion: "OCTRALIN c/50 CAPS. 1 MG.",
    formula: "Tacrolimus 1mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502226296074",
    descripcion: "TADALAFIL (Alpharma) c/ 14 TABS. 5 MG.",
    formula: "Tadalafil  5mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502226296081",
    descripcion: "TADALAFIL (Alpharma) c/ 28 TABS. 5 MG.",
    formula: "Tadalafil  5mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7506335703690",
    descripcion: "ONEXY c/ 28 TABS. 5 MG.",
    formula: "Tadalafil  5mg. (Tabs. Orales)",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502216808652",
    descripcion: "CHRISALE c/ 14 TABS. 5 MG.",
    formula: "Tadalafil  5mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216808669",
    descripcion: "CHRISALE c/ 28 TABS. 5 MG.",
    formula: "Tadalafil  5mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501258215640",
    descripcion: "TADALAFIL (Serral) c/1 TAB. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "780083149048",
    descripcion: "ALZOCID c/1 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506335703706",
    descripcion: "ONEXY c/1 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502216808614",
    descripcion: "CHRISALE c/1 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009748882",
    descripcion: "SAII c/1 TABLETA 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "780083149055",
    descripcion: "ALZOCID c/4 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506335703713",
    descripcion: "ONEXY c/4 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ACCORD"
  },
  {
    codigo: "785118754334",
    descripcion: "STAMINA c/4 TABS. 20 MG. ",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "MAVI"
  },
  {
    codigo: "7502226296098",
    descripcion: "TADALAFIL (Alpharma) c/1 TABLETA 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501258215657",
    descripcion: "TADALAFIL (Serral) c/4 TAB. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "780083149062",
    descripcion: "ALZOCID c/8 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7506335703720",
    descripcion: "ONEXY c/8 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7501258215664",
    descripcion: "TADALAFIL (Serral) c/8 TAB. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "SERRAL"
  },
  {
    codigo: "7502216809871",
    descripcion: "CHRISALE c/1 TABS. 20 MG. (Oferta 2x1)",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009748875",
    descripcion: "SAII c/4 TABLETAS 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216808645",
    descripcion: "CHRISALE c/8 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502226296104",
    descripcion: "TADALAFIL (Alpharma) c/4 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216808638",
    descripcion: "CHRISALE c/4 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7501277029761",
    descripcion: "TADALAFIL (Apotex) c/4 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "APOTEX"
  },
  {
    codigo: "17578",
    descripcion: "CHRISALE c/4 TABS. 20 MG. (Oferta 2x1)",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216809895",
    descripcion: "CHRISALE c/8 TABS. 20 MG. (Oferta 2x1)",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502226296111",
    descripcion: "TADALAFIL (Alpharma) c/8 TABS. 20 MG.",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502216809888",
    descripcion: "CHRISALE c/4 TABS. 20 MG. (Oferta 2x1)",
    formula: "Tadalafil 20mg. (Tabs. Orales)",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502226296289",
    descripcion: "TAMSULOSINA (Alpharma) c/20 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502209858206",
    descripcion: "ALPHALOCK c/20 CAPS. L.P. 0.4 MG. ",
    formula: "Tamsulosina",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501075718119",
    descripcion: "AMZUVAG c/20 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502225094275",
    descripcion: "HIPEBE c/20 CAPS. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502216790704",
    descripcion: "TAMSULOSINA (Ultra) c/20 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502227872192",
    descripcion: "FEDPROS c/20 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "RAAM"
  },
  {
    codigo: "7503049078458",
    descripcion: "TAMSULOSINA (Avivia) c/20 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075725216",
    descripcion: "AMZUVAG c/30 CAPS. L.P. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502247376885",
    descripcion: "HIPEBE c/60 CAPS. 0.4 MG.",
    formula: "Tamsulosina",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7501349025424",
    descripcion: "TELMISARTÁN (Amsa) c/14 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502226293790",
    descripcion: "TELMISARTÁN (Alpharma) c/14 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501075721249",
    descripcion: "NATRAZIM c/14 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349025844",
    descripcion: "TELMISARTÁN (Amsa) c/28 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502226293806",
    descripcion: "TELMISARTÁN (Alpharma) c/28 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7506335702426",
    descripcion: "LESPREK c/30 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502216798786",
    descripcion: "TELMISARTÁN (Ultra) c/30 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216805088",
    descripcion: "TELMISARTÁN (Avivia) c/30 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7501075721041",
    descripcion: "NATRAZIM c/28 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501075720969",
    descripcion: "NATRAZIM c/30 TABS. 40 MG.",
    formula: "Telmisartán 40mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349025400",
    descripcion: "TELMISARTÁN (Amsa) c/14 TABS. 80 MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502226293844",
    descripcion: "TELMISARTÁN (Alpharma) c/14 TABS. 80 MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501349025806",
    descripcion: "TELMISARTÁN (Amsa) c/28 TABS. 80 MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501075721256",
    descripcion: "NATRAZIM c/14 TABS. 80 MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502226293851",
    descripcion: "TELMISARTÁN (Alpharma) c/28 TABS. 80 MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501075721164",
    descripcion: "NATRAZIM c/28 TABS. 80  MG.",
    formula: "Telmisartán 80mg.",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502216791244",
    descripcion: "TELMISARTÁN/AMLODIPINO (Ultra) c/28 TABS. 80/5 MG.",
    formula: "Telmisartán+Amlodipino  80/5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502009749711",
    descripcion: "TELMISARTÁN/AMLODIPINO (Maver) c/28 TABS. 80/5 MG.",
    formula: "Telmisartán+Amlodipino  80/5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349029729",
    descripcion: "TELMISARTÁN/HIDROCLOROTIAZIDA (Amsa) c/14 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7506335703027",
    descripcion: "LESPREK H c/14 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "ACCORD"
  },
  {
    codigo: "7502216803244",
    descripcion: "TELMISARTÁN/HIDROCLOROTIAZIDA (Ultra) c/14 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216807372",
    descripcion: "TELMISARTÁN/HIDROCLOROTIAZIDA (Avivia) c/14 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7506344500853",
    descripcion: "BLEDROMIN c/28 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "EVOLUTION"
  },
  {
    codigo: "7501349029736",
    descripcion: "TELMISARTÁN/HIDROCLOROTIAZIDA (Amsa) c/28 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009746376",
    descripcion: "ARCHER Compuesto c/14 TABS. 80/12.5 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/12.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349029842",
    descripcion: "TELMISARTÁN/HIDROCLOROTIAZIDA (Amsa) c/28 TABS. 80/25 MG.",
    formula: "Telmisartán+Hidroclorotiazida 80/25.0mg.",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502251890438",
    descripcion: "ZURIPHAR c/ 5 CÁPULAS 100 MG.",
    formula: "Temozolomida 100mg.",
    laboratorio: "ZURICH"
  },
  {
    codigo: "7506353200515",
    descripcion: "PRENASTIN c/30 TABS. 300 MG.",
    formula: "Tenofovir",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502226291475",
    descripcion: "PHARMAFIL LP c/20 TABS. Lib. Plgda. 100 MG.               ",
    formula: "Teofilina (Tabs. Orales)",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7506022800374",
    descripcion: "JABON de TEPEZCOHUITE (Karla Di) Barra c/100 G.",
    formula: "Tepezcohuite (Jabón).",
    laboratorio: "NATL.ELITE"
  },
  {
    codigo: "7502001165380",
    descripcion: "RIXOBA CREMA Tópica 1% Tubo c/15 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501573902966",
    descripcion: "NAFICH CREMA 1.0% Tubo c/15.0 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502226294544",
    descripcion: "TERBINAFINA (Alpharma) CREMA 1% TUBO c/15 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "780083148423",
    descripcion: "HUDICLOR CREMA al 1% TUBO c/30 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502227426845",
    descripcion: "POLCRIM GEL 1% Tubo c/15 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501109762088",
    descripcion: "TERBINAFINA (Perrigo) GEL 1% TUBO c/15 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502226291772",
    descripcion: "TERBINAFINA (Alpharma) CREMA 1% TUBO c/20 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502211783275",
    descripcion: "ERBITRAX CREMA 1% TUBO c/15 G. ",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502213042219",
    descripcion: "ZINFHON CREMA al 1% TUBO c/30 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7502211783282",
    descripcion: "ERBITRAX CREMA 1% TUBO c/30 G.",
    formula: "Terbinafina (Crema Topica).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7503002773161",
    descripcion: "ZONCONAX SOLUCION 1% Topica Fco. Atomizador 30 ML.",
    formula: "Terbinafina (Spray Tópico).",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502226294254",
    descripcion: "TERBINAFINA (Alpharma) SOL. Tópica 1% Fco. Atomizador 30 ML.",
    formula: "Terbinafina (Spray Tópico).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7501842901072",
    descripcion: "TERLISGEN c/ 30 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "780083148980",
    descripcion: "HUDICLOR c/28 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "7502211783657",
    descripcion: "ERBITRAX-T c/ 7 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502211783787",
    descripcion: "ERBITRAX-T c/28 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502211783671",
    descripcion: "ERBITRAX-T c/40 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501842900235",
    descripcion: "TERLISGEN c/100 TABS. 250 MG.",
    formula: "Terbinafina (Tabs. Orales).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7501563310436",
    descripcion: "BIOTRICINA c/10 TABS. 250 MG.",
    formula: "Tetraciclina 250mg.",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501258205474",
    descripcion: "LISERTIL c/30 TABS. 2.5 MG.",
    formula: "Tibolona",
    laboratorio: "SERRAL"
  },
  {
    codigo: "75044824",
    descripcion: "TIMOZZARD Sol. Oftalmica 0.5% Fco. Gotero 5 ML.",
    formula: "Timolol",
    laboratorio: "PIZZARD"
  },
  {
    codigo: "75049812",
    descripcion: "TIMOLOL (Opko) SOL. OFT. 0.5% Fco. Gotero 5 ML.",
    formula: "Timolol",
    laboratorio: "OPKO"
  },
  {
    codigo: "7501825300854",
    descripcion: "TRISEPTIL c/8 TABS. 500 MG.",
    formula: "Tinidazol",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "8400007087",
    descripcion: "TOBRAMICINA (Grin) Sol. Oft. Fco. Gotero 15 ML. 3 MG/1 ML.",
    formula: "Tobramicina",
    laboratorio: "GRIN"
  },
  {
    codigo: "75050740",
    descripcion: "TOBRAMICINA (Opko) Sol. Oft. Fco. Gotero 15 ML. 3 MG/1 ML.",
    formula: "Tobramicina",
    laboratorio: "OPKO"
  },
  {
    codigo: "8400005823",
    descripcion: "TOBRAMICINA/DEXAMETASONA (Grin) SOL. OFT. Fco. Gotero 5 ML. 3-1 MG/1 ML.",
    formula: "Tobramicina+Dexametasona (Sol. Oftálmica).",
    laboratorio: "GRIN"
  },
  {
    codigo: "7502001165441",
    descripcion: "SON´SSIMET SOL. Oftálmica Fco. Gotero 5 ML. 3-1 MG/1 ML.",
    formula: "Tobramicina+Dexametasona (Sol. Oftálmica).",
    laboratorio: "SONS"
  },
  {
    codigo: "75050795",
    descripcion: "TOBRAMICINA/DEXAMETASONA (Opko) Ungüento Oft. TUBO c/3.5 G. 3-1 MG/1 G.",
    formula: "Tobramicina+Dexametasona (Ungüento oftálmico).",
    laboratorio: "EXAKTA"
  },
  {
    codigo: "7501130704422",
    descripcion: "E-400 c/90 y 30 CAPS. 400 U.I. (Duo Pack).",
    formula: "Tocofersolán (Vitamina E) 400mg.",
    laboratorio: "GELCAPS"
  },
  {
    codigo: "7501130742493",
    descripcion: "ALFAVIT-E c/30 CAPS. 500 MG.",
    formula: "Tocofersolán (Vitamina E) 500mg.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7506353200263",
    descripcion: "TEFILINB c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7503002773215",
    descripcion: "FICSATOL c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "SUANCA"
  },
  {
    codigo: "7502009746314",
    descripcion: "JANIA c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502223112094",
    descripcion: "QUIMURAL c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7501349023529",
    descripcion: "TOLTERODINA (Amsa) c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502216795051",
    descripcion: "TOLTERODINA (Ultra) c/14 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216795099",
    descripcion: "TOLTERODINA (Ultra) c/28 TABS. 2 MG.",
    formula: "Tolterodina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216805118",
    descripcion: "TOPIRAMATO (Avivia) c/20 TABS.  25 MG.",
    formula: "Topiramato  25mg.",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216796553",
    descripcion: "TOPIRAMATO (Ultra) c/20 TABS.  25 MG.",
    formula: "Topiramato  25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216795976",
    descripcion: "TOPIRAMATO (Ultra) c/60 TABS.  25 MG.",
    formula: "Topiramato  25mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216796003",
    descripcion: "TOPIRAMATO (Ultra) c/20 TABS. 100 MG.",
    formula: "Topiramato 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7502216795228",
    descripcion: "TOPIRAMATO (Ultra) c/60 TABS. 100 MG.",
    formula: "Topiramato 100mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "725742761971",
    descripcion: "ADIOLOL Cja/Fco. c/10 CAPS.  50 MG.",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "SBL"
  },
  {
    codigo: "7501842901010",
    descripcion: "GENCATROL c/10 CAPS.  50 MG.",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "725742762176",
    descripcion: "ADIOLOL Fco. c/60 CAPS.  50 MG.",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "SBL"
  },
  {
    codigo: "7501842901027",
    descripcion: "GENCATROL c/60 CAPS. 50 MG.",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "780083142056",
    descripcion: "VELDROL c/50 CAPS. 50 MG. (2 Pack)",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "COLLINS"
  },
  {
    codigo: "725742762183",
    descripcion: "ADIOLOL Fco. c/60 CAPS.  50 MG. (2 Pack)",
    formula: "Tramadol  50mg. (Tabs. Liberación Inmediata).",
    laboratorio: "SBL"
  },
  {
    codigo: "7502227879801",
    descripcion: "ENDULGEN SOL. Fco. Gotero 10 ML. 100 MG/1 ML. ",
    formula: "Tramadol 100mg. (Sol. Gotas) ",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501349020993",
    descripcion: "TRAMADOL (Amsa) SOL. Fco. Gotero 10 ML. 100 MG/1 ML.",
    formula: "Tramadol 100mg. (Sol. Gotas) ",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009743986",
    descripcion: "SANZADOLL SOL. Fco. Gotero 10 ML. 100 MG/1 ML.",
    formula: "Tramadol 100mg. (Sol. Gotas) ",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825303831",
    descripcion: "DESIGORT SOL. GOTAS Fco. 10 ML. 100 MG/1 ML.",
    formula: "Tramadol 100mg. (Sol. Gotas) ",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501384545598",
    descripcion: "TRAMADOL (Psicofarma) Sol. Iny. c/5 AMPTAS. 100 MG/2 ML.",
    formula: "Tramadol 100mg. (Sol. Inyectable) ",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "725742762190",
    descripcion: "ADIOLOL Cja. c/10 CAPS. 100 MG.",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "725742762121",
    descripcion: "ADIOLOL Fco. c/10 CAPS. 100 MG.",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "725742762138",
    descripcion: "ADIOLOL Fco. c/30 CAPS. 100 MG.",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "725742762145",
    descripcion: "ADIOLOL Fco. c/50 CAPS. 100 MG.",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "7257427621698",
    descripcion: "ADIOLOL Fco. c/60 CAPS. 100 MG.",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "7257427621452",
    descripcion: "ADIOLOL Fco. c/50 CAPS. 100 MG. (2 Pack)",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "7257427621704",
    descripcion: "ADIOLOL Fco. c/60 CAPS. 100 MG. (2 Pack)",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "7257427801076",
    descripcion: "RELIVIUM Fco. c/60 TABS. 100 MG. (2 Pack).",
    formula: "Tramadol 100mg. (Tab/Caps. Liberación Inmediata). ",
    laboratorio: "SBL"
  },
  {
    codigo: "7501384545475",
    descripcion: "TRAMADOL (Psicofarma) c/10 TABS. L.P. 100 MG.",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7503044182075",
    descripcion: "RELIVIUM LP Fco. c/10 TABS. Lib. Prolongada 100 MG. ",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "SBL"
  },
  {
    codigo: "7503044182044",
    descripcion: "RELIVIUM LP Cja. c/10 TABS. Lib. Prolongada 100 MG.",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "SBL"
  },
  {
    codigo: "7501842900884",
    descripcion: "GENCATROL RTD c/10 TABS. L.P. 100 MG.",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7503044182051",
    descripcion: "RELIVIUM LP Fco. c/60 TABS. Lib. Prolongada 100 MG. ",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "SBL"
  },
  {
    codigo: "7501842900945",
    descripcion: "GENCATROL RTD c/60 TABS. L.P. 100 MG.",
    formula: "Tramadol 100mg. (Tabs. Liberación Prolongada).",
    laboratorio: "GENETICA"
  },
  {
    codigo: "7257427629014",
    descripcion: "RELIVIUM LP Fco. c/60 TABS. Lib. Prolongada 200 MG.",
    formula: "Tramadol 200mg. (Tabs. Liberación Prolongada).",
    laboratorio: "SBL"
  },
  {
    codigo: "7506331300718",
    descripcion: "AUDOR c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "7502004402437",
    descripcion: "LARACINTOL c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "OFFENBACH"
  },
  {
    codigo: "7501109753888",
    descripcion: "TRAMADOL/PARACETAMOL (Perrigo) c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7502223112360",
    descripcion: "KALEQUIM c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502227876015",
    descripcion: "ROMINSOL c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502208894922",
    descripcion: "FEXIBRUL c/20 TABS. 37.5/325 MG. ",
    formula: "Tramadol+Paracetamol",
    laboratorio: "BRULUAGSA"
  },
  {
    codigo: "7501075727463",
    descripcion: "CLOTRACEMY c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501075723489",
    descripcion: "CLOTRACEMY c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502009746215",
    descripcion: "SANZADOLL DUO c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501349029415",
    descripcion: "TRAMADOL/PARACETAMOL (Amsa) c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "AMSA"
  },
  {
    codigo: "7501277028924",
    descripcion: "TRAMADOL/PARACETAMOL (Apotex) c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277032396",
    descripcion: "TRAMADOL/PARACETAMOL (Apotex) c/20 TABS. 37.5/325 MG. (2 Pack)",
    formula: "Tramadol+Paracetamol",
    laboratorio: "APOTEX"
  },
  {
    codigo: "7501277028979",
    descripcion: "MINOFEDRAL c/20 TABS. 37.5/325 MG.",
    formula: "Tramadol+Paracetamol",
    laboratorio: "APOPHARMA"
  },
  {
    codigo: "7502259892410",
    descripcion: "VINAGRE DE MANZANA/ÁCIDO FÓLICO/VITAMINA B12 Fco. c/30 GOMITAS 3 G.",
    formula: "Tratamiento para control y pérdida de peso.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501590288432",
    descripcion: "GOZANA c/60 Gomitas Masticables 3 G.",
    formula: "Tratamiento para control y pérdida de peso.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502299970307",
    descripcion: "APPLE DTX Fibra Dietética (Dr. Will) Sabor MANZANA VERDE Fco. 250 G.",
    formula: "Tratamiento para control y pérdida de peso.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502223111066",
    descripcion: "RANDOMIXAL Sol. Oftalmica Fco. Gotero 0.004% 2.5 ML.",
    formula: "Travoprost",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502231320924",
    descripcion: "TRAVOPROST (Micromex) SOL. Oft. Fco. Gotero 2.5 ML. 0.04 MG/1 ML.",
    formula: "Travoprost",
    laboratorio: "MICRO "
  },
  {
    codigo: "75047948",
    descripcion: "TRAVOPROST (Opko) SOL. Oft. Fco. Gotero 2.5 ML. 0.04 MG/1 ML. ",
    formula: "Travoprost",
    laboratorio: "OPKO"
  },
  {
    codigo: "7501563381764",
    descripcion: "BIOVITOL-C CREMA Tubo c/20 G. 0.05 G/100 G.",
    formula: "Tretinoína (Ácido retinoico) 0.05%",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501563380415",
    descripcion: "TRETINOÍNA (Randall) CREMA 0.05% Tubo c/20 G.",
    formula: "Tretinoína (Ácido retinoico) 0.05%",
    laboratorio: "RANDALL"
  },
  {
    codigo: "7501836002020",
    descripcion: "QUERATAL CREMA 0.05% Tubo c/20 G.",
    formula: "Tretinoína (Ácido retinoico) 0.05%",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7502009748035",
    descripcion: "TINITREND CREMA 0.05% Tubo c/30 G.",
    formula: "Tretinoína (Ácido retinoico) 0.05%",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009747410",
    descripcion: "TINITREND CREMA 0.05% Tubo c/40 G.",
    formula: "Tretinoína (Ácido retinoico) 0.05%",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749469",
    descripcion: "TRIBENÓSIDO/LIDOCAÍNA (Maver) CREMA RECTAL 5-2% Tubo c/30 G.",
    formula: "Tribenósido+Lidocaína (Crema Rectal)",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501825300373",
    descripcion: "ESPABION SUSP. Fco. 100 ML. 2 G/100 ML.",
    formula: "Trimebutina (Susp. Junior)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501825300366",
    descripcion: "ESPABION SUSP. GOTAS Pediátricas Fco. 30 ML. 2 G/100 ML.",
    formula: "Trimebutina (Susp. Pediátrica)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501836002969",
    descripcion: "CINEPRAC c/20 TABS. 200 MG.",
    formula: "Trimebutina (Tabs. Orales)",
    laboratorio: "LIFERPAL"
  },
  {
    codigo: "7501825302599",
    descripcion: "ESPABION c/20 TABS. 200 MG.",
    formula: "Trimebutina (Tabs. Orales)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501825300946",
    descripcion: "ESPABION c/40 TABS. 200 MG.",
    formula: "Trimebutina (Tabs. Orales)",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7502009749148",
    descripcion: "TRIMEBUTINA/SIMETICONA (Maver) SUSP. Pediátrico Fco. 26 ML. 0.60 G/0.60 G.",
    formula: "Trimebutina+Simeticona (Susp. Pediátrica).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749162",
    descripcion: "TRIMEBUTINA/SIMETICONA (Maver) c/20 COMPS. 100/37.5 MG.",
    formula: "Trimebutina+Simeticona 100/37.5mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009749155",
    descripcion: "TRIMEBUTINA/SIMETICONA (Maver) c/24 COMPS. 200/75 MG.",
    formula: "Trimebutina+Simeticona 200/75mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501299379110",
    descripcion: "TRIMETOPRIMA/SULFAMETOXAZOL (Pharmagen) SUSP. Fco.120 ML. 40-200 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7501563310382",
    descripcion: "BIOPRIM SUSP. Fco. 120 ML. 0.8-4.0 G/100 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7502209810082",
    descripcion: "BATERAL SUSP. Fco. 120 ML. 0.800-4.000 G/100 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7503000422511",
    descripcion: "BACTIVER SUSP. Fco. 120 ML. 200-40 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7503003134039",
    descripcion: "THRIAZOL-S SUSP. Fco. 120 ML. 40-200 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503004908837",
    descripcion: "TRIMETOPRIMA/SULFAMETOXAZOL (Alpharma) SUSP. Fco. 120 ML. 40-200 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7502001165564",
    descripcion: "BACTROPIN SUSP. Fco. 120 ML. 40-200 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501825300625",
    descripcion: "OCTIBAN SUSP. Fco. 100 ML. 40-200 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol  40/200mg. (Susp. Oral).",
    laboratorio: "DEGORT'S"
  },
  {
    codigo: "7501573900313",
    descripcion: "BISULTRIM c/20 TABS. 80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502209810051",
    descripcion: "BATERAL Cja/Fco. c/20 TABS. 400/80 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501563370379",
    descripcion: "BIOPRIM c/20 TABS. 80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "BIORESEARCH"
  },
  {
    codigo: "7501537102449",
    descripcion: "SOLTRIM c/20 TABS. 80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "BRULUART"
  },
  {
    codigo: "7502226291918",
    descripcion: "TRIMETOPRIMA/SULFAMETOXAZOL (Alpharma) c/20 TABS. 80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "ALPHARMA"
  },
  {
    codigo: "7503000422238",
    descripcion: "BACTIVER c/20 TABS. 400/80 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7501385490279",
    descripcion: "ORMOPRIM c/20 TABS. 80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7502001165526",
    descripcion: "BACTROPIN c/20 TABS.  80/400 MG.",
    formula: "Trimetoprima+Sulfametoxazol  80/400mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7503000422283",
    descripcion: "BACTIVER-F c/14 TABS. 800/160 MG.",
    formula: "Trimetoprima+Sulfametoxazol 160/800mg. (Tabs. Orales).",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502001169289",
    descripcion: "BACTROPIN c/14 TABS. 160/800 MG.",
    formula: "Trimetoprima+Sulfametoxazol 160/800mg. (Tabs. Orales).",
    laboratorio: "SONS"
  },
  {
    codigo: "7501109763306",
    descripcion: "TRIMETOPRIMA/SULFAMETOXAZOL (Perrigo) c/14 TABS. 160/800 MG.",
    formula: "Trimetoprima+Sulfametoxazol 160/800mg. (Tabs. Orales).",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501385494499",
    descripcion: "MAXTRIM-F c/14 TABS. 160/800 MG.",
    formula: "Trimetoprima+Sulfametoxazol 160/800mg. (Tabs. Orales).",
    laboratorio: "HORMONA"
  },
  {
    codigo: "7502003380712",
    descripcion: "BROGAMAX c/14 TABS. 160/800/30 MG.",
    formula: "Trimetoprima+Sulfametoxazol+Ambroxol",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7502003380705",
    descripcion: "BROGAMAX SUSP. Fco. 120 ML. 7.5-200-40 MG/5 ML.",
    formula: "Trimetoprima+Sulfametoxazol+Ambroxol",
    laboratorio: "RAYERE"
  },
  {
    codigo: "7501258215756",
    descripcion: "TISSUSAN CREMA TÓPICA Tubo c/15 G. 15-1 %/100 G.",
    formula: "Triticum vulgare+Fenoxietanol (Crema tópica)",
    laboratorio: "ADVAITA"
  },
  {
    codigo: "7501299308738",
    descripcion: "VALACICLOVIR (Pharmagen) c/10 COMPS. 500 MG.",
    formula: "Valaciclovir",
    laboratorio: "PHARMAGEN"
  },
  {
    codigo: "7501384542191",
    descripcion: "VALPROATO de MAGNESIO (Psicofarma) SOL. Gotas Fco. 40 ML. 200 MG/1 ML.",
    formula: "Valproato de magnesio (Sol. Gotas)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501471888324",
    descripcion: "TRANKITEC-S SOLUCIÓN Gotas Fco. 40 ML. 200 MG/1 ML.",
    formula: "Valproato de magnesio (Sol. Gotas)",
    laboratorio: "TECNOFARMA"
  },
  {
    codigo: "7501384541729",
    descripcion: "VALPROATO de MAGNESIO (Psicofarma) SUSP. Fco. 100 ML. 4 G/100 ML.",
    formula: "Valproato de magnesio (Susp. Oral)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501384541200",
    descripcion: "VALPROATO de MAGNESIO (Psicofarma) c/40 TABS. 200 MG.",
    formula: "Valproato de magnesio 200mg. (Tabs. Orales)",
    laboratorio: "PSICOFARMA"
  },
  {
    codigo: "7501471887969",
    descripcion: "TRANKITEC c/40 TABS. 200 MG.",
    formula: "Valproato de magnesio 200mg. (Tabs. Orales)",
    laboratorio: "TECNOFARMA"
  },
  {
    codigo: "7502227875452",
    descripcion: "AVALRAAM c/30 COMPS. 80 MG.",
    formula: "Valsartán  80mg.",
    laboratorio: "RAAM"
  },
  {
    codigo: "7502216797369",
    descripcion: "VALSARTÁN (Ultra) c/30 COMPS. 80 MG.",
    formula: "Valsartán  80mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7506442703361",
    descripcion: "VALSARTÁN (Camber) c/30 TABS. 80 MG.",
    formula: "Valsartán  80mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "656599044514",
    descripcion: "VACTORY Caja c/30 TABS.  80 MG.",
    formula: "Valsartán  80mg.",
    laboratorio: "VICTORY"
  },
  {
    codigo: "7502009744839",
    descripcion: "VERSALVER c/30 COMPS.  80 MG.",
    formula: "Valsartán  80mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502009744853",
    descripcion: "VERSALVER c/14 COMPS. 160 MG.",
    formula: "Valsartán 160mg.",
    laboratorio: "MAVER"
  },
  {
    codigo: "7506442704863",
    descripcion: "VALSARTÁN/HIDROCLOROTIAZIDA (Camber) c/28 TABS. 160/12.5 MG.",
    formula: "Valsartán+Hidroclorotiazida 160/12.5mg.",
    laboratorio: "CAMBER"
  },
  {
    codigo: "7709990697803",
    descripcion: "VANCOMICINA (Vitalis) Sol. Iny. c/1 FCO. AMP. 500 MG/10 ML.",
    formula: "Vancomicina 500mg.",
    laboratorio: "VITALIS"
  },
  {
    codigo: "7502213042240",
    descripcion: "YECTAFHAL Sol. Iny. c/1 FCO. AMP. 500 MG/10 ML.",
    formula: "Vancomicina 500mg.",
    laboratorio: "FARMA.HISP."
  },
  {
    codigo: "7506453900377",
    descripcion: "VARAMYN Sol. Iny. c/1 FCO. AMP. 500 MG.",
    formula: "Vancomicina 500mg.",
    laboratorio: "ZURICH"
  },
  {
    codigo: "7506484500119",
    descripcion: "VENDA-STICK Auto adherente (Color Piel)  5cm. (2") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban)  5 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500133",
    descripcion: "VENDA-STICK Auto adherente (Color Negro)  5cm. (2") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban)  5 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500157",
    descripcion: "VENDA-STICK Auto adherente (Color Piel)  7.5cm. (3") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban)  7.5 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500171",
    descripcion: "VENDA-STICK Auto adherente (Color Negro)  7.5cm. (3") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban)  7.5 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500218",
    descripcion: "VENDA-STICK Auto adherente (Color Negro) 10cm. (4") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban) 10 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506484500195",
    descripcion: "VENDA-STICK Auto adherente (Color Piel) 10cm. (4") x 4.5m. c/1 Pza.",
    formula: "Venda elástica autoadherible (Tipo coban) 10 x 4.5",
    laboratorio: "CODIFARMA"
  },
  {
    codigo: "7506331301920",
    descripcion: "EXIDENA c/10 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "AUROVIDA"
  },
  {
    codigo: "8902220111073",
    descripcion: "VENLANFAXINA (Torrent) c/10 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "TORRENT"
  },
  {
    codigo: "7501075721003",
    descripcion: "BELANOVAG c/10 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7501349025530",
    descripcion: "VENLAFAXINA (Amsa) c/20 CAPS. Lib. Pgda. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502227876824",
    descripcion: "RALODIM c/10 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501075721157",
    descripcion: "BELANOVAG c/20 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "NOVAG"
  },
  {
    codigo: "7502009745386",
    descripcion: "LINEXEL c/20 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502225094770",
    descripcion: "BENOLAXE c/20 CAPS. L.P. 75 MG.",
    formula: "Venlafaxina  75mg",
    laboratorio: "LANDSTEINER"
  },
  {
    codigo: "7502216790544",
    descripcion: "VILDAGLIPTINA (Ultra) c/28 COMPS. 50 MG.",
    formula: "Vildagliptina",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078007",
    descripcion: "VILDAGLIPTINA (Avivia) c/28 COMPS. 50 MG.",
    formula: "Vildagliptina",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502216790896",
    descripcion: "VILDAGLIPTINA/METFORMINA (Ultra)  c/30 COMPS. 50/500 MG.",
    formula: "Vildagliptina+Metformina 50/ 500mg.",
    laboratorio: "ULTRA"
  },
  {
    codigo: "7503049078038",
    descripcion: "VILDAGLIPTINA/METFORMINA (Avivia) c/60 COMPS. 50/850 MG.",
    formula: "Vildagliptina+Metformina 50/ 850mg",
    laboratorio: "AVIVIA"
  },
  {
    codigo: "7502259892120",
    descripcion: "VITAMIL SOLUCIÓN Oral c/10 AMPTAS. 5 ML.",
    formula: "Vitamina B12+Minerales+Arándano",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502223110014",
    descripcion: "QUIMPAPHIL SOLUCIÓN Oral c/10 AMPTAS. 5 ML.",
    formula: "Vitamina B12+Minerales+Arándano",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502223110175",
    descripcion: "QUIMPAPHIL SOLUCIÓN Oral c/2x10 AMPTAS. 5 ML. (Bonus Pack)",
    formula: "Vitamina B12+Minerales+Arándano",
    laboratorio: "QUIMPHARMA"
  },
  {
    codigo: "7502299970741",
    descripcion: "VITAMINA-C Facial (Dr. Will R. Lax) c/30 CAPS. 650 MG.",
    formula: "Vitamina C (Cápsulas faciales).",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7502009743511",
    descripcion: "ANIMALIN-C c/80 TABS. Masticables 480 MG.",
    formula: "Vitamina C en combinación",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501590288234",
    descripcion: "ZINOVID C3 POLVO c/10 SOBRES 8 G.",
    formula: "Vitamina C en combinación",
    laboratorio: "CMD"
  },
  {
    codigo: "781584367498",
    descripcion: "BIO-ORBI-C c/90 TABS. 700 MG.",
    formula: "Vitamina C en combinación",
    laboratorio: "BIOMEP"
  },
  {
    codigo: "7502008986483",
    descripcion: "GENEVIT C-KID c/60 TABS. Masticables 500 MG.",
    formula: "Vitamina C en combinación",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "803288480775",
    descripcion: "BIOGRICIN c/30 TABS. Masticables Sab. Naranja 1 G.",
    formula: "Vitamina C en combinación",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "7501590284595",
    descripcion: "GUMMY GUARD c/60 Gomitas Masticables 2.2 G.",
    formula: "Vitamina C en combinación",
    laboratorio: "CMD"
  },
  {
    codigo: "7502008986490",
    descripcion: "GENEVIT C c/60 TABS. 500 MG.",
    formula: "Vitamina C en combinación",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "637420513058",
    descripcion: "KARIM C POLVO Fco. c/288.8 G.",
    formula: "Vitamina C en combinación",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502259891413",
    descripcion: "PROSHOT KIDS Sab. Naranja Fco. 60 ML. 50-60-10.5 MG/60 ML.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259891437",
    descripcion: "PROSHOT Sab. Mandarina Fco. 60 ML. 200-60-15 MG/60 ML.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259891963",
    descripcion: "XTRA C Junior JARABE Sin Azúcar Fco. c/240 ML.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7503020089862",
    descripcion: "C-VYM c/30 TABS Masticables 1000 MG.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7503020089503",
    descripcion: "C-VYM POLVO Efervescente c/10 SOBS. 9 G.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7503020089770",
    descripcion: "C-VYM POLVO Efervescente CERO AZÚCAR c/10 SOBS. 9 G.",
    formula: "Vitamina C+Betaglucanos en combinación.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259890898",
    descripcion: "VITREX E 400 c/30 CAPS. 750 MG.",
    formula: "Vitamina E (Suplemento Alimenticio)",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008989354",
    descripcion: "REG 200 (Vitamina-E 500) c/30 CAPS. 1200 MG.",
    formula: "Vitamina E (Suplemento Alimenticio)",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502009744105",
    descripcion: "ANIMALIN A-D-C Sol. Gotas 30 ML. 1333 UI-35 MG-400 UI/1 ML.",
    formula: "Vitaminas ACD. (Suplemento alimenticio) Sol. Gotas.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "803288480409",
    descripcion: "PHARVIT SOL. Infantil Fco. 30 ML. 2500 UI/30 MG/200 UI.",
    formula: "Vitaminas ACD. (Suplemento alimenticio) Sol. Gotas.",
    laboratorio: "BQM"
  },
  {
    codigo: "7502259892212",
    descripcion: "VITERAL ADC Sol. Ingerible c/10 AMPTAS. 5 ML.",
    formula: "Vitaminas ACD. (Suplemento alimenticio) Sol. ingerible.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502211789833",
    descripcion: "VIT ACTIVE MEN c/30 CAPS. 1.3 G.",
    formula: "Vitaminas y Minerales con formulación especial para el hombre.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7502299970802",
    descripcion: "MATTER MOM c/30 CAPS. 500 MG.",
    formula: "Vitaminas y Minerales con formulación especial para la Mujer Activa.",
    laboratorio: "DR. WILL   "
  },
  {
    codigo: "7501478315939",
    descripcion: "ROCAVIT FEM c/30 CAPS. 1.07 G.",
    formula: "Vitaminas y Minerales con formulación especial para la Mujer Activa.",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502211789826",
    descripcion: "VIT ACTIVE FEM c/30 CAPS. 1.3 G.",
    formula: "Vitaminas y Minerales con formulación especial para la Mujer Activa.",
    laboratorio: "LOEFFLER"
  },
  {
    codigo: "7501130742134",
    descripcion: "GELCAVIT Gem c/30 CAPS. 1.28 G.",
    formula: "Vitaminas y Minerales con formulación especial para la Mujer Activa.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502209810143",
    descripcion: "GLUTALLEN SOLUCION Fco. 340 ML. ",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502209810105",
    descripcion: "DECANOBRAL SOLUCIÓN Fco. 340 ML.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7502009741265",
    descripcion: "VITREX Q-10 c/30 CAPS. 1.65 G.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7500326108747",
    descripcion: "VITABIOM Q10 c/30 CAPS. 720 MG.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7501130711642",
    descripcion: "GELCAVIT Q-10 c/30 CAPS. 1.34 G.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502008989095",
    descripcion: "SOLOTARE Q-10 c/30 CAPS. 1.2 G.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502227426616",
    descripcion: "REVITRON PLEX c/30 CÁPSULAS. (3 Pack)",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "VITAE"
  },
  {
    codigo: "7502001169197",
    descripcion: "WILVIT c/30 CAPSULAS.",
    formula: "Vitaminas y Minerales para Adultos con exceso de trabajo fisico y mental.",
    laboratorio: "SONS"
  },
  {
    codigo: "7502259891048",
    descripcion: "VITREX 50+ c/30 CAPS. 1.8 G.",
    formula: "Vitaminas y Minerales para Adultos mayores de 50 años.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "637420114002",
    descripcion: "KARIM SENGER SOLUCIÓN Sabor Uva Fco. 240 ML.",
    formula: "Vitaminas y Minerales para Adultos mayores de 50 años.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "637420614755",
    descripcion: "KARIM SENGER 50+ c/60 TABS. 550 MG.",
    formula: "Vitaminas y Minerales para Adultos mayores de 50 años.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502008989064",
    descripcion: "SOLOTARE DIAMANTE c/30 CAPS. 1.2 G.",
    formula: "Vitaminas y Minerales para Adultos mayores de 50 años.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7503002615577",
    descripcion: "POLYBION c/30 TABLETAS.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7502259890010",
    descripcion: "MAXI-B GS c/30 CAPS. 570 MG.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7503000422153",
    descripcion: "VITREX G c/30 CAPS. 1.55 G.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "803288480218",
    descripcion: "GERAMIN B-12 ELIXIR 340 ML.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "803288480195",
    descripcion: "GERAMIN B-12 Cja. c/30 CAPS. 900 MG.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "BIOSALUD"
  },
  {
    codigo: "803288480188",
    descripcion: "GERAMIN B-12 c/50 CAPS. 900 MG.",
    formula: "Vitaminas y Minerales para complementar la Alimentacion.",
    laboratorio: "BQM"
  },
  {
    codigo: "7503002615522",
    descripcion: "HEMOINFANT SOL. INFANTIL Fco. Gotero 60 ML. ",
    formula: "Vitaminas y minerales para el tratamiento y prevención de la anemia (Infantil).",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501130712359",
    descripcion: "MAXIVIT Caja c/30 CÁPS. 1.29 G.",
    formula: "Vitaminas y Minerales para la etapa Adolescente.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502259891819",
    descripcion: "VITTEN c/30 CÁPSULAS 1.7 G.",
    formula: "Vitaminas y Minerales para la etapa de Gestación CON OMEGAS.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259891222",
    descripcion: "VITREX N c/30 CAPS. 1.8 G.",
    formula: "Vitaminas y Minerales para la etapa de Gestación CON OMEGAS.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7500326108754",
    descripcion: "BIOMIVIT-400 c/30 CAPS. 545 MG.",
    formula: "Vitaminas y Minerales para la etapa de Gestación CON OMEGAS.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7501130713868",
    descripcion: "GELCAVIT 9M c/30 CAPS. 1.59 G.",
    formula: "Vitaminas y Minerales para la etapa de Gestación.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502008989057",
    descripcion: "SOLOTARE 9M c/30 CAPS. 1.2 G.",
    formula: "Vitaminas y Minerales para la etapa de Gestación.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502259892342",
    descripcion: "SILVERFEM c/30 CAPS. 922 MG. ",
    formula: "Vitaminas y Minerales para la etapa de Menopausia.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "803288480652",
    descripcion: "BIONADAL c/60 TABS. 1.58 G.",
    formula: "Vitaminas y Minerales para la etapa de Menopausia.",
    laboratorio: "BQM"
  },
  {
    codigo: "7503181041884",
    descripcion: "PLENIFORM 40 c/30 TABS. 500 MG.",
    formula: "Vitaminas y Minerales para la etapa de Menopausia.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7501130709847",
    descripcion: "GELCAVIT Mulier c/30 CAPS. 200 MG.",
    formula: "Vitaminas y Minerales para la etapa de Menopausia.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7502008989088",
    descripcion: "SOLOTARE FEM c/30 CAPS. 1.2 G.",
    formula: "Vitaminas y Minerales para la etapa de Menopausia.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7502209810136",
    descripcion: "GERIAL B-12 ELIXIR Fco. 340 ML.",
    formula: "Vitaminas y Minerales para la etapa Geriatrica.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7506624900656",
    descripcion: "GERIAL B-12 ELIXIR Fco. 340 ML.",
    formula: "Vitaminas y Minerales para la etapa Geriatrica.",
    laboratorio: "AVITUS"
  },
  {
    codigo: "7501130713851",
    descripcion: "GELCAVIT Platinum c/30 CAPS. 1.39 G.",
    formula: "Vitaminas y Minerales para la etapa Geriatrica.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7500326106989",
    descripcion: "VITEM 3RA c/30 CAPS. 545 MG.",
    formula: "Vitaminas y Minerales para la etapa Geriatrica.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259892311",
    descripcion: "ANIMALIN KIDS JARABE Fco. 120 ML.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501130713547",
    descripcion: "GELCAVIT Colors c/30 CAPS. 0.62 G.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "7503002615553",
    descripcion: "LIBENY JARABE Fco. 240 ML. ",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "NUCITEC"
  },
  {
    codigo: "7501590285325",
    descripcion: "BIG COMPLEX Yummi JARABE Fco. 240 ML.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "CMD"
  },
  {
    codigo: "7501590285226",
    descripcion: "MULTIMAX KID JARABE Sabor Sandia Fco. 240 ML.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502008986636",
    descripcion: "MULKID JARABE Sabor NARANJA 240 ML.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7501590281495",
    descripcion: "ALIGOMITAS c/60 GOMITAS MAST. 3.0 G.   ",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "CMD"
  },
  {
    codigo: "714908100686",
    descripcion: "DINAMAX Junior JARABE 250 ML.",
    formula: "Vitaminas y Minerales para la etapa Infantil.",
    laboratorio: "SALUD NATL."
  },
  {
    codigo: "7503020089657",
    descripcion: "DIALAVIT c/30 CAPS. 877 MG.",
    formula: "Vitaminas y Minerales para la salud Cardiovascular.",
    laboratorio: "BIOMIRAL"
  },
  {
    codigo: "7502259891246",
    descripcion: "MAXI-B D c/30 TABS. 510 MG.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259890294",
    descripcion: "VITREX Diab c/30 CAPS. 1.72 G.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502008986629",
    descripcion: "DIAMOL c/30 CAPS. 500 MG.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7501590211225",
    descripcion: "DIBENEL c/30 CAPS. 0.940 G.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502227421772",
    descripcion: "ANAVIT Diabéticos c/30 CÁPSULAS.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "GELpharma"
  },
  {
    codigo: "7501590282829",
    descripcion: "DIBENEL Max c/30 CAPS. 1.35 G.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "CMD"
  },
  {
    codigo: "7502008989101",
    descripcion: "DIAMOL ADICIONADO c/COLÁGENO c/30 CAPS. 1.2 G.",
    formula: "Vitaminas y Minerales para la salud del Diabetico.",
    laboratorio: "HD MORELIA"
  },
  {
    codigo: "7501130709830",
    descripcion: "GELCAVIT HO c/30 CAPS. 1.13 G.",
    formula: "Vitaminas y Minerales para la salud Sexual.",
    laboratorio: "PHARMACAPS"
  },
  {
    codigo: "637420614731",
    descripcion: "TES 2 FUEL c/60 TABS. 600 MG. ",
    formula: "Vitaminas y Minerales para la salud Sexual.",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502259891079",
    descripcion: "V-LUTEX c/30 TABS. 575 MG.",
    formula: "Vitaminas y Minerales para la salud Visual.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7502259891840",
    descripcion: "VISIMAN c/30 CAPS. 0.642 G.",
    formula: "Vitaminas y Minerales para la salud Visual.",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501590285608",
    descripcion: "ENFO-K c/30 CAPS. 0.642 G.",
    formula: "Vitaminas y Minerales para la salud Visual.",
    laboratorio: "CMD"
  },
  {
    codigo: "637420614700",
    descripcion: "KARIM INMU+ c/60 TABS. 600 MG.",
    formula: "Vitaminas y Minerales para reforzar el sistema inmunológico",
    laboratorio: "SOLAR"
  },
  {
    codigo: "7502259892366",
    descripcion: "ANIMALÍN WELL Frasco c/30 Gomitas Masticables 2.5 G.",
    formula: "Vitaminas y Minerales para reforzar el sistema inmunológico",
    laboratorio: "NATUREX"
  },
  {
    codigo: "7501109750184",
    descripcion: "WARFARINA (Perrigo) c/25 TABS. 5 MG.",
    formula: "Warfarina",
    laboratorio: "PERRIGO"
  },
  {
    codigo: "7501590288838",
    descripcion: "VIZANO c/30 CAPS. 50 MG. ",
    formula: "Zinc 50mg.",
    laboratorio: "CMD"
  },
  {
    codigo: "75049799",
    descripcion: "ZINC/FENILEFRINA (Opko) Sol. Oft. Fco. Gotero 15 ML. 2.5-1.2 MG/1 ML.",
    formula: "Zinc+Fenilefrina",
    laboratorio: "OPKO"
  },
  {
    codigo: "7506313800199",
    descripcion: "BRAINZOL c/2 TABS. Orodispersables 2.5 MG.",
    formula: "Zolmitriptano",
    laboratorio: "RAAM"
  },
  {
    codigo: "7501349023543",
    descripcion: "ZOLMITRIPTANO (Amsa) c/2 TABS. Dispersables 2.5 MG.",
    formula: "Zolmitriptano",
    laboratorio: "AMSA"
  },
  {
    codigo: "7502009746390",
    descripcion: "MAGOZ c/2 TABS. Orodispersables 2.5 MG.",
    formula: "Zolmitriptano",
    laboratorio: "MAVER"
  },
  {
    codigo: "7502216805446",
    descripcion: "ZOLMITRIPTANO (Ultra) c/2 TABS. Orodispersables 2.5 MG.",
    formula: "Zolmitriptano",
    laboratorio: "ULTRA"
  },
];