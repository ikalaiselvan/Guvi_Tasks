// Callback Hell:

console.log("kalai")
number = 10;
setTimeout(() => {
    let count = --number;
    document.getElementById("num").innerText = count;
    setTimeout(() => {
        let count = --number;
        document.getElementById("num").innerText = count;
        setTimeout(() => {
            let count = --number;
            document.getElementById("num").innerText = count;
            setTimeout(() => {
                let count = --number;
                document.getElementById("num").innerText = count;
                setTimeout(() => {
                    let count = --number;
                    document.getElementById("num").innerText = count;
                    setTimeout(() => {
                        let count = --number;
                        document.getElementById("num").innerText = count;
                        setTimeout(() => {
                            let count = --number;
                            document.getElementById("num").innerText = count;
                            setTimeout(() => {
                                let count = --number;
                                document.getElementById("num").innerText = count;
                                setTimeout(() => {
                                    let count = --number;
                                    document.getElementById("num").innerText = count;
                                    setTimeout(() => {
                                        document.getElementById("num").innerText =
                                            "Happy Indipendence Day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);