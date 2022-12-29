import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10,3,-5,0,1])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort()
console.log(charactersCollection.data)

const llist = new LinkedList();
llist.add(500)
llist.add(-10)
llist.add(-3)
llist.add(4)

llist.sort()
llist.print()

