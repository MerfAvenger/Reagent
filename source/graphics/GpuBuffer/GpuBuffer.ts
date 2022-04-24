export class GPUBufferObject {
    private m_instance: GPUBuffer;
    private m_descriptor: GPUBufferDescriptor;
    private m_size: GPUSize64;
    private m_usage: GPUBufferUsageFlags;

    constructor (descriptor: GPUBufferDescriptor, device: GPUDevice) {
        this.descriptor = descriptor;
        this.instance = this.createBuffer(this.descriptor, device);
    }

    public get size(): GPUSize64 {
        return this.m_size;
    }
    private set size(size: GPUSize64) {
        this.m_size = size;
    }

    public get usage(): GPUBufferUsageFlags {
        return this.m_usage;
    }
    private set usage(usage: GPUBufferUsageFlags) {
        this.m_usage = usage;
    }

    public get instance(): GPUBuffer {
        return this.m_instance;
    }
    private set instance(instance: GPUBuffer) {
        this.m_instance = instance;
    }

    public get descriptor(): GPUBufferDescriptor {
        return this.m_descriptor;
    }
    private set descriptor(descriptor: GPUBufferDescriptor) {
        this.m_descriptor = this.descriptor;
    }

    public static CreateDescriptor(size: GPUSize64 = 4, usage: GPUBufferUsageFlags, mappedAtCreation: boolean = true): GPUBufferDescriptor {
        return {
            size,
            usage,
            mappedAtCreation
        }
    }

    private createBuffer(descriptor: GPUBufferDescriptor, device: GPUDevice): GPUBuffer {
        return device.createBuffer(descriptor);
    }
}