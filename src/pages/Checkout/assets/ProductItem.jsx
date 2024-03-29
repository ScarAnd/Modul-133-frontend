/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { ArrowRight } from '@carbon/icons-react';

/*----------------------------------------------------------------------------*/
/* ProductItem                                                                */
/*----------------------------------------------------------------------------*/

const ProductItem = (props) => {
  let card = props.data;

  return (
    <div className='item-box ml-1 mr-1 bcol-ibm-gray-30 pl-2 pt-2 pr-2 d-flex fd-c mt-2 mb-2'>
      <div>
        <h3 className='text-bold'>{card?.Item?.title}</h3>
      </div>
      <div className='border-bottom' />
      <div className='mt-2 d-flex'>
        <div>
          <h4 className='text-bold'>Size:</h4>
        </div>
        <div>
          <h4 className='ml-1'>{card?.choosedSize}</h4>
        </div>
      </div>
      <div className='d-flex'>
        <div>
          <h4 className='text-bold'>Item Count:</h4>
        </div>
        <div>
          <h4 className='ml-1'>{card?.itemCount}</h4>
        </div>
      </div>
      <div className='d-flex'>
        <div>
          <h4 className='text-bold'>Item price:</h4>
        </div>
        <div>
          <h4 className='ml-1'>{card?.Item?.price}.-</h4>
        </div>
      </div>
      <div className='d-flex link-hover f-ac f-jb mb-1 mt-2'>
        <a
          href={`product/${card?.Item?.id}`}
          className='deco-none'
          rel='noreferrer'
          target={'_blank'}
        >
          To Item
        </a>
        <ArrowRight className='col-ibm-blue-60 ml-2' size={'20'} />
      </div>
      <div className='border-bottom' />
      <div className='d-flex mt-1 f-jb'>
        <h3 className='text-bold'>Price:</h3>
        <h3>{parseFloat(card?.Item?.price) * card?.itemCount}.-</h3>
      </div>
    </div>
  );
};

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default ProductItem;
