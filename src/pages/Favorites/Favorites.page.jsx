import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../components/Cardlist/CardList.component';

function FavoritesPage() {
  return (
    <section>
      <pre>
        welcome, voyager...
        <Link to="/"> ← go back</Link>
      </pre>
      <CardList />
    </section>
  );
}

export default FavoritesPage;