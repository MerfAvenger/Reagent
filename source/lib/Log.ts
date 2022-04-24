const Log = (...messages: Array<string|object>) => {
    let output = "";
    messages.forEach((message: string|object) => {
        output += message;
    });
    console.log(`<Reagent> ${output}`);
}

export default Log;