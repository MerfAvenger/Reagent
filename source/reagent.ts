import { Renderer } from"./graphics/Renderer";
import { GPUBufferManager } from "./graphics/GpuBuffer/GPUBufferManager";
import Log from "./lib/Log";

const init = async () => {
    Log('Initialising Reagent framework.');

    const adaptor = await getWebAdaptor();
    if(!adaptor) {
        console.error(`No WebGPU adaptor available`);
        return;
    }
    const device = await adaptor.requestDevice();
    Log("Created device.", device);

    const gpuBufferManager = new GPUBufferManager(device);
    Log("Created GPU Buffer Manager", gpuBufferManager);

    gpuBufferManager.createGpuBuffer(
        "gpuWriteBuffer",
        4,
        GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
        true
    );
    Log("Created GPU Buffer: ", gpuBufferManager.getBuffer("gpuWriteBuffer"));

    const arrayBuffer = gpuBufferManager.getBuffer("gpuWriteBuffer").getMappedRange();
    new Uint8Array(arrayBuffer).set([0, 1, 2, 3]);

    gpuBufferManager.getBuffer("gpuWriteBuffer").unmap();
}

const getWebAdaptor = async () => {
    const adaptor = navigator.gpu && await navigator.gpu.requestAdapter();
    if(!adaptor) {
        return null;
    }

    return adaptor;
}

init();