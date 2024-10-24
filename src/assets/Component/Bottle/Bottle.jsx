import  './Bottle.css';

const Bottle = ({bottle, handelAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottole: {name} </h3>
            <img src={img} alt="" />
            <h3>Price: {price} $ </h3>
            <button onClick={() => handelAddToCart(bottle)} >Purches</button>
        </div>
    );
};

export default Bottle;