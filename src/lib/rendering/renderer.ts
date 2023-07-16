class Renderer {
  private adapter: GPUAdapter;

  constructor(adapter: GPUAdapter) {
    this.adapter = adapter;
  }
}

async function getRenderer(): Promise<Renderer> {
  if (!navigator.gpu) {
    throw new Error("WebGPU not supported on this browser.");
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error("No appropriate GPUAdapter found.");
  }

  return new Renderer(adapter);
}

export { Renderer, getRenderer };
