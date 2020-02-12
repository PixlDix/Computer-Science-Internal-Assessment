import React from 'react';
import './App.css'
// import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const typingTest = () => {
    

    const displaywords = (e) =>{
        e.preventDefault();
        const shuffledWords=shuffle(wordList);
        document.getElementById('typingTestHelpText').innerHTML = shuffledWords.join(' ');
    }

    function shuffle(a) {
        for (let i=0; i<a.length; i++) {
            const j = Math.floor(Math.random() * a.length);
            [a[i], a[j]] = [a[j], a[i]];
        };
        return a;
    }

    const wordList = [
        "later","danger","habit","special","joy","hung","tube","whispered","chance","harbor","rear","produce","rubber","composition","cutting","bad","though","plan","stand","whom","noun","under","afternoon","follow","powerful","door","loud","stage","roar","electricity","operation","zoo","to","highest","fox","simply","whose","sunlight","sand","balance","crowd","method","step","whale","quickly","clock","green",
        "many","describe","blanket","winter","melted","soil","quite","low","chain","beyond","summer","old","design","rule","establish","answer","surface","state","hay","wore","root","thou","neighbor","earlier","official","manner","except","pressure","have","master","season","universe","screen","develop","tribe","source","consider","tales","arm","easier","should","president","jump","strike","easier","pick","doing",
        "jet","model","where","deeply","wash","story","answer","vast","thick","broken","married","mental","nearest","percent","statement","troops","gas","very","scared","might","essential","even","nuts","occasionally","direct","care","prize","effect","smaller","snake","break","state","numeral","river","identity","depth","compass","family","solve","especially","steep","know","duck","stared","division","stranger","visit",
        "nearest","so","perfectly","income","week","into","lose","box","vessels","remain","second","equally","riding","noun","chamber","poor","may","hold","green","setting","score","coal","duck","rocket","silk","mail","path","wind","quarter","freedom","nest","explain","mail","cross","taught","silent","clock","count","father","nuts","gun","shaking","contain","street","cast","yes","fed",
        "change","twice","hollow","safe","ride","garden","sold","actually","detail","along","peace","specific","eventually","chief","little","scale","everything","activity","clothing","football","grow","belong","skill","front","choose","society","week","wrapped","man","safe","hung","rain","guard","kept","treated","silent","point","slight","represent","floor","community","key","everywhere","organized","hardly","settlers","company",
        "frozen","over","movie","exercise","turn","trade","such","spite","lady","upward","drove","two","primitive","square","won","respect","location","dropped","being","slave","seat","strange","gate","saved","completely","onlinetools","factory","journey","aside","barn","carbon","letter","group","length","same","cool","threw","vessels","parts","song","voice","group","lost","enjoy","differ","wash","strong",
        "owner","listen","deer","circus","captain","future","anyway","bank","pile","larger","business","spring","leather","map","shape","tried","written","table","crew","combine","pain","poet","lake","grew","liquid","remove","noon","station","obtain","cent","first","decide","ship","shut","tonight","lay","person","short","pink","form","vertical","path","thousand","yellow","rear","window","increase",
        "poetry","kept","many","powder","nature","surface","symbol","straw","neighbor","realize","death","serious","rose","exclaimed","busy","fine","settle","dirty","gray","depend","are","missing","elephant","meant","natural","worker","increase","practice","town","made","typical","hide","here","lower","market","electric","motion","beauty","stepped","floor","asleep","difference","west","horn","apart","crowd","orbit",
        "camera","map","circus","broad","no","involved","diameter","enjoy","excited","by","shirt","single","vapor","entire","music","impossible","mental","song","better","already","in","deal","sold","settlers","light","why","service","general","percent","simply","refused","baby","father","again","shoe","food","season","hour","declared","properly","want","flat","soldier","protection","fight","mountain","manufacturing",
        "this","mad","wide","firm","water","service","lose","broad","dead","remember","primitive","attached","each","uncle","slight","law","beauty","for","hit","amount","easier","information","raw","above","dawn","could","score","these","meant","cake","favorite","sound","settlers","farther","mostly","captured","older","difference","swimming","call","begun","trick","driven","noise","refused","pale","village",
        "happy","world","has","way","describe","success","perfectly","huge","setting","choice","paragraph","wave","answer","sheet","taste","star","scared","baby","twelve","however","consider","pan","angle","fruit","rocket","ship","usual","writing","fog","row","sentence","almost","machine","low","purpose","terrible","citizen","brother","agree","sing","station","point","nest","please","cast","massage","hit"
    ];

    return(
        <div>
            <div id='logOutButton'>
                <li><NavLink to="/">Log Out</NavLink></li>
            </div>
            
            <div id='typingTestHelpText'>
                <h1>Timer starts when you start.</h1>
            </div>

            <div id='statsNthat'>
                <h2>WPM: CPM: Accuracy:</h2>
            </div>

            <div id='inputBar'>
                <input placeholder='Begin typing' onClick={displaywords}></input>
            </div>

            <div id='tempResultsButton'>
                <li><NavLink to="/results_screen">Skip to results</NavLink></li>
            </div>
            
        </div>
    );
}

export default typingTest;