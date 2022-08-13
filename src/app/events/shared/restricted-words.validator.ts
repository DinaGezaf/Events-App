import { FormControl } from '@angular/forms'

export function restrictedWords(words: any) {
    return (control: FormControl<any>): {[key: string]:any}| null => {
    if (!words) {return null}
        const invalidWords = words
                  .map(function (w: any) {return control.value.includes(w) ? w : null })
                  .filter((w: null) => w != null)
      return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null

    }
}
