# REAGENT
Web GPU Graphics Pipeline

# Technologies

- Web GPU
- Javascript/Typescript
- Native Graphics APIs
  - HLSL
  - Platform specific APIs, provided by Web GPU's adapters.
    - DirectX
    - Vulkan

# Core Principals

- Ease of Use
- Efficiency

# Key Goals

## Canvas rendering: _TO DO_

The renderer should be able to output the result of the graphics pipeline to a visual canvas on the screen.

_In the future, this can be extended to support multiple canvases for splitscreen, debugging canvases etc._

## Load OBJ Mesh Data: _TO DO_

In order to be a useful graphics framework, reagent will need to be able to load and render standard file formats. These should be exposed via the Reagent API  

[.obj](https://en.wikipedia.org/wiki/Wavefront_.obj_file) is a common export format for 3D models, and includes texture coordinate data, normals and vertex coordinates.
- Vertex coordinates are stored counter-clockwise by default. 
- Vertex positions have no units, but can be scaled within the file data. This is going to be interesting to work out a reasonable ratio algorithm.

## Load textures from PNGs: _TO DO_

To begin to render objects, Reagent will need to be able to load textures from files streamed via the interface. It will then be able to apply them using the coordinates loaded from OBJ files.

These should then both be able to be rendered alongside any lighting, resulting in a shaded object visible in the scene. 

# Long Term Goals

## Shader import _OUT OF SCOPE_

Importing and applying premade materials to textures will be a useful addition to the engine, but will be out of scope until more basic features are implemented.