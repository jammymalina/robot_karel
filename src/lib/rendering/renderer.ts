class Renderer {
  constructor(private device: GPUDevice, private ctx: GPUCanvasContext) {
    this.ctx.configure({
      device: this.device,
      format: navigator.gpu.getPreferredCanvasFormat(),
    });
  }
}

async function getRenderer(canvas: HTMLCanvasElement): Promise<Renderer> {
  if (!navigator.gpu) {
    throw new Error("WebGPU not supported on this browser.");
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error("No appropriate GPUAdapter found.");
  }
  const device = await adapter.requestDevice();
  const context = canvas.getContext("webgpu");

  return new Renderer(device, context as GPUCanvasContext);
}

export { Renderer, getRenderer };
