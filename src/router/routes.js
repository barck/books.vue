import Index from '@/components/Index';
import Books from '@/components/Books';
import Book from '@/components/Book';
import EditBook from '@/components/EditBook';

export default [
  { path: '/', name: 'index', component: Index },
  { path: '/books', name: 'books', component: Books },
  { path: '/book/:id', name: 'book', component: Book },
  { path: '/book/edit_book/:id', name: 'editBook', component: EditBook },
];
