let hlavtem = 0
let modelovka = 0
let sModelovky
let nos1r = 0
let nos2r = 0
let nos3r = 0
let nos4r = 0
let rNos1
let rNos2
let rNos3
let rNos4

//Definovanie prvkov dokumentu

const dat = {
    nos: {
        nadpis: document.getElementById('nnad'),
        text: document.getElementById('ntex')
    },
    ved: {
        nadpis: document.getElementById('vnad'),
        text: document.getElementById('vtex')
    },
    mod: {
        nadpis: document.getElementById('mnad'),
        text: document.getElementById('mtex')
    },
    btn: document.getElementById('btn')
}

//Definovanie modelových situácii

let modelovky = [
    {
        nadpis: 'Modelová situácia č. 1',
        text: 'Si vodcom tábora. Všimneš si, že si deti (12-roční a starší) začínajú doberať 16-ročného radcu, lebo je vraj „teploš“, a nahlas komentujú jeho správanie ako „zženštilé“. Počas návštevného dňa, kedy vás prišlo pozrieť aj zopár rodičov detí, sa v rámci turnaja v ringu jeden 14-ročný skaut ohradí, že on nebude s „buzerantom“ v tíme a odíde na okraj ihriska. Incident si všimli aj rodičia, ktorí turnaj pozorovali. Keď sa na záver dňa lúčiš s jedným rodičovským párom, na rovinu sa ťa opýtajú, či si myslíš, že je bezpečné, aby homosexuál radcoval deťom.'
    },
    {
        nadpis: 'Modelová situácia č. 2',
        text: 'Si vodcom oddielu. Vo vašom meste sa uskutočnil malý festival na námestí. V tom čase mladší roveri prechádzali mestom z oddielovky domov, niektorí sa spontánne pridali k festivalu. Lokálne médiá, ktoré informovali o festivale, použili fotografie, na ktorých sú zachytení tvoji členovia oddielu (17 – 18-roční) so skautskými šatkami na krku a pivom v rukách, v dave podnapitých mladých ľudí s cigaretami. Ozvalo sa ti niekoľko prekvapených rodičov skautov, ale aj ďalšie lokálne médiá, ktoré sa chytili fotografie a plánujú vydať článok na túto tému.'
    },
    {
        nadpis: 'Modelová situácia č. 3',
        text: 'Si vodcom, ktorý je zodpovedný za projekt a vyúčtovanie financií získaných z grantu niektorej verejne činnej nadácie. Po odovzdaní vyúčtovania zistíš, že jeden z členov tvojho tímu ti do účtovníctva predložil falošné účtovné doklady za sumu cca 600 €. Podklady sú už odovzdané nadácii. 17-ročný ranger, ktorý to urobil, sa ti priznal a peniaze, ktoré takto „ušetril“, ti odovzdal.'
    },
    {
        nadpis: 'Modelová situácia č. 4',
        text: 'Si vodcom oddielu, ktorý má klubovňu v susedstve s niekoľkými prevádzkami drobných podnikateľov. S väčšinou z nich vychádzate úplne bez problémov a ty ako vodca sa snažíš, aby ste boli pre dom aj prínosom, a tak sa staráte o okolie budovy alebo v zime odhŕňate sneh. Jeden z vašich susedov však na to má iný názor. Je presvedčený, že deti hlukom rušia jeho zákazníkov, nechávajú na chodbe neporiadok a hlavne mu vadí, že deti sú často v klubovni bez dozoru dospelého. Podal na vás sťažnosť na MiÚ, ktorý je majiteľom nehnuteľnosti a klubovňu vám prenajíma. Kontrola z mestského úradu, ktorá mala preveriť skutočný stav vecí, však prišla v čase, keď v klubovni nebol nikto z dospelých činovníkov. Kontrola zistila viaceré pochybenia v oblasti porušenia zmluvných podmienok (nemali ste platnú zmluvu o odvoze odpadu), hygienických predpisov (v sklade boli nespotrebované potraviny z poslednej akcie a zjavne sa začínali kaziť) aj bezpečnostných predpisov (chýbal vám požiarny evakuačný plán aj hasiace prístroje). Pani, ktorá viedla kontrolu, bola zjavne nahnevaná a vo svojej správe bude mestskému zastupiteľstvu navrhovať prehodnotiť zmluvu o prenájme priestorov.'
    },
    {
        nadpis: 'Modelová situácia č. 5',
        text: 'Mesto vás požiadalo, či by ste si na jednej z ich akcií nevzali na starosť niekoľko stanovísk s hrami. S mestom ste sa zároveň dohodli, že to využijete ako príležitosť pre nábor nových členov a tak ste pripravili typické skautské hry a aktivity. Boli ste naozaj dosť dobrí a výsledkom bolo, že na najbližšiu oddielovku vám prišlo 23 nových členov (vo veku 8 až 13 rokov, nakoľko ste na akcii nešpecfikovali, na ktorú vekovú kategóriu sa zameriavate). Ty ako vodca oddielu však máš voľného len 1 radcu a asi 4 trochu skúsenejších skautov (síce po nováčikovskej skúške, ale sú menej ako 2 roky v skautingu, všetci štyria majú 12 rokov). Si vodcom skautského koedukovaného oddielu (skauti a skautky vo veku cca 11 až 14 rokov).'
    },
    {
        nadpis: 'Modelová situácia č. 6',
        text: 'Si vodca tábora (tábor má spolu cca. 60 účastníkov). Asi v polovici tábora začínaš pozorovať, že sa v rámci vedenia tábora (oddieloví vodcovia, tvoj zástupca, kuchár, programoví vedúci…) začínajú deliť do dvoch skupiniek, pričom jedna skupina začína zo všetkého, čo nevyjde, viniť druhú skupinu. Konflikt vyvrcholí na večernej porade, keď oddielový vodca L. zistí, že tvoj zástupca bez toho, aby niekoho informoval, dal jednému z členov oddielu L. mobil, aby mohol člen zavolať rodičom, lebo mu chýbali (na tábore máte pravidlo, že deti môžu telefonovať domov každý tretí deň, ak nie je vážna situácia, s čím súhlasili deti aj rodičia). Niektorí členovia táborového vedenia pre to ostro vystúpia proti tvojmu zástupcovi. Zástupca vyhlási, že on teda ide na druhý deň domov. Ako budeš postupovať?'
    },
    {
        nadpis: 'Modelová situácia č. 7',
        text: 'Si vodcom oddielu skautov. Pred cca 2 rokmi ste do oddielu prijali chlapca, ktorý mal diagnostikovaný aspergerov syndróm. Naučili ste sa s ním vychádzať a on sa zase prispôsobil podmienkam, ktoré v oddiele panujú. Jeho rodičia vám boli veľmi nápomocní a sú veľmi radi, že vás má, pretože inak nemá takmer žiadnych kamarátov. Napriek tomu, že si sa ty ako vodca spolu s oddielovou radou snažili, stále vidíš, že ho deti medzi seba tak úplne neprijali a občas sa medzi nimi vyskytnú nezhody. Prvé vážnejšie problémy, ktoré si si všimol, sa stali na minulom tábore. Okrem niekoľkých menších, najvážnejším incidentom, ktorý sa odohral, bolo, že po upozornení radcom dňa, že si má po sebe upratať zo stola, vybuchol a začal po deťoch v okolí hádzať všetko, čo mu prišlo pod ruky. Keďže bol v kuchyni, bolo to pomerne nebezpečné. Od tej doby sa hlavne dievčatá netaja, že sa ho boja. Poslednou vážnou správou, ktorú si dostal, bolo, že po útoku na svoju triednu učiteľku pôjde preč zo svojej pôvodnej školy a bude sa tým zaoberať aj rada školy.'
    },
    {
        nadpis: 'Modelová situácia č. 8',
        text: 'Na mail sa vám ozvala pani, ktorá by dala rada do vášho oddielu svojho syna. Má 11 rokov a má diagnostikovanú poruchu pozornosti s hyperaktivitou a ľahkú formu poruchy autistického spektra. Chlapec je integrovaný v bežnej škole a podľa panej sa len v istých vypätých situáciách správa neštandardne. Keď sa spolu stretnete v klubovni, zistíš, že dieťa sa správa dosť nekontrolovateľne a zabrániť mu, aby kde-tu nepoškodilo aj niečo z vybavenia klubovne, je náročné aj pre jeho mamu. Ona ťa však prosí, aby ste to s ním skúsili aj tak, pretože on naozaj iných kamarátov nemá. Ako budeš reagovať a jej prosbu a aké možnosti pre riešenie situácie máš?'
    },
    {
        nadpis: 'Modelová situácia č. 9',
        text: 'Na tábore strážiš s jedným zo svojich skautov, 11-ročným J., keď sa ťa zrazu opýta, či by ti bolo smutno, keby tu on zrazu nebol. Nechápeš, spýtaš sa ho, ako to myslí, a on ti odpovie, že občas rozmýšľa, aké by to bolo jedného dňa sa neprebudiť – jednoducho, keby tu už nebol. Keď sa ho opatrne spýtaš, či myslí na smrť, odpovie, že občas áno, ale že ani nevie, aké by to bolo – zomrieť. Pýtaš sa ho ďalej, ale viac ti toho nepovie. Na druhý deň sa opatrne opýtaš aj iných členov oddielu, ale nikto na túto tému nijako zvlášť nereaguje.'
    },
    {
        nadpis: 'Modelová situácia č. 10',
        text: 'Si vodcom oddielu. Skautky z jednej družiny sa ti sťažovali, že ich radkyňa (16-roč.) už mesiac nebola na družinovke ani na inej skautskej akcii. Stretol si sa s ňou a zistil si, že už nechce chodiť na skauting a nebude viesť družinu. Dôvod svojho rozhodnutia ti prezradiť nechcela a videl si na nej, že je nesvoja a uhýba pohľadom. Na jednej z oblastných akcií započuješ, že jeden z vašich roverov nemá práve najlepšiu povesť a že jedna z vodkýň s ním mala kedysi nepríjemný zážitok, ktorý navyše neskôr aj zverejnil. Keď sa o to začneš zaujímať, od starších skautov sa súkromne dozvieš, že ten rover sa pred ostatnými pochválil, ako spomínanú radkyňu z tvojho oddielu „dostal“.'
    },
    {
        nadpis: 'Modelová situácia č. 11',
        text: 'Si vodcom tábora, ktorý o dva dni začína. Ide o lokalitu, kde ste predtým nikdy netáborili. Prípravy sú v plnom prúde, keď sa podvečer spustí prietrž mračien a na druhý deň ráno ti volajú z obce, kde máte táborisko, že vaša táborová lúka je zatopená. Idete sa tam rýchlo pozrieť a zistíte, že lúka je miestami zaplavená do výšky asi 15 – 20 cm a zanesená bahnom. Zdroj vody je po okraj zaplavený – znehodnotený – a cesta rozbahnená.'
    },
    {
        nadpis: 'Modelová situácia č. 12',
        text: 'Si vodca tábora. Na tábore sa vám vrátili vĺčatá a skauti z náročnejšieho výletu, preto sa dohodnete, že nočnú stráž preberú rangeri a roveri, ktorí s tým súhlasia. Prerozdelíte nočné služby a tábor ide spať. Asi o pol štvrtej nadránom ťa zobudí jeden z roverov s tým, aby si išiel rýchlo s ním. Smeruje do kuchyne a cestou ti hovorí, že mal mať nočnú službu, ale nikto ho nezobudil. Náhodou sa zobudil sám a keď zistil, že už mal polhodinu strážiť, vybral sa pozrieť, či sa niečo nestalo predchádzajúcej nočnej stráži. Tú našiel sedieť v kuchyni, pričom javili zreteľné známky opitosti, pred jedným (tým mladším) boli na zemi zvratky. Bol to dospelý činovník (18 rokov) a o niečo mladší líder (17 rokov). Nie sú hluční ani agresívni. Ako budeš postupovať? '
    },
    {
        nadpis: 'Modelová situácia č. 13',
        text: 'Si vodcom oddielu a jeden z tvojich radcov D. R. (16) je veľmi šikovný, dokonca si ho vieš v budúcnosti predstaviť aj ako svojho nástupcu (D. R. nemá hodnosť radca). Už niekoľkokrát sa ti zdalo, že sa k svojim členom správa autoritatívnejšie, než je dobré, ale jeho družina vždy fungovala a patrila medzi najlepšie, takže si tomu neprikladal veľký význam. Dnes si sa však stretol s mamkou jedného z bývalých členov a od nej si sa dozvedel, že jej dieťa z oddielu odišlo práve preto, že ich D. R. doslova šikanoval. Skúsil si obvolať niekoľko členov, terajších aj tých, čo nedávno odišli, a oni ti to potvrdili. Dozvedel si sa dokonca, že mladší členovia neraz plakali a že fyzické tresty (nie bitka) sú v jeho družine bežné.'
    },
    {
        nadpis: 'Modelová situácia č. 14',
        text: 'Si vodcom oddielu. Na akciu, kde idete ako starší členovia zboru spolu do kina a na pizzu, prišiel jeden z členov tvojho oddielu, 17-ročný ranger, v tričku s nápisom Bound for glory na hrudi a číslami 14 na jednom a 88 na druhom rukáve. Všetci ste v „civile“, nemáte ani šatky. Jednu zo sestier (roverka, 19-ročná) to tak pobúrilo, že sa zvrtla a odchádza. Dobehol si ju a ona ti na schodoch vysvetlila, že je to predsa jasný symbol neonacistov a že ona takéto veci vníma veľmi citlivo, pretože veľká časť jej rodiny zahynula počas vojny v koncentračnom tábore. '
    },
    {
        nadpis: 'Modelová situácia č. 15',
        text: 'Si oddielový vodca. Oddiel funguje, družiny majú dobrý program, napredujú, členov aj radcov je dostatok. V zbore však začínate pociťovať, že zborový vodca si neplní svoje povinnosti. Registráciu neodoslal načas napriek tomu, že ju mal u seba, faktúry za energie v klubovni platí neskoro a je možné, že budete platiť penále za omeškanie. Z Ústredia SLSK vás naháňajú pre neodovzdanú inventarizáciu. Zbor už opustil jeden oddiel, ktorý sa zaregistroval v inom meste. Ako následok niekoľkých nedodržaných zmlúv a dohôd vám na mestskom úrade naznačili, že čo sa týka financovania, ste na „čiernej listine“. Riešili ste to na zborovej rade, vodca však tvrdí, že všetko stíha a napraví. Ani v priebehu nasledujúceho mesiaca sa tak však nestane.'
    },
    {
        nadpis: 'Modelová situácia č. 16',
        text: 'Si vodcom skautského oddielu. Na oddielovej výprave do skalného mesta, vzdialeného asi 2 hodiny (cca 9 km) od dediny, je s tebou jeden 16-ročný radca a 14 skautov vo veku 11 – 12 rokov. Jeden zo skautov sa ti na chvíľu stratí z dohľadu, vylezie na malú plošinku na skalnej stene, pošmykne sa a spadne z asi 3 – 4 metrov na tvrdé podložie rokliny. Keď dobehnete k nemu, chlapec je pri vedomí, komunikuje, má však silné bolesti v kolene, krvácajúce dlane a lakeť a udretú hlavu. Na to, čo sa mu stalo, sa nepamätá. V skalnom meste je zjavne len vaša skupina a nemáš mobilný signál.'
    },
    {
        nadpis: 'Modelová situácia č. 17',
        text: 'Vedieš oddiel vĺčat. Ste na skautskom tábore, kde sa v nedeľu koná (katolícka) omša. Jedno z tvojich vĺčat vidí, že starší skauti a skautky si môžu vybrať, či pôjdu na omšu, alebo sa zapoja do iného duchovného programu pre nekatolíkov. Tvoj oddiel je kompletne zložený z katolíckych vĺčat (resp. ich rodičia sú katolíkmi), a preto sa s celým oddielom zúčastňuješ na omši a nepripravuješ pre ne alternatívny program. Spomenuté vĺča však protestuje, že ono na omšu ísť nechce a radšej by išlo na alternatívny duchovný program, ako majú skauti, pretože omša je nudná. Ako by si to riešil?'
    },
    {
        nadpis: 'Modelová situácia č. 18',
        text: 'Si vodca oddielu skautov, v ktorom sa mladší členovia pripravujú na zloženie skautského sľubu. Príde za  tebou jeden člen s tým, že on v sľube žiadnu povinnosť voči Bohu spomínať nemieni. Náhodou to počujú aj ďalší dvaja členovia a tiež sa k nemu pridajú, že podľa nich je to totálna blbosť, keďže nie sú veriaci a ani v nič a nikoho ako Boh neveria. Keď si spravíš prieskum, zistíš, že podobný názor má väčšina tvojho oddielu. Ako by si postupoval?'
    },
    {
        nadpis: 'Modelová situácia č. 19',
        text: 'Si zborový vodca. V zbore máte zaregistrovaný oddiel dospelých skautov a skautiek, ktorý síce formálne existuje, ale počas roka sa do činnosti nijak nezapája a ani aktívni členovia zboru si ich na akcie vôbec nevolajú, napriek tomu, že občas potrebujú pomoc starších, lebo ich ani poriadne nepoznajú a často ani nevedia, že v zbore máte nejakých starších členov registrovaných. Keď si sa o tom bavil s dospelými členmi, niektorí podporovali myšlienku rozbehnutia aktívnej činnosti, niektorí boli viac pesimistickí. Aké by boli kroky, ktoré by si spravil v prospech dospelých skautov, ako aj v prospech aktívnych členov vášho zboru? Čo by si zmenil? Koho by si kontaktoval?'
    },
        {
        nadpis: 'Modelová situácia č. 20',
        text: 'Si vodcom oddielu. Máš v oddiele člena (17 rokov), ktorý vyrastal v tvojej družine od malého vĺčaťa. Dnes je z neho radca vlastnej družiny a jeden z najaktívnejších členov oddielovej rady. Berie si na zodpovednosť oddielové akcie, pomáha pri zborových akciách. Z „druhej ruky“ si sa dozvedel, že tento rok bol oslovený realizačným tímom oblastného radcovského kurzu na spoluprácu pri prebiehajúcom ročníku R. K. Sám je účastníkom prebiehajúceho ročníka líderskej školy. Blíži sa koniec školského roka a musí toho v škole veľa doháňať. Jeden zo skautov patriaci do družiny tohto radcu sa ti sťažoval, že už niekoľko týždňov za sebou nerobia nič nové, hrajú frisbee alebo sa opakuje program z predchádzajúcich mesiacov, prípadne sa len tak rozprávajú. So situáciou začínajú byť nespokojní aj niektorí rodičia, ktorých poznáš, pretože vybadali, že deťom sa na družinovky už veľmi nechce chodiť.'
    },
]

//Definovanie ostatných tém

const vedlajsieTemy = [
    {
        //0
        nadpis: 'Nábor detí/členov (zakladanie oddielu)',
        text: '●\tformy náboru a ich organizácia (ukážky dobrej praxe)\n●\tkroky pri zakladaní oddielu (zhodnotenie situácie, jednotlivé kroky, potrebná administratíva…)\n'
    },
    {
        //1
        nadpis: 'Vedenie a budovanie tímu',
        text: '●\tdôležitosť a význam tímov (práca v tíme verzus - práca ako jednotlivec)\n●\tosobnosť lídra, typy lídrov\n●\tfázy budovania tímu\n●\tako získať a začleniť nového člena tímu\n●\tvedenie tímu (štýly vedenia), chyby vo vedení tímu, RACI matica, pravidlá v tíme a ich dodržiavanie\n●\tteambuilding a teambonding ako nástroj\n'
    },
    {
        //2
        nadpis: 'Spätná väzba',
        text: '●\tspätná väzba, reflexia, hodnotenie (charakteristika, význam, rozdiely a výhody)\n●\tzásady používania spätnej väzby (prijímanie a dávanie spätnej väzby)\n●\tvyužitie spätnej väzby v oddielovom a inom prostredí (v zbore, osobnom živote...)'
    },
    {
        //3
        nadpis: 'Oddielová rada a nasledovníctvo',
        text: '●\tzloženie, príprava a vedenie stretnutia oddielovej rady a náplň činnosti oddielovej rady\n●\tpráca s radcami a lídrami v oddiele (tréning, motivácia, modulové kurzy)\n●\tvýznam budovania oddielovej rady a nasledovníctvo - succesion planning na lokálnej úrovni'
    },
    {
        //4
        nadpis: 'Zbor',
        text: '●\tvedenie zboru (právna stránka oddiel vs. zbor) a spolupráca s oddielmi a oblasťou (benefity zo spolupráce)\n●\tzborová rada (zloženie, povinnosti a kompetencie, činnosť) a ďalší činovníci a funkcie v zbore\n●\tprogramová činnosť zboru v porovnaní s tou v oddiele'
    },
    {
        //5
        nadpis: 'Zborová administratíva, financie a fundraising',
        text: '●\tadministratíva počas roka\n●\tzákladné zásady GDPR\n●\tskautský informačný systém Tee-pee (riadenie zborovej/oblastnej jednotky)\n●\tvyúčtovanie podujatí, dotácie, priebežné účtovanie , inventarizácia; finančné termíny\n●\tmonitoring (Hodnotenie kvality), evaluácia v oddiele a zbore a využiteľnosť výstupov z nich v praxi\n●\tzmluva o dotácii, o právnej subjektivite zboru\n●\tmožnosti získania finančnej podpory – dary, projekty, granty, brigády a bartrové dohody, fundraising (Klub priateľov skautingu, 2% z dane, crowfunding)'
    },
    {
        //6
        nadpis: 'Oblasť',
        text: '●\toblasť (ako funguje, jej špecifiká, zloženie oblastnej rady)\n●\tčo ponúka oblasť zborom, ako aktívne komunikovať s oblasťou (z pozície zborového vodcu) a ostať s ňou v kontakte\n●\tprogramová a vzdelávacia činnosť (v porovnaní s tou v oddiele/zbore)'
    },
    {
        //7
        nadpis: 'Deti so špeciálnymi výchovno-vzdelávacími potrebami',
        text: '●\tDeti so špeciálnymi výchovno-vzdelávacími potrebami (ako s nimi pracovať, ako riešiť problémy) - charakteristika, postup a prispôsobenie programu pri vybraných diagnózach\n●\takceptovanie a rešpektovanie detí so SVVP\n●\tzvládnuteľnosť detí so ŠVVP (možnosť povedať nie, korektná komunikácia s rodičmi)\n●\todborníci a autority v téme deti so ŠVVP (na koho sa obrátiť s potrebou konzultácie, odbornej pomoci)'
    },
    {
        //8
        nadpis: 'Právna zodpovednosť',
        text: '●\tobčianska, trestná, právna zodpovednosť (právne predpisy)\n●\tvekové limity na zodpovednosť v jednotlivých odvetviach\n●\tzodpovednosť individuálna (FO) alebo kolektívna (PO)\n●\tsankcie v skautingu a mimo skautingu (disciplinárna komisia, zmierovacia rada)\n●\tdisciplinárne konanie (význam v SLSK, postup, vedomosť o existencii Disciplinárneho poriadku)\n●\tzodpovednosť právnickej osoby - občianskoprávna, trestnoprávna\n●\tochrana súkromia a GDPR\n●\tkonanie za zbor bez plnomocenstva a s plnomocenstvom'
    },
    {
        //9
        nadpis: 'Základy metód neformálneho vzdelávania',
        text: '●\tzáklady realizácie vzdelávacieho bloku od A - Z (motivačná časť na úvod, teoretické jadro, praktické prevedenie, práca s časom…)\n●\tmetóda, technika, aktivita (rozdiel medzi nimi a ich poradie)\n●\tvybrané vzdelávacie metódy: prednáška, skupinová práca, diskusia, hra... (výhody/nevýhody, využitie v praxi)\n●\tkreatívne techniky - brainstorming, mapa mysle\n●\tpríprava modulového vzdelávania'
    },
    {
        //10
        nadpis: 'Tábor',
        text: '●\tvedenie tábora - programový tím, vodca tábora, kuchynský tim, MTZ..\n●\tplánovanie táborov (prečo plánovať dopredu, na čo pamätať pri plánovaní, s kým plánovať, špecifiká pri plánovaní táborov, akcií, rozdelenie úloh pri organizácií, cestovanie na tábor);\n●\tpovinnosti pri plánovaní a organizovaní tábora (a tlačivá potrebné pre realizáciu tábora)\n●\trealizácia tábora(aj príprava logistiky) a jeho vyhodnotenie\n●\ttáborové stavby (popis, postup prác pri budovaní tábora, usporiadanie) - zásady stravovania, uskladnenie potravín a hygienické predpisy, denný režim\n●\tšpecifiká programu pre tábory\n●\tchránené územia na Slovensku a stupne ochrany prírody na Slovensku'
    },
    {
        //11
        nadpis: 'Bezpečnosť',
        text: '●\tbezpečnostné zásady a ich dodržiavanie na akciách pre verejnosť (zodpovednosť), na akciách pre 50 a viac ľudí\n●\tmiera prípustného rizika\n●\tdodržiavanie hygienických zásad na viacdňovom podujatí/podujatí s viac ako 50 účastníkmi\n●\tprezentovanie predpisov a zásad účastníkom podujatia\n●\tpostup v situáciách v prípade porušenia predpisov (právne predpisy SR, interné predpisy – rozdiely medzi nimi)\n●\tSafe from harm'
    },
    {
        //12
        nadpis: 'Medzinárodný rozmer skautingu',
        text: '●\tsvetové skautské hnutie a Slovenský skauting\n●\tsusedné skautské organizácie, iné skautské organizácie na Slovensku a ich vzťah k SLSK\n●\tmyšlienková jednota svetového skautského hnutia\n●\tWOSM, WAGGGS (ako fungujú, čomu sa venujú, členovia, ponuky, vízia a misia), ICCS, ICCG, ISGF\n●\tZahraničná rada (štruktúra) a jej informačné kanály\n●\tVodca ako IST/CMT + akcie pre neho\n●\tzahraničné akcie ako prevencia pred xenofóbiou a rasizmom; rešpektovanie inakosti; multikulturalizmus v programe\n●\tpovinnosti pri ceste do zahraničia (manuál)'
    },
    {
        //13
        nadpis: 'Duchovno v skautingu a aktivity na duchovný rozvoj',
        text: '●\tvzťah skautského hnutia k duchovnu a k duchovnému napredovaniu\n●\tformy duchovna v skautingu\n●\tvyužitie duchovna pri individuálnom rozvoji členov\n●\ttvorba náročnejšej duchovnej aktivity pre rôzne vekové kategórie (typy a príklady)\n●\tbezpečnosť a tolerancia pri tvorbe duchovného programu'
    },
    {
        //14
        nadpis: 'Vzdelávací systém',
        text: '●\tvzdelávací systém SLSK (vzdelávacie stupne, moduly, voľné kurzy - zámer jednotlivých zložiek vzdelávacieho systému, kompetencie absolventa, obsahové náplne)\n●\thodnosti (radca, líder, vodca, inštruktor), insígnie\n●\tskúšky v systéme RpV (systém a náplň skúšok RK a LRŠ, základy skúšania)\n●\tmožnosti vzdelávania v SLSK a v iných organizáciách\n●\tdôležitosť vzdelávania v SLSK, zodpovednosť vodcu a jeho úloha v oddiele/zbore v súvislosti so vzdelávaním (motivácia členov k vzdelávaniu, odporúčanie vhodného kurzu, neuprednostňovanie jedného kurzu pred ostatnými, dôležitosť zastúpenia absolventov rôznych LRŠ a VLŠ v oddiele/zbore...)\n●\tRada pre vzdelávanie SLSK a 8. kapitola OP; podporné materiály RpV; komunikačné kanály RpV\n●\toblastný inštruktor'
    },
    {
        //15
        nadpis: 'Skautská symbolika, tradície a rituály',
        text: '●\ttradície a rituály (príklady na oddielové a zborové, resp. oblastné, pôvod, význam, udržiavanie tradičných, zavedenie nových)\n●\tzborové, oddielové a družinové symboly (a iné symboly)\n●\tnástup, večierka, Gilwellský kruh (význam a prevedenie)\n●\tvlajky (zásady používania, skautská a slovenská vlajka, oddielové, zborové)\n●\twoodcraft a jeho prepojenie so skautingom; symbolika zapaľovania ohňa\n●\tpríručka Ceremoniály SLSK'
    },
    {
        //16
        nadpis: 'Zapojenie komunity',
        text: '●\tcharakteristika, význam a formy zapojenia komunity\n●\tpraktická aplikácia do oddielovej, zborovej a oblastnej činnosti'
    },
    {
        //17
        nadpis: 'Život v prírode - ochrana prírody a ako môže skauting pomáhať prírode',
        text: '●\taktivity a program rozvíjajúci environmentálnu výchovu (na skautských podujatiach i v súkromnom živote)\n●\tochrana prírody (vedenie detí k ochrane, zákon o ochrane prírody a krajiny, lesný zákon)\n'
    },
    {
        //18
        nadpis: 'Podpora od dospelých (prvok metódy) a starostlivosť o dobrovoľníkov (dospelých/nedospelých)',
        text: '●\tspôsoby podpory od dobrovoľníkov a priaznivcov skautingu (dospelých aj nedospelých)\n●\tmotivácia a ocenenie dobrovoľníkov (Služba skautingu, Syrinx...), formy starostlivosti o dobrovoľníkov (syndróm vyhorenia...)\n●\tMOVIS - WOSM cyklus dobrovoľníka, nábor dobrovoľníkov\n●\tskautovanie ako celoživotná cesta\n●\tetický kódex dobrovoľníka, dobrovoľnícke dohody (mutual agreement)\n●\tKruh starostlivosti o dospelých ako štruktúra v rámci SLSK; oddiely dospelých skautov a rodinný skauting; význam dospelých v SLSK; možnosti sebarealizácie dospelých v organizácii'
    }
]

//Definovanie nosných tém

const nosneTemy = [
    {
        nadpis: 'Piliere a ich aplikácia do praxe',
        text: '●\tvýznam pilierov skautingu a využitie v praxi\n●\tposlanie\n●\tprincípy\n●\tvýchovná metóda (jej časti, vzťahy medzi nimi a ich aplikácia do oddielového života)\n●\taplikovanie teórie o pilieroch do praxe a života oddielu\n●\todlišnosť skautingu od iných detských/mládežníckych organizácií'
    },
    {
        nadpis: 'Výchovný program',
        text: '●\tvýchova v SLSK/skautingu - plnohodnotný človek a aktívny občan ---- v programe hlbší zmysel jednotlivých prvkov\n●\tprogramová ponuka SLSK s hlavným zameraním na roverov, dospelých, predškolákov, vodných skautov (stupne napredovania, odborky, výzvy, voľné programové moduly, DofE, najvyššie programové ocenenia)\n●\tpráca s programovou ponukou a ako pomáhať radcom a lídrom aby ju dokázali aplikovať do programu\n●\tosobné napredovanie členov - RACE metóda (reflexion - analysis - consideration - evaluation)\n●\tprispôsobovanie programových prvkov členom oddielu\n●\tProgramová rada Slovenského skautingu (kruhy) a 12. kapitola OP ; podporné materiály (metodiky a pomocné materiály)'
    },
    {
        nadpis: 'Štruktúra organizácie a základné dokumenty',
        text: '●\tSlovenský skauting (právna forma, charakteristika občianskeho združenia, sídlo, členenie, právna subjektivita nižších zložiek; apolitickosť verzus nepolitickosť občianskeho združenia)\n●\tSkautský, Mimoriadny a Malý snem (význam, delegáti, frekvencia, právomoci)\n●\tNáčelníctvo a rady SLSK (členovia, kompetencie, význam Náčelníctva i jednotlivých rád)\n●\tkontrolné orgány (význam, kontakt, kompetencie)\n●\tÚstredie (fungovanie, význam, kontakt, riaditeľ Ústredia, vzťah voči Náčelníctvu); aktívne kampane počas roka (Deň zamyslenia, Deň so skautskou šatkou, Betlehemské svetlo…)\n●\tStanovy SLSK a Organizačný poriadok SLSK (kto prijíma, čo upravujú, vzájomný vzťah)\n●\tVodní skauti (štruktúra, fungovanie)'
    },
    {
        nadpis: 'Sľub a zákon',
        text: '●\tvýznam sľubu a zákona\n●\tzapracovanie do skautského života\n●\tskladanie sľubu, obrad, obnova sľubu a jej význam\n●\tuplatňovanie skautského zákona v živote\n●\tsebareflexia dodržiavania zákona\n●\tetický kódex dobrovoľníka ako ďalší prvok, ktorý určuje hodnotové smerovanie dospelých skautov.'
    },
]

//Definovanie kombinácii
//Nosná téma 1

const nos1 = [4,6,5,2,9]

//nosná téma 2

const nos2 = [11,1,17,18,16]

//nosná téma 3

const nos3 = [7,13,15,8]

//nosná téma 4

const nos4 = [3,0,12,14,10]

//Definovanie funkcii

let otazky = {
    pozicieOstatnychTem: [
        nos1r, nos2r, nos3r, nos4r
    ],
    kombinacieOstatnychTem: [
        nos1, nos2, nos3, nos4
    ],
    premiesaneOstatneTemy: [
        rNos1, rNos2, rNos3, rNos4
    ],
}

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generaciaOstatnejAHlavnejTemy(){
    if (hlavtem < 4){
        if(otazky.pozicieOstatnychTem[hlavtem] == 0){
            otazky.premiesaneOstatneTemy[hlavtem] = shuffleArray(otazky.kombinacieOstatnychTem[hlavtem])
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text
            
            ++otazky.pozicieOstatnychTem[hlavtem]
            
        }
        else if(otazky.pozicieOstatnychTem[hlavtem] > 0 && otazky.pozicieOstatnychTem[hlavtem] < otazky.kombinacieOstatnychTem[hlavtem].length){
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text 
            ++otazky.pozicieOstatnychTem[hlavtem]
        }
        else {
            otazky.pozicieOstatnychTem[hlavtem] = 0
            otazky.premiesaneOstatneTemy[hlavtem] = shuffleArray(otazky.kombinacieOstatnychTem[hlavtem])
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text
            ++otazky.pozicieOstatnychTem[hlavtem]
        }
        hlavtem++
    }else{
        hlavtem = 0
        if(otazky.pozicieOstatnychTem[hlavtem] == 0){
            otazky.premiesaneOstatneTemy[hlavtem] = shuffleArray(otazky.kombinacieOstatnychTem[hlavtem])
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text
            ++otazky.pozicieOstatnychTem[hlavtem] 
        }
        else if(otazky.pozicieOstatnychTem[hlavtem] > 0 && otazky.pozicieOstatnychTem[hlavtem] < otazky.kombinacieOstatnychTem[hlavtem].length){
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text
            ++otazky.pozicieOstatnychTem[hlavtem]
        }
        else {
            otazky.pozicieOstatnychTem[hlavtem] = 0
            otazky.premiesaneOstatneTemy[hlavtem] = shuffleArray(otazky.kombinacieOstatnychTem[hlavtem])
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[otazky.premiesaneOstatneTemy[hlavtem][otazky.pozicieOstatnychTem[hlavtem]]].text
            ++otazky.pozicieOstatnychTem[hlavtem]
        }
        hlavtem++
    }
}

function generateQuestions(){
    if (modelovka == 0) {
        sModelovky = shuffleArray(modelovky)
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    } else if(modelovka > 0 && modelovka < 20) {
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    }else {
        modelovka = 0
        sModelovky = shuffleArray(modelovky)
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    }

    generaciaOstatnejAHlavnejTemy()
}

dat.btn.addEventListener('click', generateQuestions)
function idk(){
    window.document.getElementById('twoo').style.opacity = '0.35'
    generateQuestions()
}
window.onload = idk
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter" || event.code === "Spacebar" || event.code === "Space") {
        event.preventDefault();
        generateQuestions()
    } else {
        return
    }
})