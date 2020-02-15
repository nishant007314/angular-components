import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "capitalize"
})
export class CapitalizeTitle implements PipeTransform {

    transform(value: string): any {
        if (!value) {
            return null;
        }

        let words = value.split(' ');
        for (var index = 0; index < words.length; index++) {
            let word = words[index];

            if (index > 0 && this.isPreposition(word)) {
                words[index] = word.toLowerCase();
            } else {
                words[index] = this.toCamelCase(word);
            }
        }
        return words.join(' ');
    }

    private toCamelCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    private isPreposition(word: string): boolean {
        let prepositions = [
            'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at',
            'because of', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between',
            'beyond', 'but', 'by', 'concerning', 'despite', 'down', 'during', 'except', 'excepting',
            'for', 'from', 'in', 'in front of', 'inside', 'in spite of', 'instead of', 'into',
            'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'regarding',
            'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath', 'until', 'up',
            'upon', 'up to', 'with', 'within', 'without', 'with regard to', 'with respect to', 'the', 'be'
        ];

        return prepositions.includes(word.toLowerCase());
    }
}