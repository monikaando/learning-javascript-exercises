function makePhrases() {
    var words1 = ["nieprzerwane", "wielowarstwowe", "tysiącmetrowe", "biznesowe", "niepowstrzymane"];
    var words2 = ["wspomagane", "wartościowe", "zorientowane", "skoncentrowane", "wyrównane"];
    var words3 = ["procesy", "rozwiązania", "punkty", "strategie", "wizje"];
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
makePhrases();

/*Open index.html file in a browser*/