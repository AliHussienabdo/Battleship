
function cell(){
    let value = 0;
    const addToken = (val) => {
        value = val;
    }
    const getValue = () => value;

    return {addToken, getValue};
}

export {cell};