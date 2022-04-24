import { Renderer } from"./graphics/Renderer";
import { GPUBufferManager } from "./graphics/GpuBuffer/GPUBufferManager";

const init = async () => {
    const adaptor = await getWebAdaptor();
    if(!adaptor) {
        console.error(`No WebGPU adaptor available`);
        return;
    }
    const device = await adaptor.requestDevice();
    const gpuBufferManager = new GPUBufferManager(device);
}

const getWebAdaptor = async () => {
    const adaptor = navigator.gpu && await navigator.gpu.requestAdapter();
    if(!adaptor) {
        return null;
    }

    return adaptor;
}

init();