let message: string = "Hello World";
console.log(message);

type Print = (name: string | number) => void;

const printHelloWorld: Print = (name: string | number): void => {
  console.log(`Hello world from ${name}`)
}

printHelloWorld(1);