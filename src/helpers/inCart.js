export function inCart(id, cartProducts) {
    const isExist = cartProducts.some((product) => product.id === id);

    return isExist;
}
