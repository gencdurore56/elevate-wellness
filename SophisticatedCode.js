/*
Filename: SophisticatedCode.js
Description: This code demonstrates a sophisticated and complex implementation of a message encryption and decryption system using various cryptographic algorithms.
Author: YourName
*/

// Global variables
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const KEY = 'secret';

// Encryption functions
function caesarCipherEncrypt(plaintext, key) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];
        if (ALPHABET.includes(char)) {
            let index = ALPHABET.indexOf(char);
            let shift = ALPHABET.indexOf(key[i % key.length]);
            let newIndex = (index + shift) % ALPHABET.length;
            ciphertext += ALPHABET[newIndex];
        } else {
            ciphertext += char;
        }
    }
    return ciphertext;
}

function vigenereCipherEncrypt(plaintext, key) {
    let ciphertext = '';
    for (let i = 0, j = 0; i < plaintext.length; i++) {
        let char = plaintext[i];
        if (ALPHABET.includes(char)) {
            let index = ALPHABET.indexOf(char);
            let shift = ALPHABET.indexOf(key[j % key.length]);
            let newIndex = (index + shift) % ALPHABET.length;
            ciphertext += ALPHABET[newIndex];
            j++;
        } else {
            ciphertext += char;
        }
    }
    return ciphertext;
}

// Decryption functions
function caesarCipherDecrypt(ciphertext, key) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];
        if (ALPHABET.includes(char)) {
            let index = ALPHABET.indexOf(char);
            let shift = ALPHABET.indexOf(key[i % key.length]);
            let newIndex = (index - shift + ALPHABET.length) % ALPHABET.length;
            plaintext += ALPHABET[newIndex];
        } else {
            plaintext += char;
        }
    }
    return plaintext;
}

function vigenereCipherDecrypt(ciphertext, key) {
    let plaintext = '';
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];
        if (ALPHABET.includes(char)) {
            let index = ALPHABET.indexOf(char);
            let shift = ALPHABET.indexOf(key[j % key.length]);
            let newIndex = (index - shift + ALPHABET.length) % ALPHABET.length;
            plaintext += ALPHABET[newIndex];
            j++;
        } else {
            plaintext += char;
        }
    }
    return plaintext;
}

// Main program
function main() {
    const plaintext = 'This is a message to be encrypted.';
    
    // Encrypt using Caesar cipher
    let caesarCiphertext = caesarCipherEncrypt(plaintext, KEY);
    console.log('Caesar Ciphertext:', caesarCiphertext);
    
    // Encrypt using Vigenere cipher
    let vigenereCiphertext = vigenereCipherEncrypt(plaintext, KEY);
    console.log('Vigenere Ciphertext:', vigenereCiphertext);
    
    // Decrypt Caesar ciphertext
    let caesarPlaintext = caesarCipherDecrypt(caesarCiphertext, KEY);
    console.log('Decrypted Caesar:', caesarPlaintext);
    
    // Decrypt Vigenere ciphertext
    let vigenerePlaintext = vigenereCipherDecrypt(vigenereCiphertext, KEY);
    console.log('Decrypted Vigenere:', vigenerePlaintext);
}

// Execute the main program
main();