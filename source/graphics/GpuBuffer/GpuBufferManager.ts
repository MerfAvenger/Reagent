import { GPUBufferObject } from "./GPUBuffer";
import { Map } from "../../lib/Map";

export class GPUBufferManager {
    private m_buffers: Map<GPUBufferObject>;
    private m_device: GPUDevice;
    
    public constructor(device: GPUDevice) {
        this.buffers = new Map<GPUBufferObject>();
        this.device = device;
    }

    public get device() {
        return this.m_device;
    }
    private set device(device: GPUDevice) {
        this.m_device = device;
    }

    public get buffers() {
        return this.m_buffers;
    }
    private set buffers(buffers: Map<GPUBufferObject>) {
        this.m_buffers = buffers;
    }

    public getBuffer(id: string): GPUBuffer {
        return this.buffers.contains[id] && this.buffers[id];
    }
    private addBuffer(id: string, buffer: GPUBufferObject) {
        this.buffers.add(id, buffer);
    }

    public createGpuBuffer(id: string, size: GPUSize64, mode: GPUBufferUsageFlags, mappedAtCreation: boolean = true): GPUBufferObject {
        const descriptor = GPUBufferObject.CreateDescriptor(
            size,
            mode, 
            mappedAtCreation
        );

        const buffer = new GPUBufferObject(descriptor, this.device);
        this.addBuffer(id, buffer);

        return buffer;
    };
}