
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  // constructor(public collection: Sortable) {}
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
