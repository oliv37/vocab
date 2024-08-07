import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Word } from '../../word.model';
import { WordExerciceService } from '../word-exercice.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './word-exercice-mcq.component.html',
})
export class WordExerciceMcqComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  wordExerciceService = inject(WordExerciceService);

  readonly nextLink = '../formulaire';

  get words(): Word[] {
    return this.wordExerciceService.words;
  }

  get wordsNotChosen(): Word[] {
    return this.wordExerciceService.wordsNotChosen;
  }

  get word(): Word | undefined {
    return this.wordsNotChosen[0];
  }

  get maskLength(): number {
    return this.words.reduce(
      (acc, word) =>
        Math.max(acc, Math.max(word.translationFr.length, word.value.length)),
      0
    );
  }

  onClick(answer: Word) {
    const isValidAnswer = answer === this.word;
    if (isValidAnswer) {
      this.wordExerciceService.markWordAsChosen();
    }
  }

  isWin(): boolean {
    return !this.wordsNotChosen.length;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.router.navigate([this.nextLink], { relativeTo: this.route });
    }
  }
}
