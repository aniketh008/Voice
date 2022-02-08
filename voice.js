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

    if(text.includes('time'))
    speech.text = 'It is' + new Date().getHours() + "" + new Date().getMinutes()+" right now"

    else if(text.includes('my birthday')) 
    speech.text = '8th September 2001';

    else if(text.includes('hello')) 
    speech.text = 'Hello Aniketh, How are you doing today';

    else if(text.includes('what is your name')) 
    speech.text = 'My name is Jarvis Your Personal Assistant';
    
    else if(text.includes('open youtube')) 
    window.open('https://www.youtube.com/')
    
    else if(text.includes('Good Bye')) 
    speech.text = 'Hope we see you soon';
    
    
    window.speechSynthesis.speak(speech);
}
