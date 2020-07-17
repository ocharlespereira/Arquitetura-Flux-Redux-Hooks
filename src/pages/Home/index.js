import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-superrep-go-feminino/39/HZM-3551-939/HZM-3551-939_zoom1.jpg?ts=1584659721"
          alt="Tenis Rosa"
        />
        <strong>Tenis Rosa</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
