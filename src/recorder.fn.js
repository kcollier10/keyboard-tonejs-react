import * as Tone from 'tone'
import './polyfill'
import './media-recorder-support'
import './App.css'

console.clear();

const recordButton = document.getElementById('recordButton');
const pause = document.getElementById('pause');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const save = document.getElementById('save');
const userAudioFile = document.getElementById('audio-file')
const synth = new Tone.Synth();
const dest = Tone.context.createMediaStreamDestination();
let recorder;
let audio;

synth.connect(dest);
synth.toDestination();

const recordAudio = () =>
    new Promise(async resolve => {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
        const mediaRecorder = new MediaRecorder(stream);
        let audioChunks = [];

        mediaRecorder.addEventListener('dataavailable', e => {
            audioChunks.push(e.data);
        });

        const start = () => {
            audioChunks = [];
            mediaRecorder.start();
        }

        const stop = () =>
            new Promise(resolve => {
                mediaRecorder.addEventListener("stop", () => {
                    const blob = new Blob(audioChunks);
                    const url = URL.createObjectURL(blob);
                    const audio = new Audio(url);
                    const play = () => audio.play();
                    resolve({ blob, url, play });
                });
            mediaRecorder.stop();
        });
    resolve({ start, stop });
});

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

recordButton.addEventListener('click', async () => {
    recordButton.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
    play.setAttribute('disabled', true);
    save.setAttribute('disabled', true);
    if(!recorder) {
        recorder = await recordAudio();
    }
    recorder.start();
});

stop.addEventListener('click', async () => {
    recordButton.removeAttribute('disabled');
    stop.setAttribute('disabled', true);
    play.removeAttribute('disabled');
    save.removeAttribute('disabled');
    audio = await recorder.stop();
});

play.addEventListener('click', () => {
    audio.play();
});

save.addEventListener('click', () => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(audio.blob);
    fileReader.onload = () => {
        const base64AudioMessage = fileReader.result.split(',')[1];
        fetch('/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: base64AudioMessage })
        }).then(res => {
            if (res.status === 201) {
                return populateAudioMessages();
            }
            console.log('Invalid status getting messages: ' + res.status);
        });
    }
});

const populateAudioMessages = () => {
    return fetch('/messages').then(res => {
        if (res.status === 200) {
            return res.json().then(json => {
                json.messageFilenames.forEach(filename => {
                    let audioElement = document.querySelector(`[data-audio-filename="${filename}"]`);
                    if (!audioElement) {
                        audioElement = document.createElement('audio');
                        audioElement.src = `/messages/${filename}`;
                        audioElement.setAttribute('data-audio-filename', filename);
                        audioElement.setAttribute('controls', true);
                        userAudioFile.appendChild(audioElement);
                    }
                });
            });
        }
        console.log('Invalid status getting messages: ' + res.status);
    });
};

populateAudioMessages();


// const sounds = [];
// const notes = 'CDEFGAB'.split('').map(n => `${n}4`);
// let note = 0;
// Tone.Transport.scheduleRepeat(time => {
//     if (note === 0) recorder.start();
//     if (note > notes.length) {
//         synth.triggerRelease(time);
//         recorder.stop();
//         Tone.Transport.stop();
//     } else synth.triggerAttack(notes[note], time);
//     note++;
// }, '4n');

// recorder.ondataavailable = e => sounds.push(e.data);
// recorder.onstop = e => {
//     let blob = new Blob(sounds, { type: 'audio/ogg; codecs=opus' });
//     audio.src = URL.createObjectURL(blob);
// }

// Tone.Transport.start();
