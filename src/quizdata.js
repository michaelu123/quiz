const questions = [
  {
    frage: "Welche Ampel gilt hier für Radfahrende?",
    antwort1: "Für den grün gekleideten Radfahrer gilt die Fahrbahnampel.",
    antwort2: "Jeder Radfahrende muss Fahrradampeln an der Kreuzung beachten.",
    antwort3: "Radfahrende beachten immer die Fußgängerampel.",
  },
  {
    frage: "Wie schnell darf hier gefahren werden?",
    antwort1: "Nur Schrittgeschwindigkeit.",
    antwort2: "Wenn nicht anders ausgeschildert ist, dann 30km/h.",
    antwort3: "Mit mäßiger Geschwindigkeit.",
  },
  {
    frage: "Was ist bei der Begleitung von unter 9-jährigen zu beachten?",
    antwort1: "Die Begleitperson kann in beide Richtungen ebenfalls auf dem Gehweg fahren.",
    antwort2: "Die Begleitung muss auf der Straße fahren, da auf dem Gehweg zu wenig Platz ist.",
    antwort3: "Begleitung und Kind haben Vorfahrt gegenüber der grün gekleideten Radfahrerin.",
  },
  {
    frage: "Was müssen die Verkehrsteilnehmenden hier beachten?",
    antwort1:
      "Das Kfz muss beim Überholvorgang den Mindestabstand von 1,5 m zu Radfahrenden beachten.",
    antwort2: "Nichts, da die Fahrspuren klar getrennt sind.",
    antwort3:
      "Der Radfahrende sollte möglichst weit rechts fahren, damit die überholenden den Abstand einhalten können.",
  },
  {
    frage: "Welcher der Radfahrenden verhält sich hier falsch?",
    antwort1: "Die Frau im blauen Anorak, denn sie fährt in falscher Richtung.",
    antwort2: "Beide, denn sie halten zu wenig Abstand.",
    antwort3: "Die Frau im blauen Anorak, denn sie trägt keinen Helm.",
  },
  {
    frage: "Wo sollen Radfahrende hier weiterfahren?",
    antwort1: "Sie müssen auf dem linksseitigen Radweg fahren, soweit dieser benutzbar ist.",
    antwort2: "Nur auf der Fahrbahn, da man immer rechts fahren muss.",
    antwort3:
      "Auf der Fahrbahn oder auf dem linken Radweg, weil linke Radwege nicht benutzungspflichtig sind.",
  },
  {
    frage: "Wie muss mein Fahrrad ausgerüstet sein?",
    antwort1:
      "Bei Dunkelheit müssen die blauen zusätzlich zu den orangen Komponenten fest montiert und in Betrieb sein.",
    antwort2:
      "Für Fahrräder, die im Verkehr genutzt werden, gibt es keine Ausrüstungsvorschriften.",
    antwort3:
      "Das muss mich nicht interessieren. In Deutschland werden nur verkehrssichere Fahrräder angeboten.",
  },
  {
    frage: "Gilt die Fahrbahnampel auch für den blau gekleideten Radfahrer?",
    antwort1: "Nein, die Fahrbahnampel gilt nicht für den blau gekleideten Radfahrer.",
    antwort2: "Ja, die Fahrbahnampel gilt auch für den Radweg.",
    antwort3: "Nein, aber die orange gekleidete Radfahrerin hat Vorfahrt.",
  },
  {
    frage: "Wie müssen sich die Radfahrenden hier verhalten?",
    antwort1: "Es gilt rechts vor links.",
    antwort2: "Radfahrende müssen immer warten und verständigen sich mit Handzeichen.",
    antwort3:
      "Einbahnstraßen dürfen in Gegenrichtung nur in Schrittgeschwindigkeit befahren werden.",
  },
  {
    frage: "Wie verhält sich die Radfahrerin richtig?",
    antwort1:
      "Sie fährt mit Schrittgeschwindigkeit weiter und hält an, wenn Fahrgäste aus- oder einsteigen wollen.",
    antwort2: "Sie fährt möglichst schnell am Bus vorbei.",
    antwort3: "Sie benutzt den Gehweg, um ein- und aussteigenden Fahrgästen auszuweichen.",
  },
  {
    frage: "Was müssen Radfahrende hier beachten?",
    antwort1: "Entweder links auf der Fahrbahn weiterfahren oder aber absteigen und schieben.",
    antwort2: "Vorsichtig weiterfahren, wenn niemand behindert wird.",
    antwort3: "Auf dem Radweg weiterfahren, weil Schieben hier unzumutbar ist.",
  },
  {
    frage: "Dürfen Radfahrende den Zebrastreifen benutzen?",
    antwort1: "Ja, wenn sie dem Fahrverkehr Vorrang geben.",
    antwort2: "Auch erwachsene Radfahrende dürfen niemals über den Zebrastreifen radeln.",
    antwort3: "Radfahrende sind Fußgängern am Zebrastriefen immer gleich gestellt.",
  },
  {
    frage: "Verhält sich der Radfahrer beim Linksabbiegen korrekt?",
    antwort1:
      "Ja, der Radfahrer darf vorsichtig auf die Fahrbahn einfahren und so direkt nach links abbiegen.",
    antwort2: "Nein, der Radfahrer darf ausschließlich auf dem Radweg weiterfahren.",
    antwort3:
      "Nein, der Radfahrer muss zum Queren der Fahrbahn absteigen und dann links bis zur Ampel schieben.",
  },
  {
    frage: "Dürfen Radfahrende hier nebeneinander fahren?",
    antwort1: "Ja, solange sie wie alle Fahrzeuge maximal 30km/h fahren.",
    antwort2: "Nein, sie dürfen nicht nebeneinander fahren.",
    antwort3: "Ja, solange sie wie alle Fahrzeuge nur Schrittgeschwindigkeit fahren.",
  },
];

function shuffle(arr) {
  var j, x, index;
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

export default function question() {
  return {
    message: "Eine testmessage",
    questions,
    shuffledAnswers: [],
    incorrectAnswers: [],
    currq: 0,
    correct: 0,
    incorrect: 0,
    chosenAnswer: -1,
    showResult: false,
    nextq() {
      const answer = this.shuffledAnswers[this.chosenAnswer];
      if (questions[this.currq].antwort1 == answer) {
        this.correct++;
        console.log("corr");
      } else {
        this.incorrect++;
        console.log("incorr");
        this.incorrectAnswers.push({ q: this.currq, answer });
      }
      this.chosenAnswer = -1;
      this.currq++;
      if (this.currq >= questions.length) {
        this.showResult = true;
      }
    },
    answers() {
      const q = questions[this.currq];
      this.shuffledAnswers = shuffle([q.antwort1, q.antwort2, q.antwort3]);
      return this.shuffledAnswers;
    },
    video() {
      let s = "" + (this.currq + 1);
      if (s.length == 1) s = "0" + s;
      return "/assets/" + s + ".mp4";
    },
  };
}
