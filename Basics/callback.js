function data(id, data2) {

    setTimeout(() => {
        console.log("Data", id);
        if (data2) {

            data2();
        }
    }, 3000)
}


data(1, () => data(2, () => data(3, () => data(4))));
