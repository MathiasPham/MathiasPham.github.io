function setup() {
    var config = {
        apiKey: "AIzaSyCJ05eC8ybHEeDP1puXbTsRN7-geXL6HxU",
        authDomain: "risk-a43f4.firebaseapp.com",
        databaseURL: "https://risk-a43f4.firebaseio.com",
        projectId: "risk-a43f4",
        storageBucket: "risk-a43f4.appspot.com",
        messagingSenderId: "879880878486"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("land");
    let inRegion = document.getElementById("region");

    let btnLagre = document.getElementById("lagreland");
    btnLagre.addEventListener("click"), lagreLand);

    let inpKort = document.getElementById("kort");
    let inAntallnye = document.getElementById("antallnye");

    let btnLagreKort = document.getElementById("lagrekort");
    btnLagreKort.addEventListener("click"), lagreKort);

    function lagreLand(e) {
        let land = inpLand.value;
        let region = inRegion.value;
        let ref = database.ref("land") / + land);
        ref.set({ kortid });
    }

    function lagreKort(e) {
        let kort = inpKort.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("kort") / + kort);
        ref.set({ antallnye });
    }

    let inpBruker = document.getElementById("bruker");
    let inpAlder = document.getElementById("alder");
    let inpFarge = document.getElementById("farge");
    let inpNavn = document.getElementById("antallnye");

    let btnLagreSpiller = document.getElementById("lagrespiller");
    btnLagreSpiller.addEventListener("click"), lagreSpiller);

    function lagreSpiller(e) {
        let brukernavn = inpBruker.value;
        let alder = inpAlder.value;
        let farge = inpFarge.value;
        let navn = inpNavn.value;
        let ref = database.ref("spiller/" + brukernavn);
        ref.set({ alderm farge, navn });
    }


}