global.URL.createObjectURL = jest.fn()
HTMLCanvasElement.prototype.getContext = () => {
    // return whatever getContext has to return
    return
};