import clsx from 'clsx';
import { useState } from 'react';

const ProductInfo = ({ productDescription }) => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="pb-4">
        <ul className="grid grid-cols-3">
          <button
            onClick={() => setTab(0)}
            className={clsx('font-light text-center text-black p-2', tab === 0 ? 'border-b border-black' : 'border-b')}
          >
            Description
          </button>
          <button
            onClick={() => setTab(1)}
            className={clsx('font-light text-center text-black p-2', tab === 1 ? 'border-b border-black' : 'border-b')}
          >
            Shipping
          </button>
          <button
            onClick={() => setTab(2)}
            className={clsx('font-light text-center text-black p-2', tab === 2 ? 'border-b border-black' : 'border-b')}
          >
            Extra Info
          </button>
        </ul>
      </div>
      {tab === 0 && <div className="product-description" dangerouslySetInnerHTML={{ __html: productDescription }} />}
      {tab === 1 && <div className="product-description">Shipping information</div>}
      {tab === 2 && <div className="product-description">Extra information</div>}
    </div>
  );
};

export default ProductInfo;
