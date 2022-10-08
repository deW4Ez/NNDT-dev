import React from 'react';
import "./Body.css";

const Body = () => {
    return (
        <div className="bodyFrame">
            <div className="section">
                <h2>Developer documentation</h2>
                <hr></hr>
                <h3>Early vision</h3>
                <p>NNDT is a framework for physically informed neural networks and implicit neural representation of 3D objects. The main scope of this code is computational anatomy and computational physiology. We try to implement as many as possible methods from these fields in a neural-powered way. The framework includes basic building blocks, such as data loaders, layers, neural network models, as well as, end-user inference tools. We expect undergraduate students and junior researchers as early adopters of this project. For this reason, it should provide an easy-to-start experience. Also, we expect Ph.D. students, postdocs, and industry researchers as the main target audience for this software. For this reason, a solution must include the most prominent and advanced approach in the target scope.</p>
                <h3>Maintainers and contributors</h3>
                <p>The basic code is based on Vladislav Dordiuk's research notebooks, which were reevaluated and rewritten as a single project by Konstantin Ushenin. Small improvements, quality of code, and CI/CD are being supported by Maksim Dzhigil.</p>

            </div>
            <div className="section">
                <h2>Software architecture</h2>
                <hr></hr>
                <div className="image">
                    <img src="https://github.com/KonstantinUshenin/nndt/raw/main/images/architecture.png?raw=true"></img>
                </div>
                <p><b>Figure 1.</b> The software architecture. Stars mark files that is not implemented in v0.0.1.</p>
                <div className="list">
                    <p>External dependencies:</p>
                    <ul>
                        <li><strong>anytree</strong> helps to implement tree-based data structures</li>
                        <li><strong>vtk</strong> is a most popular library for scientific and medical visualization of 3D and 2D objects</li>
                        <li><strong>haiku</strong> and jax are libraries for deep learning from Google DeepMind</li>
                        <li><strong>matplotlib</strong> is a data visualization library</li>
                    </ul>
                </div>
                <div className="list">
                    <p>Building blocks:</p>
                    <ul>
                        <li><strong>space_model</strong> include classes and functions for the 3D scene representation. These keep data consistent and provide functions to access data.</li>
                        <li><strong>generators</strong> include out-of-the-box data generators for NN training</li>
                        <li><strong>layers</strong> include classes that are inherited from haiku.Modules</li>
                        <li><strong>trainable_task</strong> includes wrappers over Haiku transformations. It joins together NN hyperparameters, data tensors, and functions</li>
                        <li><strong>visualization</strong> and <strong>controllers</strong> are lightweight NN training frameworks with data visualization capabilities</li>
                        <li><strong>baselines</strong> is baseline solvers for a certain type of data</li>
                    </ul>
                </div>
                <div className="list">
                    <p>End-user code:</p>
                    <ul>
                        <li><strong>demos_notebooks</strong> is a collection of Jupiter/Collab tutorials</li>
                        <li><strong>demos_preliminary</strong> and <strong>demos</strong> are long training tasks</li>
                        <li><strong>bash_tools</strong> are command line tools for NNDT</li>
                    </ul>
                </div>

            </div>
            <div className="section">
                <h2>Glossary</h2>
                <hr></hr>
                <ul>
                    <li><strong>NN</strong> is a neural network.</li>
                    <li><strong>SDF</strong> is a signed distance function.</li>
                    <li><strong>SDT</strong> is a signed distance tensor. Wikipedia and some articles name this as the signed distance function field (SDFF). We name this SDT to avoid double FF on the end and to clearly diverge function <span>F(x,y,z,t)=f</span>  from the discrete 3D array <span>f[i_x, i_y, i_z, i_t] = f</span>.</li>
                    <li><strong>PS(ps)</strong> is a physical space. Physical space presents all values in real physical units without scaling or normalization. The correctness of objects in PS is not automatically protected in the space model. Only, the input file correctness keeps this.</li>
                    <li><strong>NS</strong> is a normalized space. All objects here are normalized to boost NN performance. <span>Representers</span> of the space model keep NS consistency when loading data.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Preliminary demos</h2>
                <hr></hr>
                <p>
                    <img src="https://github.com/KonstantinUshenin/nndt/raw/main/images/sdf_multiple_files.png?raw=true"></img>
                </p>
                <p><b>Figure 2.</b> The shape interpolation demo (sdf_multiple_files.py). first and forth shape are original, the second and third are generated by neural network.</p>
                <p>
                    <img src="https://github.com/KonstantinUshenin/nndt/raw/main/images/mesh_segmentation.png?raw=true"></img>
                </p>
                <p><b>Figure 3.</b> The mesh segmentation demo (mesh_segmentation.py). The left image is expected segmentation, and the right is predicted by NN.</p>

            </div>
        </div>
    );
};

export default Body;