import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	samplePlaceholderImageURl = 'https://placehold.co/400';

	private books: Book[] = [
		{
			id: 1,
			title: 'The Alchemist',
			genre: 'Adventure',
			author: 'Paulo Coelho',
			year: 1988,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.5,
		},
		{
			id: 2,
			title: 'To Kill a Mockingbird',
			genre: 'Fiction',
			author: 'Harper Lee',
			year: 1960,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.8,
		},
		{
			id: 3,
			title: '1984',
			genre: 'Dystopian',
			author: 'George Orwell',
			year: 1949,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.7,
		},
		{
			id: 4,
			title: 'Pride and Prejudice',
			genre: 'Romance',
			author: 'Jane Austen',
			year: 1813,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.6,
		},
		{
			id: 5,
			title: 'The Great Gatsby',
			genre: 'Tragedy',
			author: 'F. Scott Fitzgerald',
			year: 1925,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.4,
		},
		{
			id: 6,
			title: 'Moby Dick',
			genre: 'Adventure',
			author: 'Herman Melville',
			year: 1851,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.2,
		},
		{
			id: 7,
			title: 'War and Peace',
			genre: 'Historical',
			author: 'Leo Tolstoy',
			year: 1869,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.3,
		},
		{
			id: 8,
			title: 'The Catcher in the Rye',
			genre: 'Fiction',
			author: 'J.D. Salinger',
			year: 1951,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.1,
		},
		{
			id: 9,
			title: 'The Hobbit',
			genre: 'Fantasy',
			author: 'J.R.R. Tolkien',
			year: 1937,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.9,
		},
		{
			id: 10,
			title: 'Crime and Punishment',
			genre: 'Psychological',
			author: 'Fyodor Dostoevsky',
			year: 1866,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.5,
		},
		{
			id: 11,
			title: 'The Brothers Karamazov',
			genre: 'Philosophical',
			author: 'Fyodor Dostoevsky',
			year: 1880,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.6,
		},
		{
			id: 12,
			title: 'Brave New World',
			genre: 'Dystopian',
			author: 'Aldous Huxley',
			year: 1932,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.4,
		},
		{
			id: 13,
			title: 'Wuthering Heights',
			genre: 'Gothic',
			author: 'Emily Brontë',
			year: 1847,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.3,
		},
		{
			id: 14,
			title: 'Jane Eyre',
			genre: 'Romance',
			author: 'Charlotte Brontë',
			year: 1847,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.5,
		},
		{
			id: 15,
			title: 'The Odyssey',
			genre: 'Epic',
			author: 'Homer',
			year: -800,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.7,
		},
		{
			id: 16,
			title: 'The Iliad',
			genre: 'Epic',
			author: 'Homer',
			year: -750,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.6,
		},
		{
			id: 17,
			title: 'Anna Karenina',
			genre: 'Realist',
			author: 'Leo Tolstoy',
			year: 1877,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.8,
		},
		{
			id: 18,
			title: 'The Divine Comedy',
			genre: 'Epic',
			author: 'Dante Alighieri',
			year: 1320,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.9,
		},
		{
			id: 19,
			title: 'The Picture of Dorian Gray',
			genre: 'Philosophical',
			author: 'Oscar Wilde',
			year: 1890,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.4,
		},
		{
			id: 20,
			title: 'Les Misérables',
			genre: 'Historical',
			author: 'Victor Hugo',
			year: 1862,
			imageUrl: this.samplePlaceholderImageURl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in arcu.',
			rating: 4.7,
		},
	];

	getBooks(): Observable<Book[]> {
		return of(this.books);
	}
}
