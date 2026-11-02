/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, -1);
  }

  process(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const ALPHABET_SIZE = 26;
    const CODE_A = 'A'.charCodeAt(0);
    const upperText = String(text).toUpperCase();
    const upperKey = String(key).toUpperCase();

    let keyIndex = 0;
    const result = [...upperText].map((char) => {
      if (char < 'A' || char > 'Z') {
        return char;
      }

      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - CODE_A;
      keyIndex += 1;
      const code = char.charCodeAt(0) - CODE_A;
      return String.fromCharCode(
        CODE_A + ((code + direction * shift + ALPHABET_SIZE) % ALPHABET_SIZE),
      );
    });

    return (this.isDirect ? result : result.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
