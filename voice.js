const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can Speak now!!');
}

recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;

    if(text.includes('Hello ')) 
    speech.text = "Hello Aniketh, How are you doing today";

    else if(text.includes('What is your Name')) 
    speech.text = "My name is Jarvis Your Personal Assitant";

    else if(text.includes('time'))
    speech.text = 'It is' + new Date().getHours() + "" + new Date().getMinutes()+" right now"

    else if(text.includes('My Birthday')) 
    speech.text = "8th September 2001";

    window.speechSynthesis.speak(speech);
}
