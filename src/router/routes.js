import Index from '@/components/Index';
import Books from '@/components/Books';
import Book from '@/components/Book';

export default [
  { path: '/', name: 'index', component: Index },
  { path: '/books', name: 'books', component: Books },
  { path: '/books/:id', name: 'book', component: Book },
];
