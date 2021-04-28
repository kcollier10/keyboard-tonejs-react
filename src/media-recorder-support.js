if (!window.MediaRecorder) {
    document.write(
        decodeURI('%3Cscript defer src="/polyfill.js">%3C/script>')
    )
}

// if(MediaRecorder.notSupported) {
//     noSupport.style.display = 'block'
//     dictaphone.style.display = 'none'
// }