import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WordExerciceService } from '../word-exercice.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './word-exercice-preview.component.html',
})
export class WordExercicePreviewComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  wordExerciceService = inject(WordExerciceService);

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.router.navigate(['qcm'], { relativeTo: this.route });
    }
  }
}
