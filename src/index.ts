interface Init {
  message: string;
}

function helloWorld(init: Init): string {
  return init.message;
}

export { helloWorld };
