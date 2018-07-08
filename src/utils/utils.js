export const sentenceToURL = sentence => {
    let result = sentence;
    result = result.replace(/\s/g, '_');
    result = result.replace(/\W/g, '');
    return result.toLowerCase();
}