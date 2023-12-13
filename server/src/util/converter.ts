export function validateEndingConsonant(name: string): string {
  const lastCharacter = name.charAt(name.length - 1);
  const hasEndingConsonant = (lastCharacter.charCodeAt(0) - 0xac00) % 28 > 0;
  return hasEndingConsonant ? `${name}이` : `${name}`;
}

export function convertScript(name: string, script: string): string {
  const convertName = validateEndingConsonant(name);
  const result = script
    .replaceAll('[아동이름]이', convertName)
    .replaceAll('\n', '');
  return result;
}
